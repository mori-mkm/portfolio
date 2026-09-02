# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: M1-07
Title: Capabilities
Status: done

## Goal

Implement a concise, evidence-backed Capabilities section that synthesizes
what the portfolio already demonstrates (professional experience + public
projects + evidence-backed studies), without listing every technology the
user has ever touched or inventing maturity the current evidence doesn't
support.

## Scope

IN:

- #capabilities
- section header
- four groups: Applied AI, Machine Learning, Data, Engineering
- EN/PT
- responsive desktop/tablet/mobile
- evidence-boundary discipline (no RAG/Agents/FastAPI/PySpark/CI-CD/Cloud)
- planning doc update (PORTFOLIO_SPEC §18)
- harness state update

OUT:

- Writing
- Contact
- Footer
- Header nav changes
- new dependencies
- individual algorithm names (LightGBM, SARIMAX, etc.)
- proficiency levels / percentages / skill meters
- project descriptions or evidence metrics embedded in capability items

## Verification

```bash
npm run verify   # PASS — run 3x (after implementation, after the
                  # breakpoint bug fix below, and again during the
                  # reviewer's independent re-run)
git diff --check # PASS
git diff -- package.json package-lock.json  # empty — no new dependency
```

Manual visual review (headless Chromium via Playwright against `npm run dev`,
same approach as prior M1 tasks — no interactive browser available in this
environment). This task explicitly called for extra tablet/breakpoint
coverage beyond the usual 4 combos, so more viewports were checked:

- `/en` 1440x900, 1024x900, 900x900, 768x900, 700x900, 600x900, 390x844,
  360x800 — all checked, screenshotted + inspected
- `/pt` 1440x900, 900x900, 700x900, 390x844 — checked, screenshotted +
  inspected

Result: 0px horizontal overflow at every width **except 768px**, where an
18px overflow was found and traced (via DOM element inspection — the
overflowing element is `<HEADER>`, not anything in this diff) to
`Header.tsx`'s desktop nav being too wide for exactly a 768px viewport.
This is a **pre-existing issue, not a regression from this task** —
`Header.tsx` is completely untouched by this diff (confirmed via
`git diff --stat`), and nothing in this diff changes global CSS, layout,
or container-width tokens. Reported below as a discovered-but-out-of-scope
finding, not fixed (Header is explicitly off-limits for M1-07).

Confirmed via screenshots: exactly 4 groups (Applied AI, Machine Learning,
Data, Engineering) in that order; grid renders 4 columns at ≥1024px, a
clean 2×2 at 640–1023px, and 1 column below 640px; semantic `<h3>` group
headings + `<ul>/<li>` item lists; no cards/pills/icons/percentages; PT
translations (including longer group items like "Modelagem de Dados",
"Workflows assistidos por IA") wrap cleanly with no overflow at any width
checked.

## Evidence / notes

- **A real layout bug was found and fixed during this task's own visual
  verification** (not by the reviewer — caught before requesting review):
  the grid originally used `min-[900px]:grid-cols-4` (an arbitrary
  Tailwind variant) alongside `sm:grid-cols-2`. At 1024px and 1440px the
  screenshots showed only 2 columns instead of 4 — the arbitrary variant
  wasn't winning the CSS cascade against the named `sm:` variant touching
  the same property. Root cause: Tailwind doesn't guarantee an arbitrary
  `min-[Npx]:` variant is emitted after a named breakpoint variant in the
  generated stylesheet, so when both apply at the same viewport width, the
  named variant can win regardless of pixel value. **Fix**: switched to
  the named `lg:grid-cols-4` (1024px) instead — named breakpoints are
  always correctly mobile-first-ordered by Tailwind. Re-verified with
  fresh screenshots at 1024px and 1440px after the fix: 4 columns render
  correctly. `Experience.tsx`'s existing `min-[900px]:flex-row` pattern
  (M1-05) was checked and confirmed NOT exposed to this bug — it only has
  two competing states (base vs. `min-[900px]`), no competing named
  breakpoint touches the same `flex-direction` property, so there's no
  cascade conflict there. Documented as an implementation lesson in
  `HOME_WIREFRAME.md` §26 for future sections: prefer named Tailwind
  breakpoints over arbitrary `min-[Npx]:` ones whenever more than one
  breakpoint state touches the same CSS property.
