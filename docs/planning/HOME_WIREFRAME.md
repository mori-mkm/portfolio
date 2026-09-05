# HOME_WIREFRAME.md

> **Home Wireframe Specification — Matheus Mori Portfolio**  
> Version: **1.1**  
> Status: **Ready for implementation**  
> Depends on: `PORTFOLIO_SPEC.md`  
> Website languages: **English + Portuguese (Brazil)**  
> Default canonical locale: **English**  
> Reference viewport: **1440px desktop**

---

# 0. Purpose

This document translates `PORTFOLIO_SPEC.md` into an implementation-ready wireframe for the portfolio Home page.

It defines:

- page structure;
- desktop composition;
- tablet adaptation;
- mobile composition;
- approximate dimensions;
- content hierarchy;
- image placement;
- project card behavior;
- responsive rules;
- spacing;
- CTAs;
- navigation;
- interaction patterns;
- content density.

This document is **not** a final visual mockup.

It is the spatial and interaction blueprint that should be implemented before visual polish.

When this file and `PORTFOLIO_SPEC.md` conflict:

1. `PORTFOLIO_SPEC.md` wins for product and brand principles;
2. `HOME_WIREFRAME.md` wins for Home layout and spatial decisions.

---

# 1. Core Home objective

The Home page must answer, in this order:

```text
WHO IS MATHEUS?
↓
WHAT DOES HE BUILD?
↓
WHAT HAS HE ACTUALLY BUILT?
↓
HOW DOES HE THINK?
↓
WHERE HAS HE WORKED?
↓
WHAT CAN HE DO?
↓
WHAT DOES HE RESEARCH / WRITE?
↓
HOW DO I CONTACT HIM?
```

The page must feel like:

```text
TECHNICAL PUBLICATION
+
PROJECT CATALOG
+
PROFESSIONAL PROFILE
```

It must **not** feel like:

```text
CV PAGE
+
SKILL CLOUD
+
GENERIC DEVELOPER TEMPLATE
```

---

# 2. Page sequence

Official Home sequence:

```text
00 / NAVIGATION
01 / HERO
02 / ABOUT
03 / SELECTED WORK
04 / CASE STUDIES
05 / EXPERIENCE
06 / RESEARCH
07 / CAPABILITIES
08 / WRITING
09 / CONTACT
10 / FOOTER
```

Visible section labels:

```text
01 / ABOUT
02 / SELECTED WORK
03 / CASE STUDIES
04 / EXPERIENCE
05 / RESEARCH
06 / CAPABILITIES
07 / WRITING
08 / CONTACT
```

Hero and Footer are not numbered in the UI.

---

# 3. Global desktop frame

Reference viewport:

```text
1440px
```

Main content width:

```text
max-width: 1240px
```

Page side margins at 1440px:

```text
100px
```

Calculation:

```text
1440
- 1240
= 200
/ 2
= 100px
```

At smaller desktop widths, horizontal padding replaces fixed margins.

Recommended rule:

```css
.container {
  width: min(1240px, calc(100vw - 64px));
  margin-inline: auto;
}
```

At large desktop:

```text
>= 1600px
```

Keep content max-width at approximately:

```text
1240–1280px
```

Do not stretch content indefinitely.

---

# 4. Global grid

Desktop:

```text
12-column grid
24px gutters
```

Conceptual grid:

```text
| 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |
```

Most sections use one of these patterns:

### Pattern A — Editorial split

```text
4 columns / 8 columns
```

Used for:

- About;
- Experience;
- Research;
- Capabilities.

### Pattern B — Project split

```text
5 columns / 7 columns
```

or inverse:

```text
7 columns / 5 columns
```

Used for Selected Work.

### Pattern C — Full-width

```text
12 columns
```

Used for:

- Hero;
- section headlines;
- case study grid;
- contact.

---

# 5. Global vertical rhythm

Desktop section spacing:

```text
Hero bottom → About:      120px
About → Selected Work:    160px
Selected Work → Cases:    160px
Cases → Experience:       160px
Experience → Research:    160px
Research → Capabilities:  160px
Capabilities → Writing:   160px
Writing → Contact:        180px
Contact → Footer:          120px
```

General rule:

```text
major section padding-block:
120px to 160px
```

Do not compress the page to reduce scroll.

Whitespace is part of the identity.

---

# 6. Background rhythm

Primary background:

```text
warm off-white
```

Most of the site remains on the same background.

Optional soft surface bands may be used for:

- Case Studies;
- Contact;

but only if needed to create rhythm.

Do **not** alternate background color on every section.

Preferred rhythm:

```text
Hero              background
About             background
Selected Work     background
Case Studies      soft background OPTIONAL
Experience        background
Research          background
Capabilities      background
Writing           background
Contact           soft background OPTIONAL
Footer            background
```

---

# 7. 00 / Navigation

## 7.1 Desktop dimensions

Height:

```text
72px
```

Container:

```text
1240px
```

Navigation composition:

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ MATHEUS MORI     About Projects Case Studies Experience ... EN/PT Resume ↗│
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 7.2 Desktop layout

Columns:

```text
Brand:
columns 1–3

Navigation:
columns 4–10

Primary external CTA:
columns 11–12
```

Approximate arrangement:

```text
MATHEUS MORI

              About
              Projects
              Case Studies
              Experience
              Research
              Writing

                                              Resume ↗
```

Capabilities and Contact may be omitted from desktop nav if the line becomes too crowded.

Preferred final nav — EN:

```text
About
Projects
Case Studies
Experience
Research
Writing
Contact
```

Preferred final nav — PT-BR:

```text
Sobre
Projetos
Estudos de Caso
Experiência
Pesquisa
Artigos
Contato
```

Language control:

```text
EN / PT
```

Do not use country flags.

`Capabilities` is reachable through scroll and does not need to occupy navigation space.

---

## 7.3 Brand

Text:

```text
MATHEUS MORI
```

Style:

```text
font: Geist Mono or Geist Sans
size: 13–14px
weight: 550–600
letter spacing: 0.02em
```

Behavior:

click → scroll to top.

No logo mark required for V1.

---

## 7.4 Navigation style

Font:

```text
Geist Sans
```

Size:

```text
14–15px
```

Active/hover behavior:

```text
text-secondary
→
text-primary
```

Optional small underline:

```text
0 → 100%
```

Do not use pill navigation.

---

## 7.5 Sticky behavior

Initial state:

```text
transparent / same page background
```

After scroll:

```text
sticky top: 0
background with ~90–95% opacity
very subtle backdrop blur
bottom border: 1px solid border
```

No shadow unless absolutely necessary.

---

## 7.6 Mobile navigation

Height:

```text
64px
```

Layout:

```text
┌────────────────────────────┐
│ MATHEUS MORI          MENU │
└────────────────────────────┘
```

Menu overlay:

```text
About
Projects
Case Studies
Experience
Research
Capabilities
Writing
Contact

GitHub ↗
LinkedIn ↗
Resume ↗
```

Overlay should feel like a clean editorial index.

No complex animation.

---


# 7.7 Language switcher

The Home uses one identical layout for both locales.

Desktop placement:

```text
... Research  Writing  Contact    EN / PT    Resume ↗
```

The switcher must be visually quiet.

Recommended style:

```text
EN / PT
```

Active locale:

```text
text-primary
```

Inactive locale:

```text
text-muted
```

No pill background required.

No flags.

On mobile, place:

```text
EN · PT
```

inside the menu, before external links.

When locale changes:

```text
preserve current route
preserve anchor when practical
persist preference
```

Example:

```text
/en#projects
→
/pt#projects
```

The layout dimensions must be tested in both languages because Portuguese labels and descriptions are often longer.

No component should rely on an English string being short.

---

# 8. 01 / Hero

## 8.1 Hero goal

Within the first screen:

1. identify Matheus;
2. identify role;
3. explain what he builds;
4. expose a path to projects;
5. expose GitHub and Resume.

---

## 8.2 Desktop height

