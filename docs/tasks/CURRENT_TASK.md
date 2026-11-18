# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: CONTENT-CAREER-FACTS
Title: Correct career facts and copy against the Master Resume (no redesign, no new ADR)
Status: done - verified on branch `feat/dark-editorial` (from `d59a42d`); not committed.

## Scope

IN: `src/content/home.ts` (EN + PT) - Professional Impact, Experience descriptions, Other Work (Developer Market Research copy/link, FarmIA award link, Wavelet year), About opening; current-state notes in planning docs, ADR-021 correction pointer, progress.

OUT: layout, section/project order, Hero, Featured Work, Capabilities, Contact/backend, media, portrait, `<html lang>`; commit/push/deploy.

Source of truth for career facts: `C:\Users\mathe\Desktop\Curriculo\Curriculo_Mestre_Matheus_Mori.md` (updated 2026-11-12).

## Acceptance criteria

- [x] Impact: +11% lead volume (Contmatic), −20% CAC (Rocketseat), 7 days → 1 day (BIP), 4,000+ employees covered (Banco BV); exactly 4 items.
- [x] Experience: Contmatic +11% leads / −13% CPL; Rocketseat +15% purchase volume / −20% CAC; BIP direct intern → mid-level promotion; Banco BV policy "helped inform".
- [x] FarmIA keeps GitHub + adds award post; Developer Market Research uses the LinkedIn post URL and label.
- [x] Wavelet thesis shows no year.
- [x] EN/PT parity; Featured Work, Capabilities and Contact unchanged.
- [x] `npm run verify` and `git diff --check` pass; no overflow at 1440/768/390 EN + PT.
