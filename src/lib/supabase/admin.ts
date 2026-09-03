import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Server-only Supabase client for the contact form (M1-08).
 * Uses `SUPABASE_SECRET_KEY` (the current `sb_secret_...` key format for
 * this project — not the legacy `service_role` JWT name) — must NEVER be
 * imported from a Client Component or exposed as NEXT_PUBLIC_*. Only ever
 * imported from `src/app/api/contact/route.ts` and `src/lib/contact/
 * quota.ts`, both server-only modules, which Next.js never bundles into
 * client JS — no `server-only` package needed for that guarantee here
 * (not an authorized new dependency for this task anyway).
 *
 * Resolved lazily (not at module load) so the app still builds/boots
 * without these env vars configured — see CONTACT_SETUP.md.
 */
export function getSupabaseAdmin(): SupabaseClient | null {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SECRET_KEY;

  if (!url || !key) {
    return null;
  }

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false, detectSessionInUrl: false },
  });
}