Recommended:

```text
min-height: calc(82vh - 72px)
```

Minimum visual height:

```text
680px
```

Maximum practical:

```text
860px
```

Do not force full screen on very tall monitors.

---

## 8.3 Hero structure

Desktop:

```text
┌──────────────────────────────────────────────────────────────────────────┐
│                                                                          │
│ DATA SCIENCE · AI ENGINEERING                                            │
│                                                                          │
│ Matheus Mori                                                             │
│                                                                          │
│ Data Scientist                                                           │
│ & AI Engineer                                                            │
│                                                                          │
│ Building production-oriented AI,                                         │
│ machine learning and data products.                                      │
│                                                                          │
│ I work across data, machine learning and AI —                            │
│ turning complex problems into systems people can actually use.           │
│                                                                          │
│ [ Explore my work ]   GitHub ↗   Resume ↗                               │
│                                                                          │
│                                                              ↓ Scroll     │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 8.4 Hero width

Main text block:

```text
7–8 columns
max-width: 820px
```

Do not center the hero.

Alignment:

```text
left
```

---

## 8.5 Eyebrow

Copy:

```text
DATA SCIENCE · AI ENGINEERING
```

Position:

```text
top of content block
```

Style:

```text
font: mono
size: 12px
uppercase
letter spacing: 0.08em
text-secondary
```

Spacing below:

```text
32px
```

---

## 8.6 Name

Copy:

```text
Matheus Mori
```

This is not the main visual headline.

Style:

```text
18–22px
font weight: 500
```

Spacing below:

```text
20–28px
```

---

## 8.7 Main headline

Copy:

```text
Data Scientist
& AI Engineer
```

Preferred desktop line break:

```text
Data Scientist
& AI Engineer
```

Not:

```text
Data Scientist & AI Engineer
```

unless viewport width requires it.

Style:

```text
font-size: 76–88px
line-height: 0.96–1.02
letter-spacing: -0.04em
font-weight: 500–600
```

Max width:

```text
900px
```

---

## 8.8 Descriptor

Copy:

```text
Building production-oriented AI,
machine learning and data products.
```

Style:

```text
28–34px
line-height: 1.2
text-primary
max-width: 720px
```

Spacing above:

```text
40–48px
```

---

## 8.9 Supporting copy

Copy:

```text
I work across data, machine learning and AI —
turning complex problems into systems people can actually use.
```

Style:

```text
18–20px
line-height: 1.55
text-secondary
max-width: 620px
```

Spacing above:

```text
24px
```

---

## 8.10 CTA group

Spacing above:

```text
36px
```

Layout:

```text
[ Explore my work ]   GitHub ↗   Resume ↗
```

Primary:

```text
Explore my work
```

Scroll target:

```text
#projects
```

Secondary links:

```text
GitHub ↗
Resume ↗
```

---

## 8.11 Optional hero right-side content

V1 recommendation:

**Do not place a large decorative visual in the Hero.**

Optional element in columns 10–12:

```text
CURRENT FOCUS

AI Engineering
ML Systems
Data Products
```

or:

```text
AVAILABLE FOR

Data Science
Applied AI
AI Engineering
```

However, if this creates visual clutter:

**remove it**.

The preferred V1 Hero is primarily typographic.

---

## 8.12 Scroll cue

Bottom-right or bottom-left:

```text
↓ SCROLL
```

Style:

```text
mono
11–12px
text-muted
```

Optional.

Do not animate continuously.

---

# 9. Mobile Hero

Viewport reference:

```text
390px
```

Horizontal padding:

```text
20px
```

Structure:

```text
DATA SCIENCE · AI ENGINEERING

Matheus Mori

Data Scientist
& AI Engineer

Building production-oriented AI,
machine learning and data products.

I work across data, machine learning and AI —
turning complex problems into systems people can actually use.

[ Explore my work ]

GitHub ↗
Resume ↗
```

---

## 9.1 Mobile typography

Headline:

```text
48px
line-height: 0.98
```

At <= 360px:

```text
44px
```

Descriptor:

```text
23–26px
```

Supporting:

```text
17px
```

---

## 9.2 Mobile CTA behavior

Primary button:

```text
full width or fit-content
```

Recommended:

```text
full-width on <= 420px
```

External links below:

```text
GitHub ↗        Resume ↗
```

---

# 10. 01 / About

Anchor:

```text
#about
```

---

## 10.1 Desktop wireframe

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ 01 / ABOUT                                                               │
│                                                                          │
│ I build at the intersection of                                           │
│ data, machine learning and AI.                                           │
│                                                                          │
│ ┌─────────────────────────┐   ┌─────────────────────────────────────────┐ │
│ │                         │   │ I'm a statistician and data            │ │
│ │ Supporting statement    │   │ professional focused on turning...     │ │
│ │ / optional metrics      │   │                                         │ │
│ │                         │   │ My background spans analytics...        │ │
│ │                         │   │                                         │ │
│ └─────────────────────────┘   └─────────────────────────────────────────┘ │
│                                                                          │
│ DATA SCIENCE          AI ENGINEERING          DATA PRODUCTS              │
│ description           description             description                │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 10.2 Section header

Full width.

Label:

```text
01 / ABOUT
```

Headline:

```text
I build at the intersection of
data, machine learning and AI.
```

Width:

```text
8 columns
```

Font:

```text
48–56px
```

---

## 10.3 About split

After headline:

```text
80px gap
```

Left:

```text
4 columns
```

Right:

```text
7 columns
start column: 6
```

---

## 10.4 Right copy

Copy:

```text
I'm a statistician and data professional focused on turning analytical
problems into reliable products and systems.

My background spans analytics, machine learning, experimentation and
decision-support products. Today, I'm increasingly focused on AI
engineering — especially systems that combine LLMs, retrieval, agents,
evaluation, APIs and production-oriented software practices.
```

Typography:

```text
19–21px
line-height: 1.65
```

---

## 10.5 Left block

Preferred V1 content:

```text
BACKGROUND

Statistics
Data Science
Machine Learning
Analytics

CURRENT DIRECTION

AI Engineering
Applied AI
Production ML
```

Do not create skill bars.

Alternative:

three project evidence metrics.

---

## 10.6 Pillars row

Spacing above:

```text
96px
```

Three equal columns.

```text
DATA SCIENCE
Statistical modeling, experimentation,
forecasting and machine learning.

AI ENGINEERING
LLM applications, RAG, agents,
evaluation and AI systems.

DATA PRODUCTS
Turning models and analysis into
tools people can actually use.
```

Each:

```text
4 columns
```

Separators:

optional vertical border.

On desktop, subtle.

---

# 11. Mobile About

Order:

```text
01 / ABOUT

Headline

Main copy

BACKGROUND / CURRENT DIRECTION

DATA SCIENCE
description

AI ENGINEERING
description

DATA PRODUCTS
description
```

No side-by-side layout.

Each pillar separated by:

```text
border-top
padding-top: 24px
margin-top: 24px
```

---

# 12. 02 / Selected Work

Anchor:

```text
#projects
```

This is the highest-priority section after Hero.

---

## 12.1 Section header

Label:

```text
02 / SELECTED WORK
```

Headline:

```text
Systems designed to
solve real problems.
```

Supporting line:

```text
A selection of machine learning systems,
AI workflows and data products.
```

---

## 12.2 Section top

Wireframe:

```text
┌──────────────────────────────────────────────────────────────┐
│ 02 / SELECTED WORK                                           │
│                                                              │
│ Systems designed to                                          │
│ solve real problems.                                         │
│                                                              │
│                            View all projects →                │
└──────────────────────────────────────────────────────────────┘
```

`View all projects →` aligns right on desktop.

On mobile it appears below supporting copy.

---

# 13. Selected Work — editorial project pattern

Projects should **not** look like identical SaaS cards.

Use large editorial rows.

Pattern:

```text
Project 01:
TEXT  | IMAGE

Project 02:
IMAGE | TEXT

