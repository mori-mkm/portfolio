import type { Locale } from "@/lib/i18n";

/**
 * Typed, localized content for the Home page (Header, Hero, About — M1-02 scope).
 *
 * Copy sources (do not edit copy here without checking these first):
 * - EN: docs/planning/PORTFOLIO_SPEC.md §7-9 (canonical)
 * - PT-BR: docs/planning/HOME_WIREFRAME.md §63.1 (baseline) for Hero + About
 *   label/headline/pillars; About body paragraphs, pillar descriptions and the
 *   background/direction lists are editorial PT-BR translations of the EN
 *   copy, written per the translation rules in PORTFOLIO_SPEC.md
 *   ("Tradução editorial" / "Nomes próprios e tecnologias") — not present
 *   verbatim in the source docs yet. Flag for review, not fabricated claims.
 *
 * External link facts (confirmed with the user on 2026-09-01):
 * - GitHub: https://github.com/mori-mkm — confirmed correct.
 * - LinkedIn: https://www.linkedin.com/in/matheus-mori — confirmed.
 * - Resume: points to a Google Doc the user edits directly (so it's always
 *   current without a redeploy). IMPORTANT — this is an /edit URL, not a
 *   dedicated public view link. Google renders /edit URLs as read-only for
 *   anyone without edit permission, so this only works safely if the doc's
 *   sharing is "Anyone with the link -> Viewer". If it's set to "Editor",
 *   every site visitor could edit the resume. Flagged to the user; not
 *   verified from here (no access to the doc's sharing settings).
 *
 * `selectedWork` / `caseStudies` (M1-03/M1-04): see docs/DECISIONS.md
 * ADR-012 (Home content exclusivity) for why Steel Indicator moved out of
 * Selected Work and into Case Studies, and why the Developer Market
 * Research / CNN Brasil case study is deliberately hedged (no unverified
 * authorship or figures beyond what the user confirmed). ADR-017: DataLab
 * OS is Selected Work's flagship (`01`), Selected Work only — never also a
 * Case Study. Every DataLab claim is backed by the public
 * mori-mkm/datalab-os README (PoC v0.2); no demoHref (no public
 * deployment), and none of its README "Current limitations" are contradicted
 * (sequential/deterministic execution, no production hardening).
 *
 * `experience` (M1-05): company/role/period are historical-fact fields —
 * kept identical across EN/PT (not translated) per the user's explicit
 * instruction not to silently alter an official job title. Source: the
 * user's private master résumé (never committed — ADR-011). Per ADR-012,
 * none of these entries reproduce the Selected Work / Case Studies content
 * already featured elsewhere (no CNN/research detail under Rocketseat, no
 * Employee Attrition metrics under Banco BV).
 *
 * `researchRecognition` (M1-06): see docs/DECISIONS.md ADR-013 (Research &
 * Recognition allocation) for why this replaces the older, pre-ADR-012
 * Research wireframe content (Economic Index Construction, Shapley Driver
 * Decomposition, Survival Analysis, Forecasting Workforce Dynamics — all
 * dropped as duplicates of Steel Indicator / Experience / Employee
 * Attrition). Exactly 3 items, editorial (non-chronological) order. FarmIA
 * and Retail Sales Forecasting are framed strictly as historical/academic
 * work (hackathon prototype, final coursework project) — no production,
 * deployment, or business-outcome claims. Closer AI is deliberately
 * omitted (ADR-007, evidence before prominence).
 *
 * `capabilities` (M1-07): synthesis layer, not a new evidence source — an
 * application of ADR-007 (evidence before prominence) to the current
 * public-project/experience evidence, not a new architectural decision
 * (no ADR-014). Group is "Applied AI", not "AI Engineering". Updated by
 * ADR-017: DataLab OS's public repo now evidences Agent Orchestration,
 * LangGraph, AI Observability (typed, replayable event stream) and FastAPI,
 * so those were added; AI-assisted Workflows / Structured Outputs /
 * Prompt & Context Engineering were dropped (their only public evidence,
 * the Application Job repo, is no longer public). Still deliberately
 * excludes RAG, Multi-Agent/dynamic agent systems, LangChain/CrewAI,
 * Vector Databases, AI Evaluation, PySpark, CI/CD, and cloud infra — all
 * omitted silently (no "coming soon"/"planned" labels, this section is not
 * a roadmap). Closer AI is not used as evidence for any of the above.
 *
 * `nav` / `contact` (M1-08): "Writing" removed from both locale nav
 * arrays — Writing is deferred (no genuine published articles exist yet;
 * see PORTFOLIO_SPEC.md §19). Contact is renumbered 07 (was planned as
 * 08, behind Writing) so the visitor never sees a missing section number.
 * The actual submit wiring (POST /api/contact, Supabase + Resend, ADR-014
 * in docs/DECISIONS.md) lives in `src/app/api/contact/route.ts` and
 * `src/components/forms/ContactForm.tsx` — this content object only
 * supplies copy, never the destination email or any credential.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type Pillar = {
  title: string;
  description: string;
};

export type ProjectVisualKind = "datalab" | "procurement" | "steel" | "attrition";

export type ProjectProof = {
  value: string;
  label: string;
};

export type SelectedProject = {
  index: string;
  category: string;
  title: string;
  description: string;
  proof: ProjectProof[];
  stack: string;
  visual: ProjectVisualKind;
  /** Optional — only rendered when the destination actually exists (no dead links). */
  githubHref?: string;
  demoHref?: string;
};

