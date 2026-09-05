# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: SW-REMOVE-APPJOB
Title: Remove Application Job from Selected Work (no replacement)
Status: done — verified, **not yet committed** (user reviews report first)

## Goal

Remove the "Application Job" project from the Selected Work section entirely
(EN + PT), with no replacement project, per ADR-016 (`docs/DECISIONS.md`).
Clean up orphaned type/code/documentation references without a broad
refactor and without erasing project history.

## Scope

IN:

- `src/content/home.ts`: remove the Application Job `SelectedProject` object
  from both EN and PT `selectedWork.projects`; renumber Employee Attrition
  Prediction `03` -> `02`; remove `"application-job"` from `ProjectVisualKind`.
- `src/components/ui/ProjectVisual.tsx`: remove orphaned `"application-job"`
  entries from `STAGES` and `CONTAINER_HEIGHT` (kept `"steel"` — still used
  by Case Studies).
- Documentation: `docs/planning/{PROJECT_CONTENT,PORTFOLIO_SPEC,HOME_WIREFRAME}.md`
  current-state listings updated to 2 projects; new ADR-016 in
  `docs/DECISIONS.md`; `.claude/state/progress.md` updated.

OUT:

- No replacement/filler project.
- No changes to Case Studies, Experience, Research & Recognition, or Contact
  content.
- Capabilities content (`src/content/home.ts`) not touched — it has no
  literal "Application Job" reference (generic skill labels only); only the
  *rationale documentation* in `PORTFOLIO_SPEC.md` §18.1/§18.2 (which cited
  Application Job as evidence) was updated for accuracy.
- No broad rewrite of the large historical Application Job project-page
  copy in `PROJECT_CONTENT.md` §34-42 — annotated as removed/historical
  instead of deleted.
- No fix to the pre-existing, unrelated Steel Indicator staleness in
  `PORTFOLIO_SPEC.md`/`HOME_WIREFRAME.md`/`PROJECT_CONTENT.md` (several
  sections still list Steel Indicator inside Selected Work, predating
  ADR-012's move of Steel Indicator to Case Studies on 2026-09-01) — flagged
  as a pre-existing risk, not fixed here (out of scope for this task).
- No commit/push.

## Verification

```bash
npm run verify   # PASS (lint + build, TypeScript, static generation)
git diff --check # PASS (no whitespace errors)
```

Selected Work now renders exactly 2 projects in code:

```text
01 Procurement Intelligence
02 Employee Attrition Prediction
```

`SelectedWork.tsx`'s `reverse={index % 2 === 1}` required no code change —
it already alternates correctly for any project count (Procurement normal,
Attrition reverse, with 2 items).

## Residual references (intentionally kept)

- `docs/DECISIONS.md` ADR-012's original "Current allocation" list — kept
  verbatim as the historical record of the 2026-09-01 decision, with a
  pointer added to ADR-016.
- `docs/planning/PROJECT_CONTENT.md` §34-42 (Application Job's full
  project-page copy: identity, home copy, hero, product flow, evidence,
  limitations, image requirements) — annotated with a removal banner, not
  deleted. No `/projects/application-job` route was ever implemented (no
  such route exists in `src/app`), so this was already unbuilt content.
- `docs/planning/PROJECT_CONTENT.md` §1 ("Official V1 order") and the
  "career progression narrative" (§77) — left as originally written
  (historical / explicitly-internal-only narrative respectively); a
  correction note was added in the section immediately following §1 (§2),
  matching this doc's existing convention for corrections.
- "Do not translate" proper-noun glossaries (`PORTFOLIO_SPEC.md`,
  `PROJECT_CONTENT.md` §85) — harmless naming-convention reference, not a
  current-state claim.

## Final result

- Changed: `src/content/home.ts`, `src/components/ui/ProjectVisual.tsx`,
  `docs/DECISIONS.md` (ADR-012 pointer + new ADR-016), `docs/planning/PROJECT_CONTENT.md`,
  `docs/planning/PORTFOLIO_SPEC.md`, `docs/planning/HOME_WIREFRAME.md`,
  `.claude/state/progress.md`, `docs/tasks/CURRENT_TASK.md` (this file).
- Verification: `npm run verify` PASS, `git diff --check` PASS, residual
  grep for `Application Job` / `application-job` / `mori-mkm/application-job`
  confirmed zero hits in rendered/production code paths (`src/`) and zero
  unexplained hits in documentation.
- Not done (deliberately, per instructions): commit, push, or any other
  git write action — left for the user to review first.
