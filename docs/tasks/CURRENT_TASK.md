# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: M1-08
Title: Real contact form + Writing deferral (+ security update: Turnstile, atomic email quota, key rename)
Status: done

## Goal

Implement a production-oriented bilingual Contact section with real
server-side persistence (Supabase) and email notification (Resend), with
independent partial-failure handling, while deferring Writing until
genuine published content exists (no fake articles, no placeholders).

**Revised mid-task**: the production Supabase project was created/modified
after the first implementation pass, requiring reconciliation — see
`docs/DECISIONS.md` ADR-015 (supersedes ADR-014). The env var renamed to
`SUPABASE_SECRET_KEY` (current `sb_secret_...` format), Cloudflare
Turnstile became a required production gate (fails closed), and an atomic
daily email-notification quota (20/day) was added as a hard cost/abuse
safety cap independent of per-IP rate limiting.

## Scope

IN:

- #contact (renumbered 07, since Writing is deferred out of V1)
- real contact form (name/email/phone required, message optional)
- POST /api/contact: validate -> honeypot -> Turnstile -> independent
  (Supabase persist) / (atomic quota reserve -> Resend) channels
- Supabase persistence (server-only, RLS enabled, no browser access)
- atomic daily email quota (`reserve_contact_email_slot` RPC, 20/day)
- Cloudflare Turnstile server-side verification, fail-closed in production
- Resend email notification (independent of DB success/failure)
- EN/PT, responsive, accessible
- Writing removed from nav, marked deferred in docs (not implemented)
- docs/CONTACT_SETUP.md (20-step order)
- .env.example (7 placeholders, no values)
- planning doc updates (PORTFOLIO_SPEC §19/Contact, HOME_WIREFRAME, CONTEXT_MAP)
- new ADR-015 (supersedes ADR-014)
- body-size guard (10KB) before JSON.parse

OUT:

- /writing route, article cards, "coming soon" placeholders
- Footer (later milestone)
- in-memory/Next.js-middleware IP rate limiting (Vercel WAF instead —
  documented as an external, manually-configured production step)
- admin dashboard
- React Hook Form / Zod / Yup / toast / captcha / Turnstile-React-wrapper
  libraries (official Cloudflare script + `next/script` only)
- new testing framework
- SUPABASE_SERVICE_ROLE_KEY (renamed; must not remain in active code/docs)

## External integration status

**CODE COMPLETE — EXTERNAL END-TO-END TEST PENDING.**

No Supabase, Resend, or Turnstile credentials exist in this environment
(no `.env`/`.env.local` file, confirmed). The route handler was verified
to behave correctly in that exact state — both in `next dev` (development,
Turnstile bypass logged and allowed) and `next start` (production, ran a
real production build and server, confirmed Turnstile **fails closed**:
the server log shows exactly `contact: rejected — Turnstile not
configured in production (failing closed)` and, critically, **no**
`database persistence failed`/`notification email not sent` log lines for
that same request — proof the request was stopped at the Turnstile gate
and never reached Supabase/quota/Resend at all, not just coincidentally
producing the same status code). Neither integration was faked as
succeeding.

Also verified live: honeypot still short-circuits before the Turnstile
check even in production mode (confirmed via server log — no new
Turnstile log line for a honeypot-triggered request); the client-side
Turnstile gating logic (submit button disabled until a token exists) was
verified live using Cloudflare's own public test site key
(`1x00000000000000000000AA`, not a real credential — Cloudflare publishes
this specifically for testing) with `NEXT_PUBLIC_TURNSTILE_SITE_KEY` set
temporarily via an inline shell env var (never written to a file): the
submit button was confirmed `disabled` before a token exists. Full live
widget *rendering* (the actual Cloudflare-hosted iframe) could not be
confirmed — this sandbox has no outbound network access to
`challenges.cloudflare.com` (a Playwright `networkidle` wait against it
timed out after 30s; this is an environment/network limitation, not a
code defect — the gating logic itself was still verified independent of
whether the remote script loads).

