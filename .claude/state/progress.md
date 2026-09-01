# Project State

> Durable memory for future agent sessions. Not a chat transcript or daily log — trim obsolete detail on every update.

## Project goal

Build a bilingual (EN/PT) professional portfolio positioning Matheus Mori as a Data Scientist & AI Engineer through evidence-backed projects, case studies, and technical work.

## Current milestone

M1 - Home foundation (M1-02, M1-03 done; M1-04 not started)

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
- **M1-03 done** (2026-09-01): Selected Work section (`id="projects"`), four editorial project rows (Procurement Intelligence, Steel Indicator, Application Job, Employee Attrition Prediction) with alternating desktop layout / fixed mobile order, restrained CSS "system diagram" visuals (no real screenshots exist yet), EN/PT content in `src/content/home.ts`. Hero CTA and Header "Projects" nav now land on a real section. Only external links are active (4x GitHub, 1x Streamlit demo) - no internal `/projects` or `/case-studies` routes exist yet, so no dead links were introduced. Full detail in `CURRENT_TASK.md`'s Evidence/notes (incl. a real PT-BR text-overflow bug found and fixed, and the reviewer's PASS verdict).

## In progress

- None. M1-03 is done; M1-04 (Case Studies Home) has not been started.

## Next planned

1. Confirm the Resume Google Doc's sharing is "Viewer" (not "Editor") - see DECISIONS/CURRENT_TASK note.
2. Decide what to do with the user's master resume/evidence document (uploaded 2026-09-01) and new content facts (CNN research feature, Santander Hackathon 1st place, additional GitHub repos: closer-ai, UFSCar, retail-sales-forecasting) - these are real inputs for M1-05 (Experience), but have not been incorporated into PROJECT_CONTENT.md yet. Do not build this out silently - scope it as its own task first. (Selected Work / M1-03 is done and intentionally did not use these - see PROJECT_CONTENT.md's explicit exclusion list for M1-03.)
3. Move M1-04 (Case Studies Home) into `CURRENT_TASK.md` when ready to start it - not yet started.

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
- This editing sandbox cannot run `npm run build` (only the Windows SWC native binary is installed, no network to fetch the Linux one). `npm run lint` and `npx tsc --noEmit` work fine here and catch most real errors; final build/visual verification has to happen on the user's machine.
- `<html lang>` in `src/app/layout.tsx` is static (`"en"`), not locale-aware - known, undone a11y/SEO gap, see M1-02 Evidence/notes for why it wasn't fixed inline.

## Next actions

See "Next planned" above - this section is intentionally not duplicated.

## Maintenance rule

On task completion: remove obsolete temporary detail, retain only facts future sessions would otherwise need to rediscover, link to specs/ADRs instead of duplicating them.
