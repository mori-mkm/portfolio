# PORTFOLIO_SPEC.md

> **Portfolio Product Specification — Matheus Mori**  
> Version: **1.1**  
> Status: **Ready for implementation**  
> Website languages: **English (EN) + Portuguese / Brazil (PT-BR)**  
> Default canonical locale: **English**  
> Specification language: **Portuguese**  
> Target stack: **Next.js + TypeScript + Tailwind CSS + MDX + Vercel**

---

## 0. Objetivo deste documento

Este arquivo é a **fonte de verdade do portfólio**.

Ele deve ser usado pelo desenvolvedor, Claude Code, Codex ou outro agente de implementação para tomar decisões de estrutura, UX, conteúdo, componentes e identidade visual **sem reinventar o produto durante o desenvolvimento**.

Quando houver conflito entre uma decisão improvisada durante a implementação e este documento, este documento prevalece, a menos que Matheus aprove explicitamente uma mudança.

O portfólio não deve ser tratado como:

- um currículo online;
- uma coleção de notebooks;
- uma landing page genérica de desenvolvedor;
- um catálogo de tecnologias;
- um dashboard pessoal;
- uma página com estética “cyberpunk AI”.

Ele deve parecer um **catálogo editorial de sistemas, produtos e pesquisas construídos por um Data Scientist & AI Engineer**.

---

# 1. Visão do produto

## 1.1 Objetivo principal

Criar uma presença profissional própria que posicione Matheus Mori na interseção de:

1. **Data Science**
2. **Machine Learning Engineering**
3. **AI Engineering**
4. **Data Products**

A mensagem central é:

> Matheus não apenas analisa dados ou treina modelos.  
> Ele transforma problemas em sistemas de dados, machine learning e AI que podem ser avaliados, utilizados e evoluídos.

---

## 1.2 Posicionamento

### Título principal

**Data Scientist & AI Engineer**

### Descriptor principal

**Building production-oriented AI, machine learning and data products.**

### Ideia que todo o site deve sustentar

**From data to systems people can actually use.**

Não é necessário exibir essa frase em todos os lugares. Ela funciona como princípio editorial interno.

---

## 1.3 Teste dos 10 segundos

Depois de 10 segundos na Home, um visitante deve conseguir responder:

- Quem é Matheus?
- O que ele constrói?
- Qual é a área profissional dele?
- Quais são seus 2–3 melhores projetos?
- Onde posso ver código, demos ou detalhes?
- Como entro em contato?

Se qualquer decisão de design dificultar essas respostas, ela deve ser revista.

---

# 2. Referências de produto

O portfólio combina deliberadamente três referências diferentes.

## 2.1 Taaran Jain — referência de arquitetura da informação

Referência:

`https://www.taaranjain.com/`

Usar como inspiração para:

- navegação linear;
- seções previsíveis;
- numeração das seções;
- separação entre Projects e Case Studies;
- Experience;
- Research;
- Skills/Capabilities;
- Blog;
- Contact.

### O que preservar da lógica

O visitante não precisa escolher um “tipo de jornada”.

A navegação deve ser direta:

```text
About
Projects
Case Studies
Experience
Research
Capabilities
Writing
Contact
```

### O que não copiar

- excesso de badges;
- excesso de informações simultâneas;
- listas longas de tecnologias;
- seções de baixa relevância apenas para preencher espaço;
- estética visual do site original.

---

## 2.2 Saim — referência visual

Referência:

`https://www.saim.dev/`

Usar como inspiração para:

- minimalismo;
- muito espaço negativo;
- contraste tipográfico;
- sensação editorial;
- foco em “Selected work”;
- pouco ruído visual;
- escrita curta e confiante;
- aparência de produto técnico sofisticado, não de template.

### Princípio

**O trabalho é o elemento visual principal.**

A interface não deve disputar atenção com os projetos.

---

## 2.3 Zavier Kamath — referência de conteúdo de projetos

Referência:

`https://www.zavier-kamath.com/`

Usar como inspiração para:

- projetos com impacto real;
- métricas antes de listas de ferramentas;
- sistemas completos;
- AI + backend + produto;
- demonstrações;
- resultados;
- contexto de negócio;
- explicação de arquitetura.

### O que não copiar

Não usar navegação dividida em caminhos como:

```text
Recruiters
AI Engineers
Researchers
Demos
Industry
Personal
Coursework
Research
```

Isso cria decisões demais.

O conteúdo pode ser profundo sem a navegação ser complexa.

---

# 3. Princípios de UX

## 3.1 Clareza > criatividade

A identidade pode ser original.

A navegação não precisa ser.

---

## 3.2 Projetos > skills

As competências devem ser demonstradas pelos sistemas construídos.

Nunca depender da seção Skills para convencer o visitante de que Matheus sabe determinada tecnologia.

---

## 3.3 Impacto > stack

Ordem ideal para apresentar um projeto:

```text
Problema
→ Produto/Sistema
→ Escala ou resultado
→ Arquitetura
→ Evidências
→ Tecnologias
```

Nunca:

```text
Python
LangChain
Docker
FastAPI
...
→ e depois explicar o projeto
```

---

## 3.4 Evidence-first

Afirmações importantes devem, sempre que possível, apontar para evidências:

- GitHub;
- live demo;
- case study;
- arquitetura;
- relatório;
- testes;
- metodologia;
- métricas;
- documentação.

---

## 3.5 Progressive disclosure

A Home deve ser simples.

A profundidade fica nas páginas de projeto e case study.

```text
HOME
    ↓
PROJECT CARD
    ↓
PROJECT PAGE
    ↓
CASE STUDY / GITHUB / DEMO
```

---

# 4. Escopo

## 4.1 V1 — obrigatório

A primeira versão deve incluir:

- Home
- About
- Selected Work
- Projects index
- 4 projetos bem apresentados
- Case Studies index
- 2 case studies completos
- Experience
- Research
- Capabilities
- Writing index
- Contact
- Resume
- GitHub
- LinkedIn
- SEO básico
- EN + PT-BR
- seletor de idioma
- hreflang + metadata localizada
- responsividade
- acessibilidade básica
- deploy na Vercel

---

## 4.2 V1.1 — após o primeiro deploy

Adicionar:

- AI Closer como flagship, quando houver evidência suficiente;
- terceiro case study;
- primeiros artigos;
- screenshots e diagramas mais sofisticados;
- analytics;
- Open Graph images customizadas.

---

## 4.3 V2

Adicionar:

- Portfolio RAG / “Ask Matheus”;
- busca;
- filtros avançados de projetos;
- PT-BR opcional;
- integrações automáticas com GitHub;
- atualização automatizada de métricas;
- experimentos interativos adicionais.

---

# 5. Arquitetura de informação

## 5.1 Navegação principal

Desktop:

```text
MATHEUS MORI

About
Projects
Case Studies
Experience
Research
Capabilities
Writing
Contact

GitHub ↗
Resume ↗
```

Não colocar todos os itens com o mesmo peso visual.

Sugestão:

- esquerda: marca;
- centro/direita: navegação;
- extremo direito: Resume ou ícone externo.

---

## 5.2 Rotas

O site é bilíngue desde a V1. Todas as páginas públicas ficam sob um prefixo de locale.

```text
/
├── /en
│   ├── /projects
│   │   └── /projects/[slug]
│   ├── /case-studies
│   │   └── /case-studies/[slug]
│   ├── /research
│   ├── /writing
│   │   └── /writing/[slug]
│   ├── /resume
│   └── /ask              # V2
│
└── /pt
    ├── /projects
    │   └── /projects/[slug]
    ├── /case-studies
    │   └── /case-studies/[slug]
    ├── /research
    ├── /writing
    │   └── /writing/[slug]
    ├── /resume
    └── /ask              # V2
```

A rota `/` deve redirecionar para `/en` por padrão, podendo respeitar uma preferência de idioma já salva pelo usuário.

Na primeira visita, detecção por idioma do navegador pode ser usada apenas como conveniência. Ela nunca deve impedir que o visitante troque manualmente de idioma.

Os slugs dos projetos devem permanecer estáveis entre idiomas quando possível:

```text
/en/projects/procurement-intelligence
/pt/projects/procurement-intelligence
```

Isso evita manter duas taxonomias de URLs para o mesmo projeto.

### Observação

About, Experience, Capabilities e Contact podem ser âncoras da Home na V1.

Não criar páginas separadas sem necessidade.

---

# 6. Estrutura da Home

A sequência oficial é:

```text
NAV
↓
HERO
↓
01 / ABOUT
↓
02 / SELECTED WORK
↓
03 / CASE STUDIES
↓
04 / EXPERIENCE
↓
05 / RESEARCH
↓
06 / CAPABILITIES
↓
07 / WRITING
↓
08 / CONTACT
↓
FOOTER
```

Essa ordem deve ser preservada na V1.

---

# 7. Navigation

## Objetivo

Permitir que o visitante chegue às informações principais sem pensar.

## Comportamento

### Desktop

