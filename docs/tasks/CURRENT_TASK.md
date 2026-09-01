# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: M1-04
Title: Case Studies Home + Selected Work editorial correction
Status: done

## Goal

1. Correct Employee Attrition's Selected Work layout (it had genuinely
   different diagram anatomy from the other three projects).
2. Remove Steel Indicator from Selected Work.
3. Rebalance Selected Work around three projects.
4. Build `03 / Case Studies`.
5. Add Steel Indicator as Case Study / 01.
6. Add Developer Market Research / CNN Brasil as Case Study / 02.
7. Maintain EN/PT.
8. Preserve the current approved visual identity.

## Scope

IN:

- fixing Employee Attrition's diagram anatomy (Selected Work)
- removing Steel from Selected Work's rendered project list
- new Case Studies section (`id="case-studies"`) with 2 case studies
- ADR-012 (Home content exclusivity) + planning-doc updates to match
- EN/PT for all of the above
- responsive desktop/mobile
- evidence-safe CNN research copy (no unverified authorship/figures)

OUT:

- project detail pages / `/[locale]/projects/[slug]`
- `/[locale]/case-studies/[slug]` detail pages
- Experience, Research, Capabilities, Writing, Contact, Footer
- new dependencies

## Verification

```bash
npm run verify   # PASS — run 3x across the session (after the code changes,
                  # unaffected by the doc-only edits, and again during the
                  # reviewer's independent re-run)
git diff --check # PASS
```

Manual visual review (headless Chromium via Playwright against `npm run dev`,
same approach as M1-03 — no interactive browser available in this
environment):

- `/en` 1440x900 — checked, 0px horizontal overflow, screenshotted + inspected
- `/en` 390x844 — checked, 0px horizontal overflow, screenshotted + inspected
- `/pt` 1440x900 — checked, 0px horizontal overflow, screenshotted + inspected
- `/pt` 390x844 — checked, 0px horizontal overflow, screenshotted + inspected

Confirmed via screenshot + zoomed crops: Selected Work has exactly 3
projects with the correct alternation (Procurement text|visual, Application
Job visual|text, Attrition text|visual); Attrition's diagram now uses the
same vertical box+arrow anatomy as the other two, just smaller/tighter, not
a different structure; Case Studies renders both studies with wrapping
diagrams and no horizontal scroll at any breakpoint; PT's longer evidence
labels ("CONFIABILIDADE", "REPERCUSSÃO") wrap cleanly, no overflow (this
component uses small wrapping label/sentence text, not the large single-line
values that caused M1-03's "ESTRUTURADA" bug — that bug class doesn't apply
here).

## Evidence / notes

