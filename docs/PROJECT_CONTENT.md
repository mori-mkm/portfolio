# PROJECT_CONTENT.md

> **Project Content Specification — Matheus Mori Portfolio**  
> Version: **1.0**  
> Status: **Ready for implementation**  
> Depends on:
> - `PORTFOLIO_SPEC_v1.1.md`
> - `HOME_WIREFRAME_v1.1.md`
>
> Website locales: **EN + PT-BR**  
> Purpose: define the public-facing content, evidence, links, metrics and visual requirements for every V1 portfolio project.

---

# 0. Purpose

This file is the content source of truth for the V1 projects.

It defines:

- which projects appear on the Home;
- which projects appear on `/projects`;
- project order;
- project category;
- short copy;
- long copy;
- metrics;
- proof points;
- stack;
- links;
- screenshot requirements;
- architecture requirements;
- Case Study eligibility;
- public limitations;
- EN + PT-BR copy;
- content that must not be claimed.

The website must never invent metrics, technologies, production claims or business impact.

The rule is:

```text
EVIDENCE
BEFORE
PROMINENCE
```

---

# 1. V1 Project Portfolio

Official V1 order:

```text
PROJECT / 01
Procurement Intelligence

PROJECT / 02
Steel Indicator

PROJECT / 03
Application Job

PROJECT / 04
Employee Attrition Prediction
```

This order is editorial, not chronological.

---

# 2. V1 Case Studies

V1 launches with:

```text
CASE STUDY / 01
Procurement Intelligence

CASE STUDY / 02
Steel Indicator
```

Why:

```text
Procurement Intelligence
→ strongest ML + data product evidence

Steel Indicator
→ strongest engineering + methodology evidence
```

Application Job remains a normal Project in V1.

Employee Attrition Prediction remains a normal Project in V1.

---

# 3. Future flagship candidates

These projects may change the order later.

## AI Closer

Future category:

```text
AGENTIC AI · RAG · AI PRODUCT
```

It should only enter Selected Work when it has:

```text
[ ] public or reviewable code
[ ] clear architecture
[ ] retrieval layer
[ ] agent orchestration
[ ] evaluation
[ ] measurable quality criteria
[ ] demo or video
[ ] latency/cost visibility
[ ] documented limitations
```

When these conditions are satisfied, recommended order becomes:

```text
01 AI Closer
02 Procurement Intelligence
03 Steel Indicator
04 Application Job or DemandVision
```

---

## DemandVision

Potential category:

```text
MACHINE LEARNING · DEMAND INTELLIGENCE
```

It can replace Employee Attrition Prediction when it has:

```text
[ ] reproducible pipeline
[ ] clear use case
[ ] architecture
[ ] model or analytical evaluation
[ ] demo
[ ] documentation
```

---

# 4. Global project content rules

Every project description must answer:

```text
WHAT WAS BUILT?
+
WHAT PROBLEM DOES IT ADDRESS?
+
WHAT EVIDENCE MAKES IT CREDIBLE?
```

Do not use a technology list as the project description.

---

# 5. Global category vocabulary

Use only categories from this controlled vocabulary where possible:

```text
AI PRODUCT
AI AUTOMATION
AGENTIC AI
RAG

MACHINE LEARNING
DATA SCIENCE
FORECASTING

DATA ENGINEERING
DATA PRODUCT
ECONOMIC INTELLIGENCE
PEOPLE ANALYTICS

APPLIED RESEARCH
```

Maximum categories displayed on a Home project:

```text
2
```

---

# 6. Global project status vocabulary

Allowed status:

```text
LIVE
ACTIVE
RESEARCH
ARCHIVED
```

Definitions:

### LIVE

A public demo/product can be accessed.

### ACTIVE

Project exists and is actively maintained or developed.

### RESEARCH

Primarily methodological or experimental.

### ARCHIVED

Useful historical project, but no longer actively developed.

---

# 7. Project links vocabulary

Internal:

```text
View project →
Case Study →
Read case study →
```

External:

```text
Live Demo ↗
GitHub ↗
Report ↗
```

Use:

```text
→
```

for internal links.

Use:

```text
↗
```

for external links.

---

# 8. PROJECT / 01 — Procurement Intelligence

## 8.1 Identity

```yaml
slug: procurement-intelligence
project_index: "01"
case_study_index: "01"

status: LIVE
year: 2026

category:
  - MACHINE LEARNING
  - DATA PRODUCT

featured: true
case_study: true
```

---

## 8.2 Canonical links

GitHub:

```text
https://github.com/mori-mkm/procurement-intelligence
```

Live demo:

```text
https://procurement-intelligence-mkm.streamlit.app/
```

Portfolio routes:

```text
/en/projects/procurement-intelligence
/pt/projects/procurement-intelligence

/en/case-studies/procurement-intelligence
/pt/case-studies/procurement-intelligence
```

---

# 9. Procurement Intelligence — Home copy

## EN

Category:

```text
MACHINE LEARNING · DATA PRODUCT
```

Title:

```text
Procurement Intelligence
```

Short description:

```text
A spend and price intelligence platform built on
5.7M+ public procurement transactions.
```

Alternative if one line is needed:

```text
Spend and price intelligence built from 5.7M+ procurement transactions.
```

Proof points:

```text
5.7M+
transactions

124
automated tests

TEMPORAL
ML validation

LIVE
dashboard
```

Stack:

```text
Python · DuckDB · LightGBM · Streamlit
```

CTAs:

```text
Case Study →
Live Demo ↗
GitHub ↗
```

---

## PT-BR

Category:

```text
MACHINE LEARNING · PRODUTO DE DADOS
```

Title:

```text
Procurement Intelligence
```

Short description:

```text
Uma plataforma de inteligência de gastos e preços construída
sobre mais de 5,7 milhões de transações de compras públicas.
```

Alternative:

```text
Inteligência de gastos e preços construída sobre mais de 5,7 milhões de transações.
```

Proof points:

```text
5,7M+
transações

124
testes automatizados

TEMPORAL
validação de ML

LIVE
dashboard
```

Stack:

```text
Python · DuckDB · LightGBM · Streamlit
```

CTAs:

```text
Estudo de Caso →
Demo ↗
GitHub ↗
```

---

# 10. Procurement Intelligence — Project page hero

## EN

Eyebrow:

```text
PROJECT / 01
```

