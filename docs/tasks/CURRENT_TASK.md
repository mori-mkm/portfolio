# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: M1-07A
Title: Header tablet overflow fix
Status: done

## Goal

Eliminate the pre-existing 18px horizontal overflow caused by `Header.tsx`
at exactly 768px viewport width (discovered and left unfixed as
out-of-scope in M1-07), by finding the true root cause and choosing the
correct breakpoint — not by masking the symptom.

## Scope

IN:

- `src/components/layout/Header.tsx` only
- root-cause diagnosis (measured, not guessed)
- breakpoint fix for desktop-nav visibility
- accessibility re-verification (keyboard, ARIA)
- visual verification across the required viewport matrix, EN + PT
- harness state update (remove the fixed pitfall, record the lesson)

OUT:

- Writing (M1-08)
- Capabilities content/section
- any other Home section's content
- new dependencies
- general Header refactor
- new ADR (small responsive fix, not an architectural decision)

## Root cause

`Header.tsx`'s desktop nav (brand + 7 nav items with `gap-7` + language
switcher + Resume link) was gated to appear at Tailwind's built-in `md:`
breakpoint (768px), but the actual rendered content needs more horizontal
space than that at zero gap between the three flex groups. Measured via
Playwright at a wide, unconstrained viewport (1600px, where nothing is
being compressed):

- EN: brand ~104px + nav ~599px + switcher+resume ~148px + 64px container
  padding ≈ **915px minimum**, zero breathing room.
- PT: brand ~104px + nav ~625px (longer labels: "Estudos de Caso",
  "Experiência") + switcher+resume ~154px + 64px padding ≈ **947px
  minimum**, zero breathing room.

At exactly 768px, the desktop nav was structurally guaranteed to overflow
for both locales — this was never a rendering fluke, it's arithmetic.

## Fix

Changed the breakpoint that gates desktop-nav-visibility from `md:`
(768px) to the named `lg:` (1024px) Tailwind breakpoint, on exactly 4
class strings in `Header.tsx`:

1. Desktop `<nav>`: `hidden items-center gap-7 md:flex` → `... lg:flex`
2. Language-switcher/Resume `<div>`: `hidden items-center gap-6 md:flex`
   → `... lg:flex`
3. Mobile toggle `<button>`: `... md:hidden` → `... lg:hidden`
4. Mobile menu overlay `<div id="mobile-menu">`: `... md:hidden` →
   `... lg:hidden`, **plus** one necessary side-effect fix: `md:top-[72px]`
   added to the same className.

**Why 1024 (`lg:`), not 900**: the task brief explicitly warned against
blindly copying the site's existing ~900px "complex layouts break"
convention. Measurement confirmed 900px would in fact still be too narrow
for PT (~947px minimum with zero gap — would overflow or look completely
cramped at 900). 1024px was chosen because it's the smallest **named**
Tailwind breakpoint that comfortably clears both locales' true minimum
with real breathing room (~75-110px of slack, split across two gaps ≈
35-55px each — comfortable, not excessive). A named breakpoint was
deliberately preferred over a hand-tuned arbitrary `min-[Npx]:` value
(e.g. `min-[950px]:`) because M1-07 independently discovered a real
Tailwind cascade-ordering bug: an arbitrary variant isn't guaranteed to be
emitted after a named one in the generated stylesheet, so it can silently
lose the cascade to a named variant touching the same property at the
same viewport width. Reusing `lg:` avoids that entire class of risk.

**Why the `md:top-[72px]` addition was necessary, not scope creep**: the
mobile menu overlay's fixed `top-16` (64px) offset was previously only
ever visible below 768px, where the header is always `h-16` (64px) tall —
no mismatch existed. Moving the mobile-menu-active range up to 1023px
means the overlay can now appear in the 768–1023px band, where the
header's own (unrelated, untouched) `md:h-[72px]` rule makes it 72px
tall. Without this addition, the overlay would sit 8px too high in that
band. This is a direct, required consequence of the breakpoint change
itself, not an unrelated refactor — confirmed necessary by visual
inspection of the opened overlay at 900px.

## Verification

```bash
npm run verify   # PASS — run 2x (after implementation, and again during
                  # the reviewer's independent re-run)
git diff --check # PASS
git diff -- package.json package-lock.json  # empty — no new dependency
git diff --stat  # exactly 1 file, 4 lines changed (+4/-4):
                  # src/components/layout/Header.tsx
```

Manual visual + measured review (headless Chromium via Playwright against
`npm run dev` — no interactive browser available in this environment).
This task required the full requested viewport matrix, not just the usual
4 combos:

| viewport | EN overflow | PT overflow | nav mode |
|---|---|---|---|
| 1440 | 0px | 0px | desktop |
| 1024 | 0px | 0px | desktop |
| 900 | 0px | 0px | compact |
| 820 | 0px | 0px | compact |
| 768 | 0px | 0px | compact |
| 700 | 0px | 0px | compact |
| 600 | 0px | 0px | compact |
| 390 | 0px | 0px | compact |
| 360 | 0px | 0px | compact |

`document.documentElement.scrollWidth - clientWidth` measured directly at
every cell above — 0px everywhere, both locales. `nav mode` measured via
`getComputedStyle` on the primary nav (`display !== 'none'` = desktop).

Header screenshotted specifically (not just full-page) at 1440/1024/900/
768/390 for both locales and visually inspected: desktop nav renders with
real, comfortable breathing room at 1024px for both EN and PT (not
cramped, and the 1024 threshold has genuine content-fit justification,
not just an oversized safety margin); compact "MENU" toggle appears
cleanly at 900px and below with no clipping or premature-collapse
awkwardness. Full-page `/en` and `/pt` at 1440/390 also re-screenshotted
to confirm no regression to any other Home section (Hero through
Capabilities) — 0px overflow, visually unchanged.

Keyboard accessibility re-verified with Playwright (this range — 768 to
1023px — was newly exercised by the fix, so worth confirming explicitly,
not just assuming unchanged JS still works): Menu button is focusable and
reachable via Tab; `Enter` opens the overlay (`aria-expanded` toggles to
`true`, `#mobile-menu` becomes visible); `Escape` closes it (`#mobile-menu`
visibility returns to hidden). Opened overlay screenshotted at 900px:
no gap or overlap under the header bar (confirms the `md:top-[72px]` fix),
all nav items + language switcher + GitHub/LinkedIn/Resume links present
and correctly positioned, "MENU"/"CLOSE" toggle text swaps correctly.

## Evidence / notes

- **Root cause was measured, not guessed** — per the task's explicit
  instruction not to blindly assume the breakpoint or copy the site's
  existing ~900px convention. The measurement itself (see Root cause
  above) is what ruled out 900px as genuinely too narrow for PT, not an
  assumption.
- **Not masked**: no `overflow-x-hidden`/`overflow-hidden` added anywhere,
  no `scale-` transform, no font-size reduction on nav text (`text-[15px]`
  unchanged), no `whitespace-nowrap`-plus-clipping trick, no
  `overflow-x-hidden` on any ancestor. The fix changes when the desktop
  nav is allowed to render, not how it's rendered — a genuine elimination
  of the cause, not a visual cover-up.
- **No nav items removed, none abbreviated**: `nav` array in
  `src/content/home.ts` is completely untouched (`git diff` on that file
  is empty) — the component reads it via `nav.map(...)`, so there was
  never a hardcoded list in `Header.tsx` to accidentally trim. "Case
  Studies" still reads in full, both locales.
- **No "Capabilities"/"Capacidades" nav item added** — explicitly
  forbidden by the task brief; confirmed by the same empty `home.ts` diff.
- **Isolated, minimal diff**: exactly one file changed
  (`src/components/layout/Header.tsx`), 4 lines (+4/-4). No other section
  component, no content file, no planning doc, no global CSS was touched
  — matches the task's explicit "prefer the smallest safe change" /
  "não fazer refactor geral" instruction. Component structure (props,
  state, both `useEffect` hooks, JSX nesting) identical apart from the 4
  className edits.
- **No new ADR** — per the task's own instruction, this is a small
  responsive fix, not a durable architectural decision.
- Reviewer self-review (`.claude/agents/reviewer.md`) ran against the
  full diff with the task's own 10 review questions plus explicit
  re-verification of every claim in this note (diff content, ARIA
  attributes, absence of masking techniques, absence of nav-array
  changes, dependency diff): verdict **PASS**, zero findings at any
  severity. Independently re-ran `npm run verify` — PASS.

## Final result

- Changed: `src/components/layout/Header.tsx` only — 4 breakpoint class
  renames (`md:` → `lg:` on the desktop-nav-visibility gates) + 1
  necessary side-effect fix (`md:top-[72px]` on the mobile overlay, to
  match the header's own height at that breakpoint).
- Verification: `npm run verify` PASS (run 2x, incl. the reviewer's own
  independent re-run). `git diff --check` PASS. `package.json`/
  `package-lock.json` unchanged. Reviewer self-review PASS (0 findings).
  Manual visual + measured check across the full required 9-viewport ×
  2-locale matrix (18 combinations) — 0px overflow at every one.
  Keyboard accessibility (Tab focus, Enter to open, Escape to close, ARIA
  state) re-verified for the newly-exercised 768-1023px range.
- Not done (out of scope for this fix, unchanged): Writing (M1-08),
  Capabilities, any other Home section's content — all confirmed to not
  independently cause overflow (measured 0px across the full matrix
  above), but none were edited.
