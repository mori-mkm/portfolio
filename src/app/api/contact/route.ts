import { NextResponse } from "next/server";
import { Resend } from "resend";

import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { withPgrst303Retry } from "@/lib/supabase/retry";
import { reserveEmailQuotaSlot } from "@/lib/contact/quota";
import { verifyTurnstileGate } from "@/lib/contact/turnstile";
import { isHoneypotTriggered, validateContactPayload, type ValidatedContact } from "@/lib/contact/validate";

/**
 * POST /api/contact — M1-08, security-updated (ADR-015).
 *
 * Order matters: validate -> honeypot -> Turnstile -> (persist + notify,
 * independently). Turnstile must pass before any Supabase insert, quota
 * reservation, or Resend call — a rejected/missing token stops everything
 * downstream. Persistence and notification are then attempted
 * independently via Promise.allSettled, same rationale as before (a
 * Supabase Free project can pause after inactivity) — but "notification"
 * is now itself a two-step atomic-quota-reservation-then-maybe-send, not
 * a direct Resend call: a suppressed (quota-exhausted) email is NOT a
 * failed contact — the message is still safely stored if the DB insert
 * succeeded. No infrastructure error detail (Supabase/Resend/Turnstile
 * internals, stack traces) is ever returned to the client or logged with
 * the submitted PII.
 */
const MAX_BODY_BYTES = 10_000; // generous for name/email/phone/message/locale/turnstileToken; rejects pathological payloads before JSON.parse

export async function POST(request: Request) {
  const contentLength = request.headers.get("content-length");
  if (contentLength && Number(contentLength) > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 413 });
  }

  let rawBody: string;
  try {
    rawBody = await request.text();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }
  if (rawBody.length > MAX_BODY_BYTES) {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 413 });
  }

  let body: unknown;
  try {
    body = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_input" }, { status: 400 });
  }

  const validation = validateContactPayload(body);
  if (!validation.ok) {
    return NextResponse.json(
      { ok: false, error: "invalid_input", fields: validation.errors },
      { status: 400 },
    );
  }

  // Honeypot: pretend success, but do nothing — don't tip off simple bots.
  if (isHoneypotTriggered(body)) {
    return NextResponse.json({ ok: true });
  }

  const turnstileToken = isRecord(body) ? body.turnstileToken : undefined;
  const turnstile = await verifyTurnstileGate(turnstileToken);
  if (!turnstile.ok) {
    if (turnstile.reason === "not_configured_in_production") {
      return NextResponse.json({ ok: false, error: "contact_unavailable" }, { status: 503 });
    }
    return NextResponse.json({ ok: false, error: "verification_failed" }, { status: 400 });
  }

  const contact = validation.data;

  const [dbSettled, emailSettled] = await Promise.allSettled([
    persistContact(contact),
    attemptNotification(contact),
  ]);

  const dbOutcome = dbSettled.status === "fulfilled" ? dbSettled.value : { id: null, error: dbSettled.reason };
  const emailOutcome: EmailOutcome =
    emailSettled.status === "fulfilled" ? emailSettled.value : { status: "failed", error: emailSettled.reason };

  if (dbOutcome.error) {
    console.error("contact: database persistence failed —", sanitizeError(dbOutcome.error));
  }
  if (emailOutcome.status === "failed" || emailOutcome.status === "unconfigured") {
    console.error("contact: notification email not sent —", sanitizeError(emailOutcome.error));
  }

  // Best-effort status bookkeeping — only possible when a row was created.
  if (dbOutcome.id) {
    if (emailOutcome.status === "sent") {
      await updateNotificationStatus(dbOutcome.id, "sent", null);
    } else if (emailOutcome.status === "suppressed") {
      await updateNotificationStatus(dbOutcome.id, "suppressed", null);
    } else {
      await updateNotificationStatus(dbOutcome.id, "failed", sanitizeError(emailOutcome.error));
    }
  }

  const success = Boolean(dbOutcome.id) || emailOutcome.status === "sent";
  if (!success) {
    return NextResponse.json({ ok: false, error: "contact_unavailable" }, { status: 503 });
  }

  return NextResponse.json({ ok: true });
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

