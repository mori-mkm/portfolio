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
