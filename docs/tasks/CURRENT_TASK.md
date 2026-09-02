# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: M1-06
Title: Research & Recognition
Status: done

## Goal

Implement a concise editorial Research & Recognition section that shows
Matheus's statistical foundation, early forecasting work and external
recognition without duplicating projects or professional experience
already featured elsewhere on Home.

## Scope

IN:

- #research
- section header
- three editorial entries
- Wavelet thesis
- FarmIA recognition
- Retail Sales Forecasting
- EN/PT
- external GitHub links
- responsive desktop/mobile
- evidence boundaries
- ADR-013
- stale CNN documentation correction
- planning/state updates

OUT:

- Capabilities
- Writing
- Contact
- Footer
- Education section
- certifications
- UFSCar general coursework
- UFSCar teaching
- Closer AI
- full research pages
- project detail pages
- new dependencies

## Verification

```bash
npm run verify   # PASS — run 2x (after implementation, and again during
                  # the reviewer's independent re-run)
git diff --check # PASS
git diff -- package.json package-lock.json  # empty — no new dependency
```

Manual visual review (headless Chromium via Playwright against `npm run dev`,
same approach as prior M1 tasks — no interactive browser available in this
environment):

- `/en` 1440x900 — checked, 0px horizontal overflow, screenshotted + inspected
- `/en` 390x844 — checked, 0px horizontal overflow, screenshotted + inspected
- `/pt` 1440x900 — checked, 0px horizontal overflow, screenshotted + inspected
- `/pt` 390x844 — checked, 0px horizontal overflow, screenshotted + inspected

