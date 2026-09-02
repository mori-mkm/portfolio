# Project State

> Durable memory for future agent sessions. Not a chat transcript or daily log — trim obsolete detail on every update.

## Project goal

Build a bilingual (EN/PT) professional portfolio positioning Matheus Mori as a Data Scientist & AI Engineer through evidence-backed projects, case studies, and technical work.

## Current milestone

M1 - Home foundation (M1-02 through M1-06 done; M1-07 not started)

## Completed

- Next.js 16 project initialized (App Router).
- TypeScript and Tailwind CSS 4 configured.
- Geist Sans/Mono available via `next/font/google`.
- GitHub repository created (`mori-mkm/portfolio`).
- Root route (`/`) redirects to `/en`.
- `/en` and `/pt` routes are functional.
- Lightweight typed locale foundation exists (`src/lib/i18n.ts`).
- Product planning docs versioned and de-duplicated: `docs/planning/{PORTFOLIO_SPEC,HOME_WIREFRAME,PROJECT_CONTENT}.md` are the sole canonical copies (ADR-010).
- Agentic harness installed: `CLAUDE.md` router, `.claude/agents/*`, `docs/{ARCHITECTURE,DECISIONS,CONTEXT_MAP,AGENTIC_ENGINEERING}.md`, `docs/tasks/*`.
- `npm run verify` script added (`lint && build`) as the harness baseline verifier.
- **M1-02 done** (2026-09-01): design tokens, Header (desktop nav, mobile menu, language switcher), Hero, About - `src/components/{layout,sections,ui}/`. `npm run verify` passes on the user's machine; visually confirmed via screenshots (`/en` desktop + mobile).
- Resume link now points to the user's live Google Doc (not a static PDF) so they can keep it current without a redeploy.
- **M1-03 done** (2026-09-01): Selected Work section (`id="projects"`), originally four editorial project rows with alternating desktop layout / fixed mobile order, restrained CSS "system diagram" visuals (no real screenshots exist yet), EN/PT content in `src/content/home.ts`. Hero CTA and Header "Projects" nav now land on a real section. Superseded in part by M1-04 below (Steel Indicator later removed from this section). Full detail in git history / M1-04's Evidence-notes.
- **M1-04 done** (2026-09-01): Two changes. (1) Fixed a real anatomy bug in Employee Attrition's Selected Work diagram (it used a one-off horizontal layout instead of the shared vertical pipeline diagram every other project uses — `src/components/ui/ProjectVisual.tsx` now routes all four project kinds through one `PipelineDiagram` function). (2) New editorial decision, **ADR-012 (Home content exclusivity)**: a named project/study has exactly one primary Home section, never duplicated. Steel Indicator moved out of Selected Work (now 3 projects: Procurement Intelligence, Application Job, Employee Attrition Prediction) into a new `03 / Case Studies` section (`id="case-studies"`, `src/components/sections/CaseStudies.tsx` + `src/components/ui/CaseStudyFeature.tsx`) alongside a new case study, "Developer Market Research" / CNN Brasil (applied research done during the user's time at Rocketseat; a finding on women's underrepresentation in tech reached CNN Brasil coverage). Case Studies deliberately uses a different anatomy than Selected Work (single-column, label+sentence evidence blocks, not big-number tiles) since it answers "how did I think about the problem" vs. Selected Work's "what did I build". `docs/planning/{PROJECT_CONTENT,PORTFOLIO_SPEC,HOME_WIREFRAME}.md` updated to match the new allocation. Reviewer PASS. Full detail in `CURRENT_TASK.md`.
- **M1-05 done** (2026-09-01): `04 / Experience` section (`id="experience"`, `src/components/sections/Experience.tsx`) — editorial professional timeline, four employers in reverse chronological order (Banco BV 2025-2026, BIP Consulting 2024-2025, Contmatic Phoenix 2022-2023, Rocketseat 2021-2022), 4/8 desktop split (custom `min-[900px]:` breakpoint, not the site's usual `md:`) / stacked mobile, no timeline dots/rail (just `border-t` separators). First section built from the user's private master résumé — content came only from the task's own pre-vetted brief, never from reading the résumé file itself (ADR-011 still holds: no résumé file, no PII, anywhere in the repo). Company/role/period kept identical across EN/PT (historical-fact fields, not translated prose) — same precedent as Attrition's English title in M1-03. Per-company evidence explicitly bounded: no Databricks-lakehouse-architecture overclaim at Banco BV, no full-period "Junior" label or Oracle HCM ownership claim at BIP, CAC/conversion figures attributed to "a series of optimizations" not a single test at Contmatic, and — critically, per ADR-012 — zero mention of Developer Market Research/CNN/personas/the 5,000-responses figures under Rocketseat (that case study's exclusive home is Case Studies). No AI Engineering tag/claim anywhere in Experience (that positioning stays sustained by Selected Work/Case Studies, not employment history). `PORTFOLIO_SPEC.md` §15 rewritten from placeholder to the finalized content + evidence-constraint notes. Reviewer PASS (15-point privacy+evidence checklist, 0 BLOCKER/MAJOR). Full detail in `CURRENT_TASK.md`.
- **M1-06 done** (2026-09-02): `05 / Research & Recognition` section (`id="research"`, `src/components/sections/ResearchRecognition.tsx`) — quiet editorial index, three pre-decided items in editorial (non-chronological) order: Research/01 Wavelet Multivariate Time Series Analysis (UFSCar undergrad thesis), Recognition/01 FarmIA — Santander Data Challenge (1st place hackathon), Research/02 Retail Sales Forecasting (Digital House academic project). Header nav label stayed "Research"/"Pesquisa" unchanged — only the section's own heading expanded. New **ADR-013 (Research & Recognition allocation)**: replaces the old pre-ADR-012 4-topic Research wireframe (Economic Index Construction, Shapley Driver Decomposition, Survival Analysis, Forecasting Workforce Dynamics — all obsolete, overlapped Steel Indicator/Experience/Employee Attrition), kept only in a collapsed historical note in `PORTFOLIO_SPEC.md`/`HOME_WIREFRAME.md`. FarmIA and Retail Sales Forecasting framed strictly as historical/academic (hackathon prototype, final coursework project) — no production/deployment/business-outcome claims. Closer AI deliberately omitted (ADR-007). Also corrected a stale documentation note (in ADR-012 and `PROJECT_CONTENT.md` §58) that said the 5,000+ responses/~50 interviews persona-research figures couldn't be linked to the CNN-covered study without proof — the evidence base now confirms they're the same research; this was a **documentation-only** correction, the rendered Case Study content and component were not touched. Reviewer PASS (0 findings at any severity). Full detail in `CURRENT_TASK.md`.

## In progress

- None. M1-06 is done; M1-07 (Capabilities) has not been started.

## Next planned

1. Confirm the Resume Google Doc's sharing is "Viewer" (not "Editor") - see DECISIONS/CURRENT_TASK note.
2. Decide what to do with remaining unallocated content facts (additional GitHub repos: UFSCar general coursework, UFSCar teaching (~60hr APIs/Web Scraping course)) - not yet incorporated into any Home section. Closer AI stays excluded until it has real evidence (ADR-007). Do not build this out silently - scope it as its own task first, and per ADR-012 check it isn't already featured elsewhere on Home before adding it anywhere. (FarmIA, Retail Sales Forecasting, the Wavelet thesis, the CNN research finding, and the four-company Experience timeline are ALL now allocated - M1-04/M1-05/M1-06 above - do not re-add any of them elsewhere.)
3. M1-07 (Capabilities) has not been started - no content-allocation blocker known yet, but check ADR-012 exclusivity before implementing (Capabilities risks overlapping the tech-stack/metadata already shown across Selected Work/Case Studies/Experience/Research & Recognition).
4. Move M1-07 into `CURRENT_TASK.md` when ready to start it - not yet started.

## Blockers

- None.

## Decisions that matter now

See `docs/DECISIONS.md` for full rationale. Do not duplicate here — pointer only:

- ADR-001: English is canonical default locale (`/` -> `/en`).
- ADR-002: one shared codebase for EN/PT, no per-locale component forks.
- ADR-003: no external i18n library in V1.
- ADR-005: Server Components by default.
- ADR-007: evidence before prominence (no unverifiable claims).
- ADR-008: minimal/technical/editorial visual identity — no AI-template aesthetics.
- ADR-009: harness Level 2, selective Level 3 (subagents by delegation test, not default).
- ADR-010: `docs/planning/*` are the product sources of truth; no `docs/PROJECT_SPEC.md`.
- ADR-012: Home content exclusivity - a named project/study has exactly one primary Home section, never duplicated across Selected Work / Case Studies / Research & Recognition.
- ADR-013: Research & Recognition allocation - section 05 is exactly 3 items (Wavelet thesis, FarmIA, Retail Sales Forecasting), editorial (non-chronological) order; the old pre-ADR-012 Research wireframe is obsolete.

## Important environment facts

- Next.js 16.3.4, React 19.2.8, TypeScript, Tailwind CSS 4.
- Lint script is `eslint` (not `next lint`) — run via `npm run lint`.
- New baseline verifier: `npm run verify` = `npm run lint && npm run build`.
- Local development on Windows; repo working tree is checked out with CRLF line endings while committed blobs are LF — this is expected and not a real content change (confirmed via `git diff --stat -w` showing zero diff on 2026-09-01). Do not "fix" this by touching unrelated files.
- Deployment target is Vercel; not yet configured.

## Known pitfalls

- Next.js 16 has breaking changes relative to older model training data - read `AGENTS.md` (root, do not modify) and `node_modules/next/dist/docs/` before assuming any framework API.
- Do not duplicate product specification documents; if a new copy of a planning doc appears anywhere outside `docs/planning/`, that's a regression of ADR-010 - remove it, don't edit around it.
- `docs/planning/PORTFOLIO_SPEC.md`, `HOME_WIREFRAME.md`, and `PROJECT_CONTENT.md` are each ~3,300-3,850 lines - always navigate via `docs/CONTEXT_MAP.md`, never read one in full for a routine task.
- `npm run build` (and `npm run verify`) runs fine directly in this environment as of M1-03/M1-04 (Windows SWC binary present) - the earlier M1-02-era note that the sandbox couldn't run it was environment-specific and is no longer true here. Manual visual verification still requires spinning up `npm run dev` + a headless-Chromium Playwright script (no interactive browser available) rather than the user's own eyes.
- `<html lang>` in `src/app/layout.tsx` is static (`"en"`), not locale-aware - known, undone a11y/SEO gap, see M1-02 Evidence/notes for why it wasn't fixed inline.

## Next actions

See "Next planned" above - this section is intentionally not duplicated.

## Maintenance rule

On task completion: remove obsolete temporary detail, retain only facts future sessions would otherwise need to rediscover, link to specs/ADRs instead of duplicating them.