Live Supabase row persistence, live atomic quota reservation, and live
Resend email delivery have **not** been end-to-end tested — there is
nothing to point at as proof, because nothing was actually sent anywhere.
`docs/CONTACT_SETUP.md` has the exact 20 remaining steps (create Supabase
project, apply both migrations in order, retrieve the current
`SUPABASE_SECRET_KEY`, create Resend account/API key, create a Cloudflare
Turnstile site, configure all 7 variables locally and in Vercel, configure
the Vercel WAF rule for `/api/contact`, then run one real submission and
confirm the row + email + quota row all show up correctly).

## Verification

```bash
npm run verify   # PASS — run 4x across both implementation passes
git diff --check # PASS
git diff -- package.json  # only @supabase/supabase-js + resend (no new
                            # dependency added for Turnstile — official
                            # Cloudflare script + next/script only)
```

Backend behavior verified directly against both `npm run dev` (development
mode) and `npm run start` (a real production build/server), via `curl`,
server-log inspection, and Playwright — not just code review:

- Valid payload, no credentials configured, **development** mode →
  Turnstile bypass logged and allowed through, reaches the independent
  channels, both unconfigured → `503 contact_unavailable` (not a fake
  200).
- Valid payload, no credentials configured, **production** mode (real
  `next start`) → Turnstile **fails closed**, `503 contact_unavailable`,
  confirmed via server log to have never reached Supabase/quota/Resend.
- Invalid payload (name "A", email "not-an-email", phone "123") → `400`
  with per-field messages, no PII echoed back — confirmed to run *before*
  the honeypot/Turnstile checks (validate is first in the pipeline).
- Honeypot (`website`) filled, valid-looking data → `200 {"ok":true}`
  immediately, in both development AND production mode — confirmed via
  server log that no Turnstile check (let alone DB/quota/email) ran for
  that request.
- Invalid `locale` ("fr") → `400`.
- International phone with symbols (`+55 (11) 91234-5678`) → passed
  validation (reached the 503 stage, not a 400) — confirms no
  Brazil-only/country-specific format is enforced.
- Oversized payload (~15KB, a padded `message` field) → `413`, confirmed
  rejected before `JSON.parse` runs (body-size guard).
- Full form fill + submit (Playwright, development mode) → real
  `POST /api/contact` request observed, resolves to the error UI state:
  visible warning-colored message AND a separate always-mounted
  `role="status" aria-live="polite"` sr-only region both receive the
  error text. Form field values are preserved on error (not reset),
  button re-enables for retry.
- Accessibility (Playwright): all 4 fields have correctly associated
  `<label for>`; `autocomplete` is `name`/`email`/`tel` on the three
  required fields; message `<textarea>` has no `required` attribute
  (confirmed optional) and `maxlength="2000"`; honeypot input is
  `display:none` (via a `hidden` wrapper), wrapper `aria-hidden="true"`,
  input `tabindex="-1"`; Tab from the name field skips straight to email
  (honeypot never receives keyboard focus).
- Not captured via automated screenshot: the transient
  `disabled + "Sending..."` button state on a *successful/erroring* fetch
  round-trip specifically — it resolves in well under 100ms locally with
  no integrations configured. The *Turnstile-gated* disabled state (no
  token yet) WAS captured live (see External integration status above),
  which is the more security-relevant of the two "why is this button
  disabled" states.

Manual visual review (headless Chromium via Playwright against
`npm run dev`) at the exact matrix the task specified, re-run after the
security update to confirm no regression from the Turnstile integration
(which correctly renders nothing when unconfigured):

- `/en` 1440, 1024, 768, 390, 360 — all 0px horizontal overflow
- `/pt` 1440, 1024, 768, 390, 360 — all 0px horizontal overflow

(10 combinations, all 0px, both before and after the security update.)
Screenshotted and visually confirmed: left column (supporting copy +
LinkedIn/GitHub/Resume, no Email link) / right column (form) split on
desktop, single-column stack on mobile, no card/shadow/rounded-box
treatment, thin underline field borders, no Turnstile widget visible
(correct — unconfigured in this environment), PT copy fits without
overflow at every width checked.

