# Agentic Engineering — Methodology Reference

> This is a reference document for how agentic work happens on this repo. It is not loaded on every task — `CLAUDE.md` carries the operational summary agents actually need day to day. Read this file when the methodology itself is in question, not to look up a routine command.

## Current operating level: Level 2, selective Level 3

See ADR-009 in `docs/DECISIONS.md`. Standard flow is single-agent with a verified goal loop. Subagents are used only when the delegation test below is clearly met — never by default.

## Core principles

1. **Minimum context, maximum clarity.** Give the agent the smallest context sufficient for the next correct decision. Use `docs/CONTEXT_MAP.md` instead of reading the full planning docs.
2. **Verification before autonomy.** No autonomous loop runs without an objective pass/fail condition. On this repo, the baseline is `npm run verify` (lint + build); UI tasks add manual/automated visual checks until e2e exists.
3. **Planning and execution are separate phases** for non-trivial tasks. Do not redesign the plan mid-implementation unless new evidence invalidates it.
4. **Small failure probabilities compound.** Shorten workflows, verify at meaningful boundaries, avoid ambiguous tool choice, stop propagation early.
5. **Subagents are not free.** Every subagent adds duplicated context, orchestration tokens, and reconciliation work. Use one only when the benefit is clearly larger than that cost.

## Standard development loop

```text
TASK -> UNDERSTAND -> PLAN -> DEFINE ACCEPTANCE CRITERIA -> DEFINE VERIFIER
     -> IMPLEMENT SMALLEST CHANGE -> VERIFY
          PASS -> REVIEW -> UPDATE STATE -> DONE
          FAIL -> DIAGNOSE -> FIX -> VERIFY (max 2 retries) -> STOP if still failing
```

A retry must include a new diagnosis, not a cosmetic repeat of the same action. After two failed autonomous corrections: stop, preserve evidence, write the blocker in `CURRENT_TASK.md`, propose the smallest next investigation.

## Verification map for this repo

| Work type | Verifier |
|---|---|
| Code correctness (TS/JS) | `npm run build` |
| Style/lint | `npm run lint` |
| Combined baseline | `npm run verify` |
| UI/visual | manual check now; automated browser/e2e + screenshots later (BACKLOG M4-03) |
| i18n (EN/PT) | manual parity check against `docs/planning/PROJECT_CONTENT.md` |
| Accessibility | manual check against SPEC §37 until an automated audit exists (BACKLOG M4-02) |

## Token economy rules

- Search before reading (grep the section, don't read whole planning docs).
- Use `docs/CONTEXT_MAP.md` to jump straight to the relevant spec section.
- Inspect `git diff` before rereading files already modified this session.
- Run the narrowest relevant check first (`npm run lint` on the touched files' area) before the full `npm run verify`.
- Persist durable discoveries in `.claude/state/progress.md` or `docs/DECISIONS.md` instead of rediscovering them next session.
- Do not regenerate an approved plan from scratch after every step — update it incrementally.
- Bound retries: 2 autonomous repair attempts per same failure.

Smells worth stopping for: repeated full-repository scans, rereading unchanged large planning docs, an open-ended "keep trying" loop, a subagent spun up for a trivial edit, research repeated because a finding was never written down.

## Multi-agent architecture

Roles available in `.claude/agents/`: `planner`, `implementer`, `reviewer`, `researcher`. Not every task uses every role — most tasks use none and run directly in the main agent.

**Delegation test** — before creating a subagent, check:

1. Can this work happen independently, with a compact bounded context?
2. Will the returned result be smaller than the context/work delegated?
3. Does isolation, parallelism, or specialization materially improve the outcome (e.g. a reviewer independent of the implementer's context, or a researcher not polluting the main context with web results)?
4. Is there a deterministic way to validate the result?

If most answers are "no", keep the work in the main agent.

**When it's usually justified here:**

- `planner` — a milestone-sized task (e.g. a full Home section) that benefits from an explicit plan before touching code.
- `implementer` — executing an already-approved plan in isolation, e.g. inside a parallel work stream.
- `reviewer` — a diff large or sensitive enough (design-system compliance, i18n, accessibility) to want an independent pass.
- `researcher` — a genuine external/versioned unknown (a Next.js 16 API question local docs don't resolve) — not something answerable by reading local code.

## State management

`.claude/state/progress.md` is durable memory: project goal, current milestone, completed/in-progress/blocked, decisions that matter now, environment facts, pitfalls, next actions. It is not a changelog — trim obsolete detail on every update.

## Decision management

Record an ADR in `docs/DECISIONS.md` when a choice changes future implementation options (framework/library choice, routing strategy, breaking a stated convention, intentional technical debt). Do not record routine implementation steps as decisions.

## Human checkpoints

Require explicit sign-off before: deleting content data, deploying to production, changing the public route/URL structure, adding a new runtime dependency, or any irreversible operation. Not required merely because a task is large.

## Git as harness

```bash
git status --short
git diff
git diff --stat
git diff -- <file>
git log --oneline -n 10
```

Use these to understand what changed instead of reconstructing history from conversation context. Never commit or push without being asked.

## Maturity levels (for reference)

- **Level 0** — ad hoc prompting, no stable harness.
- **Level 1** — structured single-agent: project instructions, task file, specs, manual verification.
- **Level 2 (current)** — verified goal loops: objective stopping conditions, bounded retries, persistent state, automated checks (`npm run verify`).
- **Level 3 (selective)** — bounded subagent roles, explicit handoff contracts, isolated context, parent verification — used only per the delegation test above.
- **Level 4** — proactive automation (event/schedule triggers, CI, cost controls) — not in scope for this project yet.

Do not skip levels purely to maximize autonomy, and do not apply Level 3/4 machinery by default just because it exists.
