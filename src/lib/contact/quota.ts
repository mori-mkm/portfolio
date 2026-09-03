import { getSupabaseAdmin } from "@/lib/supabase/admin";
import { withPgrst303Retry } from "@/lib/supabase/retry";

/**
 * Hard daily ceiling on notification emails — a provider-cost/abuse safety
 * cap independent of the external Vercel WAF rate limit (5 req/IP/10min).
 * Even a distributed attack spread across many IPs can't push Resend usage
 * past this per-day total. See ADR-015 in docs/DECISIONS.md.
 */
export const DAILY_EMAIL_NOTIFICATION_LIMIT = 20;

export type QuotaReservation =
  | { ok: true }
  | { ok: false; reason: "exhausted" }
  | { ok: false; reason: "unavailable"; error: unknown };

/**
 * Atomic reservation via the `reserve_contact_email_slot` Postgres RPC
 * (supabase/migrations/20260903_add_contact_email_daily_quota.sql). That
 * function does a single `UPDATE ... WHERE used < limit`, which
 * acquires a row lock on that day's quota row — concurrent requests are
 * serialized by Postgres itself. Never reimplement this client-side as a
 * separate "SELECT count, then INSERT if under limit" — that has a race
 * window two concurrent requests can both slip through.
 */
export async function reserveEmailQuotaSlot(): Promise<QuotaReservation> {
  const client = getSupabaseAdmin();
  if (!client) {
    return { ok: false, reason: "unavailable", error: new Error("Supabase not configured") };
  }

  const { data, error } = await withPgrst303Retry(
    () => client.rpc("reserve_contact_email_slot", { p_limit: DAILY_EMAIL_NOTIFICATION_LIMIT }),
    (attempt, max) => console.error(`contact: transient Supabase auth failure — retrying (attempt ${attempt}/${max})`),
  );

  if (error) {
    return { ok: false, reason: "unavailable", error };
  }

  return data === true ? { ok: true } : { ok: false, reason: "exhausted" };
}
