# Architecture and Product Decisions

> Append-only decision log for choices that materially affect future work. Do not rewrite accepted decisions; supersede them with a new ADR.

## Template

### ADR-XXX — `<DECISION TITLE>`

**Date:** `YYYY-MM-DD`
**Status:** `proposed | accepted | superseded | rejected`

**Context**

`<WHY A DECISION WAS NEEDED>`

**Decision**

`<WHAT WAS DECIDED>`

**Alternatives considered**

- `<ALTERNATIVE>` — `<WHY NOT>`

**Consequences**

Positive:

- `<BENEFIT>`

Negative / trade-off:

- `<COST>`

**Verification / follow-up**

- `<HOW WE WILL KNOW THE DECISION WORKS>`

---

## Decisions

### ADR-001 — English is the canonical default locale

**Date:** 2026-09-01
**Status:** accepted

**Context**

The portfolio is bilingual (EN/PT). A default must be chosen for the root route and for locale fallback.

**Decision**

`/` redirects to `/en`. All public content lives under locale-prefixed routes (`/en`, `/pt`). English is canonical; Portuguese is the secondary, fully maintained locale.

**Alternatives considered**

- Detect browser locale and redirect dynamically — rejected for V1: adds complexity and non-deterministic SEO behavior for a single-author portfolio with a clear target audience.

**Consequences**

Positive: predictable canonical URL for sharing/SEO; simple routing logic.
Negative / trade-off: PT-BR visitors get one extra redirect hop from `/`.

**Verification / follow-up**

- `src/app/page.tsx` redirects to `/en`; covered by M1-02 acceptance criteria (`/` still redirects to `/en`).

---

### ADR-002 — One bilingual codebase, not per-locale pages

**Date:** 2026-09-01
**Status:** accepted

**Context**

Maintaining two near-identical codebases per locale would double maintenance cost for a single-author project.

**Decision**

EN/PT share the same components. Localized content is data (typed content modules under `src/content`), not duplicated page/component trees.

**Alternatives considered**

- Separate page trees per locale — rejected: duplicated logic, higher drift risk, no real benefit at this scale.

**Consequences**

Positive: one place to fix bugs/layout issues for both locales.
Negative / trade-off: content modules must be kept structurally symmetric between locales (a missing PT key silently falls back or breaks — needs discipline, not tooling, in V1).

**Verification / follow-up**

- Acceptance criteria for UI tasks include explicit EN/PT checks (see `docs/tasks/CURRENT_TASK.md`).

---

### ADR-003 — No external i18n library in V1

**Date:** 2026-09-01
**Status:** accepted

**Context**

Only two locales, no pluralization/ICU complexity, no CMS. A full i18n library (next-intl, i18next, etc.) is more machinery than the current content model needs.

**Decision**

Keep the lightweight hand-rolled locale strategy (`src/lib/i18n.ts` + typed content modules) unless real complexity gives evidence a library is warranted.

**Alternatives considered**

- `next-intl` — rejected for now: adds a dependency and config surface with no current pluralization/formatting need.

**Consequences**

Positive: zero extra dependency, full control, minimal bundle impact.
Negative / trade-off: no built-in ICU message formatting if content complexity grows later; would require a migration.

**Verification / follow-up**

- Revisit if a third locale is added or content requires plural/number/date formatting rules.

---

### ADR-004 — Tailwind CSS 4 with CSS variables for design tokens

**Date:** 2026-09-01
**Status:** accepted

**Context**

Tailwind CSS 4 supports CSS-variable-based theming without a JS config file.

**Decision**

Do not introduce a legacy `tailwind.config.js/ts` unless a technical need (e.g. a plugin requiring JS config) forces it. Design tokens (color system, type scale, spacing per `docs/planning/PORTFOLIO_SPEC.md` §22-27) are expressed as CSS variables in `src/app/globals.css`.

**Alternatives considered**

- Legacy JS config — rejected: unnecessary indirection under Tailwind 4's CSS-first configuration model.

**Consequences**

Positive: tokens live close to CSS, less config duplication.
Negative / trade-off: some Tailwind ecosystem plugins assume a JS config; would need re-evaluation if one becomes necessary.

**Verification / follow-up**

- `npm run build` succeeding with the CSS-based token setup is the ongoing check.

---

### ADR-005 — Server Components by default

**Date:** 2026-09-01
**Status:** accepted

**Decision**

Use Client Components only at real interactive boundaries (mobile menu, language switcher, any future client-only state). Do not mark whole pages/sections `"use client"` to enable one small interactive element.

**Alternatives considered**