Category:

```text
MACHINE LEARNING · DATA ENGINEERING · DATA PRODUCT
```

Headline:

```text
Procurement Intelligence
```

Subheadline:

```text
From millions of procurement records
to a reproducible price-intelligence system.
```

Intro:

```text
Procurement Intelligence is a spend and price analytics platform built
on Brazilian public procurement data.

The project explores how a large, noisy procurement dataset can be
turned into a reproducible analytical system for spend analysis,
price benchmarking, anomaly detection and potential savings discovery.
```

---

## PT-BR

Eyebrow:

```text
PROJETO / 01
```

Category:

```text
MACHINE LEARNING · ENGENHARIA DE DADOS · PRODUTO DE DADOS
```

Headline:

```text
Procurement Intelligence
```

Subheadline:

```text
De milhões de registros de compras
a um sistema reproduzível de inteligência de preços.
```

Intro:

```text
Procurement Intelligence é uma plataforma de análise de gastos e preços
construída a partir de dados brasileiros de compras públicas.

O projeto explora como um conjunto de dados grande e ruidoso pode ser
transformado em um sistema reproduzível para análise de gastos,
benchmarking de preços, detecção de anomalias e identificação de
oportunidades potenciais de economia.
```

---

# 11. Procurement Intelligence — Core metrics

Approved metrics:

```text
5,788,938
homologated transactions in fact_purchase

366,368
distinct items

192,266
suppliers

915,866
buyers

124
automated tests

2022–2026
data coverage
```

Important:

Do not display all metrics at the same time.

Recommended Project Page hero metrics:

```text
5.7M+
transactions

124
automated tests

2022–2026
data coverage

LIVE
dashboard
```

---

# 12. Procurement Intelligence — Evidence

Strong evidence:

```text
Bronze → Silver → Gold architecture
Temporal train/validation/test split
Baseline vs ML comparison
LightGBM model
Anomaly detection
Potential savings engine
Public Streamlit application
124 automated tests
Architecture Decision Records
Compact production artifacts
```

---

# 13. Procurement Intelligence — Publicly safe ML claims

Approved:

```text
The ML model provides broader coverage than the item-level baseline.
```

Approved:

```text
Temporal validation is used to reduce leakage risk.
```

Approved:

```text
The model is used as part of a price-intelligence workflow,
not as proof that a transaction is overpriced.
```

Approved:

```text
Potential savings are decision-support signals requiring human review.
```

---

## Claims to avoid

Do not say:

```text
The model detects overpricing.
```

Use:

```text
The system flags potential price anomalies.
```

Do not say:

```text
The model saves companies X million.
```

There is no real corporate savings validation.

Do not say:

```text
Bank procurement data.
```

The dataset is public procurement data used as a proxy.

---

# 14. Procurement Intelligence — Key limitation

## EN

```text
LIMITATION

The dataset comes from public procurement and is used as a proxy for
corporate procurement. The architecture and analytical methodology are
portable, but the observed purchasing distribution is not equivalent
to a real banking or private-company procurement environment.
```

---

## PT-BR

```text
LIMITAÇÃO

Os dados vêm de compras públicas e são usados como proxy para procurement
corporativo. A arquitetura e a metodologia analítica são transferíveis,
mas a distribuição observada das compras não equivale a um ambiente real
de procurement bancário ou de uma empresa privada.
```

---

# 15. Procurement Intelligence — Architecture copy

## EN

```text
PUBLIC PROCUREMENT DATA
        ↓
INGESTION
        ↓
BRONZE
Raw data + defensive typing + schema checks
        ↓
SILVER
Deduplication + temporal revision resolution
        ↓
GOLD
Dimensions + fact_purchase
        ↓
ANALYTICS / ML
Spend · Baseline · LightGBM · Anomalies · Savings
        ↓
COMPACT ARTIFACTS
        ↓
STREAMLIT APPLICATION
```

---

## PT-BR

```text
DADOS DE COMPRAS PÚBLICAS
        ↓
INGESTÃO
        ↓
BRONZE
Dados brutos + tipagem defensiva + validação de schema
        ↓
SILVER
Deduplicação + resolução de revisões temporais
        ↓
GOLD
Dimensões + fact_purchase
        ↓
ANALYTICS / ML
Gastos · Baseline · LightGBM · Anomalias · Savings
        ↓
ARTEFATOS COMPACTOS
        ↓
APLICAÇÃO STREAMLIT
```

---

# 16. Procurement Intelligence — Image requirements

Required for V1 visual polish:

```text
[ ] procurement-cover.webp
[ ] procurement-dashboard-overview.webp
[ ] procurement-architecture.svg
[ ] procurement-model-evaluation.webp
```

---

## Cover preference

Use:

```text
dashboard overview
```

Aspect:

```text
8:5
```

---

## Architecture

Do not screenshot a README text diagram.

Rebuild the architecture using portfolio components.

---

# 17. Procurement Intelligence — Case Study outline

Official sections:

```text
00 / OVERVIEW
01 / THE PROBLEM
02 / WHY PUBLIC PROCUREMENT DATA?
03 / DATA AT SCALE
04 / DATA ARCHITECTURE
05 / PRICE INTELLIGENCE
06 / MACHINE LEARNING
07 / TEMPORAL VALIDATION
08 / ANOMALY & SAVINGS LOGIC
09 / PRODUCT & DEPLOYMENT
10 / TESTING & RELIABILITY
11 / TRADE-OFFS
12 / LIMITATIONS
13 / WHAT I WOULD IMPROVE
14 / LINKS
```

---

# 18. Procurement Intelligence — Trade-offs to highlight

```text
DuckDB instead of Spark
```

Reason:

The project can process the required annual procurement files efficiently
without introducing distributed infrastructure that would not materially
improve the portfolio use case.

---

```text
Temporal split instead of random split
```

Reason:

Procurement prices evolve over time. A random split could leak future
patterns into model evaluation.

---

```text
Baseline kept alongside ML
```

Reason:

The ML model does not meaningfully dominate the item-level median baseline
on error metrics. The strongest benefit is broader coverage.

This is a positive case-study point.

Do not hide it.

---

```text
Compact deployment artifacts
```

Reason:

The full Gold table is too large for a lightweight public deployment.
The application consumes versioned compact artifacts instead.

---

# 19. Procurement Intelligence — What I would improve

EN:

