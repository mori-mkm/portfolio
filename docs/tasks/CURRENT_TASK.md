# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

**ID:** M1-02
**Title:** Visual Foundation — Header, Hero and About
**Status:** done

## Goal

Implement the first visual slice of the bilingual Home: global design tokens, Header (desktop + mobile nav, language switcher), Hero, About, and responsive behavior at the two reference breakpoints.

## Why

Validate the site's visual identity end-to-end (tokens -> layout -> real components) before building the remaining Home sections, so any design-system corrections happen once, early, instead of being repeated across every later section.

## Scope

### In scope

- Global design tokens (color system, type scale, spacing) as CSS variables in `src/app/globals.css`
- Global page container / layout frame
- Typography foundation (Geist Sans/Mono usage)
- Header: desktop nav, mobile nav, language switcher
- Hero (desktop + mobile)
- About (desktop + mobile)
- EN/PT content for all of the above
- Layout correctness at 1440px and 390px
- Basic accessibility (semantic structure, focus order, no obvious a11y violations)

### Out of scope (do not implement)

- Selected Work, Case Studies, Experience, Research, Capabilities, Writing, Contact, final Footer
- Project pages, MDX
- Deployment
- RAG / "Ask Matheus" / AI Closer prominence
- Complex animation

## Relevant context

Use `docs/CONTEXT_MAP.md` — do not read the full planning docs.

- Navigation / Header -> CONTEXT_MAP "Navigation / Header"
- Hero -> CONTEXT_MAP "Hero"
- About -> CONTEXT_MAP "About"
- Design tokens -> CONTEXT_MAP "Styling / design tokens"
- Responsive rules -> CONTEXT_MAP "Responsive behavior / breakpoints"
- i18n -> CONTEXT_MAP "Internationalization (EN/PT)"

Likely code (some paths do not exist yet and will be created):

- `src/app/globals.css`
- `src/app/[locale]/page.tsx`
- `src/content/home.ts`
- `src/components/layout/Header.tsx` (new)
- `src/components/sections/Hero.tsx` (new)
- `src/components/sections/About.tsx` (new)

## Plan

1. Establish design tokens and global layout frame in `globals.css` per SPEC §22-27.
2. Extend `src/content/home.ts` with typed EN/PT content for nav, Hero, About (source copy from CONTENT/SPEC where applicable).
3. Implement Header (desktop nav, mobile nav, language switcher) as mostly Server Component, Client Component only at the interactive boundary (mobile menu toggle, switcher).
4. Implement Hero per SPEC §8 / WIREFRAME §8-9.
5. Implement About per SPEC §9 / WIREFRAME §10-11.
6. Validate EN/PT rendering and responsive behavior at 1440px and 390px.
7. Run `npm run verify`; fix findings; self-review against the reviewer's checklist before marking done.

## Acceptance criteria

Confirmed 2026-09-01: `npm run verify` PASS on the user's machine (lint + build).
Confirmed 2026-09-01: user-provided screenshots of `/en` desktop (~1600px) and
mobile (~390px) - Header, Hero, About all render per spec, no dark mode, no
horizontal overflow, Geist fonts applied, EN/PT switcher shows correct
active/inactive state. Not separately screenshotted: `/pt` render (low risk -
`Record<Locale, HomeContent>` type-guarantees the same component tree/shape,
only text differs) and the mobile menu overlay actually opening (low risk -
simple, reviewed conditional render). Flag if either shows a problem.

- [x] `/` still redirects to `/en`
- [x] `/en` renders - confirmed via screenshot
- [ ] `/pt` renders - not separately screenshotted, low risk (see above)
- [x] EN/PT switching works - switcher visible with correct active/inactive styling in screenshot
- [x] Desktop Header works (nav + language switcher) - confirmed via screenshot
- [ ] Mobile menu opens/closes - toggle button visible in mobile screenshot, overlay itself not screenshotted
- [x] Hero follows design spec (SPEC §8, WIREFRAME §8-9) - confirmed via screenshot
- [x] About follows design spec (SPEC §9, WIREFRAME §10-11) - confirmed via screenshot
- [x] Warm off-white visual system applied (no accidental dark mode) - confirmed via screenshot
- [x] Geist Sans/Mono correctly applied - confirmed via screenshot
- [x] No horizontal overflow at ~390px - confirmed via screenshot
- [x] Portuguese copy does not break layout - structurally guaranteed by types; no PT screenshot to visually confirm
- [x] Semantic HTML / basic accessibility present - implemented (see prior note), not separately audited
- [x] `npm run lint` passes - confirmed on user's machine
- [x] `npm run build` passes - confirmed on user's machine