Project 03:
TEXT  | IMAGE

Project 04:
IMAGE | TEXT
```

This creates rhythm while preserving consistency.

---

# 14. Project 01 — Procurement Intelligence

## 14.1 Desktop

Layout:

```text
5 columns text
7 columns visual
```

Wireframe:

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ PROJECT / 01                                                             │
│                                                                          │
│ MACHINE LEARNING · DATA PRODUCT                                          │
│                                                                          │
│ Procurement                       ┌────────────────────────────────────┐  │
│ Intelligence                      │                                    │  │
│                                   │      DASHBOARD SCREENSHOT          │  │
│ A spend and price intelligence    │                                    │  │
│ platform built on 5.7M+           │      / or architecture preview     │  │
│ procurement transactions.         │                                    │  │
│                                   └────────────────────────────────────┘  │
│ 5.7M+         124                                                       │
│ transactions    automated tests                                         │
│                                                                          │
│ Temporal ML validation · Live dashboard                                 │
│                                                                          │
│ Python · DuckDB · LightGBM · Streamlit                                  │
│                                                                          │
│ Case Study →   Live Demo ↗   GitHub ↗                                  │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 14.2 Visual

Preferred:

```text
real dashboard screenshot
```

Aspect ratio:

```text
16:10
```

Minimum desktop height:

```text
420px
```

Container:

```text
border: 1px
radius: 8–10px
overflow: hidden
```

Optional subtle soft background around screenshot.

---

## 14.3 Text hierarchy

Project title:

```text
48–56px
```

Description:

```text
19–21px
```

Metrics:

```text
32–40px value
12px mono label
```

---

# 15. Project 02 — Steel Indicator

Reverse layout:

```text
7 columns visual
5 columns text
```

Wireframe:

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ PROJECT / 02                                                             │
│                                                                          │
│ ┌────────────────────────────────────┐                                   │
│ │                                    │  DATA ENGINEERING ·               │
│ │     REPORT / ARCHITECTURE          │  ECONOMIC INTELLIGENCE            │
│ │                                    │                                   │
│ │                                    │  Steel Indicator                  │
│ └────────────────────────────────────┘                                   │
│                                      A reproducible and auditable        │
│                                      platform for Brazilian steel-sector│
│                                      economic indices.                   │
│                                                                          │
│                                      529         VERSIONED               │
│                                      tests       methodology             │
│                                                                          │
│                                      Immutable vintages · Public data   │
│                                                                          │
│                                      Python · Pandas · APIs · Docker    │
│                                                                          │
│                                      Case Study →   GitHub ↗             │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 15.1 Preferred imagery

Use one of:

1. clean screenshot from generated report;
2. architecture diagram;
3. IPIA chart;
4. vintage/methodology visualization.

Avoid showing terminal output as primary cover.

---

# 16. Project 03 — Application Job (REMOVED, ADR-016)

> Removed from Selected Work 2026-09-05, no replacement — see
> `docs/DECISIONS.md` ADR-016. This section's wireframe content is kept as
> a historical record, not a current layout to implement.

---

# 17. Project 04 — Employee Attrition Prediction

Layout:

```text
7 columns visual
5 columns text
```

Preferred visual:

```text
model evaluation
+
feature importance
```

The project should appear slightly less prominent than Projects 01–03.

Possible treatment:

```text
smaller vertical spacing
or
slightly shorter image
```

The hierarchy should communicate:

```text
Flagship
Flagship
Strong supporting
Foundational ML
```

without explicit labels.

---

# 18. Project spacing

Between major projects:

```text
140–180px
```

Within project:

```text
32px between metadata/title
24px description
36px metrics
32px links
```

Project separators are optional.

Whitespace should be the main separator.

---

# 19. Project hover

No full-card hover required.

Interactions:

### Image

On hover:

```text
scale 1.00 → 1.015
duration 250–300ms
```

### Main CTA

```text
Case Study →
```

arrow moves:

```text
+3px x
```

### Border

Optional:

```text
border → border-strong
```

No glow.

---

# 20. Selected Work mobile

Every project uses same order:

```text
PROJECT / 01
CATEGORY
TITLE
DESCRIPTION
IMAGE
METRICS
STACK
LINKS
```

Do not alternate image/text order on mobile.

Example:

```text
PROJECT / 01

MACHINE LEARNING · DATA PRODUCT

Procurement
Intelligence

A spend and price intelligence
platform built on 5.7M+
procurement transactions.

┌────────────────────────────┐
│                            │
│       SCREENSHOT           │
│                            │
└────────────────────────────┘

5.7M+            124
transactions     tests

Python · DuckDB · LightGBM · Streamlit

Case Study →
Live Demo ↗
GitHub ↗
```

Links may wrap.

---

# 21. 03 / Case Studies

Anchor:

```text
#case-studies
```

---

## 21.1 Purpose

Explain the reasoning behind the strongest systems.

This section is intentionally more editorial and analytical than Projects.

---

## 21.2 Header

Updated by M1-04 (ADR-012): "the systems" -> "the work" — Case Studies now
mixes an engineering case (Steel) with a research/communication case
(Developer Market Research), not two systems.

```text
03 / CASE STUDIES

The reasoning behind
the work.

Problems, architecture, methodology,
trade-offs and evidence behind selected work.
```

---

## 21.3 Desktop layout

Two cards side-by-side.

```text
6 columns
+
6 columns
```

Wireframe:

```text
┌───────────────────────────────┐  ┌───────────────────────────────┐
│ CASE STUDY / 01               │  │ CASE STUDY / 02               │
│                               │  │                               │
│ Procurement Intelligence      │  │ Steel Indicator               │
│                               │  │                               │
│ From millions of public       │  │ Building an auditable         │
│ procurement records to a      │  │ economic indicator from       │
│ reproducible price system.    │  │ public data.                  │
│                               │  │                               │
│ DATA                          │  │ QUALITY                       │
│ 5.7M+ transactions            │  │ 529 automated tests           │
│                               │  │                               │
│ ENGINEERING                   │  │ GOVERNANCE                    │
│ Bronze → Silver → Gold        │  │ Immutable vintages            │
│                               │  │                               │
│ Read case study →             │  │ Read case study →             │
└───────────────────────────────┘  └───────────────────────────────┘
```

---

## 21.4 Card style

Not “floating app card”.

Use:

```text
border-top
large padding
minimal border or surface
```

Preferred style:

```text
top border: 1px solid border-strong
padding-top: 28px
```

No shadow.

---

## 21.5 Case Studies mobile

Stack:

```text
Case Study 01
↓
Case Study 02
```

Gap:

```text
64px
```

---

# 22. 04 / Experience

Anchor:

```text
#experience
```

---

## 22.1 Header

```text
04 / EXPERIENCE

Where I've worked
and what I've built.
```

---

## 22.2 Desktop layout

Editorial split:

```text
4 columns:
section context / optional intro

8 columns:
timeline
```

Wireframe:

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ 04 / EXPERIENCE                                                          │
│                                                                          │
│ Where I've worked                                                        │
│ and what I've built.                                                     │
│                                                                          │
│ ┌────────────────────────┐  ┌──────────────────────────────────────────┐ │
│ │                        │  │ 2025 — 2026                              │ │
│ │ Data, analytics,       │  │ Banco BV                                 │ │
│ │ machine learning and   │  │ Data / People Analytics                  │ │
│ │ decision products.     │  │                                          │ │
│ │                        │  │ Built analytics, forecasting and         │ │
│ │ Resume ↗               │  │ decision-support solutions...           │ │
│ │                        │  │                                          │ │
│ │                        │  ├──────────────────────────────────────────┤ │
│ │                        │  │ 2024 — 2025                              │ │
│ │                        │  │ BIP Consulting                           │ │
│ │                        │  │ ...                                      │ │
│ └────────────────────────┘  └──────────────────────────────────────────┘ │
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 22.3 Timeline item

Structure:

```text
DATE
COMPANY
ROLE
1–2 LINE DESCRIPTION
OPTIONAL TAGS
```

Example:

```text
2025 — 2026