```text
With access to real corporate procurement data, I would extend the system
with stronger item taxonomy, contract context, supplier history, inflation
adjustments, calibrated uncertainty and production monitoring.
```

PT:

```text
Com acesso a dados reais de procurement corporativo, eu evoluiria o sistema
com uma taxonomia de itens mais robusta, contexto contratual, histórico de
fornecedores, ajustes inflacionários, incerteza calibrada e monitoramento
em produção.
```

---

# 20. PROJECT / 02 — Steel Indicator

## 20.1 Identity

```yaml
slug: steel-indicator
project_index: "02"
case_study_index: "02"

status: ACTIVE
year: 2026

category:
  - DATA ENGINEERING
  - ECONOMIC INTELLIGENCE

featured: true
case_study: true
```

---

## 20.2 Canonical links

GitHub:

```text
https://github.com/mori-mkm/steel-indicator
```

Portfolio:

```text
/en/projects/steel-indicator
/pt/projects/steel-indicator

/en/case-studies/steel-indicator
/pt/case-studies/steel-indicator
```

No public live application should be claimed until one exists.

---

# 21. Steel Indicator — Home copy

## EN

Category:

```text
DATA ENGINEERING · ECONOMIC INTELLIGENCE
```

Title:

```text
Steel Indicator
```

Short description:

```text
A reproducible and auditable platform for
Brazilian steel-sector economic indices.
```

Proof points:

```text
529
automated tests

IMMUTABLE
data vintages

VERSIONED
methodology

PUBLIC
data pipeline
```

Stack:

```text
Python · Pandas · Public APIs · Docker
```

CTAs:

```text
Case Study →
GitHub ↗
```

---

## PT-BR

Category:

```text
ENGENHARIA DE DADOS · INTELIGÊNCIA ECONÔMICA
```

Title:

```text
Steel Indicator
```

Short description:

```text
Uma plataforma reproduzível e auditável para
índices econômicos do setor siderúrgico brasileiro.
```

Proof points:

```text
529
testes automatizados

IMUTÁVEIS
vintages de dados

VERSIONADA
metodologia

PÚBLICO
pipeline de dados
```

Stack:

```text
Python · Pandas · APIs Públicas · Docker
```

CTAs:

```text
Estudo de Caso →
GitHub ↗
```

---

# 22. Steel Indicator — Project page hero

## EN

Eyebrow:

```text
PROJECT / 02
```

Category:

```text
DATA ENGINEERING · APPLIED RESEARCH · ECONOMIC INTELLIGENCE
```

Headline:

```text
Steel Indicator
```

Subheadline:

```text
Building auditable economic indicators
from fragmented public data.
```

Intro:

```text
Steel Indicator is a reproducible platform for Brazilian steel-sector
economic indices.

Its first end-to-end product, IPIA-HRC, compares domestic hot-rolled coil
prices with import parity while preserving the methodology, historical
policy parameters, source provenance and exact data vintage behind every
published value.
```

---

## PT-BR

Eyebrow:

```text
PROJETO / 02
```

Category:

```text
ENGENHARIA DE DADOS · PESQUISA APLICADA · INTELIGÊNCIA ECONÔMICA
```

Headline:

```text
Steel Indicator
```

Subheadline:

```text
Construindo indicadores econômicos auditáveis
a partir de dados públicos fragmentados.
```

Intro:

```text
Steel Indicator é uma plataforma reproduzível para índices econômicos
do setor siderúrgico brasileiro.

Seu primeiro produto completo, o IPIA-HRC, compara o preço doméstico da
bobina laminada a quente com a paridade de importação preservando a
metodologia, os parâmetros históricos de política comercial, a proveniência
das fontes e o vintage exato de dados por trás de cada valor publicado.
```

---

# 23. Steel Indicator — Core metrics

Approved:

```text
529
automated tests

16
accepted Architecture Decision Records

2019-02 → 2026-06
example validated coverage in documented vintage

4-page
generated report

3
major public source families
Comex / BCB / IBGE
```

Important:

The coverage is vintage-dependent.

Do not show a specific current/latest index value on the portfolio unless
the site is wired to an approved fresh source or manually updated.

Recommended Home metrics:

```text
529
automated tests

IMMUTABLE
data vintages

VERSIONED
methodology

AUDITABLE
publication pipeline
```

---

# 24. Steel Indicator — Core evidence

```text
Immutable append-only vintages
SHA-256 artifact hashes
Historical parameter resolution
Methodology versioning
Publication statuses
Public source registry
Architecture Decision Records
Automated testing
Docker reproducibility
Generated analytical report
Shapley driver decomposition
```

---

# 25. Steel Indicator — Core problem

## EN

```text
Brazilian steel market data is public but fragmented.

Trade records, exchange rates, industrial price data, company disclosures
and trade-policy rules live in different sources, use different time
frequencies and may be revised.

The problem is not simply calculating a ratio.

The problem is producing an index whose value can be traced back to the
source observations, assumptions, policy parameters and methodology that
generated it.
```

---

## PT-BR

```text
Os dados do mercado brasileiro de aço são públicos, mas fragmentados.

Registros de comércio exterior, câmbio, dados de preços industriais,
divulgações corporativas e regras de política comercial vivem em fontes
diferentes, utilizam frequências temporais distintas e podem sofrer revisões.

O problema não é simplesmente calcular uma razão.

O problema é produzir um índice cujo valor possa ser rastreado até as
observações de origem, hipóteses, parâmetros de política comercial e
metodologia que o geraram.
```

---

# 26. Steel Indicator — Architecture

## EN

```text
PUBLIC SOURCES
Comex Stat · BCB · IBGE · Corporate disclosures
        ↓
SOURCE ADAPTERS
        ↓
CURATED / RAW DATA
        ↓
HISTORICAL POLICY PARAMETERS
        ↓
INDEX ENGINE
        ↓
PUBLICATION CONTRACT
Official · Experimental · Provisional
        ↓
IMMUTABLE VINTAGE
Manifest · timestamps · hashes · methodology version
        ↓
CSV / CLI / PDF REPORT
```

---

## PT-BR