- **Pre-existing Header 768px overflow discovered, not fixed**: see
  Verification section above. Recorded here so it isn't silently
  rediscovered later; a future task should fix `Header.tsx`'s desktop nav
  width at that specific viewport (likely the point where the mobile
  "MENU" toggle hasn't kicked in yet but the full desktop nav + logo +
  language switcher + Resume button don't quite fit).
- **Evidence-boundary discipline** (verified against the actual rendered
  EN/PT text, not just asserted): grepped the `capabilities` content block
  for RAG/Retrieval-Augmented/Agentic Systems/Multi-Agent/LangChain/
  LangGraph/CrewAI/Vector Database/AI Evaluation/AI Observability/
  FastAPI/PySpark/CI-CD/Kubernetes/Terraform/AWS/GCP/Cloud
  Architecture/Microservices/Monitoring/Observability/individual-
  algorithm-names(LightGBM/XGBoost/CatBoost/SARIMAX/Prophet/Logistic
  Regression/Cox)/database-tool-inventory(SQL Server/DuckDB/MongoDB/
  Databricks) — zero hits inside the block. The only "AI ENGINEERING"
  string in the repo is pre-existing Hero/About content (M1-02), untouched
  by this task.
- **Group is "Applied AI", not "AI Engineering"** — deliberate, per ADR-007
  (evidence before prominence) applied to the current state of public
  project evidence (LLM-assisted workflows/structured outputs/prompt
  engineering are publicly evidenced mainly through Application Job; RAG/
  agentic systems/evals are not yet publicly evidenced at a mature level).
  No new ADR created — this is an application of an existing decision, not
  a new one, per the task's explicit instruction.
- **No proficiency annotations, no embedded evidence metrics**: verified
  no item anywhere carries a "Professional"/"Personal Project"/"Academic"/
  years/skill-level label, and no item has a project-specific number
  appended (e.g. no "Testing — 124 tests").
- **Header unchanged**: no "Capabilities"/"Capacidades" nav item was added
  — confirmed both locale `nav` arrays untouched and `Header.tsx` itself
  untouched (`git diff --stat`). This was a deliberate task requirement,
  not an oversight.
- **No regressions**: `Header.tsx`, `Hero.tsx`, `About.tsx`,
  `SelectedWork.tsx`, `ProjectFeature.tsx`, `CaseStudies.tsx`,
  `CaseStudyFeature.tsx`, `Experience.tsx`, `ResearchRecognition.tsx` are
  all untouched (confirmed via `git diff --stat`). `package.json`/
  `package-lock.json` untouched — no new dependency. No `"use client"` in
  the new component.
- Reviewer self-review (`.claude/agents/reviewer.md`) ran against the full
  diff with a 12-point structural/content checklist plus explicit
  re-verification of the breakpoint-bug fix and the Header-overflow
  root-cause conclusion: verdict **PASS**. All findings NOTE-level
  (confirmatory), zero BLOCKER/MAJOR/MINOR.

## Final result

- Changed: `src/content/home.ts` (added `CapabilityGroup`/
  `CapabilitiesContent` types + content block, EN+PT, 4 groups),
  `src/app/[locale]/page.tsx` (wires `Capabilities` in after
  `ResearchRecognition`), `docs/planning/PORTFOLIO_SPEC.md` §18 (rewritten
  to the evidence-backed V1 allocation, old speculative list kept in a
  collapsed historical note), `docs/planning/HOME_WIREFRAME.md` §26-27
  (AI Engineering → Applied AI, final item lists, + the `min-[Npx]:`
  cascade-bug implementation note), `docs/CONTEXT_MAP.md` (Capabilities
  entry updated). New: `src/components/sections/Capabilities.tsx` — Server
  Component, no new dependency, no unnecessary Client Component.
- Verification: `npm run verify` PASS (run 3x, incl. the reviewer's own
  independent re-run). `git diff --check` PASS. `package.json`/
  `package-lock.json` unchanged. Reviewer self-review PASS (0 findings at
  BLOCKER/MAJOR/MINOR). Manual visual check across 8 EN + 4 PT viewport
  combinations (broader than the usual 4, per this task's explicit tablet-
  breakpoint requirement) — 0px overflow everywhere except a pre-existing,
  out-of-scope Header issue at 768px (documented above, not fixed).
- Not done (explicitly out of scope for M1-07, tracked separately): fixing
  the pre-existing 768px Header overflow (a future task should address
  this — flagged in `progress.md`'s Known pitfalls).

## Discovered but out of scope

- **Pre-existing `Header.tsx` horizontal overflow at exactly 768px
  viewport width** (18px, traced to the `<HEADER>` element itself via DOM
  inspection). Confirmed unrelated to this diff — `Header.tsx` is
  untouched by M1-07 (or any recent M1 task). Needs its own future fix;
  recorded in `.claude/state/progress.md`'s Known pitfalls so it isn't
  silently rediscovered.