- sticky;
- fundo ligeiramente translúcido apenas durante scroll;
- blur muito discreto;
- altura aproximada: 64–72 px;
- sem barra pesada;
- sem sombra forte.

### Mobile

Menu compacto:

```text
MATHEUS MORI                     MENU
```

Abrir overlay simples ou drawer.

Evitar menu “hambúrguer” animado excessivamente.

---

# 8. Hero

## 8.1 Objetivo

Responder imediatamente:

> Quem é essa pessoa e o que ela constrói?

---

## 8.2 Copy oficial — V1

### Eyebrow

```text
DATA SCIENCE · AI ENGINEERING
```

### Nome

```text
Matheus Mori
```

### Headline

```text
Data Scientist & AI Engineer
```

### Descriptor

```text
Building production-oriented AI,
machine learning and data products.
```

### Supporting copy

```text
I work across data, machine learning and AI —
turning complex problems into systems people can actually use.
```

### CTAs

Primary:

```text
Explore my work
```

Secondary:

```text
GitHub ↗
```

Tertiary, visual mais discreto:

```text
Resume ↗
```

---

## 8.3 Layout

Desktop:

```text
┌──────────────────────────────────────────────────────────┐
│ DATA SCIENCE · AI ENGINEERING                           │
│                                                          │
│ Matheus Mori                                             │
│                                                          │
│ Data Scientist & AI Engineer                             │
│                                                          │
│ Building production-oriented AI,                         │
│ machine learning and data products.                      │
│                                                          │
│ Supporting sentence...                                   │
│                                                          │
│ [ Explore my work ]  GitHub ↗  Resume ↗                 │
│                                                          │
│                                      optional visual      │
│                                      / project index      │
└──────────────────────────────────────────────────────────┘
```

### Regra importante

Não usar foto obrigatoriamente no Hero da V1.

O trabalho deve aparecer antes da necessidade de “personal branding portrait”.

Uma foto profissional pode ser introduzida na área About ou V1.1.

---

## 8.4 Altura

Não forçar `100vh`.

Ideal:

```text
min-height: 70–85vh
```

O começo da próxima seção deve ficar parcialmente visível em desktops maiores.

Isso sinaliza que existe conteúdo abaixo.

---

# 9. 01 / About

## 9.1 Heading

```text
01 / ABOUT

I build at the intersection of
data, machine learning and AI.
```

---

## 9.2 Copy base

```text
I'm a statistician and data professional focused on turning analytical
problems into reliable products and systems.

My background spans analytics, machine learning, experimentation and
decision-support products. Today, I'm increasingly focused on AI
engineering — especially systems that combine LLMs, retrieval, agents,
evaluation, APIs and production-oriented software practices.
```

A copy final pode sofrer pequenos ajustes de voz, mas deve manter:

- origem em estatística;
- Data Science;
- produto;
- evolução para AI Engineering;
- produção;
- nenhuma narrativa exagerada de “AI expert”.

---

## 9.3 Três pilares

### DATA SCIENCE

```text
Statistical modeling, experimentation,
forecasting and machine learning.
```

### AI ENGINEERING

```text
LLM applications, RAG, agents,
evaluation and AI systems.
```

### DATA PRODUCTS

```text
Turning models and analysis into
tools people can actually use.
```

---

## 9.4 Métricas

Máximo de 3 ou 4.

Somente usar métricas defensáveis.

Candidatas:

```text
5.7M+
records processed

529
automated tests
Steel Indicator

124
automated tests
Procurement Intelligence
```

Não misturar métricas de projetos diferentes sem deixar o contexto claro.

---

# 10. 02 / Selected Work

## 10.1 Objetivo

Esta é a seção mais importante da Home.

Ela precisa fazer o visitante querer explorar os projetos.

---

## 10.2 Quantidade

V1:

**3 projetos**

Atualizado no M1-04 (ADR-012, `docs/DECISIONS.md`): Steel Indicator saiu de
Selected Work e passou a viver exclusivamente em Case Studies — um projeto
nomeado tem uma única seção primária na Home.

Atualizado em 2026-09-22 (ADR-017): Selected Work atual = **3 projetos** —
01 DataLab OS (flagship), 02 Procurement Intelligence, 03 Employee Attrition
Prediction. DataLab OS não aparece em Case Studies.

Não mostrar todo o GitHub.

---

## 10.3 Ordem recomendada — V1

Esta subseção é o rascunho original (4 projetos, incluindo Steel e o link
"Case Study →" em Procurement). A ordem e a composição **finais** estão em
`PROJECT_CONTENT.md` §79-80 (Selected Work) e §81-82/§2/§57-58 (Case
Studies) — consulte esses para a Home implementada. O flagship atual
(DataLab OS, ADR-017) está em `PROJECT_CONTENT.md` §93.

### 01 — Procurement Intelligence

Categoria:

```text
MACHINE LEARNING · DATA PRODUCT
```

Título:

```text
Procurement Intelligence
```

Descriptor:

```text
A spend and price intelligence platform built on
5.7M+ procurement transactions.
```

Proof points:

```text
5.7M+ transactions
124 automated tests
Temporal ML validation
Live dashboard
```

Stack resumida:

```text
Python · DuckDB · LightGBM · Streamlit
```

Links:

```text
Case Study →
Live Demo ↗
GitHub ↗
```

---

### 02 — Steel Indicator

Categoria:

```text
DATA ENGINEERING · ECONOMIC INTELLIGENCE
```

Título:

```text
Steel Indicator
```

Descriptor:

```text
A reproducible and auditable platform for
Brazilian steel-sector economic indices.
```

Proof points:

```text
529 automated tests
Immutable data vintages
Versioned methodology
Public data pipeline
```

Stack resumida:

```text
Python · Pandas · APIs · Docker · Statistical Methods
```

Links:

```text
Case Study →
GitHub ↗
```

---

> **Removed (ADR-016, 2026-09-05):** "Application Job" was here as project 03.
> It has been removed from Selected Work entirely (no replacement) — see
> `docs/DECISIONS.md` ADR-016. Kept out of this list rather than rewritten as
> if it never existed; do not re-add this content without a new decision.

---

### 04 — Employee Attrition Prediction

Categoria:

```text
MACHINE LEARNING · PEOPLE ANALYTICS
```

Título:

```text
Employee Attrition Prediction
```

Descriptor:

```text
An interpretable classification workflow focused on
identifying employees at higher attrition risk.
```

Proof points:

```text
74% recall
SMOTE
Threshold optimization
5-fold cross-validation
```

Stack:

```text
Python · Scikit-learn · Imbalanced-learn
```

Links:

```text
Project →
GitHub ↗
```

---

## 10.4 Projeto que deve assumir destaque quando estiver pronto

### AI Closer

Quando possuir pelo menos:

- arquitetura clara;
- código publicável;
- demo ou vídeo;
- avaliação;
- RAG funcional;
- agent orchestration;
- métricas de qualidade/custo/latência;

ele deve entrar como **Project / 01** ou **Project / 02**.

Categoria:

```text
AGENTIC AI · RAG · AI PRODUCT
```

O site não deve promover o AI Closer como flagship apenas pela ideia.

**Evidence before prominence.**

---

## 10.5 DemandVision

É candidato para substituir o projeto de Attrition quando estiver suficientemente documentado e demonstrável.

O critério é simples:

> Qual projeto prova melhor a direção profissional atual?

Não selecionar projetos apenas por antiguidade.

---

# 11. Project Card

## Estrutura padrão

```text
PROJECT / 01

MACHINE LEARNING · DATA PRODUCT

Procurement Intelligence

A spend and price intelligence platform built
on 5.7M+ procurement transactions.

5.7M+        124          LIVE
records      tests        dashboard

Python · DuckDB · LightGBM · Streamlit

View project →
```

---

## 11.1 Regras

Um card deve conter no máximo:

- número;
- categoria;
- título;
- descrição de 1–2 linhas;
- 2–4 evidências;
- 3–5 tecnologias;
- CTA.

Não colocar parágrafos.

---

## 11.2 Imagens

Cada projeto pode possuir uma imagem principal.

Preferência:

1. screenshot real do produto;
2. arquitetura;
3. visualização produzida pelo projeto;
4. interface do dashboard.

Evitar:

- mockup de laptop genérico;
- imagem gerada por IA apenas para decorar;
- ilustração abstrata sem relação com o projeto;
- logos grandes das tecnologias.

---

# 12. /projects

## Objetivo

Mostrar o conjunto mais amplo de coisas construídas sem sobrecarregar a Home.

---

## Header

```text
PROJECTS

Systems, models and data products I've built.
```

---

## Categorias sugeridas

Filtros são opcionais na V1.

Se implementados:

```text
All
AI Systems
Machine Learning
Data Products
Research
```

Não criar 10 filtros.

---

## Conteúdo

Projetos candidatos:

1. Procurement Intelligence
2. Steel Indicator
3. Application Job
4. Employee Attrition Prediction
5. AI Closer — quando publicável
6. DemandVision — quando publicável
7. outros projetos somente se aumentarem a percepção de qualidade

---

# 13. 03 / Case Studies