```text
FONTES PÚBLICAS
Comex Stat · BCB · IBGE · divulgações corporativas
        ↓
ADAPTADORES DE FONTE
        ↓
DADOS CURADOS / BRUTOS
        ↓
PARÂMETROS HISTÓRICOS DE POLÍTICA COMERCIAL
        ↓
MOTOR DO ÍNDICE
        ↓
CONTRATO DE PUBLICAÇÃO
Oficial · Experimental · Provisório
        ↓
VINTAGE IMUTÁVEL
Manifesto · timestamps · hashes · versão metodológica
        ↓
CSV / CLI / RELATÓRIO PDF
```

---

# 27. Steel Indicator — The product

Primary product:

```text
IPIA-HRC
Import Parity Index for Hot-Rolled Coil
```

Formula:

```text
IPIA-HRC =
Domestic Price (R$/t)
/
Import Parity Price (R$/t)
× 100
```

Interpretation:

```text
> 100
domestic price above import parity

= 100
parity

< 100
domestic price below import parity
```

---

# 28. Steel Indicator — Key methodology detail

Public copy may mention:

```text
The domestic price is a declared proxy.
```

This is important evidence of methodological honesty.

Do not present the domestic series as a directly observed HRC transaction price.

---

# 29. Steel Indicator — Public limitation

## EN

```text
LIMITATION

The domestic price series is a declared proxy rather than a directly
observed HRC-specific market price. Publication statuses and methodology
documentation make this limitation explicit instead of hiding it inside
the calculation.
```

---

## PT-BR

```text
LIMITAÇÃO

A série de preço doméstico é um proxy declarado, e não um preço de mercado
de HRC diretamente observado. Os status de publicação e a documentação
metodológica tornam essa limitação explícita em vez de escondê-la dentro
do cálculo.
```

---

# 30. Steel Indicator — Image requirements

Required:

```text
[ ] steel-cover.webp
[ ] ipia-report-preview.webp
[ ] steel-architecture.svg
[ ] ipia-history.webp
[ ] vintage-governance.svg
```

Cover preference:

```text
report / historical index visual
```

Do not use a generic steel mill stock photo.

The project is about the system, not an industrial aesthetic.

---

# 31. Steel Indicator — Case Study outline

```text
00 / OVERVIEW
01 / THE PROBLEM
02 / WHY AN INDEX NEEDS GOVERNANCE
03 / DATA SOURCES
04 / IMPORT PARITY
05 / DOMESTIC PRICE PROXY
06 / TEMPORAL AGGREGATION
07 / HISTORICAL POLICY PARAMETERS
08 / PUBLICATION CONTRACT
09 / DATA VINTAGES & PROVENANCE
10 / DRIVER DECOMPOSITION
11 / TESTING & REPRODUCIBILITY
12 / REPORTING
13 / TRADE-OFFS
14 / LIMITATIONS
15 / WHAT I WOULD IMPROVE
16 / LINKS
```

---

# 32. Steel Indicator — Trade-offs

Highlight:

```text
Observed public data vs proprietary market data
```

The project intentionally uses reproducible public sources.

---

```text
Proxy disclosure vs false precision
```

A declared proxy is preferable to presenting an unavailable price series
as if it were directly observed.

---

```text
Append-only vintages vs overwrite-in-place
```

Every publication should remain auditable.

---

```text
Publication status vs silent interpolation
```

When data quality is insufficient, the system should disclose status rather
than silently manufacturing continuity.

---

# 33. Steel Indicator — What I would improve

## EN

```text
The next step is to expand the shared engine to additional steel products
and sector indices while keeping the same provenance, publication and
testing contracts.

I would also strengthen live source-contract testing and continue reducing
the remaining legacy orchestration surface.
```

---

## PT-BR

```text
O próximo passo é expandir o motor compartilhado para outros produtos de
aço e índices setoriais mantendo os mesmos contratos de proveniência,
publicação e testes.

Também reforçaria os testes de contrato com fontes ao vivo e continuaria
reduzindo a superfície de orquestração legada.
```

---

# 34. PROJECT / 03 — Application Job

## 34.1 Identity

```yaml
slug: application-job
project_index: "03"

status: ACTIVE
year: 2026

category:
  - AI AUTOMATION
  - DATA PRODUCT

featured: true
case_study: false
```

---

## 34.2 Canonical links

GitHub:

```text
https://github.com/mori-mkm/application-job
```

Portfolio:

```text
/en/projects/application-job
/pt/projects/application-job
```

No public live application should be claimed in V1.

---

# 35. Application Job — Home copy

## EN

Category:

```text
AI AUTOMATION · PRODUCTIVITY SYSTEM
```

Title:

```text
Application Job
```

Short description:

```text
An AI-assisted workflow that turns job descriptions
and verified career evidence into tailored applications.
```

Proof points:

```text
STRUCTURED
JSON output

ATS
DOCX generation

TRACKED
applications

LOCAL
AI workflow
```

Stack:

```text
Python · Claude Code · JSON Schema · DOCX
```

CTA:

```text
View project →
GitHub ↗
```

---

## PT-BR

Category:

```text
AUTOMAÇÃO COM IA · SISTEMA DE PRODUTIVIDADE
```

Title:

```text
Application Job
```

Short description:

```text
Um fluxo assistido por IA que transforma descrições de vagas
e evidências profissionais verificadas em candidaturas personalizadas.
```

Proof points:

```text
ESTRUTURADA
saída JSON

ATS
geração DOCX

RASTREADAS
candidaturas

LOCAL
workflow de IA
```

Stack:

```text
Python · Claude Code · JSON Schema · DOCX
```

CTA:

```text
Ver projeto →
GitHub ↗
```

---

# 36. Application Job — Project page hero

## EN

Subheadline:

```text
A local AI workflow for tailoring job applications
without inventing career evidence.
```

Intro:

```text
Application Job is a local Python workflow designed to reduce the repetitive
work involved in tailoring résumés to specific job descriptions.

A structured career master document acts as the evidence base. The system
uses Claude Code CLI to generate a structured result, creates an ATS-oriented
DOCX and records the application for later tracking.
```

---

## PT-BR

Subheadline:

```text
Um workflow local de IA para personalizar candidaturas
sem inventar evidências profissionais.
```

Intro:

```text
Application Job é um workflow local em Python criado para reduzir o trabalho
repetitivo de adaptar currículos a descrições específicas de vagas.

Um currículo mestre estruturado funciona como base de evidências. O sistema
usa Claude Code CLI para gerar uma saída estruturada, cria um DOCX orientado
a ATS e registra a candidatura para acompanhamento posterior.
```