Banco BV
Data / People Analytics

Built analytics, forecasting and decision-support
solutions for workforce and leadership use.

Power BI · SQL · Databricks · ML
```

---

## 22.4 Timeline styling

Date:

```text
mono
12–13px
text-muted
```

Company:

```text
28–32px
```

Role:

```text
16px
text-secondary
```

Body:

```text
17–18px
```

Separator:

```text
border-top
```

Item padding:

```text
36–48px vertical
```

---

# 23. Experience mobile

Order:

```text
section label
headline
intro
resume link
timeline
```

Each timeline item:

```text
DATE
COMPANY
ROLE
DESCRIPTION
TAGS
```

No horizontal line connecting timeline dots.

Avoid typical “resume timeline with circles”.

Editorial list is cleaner.

---

# 24. 05 / Research & Recognition

**Updated by M1-06 (ADR-013):** section renamed from "05 / Research" —
the old 4-item wireframe below predates ADR-012 and duplicated Steel
Indicator (Case Studies) and Experience/Employee Attrition territory. See
`PORTFOLIO_SPEC.md` §16 for the full rationale and finalized copy.

Anchor (unchanged):

```text
#research
```

Header nav label stays `Research` / `Pesquisa` — only the section heading
uses the expanded name.

---

## 24.1 Header

```text
05 / RESEARCH & RECOGNITION

Research and milestones
that shaped my work.
```

Supporting:

```text
Academic investigations and early projects across statistics,
forecasting and applied data science.
```

---

## 24.2 Desktop layout

Editorial index, not large cards, not a strict multi-column grid — each
row stacks vertically (type/index → title → context → description →
optional evidence/status line → metadata + link), the same reading order
at every breakpoint. Rows separated by `border-top`, generous vertical
padding (matches Experience's `py-9 md:py-12` rhythm).

Final 3 rows (editorial order, not chronological):

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ RESEARCH / 01                                                            │
│ Wavelet Multivariate Time Series Analysis                                │
│ UFSCar · Undergraduate Thesis · 2023                                     │
│ Undergraduate statistics research examining how relationships among      │
│ financial markets change across time and scale using wavelet methods.    │
│ Time Series · Statistics · Wavelets                    View research ↗   │
├──────────────────────────────────────────────────────────────────────────┤
│ RECOGNITION / 01                                                         │
│ FarmIA — Santander Data Challenge                                        │
│ 1st Place · 2020                                                         │
│ First-place data challenge project developed by a five-person team,      │
│ using statistical modeling and agrometeorological data to support        │
│ agricultural planning.                                                   │
│ 1ST PLACE · 100+ TEAMS                                                   │
│ Applied Data Science · Agriculture                              GitHub ↗ │
├──────────────────────────────────────────────────────────────────────────┤
│ RESEARCH / 02                                                            │
│ Retail Sales Forecasting                                                 │
│ Digital House · Final Data Science Project                               │
│ Academic forecasting project exploring monthly store-level sales with    │
│ SARIMAX, chronological validation and a historical Flask prototype.      │
│ ACADEMIC PROJECT                                                         │
│ Forecasting · SARIMAX · Time Series                              GitHub ↗│
└──────────────────────────────────────────────────────────────────────────┘
```

---

## 24.3 Visual hierarchy

```text
Type/index    Geist Mono, 11-12px, muted, uppercase
Title         28-36px
Context       13-15px, secondary
Description   17-18px, secondary
Evidence      mono, small, quiet (not a metric tile)
Metadata      mono, small, quiet
Link          editorial external link (underline + ↗), not a button
```

No cards, no shadows, no diagrams, no metric tiles, no logos, no icons —
the visually quietest section on Home.

---

## 24.4 Links

All three links are real external URLs (2x GitHub, 1x GitHub) — no
internal "Read notes →" route exists, so none is rendered. `target="_blank"
rel="noopener noreferrer"`.

---

# 25. Research & Recognition mobile

Each row becomes, in the same order as desktop (no reordering needed —
the layout is a single stacked column at every breakpoint):

```text
RESEARCH / 01

Wavelet Multivariate Time Series Analysis

UFSCar · Undergraduate Thesis · 2023

Undergraduate statistics research examining how relationships among
financial markets change across time and scale using wavelet methods.

Time Series · Statistics · Wavelets

View research ↗
```

Border-top between rows. Metadata and link stack vertically on mobile
(they sit side-by-side only from `sm:` up). Natural text wrapping, no
horizontal scroll, no desktop columns retained.

---

### Historical / obsolete (pre-ADR-012, do not implement)

<details>
<summary>Original 05 / Research wireframe (superseded)</summary>

```text
05 / RESEARCH

Applied investigations
behind the systems.
```

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ RESEARCH / 01      Economic Index Construction                  2026  → │
│                    Methodology · Data Engineering · Economics             │
├──────────────────────────────────────────────────────────────────────────┤
│ RESEARCH / 02      Shapley Driver Decomposition                  2026  → │
│                    Explainability · Index Analysis                        │
├──────────────────────────────────────────────────────────────────────────┤
│ RESEARCH / 03      Survival Analysis for Workforce Dynamics      2025  → │
│                    Statistics · People Analytics                          │
├──────────────────────────────────────────────────────────────────────────┤
│ RESEARCH / 04      Forecasting Workforce Dynamics                2025  → │
│                    Time Series · Analytics                                │
└──────────────────────────────────────────────────────────────────────────┘
```

Removed per ADR-013: Economic Index Construction and Shapley Driver
Decomposition are now Steel Indicator (Case Studies) territory; Survival
Analysis and Forecasting Workforce Dynamics are now Experience/Employee
Attrition territory.

</details>

---

# 26. 06 / Capabilities

Anchor:

```text
#capabilities
```

---

## 26.1 Header

```text
06 / CAPABILITIES

Tools and methods I use to
turn ideas into working systems.
```

---

## 26.2 Desktop structure

**Updated by M1-07 (ADR-007 applied):** "AI ENGINEERING" -> "APPLIED AI" —
see `PORTFOLIO_SPEC.md` §18.1 for why. Final V1 items also replace the
speculative list below (no RAG/Agentic Systems/FastAPI/PySpark/CI-CD —
deferred until public evidence exists).

Four columns.

```text
APPLIED AI
MACHINE LEARNING
DATA
ENGINEERING
```

Wireframe (final V1 content):

```text
┌───────────────────┬───────────────────┬───────────────────┬───────────────────┐
│ APPLIED AI        │ MACHINE LEARNING  │ DATA              │ ENGINEERING       │
│                   │                   │                   │                   │
│ LLM Applications  │ Regression        │ Python            │ Git & GitHub      │
│ AI-assisted...    │ Classification    │ SQL               │ Docker            │
│ Structured...     │ Gradient Boosting │ Pandas            │ Testing           │
│ Prompt & Context  │ Forecasting       │ Power BI          │ MLflow            │
│   Engineering     │ Survival Analysis │ Data Modeling     │ APIs              │
│ AI Automation     │ Experimentation   │ Data Pipelines    │ Streamlit         │
│                   │ Model Evaluation  │ Data Quality      │ Automation        │
└───────────────────┴───────────────────┴───────────────────┴───────────────────┘
```

No per-item claim survives here unaccompanied by real evidence elsewhere
on Home — see `PORTFOLIO_SPEC.md` §18.2 for the rationale per group.

---

## 26.3 Styling

Group title:

```text
mono
12px
uppercase
```

Items:

```text
17–18px
line-height 1.8
```

No icons.

No percentage bars.

No logo cloud.

**Implementation note (M1-07):** no vertical border between columns was
used in the end — the task's own guidance ("prefer whitespace first")
and the complexity of getting `border-left` correct across three
different responsive column-counts (1 -> 2 -> 4) made a single
`border-top` above the whole group grid (separating it from the section
header) the simpler, equally-quiet choice. See
`src/components/sections/Capabilities.tsx`.

---

# 27. Capabilities mobile

Two possible layouts.

Preferred:

```text
1 column
```

Because readability is more important.

Order:

```text
APPLIED AI
items

