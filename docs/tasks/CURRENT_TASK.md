# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: M1-05
Title: Experience
Status: done

## Goal

Implement the bilingual Experience section as an editorial professional
timeline, showing the progression from growth/data science to consulting,
analytics engineering and decision-support products without duplicating
the resume or previously featured Home work.

## Scope

IN:

- #experience
- section header
- intro/context column
- Resume link
- four professional experiences
- EN/PT
- desktop/tablet/mobile
- evidence-backed impact
- restrained technical metadata
- accessibility
- documentation/state update

OUT:

- Research
- Recognition
- Capabilities
- Writing
- Contact
- Footer
- project detail pages
- case-study detail pages
- education
- Santander/FarmIA
- UFSCar
- certifications
- Closer AI
- new dependencies

## Verification

```bash
npm run verify   # PASS — run 2x (after implementation, and again during the
                  # reviewer's independent re-run)
git diff --check # PASS
git diff -- package.json package-lock.json  # empty — no new dependency
```

Manual visual review (headless Chromium via Playwright against `npm run dev`,
same approach as M1-03/M1-04 — no interactive browser available in this
environment):

- `/en` 1440x900 — checked, 0px horizontal overflow, screenshotted + inspected
- `/en` 390x844 — checked, 0px horizontal overflow, screenshotted + inspected
- `/pt` 1440x900 — checked, 0px horizontal overflow, screenshotted + inspected
- `/pt` 390x844 — checked, 0px horizontal overflow, screenshotted + inspected

Confirmed via screenshot + zoomed crops: four employers render in reverse
chronological order (Banco BV, BIP Consulting, Contmatic Phoenix,
Rocketseat); desktop uses the 4/8 left-intro/right-timeline split with no
timeline dots/rail, only `border-top` separators; mobile order matches the
required sequence exactly (section label → headline → intro → Resume/
Currículo link → timeline, each item: date → company → role → description →
metadata); PT's longer role string ("People Analytics Analyst Pleno · Data
Analytics") and longer descriptions wrap cleanly at both breakpoints, no
overflow; the Case Studies → Experience section transition uses the same
`py-20 md:py-32` rhythm already established between every other section
(not a new visual regression). 1024px/768px/360px were not separately
screenshotted — not flagged as a risk since the layout only has two
structural states (stacked below `min-[900px]`, split above it) and both
were exercised by the 390px and 1440px checks; the 900px split threshold
itself was verified by reading the Tailwind classes, not screenshotted at
exactly that width.

## Evidence / notes

- **Content source**: the user's private master résumé (never read from
  disk, never committed — ADR-011). Every fact used here came only from
  this task's own brief (public-safe facts pre-selected by the user), not
  from searching for or reading any private file.
- **Historical-fact fields kept identical across EN/PT**: `period`,
  `company`, and `role` are not translated (only `description` and
  `metadata`'s surrounding prose are localized — `metadata`'s tech-stack
  strings are already language-neutral proper nouns). Rationale: "People
  Analytics Analyst Pleno" is an official historical title — inventing an
  unofficial PT-BR translation risks publishing an inaccurate title, which
  ADR-007 (evidence before prominence) treats as a real risk, not a
  stylistic nicety. Same precedent as Employee Attrition Prediction's
  English title being kept in both locales (M1-03).
- **Per-company evidence boundaries** (all verified against the actual
  rendered EN/PT text in `src/content/home.ts`, not just asserted):
  - **Banco BV**: role reads exactly "People Analytics Analyst Pleno · Data
    Analytics" in both locales (official title preserved, not silently
    replaced with "Data Analyst"/"Data Scientist"/"AI Engineer"). Databricks
    is mentioned only generically ("Worked across ... Databricks") — no
    "architected the lakehouse" / "built the Medallion architecture from
    scratch" / "designed the corporate data lake" claim, since the actual
    work was maintaining/fixing existing Bronze/Silver/Gold notebooks, not
    building them. No Employee Attrition Prediction duplication (no 74%
    recall / SMOTE / threshold optimization / model architecture anywhere
    in this section — ADR-012).
  - **BIP Consulting**: role is the functional "People Analytics · Data
    Analytics", not "Junior Analyst" applied to the full 2024–2025 period —
    the exact intern-to-Junior promotion date isn't in the evidence base,
    so labeling the whole period "Junior" would be a false level/date
    combination. No "led an international data team" or Oracle HCM
    ownership claim — only the safe evidence (international HR reporting,
    Italy/Oracle HCM team interaction, ~1 week → ~1 day reporting-cycle
    improvement).
  - **Contmatic Phoenix**: the ~11% conversion / ~20% CAC figures are
    explicitly attributed to "a series of data-driven optimizations" (EN) /
    "uma série de otimizações orientadas por dados" (PT) — never to a
    single A/B test or single model.
  - **Rocketseat**: the ~15% conversion figure is tied to "a decision-tree
    segmentation initiative". Nothing about Developer Market Research, CNN
    Brasil, personas, the 5,000+ responses / ~50 interviews figures, or the
    ~20% representation finding appears anywhere in this section — that
    research already has its exclusive narrative home in Case Studies
    (ADR-012). Verified by grep across the full diff, not just visual
    inspection.