---

# 37. Application Job — Product flow

## EN

```text
JOB DESCRIPTION
        +
CAREER EVIDENCE
        ↓
PYTHON ORCHESTRATION
        ↓
CLAUDE CODE CLI
        ↓
STRUCTURED JSON
        ↓
ATS-ORIENTED DOCX
        +
METADATA
        +
APPLICATION TRACKING
```

---

## PT-BR

```text
DESCRIÇÃO DA VAGA
        +
EVIDÊNCIAS PROFISSIONAIS
        ↓
ORQUESTRAÇÃO EM PYTHON
        ↓
CLAUDE CODE CLI
        ↓
JSON ESTRUTURADO
        ↓
DOCX ORIENTADO A ATS
        +
METADADOS
        +
ACOMPANHAMENTO DA CANDIDATURA
```

---

# 38. Application Job — Evidence

```text
Structured master résumé
JSON Schema
DOCX generation
Application metadata
Excel tracking
Local test mode
Per-application file organization
```

---

# 39. Application Job — Key product principle

## EN

```text
The system is allowed to select, restructure and emphasize verified
career evidence.

It is not allowed to invent experiences, tools, results or metrics.
```

---

## PT-BR

```text
O sistema pode selecionar, reorganizar e destacar evidências profissionais
verificadas.

Ele não pode inventar experiências, ferramentas, resultados ou métricas.
```

This principle should appear on the project page.

It differentiates the project from generic AI résumé generators.

---

# 40. Application Job — Limitations

EN:

```text
The current version runs locally and depends on an authenticated Claude Code
CLI environment. It is a personal workflow rather than a hosted multi-user
application.
```

PT:

```text
A versão atual roda localmente e depende de um ambiente autenticado do
Claude Code CLI. É um workflow pessoal, e não uma aplicação hospedada
multiusuário.
```

---

# 41. Application Job — Image requirements

```text
[ ] application-job-cover.svg
[ ] application-job-workflow.svg
[ ] resume-output-preview.webp
[ ] application-tracking-preview.webp
```

Primary cover:

```text
workflow diagram
```

Not Excel.

---

# 42. Application Job — Why no Case Study in V1?

Reason:

```text
The project communicates a strong AI automation idea,
but Procurement Intelligence and Steel Indicator currently provide
substantially deeper evidence of engineering decisions, validation,
reliability and methodological trade-offs.
```

It may become a Case Study after:

```text
[ ] automatic job ingestion
[ ] explicit fit scoring
[ ] evaluation set
[ ] stronger tests
[ ] multi-model fallback or orchestration
[ ] public/demo interface
```

---

# 43. PROJECT / 04 — Employee Attrition Prediction

## 43.1 Identity

```yaml
slug: employee-attrition-prediction
project_index: "04"

status: ARCHIVED
year: 2025

category:
  - MACHINE LEARNING
  - PEOPLE ANALYTICS

featured: true
case_study: false
```

---

## 43.2 Canonical links

GitHub:

```text
https://github.com/mori-mkm/HR-Predict
```

Portfolio:

```text
/en/projects/employee-attrition-prediction
/pt/projects/employee-attrition-prediction
```

---

# 44. Employee Attrition — Home copy

## EN

Category:

```text
MACHINE LEARNING · PEOPLE ANALYTICS
```

Title:

```text
Employee Attrition Prediction
```

Short description:

```text
An interpretable classification workflow focused on
identifying employees at higher attrition risk.
```

Proof points:

```text
74%
recall

SMOTE
class balancing

THRESHOLD
optimization

5-FOLD
cross-validation
```

Stack:

```text
Python · Scikit-learn · Imbalanced-learn
```

CTAs:

```text
View project →
GitHub ↗
```

---

## PT-BR

Category:

```text
MACHINE LEARNING · PEOPLE ANALYTICS
```

Title:

```text
Predição de Rotatividade de Funcionários
```

Alternative:

Keep the English project title if consistency with GitHub is preferred.

Recommended visible title:

```text
Employee Attrition Prediction
```

Description:

```text
Um workflow de classificação interpretável focado em
identificar funcionários com maior risco de desligamento.
```

Proof points:

```text
74%
recall

SMOTE
balanceamento

THRESHOLD
otimização

5-FOLD
validação cruzada
```

Stack:

```text
Python · Scikit-learn · Imbalanced-learn
```

CTAs:

```text
Ver projeto →
GitHub ↗
```

---

# 45. Employee Attrition — Project page hero

## EN

Subheadline:

```text
An interpretable machine learning workflow
for an imbalanced attrition problem.
```

Intro:

```text
Employee Attrition Prediction is an earlier machine learning project focused
on identifying employees at higher risk of attrition.

The project uses Logistic Regression, SMOTE, threshold optimization and
cross-validation, with recall prioritized over overall accuracy because
attrition is an imbalanced classification problem.
```

---

## PT-BR

Subheadline:

```text
Um workflow interpretável de machine learning
para um problema desbalanceado de rotatividade.
```

Intro:

```text
Employee Attrition Prediction é um projeto anterior de machine learning
focado em identificar funcionários com maior risco de desligamento.

O projeto utiliza Regressão Logística, SMOTE, otimização de threshold e
validação cruzada, priorizando recall em vez de acurácia global porque
rotatividade é um problema de classificação desbalanceado.
```

---

# 46. Employee Attrition — Metrics

Approved:

```text
Accuracy
0.73

F1 Score
0.36

Recall
0.74

Cross-validation F1
0.32 ± 0.03
```

Home should show only:

```text
74%
recall
```

and methodology proof points.

Do not present 73% accuracy as the central success metric.

---

# 47. Employee Attrition — Model workflow

```text
DATA
 ↓
PREPROCESSING
 ↓
TRAIN / TEST SPLIT
 ↓
LOGISTIC REGRESSION BASELINE
 ↓
SMOTE
 ↓
THRESHOLD OPTIMIZATION
 ↓
INTERPRETATION
 ↓
5-FOLD CROSS-VALIDATION
```

---

# 48. Employee Attrition — Interpretation

Approved copy:

## EN

```text
The project prioritizes recall because the minority class — employees who
leave — is more important to identify than maximizing overall accuracy.
```

## PT-BR

```text
O projeto prioriza recall porque a classe minoritária — funcionários que
saem — é mais importante de identificar do que maximizar a acurácia global.
```

