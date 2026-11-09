# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: HOME-REFINE-021
Title: Hiring-first Home hierarchy and product-showcase content (ADR-021)
Status: done - verified on branch `feat/dark-editorial` (from `0d49aa9`); not committed.

## Scope

IN: Home only - `src/content/home.ts`, `src/app/[locale]/page.tsx`, Hero, new ProfessionalImpact / OtherWork, SelectedWork, About (portrait-ready), Capabilities (quieter), Contact copy, ProjectFeature / new ProjectMediaStage / new ProjectVideo / ProjectVisual; ADR-021 + current-state docs.

OUT: Supabase, Resend, Turnstile, migrations, API behavior, env vars, DNS, WAF; `<html lang>`; résumé links; public email; new dependencies; portrait/stock assets; commit/push/deploy.

## Acceptance criteria

- [x] Section order Hero, 01 Impact, 02 Projects, 03 Experience, 04 Other Work & Research, 05 About, 06 Capabilities, 07 Contact (EN + PT).
- [x] Projects: DataLab OS, Empório, AI Closer (no links, IN DEVELOPMENT), Procurement.
- [x] Attrition in Other Work; Case Studies / Research sections removed.
- [x] Hero has exactly one CTA; zero résumé links.
- [x] Media union diagram | image | video; Empório image in a 16:10 cover stage.
- [x] No portrait rendered (none exists).
- [x] Capabilities evidence boundary unchanged.
- [x] No overflow at 1440/1024/768/390/360, EN + PT; no console errors.
- [x] `npm run verify` and `git diff --check` pass.