- Client-first, opt into server where convenient — rejected: this is a mostly-static content site; server-first minimizes shipped JS by default.

**Consequences**

Positive: smaller client bundles, faster initial load.
Negative / trade-off: requires deliberate boundary drawing during implementation; reviewer must check for unnecessary `"use client"` (see `.claude/agents/reviewer.md`).

**Verification / follow-up**

- Reviewer checklist includes "no needless Client Components".

---

### ADR-006 — Vercel is the deployment target

**Date:** 2026-09-01
**Status:** accepted

**Decision**

Deploy to Vercel once V1 scope is ready. Not yet configured.

**Alternatives considered**

- Not evaluated in depth; Vercel is the default for Next.js and no constraint argues against it.

**Consequences**

Positive: first-party Next.js support, zero-config for most of this stack.
Negative / trade-off: none identified yet.

**Verification / follow-up**

- Tracked as BACKLOG M5-01.

---

### ADR-007 — Evidence before prominence

**Date:** 2026-09-01
**Status:** accepted

**Decision**

A project only receives visual/positional prominence on the Home or in Selected Work when defensible evidence (metrics, links, verifiable outcomes) exists for it, per `docs/planning/PORTFOLIO_SPEC.md` §3.4 (Evidence-first) and §10.4/§10.5.

**Alternatives considered**

- Feature projects by narrative appeal alone — rejected: contradicts the evidence-first UX principle and risks unverifiable claims (also see ADR governing content voice in the spec, §38-39).

**Consequences**

Positive: content stays credible and defensible in an interview/review context.
Negative / trade-off: some visually interesting projects (e.g. AI Closer, DemandVision) stay deprioritized until evidence exists — tracked in BACKLOG V1.1/V2.

**Verification / follow-up**

- Reviewer checklist includes "no invented professional claims".

---

### ADR-008 — Minimal, technical, editorial visual identity

**Date:** 2026-09-01
**Status:** accepted

**Decision**

Follow `docs/planning/PORTFOLIO_SPEC.md` §22 (Identidade visual) and the reference critiques in §2. Avoid cyberpunk/neon/AI-gradient aesthetics, fake terminal UI, excessive badges, skill bars, and unnecessary animation.

**Alternatives considered**

- Generic "AI portfolio template" look — rejected explicitly by the product spec's own reference analysis (§2.2, §2.3 "what not to copy").

**Consequences**

Positive: differentiated, credible visual identity aligned with target audience (technical hiring, not general public).
Negative / trade-off: less visually flashy than template-driven alternatives; relies on typography/content quality to carry impact.

**Verification / follow-up**

- Reviewer checklist includes "no AI-template aesthetics inconsistent with spec" and "no excessive animation".

---

### ADR-009 — Harness maturity: Level 2, selective Level 3

**Date:** 2026-09-01
**Status:** accepted

**Context**

This is a single-author portfolio project. Full multi-agent orchestration by default would add coordination cost without a matching benefit at this scale.

**Decision**

Standard flow is single-agent: understand -> plan -> implement -> verify -> review -> update state (Level 2, verified goal loops with `npm run verify` as the baseline verifier). Subagents (planner/implementer/reviewer/researcher) are used only when the delegation test in `docs/AGENTIC_ENGINEERING.md` is clearly met — not as default behavior.

**Alternatives considered**

- Always decompose via planner/implementer/reviewer — rejected: coordination overhead exceeds benefit for most tasks at this project's size.

**Consequences**

Positive: lower token cost per task, less coordination overhead, faster iteration.
Negative / trade-off: larger tasks (e.g. a full milestone) still benefit from explicit planning; that remains a deliberate per-task choice, not automatic.

**Verification / follow-up**

- Track (informally) whether tasks that skipped planning had to be redone — if so, lower the bar for when planning is used.

---

### ADR-010 — Existing planning docs are the product sources of truth

**Date:** 2026-09-01
**Status:** accepted

**Context**

The project already had three detailed, pre-existing product documents (`PORTFOLIO_SPEC.md`, `HOME_WIREFRAME.md`, `PROJECT_CONTENT.md`) before this harness migration, duplicated in both `docs/` and `docs/planning/`.

**Decision**

Do not create a `docs/PROJECT_SPEC.md` from the generic harness template — it would duplicate `PORTFOLIO_SPEC.md` and create two sources of truth. `docs/planning/{PORTFOLIO_SPEC,HOME_WIREFRAME,PROJECT_CONTENT}.md` are canonical; the root-level `docs/*.md` duplicates were removed (confirmed byte-identical, ignoring line endings, before deletion).