---

# 49. Employee Attrition — Responsible-use note

This must appear on the full project page.

## EN

```text
RESPONSIBLE USE

A model like this should not be used to make automatic employment decisions.

Its appropriate role is decision support: helping People Analytics teams
investigate workforce patterns and prioritize deeper retention analysis.
```

---

## PT-BR

```text
USO RESPONSÁVEL

Um modelo como este não deve ser utilizado para tomar decisões automáticas
sobre funcionários.

Seu papel adequado é apoiar decisões: ajudar times de People Analytics a
investigar padrões da força de trabalho e priorizar análises mais profundas
de retenção.
```

---

# 50. Employee Attrition — Limitations

EN:

```text
This is a modeling-focused project rather than a production ML system.

It does not include deployment, monitoring, probability calibration or
production data contracts.
```

PT:

```text
Este é um projeto focado em modelagem, e não um sistema de ML em produção.

Ele não inclui deploy, monitoramento, calibração de probabilidades ou
contratos de dados de produção.
```

This limitation is useful.

It helps show progression from earlier modeling work to newer systems.

---

# 51. Employee Attrition — Image requirements

```text
[ ] attrition-cover.webp
[ ] attrition-evaluation.webp
[ ] attrition-feature-importance.webp
```

Primary cover:

```text
clean evaluation visualization
```

Do not use stock photos of employees.

---

# 52. Project hierarchy on Home

Visual importance:

```text
Procurement Intelligence
██████████  10/10

Steel Indicator
██████████  10/10

Application Job
████████    8/10

Employee Attrition
██████      6/10
```

This is an editorial hierarchy, not a score shown to visitors.

Implementation:

- Procurement and Steel receive largest visual assets.
- Application Job remains substantial but simpler.
- Attrition can have a more compact feature block.

---

# 53. `/projects` index order

V1:

```text
01 Procurement Intelligence
02 Steel Indicator
03 Application Job
04 Employee Attrition Prediction
```

Future projects can be inserted based on positioning.

Do not automatically sort by date.

---

# 54. Project index copy

## EN

Page label:

```text
PROJECTS
```

Headline:

```text
Systems, models and data products
I've built.
```

Intro:

```text
A curated selection of work across machine learning,
AI engineering, analytics and data products.
```

---

## PT-BR

Page label:

```text
PROJETOS
```

Headline:

```text
Sistemas, modelos e produtos de dados
que construí.
```

Intro:

```text
Uma seleção de trabalhos em machine learning,
engenharia de IA, analytics e produtos de dados.
```

---

# 55. Project filters

Do not implement filters in the first visual build.

When there are 7+ projects, optional filters:

## EN

```text
All
AI Systems
Machine Learning
Data Products
Research
```

## PT

```text
Todos
Sistemas de IA
Machine Learning
Produtos de Dados
Pesquisa
```

---

# 56. Case Studies index copy

## EN

Label:

```text
CASE STUDIES
```

Headline:

```text
How the systems were designed.
```

Intro:

```text
Problems, architecture, validation, trade-offs
and the decisions behind the final result.
```

---

## PT-BR

Label:

```text
ESTUDOS DE CASO
```

Headline:

```text
Como os sistemas foram projetados.
```

Intro:

```text
Problemas, arquitetura, validação, trade-offs
e as decisões por trás do resultado final.
```

---

# 57. Case Study / 01 card

## EN

```text
CASE STUDY / 01

Procurement Intelligence

From millions of public procurement records
to a reproducible price-intelligence system.

5.7M+
transactions

124
automated tests

BRONZE → SILVER → GOLD
data architecture

TEMPORAL
ML validation

Read case study →
```

---

## PT-BR

```text
ESTUDO DE CASO / 01

Procurement Intelligence

De milhões de registros de compras públicas
a um sistema reproduzível de inteligência de preços.

5,7M+
transações

124
testes automatizados

BRONZE → SILVER → GOLD
arquitetura de dados

TEMPORAL
validação de ML

Ler estudo de caso →
```

---

# 58. Case Study / 02 card

## EN

```text
CASE STUDY / 02

Steel Indicator

Building an auditable economic indicator
from fragmented public data.

529
automated tests

IMMUTABLE
data vintages

VERSIONED
methodology

AUDITABLE
publication pipeline

Read case study →
```

---

## PT-BR

```text
ESTUDO DE CASO / 02

Steel Indicator

Construindo um indicador econômico auditável
a partir de dados públicos fragmentados.

529
testes automatizados

IMUTÁVEIS
vintages de dados

VERSIONADA
metodologia

AUDITÁVEL
pipeline de publicação

Ler estudo de caso →
```

---

# 59. Home proof-point formatting

Metrics can have:

```text
value
label
```

Examples:

```text
5.7M+
transactions
```

or:

```text
TEMPORAL
validation
```

Do not mix too many long labels.

Maximum:

```text
4 metrics per flagship
```

---

# 60. Numeric localization

EN:

```text
5.7M+
```

PT:

```text
5,7M+
```

EN:

```text
74%
```

PT:

```text
74%
```

Test counts do not change.

---

# 61. Technology localization

Do not translate:

```text
Python
Pandas
DuckDB
LightGBM
Streamlit
Docker
JSON Schema
Claude Code
Scikit-learn
SMOTE
```

May translate:

```text
Public APIs
→
APIs Públicas
```

But keeping:

```text
APIs
```

is acceptable in both.

---

# 62. Metadata localization

## Procurement

EN SEO title:

```text
Procurement Intelligence — Matheus Mori
```

PT SEO title:

```text
Procurement Intelligence — Matheus Mori
```

EN description:

```text
A spend and price intelligence platform built on 5.7M+ public procurement
transactions using data engineering, machine learning and a live dashboard.
```

PT description:

```text
Uma plataforma de inteligência de gastos e preços construída sobre mais de
5,7 milhões de transações de compras públicas com engenharia de dados,
machine learning e dashboard.
```

---

## Steel Indicator

EN description:

```text
A reproducible platform for Brazilian steel-sector economic indices with
versioned methodology, immutable data vintages and explicit provenance.
```

PT:

```text
Uma plataforma reproduzível para índices econômicos do setor siderúrgico
brasileiro com metodologia versionada, vintages imutáveis e proveniência
explícita.
```

---