- **Employee Attrition root cause**: `ProjectVisual.tsx` previously had TWO
  diagram-rendering functions — `PipelineDiagram` (vertical box+arrow,
  used by procurement/steel/application-job) and a one-off `AttritionDiagram`
  (horizontal flex-wrap chip row + separate centered stat). That's a genuine
  structural inconsistency, not just a scale difference. Fixed by deleting
  `AttritionDiagram` and routing all four kinds through one `PipelineDiagram`
  function, parameterized by `stages: string[]`, an optional trailing
  `stat?: {value, label}` (used by attrition: "74% / Recall"), and a
  `compact` flag that only affects padding/gap/container-height — never
  structure. This makes the anatomy bug structurally impossible to
  reintroduce by accident (there's only one diagram renderer left).
- **Home content exclusivity (ADR-012)**: recorded in `docs/DECISIONS.md`.
  Steel Indicator moved from Selected Work into Case Studies; Procurement
  Intelligence stays Selected Work-only (no duplicate Case Study, unlike the
  original plan). Source-of-truth docs updated to match: `PROJECT_CONTENT.md`
  §2 (V1 Case Studies scope), §17 (Procurement Case Study outline marked
  deferred), §57-58 (Case Study cards rewritten to match what was actually
  implemented, incl. an evidence-safety rules block for the CNN case study),
  §79-82 (Selected Work / Case Studies final order, EN+PT); `PORTFOLIO_SPEC.md`
  §10.2-10.3, §13.2; `HOME_WIREFRAME.md` §21.2 (EN+PT header text, "the
  systems" -> "the work").
- **Case Studies vs. Selected Work anatomy**: deliberately different
  components, not a reused `ProjectFeature`. Selected Work = alternating
  two-column text/visual grid + big-number proof tiles ("what did I build").
  Case Studies = single-column editorial block (title -> positioning ->
  diagram -> label+sentence evidence blocks -> link), same typography/
  border/spacing tokens but a genuinely different structure ("how did I
  think about the problem"). No CSS reordering needed since DOM order
  already matches the required order at every breakpoint.
- **CNN case study evidence safety** (the highest-risk content in this
  task): verified no invented claims.
  - No individual-authorship overstatement anywhere — copy uses "research
    ... developed during my time at Rocketseat" / "analysis ... conducted
    during my time at Rocketseat", never "I authored" / "CNN commissioned
    my research" / "I was interviewed by CNN".
  - The master résumé's "5,000+ quantitative responses / ~50 qualitative
    interviews" figures are explicitly NOT attributed to this CNN study
    anywhere in rendered content — `PROJECT_CONTENT.md` §58 has an explicit
    rule against doing so (no proof they're the same research initiative).
  - "~20%" (from the user's own provided theme, "mulheres ocupam somente
    20% dos empregos em tecnologia") appears ONLY as a hedged, decorative,
    `aria-hidden` diagram stat ("~20% reported representation") —
    deliberately absent from the accessible FINDING evidence text, which
    states the qualitative claim ("a minority") without the number.
  - The external link (`https://lnkd.in/p/djifF6qh`) is labeled "Watch
    coverage" / "Assistir cobertura", not presented as a direct CNN URL —
    it's a LinkedIn post containing the coverage. Verified live (200,
    resolves to a real post under the user's own LinkedIn handle).
- **No dead links**: `CaseStudyFeature.tsx` only renders `githubHref` (Steel)
  or `externalHref`+`externalLabel` (CNN) when present — no `/case-studies/
  [slug]` route exists yet, so no "Read case study →" internal link was
  rendered anywhere.
- **No regressions**: `Header.tsx`, `Hero.tsx`, `About.tsx`, and
  `ProjectFeature.tsx` are untouched (confirmed via `git diff --stat`).
  `package.json` untouched — no new dependency. No `"use client"` in any
  new/changed file.
- Reviewer self-review (`.claude/agents/reviewer.md`) ran against the full
  diff: verdict **PASS**. Answered all 10 review questions from the task
  brief explicitly (no duplicate projects across sections, Steel fully
  removed from Selected Work, Attrition's diagram anatomy now unified,
  CNN copy evidence-safe, 5,000/50 figures not misattributed, external URLs
  verified live, no dead links, PT overflow risk low — different bug class
  than M1-03's, no SaaS-card aesthetics, no regressions to Header/Hero/
  About/ProjectFeature). One MAJOR finding — this file and
  `.claude/state/progress.md` not yet updated for M1-04 — addressed by this
  update. Two NOTE-level items accepted as-is: `PORTFOLIO_SPEC.md` §10.3's
  old 4-project draft stays below a pointer note to the authoritative
  `PROJECT_CONTENT.md` sections rather than being fully rewritten (deliberate,
  minimal-edit scope); diagram stage labels stay in English regardless of
  locale (decorative, `aria-hidden`, same precedent already accepted in
  M1-03).

## Final result

- Changed: `src/content/home.ts` (removed Steel from `selectedWork.projects`
  + re-indexed, added `caseStudies` content block + `CaseStudy`/`CaseEvidence`/
  `CaseStudyVisualKind`/`CaseStudiesContent` types, EN+PT), `src/components/
  ui/ProjectVisual.tsx` (unified Attrition onto the shared `PipelineDiagram`),
  `src/app/[locale]/page.tsx` (wires `CaseStudies` in after `SelectedWork`),
  `docs/DECISIONS.md` (ADR-012), `docs/planning/{PROJECT_CONTENT,
  PORTFOLIO_SPEC,HOME_WIREFRAME}.md` (updated to match). New:
  `src/components/sections/CaseStudies.tsx`,
  `src/components/ui/CaseStudyFeature.tsx` — both Server Components, no new
  dependency, no unnecessary Client Component.
- Verification: `npm run verify` PASS (run 3x, incl. the reviewer's own
  independent re-run). `git diff --check` PASS. Reviewer self-review PASS
  (1 MAJOR addressed — this state update; 2 NOTE items accepted as
  documented above). Manual visual check: `/en` and `/pt` at 1440px and
  390px, screenshotted and inspected, 0px horizontal overflow measured at
  all four; Employee Attrition's fix and the new Case Studies section both
  visually confirmed before/after.
- Not done (explicitly out of scope for M1-04, tracked for later
  milestones): `/case-studies/[slug]` detail pages (would activate a future
  "Read case study →" internal CTA); Experience section (M1-05, next).