export type SelectedWorkContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy: string;
  githubLabel: string;
  demoLabel: string;
  projects: SelectedProject[];
};

export type CaseStudyVisualKind = "steel" | "research";

export type CaseEvidence = {
  label: string;
  text: string;
};

export type CaseStudy = {
  index: string;
  category: string;
  title: string;
  positioning: string;
  evidence: CaseEvidence[];
  visual: CaseStudyVisualKind;
  /** Optional — only rendered when the destination actually exists (no dead links). */
  githubHref?: string;
  externalHref?: string;
  externalLabel?: string;
};

export type CaseStudiesContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy: string;
  githubLabel: string;
  studies: CaseStudy[];
};

export type ExperienceItem = {
  /** Company, role and period are treated as identity facts, not prose — kept identical across locales (see ADR-007 / M1-05 notes). */
  period: string;
  company: string;
  role: string;
  description: string;
  metadata: string;
};

export type ExperienceContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  intro: string;
  items: ExperienceItem[];
};

export type ResearchRecognitionType = "research" | "recognition";

export type ResearchRecognitionItem = {
  type: ResearchRecognitionType;
  index: string;
  title: string;
  /** Institution/competition + program-type + year — treated as an identity fact, not translated (same rationale as Experience's company/role). */
  context: string;
  description: string;
  metadata: string;
  /** Optional standout callout (e.g. a placement result or a status flag) — quiet, not a metric tile. */
  evidence?: string;
  href: string;
  linkLabel: string;
};

export type ResearchRecognitionContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy: string;
  items: ResearchRecognitionItem[];
};

export type CapabilityGroup = {
  /** Stored as literal display text (e.g. "APPLIED AI"), matching the rest of the site's convention for eyebrow/category strings — the "0X / " index prefix is composed from array position in the component, not stored here. */
  title: string;
  items: string[];
};

export type CapabilitiesContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy?: string;
  groups: CapabilityGroup[];
};

export type ContactFieldContent = {
  /** Full literal label text, e.g. "NAME *" / "MESSAGE — OPTIONAL". */
  label: string;
  placeholder: string;
};

export type ContactContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy: string;
  fields: {
    name: ContactFieldContent;
    email: ContactFieldContent;
    phone: ContactFieldContent;
    message: ContactFieldContent;
  };
  submitLabel: string;
  submittingLabel: string;
  success: { heading: string; body: string };
  error: { heading: string; body: string };
  privacyCopy: string;
};

/** Footer (ADR-018, PORTFOLIO_SPEC §21) — closing statement + identity line; links reuse `externalLinks`. */
export type FooterContent = {
  headlineLine1: string;
  headlineLine2: string;
  role: string;
  location: string;
  backToTop: string;
};