async function persistContact(contact: ValidatedContact): Promise<{ id: string | null; error: unknown }> {
  const client = getSupabaseAdmin();
  if (!client) {
    return { id: null, error: new Error("Supabase not configured") };
  }

  const { data, error } = await withPgrst303Retry<{ id: string }>(
    () =>
      client
        .from("contact_messages")
        .insert({
          name: contact.name,
          email: contact.email,
          phone: contact.phone,
          message: contact.message,
          locale: contact.locale,
        })
        .select("id")
        .single(),
    (attempt, max) => console.error(`contact: transient Supabase auth failure — retrying (attempt ${attempt}/${max})`),
  );

  if (error || !data) {
    return { id: null, error };
  }

  return { id: data.id as string, error: null };
}

type EmailOutcome =
  | { status: "sent" }
  | { status: "suppressed" }
  | { status: "failed"; error: unknown }
  | { status: "unconfigured"; error: unknown };

/**
 * Reserve a daily quota slot first (atomic RPC — see quota.ts), then send
 * only if a slot was actually reserved. Quota exhaustion is "suppressed",
 * not "failed" — the contact itself may still be safely stored by the
 * independent persistContact() call; suppression only means Matheus
 * won't get an immediate email for this one, not that it was lost.
 */
async function attemptNotification(contact: ValidatedContact): Promise<EmailOutcome> {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const to = process.env.CONTACT_NOTIFICATION_EMAIL;

  if (!apiKey || !from || !to) {
    return { status: "unconfigured", error: new Error("Resend not configured") };
  }

  const reservation = await reserveEmailQuotaSlot();
  if (!reservation.ok) {
    if (reservation.reason === "exhausted") {
      return { status: "suppressed" };
    }
    return { status: "failed", error: reservation.error };
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: contact.email,
      subject: `Portfolio contact${contact.locale === "pt" ? " [PT]" : ""} — ${contact.name}`,
      text: buildNotificationText(contact),
    });

    if (error) {
      return { status: "failed", error };
    }
    return { status: "sent" };
  } catch (error) {
    return { status: "failed", error };
  }
}

async function updateNotificationStatus(
  id: string,
  status: "sent" | "failed" | "suppressed",
  notificationError: string | null,
): Promise<void> {
  const client = getSupabaseAdmin();
  if (!client) return;

  const { error } = await withPgrst303Retry(
    () =>
      client
        .from("contact_messages")
        .update({
          notification_status: status,
          notification_error: notificationError,
        })
        .eq("id", id),
    (attempt, max) => console.error(`contact: transient Supabase auth failure — retrying (attempt ${attempt}/${max})`),
  );

  if (error) {
    console.error("contact: notification status update failed —", sanitizeError(error));
  }
}

function buildNotificationText(contact: ValidatedContact): string {
  return [
    "NEW PORTFOLIO CONTACT",
    "",
    "Name:",
    contact.name,
    "",
    "Email:",
    contact.email,
    "",
    "Phone:",
    contact.phone,
    "",
    "Message:",
    contact.message ?? "(no message)",
    "",
    "Locale:",
    contact.locale.toUpperCase(),
    "",
    "Received:",
    new Date().toISOString(),
  ].join("\n");
}

/**
 * Error class/message only — never the submitted name/email/phone/message.
 * A failed Supabase call (e.g. `.insert().select()`) rejects with a
 * `PostgrestError`-shaped plain object ({ code, message, details, hint }),
 * not an `Error` instance — without this branch those fields were silently
 * dropped and every Supabase failure logged as "unknown error", hiding the
 * actual PostgREST error code (M1-08 live-401 debugging, 2026-09-03).
 */
function sanitizeError(error: unknown): string {
  if (error instanceof Error) return error.message.slice(0, 300);
  if (typeof error === "string") return error.slice(0, 300);
  if (isRecord(error) && (typeof error.message === "string" || typeof error.code === "string")) {
    const code = typeof error.code === "string" ? error.code : "?";
    const message = typeof error.message === "string" ? error.message : "";
    const hint = typeof error.hint === "string" ? ` hint=${error.hint}` : "";
    return `[${code}] ${message}${hint}`.slice(0, 300);
  }
  return "unknown error";
}