**Alternatives considered**

- Merge everything into one generic `PROJECT_SPEC.md` — rejected: would lose the existing structure (product/UX vs. spatial wireframe vs. content) that the author already built deliberately, for no benefit.

**Consequences**

Positive: single source of truth per concern, no merge/reconciliation work, no risk of the two copies drifting.
Negative / trade-off: `docs/CONTEXT_MAP.md` is now required to keep navigation of these large documents cheap (they total roughly 11,000 lines combined).

**Verification / follow-up**

- No file in the repo should reference `docs/PROJECT_SPEC.md`, `docs/HOME_WIREFRAME.md`, `docs/PORTFOLIO_SPEC.md`, or `docs/PROJECT_CONTENT.md` (the removed root paths) — verified by grep during this migration; recheck if broken later.

---

### ADR-011 — Personal/HR-sensitive source documents stay out of the repo

**Date:** 2026-09-01
**Status:** accepted

**Context**

The user's "master resume / evidence base" document (used to derive tailored resumes and, later, Experience/Selected Work content) contains PII (phone number, personal email) and internal instructions written for an AI, not for public reading. The `mori-mkm/portfolio` repo is public.

**Decision**

Do not commit the master resume/evidence document (or any future document with PII or private instructions) into this repository, even privately-scoped subfolders, since the repo itself is public. The user will provide a redacted copy (no phone/email) if/when this content needs to live in the repo; until then, this material is used only as conversational/session input for future milestones (M1-03 Selected Work, M1-05 Experience) and is not persisted into the codebase.

**Alternatives considered**

- Commit as-is to a `docs/private/` folder — rejected: a public repo has no real "private" folder: git history is public regardless of naming.
- Make the repo private — user's choice was to keep it public and redact instead.

**Consequences**

