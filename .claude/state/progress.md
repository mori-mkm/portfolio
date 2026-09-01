# Project State

> Durable memory for future agent sessions. Not a chat transcript or daily log — trim obsolete detail on every update.

## Project goal

Build a bilingual (EN/PT) professional portfolio positioning Matheus Mori as a Data Scientist & AI Engineer through evidence-backed projects, case studies, and technical work.

## Current milestone

M1 - Home foundation (M1-02, M1-03, M1-04 done; M1-05 not started)

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

## In progress

- None. M1-04 is done; M1-05 (Experience) has not been started.

## Next planned

1. Confirm the Resume Google Doc's sharing is "Viewer" (not "Editor") - see DECISIONS/CURRENT_TASK note.
2. Decide what to do with the user's master resume/evidence document (uploaded 2026-09-01) and remaining unallocated content facts (Santander Hackathon 1st place, additional GitHub repos: closer-ai, UFSCar, retail-sales-forecasting) - real inputs for M1-05 (Experience) and later milestones, not yet incorporated into PROJECT_CONTENT.md. Do not build this out silently - scope it as its own task first, and per ADR-012 check it isn't already featured elsewhere on Home before adding it anywhere. (The CNN research finding IS now allocated - see M1-04 above - do not re-add it as a future Research feature, per ADR-012's explicit consequence.)
3. Move M1-05 (Experience) into `CURRENT_TASK.md` when ready to start it - not yet started.

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
- ADR-012: Home content exclusivity - a named project/study has exactly one primary Home section, never duplicated across Selected Work / Case Studies / Research.

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
