# Context Map

> Maps a task area to the exact spec sections to read and the code most likely to change. Do not read `PORTFOLIO_SPEC.md`, `HOME_WIREFRAME.md`, or `PROJECT_CONTENT.md` in full for a task — they total ~11,000 lines combined. Grep the section number/heading below and read only that range.

Legend: `SPEC` = `docs/planning/PORTFOLIO_SPEC.md`, `WIREFRAME` = `docs/planning/HOME_WIREFRAME.md`, `CONTENT` = `docs/planning/PROJECT_CONTENT.md`.

## Global product / brand / UX principles

Read: SPEC §1-3 (Visão do produto, Referências, Princípios de UX), §22 (Identidade visual)
Use for: global identity, positioning, product-level decisions
Likely code: none directly — informs everything

## Navigation / Header

Read: SPEC §7 (Navigation), WIREFRAME §7 (00 / Navigation) incl. §7.6 Mobile navigation, §7.7 Language switcher
Likely code: `src/components/layout/Header.tsx` (not created yet), `src/content/home.ts`, `src/lib/i18n.ts`

## Hero

Read: SPEC §8 (Hero), WIREFRAME §8 (01 / Hero), WIREFRAME §9 (Mobile Hero)
Likely code: `src/components/sections/Hero.tsx` (not created yet), `src/content/home.ts`

## About

Read: SPEC §9 (01 / About), WIREFRAME §10 (01 / About), WIREFRAME §11 (Mobile About)
Likely code: `src/components/sections/About.tsx` (not created yet), `src/content/home.ts`

## Selected Work (Home section)

Read: SPEC §10 (02 / Selected Work), SPEC §11 (Project Card), WIREFRAME §12-20 (Selected Work + per-project wireframes + mobile)
Content: CONTENT §1 (V1 Project Portfolio) for which 4 projects are in scope; per-project sections start at CONTENT §8 (Procurement Intelligence), §20 (Steel Indicator) — grep the project name for its block, don't read all projects for a one-project task.
Likely code: `src/components/sections/SelectedWork.tsx` (not created yet), project card component, `src/content/home.ts`

## Project pages (`/[locale]/projects/[slug]`)

Read: SPEC §12 (/projects), plus the specific project's CONTENT block only (grep the project name)
Likely code: `src/app/[locale]/projects/` (not created yet)

## Case Studies

Read: SPEC §13-14 (Case Studies + official Case Study template), WIREFRAME §21 (03 / Case Studies)
Content: CONTENT §2 (V1 Case Studies) for scope, then the specific case study block only
Likely code: `src/app/[locale]/case-studies/` (not created yet)

## Experience

Read: SPEC §15 (04 / Experience), WIREFRAME §22-23 (04 / Experience + mobile)
Likely code: `src/components/sections/Experience.tsx` (not created yet), `src/content/home.ts`

## Research & Recognition

Read: SPEC §16 (05 / Research & Recognition — finalized M1-06, ADR-013) + §17 (Research vs Writing), WIREFRAME §24-25 (05 / Research & Recognition + mobile)
Content: CONTENT §92 (Research & Recognition — Wavelet thesis, FarmIA, Retail Sales Forecasting; the only 3 V1 items)
Likely code: `src/components/sections/ResearchRecognition.tsx`, `src/content/home.ts`
Note: the pre-ADR-012 4-topic Research draft (Economic Index Construction, Shapley Driver Decomposition, Survival Analysis, Forecasting Workforce Dynamics) is obsolete — kept only in a collapsed historical note in SPEC §16 / WIREFRAME §24-25, do not implement it.

## Capabilities

Read: SPEC §18 (06 / Capabilities — finalized M1-07, ADR-007 applied), WIREFRAME §26-27 (06 / Capabilities + mobile)
Code: `src/components/sections/Capabilities.tsx`, `src/content/home.ts`
Note: group is "Applied AI", not "AI Engineering" (evidence boundary — see SPEC §18.1). The old speculative item list (RAG, Agentic Systems, FastAPI, PySpark, CI/CD) is obsolete — kept only in a collapsed historical note in SPEC §18, do not implement it. No Header nav item was added for this section.

## Writing

Read: SPEC §17 (Research vs Writing), SPEC §19 (07 / Writing), WIREFRAME §28-29 (07 / Writing + mobile)
Likely code: `src/app/[locale]/writing/` (not created yet)

## Contact / Footer

Read: SPEC §20-21 (08 / Contact, Footer), WIREFRAME §30-31 (08 / Contact, Footer)
Likely code: `src/components/sections/Contact.tsx`, `src/components/layout/Footer.tsx` (not created yet)

## Internationalization (EN/PT)

Read: SPEC §39.1 (Internationalization / i18n), WIREFRAME §65 (Locale implementation note), `docs/ARCHITECTURE.md` (Routing)
Code: `src/lib/i18n.ts`, `src/content/*`, `src/app/[locale]/`, `src/app/page.tsx`

## Styling / design tokens

Read: SPEC §23-27 (Color System, Typography, Type Scale, Layout System, Spacing), SPEC §28 (Borders/radius/shadow)
WIREFRAME §3-6 for global desktop frame/grid/vertical rhythm
Code: `src/app/globals.css`

## Motion / animation

Read: SPEC §35 (Motion), WIREFRAME §38 (Section entrance motion), WIREFRAME §52 (Animation QA)
Note: ADR-008 restricts unnecessary animation — check that ADR before adding any.

## Accessibility

Read: SPEC §37 (Accessibility), WIREFRAME §40 (Focus order)
Applies across all components — check on every UI task, not just a dedicated a11y task.

## Responsive behavior / breakpoints

Read: SPEC §36 (Responsive Behavior), WIREFRAME §33-35 (Tablet/Mobile wireframes), WIREFRAME §43-45 (content density/constraints/page length), WIREFRAME §49-54 (QA checklists, what's visible without scrolling at 1440x900 and 390x844)

## Home implementation order / component tree (if working on Home holistically)

Read: WIREFRAME §47 (Home implementation component tree), WIREFRAME §48 (Suggested implementation order), WIREFRAME §58 (First build acceptance criteria)

## Next.js framework behavior

1. `AGENTS.md` (root) first — Next.js 16 breaking-changes notice.
2. `node_modules/next/dist/docs/` for authoritative local docs.
3. Only use external web research if (1) and (2) cannot resolve the question, or the question concerns something outside Next.js itself (e.g. a browser API, a general web standard).

## Task/state files (always read first, not looked up here)

`docs/tasks/CURRENT_TASK.md` -> `.claude/state/progress.md` -> this map -> only the specific sections above.
