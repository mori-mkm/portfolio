# Architecture

> How the system is organized. Keep this compact and update only for changes that affect future implementation decisions. Individual rationale goes to `docs/DECISIONS.md`.

## System overview

```text
Browser
  |
  v
Next.js App Router (src/app)
  |
  v
/ -> redirect -> /[locale] (en | pt)
  |
  v
shared page/section components (src/components, planned)
  |
  v
typed localized content (src/content)
  |
  +--> static project/case-study content (docs/planning/PROJECT_CONTENT.md -> src/content)
```

## Stack (verified from repo, 2026-09-01)

- Next.js 16.3.4, App Router
- React 19.2.8
- TypeScript
- Tailwind CSS 4 (`@tailwindcss/postcss`, no legacy `tailwind.config.*`)
- Geist Sans / Geist Mono via `next/font/google`
- ESLint 9 (`eslint-config-next`) — script is `eslint`, not `next lint`
- No database, no auth, no CMS, no external i18n library (V1)
- Deployment target: Vercel (not yet configured)

## Routing

Confirmed in code:

- `src/app/page.tsx` — redirects `/` to `/en` (`redirect("/en")`)
- `src/app/[locale]/page.tsx` — locale-scoped home
- `src/lib/i18n.ts` — `locales = ["en", "pt"]`, `defaultLocale = "en"`, `isValidLocale()`

Planned (not yet implemented — see `docs/tasks/BACKLOG.md`):

```text
/[locale]/projects
/[locale]/projects/[slug]
/[locale]/case-studies
/[locale]/case-studies/[slug]
/[locale]/research
/[locale]/writing
/[locale]/writing/[slug]
```

## Repository structure

```text
src/
  app/            routing + composition (App Router)
    [locale]/     locale-scoped routes
  content/        typed localized content (e.g. home.ts)
  lib/            shared utilities, i18n helpers
docs/
  planning/       PRODUCT sources of truth (spec, wireframe, content) — do not duplicate elsewhere
  tasks/          active execution state (current task + backlog)
  ARCHITECTURE.md, DECISIONS.md, CONTEXT_MAP.md, AGENTIC_ENGINEERING.md
.claude/
  agents/         subagent role definitions (planner, implementer, reviewer, researcher)
  state/          durable cross-session memory (progress.md)
```

`src/components/` does not exist yet — it will be introduced in M1-02 (Header/Hero/About). Do not assume its layout ahead of that task; check `git status`/the real tree first.

## Rendering rule

Server Components by default. Client Components only at real interaction boundaries (e.g. mobile menu toggle, language switcher client state). Do not convert a whole page/section to a Client Component to make one small part interactive.

## Data/content model

Content is repository-owned, no backend:

- `src/content/*` — typed, localized copy consumed by components
- `docs/planning/PROJECT_CONTENT.md` — canonical copy/metrics/evidence for projects and case studies (source that `src/content` is derived from)
- No database, no CMS, no runtime data fetching for V1

## External dependencies

| Dependency | Purpose | Critical? | Failure behavior |
|---|---|---:|---|
| GitHub | project evidence / external links | No | link degrades gracefully, no runtime dependency |
| Streamlit (external, linked only) | live demos for some projects | No | link degrades gracefully |
| Vercel | hosting (planned) | Yes (post-deploy) | N/A pre-deploy |

## Security boundaries

- Authentication: none (public static/SSR site)
- Authorization: none
- Secrets: none expected in V1; if introduced, use environment variables, never commit
- Sensitive data: none — content is public professional portfolio copy

## Verification architecture

| Component | Primary verifier | Command |
|---|---|---|
| TypeScript/JS correctness | typecheck via build | `npm run build` |
| Code style/correctness | ESLint | `npm run lint` |
| Combined baseline | lint + build | `npm run verify` |
| UI/visual regression | not yet implemented | planned: automated browser/e2e + visual screenshots (see BACKLOG M4-03) |

## Constraints

- Bilingual EN/PT from V1; English is the canonical default locale (ADR-001)
- One shared codebase for both locales — no per-locale component forks (ADR-002)
- Evidence-first content; no unverifiable professional claims (ADR-007)
- Minimal + technical + editorial visual identity (ADR-008)
- Accessible, responsive (desktop 1440px and mobile 390px are the reference breakpoints per `docs/planning/HOME_WIREFRAME.md`)
- Keep dependencies minimal — no new dependency without a justified, recorded reason

## Known trade-offs

- No external i18n library keeps V1 simple but means locale routing/validation is hand-rolled (`src/lib/i18n.ts`); revisit only if real complexity justifies it (ADR-003).
- No CMS means content changes require code changes; acceptable at this scale (single-author portfolio).

## Deployment/runtime

- Runtime: Node.js (Next.js server/edge, TBD at deploy time)
- Hosting: Vercel (planned, ADR-006)
- CI/CD: none yet
- Environments: local development (Windows) only, pre-deploy

## Change policy

Update this document only for architectural changes that affect future implementation decisions. Record the decision itself, with alternatives and consequences, in `docs/DECISIONS.md`.
