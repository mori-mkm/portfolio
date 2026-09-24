# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: VIS-DARK-EDITORIAL
Title: Dark editorial visual refactor (ADR-018)
Status: done - verified on branch `feat/dark-editorial`, **not committed** (user reviews first). Previous version: tag `pre-dark-editorial`.

## Scope

IN: `globals.css` tokens/shared classes/motion; Header, Hero, SectionHeading, ProjectFeature, ProjectVisual, CaseStudyFeature, all sections' spacing/typography, ContactForm styling; new `layout/Footer.tsx` + `footer` content (EN/PT); ADR-018.

OUT: no content/claim changes beyond footer copy and moving GitHub/Resume links; no new dependency; no Capabilities additions (RAG, Vector DB, CI/CD etc. stay excluded per ADR-007/017); no scroll-spy active nav.

## Acceptance criteria

- [x] Palette/tokens centralized; no raw colors outside `globals.css`.
- [x] Accent limited to numbers, CTAs, arrows, hover/focus, final pipeline stage.
- [x] Hero, navbar, numbered sections, editorial projects, experience rows, footer.
- [x] No horizontal overflow at 1440/1024/820/768/390/360, EN + PT.
- [x] Reduced motion respected; visible focus; WCAG AA text contrast.
- [x] `npm run verify` and `node --test` pass.

## Verification

- `npm run verify` PASS; `node --test --experimental-strip-types src/lib/supabase/retry.test.ts` 5/5 PASS.
- Playwright (dev server): overflow 0 on all 12 combos; nav visible >=1024; Tab focus outline; mobile menu opens (11 links) and closes on Escape; `.reveal` reaches opacity 1 in view; primary button #5B7CFF / dark text / 8px radius.
- Console: only the known pre-existing Playwright-screenshot hydration warning (Contact honeypot, see progress.md).