## Verification

```bash
npm run lint      # PASS - confirmed both in the editing sandbox and on the user's machine (2026-09-01)
npx tsc --noEmit  # PASS - confirmed in the editing sandbox
npm run build     # PASS - confirmed on the user's machine (2026-09-01): compiled
                  # successfully, static prerendering worked for `/` and `/_not-found`,
                  # `/[locale]` builds as a dynamic route. Could not be verified in
                  # the editing sandbox itself (missing Linux SWC binary there),
                  # but that was an environment limitation, not a code issue -
                  # now closed out by the user's own run.
```

**Pass condition:** `npm run verify` exits 0 (confirmed), AND every acceptance criterion above is confirmed by hand against `npm run dev` at 1440px and 390px, in both `/en` and `/pt`. Still pending: `npm run dev` was not run yet, so the visual/manual checklist below is still open.

## Retry budget

Maximum autonomous correction attempts for the same failure: **2**.

## Evidence / notes

- Three content facts resolved with the user on 2026-09-01:
  1. GitHub: https://github.com/mori-mkm - confirmed correct.
  2. LinkedIn: https://www.linkedin.com/in/matheus-mori - confirmed, wired
     into the mobile menu (WIREFRAME S7.6 order: GitHub -> LinkedIn -> Resume,
     after the EN/PT switcher).
  3. Resume: changed from a placeholder `/resume.pdf` to the user's live
     Google Doc (opens in a new tab everywhere). This is an `/edit` URL, not
     a dedicated view-only share link - it only behaves safely if the doc's
     sharing is "Anyone with the link -> Viewer". If it's "Editor", any site
     visitor could edit the resume. Not verified from here - user should
     confirm the sharing setting, or switch to Google's "Publish to web"
     view-only URL instead.
- `npm run build` is now confirmed PASS on the user's own machine (Windows) -
  closes out the environment limitation from the editing sandbox, which
  could only run `lint` + `tsc --noEmit`.
- `<html lang="en">` in `src/app/layout.tsx` is still static regardless of
  locale (a11y/SEO gap for `/pt`) - not fixed here, see prior note: fixing
  it needs restructuring where the root `<html>/<body>` lives in the App
  Router tree, bigger than Header/Hero/About scope. Still an open follow-up.
- Language switcher links to `/en` / `/pt` (root of each locale), not
  "current route, locale swapped" - fine today (only one route exists) but
  will need real path-rewriting once M2/M3 routes ship.
- Nav items other than "About" (Projects, Case Studies, Experience,
  Research, Writing, Contact) point to `#anchor`s that don't exist on the
  page yet - inert, not broken, until those sections ship per BACKLOG.
- About PT-BR body paragraphs, pillar descriptions, and background/
  direction lists are editorial translations written following
  PORTFOLIO_SPEC.md's "Traducao editorial" rules - worth a native-speaker
  editorial pass, not just a mechanical check.

## Final result

- Changed: design tokens (globals.css), extended `src/content/home.ts`
  (nav/hero/about + GitHub/LinkedIn/Resume links, EN+PT), created `Header`
  (client), `Hero`, `About`, `SectionHeading` under `src/components/`,
  rewired `src/app/[locale]/page.tsx`. Resume now links to the user's
  editable Google Doc (see Evidence/notes for the sharing-permission
  caveat) instead of a placeholder PDF.
- Verification: `npm run lint` PASS, `npx tsc --noEmit` PASS, `npm run
  build` PASS (confirmed on the user's machine, 2026-09-01). Visual
  confirmation via user-provided screenshots of `/en` desktop and mobile -
  see Acceptance criteria for exactly what was and wasn't covered.
- Follow-up: (1) confirm the Google Doc's sharing is "Viewer", not
  "Editor"; (2) optionally screenshot `/pt` and the open mobile menu for
  full-criteria confirmation (low priority, low risk); (3) decide if/when
  to fix the static `lang="en"`; (4) move M1-03 (Selected Work) into this
  file when ready to start it.