## Evidence / notes

- **Env var renamed everywhere**: grepped the full repo for
  `SUPABASE_SERVICE_ROLE_KEY` — the only remaining hits are inside
  historical/explanatory text (ADR-014's own "superseded, here's what
  changed" note, ADR-015's explicit rename explanation, `CONTEXT_MAP.md`'s
  "not X, use Y" pointer) — zero hits in actual runtime code, `.env.example`,
  or `CONTACT_SETUP.md`. `src/lib/supabase/admin.ts` now reads
  `SUPABASE_SECRET_KEY`.
- **`service_role` (lowercase, the Postgres role name) is legitimately
  still present** in `supabase/migrations/20260903_add_contact_email_daily_quota.sql`
  (`grant execute on function ... to service_role;`) — this is the actual
  Supabase built-in Postgres role the secret key authenticates as, not a
  leftover reference to the old env var name. Correct and necessary.
- **Migration ordering bug caught before it shipped**: the task's own
  suggested filename (`20260902_add_contact_email_daily_quota.sql`) would
  have sorted *before* `20260902_create_contact_messages.sql`
  lexicographically (`a` < `c`), meaning Supabase would try to run the
  quota migration's `ALTER TABLE contact_messages` before that table
  existed. Fixed by bumping the date prefix to `20260903` — the standard,
  robust fix (each migration gets its own distinct date), not a
  same-day-alphabetical-ordering trick. Documented in ADR-015 as a lesson
  for future migrations.
- **Turnstile fail-closed verified live, not just by code reading**: see
  External integration status above — a real `next start` production
  server was run specifically to test this, since `next dev` always forces
  development mode regardless of `NODE_ENV`.
- **Suppression vs. failure correctly distinguished**: `notification_status`
  now supports `pending`/`sent`/`failed`/`suppressed`. Traced the exact
  logic in `route.ts`: quota-exhausted → `{status: "suppressed"}` →
  stored as `"suppressed"`, `notification_error = null` (not treated as
  an error). `200 {ok:true}` still returned whenever the DB insert
  succeeded, regardless of email outcome — a suppressed notification
  never causes a false `503` as long as the contact itself was stored.
- **Independent channels preserved through the added complexity**: traced
  that `persistContact` and `attemptNotification` (which internally does
  reserve-quota-then-maybe-send) are still started via a single
  `Promise.allSettled` — neither's failure/outcome gates the other being
  attempted. The *sequential* part of the flow (Turnstile before
  everything, quota-reserve before Resend-send within the email channel)
  is a different axis from independence and doesn't contradict it.
- **No PII in logs**: all `console.error`/`console.warn` call sites in
  `route.ts` and `turnstile.ts` pass only `sanitizeError(...)`-wrapped
  strings or static messages — never the raw `contact` object.
- **No HTML injection surface**: notification email remains plain-text
  only (`text:` field, no `html:` field anywhere).
- **RLS confirmed correct on both tables**: `contact_messages` (unchanged
  from the first pass) and the new `contact_email_quota` — both RLS
  enabled, zero policies, explicit `revoke all ... from anon, authenticated`
  on the quota table and on the RPC function itself (`revoke all on
  function reserve_contact_email_slot(integer) from public, anon,
  authenticated; grant execute ... to service_role`).
