# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: M1-03
Title: Selected Work
Status: done

## Goal

Implement the Home's Selected Work section with four evidence-backed
projects, maintaining the approved Minimal + Technical + Editorial visual
system.

## Scope

IN:

- section header
- Procurement Intelligence
- Steel Indicator
- Application Job
- Employee Attrition Prediction
- EN/PT
- responsive desktop/mobile
- project evidence
- working external links
- accessible project structure
- restrained interactions

OUT:

- project detail pages
- case-study pages
- Projects index
- Case Studies Home
- Experience
- Research
- other Home sections
- new dependencies

## Verification

```bash
npm run verify   # PASS (lint + build), run twice — before and after the
                  # ESTRUTURADA overflow fix below
```

Manual visual review (headless Chromium via Playwright against `npm run dev`,
since no interactive browser is available in this environment):

- `/en` 1440x900 — checked, 0px horizontal overflow, screenshotted + inspected
- `/en` 390x844 — checked, 0px horizontal overflow, screenshotted + inspected
- `/pt` 1440x900 — checked, 0px horizontal overflow, screenshotted + inspected
- `/pt` 390x844 — checked, 0px horizontal overflow, screenshotted + inspected

All four combinations were both measured (`scrollWidth - clientWidth === 0`)
and visually inspected via full-page screenshots + zoomed crops. Not a
substitute for the user's own look, but not skipped either.

## Evidence / notes

- Bug found and fixed during implementation: PT-BR's "ESTRUTURADA" proof
  value (Application Job, `docs/planning/PROJECT_CONTENT.md` §35) overflowed
  its 2-column proof grid into the neighboring column at the original
  28px/34px (mobile/desktop) type size — confirmed via zoomed screenshot
  crop. Fixed by reducing proof-value type to 24px/30px and adding
  `break-words` (`src/components/ui/ProjectFeature.tsx`) as a safety net for
  any future long translated value. This is a **deliberate, permanent
  deviation** from WIREFRAME §14.3's spec'd 32-40px metric-value range,
  applied uniformly to all four projects in both locales — not a one-off
  patch. Recorded here per the reviewer's finding; not significant enough
  to warrant a separate ADR.
- Reviewer self-review (`.claude/agents/reviewer.md`) ran against the full
  diff: verdict **PASS**. 2 MINOR findings addressed (the type-scale
  deviation above, now recorded; and a decorative-diagram code comment that
  overstated text/visual parity, corrected in
  `src/components/ui/ProjectVisual.tsx`). 2 NOTE-level items left as
  optional future polish (no "View all projects →" link — correctly
  omitted, `/projects` doesn't exist yet; GitHub/Live Demo links share a
  generic accessible name across projects — works fine today, an
  `aria-label` per link would be a cheap future improvement).
- No project screenshots exist in `public/` yet — confirmed by listing the
  directory before building. All four project visuals are restrained
  CSS/mono "system diagrams" derived only from verified evidence (pipeline
  stage names, stack), not screenshots and not claimed to be screenshots.
- All 5 external links (4x GitHub, 1x Streamlit live demo) verified with
  `curl` to resolve successfully. The Streamlit demo initially showed a
  redirect loop (303) under `curl -L` without cookie persistence — this is
  Streamlit Community Cloud's normal session-cookie handshake, not a broken
  link; re-tested with a cookie jar and confirmed a clean 200. A real
  browser handles this transparently.
- Content (category/title/description/proof/stack, EN+PT, all 4 projects)
  copied verbatim from `docs/planning/PROJECT_CONTENT.md` §9, §21, §35, §44
  (the per-project "Home copy" sections — more specific/authoritative than
  SPEC §10.3's earlier draft list, used where the two differed, e.g. Steel's
  "PUBLIC data pipeline" over the task prompt's approximate "AUDITABLE
  publication pipeline"). No invented claims (ADR-007).
- Section header PT copy: headline "Sistemas construídos para / resolver
  problemas reais." taken from the approved translation already present in
  `HOME_WIREFRAME.md` §63 / `PROJECT_CONTENT.md` §80 (not the task prompt's
  looser fallback wording). Supporting line has no approved PT source yet,
  so the task's fallback wording was used as instructed.
- `/[locale]/projects/*` and `/[locale]/case-studies/*` remain unbuilt by
  design. No internal `Case Study →` / `View project →` links were rendered
  anywhere — only `githubHref`/`demoHref` (optional fields, only rendered
  when set) produce links, and both are real external URLs opened with
  `target="_blank" rel="noopener noreferrer"`.

## Final result

- Changed: `src/content/home.ts` (extended with `SelectedWorkContent` /
  `SelectedProject` / `ProjectProof` / `ProjectVisualKind` types + EN/PT data
  for all 4 projects), `src/app/[locale]/page.tsx` (wires `SelectedWork` in
  after `About`). New: `src/components/sections/SelectedWork.tsx`,
  `src/components/ui/ProjectFeature.tsx`, `src/components/ui/ProjectVisual.tsx`
  — all Server Components, no new dependency, no unnecessary Client
  Component (hover is pure CSS).
- Verification: `npm run verify` PASS (confirmed twice, incl. after the
  overflow fix). `git diff --check` PASS. Reviewer self-review PASS (2 MINOR
  findings addressed above, 2 NOTE items left as optional future polish).
  Manual visual check: `/en` and `/pt` at 1440px and 390px, screenshotted and
  inspected, 0px horizontal overflow measured at all four.
- Not done (explicitly out of scope for M1-03, tracked for later
  milestones): "View all projects →" link (needs `/projects`, M1-06+);
  per-link `aria-label`s distinguishing GitHub links across projects
  (optional polish); real project screenshots to replace the system-diagram
  placeholders, if/when approved assets exist.
