/**
 * Cloudflare Turnstile server-side verification (M1-08 security update,
 * ADR-015). Must run before any Supabase insert / quota reservation /
 * Resend call — verification failure must short-circuit everything else.
 *
 * Fail-closed policy: in production, a missing `TURNSTILE_SECRET_KEY`
 * rejects the contact outright (never silently bypasses verification).
 * In non-production, a missing secret is an explicit, logged,
 * documented bypass — so local development doesn't require real
 * Turnstile credentials to exercise the rest of the form.
 */
const SITEVERIFY_URL = "https://challenges.cloudflare.com/turnstile/v0/siteverify";

export type TurnstileGateResult =
  | { ok: true }
  | { ok: false; reason: "invalid_token" | "not_configured_in_production" };

export async function verifyTurnstileGate(token: unknown): Promise<TurnstileGateResult> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      console.error("contact: rejected — Turnstile not configured in production (failing closed)");
      return { ok: false, reason: "not_configured_in_production" };
    }
    console.warn("contact: Turnstile not configured — allowing through (development-only bypass)");
    return { ok: true };
  }

  if (typeof token !== "string" || token.length === 0) {
    return { ok: false, reason: "invalid_token" };
  }

  try {
    const response = await fetch(SITEVERIFY_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const result: unknown = await response.json();
    const success =
      typeof result === "object" && result !== null && (result as { success?: unknown }).success === true;
    return success ? { ok: true } : { ok: false, reason: "invalid_token" };
  } catch {
    return { ok: false, reason: "invalid_token" };
  }
}