## 13.1 Diferença entre Projects e Case Studies

**Projects** respondem:

> O que você construiu?

**Case Studies** respondem:

> Como você pensou, decidiu, validou e construiu?

---

## 13.2 V1

Começar com dois.

Atualizado no M1-04 (ADR-012): Procurement Intelligence permanece
exclusivamente em Selected Work — sem Case Study duplicado. Ver
`PROJECT_CONTENT.md` §2.

### Case Study / 01

```text
Steel Indicator
```

### Case Study / 02

```text
Developer Market Research / CNN Brasil
```

Não esperar três para lançar.

---

## 13.3 Card de Case Study

```text
CASE STUDY / 01

Procurement Intelligence

From millions of public procurement records
to a reproducible price-intelligence system.

DATA
5.7M+ transactions

ENGINEERING
Bronze → Silver → Gold

VALIDATION
Temporal split

QUALITY
124 automated tests

Read case study →
```

---

# 14. Template oficial de Case Study

Todos os case studies devem seguir aproximadamente o mesmo esqueleto.

```text
00 / OVERVIEW
01 / PROBLEM
02 / CONTEXT & CONSTRAINTS
03 / DATA
04 / APPROACH
05 / SYSTEM ARCHITECTURE
06 / MODELING / LOGIC
07 / EVALUATION
08 / PRODUCTION & RELIABILITY
09 / RESULTS
10 / TRADE-OFFS
11 / LIMITATIONS
12 / WHAT I WOULD IMPROVE
13 / LINKS
```

Nem todo projeto precisa usar todas as seções.

---

## 14.1 Overview

Mostrar rapidamente:

```text
ROLE
Personal project

TYPE
Machine Learning System

STATUS
Live

YEAR
2026

STACK
Python · DuckDB · LightGBM · Streamlit
```

E de 3 a 4 métricas.

---

## 14.2 Problem

Responder:

- qual problema existe?
- quem se beneficia?
- por que uma simples análise não é suficiente?

---

## 14.3 Context & Constraints

Esta seção é especialmente importante.

Mostrar limitações reais aumenta credibilidade.

Exemplos:

```text
Public procurement data is a proxy for corporate procurement.

The model cannot treat every transaction as directly comparable.

Temporal leakage must be avoided.

The application must work without shipping the full 5.8M-row dataset.
```

---

## 14.4 Data

Mostrar:

- fontes;
- granularidade;
- período;
- volume;
- transformações críticas;
- qualidade.

Usar pequenos diagramas e tabelas.

---

## 14.5 System Architecture

Obrigatório nos principais case studies.

Exemplo:

```text
PUBLIC DATA
    ↓
INGESTION
    ↓
BRONZE
    ↓
SILVER
    ↓
GOLD
    ↓
ANALYTICS / ML
    ↓
VALIDATION
    ↓
APPLICATION
```

Diagrama deve ser renderizado como componente visual.

Não depender exclusivamente de Mermaid no produto final se o resultado visual não estiver alinhado ao design system.

---

## 14.6 Modeling / Logic

Não transformar a página em notebook.

Mostrar:

- por que o modelo foi escolhido;
- baseline;
- features relevantes;
- estratégia de validação;
- alternativas testadas;
- por que alguma opção foi descartada.

---

## 14.7 Evaluation

Para ML:

- baseline;
- modelo;
- métricas;
- validation design;
- error analysis;
- coverage.

Para AI:

- task success;
- retrieval quality;
- groundedness;
- cost;
- latency;
- eval cases;
- failure modes.

---

## 14.8 Production & Reliability

Mostrar evidência de engenharia:

```text
Tests
CI
Versioning
Data contracts
Logging
Monitoring
Docker
Deployment
Reproducibility
ADRs
```

Somente listar o que realmente existe.

---

## 14.9 Trade-offs

Esta é uma seção estratégica para a marca.

Exemplo:

```text
Why DuckDB instead of Spark?
Why temporal validation instead of random split?
Why a proxy dataset?
Why not fine-tune?
Why keep the architecture local?
```

A capacidade de explicar trade-offs é mais valiosa que uma longa lista de frameworks.

---

## 14.10 Limitations

Nunca esconder limitações.

A estética deve tratá-las como sinal de maturidade, não como nota de rodapé.

Usar callout:

```text
LIMITATION

The public dataset is a proxy for corporate procurement.
The methodology is portable; the observed business distribution is not.
```

---

## 14.11 What I would improve

Obrigatório.

Exemplos:

- dados mais próximos do contexto real;
- monitoramento;
- calibration;
- live inference;
- feature store;
- cloud deployment;
- stronger eval harness.

---

# 15. 04 / Experience

**Finalized by M1-05** (2026-09-01) — this replaces the earlier placeholder
copy below with the actual implemented content, per ADR-011 (no private
résumé material in the repo — only public-safe facts) and ADR-012 (Home
content exclusivity). Source of truth for `src/content/home.ts`'s
`experience` block. Full detail/evidence rationale: `docs/tasks/CURRENT_TASK.md`
(M1-05 Evidence/notes) once superseded by the next task, or git history.

## Objetivo

Provar contexto profissional sem repetir o currículo inteiro.

---

## Heading

EN:

```text
04 / EXPERIENCE

Where I've worked
and what I've built.
```

PT-BR:

```text
04 / EXPERIÊNCIA

Onde trabalhei
e o que construí.
```

---

## Estrutura

Editorial list (no timeline dots/rail/connectors), reverse chronological
order — four companies, exactly as below. Company/role/period are treated
as historical facts and are **not translated** between EN/PT (only the
description prose is localized).

### 01 — Banco BV

```text
2025 — 2026
Banco BV
People Analytics Analyst Pleno · Data Analytics
```

"People Analytics Analyst Pleno" is the official historical title —
"Data Analytics" is an allowed functional descriptor alongside it, not a
replacement for it.

EN copy:

```text
Built and evolved analytics, forecasting and decision-support products
covering a workforce of 4,000+ employees and serving multiple levels of
leadership. Worked across SQL Server, Power BI, Python and Databricks.
```

Metadata: `SQL Server · Power BI · Python · Databricks`

Evidence constraints: Databricks work was maintaining/fixing existing
Bronze/Silver/Gold notebooks and pipelines, not architecting the lakehouse
— do not claim "architected", "built from scratch", or "designed the
corporate data lake". Do not duplicate Employee Attrition Prediction's
Selected Work treatment here (no 74% recall / SMOTE / threshold /
attrition-model architecture) — see ADR-012.

---

### 02 — BIP Consulting

```text
2024 — 2025
BIP Consulting
People Analytics · Data Analytics
```

The user entered as an intern and was later promoted to Junior Analyst, but
the exact transition date isn't in the evidence base — the Home
deliberately uses the functional role above instead of labeling the whole
2024–2025 period "Junior", which would be a false level/date combination.

EN copy:

```text
Took ownership of People Analytics operations and redesigned monthly
international reporting, reducing consolidation from about one week to
one day. Built ETL and automation flows with Power Automate, Python and
Power Query.
```

Metadata: `Python · Power Query · Power Automate · ETL`

Evidence constraints: do not claim "led an international data team" or
Oracle HCM ownership/authorship — the safe evidence is international HR
reporting, interaction with the Italy/Oracle HCM team, and the reporting
cycle improvement (~1 week → ~1 day).

---

### 03 — Contmatic Phoenix

```text
2022 — 2023
Contmatic Phoenix
Data Science Junior · Growth & Marketing Analytics
```

EN copy:

```text
Worked across experimentation, segmentation, churn/LTV, funnels and
campaign analytics on a base of ~1M leads and ~60k users. A series of
data-driven optimizations contributed to ~11% higher conversion and ~20%
lower CAC.
```

Metadata: `Python · SQL · Experimentation · Growth Analytics`

Evidence constraints: the +11%/-20% results came from a *series* of
optimizations — do not attribute them to a single A/B test or model.

---

### 04 — Rocketseat

```text
2021 — 2022
Rocketseat
Data Science Junior · Growth & Customer Analytics
```

EN copy:

```text
Applied data science to segmentation, retention, cohorts and growth
analytics across 60k+ paying students. A decision-tree segmentation
initiative contributed to ~15% higher course-purchase conversion.
```

Metadata: `Python · R · SQL · Customer Analytics`

Evidence constraints (ADR-012): do **not** mention Developer Market
Research, CNN Brasil, persona research, the 5,000+ responses / ~50
interviews figures, or the ~20% representation finding here — that
research already has its own narrative home in Case Studies. Experience
communicates the broader professional role at Rocketseat only.

---

## Global constraints

- **AI Engineering is not claimed as professional experience.** No `LLM` /
  `RAG` / `Agents` / `LangChain` / `AI Engineering` tags on any Experience
  entry — the portfolio's AI Engineering positioning is sustained by
  personal/technical projects (Selected Work, Case Studies), not by
  employment history. Experience shows the professional foundation that
  supports that evolution (analytics, statistics, machine learning,
  experimentation, data products, automation, decision support, data
  pipelines), not AI Engineering itself.