- **Quota reservation is genuinely atomic**: the RPC's `UPDATE
  contact_email_quota SET used = used + 1 WHERE quota_date =
  v_today AND used < p_limit` is a single statement — Postgres
  acquires a row lock on that day's row during the UPDATE, serializing
  concurrent callers. Not implemented as a separate
  SELECT-count-then-conditionally-write, which would have a race window.
- **No new dependency for Turnstile**: loaded via Cloudflare's official
  `challenges.cloudflare.com/turnstile/v0/api.js` through `next/script`
  (a built-in Next.js component), with an explicit `window.turnstile.render()`
  call (not the auto-render `data-sitekey` div) specifically so the widget
  can be `.reset()` after a failed submission (tokens are single-use/
  short-lived) — confirmed via `git diff -- package.json`, still only
  `@supabase/supabase-js` and `resend`.
- **Vercel WAF documented, not falsely claimed active**: `docs/CONTACT_SETUP.md`
  step 16 explicitly says "it is not active until you actually configure
  it here" — this repository has no way to verify or enforce an external
  platform firewall rule from code.
- **Body-size guard**: 10KB cap, checked via `Content-Length` header
  first (fast rejection) then the actual decoded byte length (defense in
  depth against a missing/spoofed header) — both before `JSON.parse`.
  Documented rationale (generous for the largest realistic payload:
  message ≤2000 chars + other fields + a Turnstile token) in the route's
  own comment and ADR-015.
- **Repo-wide secret grep, precise patterns**: `sb_secret_[A-Za-z0-9]`
  and `re_[A-Za-z0-9]{10,}` (not just the bare prefixes, which would
  false-positive on the intentional `sb_secret_...` format-illustration
  text in `.env.example`/`CONTACT_SETUP.md`/ADR-015) — zero real-looking
  hits anywhere in the repo.
- Reviewer self-review (first pass, before this security update) ran
  against the original diff with a 25-question security checklist:
  verdict **PASS**, 0 BLOCKER/MAJOR, 2 NOTE (no body-size cap — now
  addressed above; a cosmetic mis-tagged validation-error field name on
  an unreachable edge case — unchanged, still low-priority). This
  update's own verification (Turnstile fail-closed, migration ordering,
  atomic quota, key rename) was performed directly by the implementer via
  live `curl`/Playwright/server-log evidence as detailed above, not yet
  re-reviewed by a fresh reviewer pass at the time of this report.

## Final result

- Changed (cumulative across both implementation passes): `src/content/home.ts`
  (Writing removed from nav, `contact` content block), `src/app/[locale]/page.tsx`
  (wires `Contact` in), `.gitignore` (`!.env.example`), `docs/DECISIONS.md`
  (ADR-014 marked superseded, new ADR-015), `docs/planning/PORTFOLIO_SPEC.md`
  §19 (Writing deferred) + §20 (Contact renumbered 07, ADR-015 architecture),
  `docs/planning/HOME_WIREFRAME.md` §28 (Writing deferral) + §30 (Contact
  layout incl. Turnstile widget position), `docs/CONTEXT_MAP.md` (Writing/
  Contact entries, ADR-015 pointer), `package.json`/`package-lock.json`
  (2 dependencies total), `src/lib/supabase/admin.ts` (key rename),
  `src/app/api/contact/route.ts` (rewritten flow), `src/components/forms/ContactForm.tsx`
  (Turnstile widget), `.env.example` (7 variables), `docs/CONTACT_SETUP.md`
  (rewritten, 20-step order).
- New: `src/components/sections/Contact.tsx`, `src/lib/contact/validate.ts`,
  `src/lib/contact/turnstile.ts`, `src/lib/contact/quota.ts`,
  `supabase/migrations/20260902_create_contact_messages.sql`,
  `supabase/migrations/20260903_add_contact_email_daily_quota.sql`.
- Verification: `npm run verify` PASS (run 4x total). `git diff --check`
  PASS. Manual visual check: `/en`/`/pt` at 1440/1024/768/390/360, 0px
  horizontal overflow at every combination, both before and after the
  security update. Backend behavior verified via curl + Playwright +
  server-log inspection against both a development server and a real
  production server (`next start`) — not just code review, and not just
  the development-mode behavior.
- Not done (explicitly, not silently): live Supabase/Resend/Turnstile
  end-to-end test with real credentials — none exist in this environment.
  Live Turnstile widget *rendering* specifically also unconfirmed (no
  outbound network to Cloudflare's CDN in this sandbox) even though the
  surrounding gating logic was verified live with Cloudflare's public test
  key. See "External integration status" above and `docs/CONTACT_SETUP.md`
  for the exact remaining steps, including the Vercel WAF rule which is
  pure external configuration this repo cannot verify.
