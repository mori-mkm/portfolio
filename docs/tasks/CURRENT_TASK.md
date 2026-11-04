# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: CONTENT-EMPORIO + CONTENT-NO-RESUME
Title: Add Empório AI Assistant as Selected Work 02 (ADR-019); remove every public résumé link (ADR-020)
Status: done - verified on branch `feat/dark-editorial`, **not committed** (user reviews first).

## Scope

IN: `src/content/home.ts` (EN/PT Selected Work, Capabilities, `SelectedProject` image|visual union, `externalLinks` without resume), `ProjectFeature.tsx` (next/image branch), `public/projects/emporio-ai-assistant/03-price-installments.png` (byte-identical copy), Header/Hero/Experience/Contact/page.tsx résumé removal, ADR-019/020 and current-state planning docs.

OUT: no change to other projects' copy/metrics, Hero/About copy, metadata, Case Studies; no RAG/LangChain/multi-agent claims; no Supabase/Resend/Turnstile/DNS/env changes; no commit/push/deploy.

## Acceptance criteria

- [x] Selected Work order 01 DataLab OS, 02 Empório AI Assistant, 03 Procurement, 04 Attrition (EN + PT).
- [x] Empório copy/proof exactly as specified; GitHub link only, no Live Demo.
- [x] Real screenshot via next/image, real 976x1022 dimensions, no frame/shadow/crop, localized alt matching the image.
- [x] AI Evaluation / Avaliação de IA in Applied AI; RAG still excluded.
- [x] Zero rendered Resume/Currículo links or CTAs; `resume`/`resumeHref` removed from the content model.
- [x] No horizontal overflow at 1440/1024/768/390/360, EN + PT.
- [x] `npm run verify` and `git diff --check` pass.

## Verification

- `npm run verify` PASS (lint + build); `git diff --check` clean.
- Playwright (dev server, 10 combos): overflow 0; image aspect 0.955 preserved, lazy, loads; order 01-04; Empório links = GitHub only; résumé links on page = 0; Hero has 1 CTA; Contact/Footer = LinkedIn + GitHub; mobile menu = GitHub + LinkedIn; no console errors.
- Dev-only console warning: Next flags the screenshot as LCP when the test scrolls straight to it - test artifact (not above the fold on a normal load), `preload` deliberately not used.