Confirmed via screenshot + zoomed crops: three entries render in the
correct editorial (non-chronological) order — Research/01 Wavelet,
Recognition/01 FarmIA, Research/02 Retail Sales Forecasting; desktop shows
metadata and link side-by-side (`sm:` up), mobile stacks them; type/index
labels ("RESEARCH / 01", "RECOGNITION / 01") read correctly; PT's
translated evidence lines ("1º LUGAR · 100+ EQUIPES", "PROJETO ACADÊMICO")
wrap cleanly with no overflow; the section reads as a quiet editorial
index — no cards, no diagrams, no metric tiles — visually closest to
Experience's plain list treatment, distinct from Selected Work/Case
Studies. One initial visual concern (a faint duplicate-looking text
fragment near the bottom of a downscaled thumbnail) was investigated by
cropping the full-resolution region directly — confirmed to be a
downscaling/compression artifact in the thumbnail, not a real rendering
bug (the actual pixels are Retail's own metadata/link row, correctly
rendered once). 1024px/768px/360px were not separately screenshotted —
low risk, this section has no custom breakpoint of its own (single-column
at every width, only the metadata/link row's `sm:` flex-direction changes).

## Evidence / notes

- **Content allocation was pre-decided** by the user before this
  execution (not re-litigated): Research/01 Wavelet thesis, Recognition/01
  FarmIA, Research/02 Retail Sales Forecasting — exactly these three, in
  this editorial order, per the task brief.
- **ADR-012 exclusivity verified** (not just asserted): grepped the new
  `researchRecognition` content and `ResearchRecognition.tsx` for
  `CNN|persona|5,000|5000|50 interview|Steel Indicator|Employee
  Attrition|Banco BV|closer-ai` — zero hits. None of Steel Indicator,
  Developer Market Research/CNN, Employee Attrition/Banco BV people
  analytics, or Closer AI appear anywhere in this section. No broad
  "UFSCar general repository" row was added — only the specific
  undergraduate-thesis subpath link.
- **CNN evidence reconciliation** (the highest-risk documentation change
  in this task): two stale notes existed from M1-04, both saying the
  5,000+ quantitative responses / ~50 qualitative interviews figures could
  NOT be attributed to the CNN-covered persona research without documented
  proof (`docs/DECISIONS.md` ADR-012's Consequences section, and
  `docs/planning/PROJECT_CONTENT.md` §58's evidence-safety rules). The
  user's updated evidence base confirms the connection: 5,000+ responses,
  ~50 interviews (60+ hours), 6 personas, external repercussion including
  CNN citation about the developer/programmer profile in Brazil. Both
  notes were corrected to state this — **documentation-only**: the
  rendered `caseStudies` block in `src/content/home.ts` (the "Developer
  Market Research" entry) was deliberately NOT modified to add these
  figures, and `CaseStudies.tsx`/`CaseStudyFeature.tsx` were NOT touched
  at all (no visual redesign, per the task's explicit instruction). The
  corrected figures also do not appear anywhere in the new Research &
  Recognition content — not duplicated into the new section either.
- **Evidence-accuracy boundaries** (verified against the actual rendered
  EN/PT text, not just asserted):
  - **Wavelet thesis**: framed as descriptive/exploratory statistical
    research ("examining how relationships... change across time and
    scale using wavelet methods") — no trading strategy, investment
    performance, predictive alpha, production forecasting, or causal
    relationship claims.
  - **FarmIA**: framed strictly as hackathon prototype + team recognition
    ("First-place data challenge project developed by a five-person
    team...") — no testimonial quotes from the repository, no real
    farmer-revenue increase, real crop-yield increase, real production
    deployment, real credit decisions, or validated climate-change
    forecasting claims. The "100+ teams" competition-size figure is
    recorded as verified evidence in `PROJECT_CONTENT.md` §92.2, not
    invented.
  - **Retail Sales Forecasting**: explicitly flagged `ACADEMIC PROJECT` /
    `PROJETO ACADÊMICO` and described as "Academic forecasting project...
    historical Flask prototype" — never called a production forecasting
    system, deployed ML product, live application, or MLOps system.
- **Header nav unchanged**: `{ label: "Research", href: "#research" }`
  (EN) / `{ label: "Pesquisa", href: "#research" }` (PT) — confirmed
  untouched (`Header.tsx` absent from `git diff --stat`), NOT expanded to
  "Research & Recognition" in the nav. Only the section's own heading text
  (`researchRecognition.eyebrow`/headline) uses the expanded name, exactly
  as instructed.
- **No regressions**: `Header.tsx`, `Hero.tsx`, `About.tsx`,
  `SelectedWork.tsx`, `ProjectFeature.tsx`, `CaseStudies.tsx`,
  `CaseStudyFeature.tsx`, `Experience.tsx` are all untouched (confirmed via
  `git diff --stat`). `package.json`/`package-lock.json` untouched — no
  new dependency. No `"use client"` in the new component.
- **All 3 external links verified live** via `curl` (200 for all three:
  the UFSCar thesis subpath, FarmAI.Hackaton, retail-sales-forecasting)
  and confirmed byte-identical between the diff and the curl-tested
  strings (no typos).
- Reviewer self-review (`.claude/agents/reviewer.md`) ran against the full
  diff with a 12-point structural checklist plus the two strict
  correctness bars (ADR-012 exclusivity, CNN evidence reconciliation):
  verdict **PASS**. Zero BLOCKER/MAJOR/MINOR findings — confirmed
  independently (not just asserted): `npm run verify` re-run PASS; grep
  confirmed no exclusivity violations; `git diff --stat` confirmed no
  untouched-file regressions; link strings confirmed to match exactly.

## Final result

- Changed: `src/content/home.ts` (added `ResearchRecognitionType`/
  `ResearchRecognitionItem`/`ResearchRecognitionContent` types + content
  block, EN+PT, 3 items), `src/app/[locale]/page.tsx` (wires
  `ResearchRecognition` in after `Experience`), `docs/DECISIONS.md` (new
  ADR-013 + ADR-012 correction), `docs/planning/PORTFOLIO_SPEC.md` §16
  (rewritten, old draft kept in a collapsed historical note),
  `docs/planning/HOME_WIREFRAME.md` §24-25 (rewritten, same treatment),
  `docs/planning/PROJECT_CONTENT.md` (new §92 source-of-truth block + §58
  correction), `docs/CONTEXT_MAP.md` (Research entry updated). New:
  `src/components/sections/ResearchRecognition.tsx` — Server Component, no
  new dependency, no unnecessary Client Component.
- Verification: `npm run verify` PASS (run 2x, incl. the reviewer's own
  independent re-run). `git diff --check` PASS. `package.json`/
  `package-lock.json` unchanged. Reviewer self-review PASS (0 findings at
  any severity). Manual visual check: `/en` and `/pt` at 1440px and 390px,
  screenshotted and inspected, 0px horizontal overflow measured at all
  four; correct editorial order, correct type labels, correct PT wrapping
  all visually confirmed.
- Not visually verified (explicitly, not silently skipped): 1024px, 768px,
  360px breakpoints weren't separately screenshotted — low risk, this
  section has no custom breakpoint beyond the metadata/link row's `sm:`
  flex-direction switch.
- Not done (explicitly out of scope for M1-06, tracked for later
  milestones): M1-07 Capabilities.