- No project/case-study duplication (ADR-012) — see per-company evidence
  constraints above.
- No PII (phone, personal email) or private résumé material — ADR-011.

## Regra

Na Home:

máximo de 1–2 frases por experiência.

No Resume:

detalhes completos.

---

# 16. 05 / Research & Recognition

**Finalized by M1-06** (2026-09-01, ADR-013) — replaces the section below,
which predated ADR-012 (Home content exclusivity) and whose candidate
topics (Economic Index Construction, Shapley Driver Decomposition —
narratively part of Steel Indicator in Case Studies; Survival Analysis,
Forecasting & Workforce Dynamics — People Analytics/workforce topics that
would echo Experience/Employee Attrition Prediction) are now obsolete. Kept
below, struck through in spirit, for historical context only — do not
implement any of it.

## 16.1 Conceito

Research não significa apenas paper acadêmico.

Nesta marca, Research significa:

> technical investigations, methodologies and experiments that produced reusable knowledge.

This section now also carries **Recognition** — external validation (a
competition placement) that doesn't fit Selected Work or Case Studies but
is still real, evidence-backed signal.

---

## Heading

EN:

```text
05 / RESEARCH & RECOGNITION

Research and milestones
that shaped my work.

Academic investigations and early projects across statistics,
forecasting and applied data science.
```

PT-BR:

```text
05 / PESQUISA & RECONHECIMENTO

Pesquisas e marcos
que moldaram meu trabalho.

Investigações acadêmicas e projetos anteriores em estatística,
forecasting e ciência de dados aplicada.
```

The Header nav label stays `Research` / `Pesquisa` (unchanged, `#research`
anchor) — only the section's own heading uses the expanded name.

---

## 16.2 Final allocation (V1) — editorial order, not chronological

### Research / 01 — Wavelet Multivariate Time Series Analysis

```text
UFSCar · Undergraduate Thesis · 2023
```

Undergraduate Statistics thesis (defended 2023-08-24) studying
relationships among IBOVESPA, Dow Jones, S&P 500 and Bitcoin (2012–2023)
using Continuous Wavelet Transform, Multiresolution Analysis, MODWT,
multiscale wavelet correlation, wavelet coherence and ADF diagnostics.
Python · MATLAB.

EN copy:

```text
Undergraduate statistics research examining how relationships among
financial markets change across time and scale using wavelet methods.
```

PT-BR copy:

```text
Pesquisa de graduação em Estatística investigando como as relações entre
mercados financeiros mudam ao longo do tempo e em diferentes escalas
utilizando métodos wavelet.
```

Metadata: `Time Series · Statistics · Wavelets`

Link: `https://github.com/mori-mkm/UFSCar/tree/main/undergraduate-thesis`
— "View research →" / "Ver pesquisa →"

Claims to avoid: trading strategy, investment performance, predictive
alpha, production forecasting, causal relationships — this is descriptive/
exploratory statistical research, not a trading system.

---

### Recognition / 01 — FarmIA — Santander Data Challenge

```text
1st Place · 2020 · Santander Data Challenge/Hackathon · 100+ teams
```

1st place, 5-person team, Matheus as Data Scientist. Time series, linear/
multiple/polynomial regression on agrometeorological variables (rainfall,
temperature, soil/agricultural conditions, production/prices), focused on
rice agriculture, to support family-agriculture planning.

EN copy:

```text
First-place data challenge project developed by a five-person team, using
statistical modeling and agrometeorological data to support agricultural
planning.
```

PT-BR copy:

```text
Projeto vencedor de um data challenge desenvolvido por uma equipe de cinco
pessoas, utilizando modelagem estatística e dados agrometeorológicos para
apoiar o planejamento agrícola.
```

Evidence line: `1ST PLACE · 100+ TEAMS` / `1º LUGAR · 100+ EQUIPES`
Metadata: `Applied Data Science · Agriculture`

Link: `https://github.com/mori-mkm/FarmAI.Hackaton` — "GitHub ↗"

Claims to avoid: no testimonial quotes from the repository; no real
farmer-revenue increase, real crop-yield increase, real production
deployment, real credit decisions, or validated climate-change
forecasting. Frame strictly as hackathon prototype + data-science
solution + competition recognition — never a production agricultural
platform.

---

### Research / 02 — Retail Sales Forecasting

```text
Digital House · Final Data Science Project
```

Monthly store-level retail sales forecasting: preprocessing, history-
length-based store segmentation, ADF stationarity testing, differencing,
chronological train/test split, SARIMAX with AIC-based parameter
selection, 12-month forecasting, MAE/MFE/MSE/RMSE/MAPE evaluation, and a
historical Flask prototype interface. Some original artifacts are
missing — the repository cannot currently reproduce the original
application end-to-end; treat as a historical academic project.

EN copy:

```text
Academic forecasting project exploring monthly store-level sales with
SARIMAX, chronological validation and a historical Flask prototype.
```

PT-BR copy:

```text
Projeto acadêmico de forecasting de vendas mensais por loja utilizando
SARIMAX, validação cronológica e um protótipo histórico em Flask.
```

Status flag: `ACADEMIC PROJECT` / `PROJETO ACADÊMICO`
Metadata: `Forecasting · SARIMAX · Time Series`

Link: `https://github.com/mori-mkm/retail-sales-forecasting` — "GitHub ↗"

Claims to avoid: "production forecasting system", "deployed ML product",
"live application", "MLOps system" — this is a historical academic
project, not a production system.

---

## 16.3 Explicitly excluded (V1)

- **Closer AI** (`https://github.com/mori-mkm/closer-ai`) — no implemented
  project evidence yet (ADR-007, evidence before prominence). Do not show
  a "Coming Soon"/"Future Project" placeholder — just omit it entirely.
- **UFSCar general repository** — no broad "UFSCar / Academic Portfolio /
  College Projects" row; the undergraduate thesis already provides the
  strongest, most specific academic evidence.
- **UFSCar teaching** (~60-hour APIs/Web Scraping course) — not added this
  milestone; a possible future Capabilities/About input, not Research.
- **Developer Market Research / CNN Brasil** — stays Case Studies-only
  (ADR-012); never duplicated here.

---

## Estrutura de Research/Recognition row (implemented)

```text
TYPE / INDEX

Title

Context (institution/competition · program-type · year)

1-2 sentence description.

[optional evidence/status line]

Metadata                                              Link ↗
```

Editorial index, not project cards — no diagrams, no metric tiles, no
shadows. See `src/components/sections/ResearchRecognition.tsx`.

---

### Historical / obsolete (pre-ADR-012, do not implement)

<details>
<summary>Original 05 / Research draft (superseded)</summary>

```text
05 / RESEARCH

Applied investigations behind the systems.
```

Candidatos (obsolete — see M1-06 rationale above):