Positive: no PII or internal AI-instruction leakage in a public, portfolio-facing repository.
Negative / trade-off: the master document's full context isn't available to a future session unless re-supplied; a redacted version (once provided) should be added to a clearly-named non-public-facing location (e.g. `docs/private/` is fine once the repo itself is confirmed not to expose it, or kept purely local to the user's machine, not the repo, if in doubt).

**Verification / follow-up**

- Do not write the originally-uploaded (non-redacted) master resume file to any path under the repository.
- When the user sends a redacted copy, confirm it truly excludes phone/email before adding it anywhere `git`-tracked.

---

### ADR-012 — Home content exclusivity

**Date:** 2026-09-01
**Status:** accepted

**Context**

Repeating the same strongest projects/studies in Selected Work, Case Studies and (later) Research creates redundancy and weakens the editorial narrative. Selected Work originally featured all 4 V1 projects (incl. Steel Indicator), and Case Studies originally featured Procurement Intelligence + Steel Indicator — meaning Procurement and Steel were each planned to appear twice on the same Home page.

**Decision**

Each named project/study has exactly one primary Home section. Current allocation:

Selected Work:
- Procurement Intelligence
- Application Job
- Employee Attrition Prediction

Case Studies:
- Steel Indicator
- Developer Market Research / CNN Brasil

Experience may reference a company/job context (e.g. Rocketseat as employment) but must not reproduce a full project/case-study treatment already given elsewhere. Future content (FarmAI/Santander Hackathon, Retail Sales Forecasting, UFSCar, Closer AI, etc.) must be assigned to one narrative section before implementation, not added opportunistically to whichever section is being worked on.

**Alternatives considered**

- Keep Steel in both Selected Work and Case Studies — rejected: directly repeats the same project's evidence in two sections of the same page, diluting both.
- Also feature Procurement in Case Studies (as originally planned) — rejected once the exclusivity rule was adopted: Procurement's Selected Work treatment (5.7M+ transactions, 124 tests, live dashboard) already carries its strongest evidence; a second card would be redundant, not additive.

**Consequences**

Positive: each Home section has a distinct narrative job (Selected Work = "what did I build", Case Studies = "how did I think about the problem"), no visitor sees the same project pitched twice.
Negative / trade-off: Selected Work is one project shorter (3 instead of 4) — accepted per the task brief ("do not force a fourth project merely for symmetry"). The Developer Market Research / CNN Brasil case study has less concrete engineering evidence than a code project (no repo, no tests) — mitigated by keeping its claims hedged (see `src/content/home.ts` and `PROJECT_CONTENT.md` §58's evidence-safety rules): no unverified authorship claims.

**Correction (M1-06, 2026-09-01):** the note above originally said the 5,000+ quantitative responses / ~50 qualitative interviews figures could NOT be attributed to this CNN study without documented proof. The evidence base has since been clarified: those figures (5,000+ responses, ~50 interviews, 60+ hours of interviews, 6 personas) do belong to the persona research that had external repercussion and was cited by CNN in coverage about the developer/programmer profile in Brazil. This correction is documentation-only — the rendered Case Study copy in `src/content/home.ts` was deliberately NOT changed to add these figures (no visual/content redesign of Case Studies in M1-06), and the figures are still not duplicated in any other Home section (Research & Recognition, Experience) per the exclusivity rule below.

**Verification / follow-up**

- `docs/planning/PROJECT_CONTENT.md` §2, §17, §57-58, §79-82 and `PORTFOLIO_SPEC.md` §10.2-10.3, §13.2 updated to match (M1-04).
- Before adding any new named project/study to any Home section later, check it isn't already featured elsewhere on Home.
- M1-06 added Research & Recognition (ADR-013) — Wavelet thesis, FarmIA, Retail Sales Forecasting. None of these, nor the CNN research figures above, are duplicated across sections.
- **Superseded in part by ADR-016 (2026-09-05):** Application Job was removed from Selected Work entirely (not reassigned to another section). The "Current allocation" list above is a historical record of the allocation as decided on 2026-09-01 — see ADR-016 for the current Selected Work membership.

---

### ADR-013 — Research & Recognition allocation

**Date:** 2026-09-01
**Status:** accepted

**Context**

The original `05 / Research` section (HOME_WIREFRAME §24-25, PORTFOLIO_SPEC §16) was designed before ADR-012 and its candidate topics — Economic Index Construction, Shapley Driver Decomposition, Survival Analysis for Workforce Dynamics, Forecasting Workforce Dynamics — now overlap content already placed elsewhere on Home: the first two belong narratively to Steel Indicator (Case Studies), and the latter two came from the professional/People Analytics context now covered by Experience (Banco BV) and would also risk echoing Employee Attrition Prediction (Selected Work).

**Decision**

Section 05 becomes `Research & Recognition` and contains exactly three unique items, in a deliberate (non-chronological) editorial order:

Research / 01 — Wavelet Multivariate Time Series Analysis (UFSCar undergraduate thesis)
Recognition / 01 — FarmIA — Santander Data Challenge (1st place)
Research / 02 — Retail Sales Forecasting (Digital House final project)

The Header nav label stays `Research` / `Pesquisa` (unchanged, `#research` anchor) — only the section's own heading is the expanded name.

**Alternatives considered**

- Keep the original 4-topic Research wireframe — rejected: directly conflicts with ADR-012 (Home content exclusivity); Economic Index/Shapley would duplicate Steel Indicator, Survival Analysis/Workforce Forecasting would duplicate Experience/Employee Attrition territory.
- Add a fourth generic "UFSCar academic portfolio" row for broader coursework — rejected: the undergraduate thesis already provides the strongest, most specific academic evidence; a broad low-signal repository row would dilute it, not add to it.

**Consequences**

Positive: Research & Recognition now shows three kinds of evidence that appear nowhere else on Home — academic/statistical depth, external recognition, and foundational forecasting work — reinforcing rather than repeating the rest of the page.
Negative / trade-off: no Steel methodology topics duplicated here; no Banco BV workforce analytics duplicated here; CNN research remains Case Studies-only (not moved here, not duplicated); Closer AI remains excluded until it has real evidence (ADR-007); UFSCar's broader coursework is not treated as another Home feature; the ~60-hour UFSCar teaching experience is not added in this milestone (deferred to a future Capabilities/About revision if ever used).

**Verification / follow-up**

- `docs/planning/PORTFOLIO_SPEC.md` §16, `HOME_WIREFRAME.md` §24-25, `PROJECT_CONTENT.md` (new Research & Recognition block), and `docs/CONTEXT_MAP.md` updated to match (M1-06).
- Before adding a fourth Research & Recognition item later (e.g. UFSCar teaching), check ADR-012's exclusivity rule and confirm it doesn't already have a narrative home.

---

### ADR-014 — Contact form backend: Supabase + Resend, independent delivery channels

**Date:** 2026-09-02
**Status:** superseded by ADR-015 (2026-09-02, same day — the production Supabase project changed key model and added quota/Turnstile infrastructure before this ADR was ever acted on outside code review). Kept for history; do not implement against this version — see ADR-015 for the current architecture (env var name `SUPABASE_SECRET_KEY` not `SUPABASE_SERVICE_ROLE_KEY`, Turnstile gate, email quota, revised status semantics).

**Context**

Through M1-07 this project was a static content site — no backend, no database, no third-party services beyond static external links (GitHub/LinkedIn/a Google Doc resume). M1-08 introduces a real contact form: the product decision is that direct links alone (the pre-M1-08 plan) are no longer sufficient, and a working form with server-side persistence and email notification is part of V1. This is the first backend/infrastructure decision in the project and materially changes what "the app" depends on to function (external services, environment configuration, a database schema) — worth recording explicitly rather than leaving implicit in the code.

**Decision**

Browser submits to `POST /api/contact` (a Next.js Route Handler) — never directly to Supabase. The handler validates server-side (authoritative; client-side HTML constraints are UX only), then attempts two delivery channels **independently**, not chained:

1. **Supabase Postgres** (`contact_messages` table, RLS enabled, zero public/anonymous policies — every read/write goes through the service-role key, server-only, never `NEXT_PUBLIC_*`) for persistence.
2. **Resend** for an immediate plain-text email notification, Reply-To set to the visitor's submitted email.

Both are started via `Promise.allSettled`, not `await`ed sequentially with an early return — a failure in one must never skip or block an attempt at the other. The visitor sees success (`200 {ok:true}`) if *either* channel got the message through; only `503 {ok:false, error:"contact_unavailable"}` when *both* fail. No infrastructure error detail (Supabase/Resend internals, stack traces, API keys) is ever returned to the client or logged alongside the submitted PII (name/email/phone/message) — server logs record only a sanitized error class/message.

Both integrations resolve their client lazily at request time (`getSupabaseAdmin()` / `new Resend(...)` inside the handler), never at module import time — the app must build and boot with zero environment variables configured; the route simply returns `contact_unavailable` until they're set (see `docs/CONTACT_SETUP.md`).

Baseline anti-spam only in V1: server validation + a honeypot field (`website`) + strict length limits. No rate limiting, no Redis/Upstash, no CAPTCHA. Cloudflare Turnstile is the documented next hardening step if bot traffic becomes a real problem — the form is structured so a token field could be added later without a rewrite, but no Turnstile credentials or widget exist yet.

**Alternatives considered**

- Browser → Supabase directly (client-side insert with the anon key) — rejected: would require a public INSERT policy, is harder to rate-limit/validate consistently, and doesn't allow attempting the email notification from the same trusted context.
- Chain the two channels (`await db insert; if success, await email send`) — rejected: makes email delivery depend on database availability. Supabase Free projects can pause after inactivity; a paused database must never silently swallow a real contact attempt that email could still have delivered.
- Add rate limiting (Upstash/Redis) now — rejected for V1: the task scope explicitly deferred this; baseline validation + honeypot is the documented interim boundary, not a claim of enterprise-grade protection.

**Consequences**

Positive: a real, working contact channel; no single external outage silently loses a contact attempt (as long as at least one of the two channels is healthy); secrets never reach the browser bundle (service-role key and Resend API key are read only in server-only modules); the app remains deployable/buildable without any of these credentials configured, so onboarding a new environment doesn't require secrets up front.
Negative / trade-off: two new external service dependencies (Supabase, Resend) and two new npm dependencies (`@supabase/supabase-js`, `resend`); a `notification_status` field on `contact_messages` can end up `pending` if the app crashes between the initial insert and the follow-up status update (acceptable — the message itself is still safely persisted, only the bookkeeping field is stale); spam protection is intentionally minimal for V1, documented as a known gap, not silently ignored.

**Verification / follow-up**

- `supabase/migrations/20260902_create_contact_messages.sql`, `src/lib/supabase/admin.ts`, `src/lib/contact/validate.ts`, `src/app/api/contact/route.ts`, `src/components/forms/ContactForm.tsx`, `docs/CONTACT_SETUP.md` (M1-08).
- `docs/tasks/CURRENT_TASK.md` records whether external credentials were actually configured and an end-to-end test performed, or whether this is code-complete with external setup still pending — do not read this ADR as proof the integration was live-tested.
- If Turnstile is added later, record that as its own decision (new consequences: a new dependency, a new required env var, a UX change to the form) rather than silently expanding this ADR.

---

### ADR-015 — Contact form hardening: key rename, Turnstile, atomic daily email quota

**Date:** 2026-09-02
**Status:** accepted (supersedes ADR-014)

**Context**

The production Supabase project was created (and independently modified) after ADR-014 was written and implemented. Three things changed on the real infrastructure before this repository could be considered a match for it: (1) this Supabase project's API key model uses the current `sb_secret_...` key format under the name `SUPABASE_SECRET_KEY`, not the legacy `service_role` JWT naming ADR-014 assumed; (2) the production database already has an atomic daily email-notification quota (`contact_email_quota` table + `reserve_contact_email_slot()` RPC) as a hard cost/abuse safety cap; (3) Cloudflare Turnstile is now part of the production security design, not a "later" item. This ADR reconciles the repository with the real architecture and records the revised partial-failure semantics that follow from adding a quota step into what was previously a simple two-channel independence model.

**Decision**

Env var rename: `SUPABASE_SERVICE_ROLE_KEY` → `SUPABASE_SECRET_KEY` everywhere (code, `.env.example`, docs). No `SUPABASE_SERVICE_ROLE_KEY` reference should remain in active V1 code or documentation.

Request flow, in this exact order — each step gates the next:

```
validate request (authoritative server-side validation)
  -> honeypot (silent fake success if triggered, no further processing)
    -> Cloudflare Turnstile verification (server-side, against Cloudflare
       Siteverify) — must pass before ANY of: Supabase insert, quota
       reservation, Resend call
      -> Supabase persistence  \
      -> email quota + Resend   } attempted independently (Promise.allSettled)
```

Turnstile (`src/lib/contact/turnstile.ts`): verified server-side, token supplied by a real Cloudflare-rendered widget (`NEXT_PUBLIC_TURNSTILE_SITE_KEY`, client-safe by design — Turnstile site keys are meant to be public, unlike the secret key) loaded via Cloudflare's official script (no CAPTCHA-wrapper dependency). **Fails closed in production**: if `TURNSTILE_SECRET_KEY` is unset while `NODE_ENV === "production"`, every submission is rejected (`503 contact_unavailable`) — verification is never silently skipped. In non-production, a missing secret is an explicit, logged, documented bypass so local development doesn't require real Turnstile credentials. The honeypot (`website`) is kept — Turnstile supplements it, does not replace it.

Email delivery is now itself a two-step **independent** channel: reserve an atomic daily quota slot (`reserve_contact_email_slot(20)`, a single `UPDATE ... WHERE used < limit` — a row-lock-based atomic reservation, never a separate "count then insert" which has a race window) and only call Resend if a slot was actually reserved. Quota exhaustion produces `notification_status = "suppressed"`, a fourth status value alongside `pending`/`sent`/`failed` — **suppression is not failure**. A suppressed notification means Matheus won't get an immediate email for that one contact, but the contact itself is still safely stored if the (fully independent) Supabase insert succeeded — nothing about the visitor's submission is lost, only the immediate email nudge is skipped once 20 notifications have already gone out that UTC day. `200 {ok:true}` is returned whenever the DB insert succeeded OR the email was actually sent — `503 contact_unavailable` only when neither happened (this includes: DB failed AND (quota exhausted OR email failed OR email unconfigured)).

External, provider-independent hardening: a Vercel WAF rate limit (5 requests/IP/10min) on `/api/contact`, configured directly in Vercel — not implemented as in-memory Next.js middleware (would not survive serverless cold starts/multiple instances, and duplicates infrastructure Vercel already provides). Documented as a manual production setup step in `docs/CONTACT_SETUP.md` — never claimed as "active" until actually configured.

Request body-size guard: reject bodies over 10KB (`Content-Length` header check, then an actual byte-length check on the read body as defense-in-depth against a missing/spoofed header) before `JSON.parse` — a public POST endpoint should not fully parse an arbitrarily large payload before any field-level validation runs.

**Alternatives considered**

- Keep `SUPABASE_SERVICE_ROLE_KEY` as an alias/fallback alongside `SUPABASE_SECRET_KEY` — rejected: the task was explicit that no `SUPABASE_SERVICE_ROLE_KEY` reference should remain in active V1 code; a dual-name fallback is exactly the kind of silent complexity that invites using the wrong one later.
- Implement the daily quota as `SELECT count(*) FROM contact_email_quota WHERE ...` followed by a conditional `INSERT`/`UPDATE` in application code — rejected: classic TOCTOU race condition, two concurrent requests can both read a count under the limit and both proceed, silently exceeding the cap. The atomic RPC (single `UPDATE ... WHERE ... RETURNING`-equivalent via `FOUND`) closes that window using Postgres's own row locking.
- In-memory/Next.js-middleware IP rate limiting instead of Vercel WAF — rejected per the task's explicit instruction: serverless functions don't share memory across instances/cold starts, so an in-process limiter is not actually effective at the scale this matters, and Vercel already provides this as platform infrastructure.
- Treat quota-exhausted the same as a failed email (`notification_status = "failed"`) — rejected: conflates "the system couldn't send" with "the system deliberately chose not to send because a safety cap was hit" — these have different operational meanings (the latter is expected/healthy behavior at high volume, the former indicates a real problem worth investigating).

**Consequences**

Positive: production-realistic security posture (bot verification, hard cost cap, correct key naming) before any real traffic hits the form; the atomic quota RPC makes the daily cap correct under concurrency without adding a rate-limiting dependency; suppression is honestly distinguished from failure in the data model, so a future admin view (not built yet) could report "20 emails sent, 3 suppressed" without conflating that with "3 broken."
Negative / trade-off: the request flow is more complex (one more sequential gate, one more independent-channel sub-step) — documented here specifically so a future change to the failure-handling logic doesn't accidentally re-simplify it back to ADR-014's simpler-but-now-inaccurate model; Turnstile adds a third external service dependency and one more client-side script load (mitigated: loaded only when configured, `next/script` with `afterInteractive`, no new npm dependency); the Vercel WAF rule is external configuration this repository cannot verify or enforce from code — `docs/CONTACT_SETUP.md` must not be read as proof it's actually been set up.

**Verification / follow-up**

- `supabase/migrations/20260903_add_contact_email_daily_quota.sql` (note the date bump from `20260902` — Supabase orders migrations lexicographically by filename, and `20260902_add...` would have sorted *before* `20260902_create...` alphabetically, which would break since this migration's `ALTER TABLE contact_messages` requires that table to already exist. Always verify new migration filenames sort after their dependencies, don't assume same-day-prefix + alphabetical-suffix will work out).
- `src/lib/supabase/admin.ts` (key rename), `src/lib/contact/turnstile.ts`, `src/lib/contact/quota.ts`, `src/app/api/contact/route.ts` (rewritten flow), `src/components/forms/ContactForm.tsx` (Turnstile widget), `.env.example`, `docs/CONTACT_SETUP.md` (M1-08 security update).
- `docs/tasks/CURRENT_TASK.md` records the actual external-integration status — do not read this ADR as proof any of Turnstile/Supabase/Resend/the Vercel WAF rule were live-verified end-to-end.
- Before relying on this in production: confirm the Vercel WAF rule is actually configured (not just documented), and run one real submission that exercises Turnstile, persistence, quota reservation, and Resend delivery together.

---

### ADR-016 — Application Job removed from Selected Work

**Date:** 2026-09-05
**Status:** accepted

**Context**

The user asked to remove the "Application Job" project from Selected Work entirely, with no replacement project for now. This supersedes the Selected Work membership recorded under ADR-012 ("Current allocation": Procurement Intelligence, Application Job, Employee Attrition Prediction).

**Decision**

Selected Work now contains exactly 2 projects:

```text
01 Procurement Intelligence
02 Employee Attrition Prediction
```

Application Job is not reassigned to Case Studies or any other Home section — it is fully removed from the site, not relocated. Its GitHub repository (`mori-mkm/application-job`) is unaffected; only the Home page reference is removed.

**Alternatives considered**

- Replace Application Job with a placeholder or a third project — rejected per explicit instruction: no invented content, no filler project.
- Leave a 3-slot layout with a gap — rejected: `SelectedWork.tsx`'s `reverse={index % 2 === 1}` alternation and spacing already work correctly for any project count; an empty slot would be a fabricated gap, not a real constraint.

**Consequences**

Positive: Selected Work no longer references a project the user wants removed; `ProjectVisualKind` and `ProjectVisual.tsx` no longer carry orphaned `"application-job"` cases.
Negative / trade-off: `PORTFOLIO_SPEC.md` §18.1/§18.2 previously cited Application Job as the (Selected Work) evidence source for the "Applied AI"/"Automation" capability claims; those claims are generic skill labels in `src/content/home.ts` (not literal project references), so no rendered content changes, but the spec's rationale text was updated to stop citing a Selected Work section that no longer carries that project. If a future project is added to Capabilities/Selected Work, re-check that rationale is still accurate.

**Verification / follow-up**

- `src/content/home.ts` (EN + PT `selectedWork.projects`, `ProjectVisualKind`), `src/components/ui/ProjectVisual.tsx` (orphaned `"application-job"` STAGES/CONTAINER_HEIGHT entries removed).
- `docs/planning/PROJECT_CONTENT.md`, `docs/planning/PORTFOLIO_SPEC.md`, `docs/planning/HOME_WIREFRAME.md` updated to drop Application Job from current-state Selected Work listings; project-page content written for Application Job (hero/flow/evidence/limitations copy) kept as historical planning record, annotated as no longer applicable rather than deleted.
- `npm run verify` (lint + build) passed after the code change.
- Before adding a new Selected Work project later, update this ADR's "Decision" list rather than leaving it stale.
- **Superseded in part by ADR-017 (2026-09-22):** DataLab OS added as Selected Work `01`; the two projects above are now `02` and `03`. The "Decision" list above is the historical 2026-09-05 membership — see ADR-017 for the current one.

---

### ADR-017 — DataLab OS becomes the flagship Selected Work project

**Date:** 2026-09-22
**Status:** accepted

**Context**

The user published `mori-mkm/datalab-os` (README status: **PoC v0.2**) and asked for it to lead Selected Work. Until now the portfolio had no public evidence for agent orchestration, LangGraph, AI observability or FastAPI — `PORTFOLIO_SPEC.md` §18.1 and the `capabilities` comment in `src/content/home.ts` explicitly deferred those. The DataLab OS README (verified 2026-09-22) documents: a compiled LangGraph graph of department subgraphs (Data Engineering, Analytics, Data Science) plus an independent Review Lead that can return APPROVED/REJECTED (including its own target-leakage check); deterministic agents calling real pandas/scikit-learn functions; typed `ExecutionEvent`s on an in-process Event Bus, persisted append-only to `events.jsonl` + `run.json` and replayable; FastAPI + SSE (`/api/runs`, `/api/graph`); a Next.js + React Flow Control Plane that only observes; optional Ollama narration with a deterministic fallback; zero paid APIs; 118 backend tests, 97 frontend tests, clean lint and production build. Separately, the Application Job repo (`mori-mkm/application-job`), the only public evidence cited for three Applied AI capability items, now returns 404.

**Decision**

Selected Work contains exactly 3 projects:

```text
01 DataLab OS
02 Procurement Intelligence
03 Employee Attrition Prediction
```

DataLab OS lives in Selected Work only (ADR-012) — not also a Case Study. It gets a non-compact `"datalab"` pipeline visual (same editorial diagram anatomy as the others, no screenshots/GIF), a GitHub link and no Live Demo (no public deployment exists). Copy calls it what the README calls it — an observable, local-first agent system / PoC — and never production-ready, fully autonomous, parallel, self-organizing or dynamically spawning agents (the README's "Current limitations" rule these out).

Capabilities (still titled "Applied AI", not "AI Engineering"):
- Applied AI: `LLM Applications, Agent Orchestration, LangGraph, AI Observability, AI Automation` — adds the three DataLab-backed items; drops `AI-assisted Workflows`, `Structured Outputs`, `Prompt & Context Engineering` (their only public evidence was the now-unavailable Application Job repo).
- Engineering: adds `FastAPI`.
- Still excluded (DataLab does not prove them): RAG, Vector Databases, LangChain, CrewAI, dynamic/parallel multi-agent systems, AI (LLM) Evaluation, CI/CD, cloud infrastructure.

**Alternatives considered**

- Add DataLab OS to Case Studies as well — rejected: violates ADR-012.
- Replace Employee Attrition to keep 2 projects — rejected per instruction (no project replaced).
- Embed the repo's `docs/assets/demo.gif` — rejected for now: heavy animated media, breaks the Home's editorial visual language, and would require a `ProjectFeature` change. Reserved for a future `/projects/datalab-os` page.
- Rename the Capabilities group to "AI Engineering" — rejected: one PoC doesn't yet justify the broader label; the Hero already carries the direction.

**Consequences**

Positive: the "AI Engineering" positioning in Hero/About now has a public, reviewable project behind it; Capabilities no longer lists items whose only evidence is unavailable.
Negative / trade-off: the flagship is a PoC with no live demo, so its proof points are engineering evidence (tests, architecture) rather than outcomes. If the DataLab OS README changes its test counts or limitations, the Home copy must be re-synced.

**Verification / follow-up**

- `src/content/home.ts` (EN + PT `selectedWork`, `capabilities`, `ProjectVisualKind`), `src/components/ui/ProjectVisual.tsx`.
- `PROJECT_CONTENT.md` §2, §52-53 note, §78-80 and new §93 (DataLab OS content + claim boundaries); `PORTFOLIO_SPEC.md` §10.2-10.3, §18.1-18.2, §56; `HOME_WIREFRAME.md` §12-13, §26.2, §36, §59; `CONTEXT_MAP.md`.
- `npm run verify` passed; visual check at 1440px/390px, EN/PT.