MACHINE LEARNING
items

DATA
items

ENGINEERING
items
```

Gap:

```text
48px
```

At 600–900px tablet:

```text
2 × 2 grid
```

**Implementation note (M1-07):** the rendered breakpoints are `sm:` (640px)
for the 1 -> 2 column switch and `lg:` (1024px) for 2 -> 4, not exactly
600/900px. Reason: an arbitrary `min-[900px]:` variant does not reliably
win the CSS cascade against a named `sm:` variant touching the same
property in this Tailwind setup (confirmed by a real 4-column-not-
triggering bug caught during M1-07 visual verification and fixed by
switching to the named `lg:` breakpoint) — always prefer named Tailwind
breakpoints over arbitrary `min-[Npx]:` ones when more than one
breakpoint state touches the same CSS property, to guarantee correct
mobile-first cascade order. Readability at the actual rendered widths was
manually re-verified (600, 700, 768, 900, 1024px) and reads correctly;
only the exact px threshold differs from this original wireframe note.

---

# 28. Writing — DEFERRED, not implemented (M1-08)

Anchor `#writing` does **not** exist anywhere in the Home DOM. "Writing" /
"Artigos" was removed from both locale `nav` arrays in
`src/content/home.ts` — not hidden via CSS, not present-but-unlinked, not
rendered as a "Coming soon" placeholder. There is no `/writing` route.

This is a straightforward instance of ADR-007 (evidence before
prominence): the content doesn't exist yet, so the section isn't built
yet. See `PORTFOLIO_SPEC.md` §19 for the full rationale and the article/
copy ideas kept as reference for whenever Writing is eventually restored.

The `## 28.1 Header` / `## 28.2 Desktop rows` / `## 28.3 Article row` /
`# 29. Writing mobile` layout notes that used to live in this file are
still valid future design reference — see git history before this edit,
or `PORTFOLIO_SPEC.md` §19 — not reproduced here since they describe a
section that isn't built.

---

# 30. 07 / Contact

**Renumbered by M1-08**: was `08 / Contact` behind Writing. Writing is
deferred (§28) and not implemented, so this is now the last numbered Home
section before Footer.

Anchor:

```text
#contact
```

**Formulário real é V1** (revisado em M1-08, arquitetura de segurança
atualizada no mesmo dia por ADR-015) — a nota original deste arquivo dizia
"Do not use contact form in V1" / "links diretos > formulário"; essa
decisão foi substituída. Ver `PORTFOLIO_SPEC.md` §20 e `docs/DECISIONS.md`
**ADR-015** (não ADR-014, superada) para a arquitetura completa (Next.js
Route Handler → validação → honeypot → Cloudflare Turnstile → Supabase +
cota diária de e-mail + Resend, canais independentes). O widget Turnstile
aparece entre o campo MESSAGE e o botão de envio na wireframe abaixo,
renderizado apenas quando `NEXT_PUBLIC_TURNSTILE_SITE_KEY` está
configurado — nunca um CAPTCHA falso.

---

## 30.1 Desktop composition

Editorial split, not a full-width link list.

```text
LEFT  4/12 columns: heading context + external links
RIGHT 8/12 columns: form
```

Wireframe:

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ 07 / CONTACT                                                             │
│                                                                          │
│ Let's build                          NAME *                             │
│ something useful.                    [___________________________]     │
│                                                                          │
│ I'm interested in opportunities      EMAIL *                            │
│ and conversations around Data        [___________________________]     │
│ Science, Machine Learning and        PHONE *                            │
│ Applied AI.                          [___________________________]     │
│                                                                          │
│ LinkedIn ↗                           MESSAGE — OPTIONAL                 │
│ GitHub ↗                             [___________________________]     │
│ Resume ↗                             [___________________________]     │
│                                                                          │
│                                       [ Turnstile widget, if configured]│
│                                       [ Send message ]                  │
│                                       I'll use these details only to    │
│                                       reply to your contact.            │
└──────────────────────────────────────────────────────────────────────────┘
```

No Email link — the form replaces the need to publish a personal address;
`CONTACT_NOTIFICATION_EMAIL` stays server-only (never a public `mailto:`).

---

## 30.2 Headline

```text
Let's build
something useful.
```

Same `SectionHeading` component/type-scale as every other Home section —
no bespoke 64-76px treatment introduced for this one section (the
original draft suggested a larger custom size; implementation reuses the
shared heading component for visual consistency instead).

---

## 30.3 Contact links (left column)

```text
LinkedIn                 ↗
GitHub                   ↗
Resume                   ↗
```

Reuses `content.externalLinks` — no URL duplicated in Contact's own
content object.

Each row: `border-top` (+ `border-bottom` after the last row, via
`divide-y` + `border-y` on the containing list — not per-row classes),
`py-5`, `text-[17px]`.

---

## 30.4 Form (right column)

Real `<label>` per field (placeholder is never the only label). Fields,
in order: NAME * (required), EMAIL * (required), PHONE * (required,
`type="tel"`, no forced country format), MESSAGE — OPTIONAL (`<textarea>`,
`maxLength=2000`). A hidden honeypot field (`website`) is present but
invisible/unreachable — see `PORTFOLIO_SPEC.md` §20.

States: idle → submitting (button disabled, "Sending..."/"Enviando...") →
success (form replaced by an inline confirmation, fields effectively
"reset" since the form unmounts) or error (form stays, inline message,
retry allowed). No modal, no toast, no confetti, no redirect — matches
the rest of the site's restrained interaction language (ADR-008).

Field style: no floating card, no shadow, no rounded box — a thin
`border-b` underline per field (`border-[var(--border)]`, focus state
`border-[var(--text-primary)]`), matching "thin borders + typography"
rather than a generic SaaS form look.

---

# 31. Footer

Desktop:

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ MATHEUS MORI                                                             │
│ Data Scientist & AI Engineer                                             │
│                                                                          │
│ São Paulo, Brazil                         © 2026 Matheus Mori             │
└──────────────────────────────────────────────────────────────────────────┘
```

Optional small social links.

Footer height:

```text
180–240px
```

No complex sitemap.

---

# 32. Full 1440px desktop wireframe

