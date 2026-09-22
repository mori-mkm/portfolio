# Current Task

> One active task. Status stays `planned` until execution actually starts.

## Task

ID: SW-ADD-DATALAB
Title: Add DataLab OS as the flagship Selected Work project
Status: done — verified, **not yet committed** (user reviews report first)

## Goal

Add DataLab OS (https://github.com/mori-mkm/datalab-os, README status PoC
v0.2) as Selected Work `01` in EN + PT, and update only the evidence-backed
portfolio positioning that addition requires (ADR-017).

## Scope

IN:

- `src/content/home.ts`: DataLab OS project (EN/PT) as `01`; Procurement
  `02`, Attrition `03`; `"datalab"` added to `ProjectVisualKind`;
  `selectedWork.supportingCopy` neutralized ("AI systems, machine learning
  systems and data products"); Capabilities Applied AI + Engineering
  updated; header comments updated.
- `src/components/ui/ProjectVisual.tsx`: `datalab` STAGES + non-compact
  CONTAINER_HEIGHT (same pipeline anatomy).
- Docs: ADR-017 (+ pointer on ADR-016), `PROJECT_CONTENT.md` §2/§52-53
  note/§78-80/new §93, `PORTFOLIO_SPEC.md` §10.2-10.3/§18.1-18.2/§56,
  `HOME_WIREFRAME.md` §12.1/§13/§26.2/§36/§59, `CONTEXT_MAP.md` Selected Work +
  Capabilities notes, `.claude/state/progress.md`.

OUT:

- No change to `ProjectFeature.tsx` / `SelectedWork.tsx`.
- No DataLab OS in Case Studies (ADR-012). No demo link (no public
  deployment). No `demo.gif` embed (future `/projects/datalab-os` page).
- No global cleanup of pre-existing stale Steel-in-Selected-Work blocks
  (e.g. `HOME_WIREFRAME.md` §32 full-page wireframe, `PROJECT_CONTENT.md`
  §1/§52-53 original lists) — historical, already annotated.
- No commit / push / deploy.

## Acceptance criteria

- [x] Selected Work renders 01 DataLab OS, 02 Procurement Intelligence, 03
      Employee Attrition Prediction (EN + PT).
- [x] DataLab: GitHub link only, no Live Demo; non-compact visual.
- [x] Desktop alternation text|visual, visual|text, text|visual; mobile
      DOM order header → visual → footer.
- [x] No horizontal overflow at 1440px / 390px, EN + PT.
- [x] No claim beyond the DataLab OS README; its limitations respected.
- [x] `npm run verify` and `git diff --check` pass.

## Verification

- `npm run verify` — PASS (lint, TypeScript, build).
- `git diff --check` — PASS.
- Playwright (headless Chromium, dev server) on `/en` + `/pt` at 1440px and
  390px: document overflow 0px, no overflowing element inside any project
  article, alternation and mobile order as above, DataLab links =
  `GitHub → https://github.com/mori-mkm/datalab-os` only, Capabilities
  shows the new items, DataLab absent from `#case-studies`.