## Application Job

EN:

```text
A local AI-assisted workflow for tailoring job applications from verified
career evidence using structured generation and application tracking.
```

PT:

```text
Um workflow local assistido por IA para personalizar candidaturas a partir
de evidências profissionais verificadas, geração estruturada e tracking.
```

---

## Attrition

EN:

```text
An interpretable machine learning project for employee attrition prediction
using Logistic Regression, SMOTE and threshold optimization.
```

PT:

```text
Um projeto interpretável de machine learning para predição de rotatividade
usando Regressão Logística, SMOTE e otimização de threshold.
```

---

# 63. Open Graph text

## Procurement

```text
Procurement Intelligence

5.7M+ transactions
124 automated tests
ML · Data Engineering · Product
```

---

## Steel

```text
Steel Indicator

529 automated tests
Immutable vintages
Data Engineering · Economic Intelligence
```

---

# 64. Project asset manifest

Final recommended structure:

```text
public/
└── projects/
    ├── procurement-intelligence/
    │   ├── cover.webp
    │   ├── dashboard-overview.webp
    │   ├── architecture.svg
    │   └── model-evaluation.webp
    │
    ├── steel-indicator/
    │   ├── cover.webp
    │   ├── report-preview.webp
    │   ├── architecture.svg
    │   ├── history.webp
    │   └── vintage-governance.svg
    │
    ├── application-job/
    │   ├── cover.svg
    │   ├── workflow.svg
    │   ├── resume-preview.webp
    │   └── tracking-preview.webp
    │
    └── employee-attrition-prediction/
        ├── cover.webp
        ├── evaluation.webp
        └── feature-importance.webp
```

---

# 65. Asset status before coding

Coding can begin before final assets exist.

Use neutral placeholders labeled with exact target asset.

Example:

```text
[ procurement-intelligence / dashboard-overview ]
```

Never use random placeholder stock photography.

---

# 66. Content file structure

Recommended:

```text
content/
├── en/
│   ├── projects/
│   │   ├── procurement-intelligence.mdx
│   │   ├── steel-indicator.mdx
│   │   ├── application-job.mdx
│   │   └── employee-attrition-prediction.mdx
│   │
│   └── case-studies/
│       ├── procurement-intelligence.mdx
│       └── steel-indicator.mdx
│
└── pt/
    ├── projects/
    │   ├── procurement-intelligence.mdx
    │   ├── steel-indicator.mdx
    │   ├── application-job.mdx
    │   └── employee-attrition-prediction.mdx
    │
    └── case-studies/
        ├── procurement-intelligence.mdx
        └── steel-indicator.mdx
```

---

# 67. Structured project registry

Use shared non-editorial metadata where possible.

Example:

```ts
export const projectRegistry = {
  "procurement-intelligence": {
    index: "01",
    status: "live",
    year: 2026,
    github: "https://github.com/mori-mkm/procurement-intelligence",
    demo: "https://procurement-intelligence-mkm.streamlit.app/",
    featured: true,
    caseStudy: true,
  },

  "steel-indicator": {
    index: "02",
    status: "active",
    year: 2026,
    github: "https://github.com/mori-mkm/steel-indicator",
    featured: true,
    caseStudy: true,
  },

  "application-job": {
    index: "03",
    status: "active",
    year: 2026,
    github: "https://github.com/mori-mkm/application-job",
    featured: true,
    caseStudy: false,
  },

  "employee-attrition-prediction": {
    index: "04",
    status: "archived",
    github: "https://github.com/mori-mkm/HR-Predict",
    featured: true,
    caseStudy: false,
  },
};
```

Localized copy belongs elsewhere.

---

# 68. Facts that must remain synchronized

When repository facts change, verify:

## Procurement

```text
test count
transaction count
live demo URL
stack
model evaluation
```

## Steel

```text
test count
ADR count
latest methodology
publication structure
```

## Application Job

```text
generation engine
features
workflow
```

## Attrition

```text
metrics
```

---

# 69. Dynamic metrics policy

Do not automatically scrape GitHub README files at runtime for Home metrics.

Reason:

```text
Portfolio copy is curated editorial content.
```

Updating metrics should be deliberate.

GitHub API integration may later be used for:

```text
stars
last update
repository link
```

but these are not meaningful enough to prioritize in V1.

---

# 70. Project copy tone

Desired:

```text
precise
technical
evidence-based
calm
```

Bad:

```text
Revolutionary AI-powered platform transforming procurement through
cutting-edge machine learning.
```

Good:

```text
A spend and price intelligence platform built on
5.7M+ public procurement transactions.
```

---

# 71. Home project copy must not include

Avoid:

```text
passionate
innovative
cutting-edge
state-of-the-art
revolutionary
next-generation
best-in-class
```

unless a specific technical claim legitimately requires it.

---

# 72. Case Study writing principle

The Case Study should make a strong engineer think:

```text
I understand why he made those decisions.
```

not merely:

```text
He used many tools.
```

---

# 73. Case Study visual evidence principle

For every 2–3 major text sections, aim for at least one visual or structured element:

```text
diagram
metric grid
table
chart
code excerpt
decision callout
limitation callout
```

Avoid walls of text.

---

# 74. Code excerpts

Use only when the code itself demonstrates something meaningful.

Examples:

```text
publication contract
data validation
model split
schema
test
```

Maximum typical excerpt:

```text
10–25 lines
```

Do not embed full notebooks.

GitHub exists for full code.

---

# 75. Links placement

Project page top:

```text
GitHub ↗
Live Demo ↗
```

when available.

Project page bottom:

```text
View source on GitHub ↗
```

Flagship Case Study:

```text
View project →
GitHub ↗
Live Demo ↗
```

---

# 76. Project status labels

Procurement:

```text
LIVE
```

Steel:

```text
ACTIVE
```

Application Job:

```text
ACTIVE
```

Attrition:

```text
ARCHIVED
```

`ARCHIVED` does not mean bad.

It communicates that this is an earlier project representing a specific stage
of the technical journey.

---

# 77. Career progression narrative

The project order should implicitly communicate:

```text
Employee Attrition
modeling-focused ML
        ↓
Application Job
AI automation / workflow
        ↓
Procurement Intelligence
data architecture + ML + product
        ↓
Steel Indicator
methodology + engineering governance
        ↓
AI Closer
future AI systems flagship
```