type HomeContent = {
  brand: string;
  nav: NavItem[];
  languageSwitcher: {
    en: string;
    pt: string;
  };
  menuToggle: {
    open: string;
    close: string;
  };
  externalLinks: {
    github: string;
    githubHref: string;
    linkedin: string;
    linkedinHref: string;
    resume: string;
    resumeHref: string;
  };
  hero: {
    eyebrow: string;
    name: string;
    headlineLine1: string;
    headlineLine2: string;
    descriptor: string;
    supportingCopy: string;
    primaryCta: string;
    primaryCtaHref: string;
    scrollCue: string;
    scrollCueHref: string;
  };
  about: {
    eyebrow: string;
    headlineLine1: string;
    headlineLine2: string;
    paragraphs: string[];
    backgroundLabel: string;
    background: string[];
    directionLabel: string;
    direction: string[];
    pillars: Pillar[];
  };
  selectedWork: SelectedWorkContent;
  caseStudies: CaseStudiesContent;
  experience: ExperienceContent;
  researchRecognition: ResearchRecognitionContent;
  capabilities: CapabilitiesContent;
  contact: ContactContent;
  footer: FooterContent;
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    brand: "Matheus Mori",
    nav: [
      { label: "About", href: "#about" },
      { label: "Projects", href: "#projects" },
      { label: "Case Studies", href: "#case-studies" },
      { label: "Experience", href: "#experience" },
      { label: "Research", href: "#research" },
      { label: "Contact", href: "#contact" },
    ],
    languageSwitcher: {
      en: "EN",
      pt: "PT",
    },
    menuToggle: {
      open: "Menu",
      close: "Close",
    },
    externalLinks: {
      github: "GitHub",
      githubHref: "https://github.com/mori-mkm",
      linkedin: "LinkedIn",
      linkedinHref: "https://www.linkedin.com/in/matheus-mori",
      resume: "Resume",
      resumeHref:
        "https://docs.google.com/document/d/1FgSxRx5DYYqcSQD_zA0kodYHP4BQUKToKZcNI36Nd14/edit?usp=sharing",
    },
    hero: {
      eyebrow: "AI ENGINEERING · DATA SCIENCE",
      name: "Matheus Mori",
      headlineLine1: "AI Engineer",
      headlineLine2: "& Data Scientist",
      descriptor:
        "Building production-oriented AI,\nmachine learning and data products.",
      supportingCopy:
        "I work across data, machine learning and AI — turning complex problems into systems people can actually use.",
      primaryCta: "Explore my work",
      primaryCtaHref: "#projects",
      scrollCue: "Scroll",
      scrollCueHref: "#about",
    },
    about: {
      eyebrow: "01 / ABOUT",
      headlineLine1: "I build at the intersection of",
      headlineLine2: "data, machine learning and AI.",
      paragraphs: [
        "I'm a statistician and data professional focused on turning analytical problems into reliable products and systems.",
        "My background spans analytics, machine learning, experimentation and decision-support products. Today, I'm increasingly focused on AI engineering — especially systems that combine LLMs, retrieval, agents, evaluation, APIs and production-oriented software practices.",
      ],
      backgroundLabel: "BACKGROUND",
      background: ["Statistics", "Data Science", "Machine Learning", "Analytics"],
      directionLabel: "CURRENT DIRECTION",
      direction: ["AI Engineering", "Applied AI", "Production ML"],
      pillars: [
        {
          title: "DATA SCIENCE",
          description:
            "Statistical modeling, experimentation, forecasting and machine learning.",
        },
        {
          title: "AI ENGINEERING",
          description: "LLM applications, RAG, agents, evaluation and AI systems.",
        },
        {
          title: "DATA PRODUCTS",
          description:
            "Turning models and analysis into tools people can actually use.",
        },
      ],
    },
    selectedWork: {
      eyebrow: "02 / SELECTED WORK",
      headlineLine1: "Systems designed to",
      headlineLine2: "solve real problems.",
      supportingCopy:
        "A selection of AI systems, machine learning systems and data products.",
      githubLabel: "GitHub",
      demoLabel: "Live Demo",
      projects: [
        {
          index: "01",
          category: "AI ENGINEERING · AGENT ORCHESTRATION",
          title: "DataLab OS",
          description:
            "A local-first, observable Data Science agent system built with LangGraph, covering profiling, EDA, modeling and independent methodological review.",
          proof: [
            { value: "LANGGRAPH", label: "orchestration" },
            { value: "118", label: "backend tests" },
            { value: "97", label: "frontend tests" },
            { value: "REVIEW", label: "independent gate" },
          ],
          stack: "Python · LangGraph · FastAPI · Next.js · React Flow",
          visual: "datalab",
          githubHref: "https://github.com/mori-mkm/datalab-os",
        },
        {
          index: "02",
          category: "MACHINE LEARNING · DATA PRODUCT",
          title: "Procurement Intelligence",
          description:
            "A spend and price intelligence platform built on 5.7M+ public procurement transactions.",
          proof: [
            { value: "5.7M+", label: "transactions" },
            { value: "124", label: "automated tests" },
            { value: "TEMPORAL", label: "ML validation" },
            { value: "LIVE", label: "dashboard" },
          ],
          stack: "Python · DuckDB · LightGBM · Streamlit",
          visual: "procurement",
          githubHref: "https://github.com/mori-mkm/procurement-intelligence",
          demoHref: "https://procurement-intelligence-mkm.streamlit.app/",
        },
        {
          index: "03",
          category: "MACHINE LEARNING · PEOPLE ANALYTICS",
          title: "Employee Attrition Prediction",
          description:
            "An interpretable classification workflow focused on identifying employees at higher attrition risk.",
          proof: [
            { value: "74%", label: "recall" },
            { value: "SMOTE", label: "class balancing" },
            { value: "THRESHOLD", label: "optimization" },
            { value: "5-FOLD", label: "cross-validation" },
          ],
          stack: "Python · Scikit-learn · Imbalanced-learn",
          visual: "attrition",
          githubHref: "https://github.com/mori-mkm/HR-Predict",
        },
      ],
    },
    caseStudies: {
      eyebrow: "03 / CASE STUDIES",
      headlineLine1: "The reasoning behind",
      headlineLine2: "the work.",
      supportingCopy:
        "Problems, architecture, methodology, trade-offs and evidence behind selected work.",
      githubLabel: "GitHub",
      studies: [
        {
          index: "01",
          category: "DATA ENGINEERING · ECONOMIC INTELLIGENCE",
          title: "Steel Indicator",
          positioning:
            "Building an auditable economic indicator from fragmented public data.",
          evidence: [
            {
              label: "PROBLEM",
              text: "Fragmented public sources and changing policy parameters.",
            },
            {
              label: "ENGINEERING",
              text: "Immutable vintages and source provenance.",
            },
            {
              label: "METHODOLOGY",
              text: "Versioned index methodology and declared proxies.",
            },
            { label: "RELIABILITY", text: "529 automated tests." },
          ],
          visual: "steel",
          githubHref: "https://github.com/mori-mkm/steel-indicator",
        },
        {
          index: "02",
          category: "APPLIED RESEARCH · DATA SCIENCE",
          title: "Developer Market Research",
          positioning:
            "Research and data analysis developed during my time at Rocketseat, with findings on women's representation in technology reaching CNN Brasil.",
          evidence: [
            {
              label: "QUESTION",
              text: "What does the Brazilian technology workforce look like?",
            },
            {
              label: "RESEARCH",
              text: "Market and workforce data analysis, conducted during my time at Rocketseat.",
            },
            {
              label: "FINDING",
              text: "Women represented a minority of technology employment in the reported analysis.",
            },
            { label: "IMPACT", text: "The finding reached CNN Brasil coverage." },
          ],
          visual: "research",
          externalHref: "https://lnkd.in/p/djifF6qh",
          externalLabel: "Watch coverage",
        },
      ],
    },
    experience: {
      eyebrow: "04 / EXPERIENCE",
      headlineLine1: "Where I've worked",
      headlineLine2: "and what I've built.",
      intro:
        "Professional experience across finance, consulting and technology — applying analytics, machine learning, experimentation and data products to real business problems.",
      items: [
        {
          period: "2025 — 2026",
          company: "Banco BV",
          role: "People Analytics Analyst Pleno · Data Analytics",
          description:
            "Built and evolved analytics, forecasting and decision-support products covering a workforce of 4,000+ employees and serving multiple levels of leadership. Worked across SQL Server, Power BI, Python and Databricks.",
          metadata: "SQL Server · Power BI · Python · Databricks",
        },
        {
          period: "2024 — 2025",
          company: "BIP Consulting",
          role: "People Analytics · Data Analytics",
          description:
            "Took ownership of People Analytics operations and redesigned monthly international reporting, reducing consolidation from about one week to one day. Built ETL and automation flows with Power Automate, Python and Power Query.",
          metadata: "Python · Power Query · Power Automate · ETL",
        },
        {
          period: "2022 — 2023",
          company: "Contmatic Phoenix",
          role: "Data Science Junior · Growth & Marketing Analytics",
          description:
            "Worked across experimentation, segmentation, churn/LTV, funnels and campaign analytics on a base of ~1M leads and ~60k users. A series of data-driven optimizations contributed to ~11% higher conversion and ~20% lower CAC.",
          metadata: "Python · SQL · Experimentation · Growth Analytics",
        },
        {
          period: "2021 — 2022",
          company: "Rocketseat",
          role: "Data Science Junior · Growth & Customer Analytics",
          description:
            "Applied data science to segmentation, retention, cohorts and growth analytics across 60k+ paying students. A decision-tree segmentation initiative contributed to ~15% higher course-purchase conversion.",
          metadata: "Python · R · SQL · Customer Analytics",
        },
      ],
    },
    researchRecognition: {
      eyebrow: "05 / RESEARCH & RECOGNITION",
      headlineLine1: "Research and milestones",
      headlineLine2: "that shaped my work.",
      supportingCopy:
        "Academic investigations and early projects across statistics, forecasting and applied data science.",
      items: [
        {
          type: "research",
          index: "01",
          title: "Wavelet Multivariate Time Series Analysis",
          context: "UFSCar · Undergraduate Thesis · 2023",
          description:
            "Undergraduate statistics research examining how relationships among financial markets change across time and scale using wavelet methods.",
          metadata: "Time Series · Statistics · Wavelets",
          href: "https://github.com/mori-mkm/UFSCar/tree/main/undergraduate-thesis",
          linkLabel: "View research",
        },
        {
          type: "recognition",
          index: "01",
          title: "FarmIA — Santander Data Challenge",
          context: "1st Place · 2020",
          description:
            "First-place data challenge project developed by a five-person team, using statistical modeling and agrometeorological data to support agricultural planning.",
          evidence: "1ST PLACE · 100+ TEAMS",
          metadata: "Applied Data Science · Agriculture",
          href: "https://github.com/mori-mkm/FarmAI.Hackaton",
          linkLabel: "GitHub",
        },
        {
          type: "research",
          index: "02",
          title: "Retail Sales Forecasting",
          context: "Digital House · Final Data Science Project",
          description:
            "Academic forecasting project exploring monthly store-level sales with SARIMAX, chronological validation and a historical Flask prototype.",
          evidence: "ACADEMIC PROJECT",
          metadata: "Forecasting · SARIMAX · Time Series",
          href: "https://github.com/mori-mkm/retail-sales-forecasting",
          linkLabel: "GitHub",
        },
      ],
    },
    capabilities: {
      eyebrow: "06 / CAPABILITIES",
      headlineLine1: "Tools and methods I use to",
      headlineLine2: "turn ideas into working systems.",
      groups: [
        {
          title: "APPLIED AI",
          items: [
            "LLM Applications",
            "Agent Orchestration",
            "LangGraph",
            "AI Observability",
            "AI Automation",
          ],
        },
        {
          title: "MACHINE LEARNING",
          items: [
            "Regression",
            "Classification",
            "Gradient Boosting",
            "Forecasting",
            "Survival Analysis",
            "Experimentation",
            "Model Evaluation",
          ],
        },
        {
          title: "DATA",
          items: [
            "Python",
            "SQL",
            "Pandas",
            "Power BI",
            "Data Modeling",
            "Data Pipelines",
            "Data Quality",
          ],
        },
        {
          title: "ENGINEERING",
          items: [
            "Git & GitHub",
            "Docker",
            "Testing",
            "MLflow",
            "APIs",
            "FastAPI",
            "Streamlit",
            "Automation",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "07 / CONTACT",
      headlineLine1: "Let's build",
      headlineLine2: "something useful.",
      supportingCopy:
        "I'm interested in opportunities and conversations around Data Science, Machine Learning and Applied AI.",
      fields: {
        name: { label: "NAME *", placeholder: "Jane Doe" },
        email: { label: "EMAIL *", placeholder: "jane@example.com" },
        phone: { label: "PHONE *", placeholder: "+1 555 123 4567" },
        message: { label: "MESSAGE — OPTIONAL", placeholder: "How can I help?" },
      },
      submitLabel: "Send message",
      submittingLabel: "Sending...",
      success: {
        heading: "MESSAGE SENT",
        body: "Thanks — I'll get back to you soon.",
      },
      error: {
        heading: "I couldn't send your message right now.",
        body: "Please try again in a moment.",
      },
      privacyCopy: "I'll use these details only to reply to your contact.",
    },
    footer: {
      headlineLine1: "Build. Evaluate.",
      headlineLine2: "Observe. Improve.",
      role: "AI Engineer & Data Scientist",
      location: "São Paulo, Brazil",
      backToTop: "Back to top",
    },
  },

  pt: {
    brand: "Matheus Mori",
    nav: [
      { label: "Sobre", href: "#about" },
      { label: "Projetos", href: "#projects" },
      { label: "Estudos de Caso", href: "#case-studies" },
      { label: "Experiência", href: "#experience" },
      { label: "Pesquisa", href: "#research" },
      { label: "Contato", href: "#contact" },
    ],
    languageSwitcher: {
      en: "EN",
      pt: "PT",
    },
    menuToggle: {
      open: "Menu",
      close: "Fechar",
    },
    externalLinks: {
      github: "GitHub",
      githubHref: "https://github.com/mori-mkm",
      linkedin: "LinkedIn",
      linkedinHref: "https://www.linkedin.com/in/matheus-mori",
      resume: "Currículo",
      resumeHref:
        "https://docs.google.com/document/d/1FgSxRx5DYYqcSQD_zA0kodYHP4BQUKToKZcNI36Nd14/edit?usp=sharing",
    },
    hero: {
      eyebrow: "ENGENHARIA DE IA · DATA SCIENCE",
      name: "Matheus Mori",
      headlineLine1: "Engenheiro de IA",
      headlineLine2: "& Cientista de Dados",
      descriptor:
        "Construindo produtos de IA,\nmachine learning e dados orientados à produção.",
      supportingCopy:
        "Atuo entre dados, machine learning e inteligência artificial — transformando problemas complexos em sistemas que as pessoas realmente podem usar.",
      primaryCta: "Conheça meus projetos",
      primaryCtaHref: "#projects",
      scrollCue: "Rolar",
      scrollCueHref: "#about",
    },
    about: {
      eyebrow: "01 / SOBRE",
      headlineLine1: "Construo na interseção entre",
      headlineLine2: "dados, machine learning e IA.",
      paragraphs: [
        "Sou estatístico e profissional de dados focado em transformar problemas analíticos em produtos e sistemas confiáveis.",
        "Minha trajetória passa por analytics, machine learning, experimentação e produtos de apoio à decisão. Hoje, estou cada vez mais focado em AI engineering — sistemas que combinam LLMs, retrieval, agentes, avaliação, APIs e práticas de engenharia orientadas à produção.",
      ],
      backgroundLabel: "FORMAÇÃO",
      background: ["Estatística", "Data Science", "Machine Learning", "Analytics"],
      directionLabel: "DIREÇÃO ATUAL",
      direction: ["AI Engineering", "Applied AI", "Production ML"],
      pillars: [
        {
          title: "DATA SCIENCE",
          description:
            "Modelagem estatística, experimentação, forecasting e machine learning.",
        },
        {
          title: "ENGENHARIA DE IA",
          description: "Aplicações com LLM, RAG, agentes, avaliação e sistemas de IA.",
        },
        {
          title: "PRODUTOS DE DADOS",
          description:
            "Transformando modelos e análises em ferramentas que as pessoas realmente usam.",
        },
      ],
    },
    selectedWork: {
      eyebrow: "02 / PROJETOS SELECIONADOS",
      headlineLine1: "Sistemas construídos para",
      headlineLine2: "resolver problemas reais.",
      supportingCopy:
        "Uma seleção de sistemas de IA, machine learning e produtos de dados.",
      githubLabel: "GitHub",
      demoLabel: "Demo",
      projects: [
        {
          index: "01",
          category: "ENGENHARIA DE IA · ORQUESTRAÇÃO DE AGENTES",
          title: "DataLab OS",
          description:
            "Um sistema local-first e observável de agentes para Data Science, construído com LangGraph e cobrindo profiling, EDA, modelagem e revisão metodológica independente.",
          proof: [
            { value: "LANGGRAPH", label: "orquestração" },
            { value: "118", label: "testes backend" },
            { value: "97", label: "testes frontend" },
            { value: "REVIEW", label: "gate independente" },
          ],
          stack: "Python · LangGraph · FastAPI · Next.js · React Flow",
          visual: "datalab",
          githubHref: "https://github.com/mori-mkm/datalab-os",
        },
        {
          index: "02",
          category: "MACHINE LEARNING · PRODUTO DE DADOS",
          title: "Procurement Intelligence",
          description:
            "Uma plataforma de inteligência de gastos e preços construída sobre mais de 5,7 milhões de transações de compras públicas.",
          proof: [
            { value: "5,7M+", label: "transações" },
            { value: "124", label: "testes automatizados" },
            { value: "TEMPORAL", label: "validação de ML" },
            { value: "LIVE", label: "dashboard" },
          ],
          stack: "Python · DuckDB · LightGBM · Streamlit",
          visual: "procurement",
          githubHref: "https://github.com/mori-mkm/procurement-intelligence",
          demoHref: "https://procurement-intelligence-mkm.streamlit.app/",
        },
        {
          index: "03",
          category: "MACHINE LEARNING · PEOPLE ANALYTICS",
          title: "Employee Attrition Prediction",
          description:
            "Um workflow de classificação interpretável focado em identificar funcionários com maior risco de desligamento.",
          proof: [
            { value: "74%", label: "recall" },
            { value: "SMOTE", label: "balanceamento" },
            { value: "THRESHOLD", label: "otimização" },
            { value: "5-FOLD", label: "validação cruzada" },
          ],
          stack: "Python · Scikit-learn · Imbalanced-learn",
          visual: "attrition",
          githubHref: "https://github.com/mori-mkm/HR-Predict",
        },
      ],
    },
    caseStudies: {
      eyebrow: "03 / ESTUDOS DE CASO",
      headlineLine1: "O raciocínio por trás",
      headlineLine2: "do trabalho.",
      supportingCopy:
        "Problemas, arquitetura, metodologia, trade-offs e evidências por trás de trabalhos selecionados.",
      githubLabel: "GitHub",
      studies: [
        {
          index: "01",
          category: "ENGENHARIA DE DADOS · INTELIGÊNCIA ECONÔMICA",
          title: "Steel Indicator",
          positioning:
            "Construindo um indicador econômico auditável a partir de dados públicos fragmentados.",
          evidence: [
            {
              label: "PROBLEMA",
              text: "Fontes públicas fragmentadas e parâmetros de política em constante mudança.",
            },
            {
              label: "ENGENHARIA",
              text: "Vintages imutáveis e rastreabilidade de origem dos dados.",
            },
            {
              label: "METODOLOGIA",
              text: "Metodologia de índice versionada e proxies declarados.",
            },
            { label: "CONFIABILIDADE", text: "529 testes automatizados." },
          ],
          visual: "steel",
          githubHref: "https://github.com/mori-mkm/steel-indicator",
        },
        {
          index: "02",
          category: "PESQUISA APLICADA · DATA SCIENCE",
          title: "Pesquisa sobre o Mercado de Tecnologia",
          positioning:
            "Pesquisa e análise de dados desenvolvidas durante minha atuação na Rocketseat, com resultados sobre a participação feminina no mercado de tecnologia chegando à CNN Brasil.",
          evidence: [
            {
              label: "QUESTÃO",
              text: "Como se configura o mercado de tecnologia no Brasil?",
            },
            {
              label: "PESQUISA",
              text: "Análise de dados de mercado e força de trabalho, conduzida durante minha atuação na Rocketseat.",
            },
            {
              label: "ACHADO",
              text: "Mulheres representaram uma minoria dos empregos em tecnologia na análise reportada.",
            },
            { label: "REPERCUSSÃO", text: "O achado chegou à cobertura da CNN Brasil." },
          ],
          visual: "research",
          externalHref: "https://lnkd.in/p/djifF6qh",
          externalLabel: "Assistir cobertura",
        },
      ],
    },
    experience: {
      eyebrow: "04 / EXPERIÊNCIA",
      headlineLine1: "Onde trabalhei",
      headlineLine2: "e o que construí.",
      intro:
        "Experiência profissional em finanças, consultoria e tecnologia — aplicando analytics, machine learning, experimentação e produtos de dados a problemas reais de negócio.",
      items: [
        {
          period: "2025 — 2026",
          company: "Banco BV",
          role: "People Analytics Analyst Pleno · Data Analytics",
          description:
            "Desenvolvi e evoluí produtos analíticos, forecasting e soluções de apoio à decisão cobrindo uma força de trabalho de mais de 4.000 colaboradores e diferentes níveis de liderança. Atuei com SQL Server, Power BI, Python e Databricks.",
          metadata: "SQL Server · Power BI · Python · Databricks",
        },
        {
          period: "2024 — 2025",
          company: "BIP Consulting",
          role: "People Analytics · Data Analytics",
          description:
            "Assumi a operação de People Analytics e redesenhei o reporting internacional mensal, reduzindo a consolidação de cerca de uma semana para um dia. Estruturei fluxos de ETL e automação com Power Automate, Python e Power Query.",
          metadata: "Python · Power Query · Power Automate · ETL",
        },
        {
          period: "2022 — 2023",
          company: "Contmatic Phoenix",
          role: "Data Science Junior · Growth & Marketing Analytics",
          description:
            "Atuei com experimentação, segmentação, churn/LTV, funis e análise de campanhas sobre uma base de cerca de 1 milhão de leads e 60 mil usuários. Uma série de otimizações orientadas por dados contribuiu para cerca de 11% de aumento na conversão e 20% de redução no CAC.",
          metadata: "Python · SQL · Experimentation · Growth Analytics",
        },
        {
          period: "2021 — 2022",
          company: "Rocketseat",
          role: "Data Science Junior · Growth & Customer Analytics",
          description:
            "Apliquei ciência de dados em segmentação, retenção, coortes e Growth Analytics sobre uma base de mais de 60 mil alunos pagantes. Uma iniciativa de segmentação com árvore de decisão contribuiu para cerca de 15% de aumento na conversão de compra de cursos.",
          metadata: "Python · R · SQL · Customer Analytics",
        },
      ],
    },
    researchRecognition: {
      eyebrow: "05 / PESQUISA & RECONHECIMENTO",
      headlineLine1: "Pesquisas e marcos",
      headlineLine2: "que moldaram meu trabalho.",
      supportingCopy:
        "Investigações acadêmicas e projetos anteriores em estatística, forecasting e ciência de dados aplicada.",
      items: [
        {
          type: "research",
          index: "01",
          title: "Wavelet Multivariate Time Series Analysis",
          context: "UFSCar · Undergraduate Thesis · 2023",
          description:
            "Pesquisa de graduação em Estatística investigando como as relações entre mercados financeiros mudam ao longo do tempo e em diferentes escalas utilizando métodos wavelet.",
          metadata: "Time Series · Statistics · Wavelets",
          href: "https://github.com/mori-mkm/UFSCar/tree/main/undergraduate-thesis",
          linkLabel: "Ver pesquisa",
        },
        {
          type: "recognition",
          index: "01",
          title: "FarmIA — Santander Data Challenge",
          context: "1º Lugar · 2020",
          description:
            "Projeto vencedor de um data challenge desenvolvido por uma equipe de cinco pessoas, utilizando modelagem estatística e dados agrometeorológicos para apoiar o planejamento agrícola.",
          evidence: "1º LUGAR · 100+ EQUIPES",
          metadata: "Applied Data Science · Agriculture",
          href: "https://github.com/mori-mkm/FarmAI.Hackaton",
          linkLabel: "GitHub",
        },
        {
          type: "research",
          index: "02",
          title: "Retail Sales Forecasting",
          context: "Digital House · Final Data Science Project",
          description:
            "Projeto acadêmico de forecasting de vendas mensais por loja utilizando SARIMAX, validação cronológica e um protótipo histórico em Flask.",
          evidence: "PROJETO ACADÊMICO",
          metadata: "Forecasting · SARIMAX · Time Series",
          href: "https://github.com/mori-mkm/retail-sales-forecasting",
          linkLabel: "GitHub",
        },
      ],
    },
    capabilities: {
      eyebrow: "06 / CAPACIDADES",
      headlineLine1: "Ferramentas e métodos que uso para",
      headlineLine2: "transformar ideias em sistemas funcionais.",
      groups: [
        {
          title: "APPLIED AI",
          items: [
            "LLM Applications",
            "Orquestração de Agentes",
            "LangGraph",
            "Observabilidade de IA",
            "Automação com IA",
          ],
        },
        {
          title: "MACHINE LEARNING",
          items: [
            "Regressão",
            "Classificação",
            "Gradient Boosting",
            "Forecasting",
            "Análise de Sobrevivência",
            "Experimentação",
            "Avaliação de Modelos",
          ],
        },
        {
          title: "DATA",
          items: [
            "Python",
            "SQL",
            "Pandas",
            "Power BI",
            "Modelagem de Dados",
            "Pipelines de Dados",
            "Qualidade de Dados",
          ],
        },
        {
          title: "ENGINEERING",
          items: [
            "Git & GitHub",
            "Docker",
            "Testes",
            "MLflow",
            "APIs",
            "FastAPI",
            "Streamlit",
            "Automação",
          ],
        },
      ],
    },
    contact: {
      eyebrow: "07 / CONTATO",
      headlineLine1: "Vamos construir",
      headlineLine2: "algo útil.",
      supportingCopy:
        "Tenho interesse em oportunidades e conversas sobre Ciência de Dados, Machine Learning e IA Aplicada.",
      fields: {
        name: { label: "NOME *", placeholder: "Jane Doe" },
        email: { label: "EMAIL *", placeholder: "jane@example.com" },
        phone: { label: "TELEFONE *", placeholder: "+55 11 91234-5678" },
        message: { label: "MENSAGEM — OPCIONAL", placeholder: "Como posso ajudar?" },
      },
      submitLabel: "Enviar mensagem",
      submittingLabel: "Enviando...",
      success: {
        heading: "MENSAGEM ENVIADA",
        body: "Obrigado pelo contato — responderei em breve.",
      },
      error: {
        heading: "Não foi possível enviar sua mensagem agora.",
        body: "Tente novamente em instantes.",
      },
      privacyCopy: "Usarei estes dados apenas para responder ao seu contato.",
    },
    footer: {
      headlineLine1: "Construir. Avaliar.",
      headlineLine2: "Observar. Melhorar.",
      role: "Engenheiro de IA & Cientista de Dados",
      location: "São Paulo, Brasil",
      backToTop: "Voltar ao topo",
    },
  },
};