```text
┌──────────────────────────────────────────────────────────────────────────┐
│ MATHEUS MORI     About Projects Case Studies Experience Research ...    │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ DATA SCIENCE · AI ENGINEERING                                            │
│                                                                          │
│ Matheus Mori                                                             │
│                                                                          │
│ Data Scientist                                                           │
│ & AI Engineer                                                            │
│                                                                          │
│ Building production-oriented AI,                                         │
│ machine learning and data products.                                      │
│                                                                          │
│ I work across data, machine learning and AI —                            │
│ turning complex problems into systems people can actually use.           │
│                                                                          │
│ [ Explore my work ]   GitHub ↗   Resume ↗                               │
│                                                                          │
│                                                                  ↓       │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 01 / ABOUT                                                               │
│                                                                          │
│ I build at the intersection of                                           │
│ data, machine learning and AI.                                           │
│                                                                          │
│ BACKGROUND                    I'm a statistician and data professional... │
│ Statistics                    My background spans analytics...            │
│ Data Science                                                             │
│ Machine Learning                                                         │
│                                                                          │
│ ──────────────────────────────────────────────────────────────────────── │
│ DATA SCIENCE          AI ENGINEERING          DATA PRODUCTS              │
│ short copy            short copy              short copy                  │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 02 / SELECTED WORK                                      View all →       │
│                                                                          │
│ Systems designed to                                                     │
│ solve real problems.                                                     │
│                                                                          │
│ PROJECT / 01                                                             │
│ MACHINE LEARNING · DATA PRODUCT                                          │
│                                                                          │
│ Procurement Intelligence        ┌─────────────────────────────────────┐   │
│                                 │                                     │   │
│ A spend and price intelligence  │           DASHBOARD                 │   │
│ platform built on 5.7M+...      │                                     │   │
│                                 └─────────────────────────────────────┘   │
│ 5.7M+      124                                                           │
│ Case Study → Live Demo ↗ GitHub ↗                                       │
│                                                                          │
│                         PROJECT / 02                                     │
│ ┌──────────────────────────────┐ DATA ENGINEERING · ECONOMIC INTEL.      │
│ │                              │                                         │
│ │ REPORT / ARCHITECTURE        │ Steel Indicator                         │
│ │                              │                                         │
│ └──────────────────────────────┘ A reproducible and auditable...         │
│                                529 tests · immutable vintages             │
│                                Case Study → GitHub ↗                     │
│                                                                          │
│ PROJECT / 03 — REMOVED (ADR-016, see docs/DECISIONS.md)                  │
│                                                                          │
│                         PROJECT / 04                                     │
│ [ model evaluation ]            Employee Attrition Prediction            │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 03 / CASE STUDIES                                                        │
│                                                                          │
│ The reasoning behind                                                     │
│ the systems.                                                             │
│                                                                          │
│ ┌──────────────────────────────┐  ┌──────────────────────────────┐        │
│ │ CASE STUDY / 01              │  │ CASE STUDY / 02              │        │
│ │ Procurement Intelligence     │  │ Steel Indicator               │        │
│ │                              │  │                               │        │
│ │ 5.7M+ transactions           │  │ 529 tests                     │        │
│ │ Bronze → Silver → Gold       │  │ Immutable vintages            │        │
│ │                              │  │                               │        │
│ │ Read →                       │  │ Read →                        │        │
│ └──────────────────────────────┘  └──────────────────────────────┘        │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 04 / EXPERIENCE                                                          │
│                                                                          │
│ Where I've worked                                                        │
│ and what I've built.                                                     │
│                                                                          │
│ Data / analytics context       2025 — 2026                               │
│ Resume ↗                      Banco BV                                    │
│                               Data / People Analytics                     │
│                               description                                │
│                               ─────────────────────────────────────────  │
│                               2024 — 2025                                │
│                               BIP Consulting                              │
│                               ...                                        │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 05 / RESEARCH                                                            │
│                                                                          │
│ Applied investigations                                                   │
│ behind the systems.                                                      │
│                                                                          │
│ RESEARCH / 01  Economic Index Construction                       2026 →  │
│ RESEARCH / 02  Shapley Driver Decomposition                      2026 →  │
│ RESEARCH / 03  Survival Analysis for Workforce Dynamics          2025 →  │
│ RESEARCH / 04  Forecasting Workforce Dynamics                    2025 →  │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 06 / CAPABILITIES                                                        │
│                                                                          │
│ Tools and methods I use to                                               │
│ turn ideas into working systems.                                         │
│                                                                          │
│ AI ENGINEERING    MACHINE LEARNING    DATA           ENGINEERING         │
│ RAG               Regression          Python         FastAPI             │
│ Agents            Classification      SQL            Docker              │
│ Evaluation        Forecasting         Pandas         MLflow              │
│ ...               ...                 ...            ...                 │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 07 / WRITING                                                             │
│                                                                          │
│ Notes on data, machine learning and AI systems.                           │
│                                                                          │
│ SEP 2026   8 MIN   Building an auditable economic indicator...       →  │
│ SEP 2026   6 MIN   What I learned building procurement...            →  │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│                                                                          │
│ 08 / CONTACT                                                             │
│                                                                          │
│ Let's build                                                              │
│ something useful.                                                        │
│                                                                          │
│ I'm interested in opportunities and conversations around...              │
│                                                                          │
│ Email                                                             ↗      │
│ LinkedIn                                                          ↗      │
│ GitHub                                                            ↗      │
│ Resume                                                            ↗      │
│                                                                          │
├──────────────────────────────────────────────────────────────────────────┤
│ MATHEUS MORI                                                             │
│ Data Scientist & AI Engineer                                             │
│ São Paulo, Brazil                              © 2026 Matheus Mori       │
└──────────────────────────────────────────────────────────────────────────┘
```

---

# 33. Tablet wireframe

Reference width:

```text
768–1024px
```

Container:

```text
calc(100vw - 48px)
```

Grid:

```text
6 columns
20–24px gutters
```

---

## 33.1 Tablet changes

Navigation:

- reduce nav items;
- use compact menu around <= 900px if needed.

Hero headline:

```text
60–72px
```

About:

```text
2-column split may remain at >= 900px
stack below 900px
```

Projects:

```text
text and image may remain side-by-side at >= 900px
stack below 900px
```

Case Studies:

```text
2 columns at >= 820px
1 column below
```

Capabilities:

```text
2 × 2 grid
```

Experience:

```text
stack intro above timeline below ~900px
```

---

# 34. Mobile full-page wireframe

Reference:

```text
390px
```

```text
┌────────────────────────────┐
│ MATHEUS MORI          MENU │
├────────────────────────────┤
│                            │
│ DATA SCIENCE · AI ENG.     │
│                            │
│ Matheus Mori               │
│                            │
│ Data Scientist             │
│ & AI Engineer              │
│                            │
│ Building production-       │
│ oriented AI, machine       │
│ learning and data          │
│ products.                  │
│                            │
│ Supporting copy...         │
│                            │
│ [ Explore my work ]        │
│                            │
│ GitHub ↗      Resume ↗     │
│                            │
├────────────────────────────┤
│ 01 / ABOUT                 │
│                            │
│ I build at the             │
│ intersection of data,      │
│ machine learning and AI.   │
│                            │
│ Main copy...               │
│                            │
│ BACKGROUND                 │
│ Statistics                 │
│ Data Science               │
│                            │
│ ─────────────────────────  │
│ DATA SCIENCE               │
│ description                │
│                            │
│ ─────────────────────────  │
│ AI ENGINEERING             │
│ description                │
│                            │
│ ─────────────────────────  │
│ DATA PRODUCTS              │
│ description                │
├────────────────────────────┤
│ 02 / SELECTED WORK         │
│                            │
│ Systems designed to        │
│ solve real problems.       │
│                            │
│ View all projects →        │
│                            │
│ PROJECT / 01               │
│ MACHINE LEARNING · DATA    │
│ PRODUCT                    │
│                            │
│ Procurement Intelligence   │
│                            │
│ description                │
│                            │
│ ┌────────────────────────┐ │
│ │ dashboard              │ │
│ └────────────────────────┘ │
│                            │
│ 5.7M+          124         │
│ transactions   tests       │
│                            │
│ stack                      │
│                            │
│ Case Study →               │
│ Live Demo ↗                │
│ GitHub ↗                   │
│                            │
│ PROJECT / 02               │
│ Steel Indicator            │
│ ...                        │
│                            │
├────────────────────────────┤
│ 03 / CASE STUDIES          │
│                            │
│ The reasoning behind       │
│ the systems.               │
│                            │
│ CASE STUDY / 01            │
│ Procurement Intelligence   │
│ ...                        │
│                            │
│ CASE STUDY / 02            │
│ Steel Indicator            │
├────────────────────────────┤
│ 04 / EXPERIENCE            │
│                            │
│ Where I've worked          │
│ and what I've built.       │
│                            │
│ Resume ↗                   │
│                            │
│ 2025 — 2026                │
│ Banco BV                   │
│ ...                        │
│                            │
│ 2024 — 2025                │
│ BIP Consulting             │
│ ...                        │
├────────────────────────────┤
│ 05 / RESEARCH              │
│                            │
│ Applied investigations     │
│ behind the systems.        │
│                            │
│ RESEARCH / 01              │
│ Economic Index...          │
│                            │
│ RESEARCH / 02              │
│ Shapley...                 │
├────────────────────────────┤
│ 06 / CAPABILITIES          │
│                            │
│ AI ENGINEERING             │
│ ...                        │
│                            │
│ MACHINE LEARNING           │
│ ...                        │
│                            │
│ DATA                       │
│ ...                        │
│                            │
│ ENGINEERING                │
│ ...                        │
├────────────────────────────┤
│ 07 / WRITING               │
│                            │
│ article                    │
│ article                    │
├────────────────────────────┤
│ 08 / CONTACT               │
│                            │
│ Let's build                │
│ something useful.          │
│                            │
│ Email                 ↗    │
│ LinkedIn              ↗    │
│ GitHub                ↗    │
│ Resume                ↗    │
├────────────────────────────┤
│ MATHEUS MORI               │
│ Data Scientist & AI Eng.   │
│ São Paulo, Brazil          │
│ © 2026                     │
└────────────────────────────┘
```