Do not display this timeline explicitly on the Home.

It is an internal editorial principle.

---

# 78. Project readiness matrix

| Project | Home | Project Page | Case Study | Demo | Strong Architecture |
|---|---:|---:|---:|---:|---:|
| Procurement Intelligence | Yes | Yes | Yes | Yes | Yes |
| Steel Indicator | Yes | Yes | Yes | No | Yes |
| Application Job | Yes | Yes | No | No | Medium |
| Employee Attrition | Yes | Yes | No | No | Low |
| AI Closer | Later | Later | Later | Later | Target: High |
| DemandVision | Later | Later | Maybe | Later | Target: High |

---

# 79. Home Selected Work final order — EN

```text
02 / SELECTED WORK

Systems designed to
solve real problems.

01
Procurement Intelligence
Machine Learning · Data Product

02
Steel Indicator
Data Engineering · Economic Intelligence

03
Application Job
AI Automation · Productivity System

04
Employee Attrition Prediction
Machine Learning · People Analytics
```

---

# 80. Home Selected Work final order — PT

```text
02 / PROJETOS SELECIONADOS

Sistemas construídos para
resolver problemas reais.

01
Procurement Intelligence
Machine Learning · Produto de Dados

02
Steel Indicator
Engenharia de Dados · Inteligência Econômica

03
Application Job
Automação com IA · Sistema de Produtividade

04
Employee Attrition Prediction
Machine Learning · People Analytics
```

---

# 81. Case Studies final order — EN

```text
03 / CASE STUDIES

The reasoning behind
the systems.

01
Procurement Intelligence

02
Steel Indicator
```

---

# 82. Case Studies final order — PT

```text
03 / ESTUDOS DE CASO

O raciocínio por trás
dos sistemas.

01
Procurement Intelligence

02
Steel Indicator
```

---

# 83. Content review checklist

Before launch:

## Procurement

- [ ] Test count confirmed.
- [ ] Transaction count confirmed.
- [ ] Demo opens.
- [ ] GitHub link opens.
- [ ] Screenshot contains no private data.
- [ ] Public-procurement proxy limitation visible.
- [ ] No claim of confirmed overpricing.

## Steel

- [ ] Test count confirmed.
- [ ] GitHub link opens.
- [ ] No stale “current” IPIA value.
- [ ] Proxy limitation visible.
- [ ] Vintage language accurate.
- [ ] Public sources accurately described.

## Application Job

- [ ] GitHub link opens.
- [ ] No claim of hosted application.
- [ ] No implication that AI invents CV evidence.
- [ ] Claude Code usage accurately described.

## Attrition

- [ ] 74% recall confirmed.
- [ ] Responsible-use note present.
- [ ] No production claim.
- [ ] Archived status deliberate.

---

# 84. Translation review checklist

For every localized project:

- [ ] Same metric values.
- [ ] Same limitation.
- [ ] Same status.
- [ ] Same links.
- [ ] No stronger claim in PT than EN.
- [ ] No stronger claim in EN than PT.
- [ ] Portuguese reads naturally.
- [ ] Technology names remain stable.
- [ ] Headline fits mobile.
- [ ] Cards remain visually balanced.

---

# 85. Do not translate project repository names

Keep:

```text
Procurement Intelligence
Steel Indicator
Application Job
HR-Predict
```

The visible project title may differ from the repository title where needed.

---

# 86. Future AI project evaluation standard

Future AI projects must be judged beyond:

```text
“It answers questions.”
```

Preferred evidence:

```text
eval dataset
task success
retrieval precision / recall
groundedness
latency
cost
failure cases
observability
tests
```

This standard should apply to AI Closer and Portfolio RAG.

---

# 87. Portfolio RAG as future project

When implemented, it may appear as:

```text
PROJECT / XX

Portfolio RAG

A retrieval-based assistant grounded in my
projects, experience and technical writing.
```

But only after:

```text
[ ] citations
[ ] evaluation
[ ] failure behavior
[ ] source curation
[ ] cost tracking
[ ] latency tracking
```

The chatbot itself is not sufficient evidence.

---

# 88. Next implementation artifact

With this document complete, the core pre-code specification is:

```text
PORTFOLIO_SPEC_v1.1.md      ✅
HOME_WIREFRAME_v1.1.md      ✅
PROJECT_CONTENT.md           ✅
```

The next step is no longer another large planning document.

The next step is:

```text
INITIALIZE THE APPLICATION
```

Recommended sequence:

```text
1. Create Next.js repository
2. Configure TypeScript
3. Configure Tailwind
4. Configure Geist fonts
5. Create /en and /pt locale architecture
6. Add design tokens
7. Add project registry
8. Implement Header
9. Implement Hero
10. Implement first section shell
11. Implement Procurement Intelligence feature block
12. Review desktop + mobile
13. Continue Home
```

---

# 89. First implementation milestone

Do not attempt the entire Home in one coding-agent prompt.

Milestone 1:

```text
FOUNDATION
+
HEADER
+
HERO
+
ABOUT SHELL
```

Acceptance:

```text
/en works
/pt works
language switch works
desktop 1440 works
mobile 390 works
typography is correct
colors are correct
spacing feels editorial
```

Only then implement Selected Work.

---

# 90. Coding-agent handoff prompt

Use the following together with the three specification files:

```text
Read these files before changing any code:

1. PORTFOLIO_SPEC_v1.1.md
2. HOME_WIREFRAME_v1.1.md
3. PROJECT_CONTENT.md

They are the source of truth.

Start with foundation only.

Create a Next.js + TypeScript + Tailwind application with EN and PT routes.
Implement design tokens, global typography, the Header, language switcher,
Hero and About section shell.

Do not implement the rest of the site yet.

Do not add libraries or visual patterns that are not required.

Do not add gradients, neon, 3D graphics, particle effects, skill bars,
terminal aesthetics or generic developer-template components.

Use real bilingual copy from the specs.

The visual goal is:
minimal + technical + editorial.

After implementation, verify at:
1440px desktop
390px mobile

Do not invent content or metrics.
```

---

# 91. Final content principle

The portfolio should never ask the visitor to trust a title alone.

Every important claim should lead toward:

```text
PROJECT
↓
EVIDENCE
↓
REASONING
↓
CODE / DEMO / RESULT
```

That is the content system.

**End of PROJECT_CONTENT.md**
