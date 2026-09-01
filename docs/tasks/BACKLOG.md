# Backlog

> Lightweight queue, not a transcript. Detailed plans belong in `CURRENT_TASK.md` only once a task is activated.

## Priority legend

- **P0** — blocking/critical
- **P1** — important next
- **P2** — normal
- **P3** — optional/later

## Milestone 1 — Home foundation

| ID | Priority | Task | Dependency | Status |
|---|---|---|---|---|
| M1-02 | P0 | Visual Foundation — Header, Hero, About | none | current/planned |
| M1-03 | P1 | Selected Work | M1-02 | backlog |
| M1-04 | P1 | Case Studies (Home section) | M1-02 | backlog |
| M1-05 | P1 | Experience | M1-02 | backlog |
| M1-06 | P1 | Research | M1-02 | backlog |
| M1-07 | P1 | Capabilities | M1-02 | backlog |
| M1-08 | P1 | Writing | M1-02 | backlog |
| M1-09 | P1 | Contact + Footer | M1-02 | backlog |

## Milestone 2 — Projects

| ID | Priority | Task | Dependency | Status |
|---|---|---|---|---|
| M2-01 | P1 | Projects index (`/projects`) | M1-03 | backlog |
| M2-02 | P1 | Project pages (`/projects/[slug]`) | M2-01 | backlog |

## Milestone 3 — Case studies

| ID | Priority | Task | Dependency | Status |
|---|---|---|---|---|
| M3-01 | P1 | Case Studies index | M1-04 | backlog |
| M3-02 | P1 | Case study: Procurement Intelligence | M3-01 | backlog |
| M3-03 | P1 | Case study: Steel Indicator | M3-01 | backlog |

## Milestone 4 — Quality

| ID | Priority | Task | Dependency | Status |
|---|---|---|---|---|
| M4-01 | P1 | SEO + localized metadata | M1 complete | backlog |
| M4-02 | P1 | Accessibility audit | M1 complete | backlog |
| M4-03 | P2 | Automated responsive/visual regression checks | M1 complete | backlog |

## Milestone 5 — Ship

| ID | Priority | Task | Dependency | Status |
|---|---|---|---|---|
| M5-01 | P1 | Vercel deployment | M4-01, M4-02 | backlog |
| M5-02 | P2 | Custom domain | M5-01 | backlog |

## V1.1 (post first deploy)

- AI Closer: give it Home prominence only once evidence exists (see ADR-007)
- Custom OG images
- Analytics
- Additional Writing articles

## V2

- Portfolio RAG / "Ask Matheus"
- Site search
- Richer GitHub automation

## Rules

- Keep task descriptions one line when possible.
- Do not put implementation plans here — that's `CURRENT_TASK.md`'s job once a task is activated.
- Move one task at a time to `CURRENT_TASK.md` unless tasks are genuinely independent and parallel execution is justified.
- Archive/remove completed rows periodically once `.claude/state/progress.md` reflects the durable result.