---

# 35. Responsive breakpoints

Recommended conceptual breakpoints:

```text
mobile small:
< 390px

mobile:
390–639px

tablet small:
640–767px

tablet:
768–1023px

desktop:
1024–1439px

large desktop:
>= 1440px
```

Tailwind implementation may map to standard breakpoints.

Do not add unnecessary custom breakpoints unless layout actually breaks.

---

# 36. Project visual priorities

For each flagship project, assets should be selected in this priority:

## Procurement Intelligence

1. dashboard overview;
2. architecture diagram;
3. model evaluation;
4. anomaly/savings page.

## Steel Indicator

1. report / IPIA chart;
2. architecture;
3. methodology/vintage visualization;
4. report page.

## Attrition Prediction

1. evaluation visual;
2. feature interpretation;
3. classification workflow.

---

# 37. Image composition rules

Screenshots must be cropped intentionally.

Never show:

- Windows taskbar;
- browser bookmarks bar;
- private information;
- irrelevant empty dashboard space;
- accidental debug UI.

Image crop should emphasize:

```text
product
+
data
+
result
```

---

# 38. Section entrance motion

Optional.

Behavior:

```text
opacity: 0 → 1
translateY: 12px → 0
duration: 350ms
```

Stagger:

```text
50–80ms
```

Only for immediately adjacent elements.

Do not animate every line of text.

Respect:

```text
prefers-reduced-motion
```

---

# 39. Anchor behavior

Navigation anchor scroll:

```text
smooth
```

but browser-native smooth scrolling is enough.

Sticky nav offset:

```text
scroll-margin-top: 96px
```

for anchored sections.

---

# 40. Focus order

Keyboard order:

```text
Skip to content
Brand
Nav links
Resume
Hero CTA
GitHub
Resume
Projects links
Case studies
Experience Resume
Research links
Writing links
Contact links
Footer links
```

Add:

```text
Skip to content
```

visually hidden until focus.

---

# 41. CTA hierarchy

Across Home:

### Highest priority

```text
Explore my work
```

### Project priority

```text
Case Study →
View project →
```

### Evidence links

```text
Live Demo ↗
GitHub ↗
```

### Career link

```text
Resume ↗
```

Do not style every link as a button.

---

# 42. External link treatment

Use:

```text
↗
```

for external or new-context links.

Examples:

```text
GitHub ↗
LinkedIn ↗
Resume ↗
Live Demo ↗
```

Use:

```text
→
```

for internal navigation.

Examples:

```text
Case Study →
View all projects →
Read →
```

This rule should remain consistent.

---

# 43. Home content density

Maximum text widths:

Hero support:

```text
620px
```

About body:

```text
720px
```

Project description:

```text
480px
```

Case Study description:

```text
500px
```

Contact intro:

```text
680px
```

Avoid long full-width paragraphs.

---

# 44. Content constraints

## Hero

Maximum:

```text
headline: 2 lines
descriptor: 2 lines
support: 2–3 lines
```

## Project

Maximum:

```text
description: 2–3 lines desktop
metrics: 4
stack items: 5
links: 3
```

## Experience

Maximum:

```text
2 lines description
```

## Research

Maximum:

```text
1 short summary
```

---

# 45. Page length

Expected 1440px desktop page height:

approximately:

```text
9,000–12,000px
```

This is acceptable.

Do not artificially compress to reduce page length.

The page is a portfolio catalogue.

---

# 46. Home loading priorities

Above-the-fold:

1. fonts;
2. nav;
3. Hero;
4. minimal CSS.

Do not preload project images below fold unless needed.

Use lazy loading for:

- project screenshots;
- case study visuals;
- research imagery.

---

# 47. Home implementation component tree

Conceptual:

```tsx
<HomePage>
  <SiteHeader />

  <main>
    <Hero />

    <AboutSection />

    <SelectedWorkSection>
      <ProjectFeature />
      <ProjectFeature />
      <ProjectFeature />
      <ProjectFeature />
    </SelectedWorkSection>

    <CaseStudiesSection>
      <CaseStudyCard />
      <CaseStudyCard />
    </CaseStudiesSection>

    <ExperienceSection>
      <ExperienceTimeline />
    </ExperienceSection>

    <ResearchSection>
      <ResearchRow />
      <ResearchRow />
      <ResearchRow />
      <ResearchRow />
    </ResearchSection>

    <CapabilitiesSection>
      <CapabilityGroup />
      <CapabilityGroup />
      <CapabilityGroup />
      <CapabilityGroup />
    </CapabilitiesSection>

    <WritingSection />

    <ContactSection />
  </main>

  <SiteFooter />
</HomePage>
```

---

# 48. Suggested implementation order

## Step 1

Implement only:

```text
Header
Hero
Section shell
Typography
```

Review proportions.

---

## Step 2

Implement:

```text
About
```

Confirm:

- grid;
- body width;
- section rhythm.

---

## Step 3

Implement only first flagship:

```text
Procurement Intelligence
```

Use it to finalize ProjectFeature component.

---

## Step 4

Add:

```text
Steel Indicator
Attrition
```

---

## Step 5

Implement remaining sections.

---

## Step 6

Mobile adaptation.

Do **not** build desktop and then treat mobile as a final quick patch.

Mobile must be reviewed before visual polish.

---

# 49. Visual QA checklist — desktop

At 1440px:

- [ ] Hero feels spacious but not empty.
- [ ] Hero headline dominates without filling entire viewport.
- [ ] Next section is discoverable.
- [ ] Content aligns consistently to 1240px container.
- [ ] Selected Work is visually dominant.
- [ ] Project imagery is larger than technology labels.
- [ ] Project cards do not look like generic SaaS tiles.
- [ ] Case Studies feel analytical.
- [ ] Experience does not resemble a résumé template.
- [ ] Capabilities do not look like a badge cloud.
- [ ] Contact has strong final visual hierarchy.
- [ ] Accent color appears sparingly.

---

# 50. Visual QA checklist — mobile

At 390px:

- [ ] Hero title has no awkward orphan word.
- [ ] CTA is immediately visible.
- [ ] No horizontal scrolling.
- [ ] Project images are readable.
- [ ] Project metrics do not overflow.
- [ ] External links remain tappable.
- [ ] Section labels are legible.
- [ ] Capabilities stack naturally.
- [ ] Research rows remain understandable.
- [ ] Contact links are at least 44px high.
- [ ] Menu can be operated by keyboard/touch.

---

# 51. Typography QA

Check:

- [ ] headline line breaks are intentional;
- [ ] no body text exceeds ~75 characters per line;
- [ ] mono font is not overused;
- [ ] uppercase labels remain secondary;
- [ ] headline letter spacing remains readable;
- [ ] paragraph contrast passes WCAG AA.

---

# 52. Animation QA

Check:

- [ ] no perpetual decorative animation;
- [ ] no scroll hijacking;
- [ ] hover not required for understanding;
- [ ] `prefers-reduced-motion` supported;
- [ ] animation does not delay content.

---

# 53. What should be visible without scrolling at 1440×900

Recommended:

```text
Navigation

DATA SCIENCE · AI ENGINEERING

Matheus Mori

Data Scientist
& AI Engineer

Building production-oriented AI,
machine learning and data products.

supporting copy

CTA group

small hint of next section
```

The first project should **not** be visible in the first viewport.

The first hint of About may be visible near the bottom.

---

# 54. What should be visible without scrolling at 390×844

Recommended:

```text
Navigation

DATA SCIENCE · AI ENGINEERING

Matheus Mori

Data Scientist
& AI Engineer

descriptor

part or all of support copy

primary CTA
```

Secondary links may be just below the fold.

That is acceptable.

---

# 55. Section ID map

Implementation:

```text
#top
#about
#projects
#case-studies
#experience
#research
#capabilities
#writing
#contact
```

---

# 56. Home metadata

Title:

```text
Matheus Mori — Data Scientist & AI Engineer
```

Description:

```text
Data Scientist & AI Engineer building production-oriented
AI, machine learning systems and data products.
```

---

# 57. Content data separation

Do not hardcode all copy inside page JSX.

Recommended:

```text
data/site.ts
data/projects.ts
data/experience.ts
data/research.ts
data/capabilities.ts
```

Example:

```ts
export const hero = {
  eyebrow: "Data Science · AI Engineering",
  name: "Matheus Mori",
  role: "Data Scientist & AI Engineer",
  descriptor:
    "Building production-oriented AI, machine learning and data products.",
};
```

---

# 58. First build acceptance criteria

The first visual build does **not** need:

- final screenshots;
- animations;
- perfect project diagrams;
- final article content;
- RAG;
- analytics.

It must have:

```text
real copy
real spacing
real typography
real project titles
real layout
responsive skeleton
```

Placeholders are acceptable only for project images.

Use labeled placeholders:

```text
[ Procurement dashboard screenshot ]
```

Never lorem ipsum.

---

# 59. Asset TODO list

Before visual-final phase, collect:

## Procurement Intelligence

```text
[ ] dashboard overview screenshot
[ ] price intelligence screenshot
[ ] architecture diagram
[ ] model validation image
```

## Steel Indicator

```text
[ ] IPIA report screenshot
[ ] historical chart
[ ] architecture diagram
[ ] methodology/vintage diagram
```

## Attrition

```text
[ ] evaluation chart
[ ] feature interpretation visual
```

---

# 60. Recommended first screenshot crop sizes

Desktop project cover:

```text
1600 × 1000
```

Aspect:

```text
8:5
```

Case study preview:

```text
1400 × 900
```

OG later:

```text
1200 × 630
```

---

# 61. Home design approval gate

Before building `/projects` or `/case-studies`, approve Home based on these questions:

```text
1. Does the Hero feel like Matheus?
2. Does the site look technical without looking cliché?
3. Do projects dominate the page?
4. Does Procurement Intelligence look like a real system?
5. Does Steel Indicator look rigorous and credible?
6. Is Data Science → AI Engineering positioning clear?
7. Does mobile feel intentional?
8. Does the color system feel restrained?
9. Is there enough whitespace?
10. Would a recruiter understand the profile in 10 seconds?
```

If fewer than 8 answers are clearly “yes”:

**do not proceed to secondary pages yet.**

Fix Home first.

---

# 62. Coding agent instruction

Use this alongside `PORTFOLIO_SPEC.md`:

```text
HOME_WIREFRAME.md defines the Home page layout.

Implement the spatial structure before adding visual decoration.

Do not create generic card grids where the wireframe specifies editorial
project rows.

Do not add a decorative Hero image unless explicitly requested.

Selected Work must remain the dominant section after Hero/About.

Use real copy and project data from the start.

Build the 1440px desktop composition first, but verify the structure at
390px before moving to polish.

When a measurement is expressed as a range, choose the value that best
preserves whitespace, reading width and hierarchy.

Do not add gradients, neon effects, skill progress bars, 3D icons,
particle effects, custom cursors, heavy parallax or terminal aesthetics.

The intended visual language is:
minimal + technical + editorial.
```

---

# 63. Next step after this document

After `HOME_WIREFRAME.md`, the recommended sequence is:

```text
PORTFOLIO_SPEC.md          ✅
HOME_WIREFRAME.md          ✅
        ↓
PROJECT_CONTENT.md
        ↓
PROJECT_ASSETS.md
        ↓
Initialize Next.js project
        ↓
Implement design tokens
        ↓
Implement Home skeleton
        ↓
Visual review
        ↓
Add project imagery
        ↓
Build project pages
        ↓
Build case studies
        ↓
Deploy V1
```

The next artifact should be:

```text
PROJECT_CONTENT.md
```

Its job is to define the exact public-facing copy, proof points, URLs,
metrics and image requirements for every V1 project.

---


# 63.1 Core Home copy — PT-BR baseline

These are baseline translations for layout testing. Final editorial review happens in `PROJECT_CONTENT.md` and localized content files.

## Hero

Eyebrow:

```text
DATA SCIENCE · ENGENHARIA DE IA
```

Name:

```text
Matheus Mori
```

Headline:

```text
Cientista de Dados
& Engenheiro de IA
```

Descriptor:

```text
Construindo produtos de IA,
machine learning e dados orientados à produção.
```

Supporting copy:

```text
Atuo entre dados, machine learning e inteligência artificial —
transformando problemas complexos em sistemas que as pessoas realmente podem usar.
```

Primary CTA:

```text
Conheça meus projetos
```

Secondary:

```text
GitHub ↗
Currículo ↗
```

---

## About

Label:

```text
01 / SOBRE
```

Headline:

```text
Construo na interseção entre
dados, machine learning e IA.
```

Pillars:

```text
DATA SCIENCE
ENGENHARIA DE IA
PRODUTOS DE DADOS
```

---

## Selected Work

Label:

```text
02 / PROJETOS SELECIONADOS
```

Headline:

```text
Sistemas construídos para
resolver problemas reais.
```

CTA:

```text
Ver todos os projetos →
```

---

## Case Studies

Updated by M1-04 (ADR-012): "dos sistemas" -> "do trabalho".

Label:

```text
03 / ESTUDOS DE CASO
```

Headline:

```text
O raciocínio por trás
do trabalho.
```

Supporting:

```text
Problemas, arquitetura, validação,
trade-offs e o que não funcionou de primeira.
```

---

## Experience

```text
04 / EXPERIÊNCIA

Onde trabalhei
e o que construí.
```

---

## Research

```text
05 / PESQUISA

Investigações aplicadas
por trás dos sistemas.
```

---

## Capabilities

```text
06 / CAPACIDADES

Ferramentas e métodos que uso para
transformar ideias em sistemas funcionais.
```

The section name may remain `CAPABILITIES` in the English locale only.

---

## Writing

Preferred Portuguese label:

```text
07 / ARTIGOS
```

Headline:

```text
Notas sobre dados,
machine learning e sistemas de IA.
```

Avoid translating `Writing` as `Escrita`.

---

## Contact

```text
08 / CONTATO

Vamos construir
algo útil.
```

Supporting:

```text
Tenho interesse em oportunidades e conversas sobre
Data Science, Machine Learning e Engenharia de IA.
```

---

## Footer role

EN:

```text
Data Scientist & AI Engineer
```

PT:

```text
Cientista de Dados & Engenheiro de IA
```

---

# 64. Final wireframe principle

The Home should visually communicate:

```text
MATHEUS MORI

understands data
      ↓
builds models
      ↓
designs systems
      ↓
documents decisions
      ↓
ships usable products
```

That progression is the narrative of the page.

**End of wireframe specification.**


---

# 65. Locale implementation note

Anchor IDs remain language-neutral/stable in both versions:

```text
#about
#projects
#case-studies
#experience
#research
#capabilities
#writing
#contact
```

Visible labels are translated, but anchors are not.

This ensures:

```text
/en#projects
/pt#projects
```

behave consistently.

Do not create separate component trees for EN and PT-BR.

**End of bilingual wireframe addendum.**