- Economic Index Construction — now Steel Indicator (Case Studies) territory.
- Shapley Driver Decomposition — now Steel Indicator (Case Studies) territory.
- Survival Analysis — now Experience/Employee Attrition territory.
- Forecasting & Workforce Dynamics — now Experience/Employee Attrition territory.
- RAG Evaluation — still a legitimate future candidate (add only when there
  is a real, evidence-backed RAG project — same "evidence before
  prominence" rule as Closer AI).

</details>

---

# 17. Research vs Writing

## Research

Conteúdo orientado a:

- método;
- experimento;
- validação;
- investigação;
- evidência.

## Writing

Conteúdo orientado a:

- explicação;
- aprendizado;
- opinião técnica fundamentada;
- processo de construção;
- tutorial;
- retrospectiva.

Um research item pode originar um blog post.

Mas eles não são a mesma taxonomia.

---

# 18. 06 / Capabilities

**Finalized by M1-07** (2026-09-02) — this replaces the speculative list
below with the evidence-backed V1 allocation. This is an application of
**ADR-007 (evidence before prominence)** to the current state of the
public projects/experience, not a new architectural decision — no new
ADR was created for this.

Substituir “Skills” por:

```text
06 / CAPABILITIES
```

Porque comunica capacidade de construir, não um catálogo de keywords.

Header nav is NOT extended with a "Capabilities" item — the existing nav
(About, Projects, Case Studies, Experience, Research, Writing, Contact)
stays as-is; this section has no nav entry.

---

## 18.1 Why "Applied AI", not "AI Engineering"

The Hero can position the direction ("Data Scientist & AI Engineer"), but
Capabilities must be precise about evidence available *today*.

**Updated by ADR-017 (2026-09-22):** DataLab OS (public repo, PoC v0.2)
now provides public evidence of agent orchestration, LangGraph, AI
observability (typed, persisted, replayable execution events) and FastAPI.
The earlier evidence for AI-assisted workflows, structured outputs and
prompt/context engineering (the Application Job repo, ADR-016) is no
longer publicly available, so those items were dropped. There is still no
public evidence of RAG, vector databases, dynamic/parallel multi-agent
systems, LLM evaluation systems or production AI services. The group stays
**Applied AI**, not **AI Engineering** — one PoC does not yet justify the
broader label. Closer AI is not used as evidence for any of it.

---

## 18.2 Final V1 groups (rendered)

### 01 — Applied AI

```text
LLM Applications
Agent Orchestration
LangGraph
AI Observability
AI Automation
```

Agent Orchestration / LangGraph / AI Observability: DataLab OS (ADR-017).

Deferred until public evidence exists (omit silently — no "coming soon"/
"planned" labels, this section is not a roadmap): RAG, Retrieval-Augmented
Generation, dynamic/parallel Multi-Agent Systems, LangChain, CrewAI,
Vector Databases, AI Evaluation.

### 02 — Machine Learning

```text
Regression
Classification
Gradient Boosting
Forecasting
Survival Analysis
Experimentation
Model Evaluation
```

Evidence distributed across Procurement Intelligence, Employee Attrition,
Retail Sales Forecasting, professional experience and statistics
background. Deliberately classes of problem/method, not an algorithm
inventory — do not list LightGBM, XGBoost, CatBoost, SARIMAX, Prophet,
Logistic Regression, Cox, etc. individually.

### 03 — Data

```text
Python
SQL
Pandas
Power BI
Data Modeling
Data Pipelines
Data Quality
```

Strong professional and/or public evidence. **PySpark deferred** — not
enough current portfolio evidence to give it the same weight as Python/SQL.
Also deliberately excludes a database/tool inventory (SQL Server, DuckDB,
MongoDB, Databricks) — those already appear in the projects/Experience
entries where they have real context; Capabilities works one level above
that.

### 04 — Engineering

```text
Git & GitHub
Docker
Testing
MLflow
APIs
FastAPI
Streamlit
Automation
```

Rationale: Git/GitHub (public projects + the portfolio itself), Docker
(Steel Indicator), Testing (Procurement + Steel's public test suites),
MLflow (Procurement Intelligence), APIs (experience/projects/technical
background), Streamlit (Procurement Intelligence's live app), Automation
(professional experience; Application Job previously evidenced this too but
is no longer featured in Selected Work — see ADR-016).

FastAPI: DataLab OS's backend API + SSE (ADR-017).

**Deferred until public evidence exists:** CI/CD, Kubernetes,
Terraform, AWS, GCP, Cloud Architecture, Microservices, Monitoring,
Observability.

---

## 18.3 What Capabilities is not

No project descriptions or evidence metrics embedded in items (bad:
"Testing — 124 tests in Procurement"; better: just "Testing" — the
evidence already lives in Selected Work/Case Studies). No proficiency
annotations (Professional/Personal Project/Academic, years, Advanced/
Intermediate/Beginner) — that's noise and subjective ranking the rest of
the site already contextualizes elsewhere. No individual algorithm names.

---

## 18.4 Visual

Não usar progress bars:

```text
Python 95%
SQL 90%
LangChain 85%
```

Isso não possui interpretação objetiva.

Usar grupos tipográficos. No cards, pills, badges, logos, icons, radar
charts, skill meters, animated bars, or carousels — this should be one of
the visually quietest sections on Home.

---

### Historical / superseded (do not implement)

<details>
<summary>Original speculative Capabilities list (pre-M1-07)</summary>

```text
AI ENGINEERING
LLM Applications
Retrieval-Augmented Generation
Agentic Systems
Evaluation
Prompt / Context Engineering
AI APIs

DATA
Python
SQL
Pandas
PySpark
Power BI
Data Modeling
Data Pipelines

ENGINEERING
FastAPI
Docker
Git
MLflow
Testing
APIs
CI/CD
Cloud Foundations
```

This list was written as portfolio *direction* before evidence-before-
prominence was applied to the current state of the projects. RAG, Agentic
Systems, FastAPI, PySpark and CI/CD are not deleted from the long-term
direction — they're future candidates, promotable to §18.2 once a public
project provides concrete evidence, not before.

</details>

# 19. Writing

**Status: DEFERRED FROM V1 (M1-08, 2026-09-02).**

**Reason:** no genuine published articles exist yet.

**Rule:** do not manufacture articles for portfolio completeness — no
placeholder posts, no fake dates, no draft titles rendered on Home, no
"Coming soon" section. This is the same evidence-before-prominence
discipline already applied elsewhere (ADR-007) — Writing is content that
doesn't exist yet, not a section that's merely unstyled.

**Code state:** the `/writing` route and Writing section are **not
implemented** — not hidden-but-present, not stubbed. `#writing` does not
exist anywhere in the Home DOM, and "Writing"/"Artigos" was removed from
both locale nav arrays in `src/content/home.ts` (M1-08). Because Writing
sat between Research & Recognition and Contact in the original section
numbering, Contact was renumbered `07 / CONTACT` (was planned as `08`) so
the visitor never sees a missing section number — see §20 below.

**Future:** restore Writing once at least one genuine article is
published. At that point, treat this section's original heading/article-
row spec below as the starting point (still valid content design, just
never implemented), and renumber whatever follows it again.

## Heading (for future reference — not implemented)

```text
0X / WRITING

Notes on data, machine learning and AI systems.
```

---

## Primeiros artigos recomendados (para quando houver conteúdo real)

## Primeiros artigos recomendados

### 1

```text
What I learned building a procurement
intelligence system from 5.7M transactions
```

### 2

```text
Why I stopped treating model accuracy
as the whole machine learning project
```

### 3

```text
Building an auditable economic indicator
from public data
```

### 4

```text
From Data Science to AI Engineering:
what actually changes
```

### 5

```text
How I evaluate RAG systems
```

Publicar 5 somente quando houver conteúdo real.

---

## Article Row

Inspirado em editorial:

```text
SEP 2026                 8 MIN

Building an auditable economic indicator
from public data

Methodology, data vintages and the engineering
decisions behind Steel Indicator.

Read →
```

---

# 20. 07 / Contact

**Renumbered by M1-08**: was planned as `08 / Contact`, behind Writing.
Writing is deferred (§19) and not implemented, so Contact moved up to
`07` — the visitor never sees a missing section number.

## Heading

```text
07 / CONTACT

Let's build something useful.
```

PT-BR:

```text
07 / CONTATO

Vamos construir algo útil.
```

---

## Copy

```text
I'm interested in opportunities and conversations around
Data Science, Machine Learning and Applied AI.
```

PT-BR:

```text
Tenho interesse em oportunidades e conversas sobre
Ciência de Dados, Machine Learning e IA Aplicada.
```

---

## Links

Reuses `content.externalLinks` — no URL duplicated in Contact's own
content. No `Email` link (the form replaces the need to publish a
personal address; `CONTACT_NOTIFICATION_EMAIL` stays server-only).

```text
LinkedIn ↗
GitHub ↗
Resume ↗
```

---

## Formulário — decisão revisada (M1-08, atualizada no mesmo dia por ADR-015)

A decisão original deste documento ("links diretos > formulário, não
obrigatório na V1") foi **substituída**: um formulário real é parte da V1.

Motivo da mudança: o produto passou a exigir um canal de contato que não
dependa de o visitante já ter uma conta GitHub/LinkedIn aberta, e que
persista o contato mesmo que o e-mail de notificação falhe.

Arquitetura implementada (M1-08, **ADR-015** em `docs/DECISIONS.md` —
substitui a versão original documentada em ADR-014, que assumia um nome de
variável diferente e não incluía Turnstile/quota):

```text
Browser (widget Turnstile real, renderizado só se configurado)
  ↓
POST /api/contact  (Next.js Route Handler, src/app/api/contact/route.ts)
  ↓
validação server-side (autoritativa)
  ↓
honeypot (sucesso falso silencioso se acionado)
  ↓
verificação Cloudflare Turnstile (server-side, Siteverify) — bloqueia
tudo abaixo se falhar; production falha fechado se não configurado
  ↓
dois canais independentes (Promise.allSettled, não encadeados):

  A) Supabase Postgres  → persiste em contact_messages (RLS on, zero
     políticas públicas, SUPABASE_SECRET_KEY — sb_secret_..., server-only,
     src/lib/supabase/admin.ts)

  B) cota diária + Resend → reserva atômica de vaga
     (reserve_contact_email_slot(20), RPC) e só então envia notificação
     em texto puro com Reply-To = e-mail do visitante; vaga esgotada =
     "suppressed", não "failed" — o contato continua salvo
```

Sucesso é retornado ao visitante se o insert no Supabase **OU** o e-mail
foi realmente enviado. `503 contact_unavailable` só quando nenhum dos dois
aconteceu (inclui: insert falhou E (cota esgotada OU e-mail falhou OU
Resend não configurado)). Nenhum detalhe de infraestrutura chega ao
cliente ou aos logs junto com PII.

Camadas de proteção anti-spam, da primeira à última: validação server-side
+ honeypot (`website`) + **Cloudflare Turnstile** (verificado server-side,
falha fechado em produção se não configurado) + **Vercel WAF** (5
requisições/IP/10min — configuração externa, documentada mas não ativa
até ser configurada manualmente) + **cota diária de e-mail** (20/dia,
reserva atômica via RPC — protege mesmo contra ataque distribuído entre
muitos IPs). Nenhuma camada individual é "rate limiting distribuído de
nível enterprise" — juntas formam uma linha de base razoável para um
formulário de contato de portfólio pessoal.

Full field list, states (idle/submitting/success/error) and setup
instructions: `docs/CONTACT_SETUP.md` and
`src/components/forms/ContactForm.tsx`.

---

# 21. Footer

Minimalista.

```text
MATHEUS MORI

Data Scientist & AI Engineer

São Paulo, Brazil

GitHub
LinkedIn
Email

© 2026 Matheus Mori
```

Não repetir a navegação inteira se isso deixar o footer pesado.

---

# 22. Identidade visual

## 22.1 Conceito

```text
MINIMAL
×
TECHNICAL
×
EDITORIAL
```

Não:

```text
CYBERPUNK
×
NEON
×
AI GRADIENT
```

---

# 23. Color System

A paleta deve ser **inspirada na sensação clean/warm do Saim**, não uma cópia pixel-perfect.

## 23.1 Light theme — principal

```css
--background:        #F3F1EA;
--background-soft:   #ECE9E0;
--surface:           #F8F7F3;

--text-primary:      #151515;
--text-secondary:    #62615C;
--text-muted:        #8A8880;

--border:            #D8D4C9;
--border-strong:     #BDB9AF;

--accent:            #315CFF;
--accent-hover:      #2448D8;
--accent-soft:       #E5EAFF;

--success:           #39715B;
--warning:           #8A6828;
```

---

## 23.2 Uso do accent

Azul deve representar:

- links;
- estado ativo;
- pequenos elementos de destaque;
- diagramas;
- alguns números;
- hover.

Não usar azul como grande bloco de fundo por padrão.

Regra aproximada:

```text
85% neutral
10% structure
5% accent
```

---

## 23.3 Dark theme

Não é requisito da V1.

Se implementado posteriormente:

```css
--background:       #11120F;
--background-soft:  #181915;
--surface:          #1D1E1A;

--text-primary:     #F3F1EA;
--text-secondary:   #AAA89F;

--border:           #33342E;

--accent:           #8CA2FF;
```

Light theme permanece a identidade principal.

---

# 24. Typography

## 24.1 Fontes

### Primary

```text
Geist Sans
```

Fallback:

```css
font-family:
  Geist,
  Inter,
  -apple-system,
  BlinkMacSystemFont,
  "Segoe UI",
  sans-serif;
```

### Technical / Mono

```text
Geist Mono
```

Fallback:

```css
font-family:
  "Geist Mono",
  "IBM Plex Mono",
  monospace;
```

---

## 24.2 Uso da fonte mono

Somente para:

- `01 / ABOUT`;
- metadata;
- categorias;
- status;
- métricas pequenas;
- código;
- labels;
- tags.

Não usar mono para parágrafos longos.

---

# 25. Type Scale

Desktop aproximado:

```text
Display XL       72–88px
Display          56–72px
H1               48–64px
H2               36–48px
H3               26–32px
Body Large       20–22px
Body             16–18px
Small            14–15px
Label            11–13px
```

Mobile:

```text
Display          44–52px
H1               38–44px
H2               30–36px
H3               24–28px
Body Large       18–20px
Body             16px
```

---

## 25.1 Line-height

Headlines:

```text
0.95–1.10
```

Body:

```text
1.55–1.7
```

---

# 26. Layout System

## 26.1 Maximum width

```css
--container-max: 1240px;
--reading-max: 760px;
```

---

## 26.2 Grid

Desktop:

```text
12 columns
24px gutters
```

Tablet:

```text
6 columns
```

Mobile:

```text
4 columns
16–20px gutters
```

---

## 26.3 Margins

Desktop:

```text
32–48px
```

Large desktop:

```text
48–64px
```

Mobile:

```text
20px
```

---

# 27. Spacing

Base unit:

```text
4px
```

Preferir:

```text
4
8
12
16
24
32
48
64
80
96
128
160
```

Seções grandes:

```text
120–180px vertical
```

Mobile:

```text
80–120px vertical
```

---

# 28. Borders, radius e shadow

## Borders

Preferir linhas finas:

```css
1px solid var(--border)
```

---

## Radius

Moderado:

```text
6–12px
```

Cards não devem parecer “bubbles”.

---

## Shadows

Quase nenhuma.

Se necessária:

```text
muito suave
grande blur
baixa opacidade
```

A separação visual principal vem de:

- espaço;
- borda;
- contraste;
- tipografia.

---

# 29. Section Heading Component

Componente padrão:

```text
02 / SELECTED WORK

Systems designed to
solve real problems.
```

API conceitual:

```tsx
<SectionHeading
  index="02"
  label="Selected Work"
  title="Systems designed to solve real problems."
/>
```

---

# 30. Component Library — V1

Criar componentes reutilizáveis.

```text
Header
MobileMenu
Footer

Section
SectionHeading

Button
TextLink
ExternalLink

ProjectCard
ProjectMetric
ProjectTag
ProjectStatus

CaseStudyCard
ArchitectureDiagram
Callout
MetricGrid

Timeline
TimelineItem

CapabilityGroup
CapabilityItem

ResearchCard
ArticleRow

ContactLink
```

---

# 31. Button System

## Primary

Fundo:

```text
text-primary
```

Texto:

```text
background
```

Hover:

- pequena mudança de contraste;
- seta desliza 2–4 px.

---

## Secondary

Outline ou text button.

Evitar muitas variantes.

Máximo:

```text
Primary
Secondary
Text Link
```

---

# 32. Tags

Tags existem para leitura rápida.

Exemplo:

```text
MACHINE LEARNING
DATA PRODUCT
LIVE
```

Visual:

- mono;
- uppercase;
- tamanho pequeno;
- borda opcional;
- sem cores diferentes para cada tecnologia.

---

# 33. Project Imagery

Cada projeto principal deve ter uma pequena biblioteca de assets.

Estrutura:

```text
/public/projects/procurement-intelligence/
    cover.webp
    dashboard-01.webp
    architecture.svg
    model-evaluation.webp

/public/projects/steel-indicator/
    cover.webp
    report.webp
    architecture.svg
    methodology.webp
```

---

## 33.1 Formatos

Preferir:

```text
SVG
WebP
AVIF
```

Evitar PNG pesados quando não necessário.

---

# 34. Architecture Diagrams

Diagramas são parte central da identidade.

Estética:

- caixas simples;
- linhas finas;
- fundo neutro;
- accent pontual;
- fonte mono para labels;
- sem ícones 3D;
- sem logos gigantes de AWS/Python/etc.

Exemplo:

```text
SOURCE
  ↓
INGESTION
  ↓
DATA MODEL
  ↓
ML / LOGIC
  ↓
EVALUATION
  ↓
PRODUCT
```

---

# 35. Motion

O site deve parecer responsivo, não animado.

## Permitido

- fade + translate de 8–16 px;
- hover de links;
- mudança de borda;
- subtle image scale;
- sticky elements discretos;
- progress indicator de artigo/case study.

---

## Não usar

- cursor customizado;
- partículas;
- estrelas;
- animação de neural network;
- texto digitando;
- glitch;
- scroll hijacking;
- parallax pesado;
- transições de vários segundos.

---

## Timing

Microinterações:

```text
150–250ms
```

Entrada de blocos:

```text
300–500ms
```

Respeitar:

```css
prefers-reduced-motion
```

---

# 36. Responsive Behavior

## Desktop

Projetos podem alternar:

```text
text | image
image | text
```

ou usar um grid editorial assimétrico.

---

## Tablet

Reduzir assimetria.

Priorizar leitura.

---

## Mobile

Ordem sempre:

```text
metadata
title
description
image
metrics
links
```

Nenhuma informação essencial pode depender de hover.

---

# 37. Accessibility

Meta mínima:

**WCAG AA**

Regras:

- contraste mínimo adequado;
- navegação por teclado;
- foco visível;
- HTML semântico;
- `alt` real em imagens;
- links externos compreensíveis;
- headings hierárquicos;
- `aria-label` apenas quando necessário;
- não depender de cor para comunicar status.

---

# 38. Content Voice

## Características

```text
direct
precise
technical
calm
evidence-driven
```

---

## Evitar

```text
passionate
ninja
guru
rockstar
AI enthusiast
data wizard
cutting-edge everything
revolutionary
game-changing
```

Também evitar frases com excesso de autoelogio.

---

## Preferir

Em vez de:

```text
I'm passionate about leveraging cutting-edge AI.
```

Usar:

```text
I build AI and machine learning systems
with an emphasis on evaluation and production use.
```

---

# 39. Escrita dos projetos

Cada descrição deve responder:

```text
WHAT
+
FOR WHAT
+
AT WHAT SCALE / WITH WHAT EVIDENCE
```

Exemplo:

```text
A spend and price intelligence platform
built on 5.7M+ procurement transactions.
```

Excelente.

Exemplo ruim:

```text
A project developed with Python, Pandas,
LightGBM, DuckDB and Streamlit.
```

Stack não é descrição.

---


# 39.1 Internationalization / i18n

## Objetivo

O portfólio deve atender tanto recrutadores e profissionais internacionais quanto o mercado brasileiro sem manter dois sites independentes.

A arquitetura deve ser:

```text
ONE CODEBASE
+
ONE DESIGN SYSTEM
+
SHARED STRUCTURED DATA
+
LOCALIZED COPY
```

Nunca manter uma implementação visual separada para EN e PT-BR.

---

## Locales suportados

```text
en
pt
```

Onde:

```text
en = English
pt = Português do Brasil (pt-BR)
```

No código, é aceitável usar `pt-BR` como locale completo se a biblioteca escolhida trabalhar melhor com BCP 47. Nas URLs, preferir `/pt` por simplicidade.

---

## Default

O inglês é o locale canônico principal porque o posicionamento profissional também mira vagas e audiência internacional.

```text
/ → /en
```

A escolha manual do usuário deve ser persistida.

---

## Language switcher

Desktop:

```text
EN / PT
```

ou:

```text
EN
PT
```

Sem bandeiras.

Idioma não é país.

O seletor deve aparecer no Header, mas com peso visual inferior ao Resume.

Exemplo:

```text
About  Projects  Case Studies  Experience  Research  Writing   EN / PT   Resume ↗
```

Mobile:

```text
EN · PT
```

dentro do menu.

Ao trocar o idioma, preservar a página atual quando existir equivalente:

```text
/en/projects/steel-indicator
→
/pt/projects/steel-indicator
```

---

## Tradução editorial

Não fazer tradução literal palavra por palavra.

A versão portuguesa deve preservar:

- intenção;
- clareza;
- hierarquia;
- densidade visual;
- tamanho aproximado dos blocos.

Exemplo:

EN:

```text
Building production-oriented AI,
machine learning and data products.
```

PT-BR:

```text
Construindo produtos de IA,
machine learning e dados orientados à produção.
```

O termo `machine learning` pode permanecer em inglês quando soar mais natural para o público técnico brasileiro.

---

## Nomes próprios e tecnologias

Nunca traduzir:

```text
Procurement Intelligence
Steel Indicator
Application Job
AI Closer
Python
LightGBM
Docker
FastAPI
RAG
LLM
```

Traduzir descrições, categorias e narrativa.

---

## Conteúdo estruturado

Preferência de implementação:

```text
content/
├── en/
│   ├── site.ts
│   ├── projects/
│   ├── case-studies/
│   ├── research/
│   └── writing/
│
└── pt/
    ├── site.ts
    ├── projects/
    ├── case-studies/
    ├── research/
    └── writing/
```

Alternativa aceitável para dados pequenos:

```ts
{
  title: {
    en: "...",
    pt: "..."
  }
}
```

Para textos longos e MDX, preferir arquivos separados por locale.

---

## SEO internacional

Cada página deve expor:

```html
<link rel="alternate" hreflang="en" ... />
<link rel="alternate" hreflang="pt-BR" ... />
<link rel="alternate" hreflang="x-default" ... />
```

Canonical deve apontar para a própria versão de idioma.

Exemplo:

```text
EN canonical:
https://domain.com/en/projects/steel-indicator

PT canonical:
https://domain.com/pt/projects/steel-indicator
```

Não canonicalizar PT para EN, pois são versões legítimas diferentes.

---

## Metadata localizada

EN Home:

```text
Matheus Mori — Data Scientist & AI Engineer
```

PT Home:

```text
Matheus Mori — Cientista de Dados & Engenheiro de IA
```

EN description:

```text
Data Scientist & AI Engineer building production-oriented
AI, machine learning systems and data products.
```

PT description:

```text
Cientista de Dados e Engenheiro de IA construindo sistemas
de inteligência artificial, machine learning e produtos de dados.
```

---

## Conteúdo que pode permanecer somente em um idioma temporariamente

Na V1, artigos de Writing e Research podem existir primeiro em apenas um idioma se uma tradução ainda não tiver sido revisada.

Nesse caso:

- não criar página vazia no outro locale;
- não fingir que existe tradução;
- permitir link `Available in English only` / `Disponível apenas em português`;
- adicionar tradução depois.

Projects, Home, Experience, Capabilities, Contact e os flagship Case Studies devem ser bilíngues no lançamento.

---

## Regra de qualidade

Traduções não podem alterar fatos, métricas, limitações ou claims.

```text
same evidence
same metrics
same project
different language
```

---

# 40. Technical Architecture

## 40.1 Stack

### Frontend

```text
Next.js
TypeScript
React
Tailwind CSS
```

Usar versão estável no momento da implementação.

---

## Content

```text
MDX
```

Para:

- case studies;
- writing;
- research notes quando aplicável.

Não usar CMS na V1.

---

## Hosting

```text
Vercel
```

---

## Repository

Recomendação:

```text
mori-mkm/portfolio
```

ou:

```text
mori-mkm/matheus-mori
```

Preferência:

```text
portfolio
```

simples e previsível.

---

# 41. Suggested Folder Structure

```text
portfolio/
├── app/
│   ├── page.tsx
│   ├── projects/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── case-studies/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   ├── research/
│   │   └── page.tsx
│   ├── writing/
│   │   ├── page.tsx
│   │   └── [slug]/
│   │       └── page.tsx
│   └── layout.tsx
│
├── components/
│   ├── layout/
│   ├── navigation/
│   ├── project/
│   ├── case-study/
│   ├── typography/
│   └── ui/
│
├── content/
│   ├── en/
│   │   ├── projects/
│   │   ├── case-studies/
│   │   ├── research/
│   │   └── writing/
│   └── pt/
│       ├── projects/
│       ├── case-studies/
│       ├── research/
│       └── writing/
│
├── data/
│   ├── experience.ts
│   ├── capabilities.ts
│   └── site.ts
│
├── public/
│   ├── projects/
│   ├── og/
│   └── resume/
│
├── styles/
│   └── globals.css
│
└── README.md
```

---

# 42. Content Model — Project

Exemplo:

```ts
type Project = {
  slug: string;
  index: string;
  title: string;
  shortDescription: string;
  category: string[];
  status: "live" | "active" | "archived" | "research";
  year: number;

  featured: boolean;

  metrics: {
    value: string;
    label: string;
  }[];

  technologies: string[];

  links: {
    github?: string;
    demo?: string;
    caseStudy?: string;
  };

  coverImage?: string;
};
```

---

# 43. Content Model — Case Study

MDX frontmatter:

```yaml
title: Procurement Intelligence
slug: procurement-intelligence
year: 2026
category:
  - Machine Learning
  - Data Engineering
status: live

summary: >
  From millions of public procurement records
  to a reproducible price-intelligence system.

metrics:
  - value: "5.7M+"
    label: transactions
  - value: "124"
    label: automated tests

github:
demo:
```

---

# 44. GitHub Strategy

GitHub continua sendo a camada de evidência técnica.

O site não substitui GitHub.

O site responde:

> Por que isso importa?

GitHub responde:

> Como isso foi construído?

---

## Regra

Todo projeto publicável deveria idealmente possuir:

- README;
- arquitetura;
- instruções de execução;
- limitações;
- resultados;
- repositório organizado.

O portfólio pode aprofundar o storytelling sem duplicar o README inteiro.

---

# 45. Resume

## V1

Botão de Resume deve apontar para PDF estável.

Nome recomendado:

```text
Matheus_Mori_Resume.pdf
```

Se houver versões PT/EN:

```text
Matheus_Mori_Resume_EN.pdf
Matheus_Mori_CV_PTBR.pdf
```

A versão do currículo deve acompanhar o locale ativo:

```text
/en/resume → Matheus_Mori_Resume_EN.pdf
/pt/resume → Matheus_Mori_CV_PTBR.pdf
```

O visitante sempre pode acessar a outra versão manualmente.

---

# 46. SEO

## Home title

```text
Matheus Mori — Data Scientist & AI Engineer
```

## Description

```text
Data Scientist & AI Engineer building production-oriented
AI, machine learning systems and data products.
```

---

## Project example

```text
Procurement Intelligence — Matheus Mori
```

---

## Case Study example

```text
Building Procurement Intelligence from 5.7M Transactions — Matheus Mori
```

---

# 47. Open Graph

Criar imagem padrão:

```text
MATHEUS MORI

Data Scientist
& AI Engineer

matheusmori...
```

Projetos podem ter OG próprias posteriormente.

---

# 48. Performance

Metas aproximadas:

```text
Lighthouse Performance ≥ 90
Accessibility ≥ 95
Best Practices ≥ 95
SEO ≥ 95
```

Não sacrificar experiência para atingir 100 artificialmente.

---

## Regras

- evitar dependências JS desnecessárias;
- otimizar imagens;
- usar Server Components quando fizer sentido;
- lazy load fora do viewport;
- evitar bibliotecas de animação grandes se CSS resolver;
- carregar poucas fontes/pesos.

---

# 49. Analytics

V1 pode lançar sem analytics.

Quando adicionado, acompanhar eventos úteis:

```text
project_open
case_study_open
github_click
demo_click
resume_click
linkedin_click
contact_click
```

Não precisa rastrear cada scroll.

---

# 50. Portfolio RAG — V2

Nome de interface:

```text
ASK MATHEUS
```

Botão discreto:

```text
● Ask about my work
```

---

## Objetivo

Permitir perguntas como:

```text
Which projects best demonstrate machine learning engineering?

Does Matheus have experience with LLM systems?

Show me projects involving production-oriented ML.

What experience is most relevant to an AI Engineer role?

Which projects use statistical modeling?
```

---

## Fontes

O RAG deve indexar apenas conteúdo aprovado:

```text
portfolio content
resume
project documentation
selected GitHub README files
case studies
research
writing
```

Não indexar automaticamente todo GitHub sem curadoria.

---

## Requisitos

- respostas com fontes;
- nenhuma invenção de experiência;
- retrieval logs;
- evaluation set;
- custo por pergunta;
- latency tracking;
- fallback quando não houver evidência.

O RAG é ele próprio um case de AI Engineering.

---

# 51. Do Not Build — V1

Explicitamente fora do escopo:

- CMS;
- login;
- comentários;
- newsletter complexa;
- chat RAG;
- dark mode obrigatório;
- tradução dinâmica;
- integração automática com todas as APIs;
- feed GitHub completo;
- mapa 3D;
- dashboard de skills;
- chatbot genérico;
- animações WebGL;
- sistema de temas.

---

# 52. Prioridades de implementação

## Phase 0 — Foundation

```text
[ ] Repository
[ ] Next.js
[ ] TypeScript
[ ] Tailwind
[ ] fonts
[ ] design tokens
[ ] global layout
[ ] metadata
```

---

## Phase 1 — Home Skeleton

```text
[ ] Header
[ ] Hero
[ ] About
[ ] Selected Work
[ ] Case Studies
[ ] Experience
[ ] Research
[ ] Capabilities
[ ] Writing
[ ] Contact
[ ] Footer
```

Usar conteúdo real desde o início.

Não usar Lorem Ipsum.

---

## Phase 2 — Projects

```text
[ ] Project data model
[ ] /projects
[ ] /projects/[slug]
[ ] project imagery
[ ] external links
```

---

## Phase 3 — Case Studies

```text
[ ] MDX pipeline
[ ] Case Study template
[ ] Procurement Intelligence
[ ] Steel Indicator
```

---

## Phase 4 — Polish

```text
[ ] Responsive
[ ] accessibility
[ ] subtle motion
[ ] image optimization
[ ] metadata
[ ] OG
[ ] 404
[ ] final copy review
```

---

## Phase 5 — Deploy

```text
[ ] Vercel
[ ] custom domain
[ ] redirects
[ ] sitemap
[ ] robots
[ ] analytics optional
[ ] final Lighthouse review
```

---

# 53. Definition of Done — V1

A V1 está concluída quando:

### Branding

- [ ] visitante entende Data Scientist & AI Engineer rapidamente;
- [ ] identidade visual é consistente;
- [ ] site não parece template genérico.

### Projects

- [ ] 4 projetos publicados;
- [ ] cada projeto possui descrição clara;
- [ ] métricas são verificáveis;
- [ ] links funcionam.

### Case Studies

- [ ] Procurement Intelligence completo;
- [ ] Steel Indicator completo;
- [ ] ambos possuem arquitetura;
- [ ] ambos possuem limitações e trade-offs.

### UX

- [ ] mobile funciona muito bem;
- [ ] navegação é simples;
- [ ] nenhum conteúdo importante depende de hover.

### Engineering

- [ ] TypeScript sem erros;
- [ ] build da Vercel passa;
- [ ] imagens otimizadas;
- [ ] metadata configurada;
- [ ] acessibilidade básica validada.

### Content

- [ ] sem claims inventados;
- [ ] sem métricas não verificáveis;
- [ ] inglês revisado;
- [ ] sem Lorem Ipsum;
- [ ] sem “AI buzzword soup”.

---

# 54. Critério para adicionar projetos

Um projeto não entra no site apenas porque existe no GitHub.

Pontuar mentalmente em cinco perguntas:

```text
1. Demonstra uma competência relevante?
2. Resolve um problema compreensível?
3. Tem evidência?
4. Tem algo tecnicamente interessante?
5. Ajuda no posicionamento profissional atual?
```

Se a maioria for “não”, manter apenas no GitHub.

---

# 55. Critério para flagship project

Um flagship deve ter:

```text
Problem
+
System
+
Evidence
+
Engineering
+
Story
```

Idealmente também:

```text
Demo
+
Metrics
+
Architecture
+
Trade-offs
```

---

# 56. Hierarquia recomendada dos projetos

## No lançamento

```text
01 Procurement Intelligence
02 Steel Indicator
03 Application Job
04 Employee Attrition Prediction
```

> Nota (ADR-016, 2026-09-05): Application Job foi removido do Selected Work
> e não foi substituído. A lista acima é o registro histórico da hierarquia
> planejada no lançamento; o Selected Work atual (`src/content/home.ts`)
> contém apenas 01 Procurement Intelligence e 02 Employee Attrition
> Prediction. (A posição do Steel Indicator aqui também já reflete o plano
> pré-ADR-012, não a alocação atual — fora do escopo desta correção.)
>
> Atualização (ADR-017, 2026-09-22): Selected Work atual = 01 DataLab OS,
> 02 Procurement Intelligence, 03 Employee Attrition Prediction.

## Direção futura

Quando AI Closer estiver maduro:

```text
01 AI Closer
02 Procurement Intelligence
03 Steel Indicator
04 Application Job / DemandVision
```

A ordem é editorial.

Não é cronológica.

---

# 57. Identidade recorrente

Usar números como elemento de marca:

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

Nos projetos:

```text
PROJECT / 01
PROJECT / 02
```

Nos case studies:

```text
CASE STUDY / 01
```

Nos artigos:

```text
WRITING / 01
```

Isso cria sensação de:

```text
engineering archive
+
research notebook
+
product catalog
```

---

# 58. Assinatura visual

O site deve transmitir:

> **someone documenting systems they actually built**

Não:

> someone trying to look like an AI engineer.

Essa distinção deve orientar toda decisão de design e conteúdo.

---

# 59. Copy snippets oficiais

## Hero

```text
Data Scientist & AI Engineer

Building production-oriented AI,
machine learning and data products.

I work across data, machine learning and AI —
turning complex problems into systems people can actually use.
```

---

## About

```text
I build at the intersection of
data, machine learning and AI.
```

---

## Projects

```text
Selected work

Systems designed to solve real problems.
```

---

## Case Studies

```text
The reasoning behind the systems.

Problems, architecture, validation,
trade-offs and what did not work the first time.
```

---

## Research

```text
Applied investigations behind the systems.
```

---

## Capabilities

```text
Tools and methods I use to
turn ideas into working systems.
```

---

## Writing

```text
Notes on data, machine learning and AI systems.
```

---

## Contact

```text
Let's build something useful.
```

---

# 60. Implementation instruction for coding agents

Quando este documento for entregue a Claude Code, Codex ou outro coding agent, usar a seguinte instrução junto dele:

```text
PORTFOLIO_SPEC.md is the source of truth for product, UX,
visual and content decisions.

Do not redesign the information architecture.
Do not add sections, libraries, animations or visual patterns
unless they are required by the specification.

When an implementation detail is unspecified, choose the
simplest solution consistent with:
1. minimal,
2. technical,
3. editorial,
4. accessible,
5. fast.

Use real content from the beginning.
Never invent achievements, metrics, employers, technologies
or project results.

Build iteratively:
foundation → home → projects → case studies → polish.

The visual goal is not to copy any reference site.
The desired combination is:
Taaran Jain's information architecture,
Saim's restrained visual atmosphere,
and Zavier Kamath's evidence-first project storytelling.
```

---

# 61. Final Product Statement

The finished portfolio should feel like:

```text
A curated technical publication
about systems Matheus Mori has built.
```

A recruiter should see clarity.

An engineer should see depth.

A hiring manager should see outcomes.

A technical peer should see reasoning.

And all of them should be able to find the evidence.

---

# 62. Source URLs used as inspiration

```text
https://www.taaranjain.com/
https://www.taaranjain.com/case-studies
https://www.taaranjain.com/blog

https://www.saim.dev/

https://www.zavier-kamath.com/
```

These are references only.

Do not reproduce their copyrighted copy, exact layout or implementation.
Create an original portfolio using the principles documented above.

---

# 63. Next artifact after this spec

After `PORTFOLIO_SPEC.md`, the next implementation artifact should be:

```text
HOME_WIREFRAME.md
```

or a Figma layout containing:

- exact desktop layout;
- exact mobile layout;
- component proportions;
- typography hierarchy;
- example project imagery;
- section spacing.

Only after the Home wireframe is approved should implementation move into visual polish.

---

**End of specification.**
