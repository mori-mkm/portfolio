# Contact form — external setup

> This file must never contain real credentials, only instructions and
> environment variable **names**. See `.env.example` for the exact names.

The contact form (`src/app/api/contact/route.ts`) verifies each submission
with Cloudflare Turnstile, persists it to Supabase, and sends an immediate
email notification via Resend, capped by a hard atomic daily quota. See
`docs/DECISIONS.md` ADR-015 for the full architecture and why each piece
exists (short version: Turnstile blocks bots before anything else runs; the
daily quota is a cost/abuse safety cap independent of per-IP rate limiting;
Supabase persistence and the email attempt are independent of each other so
neither's outage silently drops a real contact).

## 1. Create a Supabase project

Create a project at supabase.com (the Free tier is sufficient for this).

## 2. Apply both migrations

Run, in order:

1. `supabase/migrations/20260902_create_contact_messages.sql`
2. `supabase/migrations/20260903_add_contact_email_daily_quota.sql`

Either via the Supabase SQL Editor (paste each file's contents and run it,
in the order above — the second depends on the first) or the Supabase CLI
(`supabase db push`, if linked to the project). Together they create
`contact_messages` and `contact_email_quota`, both RLS-enabled with **no**
public/anonymous policies, plus the `reserve_contact_email_slot()` RPC —
every access comes from the server using the secret key, never the browser.

## 3. Obtain the Project URL

Supabase dashboard → Project Settings → API → "Project URL". This becomes
`SUPABASE_URL`.

## 4. Obtain the current secret key (`sb_secret_...`)

Same page → API keys → the current secret key (format `sb_secret_...`).
This becomes `SUPABASE_SECRET_KEY`.

**This key bypasses Row Level Security — never expose it to the browser,
never prefix it with `NEXT_PUBLIC_`, never commit it.** It is only ever
read server-side, in `src/lib/supabase/admin.ts`.

## 5. Create a Resend account

Create an account at resend.com.

## 6. Create a sending API key

Resend dashboard → API Keys → create one with "Sending access". This
becomes `RESEND_API_KEY`.

## 7. Configure `RESEND_FROM_EMAIL`

The "From" address the notification email is sent from. For local testing,
Resend provides an allowed test sender you can use without verifying a
domain (check your Resend dashboard for the current one — do not hardcode
`onboarding@resend.dev` as a production assumption, it's a shared testing
address, not yours). For production, see step 17 (domain verification).

## 8. Configure `CONTACT_NOTIFICATION_EMAIL`

The address that receives new contact notifications. Never commit this
value; it stays in `.env.local` / your deployment platform's environment
variable settings only.

## 9. Create a Cloudflare Turnstile site

Cloudflare dashboard → Turnstile → Add a site. Add both your local dev
origin (e.g. `localhost`) and your production domain as allowed hostnames.

## 10. Obtain the site key

From the Turnstile site you just created — this becomes
`NEXT_PUBLIC_TURNSTILE_SITE_KEY`. Site keys are meant to be public (they're
embedded in the client-rendered widget), unlike the secret key below.

**Important:** `NEXT_PUBLIC_*` variables are inlined into the client
bundle at **build time**, not read at request time. Set this value before
running `npm run build` / before Vercel's deploy build — adding it to a
running server's environment afterward has no effect until the next build.

## 11. Obtain the Turnstile secret

Same Turnstile site → the secret key. This becomes `TURNSTILE_SECRET_KEY`.

**Server-only — never exposed to the browser.** In production, if this is
missing, the contact form **fails closed** (rejects all submissions)
rather than silently skipping verification — see
`src/lib/contact/turnstile.ts`. Local development without this set is an
explicit, logged, documented bypass, not a production behavior.

## 12. Configure `.env.local`

Copy `.env.example` to `.env.local` (already gitignored) and fill in all
seven values from steps 3-4, 6-8, and 10-11.

## 13. Run a local end-to-end test

With `.env.local` filled in, run `npm run dev`, open `/en#contact` or
`/pt#contact`, complete the Turnstile widget, and submit the form with
obviously identifiable test data (e.g. name "Test Contact", a real email
you can check). Confirm the form shows the success state.

## 14. Create/deploy the Vercel project

Connect the repository in Vercel if not already done.

## 15. Set production environment variables

Vercel dashboard → your project → Settings → Environment Variables. Add
all seven: `SUPABASE_URL`, `SUPABASE_SECRET_KEY`, `RESEND_API_KEY`,
`RESEND_FROM_EMAIL`, `CONTACT_NOTIFICATION_EMAIL`,
`NEXT_PUBLIC_TURNSTILE_SITE_KEY`, `TURNSTILE_SECRET_KEY`. The app builds
fine without them (all are read at request time, except
`NEXT_PUBLIC_TURNSTILE_SITE_KEY` which must be set **before** the build —
see step 10), but the contact form returns `contact_unavailable` until
they're set, and in production specifically **rejects every submission**
if `TURNSTILE_SECRET_KEY` is missing (fail-closed, not a silent bypass).

## 16. Configure the Vercel WAF rate limit for `/api/contact`

Vercel dashboard → your project → Firewall (WAF) → add a rate-limiting
rule scoped to the path `/api/contact`: **5 requests per IP per 10
minutes**. This is external, platform-level protection — it is not
implemented in application code (an in-memory limiter would not work
correctly across serverless instances/cold starts), and it is not active
until you actually configure it here. The daily email quota
(`reserve_contact_email_slot`, 20/day) is a separate, independent safety
layer that holds even against a distributed attack spread across many
IPs — this WAF rule and the quota are complementary, not redundant.

## 17. Verify a sending domain for production

Before relying on this in production, verify your own domain in Resend
(dashboard → Domains → Add Domain, then add the DNS records it gives you).
Once verified, set `RESEND_FROM_EMAIL` to an address on that domain (e.g.
`contact@yourdomain.com`). Sending from an unverified domain is fine for
local testing only.

## 18. Production test

After deploying with all seven environment variables set and the WAF rule
configured, repeat step 13 against the production URL.

## 19. Confirm the `contact_messages` row

Supabase dashboard → Table Editor → `contact_messages`. Confirm a new row
exists with your test data, `notification_status` = `sent` (or `failed`/
`suppressed` with a `notification_error` if applicable — the row still
persists either way). Delete the test row once confirmed if you don't want
test data sitting in the table.

## 20. Confirm the notification email arrives

Check the inbox at `CONTACT_NOTIFICATION_EMAIL`. The email is plain text,
subject `Portfolio contact — Test Contact` (or `Portfolio contact [PT] —
...` if submitted from `/pt`), and its Reply-To is set to the email
address you submitted — replying to it should go straight to that test
address. Also spot-check `contact_email_quota` in the Table Editor — there
should be a row for today's UTC date with `used` incremented by 1.

## Notes

- **Supabase Free plan**: projects can be paused after a period of
  inactivity. This is exactly why the database insert and the email
  attempt (quota reservation + Resend) are independent
  (`Promise.allSettled`, not chained) — if the database is temporarily
  unavailable, the notification email can still go out (if a quota slot
  is available), and vice versa. See ADR-015.
- **Daily email quota is a hard cap, not a courtesy**: once 20
  notifications have gone out in a UTC day, the 21st (and beyond) are
  intentionally **suppressed**, not failed — the contact is still stored
  if persistence succeeded, but no immediate email is sent for it. This
  protects against both cost and abuse even if the Vercel WAF rate limit
  is somehow bypassed or misconfigured.
- **Spam protection layers, from first to last**: honeypot (`website`
  field) → Cloudflare Turnstile (server-verified) → Vercel WAF (5 req/IP/
  10min, external, manually configured) → daily email quota (20/day,
  atomic). None of these individually is "enterprise-grade distributed
  rate limiting" — together they're a reasonable baseline for a personal
  portfolio's contact form, not a claim of bulletproof protection.
