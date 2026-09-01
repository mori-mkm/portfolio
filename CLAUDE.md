# CLAUDE.md

@AGENTS.md

## Mission

Build and maintain Matheus Mori's bilingual (EN/PT) professional portfolio with correct, verifiable changes and the minimum necessary context.

## Operating level

Level 2 — verified goal loops (see `docs/AGENTIC_ENGINEERING.md`, ADR-009 in `docs/DECISIONS.md`). Selective Level 3 multi-agent delegation only when the delegation test in `docs/AGENTIC_ENGINEERING.md` is clearly met.

## Required workflow

```text
UNDERSTAND -> DEFINE SUCCESS -> PLAN -> IMPLEMENT -> VERIFY -> REVIEW -> UPDATE STATE -> CHECKPOINT
```

For trivial changes, do not create artificial bureaucracy — a one-line copy fix doesn't need a full plan/acceptance-criteria cycle. Non-trivial changes (new component, new route, cross-cutting styling) should not skip planning.

## Start here

1. `docs/tasks/CURRENT_TASK.md` — the active task.
2. `docs/CONTEXT_MAP.md` — where to find the specific spec section and likely code for that task.
3. Only then load the specific documentation the map points to. Do not read all three planning docs for every task.

## Sources of truth

| Concern | File |
|---|---|
| Product, UX, design system, information architecture | `docs/planning/PORTFOLIO_SPEC.md` |
| Home layout, spatial composition, responsiveness | `docs/planning/HOME_WIREFRAME.md` |
| Project/case-study copy, metrics, evidence, links | `docs/planning/PROJECT_CONTENT.md` |
| System architecture | `docs/ARCHITECTURE.md` |
| Material decisions (ADRs) | `docs/DECISIONS.md` |
| Persistent cross-session state | `.claude/state/progress.md` |
| Agentic methodology (reference, not loaded per-task) | `docs/AGENTIC_ENGINEERING.md` |
| Next.js 16 framework rules | `AGENTS.md` (root, do not modify) |

Do not create a `docs/PROJECT_SPEC.md` — `PORTFOLIO_SPEC.md` already fills that role (ADR-010).

## Context economy

- Search before reading large Markdown files (`docs/planning/*` are ~3,300-3,850 lines each).
- Use `docs/CONTEXT_MAP.md` to jump to the exact section instead of reading a whole planning doc.
- Read the smallest relevant range.
- Inspect `git diff` before rereading files already modified this session.
- Never reread an unchanged large doc without a reason.
- Persist durable discoveries in `.claude/state/progress.md` or `docs/DECISIONS.md` instead of rediscovering them later.
- Keep `CURRENT_TASK.md` small — one active task, not a backlog.

## Verification

Never declare success without evidence.

```bash
npm run verify   # = npm run lint && npm run build
```

When automated visual/e2e verification exists later (BACKLOG M4-03), use it too for UI changes. Until then, UI acceptance criteria are checked manually against the running dev server at the two reference breakpoints (1440px, 390px).

## Retry policy

Maximum two autonomous correction attempts for the same failure. A retry must include a new diagnosis, not a cosmetic repeat. On the second failure: stop, record the blocker in `CURRENT_TASK.md`, report it.

## Scope

- No unrelated refactors.
- No invented requirements.
- No invented professional claims, metrics, or experience (ADR-007) — content comes from `PROJECT_CONTENT.md` or the user, never fabricated.
- No silent architecture changes — record them in `docs/DECISIONS.md` first.
- Server Components by default; Client Components only where interactivity requires them (ADR-005).
- No new dependency without a justified, recorded need.
- Never expose secrets or commit credentials.

## Multi-agent

Available roles: `.claude/agents/planner.md`, `implementer.md`, `reviewer.md`, `researcher.md`.

Use a subagent only when isolation, specialization, or parallelism clearly saves context or improves verification — never merely because the agents exist. Most tasks run directly in the main agent with no delegation at all.

## Completion checklist

Before reporting a task complete:

- [ ] Acceptance criteria in `CURRENT_TASK.md` are satisfied.
- [ ] `npm run verify` passed.
- [ ] No unrelated files changed.
- [ ] `docs/tasks/CURRENT_TASK.md` reflects the final status.
- [ ] `.claude/state/progress.md` updated with only durable information.
- [ ] Material decisions recorded in `docs/DECISIONS.md`.