- **No AI Engineering professional overclaim**: no `LLM`/`RAG`/`Agents`/
  `LangChain`/`AI Engineering` tag or label anywhere in the `experience`
  content block — verified by grep. The portfolio's AI Engineering
  positioning stays sustained by Selected Work/Case Studies (personal/
  technical projects), not by employment history, per the task's explicit
  positioning rule.
- **Content density**: each `description` is 1-2 sentences (HOME_WIREFRAME
  §22.3 / PORTFOLIO_SPEC §15's "máximo 1-2 frases" rule) — no bullet lists,
  no per-job project enumeration, no résumé reproduction.
- **Resume link**: reuses the existing `content.externalLinks.resume` /
  `resumeHref` unchanged (verified byte-identical — same Google Docs URL,
  same caveat about its sharing permission already flagged in M1-02), passed
  as a prop from `src/app/[locale]/page.tsx`, not hardcoded or redefined
  inside `Experience.tsx`. `target="_blank" rel="noopener noreferrer"`.
- **No dead links, no card/timeline-dot aesthetics**: the `<ol>`/`<li>`
  editorial list uses only `border-t border-[var(--border)]` between items
  — no absolutely-positioned dots, no vertical rail, no card/shadow
  treatment. Matches the "editorial list, not a graphical timeline"
  requirement exactly.
- **Deliberate breakpoint deviation**: the desktop/mobile column split uses
  a custom `min-[900px]:` breakpoint instead of the site's usual `md:`
  (768px), per the task's explicit "don't keep a cramped 4/8 split below
  ~900px" instruction — Experience's items are denser (role + description +
  metadata) than About's, which uses the same proportions at the standard
  `md:` breakpoint. This is scoped to this one component only, not a global
  breakpoint convention change.
- Reviewer self-review (`.claude/agents/reviewer.md`) ran against the full
  diff with an explicit privacy + evidence-accuracy checklist (15 numbered
  checks: PII grep, resume URL byte-identity, per-company overclaim checks,
  AI Engineering non-claim, structural/architectural checks): verdict
  **PASS**. Zero BLOCKER/MAJOR findings. One MINOR — this file wasn't yet
  filled in with verification/evidence while still `in_progress` — addressed
  by this update. Confirmed independently by the reviewer (not just
  asserted by the implementer): `npm run verify` re-run PASS; zero PII
  pattern hits in the diff; `resumeHref` unchanged; no new dependency;
  `Header.tsx`/`Hero.tsx`/`About.tsx`/`SelectedWork.tsx`/`ProjectFeature.tsx`/
  `CaseStudies.tsx`/`CaseStudyFeature.tsx` all untouched; `#experience`
  anchor matches the Header's pre-existing (unchanged) nav entries.

## Final result

- Changed: `src/content/home.ts` (added `ExperienceItem`/`ExperienceContent`
  types + `experience` content block, EN+PT, 4 items), `src/app/[locale]/
  page.tsx` (wires `Experience` in after `CaseStudies`, resume link sourced
  from existing `externalLinks`), `docs/planning/PORTFOLIO_SPEC.md` §15
  (rewritten from placeholder to finalized content + evidence-constraint
  notes, source of truth for future edits). New: `src/components/sections/
  Experience.tsx` — Server Component, no new dependency, no unnecessary
  Client Component.
- Verification: `npm run verify` PASS (run 2x, incl. the reviewer's own
  independent re-run). `git diff --check` PASS. `package.json`/
  `package-lock.json` unchanged. Reviewer self-review PASS (0 BLOCKER/MAJOR,
  1 MINOR addressed — this state update). Manual visual check: `/en` and
  `/pt` at 1440px and 390px, screenshotted and inspected, 0px horizontal
  overflow measured at all four; reverse-chronological order, mobile
  section order, and PT text wrapping all visually confirmed.
- Not visually verified (explicitly, not silently skipped): 1024px, 768px,
  360px breakpoints, and the exact 900px split threshold itself weren't
  separately screenshotted (see Verification section above for why this is
  low-risk given the layout's two structural states).
- Not done (explicitly out of scope for M1-05, tracked for later
  milestones): Research & Recognition content allocation (M1-06 — needs a
  content-allocation decision pass before implementation, since the old
  Research wireframe predates ADR-012 and may overlap Steel Indicator /
  workforce content already placed elsewhere).
