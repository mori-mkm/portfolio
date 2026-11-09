import type { Locale } from "@/lib/i18n";

/**
 * Typed, localized content for the Home page.
 *
 * Copy sources (do not edit copy here without checking these first):
 * - Current Home copy (ADR-021, 2026-11-09): supplied by the user and
 *   recorded in docs/planning/PROJECT_CONTENT.md §95 (Hero, Professional
 *   Impact, Featured Projects, Experience, About, Contact). PT-BR strings are
 *   editorial translations of the EN copy (same meaning, not literal).
 * - Older sections not rewritten by ADR-021 (Other Work & Research items,
 *   Capabilities, Contact form fields, Footer) keep their earlier verified
 *   copy — see PROJECT_CONTENT.md §2/§92/§93/§94 and PORTFOLIO_SPEC §18.
 *
 * External link facts (confirmed with the user on 2026-09-01):
 * - GitHub: https://github.com/mori-mkm — confirmed correct.
 * - LinkedIn: https://www.linkedin.com/in/matheus-mori — confirmed.
 * - Resume: no résumé link is rendered anywhere on the site (removed
 *   2026-11-03 at the user's request, ADR-020; LinkedIn and GitHub stay).
 *
 * Home order (ADR-021): Hero → 01 Professional Impact → 02 Selected AI &
 * Data Projects → 03 Experience → 04 Other Work & Research → 05 About →
 * 06 Capabilities → 07 Contact.
 *
 * `professionalImpact`: PROFESSIONAL EXPERIENCE results only (never
 * personal-project metrics). Every number already appears in the user's
 * Experience history (ADR-011 source, M1-05); wording says "contributed" /
 * "helped deliver" — collaborative work, no sole-causality claim.
 *
 * `selectedWork` (ADR-012 exclusivity, ADR-017/019/021): exactly four
 * featured projects — DataLab OS, Empório AI Assistant, AI Closer,
 * Procurement Intelligence. None of them also appears in Other Work.
 * - DataLab OS: public README (local-first PoC). No test counts on Home.
 * - Empório: fictional-store technical case (not client work, not deployed,
 *   internal evaluation). Final architecture is full policy context, not
 *   RAG; BM25/embeddings were measured alternatives (PROJECT_CONTENT §94).
 * - AI Closer: private repository, collaborative prototype in development.
 *   No GitHub link, no metrics, no deployment/commercial claim. Its stack
 *   (RAG, pgvector, Supabase, OpenAI…) is listed on the project only — it
 *   does NOT feed Capabilities.
 * - Procurement: public-data proxy. Stack follows its repo (no PySpark or
 *   MLflow there). ML matched the baseline's accuracy and only expanded
 *   coverage — never framed as "more accurate".
 *
 * `experience` (M1-05): company/role/period are historical-fact fields —
 * kept identical across EN/PT and never renamed (no "Data Scientist" /
 * "AI Engineer" relabeling). Descriptions were rewritten for ADR-021 to
 * emphasize impact without repeating every Professional Impact number.
 *
 * `otherWork` (ADR-021): the quieter secondary section. Merges the former
 * Case Studies (Steel Indicator, Developer Market Research) and Research &
 * Recognition (Wavelet thesis, FarmIA, Retail Sales Forecasting) content,
 * plus Employee Attrition Prediction moved out of Selected Work. Copy is the
 * earlier verified copy; FarmIA and Retail are framed strictly as historical/
 * academic work. Application Job stays removed (ADR-016).
 *
 * `capabilities` (M1-07, ADR-017, ADR-019): a synthesis of public evidence
 * only. Still excludes RAG, Multi-Agent/dynamic agent systems,
 * LangChain/CrewAI, Vector Databases, PySpark, CI/CD and cloud infra.
 * AI Closer (private) is not used as evidence for any capability. Empório's
 * BM25/embeddings runs are retrieval experiments, not a RAG architecture.
 *
 * `contact` (M1-08): the submit wiring (POST /api/contact, Supabase + Resend,
 * ADR-014) lives in `src/app/api/contact/route.ts` and
 * `src/components/forms/ContactForm.tsx` — this object only supplies copy.
 */

export type NavItem = {
  label: string;
  href: string;
};

export type Pillar = {
  title: string;
  description: string;
};

/** A real image file; width/height are its real pixel size (never invented). */
export type MediaImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

/** Editorial pipeline diagrams rendered by ProjectVisual (projects without real media). */
export type ProjectVisualKind = "datalab" | "closer" | "procurement";

/**
 * ADR-021: one media slot per featured project. Images and videos render in
 * a bounded 16:10 stage (Home = preview, never the full asset); `focus` is a
 * CSS object-position for the useful region.
 */
export type ProjectMedia =
  | { kind: "diagram"; diagram: ProjectVisualKind }
  | { kind: "image"; image: MediaImage; focus?: string }
  | {
      kind: "video";
      sources: { src: string; type: "video/webm" | "video/mp4" }[];
      /** Shown before playback and as the reduced-motion fallback. */
      poster: MediaImage;
      focus?: string;
    };

/** Small, real-information micrographics. No invented numbers. */
export type ProjectEvidence =
  | { kind: "fact"; label: string; value: string; note?: string }
  | { kind: "metric"; label: string; value: string; note: string }
  | {
      kind: "comparison";
      label: string;
      joiner: "vs" | "→";
      items: [{ label: string; value: string }, { label: string; value: string }];
      note: string;
    };

export type ProjectNote = {
  label: string;
  text: string;
};

export type FeaturedProject = {
  index: string;
  category: string;
  /** Maturity/context line, always visible (e.g. "IN DEVELOPMENT", "TECHNICAL CASE · FICTIONAL STORE"). */
  status: string;
  title: string;
  headline: string;
  description: string[];
  notes?: ProjectNote[];
  evidence: ProjectEvidence[];
  stack: string;
  media: ProjectMedia;
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
  projects: FeaturedProject[];
};

export type ImpactItem = {
  value: string;
  label: string;
  description: string;
};

export type ProfessionalImpactContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy: string;
  items: ImpactItem[];
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

export type OtherWorkItem = {
  kicker: string;
  title: string;
  /** Institution/competition/year — an identity fact, not translated (same rationale as Experience). */
  context?: string;
  description: string;
  /** Optional quiet callout (a placement, a result, a status flag) — never a metric tile. */
  evidence?: string;
  metadata?: string;
  links: { label: string; href: string }[];
};

export type OtherWorkGroup = {
  title: string;
  items: OtherWorkItem[];
};

export type OtherWorkContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy: string;
  groups: OtherWorkGroup[];
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
  supportingCopy: string[];
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

export type AboutContent = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  paragraphs: string[];
  backgroundLabel: string;
  background: string[];
  directionLabel: string;
  direction: string[];
  pillars: Pillar[];
  /** Only a REAL photo of Matheus (ADR-021). None exists yet — suggested path public/about/matheus-portrait.webp, 4:5. */
  portrait?: MediaImage;
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
  };
  hero: {
    eyebrow: string;
    name: string;
    headlineLine1: string;
    headlineLine2: string;
    paragraphs: string[];
    primaryCta: string;
    primaryCtaHref: string;
    scrollCue: string;
    scrollCueHref: string;
  };
  professionalImpact: ProfessionalImpactContent;
  selectedWork: SelectedWorkContent;
  experience: ExperienceContent;
  otherWork: OtherWorkContent;
  about: AboutContent;
  capabilities: CapabilitiesContent;
  contact: ContactContent;
  footer: FooterContent;
};

/** Real screenshot copied unmodified from mori-mkm/emporio-ai-assistant examples/screenshots (976x1022 px, ADR-019). */
const EMPORIO_SCREENSHOT = {
  src: "/projects/emporio-ai-assistant/03-price-installments.png",
  width: 976,
  height: 1022,
};
/** Shows the chat panel: price answer, the 12x question and the start of the installment answer. */
const EMPORIO_FOCUS = "50% 30%";

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    brand: "Matheus Mori",
    nav: [
      { label: "Impact", href: "#impact" },
      { label: "Projects", href: "#projects" },
      { label: "Experience", href: "#experience" },
      { label: "Other Work", href: "#other-work" },
      { label: "About", href: "#about" },
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
    },
    hero: {
      eyebrow: "AI ENGINEER · DATA SCIENTIST",
      name: "Matheus Mori",
      headlineLine1: "I build AI and data products",
      headlineLine2: "that solve practical problems.",
      paragraphs: [
        "I'm a statistician with professional experience in data and analytics since 2021, building solutions across growth, financial services, and business operations.",
        "Today, I combine that experience with hands-on AI engineering to develop LLM applications, machine learning systems, and analytical tools — with an emphasis on measurable results, reliability, and sound technical decisions.",
      ],
      primaryCta: "Explore My Work",
      primaryCtaHref: "#projects",
      scrollCue: "Scroll",
      scrollCueHref: "#impact",
    },
    professionalImpact: {
      eyebrow: "01 / PROFESSIONAL IMPACT",
      headlineLine1: "Experience that",
      headlineLine2: "delivers results.",
      supportingCopy:
        "Before building AI applications, I spent years applying statistics, experimentation, and data analytics to real business challenges. These are some of the outcomes I've helped deliver.",
      items: [
        {
          value: "~11%",
          label: "HIGHER CONVERSION",
          description:
            "Data-driven experimentation and growth optimizations at Contmatic contributed to an approximately 11% increase in conversion.",
        },
        {
          value: "~20%",
          label: "LOWER ACQUISITION COST",
          description:
            "Analytics and experimentation initiatives contributed to an approximately 20% reduction in customer acquisition cost at Contmatic.",
        },
        {
          value: "1 week → 1 day",
          label: "REPORTING WORKFLOW",
          description:
            "Redesigned and automated international reporting workflows at BIP Consulting, reducing monthly consolidation time from approximately one week to one day.",
        },
        {
          value: "4,000+",
          label: "EMPLOYEES COVERED",
          description:
            "Developed enterprise analytics solutions at Banco BV supporting workforce and organizational performance reporting for a population of over 4,000 employees.",
        },
      ],
    },
    selectedWork: {
      eyebrow: "02 / SELECTED AI & DATA PROJECTS",
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
          status: "PROOF OF CONCEPT · LOCAL-FIRST",
          title: "DataLab OS",
          headline:
            "An AI-powered Data Science workflow with independent quality control.",
          description: [
            "A multi-agent system that transforms tabular datasets into exploratory analysis, baseline models, and structured reports.",
            "An independent review stage checks methodological validity and can reject results when it detects issues such as target leakage. A live operations console makes decisions, execution steps, and generated artifacts traceable.",
          ],
          notes: [
            {
              label: "KEY DIFFERENTIATOR",
              text: "Data Science automation with built-in methodological review and transparent execution.",
            },
          ],
          evidence: [
            { kind: "fact", label: "RUNTIME", value: "LOCAL-FIRST" },
            { kind: "fact", label: "ORCHESTRATION", value: "LANGGRAPH" },
            { kind: "fact", label: "SYSTEM / REVIEW", value: "INDEPENDENT GATE" },
            { kind: "fact", label: "OBSERVABILITY", value: "TRACEABLE EXECUTION" },
          ],
          stack: "Python · LangGraph · FastAPI · Next.js · React Flow · scikit-learn",
          media: { kind: "diagram", diagram: "datalab" },
          githubHref: "https://github.com/mori-mkm/datalab-os",
        },
        {
          index: "02",
          category: "AI ENGINEERING · EVALUATION",
          status: "TECHNICAL CASE · FICTIONAL STORE",
          title: "Empório AI Assistant",
          headline:
            "A customer-support AI assistant built for accuracy and cost efficiency.",
          description: [
            "A full-stack AI assistant that answers customer questions about products, pricing, availability, and store policies using verified information and controlled tools.",
            "The system was evaluated against alternative retrieval approaches, with explicit safeguards against unsupported answers and incorrect pricing calculations.",
          ],
          evidence: [
            {
              kind: "comparison",
              label: "EVAL / DEVELOPMENT",
              joiner: "vs",
              items: [
                { label: "FULL POLICY CONTEXT", value: "~93%" },
                { label: "BM25 RETRIEVAL", value: "80%" },
              ],
              note: "28/30 vs 24/30 development scenarios (~13 pts). Internal, controlled comparison on a small static manual — not an industry benchmark.",
            },
            {
              kind: "metric",
              label: "CACHE / OBSERVED COST",
              value: "≈ −71%",
              note: "Prompt caching in comparable internal runs, with no observed quality decrease.",
            },
            {
              kind: "metric",
              label: "VALIDATION / RESERVED",
              value: "9/10",
              note: "10 reserved cases, run once after the configuration freeze.",
            },
          ],
          stack:
            "Python · FastAPI · React · TypeScript · SQLite · LLM Tool Calling · Evaluation",
          media: {
            kind: "image",
            image: {
              ...EMPORIO_SCREENSHOT,
              alt: "Empório AI Assistant chat interface, in Portuguese, answering the price of a Takamine GD20 acoustic guitar and the value of each installment in a 12-installment plan.",
            },
            focus: EMPORIO_FOCUS,
          },
          githubHref: "https://github.com/mori-mkm/emporio-ai-assistant",
        },
        {
          index: "03",
          category: "APPLIED AI · SALES INTELLIGENCE",
          status: "IN DEVELOPMENT · PRIVATE REPOSITORY",
          title: "AI Closer",
          headline:
            "Turning live sales conversations into actionable intelligence.",
          description: [
            "An AI-powered sales copilot that analyzes conversations during Google Meet calls, identifies objections, buying signals, and sales opportunities, and recommends the most relevant next action for the seller.",
            "Instead of overwhelming users with alerts, the system combines conversational context, structured commercial memory, and retrieval-augmented knowledge to prioritize one actionable recommendation at a time.",
          ],
          notes: [
            {
              label: "KEY DIFFERENTIATOR",
              text: "Real-time sales intelligence with evidence-based recommendations and intelligent action prioritization.",
            },
            {
              label: "STATUS",
              text: "Collaborative prototype under active development. Core live conversation processing, commercial intelligence modules, and recommendation prioritization are implemented. Human-reviewed evaluation and end-to-end reliability validation are ongoing.",
            },
          ],
          evidence: [
            {
              kind: "fact",
              label: "ROLE / PROJECT",
              value: "PRODUCT OWNER · TECHNICAL ARCHITECTURE",
              note: "I lead product direction, architectural decisions, technical integration, and evaluation strategy within a collaborative development team.",
            },
            { kind: "fact", label: "SYSTEM / INPUT", value: "LIVE CONVERSATION INTELLIGENCE" },
            { kind: "fact", label: "SYSTEM / CONTEXT", value: "STRUCTURED COMMERCIAL MEMORY" },
            { kind: "fact", label: "SYSTEM / GUIDANCE", value: "KNOWLEDGE-AUGMENTED GUIDANCE" },
            { kind: "fact", label: "SYSTEM / OUTPUT", value: "ONE NEXT ACTION" },
          ],
          stack:
            "Python · FastAPI · OpenAI · Supabase · PostgreSQL/pgvector · RAG · Browser Extension · Streamlit",
          media: { kind: "diagram", diagram: "closer" },
        },
        {
          index: "04",
          category: "MACHINE LEARNING · DATA PRODUCT",
          status: "PUBLIC DATA · LIVE DEMO",
          title: "Procurement Intelligence",
          headline:
            "Turning procurement data into actionable purchasing intelligence.",
          description: [
            "An interactive analytics platform that uses public procurement data to analyze spending patterns, identify pricing anomalies, and surface potential savings opportunities.",
            "The system combines data engineering, statistical benchmarks, and machine learning to support more informed purchasing decisions.",
          ],
          evidence: [
            {
              kind: "comparison",
              label: "COVERAGE / EVALUATED ITEMS",
              joiner: "→",
              items: [
                { label: "BASELINE", value: "~70–80%" },
                { label: "ML (LIGHTGBM)", value: "100%" },
              ],
              note: "Similar median prediction error: machine learning expanded coverage without a meaningful accuracy advantage over the simpler baseline.",
            },
            {
              kind: "metric",
              label: "DATA / PUBLIC RECORDS",
              value: "5.7M+",
              note: "Brazilian public procurement transactions — a proxy for corporate procurement.",
            },
            {
              kind: "fact",
              label: "OUTPUT / REVIEW",
              value: "POTENTIAL SAVINGS",
              note: "Flagged opportunities require human review; no overpricing is confirmed.",
            },
          ],
          stack: "Python · SQL · DuckDB · LightGBM · Streamlit",
          media: { kind: "diagram", diagram: "procurement" },
          githubHref: "https://github.com/mori-mkm/procurement-intelligence",
          demoHref: "https://procurement-intelligence-mkm.streamlit.app/",
        },
      ],
    },
    experience: {
      eyebrow: "03 / EXPERIENCE",
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
            "Developed analytics products supporting strategic reporting and organizational performance for a population of over 4,000 employees, with reporting accessed across multiple leadership levels.",
          metadata: "SQL Server · Power BI · Python · Databricks",
        },
        {
          period: "2024 — 2025",
          company: "BIP Consulting",
          role: "People Analytics · Data Analytics",
          description:
            "Automated and redesigned international reporting workflows, reducing a monthly process from approximately one week to one day.",
          metadata: "Python · Power Query · Power Automate · ETL",
        },
        {
          period: "2022 — 2023",
          company: "Contmatic Phoenix",
          role: "Data Science Junior · Growth & Marketing Analytics",
          description:
            "Applied experimentation, customer analytics, and segmentation to growth initiatives that contributed to higher conversion and lower acquisition costs.",
          metadata: "Python · SQL · Experimentation · Growth Analytics",
        },
        {
          period: "2021 — 2022",
          company: "Rocketseat",
          role: "Data Science Junior · Growth & Customer Analytics",
          description:
            "Used customer segmentation and predictive modeling to support digital education growth initiatives, including work associated with an approximately 15% increase in course-purchase conversion.",
          metadata: "Python · R · SQL · Customer Analytics",
        },
      ],
    },
    otherWork: {
      eyebrow: "04 / OTHER WORK & RESEARCH",
      headlineLine1: "More projects, research",
      headlineLine2: "and recognition.",
      supportingCopy:
        "Earlier projects, academic research and recognition across statistics, forecasting and applied data science.",
      groups: [
        {
          title: "OTHER PROJECTS",
          items: [
            {
              kicker: "DATA ENGINEERING · ECONOMIC INTELLIGENCE",
              title: "Steel Indicator",
              description:
                "An auditable economic indicator built from fragmented public data and changing policy parameters, with immutable vintages, source provenance and a versioned index methodology with declared proxies.",
              evidence: "529 AUTOMATED TESTS",
              links: [{ label: "GitHub", href: "https://github.com/mori-mkm/steel-indicator" }],
            },
            {
              kicker: "MACHINE LEARNING · PEOPLE ANALYTICS",
              title: "Employee Attrition Prediction",
              description:
                "An interpretable classification workflow focused on identifying employees at higher attrition risk.",
              evidence: "74% RECALL · SMOTE · THRESHOLD OPTIMIZATION · 5-FOLD CV",
              metadata: "Python · Scikit-learn · Imbalanced-learn",
              links: [{ label: "GitHub", href: "https://github.com/mori-mkm/HR-Predict" }],
            },
          ],
        },
        {
          title: "RESEARCH & RECOGNITION",
          items: [
            {
              kicker: "APPLIED RESEARCH · DATA SCIENCE",
              title: "Developer Market Research",
              context: "Rocketseat",
              description:
                "Research and data analysis developed during my time at Rocketseat, with findings on women's representation in technology reaching CNN Brasil.",
              evidence: "~20% REPORTED REPRESENTATION · CNN BRASIL COVERAGE",
              links: [{ label: "Watch coverage", href: "https://lnkd.in/p/djifF6qh" }],
            },
            {
              kicker: "RESEARCH",
              title: "Wavelet Multivariate Time Series Analysis",
              context: "UFSCar · Undergraduate Thesis · 2023",
              description:
                "Undergraduate statistics research examining how relationships among financial markets change across time and scale using wavelet methods.",
              metadata: "Time Series · Statistics · Wavelets",
              links: [
                {
                  label: "View research",
                  href: "https://github.com/mori-mkm/UFSCar/tree/main/undergraduate-thesis",
                },
              ],
            },
            {
              kicker: "RECOGNITION",
              title: "FarmIA — Santander Data Challenge",
              context: "1st Place · 2020",
              description:
                "First-place data challenge project developed by a five-person team, using statistical modeling and agrometeorological data to support agricultural planning.",
              evidence: "1ST PLACE · 100+ TEAMS",
              metadata: "Applied Data Science · Agriculture",
              links: [{ label: "GitHub", href: "https://github.com/mori-mkm/FarmAI.Hackaton" }],
            },
            {
              kicker: "RESEARCH",
              title: "Retail Sales Forecasting",
              context: "Digital House · Final Data Science Project",
              description:
                "Academic forecasting project exploring monthly store-level sales with SARIMAX, chronological validation and a historical Flask prototype.",
              evidence: "ACADEMIC PROJECT",
              metadata: "Forecasting · SARIMAX · Time Series",
              links: [
                { label: "GitHub", href: "https://github.com/mori-mkm/retail-sales-forecasting" },
              ],
            },
          ],
        },
      ],
    },
    about: {
      eyebrow: "05 / ABOUT",
      headlineLine1: "A statistician's approach",
      headlineLine2: "to building AI.",
      paragraphs: [
        "My background is in Statistics, and my professional experience spans data science, growth analytics, business intelligence, and enterprise data solutions.",
        "I've worked on problems involving customer acquisition, conversion, retention, operational reporting, and organizational performance — learning how to connect technical work with real business needs.",
        "That experience shapes how I approach AI engineering today: start with the problem, choose the simplest effective solution, and evaluate whether it works.",
        "I care about more than making models run. I care about building systems that are understandable, reliable, and useful.",
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
          description: "LLM applications, tool-using agents, evaluation and observable AI systems.",
        },
        {
          title: "DATA PRODUCTS",
          description:
            "Turning models and analysis into tools people can actually use.",
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
            "AI Evaluation",
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
      supportingCopy: [
        "I'm interested in opportunities where data science, machine learning, and AI engineering can create meaningful business value.",
        "If you're building AI-powered products, solving complex data challenges, or looking for someone who combines technical execution with business understanding, I'd be glad to connect.",
      ],
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
      { label: "Impacto", href: "#impact" },
      { label: "Projetos", href: "#projects" },
      { label: "Experiência", href: "#experience" },
      { label: "Outros Trabalhos", href: "#other-work" },
      { label: "Sobre", href: "#about" },
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
    },
    hero: {
      eyebrow: "ENGENHEIRO DE IA · CIENTISTA DE DADOS",
      name: "Matheus Mori",
      headlineLine1: "Construo produtos de IA e dados",
      headlineLine2: "para resolver problemas reais.",
      paragraphs: [
        "Sou estatístico, com experiência profissional em dados e analytics desde 2021, construindo soluções para growth, serviços financeiros e operações de negócio.",
        "Hoje, combino essa experiência com AI engineering na prática para desenvolver aplicações com LLMs, sistemas de machine learning e ferramentas analíticas — com foco em resultados mensuráveis, confiabilidade e boas decisões técnicas.",
      ],
      primaryCta: "Conheça meus projetos",
      primaryCtaHref: "#projects",
      scrollCue: "Rolar",
      scrollCueHref: "#impact",
    },
    professionalImpact: {
      eyebrow: "01 / IMPACTO PROFISSIONAL",
      headlineLine1: "Experiência que",
      headlineLine2: "gera resultados.",
      supportingCopy:
        "Antes de construir aplicações de IA, passei anos aplicando estatística, experimentação e analytics a desafios reais de negócio. Estes são alguns dos resultados que ajudei a entregar.",
      items: [
        {
          value: "~11%",
          label: "MAIS CONVERSÃO",
          description:
            "Experimentação orientada por dados e otimizações de growth na Contmatic contribuíram para um aumento de aproximadamente 11% na conversão.",
        },
        {
          value: "~20%",
          label: "MENOR CUSTO DE AQUISIÇÃO",
          description:
            "Iniciativas de analytics e experimentação contribuíram para uma redução de aproximadamente 20% no custo de aquisição de clientes na Contmatic.",
        },
        {
          value: "1 semana → 1 dia",
          label: "FLUXO DE REPORTING",
          description:
            "Redesenhei e automatizei fluxos de reporting internacional na BIP Consulting, reduzindo o tempo de consolidação mensal de cerca de uma semana para um dia.",
        },
        {
          value: "4.000+",
          label: "COLABORADORES COBERTOS",
          description:
            "Desenvolvi soluções analíticas corporativas no Banco BV para reporting de força de trabalho e performance organizacional de uma população de mais de 4.000 colaboradores.",
        },
      ],
    },
    selectedWork: {
      eyebrow: "02 / PROJETOS DE IA & DADOS",
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
          status: "PROVA DE CONCEITO · LOCAL-FIRST",
          title: "DataLab OS",
          headline:
            "Um workflow de Data Science com IA e controle de qualidade independente.",
          description: [
            "Um sistema multiagente que transforma datasets tabulares em análise exploratória, modelos baseline e relatórios estruturados.",
            "Uma etapa de revisão independente verifica a validade metodológica e pode rejeitar resultados quando detecta problemas como target leakage. Um console de operações ao vivo torna rastreáveis as decisões, as etapas de execução e os artefatos gerados.",
          ],
          notes: [
            {
              label: "DIFERENCIAL",
              text: "Automação de Data Science com revisão metodológica embutida e execução transparente.",
            },
          ],
          evidence: [
            { kind: "fact", label: "EXECUÇÃO", value: "LOCAL-FIRST" },
            { kind: "fact", label: "ORQUESTRAÇÃO", value: "LANGGRAPH" },
            { kind: "fact", label: "SISTEMA / REVISÃO", value: "GATE INDEPENDENTE" },
            { kind: "fact", label: "OBSERVABILIDADE", value: "EXECUÇÃO RASTREÁVEL" },
          ],
          stack: "Python · LangGraph · FastAPI · Next.js · React Flow · scikit-learn",
          media: { kind: "diagram", diagram: "datalab" },
          githubHref: "https://github.com/mori-mkm/datalab-os",
        },
        {
          index: "02",
          category: "ENGENHARIA DE IA · AVALIAÇÃO",
          status: "CASE TÉCNICO · LOJA FICTÍCIA",
          title: "Empório AI Assistant",
          headline:
            "Um assistente de IA para atendimento construído para precisão e eficiência de custo.",
          description: [
            "Um assistente de IA full-stack que responde a perguntas de clientes sobre produtos, preços, disponibilidade e políticas da loja usando informações verificadas e ferramentas controladas.",
            "O sistema foi avaliado contra abordagens alternativas de retrieval, com salvaguardas explícitas contra respostas sem suporte e cálculos de preço incorretos.",
          ],
          evidence: [
            {
              kind: "comparison",
              label: "AVALIAÇÃO / DESENVOLVIMENTO",
              joiner: "vs",
              items: [
                { label: "CONTEXTO COMPLETO DAS POLÍTICAS", value: "~93%" },
                { label: "RETRIEVAL BM25", value: "80%" },
              ],
              note: "28/30 vs 24/30 cenários de desenvolvimento (~13 p.p.). Comparação interna e controlada, num manual pequeno e estático — não é um benchmark de mercado.",
            },
            {
              kind: "metric",
              label: "CACHE / CUSTO OBSERVADO",
              value: "≈ −71%",
              note: "Prompt caching em execuções internas comparáveis, sem queda de qualidade observada.",
            },
            {
              kind: "metric",
              label: "VALIDAÇÃO / RESERVADA",
              value: "9/10",
              note: "10 casos reservados, executados uma vez após o congelamento da configuração.",
            },
          ],
          stack:
            "Python · FastAPI · React · TypeScript · SQLite · LLM Tool Calling · Evaluation",
          media: {
            kind: "image",
            image: {
              ...EMPORIO_SCREENSHOT,
              alt: "Interface de chat do Empório AI Assistant respondendo ao preço de um violão Takamine GD20 e ao valor de cada parcela em 12x.",
            },
            focus: EMPORIO_FOCUS,
          },
          githubHref: "https://github.com/mori-mkm/emporio-ai-assistant",
        },
        {
          index: "03",
          category: "IA APLICADA · INTELIGÊNCIA DE VENDAS",
          status: "EM DESENVOLVIMENTO · REPOSITÓRIO PRIVADO",
          title: "AI Closer",
          headline:
            "Transformando conversas de vendas ao vivo em inteligência acionável.",
          description: [
            "Um copiloto de vendas com IA que analisa conversas durante chamadas no Google Meet, identifica objeções, sinais de compra e oportunidades de venda, e recomenda a próxima ação mais relevante para o vendedor.",
            "Em vez de sobrecarregar o usuário com alertas, o sistema combina o contexto da conversa, memória comercial estruturada e conhecimento recuperado via RAG para priorizar uma recomendação acionável por vez.",
          ],
          notes: [
            {
              label: "DIFERENCIAL",
              text: "Inteligência de vendas em tempo real, com recomendações baseadas em evidências e priorização inteligente de ações.",
            },
            {
              label: "STATUS",
              text: "Protótipo colaborativo em desenvolvimento ativo. O processamento de conversas ao vivo, os módulos de inteligência comercial e a priorização de recomendações estão implementados. A avaliação com revisão humana e a validação de confiabilidade ponta a ponta estão em andamento.",
            },
          ],
          evidence: [
            {
              kind: "fact",
              label: "PAPEL / PROJETO",
              value: "PRODUCT OWNER · ARQUITETURA TÉCNICA",
              note: "Lidero a direção de produto, as decisões de arquitetura, a integração técnica e a estratégia de avaliação dentro de um time de desenvolvimento colaborativo.",
            },
            { kind: "fact", label: "SISTEMA / ENTRADA", value: "INTELIGÊNCIA DE CONVERSA AO VIVO" },
            { kind: "fact", label: "SISTEMA / CONTEXTO", value: "MEMÓRIA COMERCIAL ESTRUTURADA" },
            { kind: "fact", label: "SISTEMA / ORIENTAÇÃO", value: "ORIENTAÇÃO AUMENTADA POR CONHECIMENTO" },
            { kind: "fact", label: "SISTEMA / SAÍDA", value: "UMA PRÓXIMA AÇÃO" },
          ],
          stack:
            "Python · FastAPI · OpenAI · Supabase · PostgreSQL/pgvector · RAG · Browser Extension · Streamlit",
          media: { kind: "diagram", diagram: "closer" },
        },
        {
          index: "04",
          category: "MACHINE LEARNING · PRODUTO DE DADOS",
          status: "DADOS PÚBLICOS · DEMO AO VIVO",
          title: "Procurement Intelligence",
          headline:
            "Transformando dados de compras em inteligência acionável para decisões de compra.",
          description: [
            "Uma plataforma analítica interativa que usa dados públicos de compras governamentais para analisar padrões de gasto, identificar anomalias de preço e evidenciar potenciais oportunidades de economia.",
            "O sistema combina engenharia de dados, benchmarks estatísticos e machine learning para apoiar decisões de compra mais bem informadas.",
          ],
          evidence: [
            {
              kind: "comparison",
              label: "COBERTURA / ITENS AVALIADOS",
              joiner: "→",
              items: [
                { label: "BASELINE", value: "~70–80%" },
                { label: "ML (LIGHTGBM)", value: "100%" },
              ],
              note: "Erro mediano de previsão semelhante: o machine learning ampliou a cobertura sem demonstrar vantagem relevante de precisão sobre o baseline mais simples.",
            },
            {
              kind: "metric",
              label: "DADOS / REGISTROS PÚBLICOS",
              value: "5,7M+",
              note: "Transações de compras públicas brasileiras — um proxy para procurement corporativo.",
            },
            {
              kind: "fact",
              label: "SAÍDA / REVISÃO",
              value: "POTENCIAL DE ECONOMIA",
              note: "Oportunidades sinalizadas exigem revisão humana; nenhum sobrepreço é confirmado.",
            },
          ],
          stack: "Python · SQL · DuckDB · LightGBM · Streamlit",
          media: { kind: "diagram", diagram: "procurement" },
          githubHref: "https://github.com/mori-mkm/procurement-intelligence",
          demoHref: "https://procurement-intelligence-mkm.streamlit.app/",
        },
      ],
    },
    experience: {
      eyebrow: "03 / EXPERIÊNCIA",
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
            "Desenvolvi produtos analíticos para reporting estratégico e performance organizacional de uma população de mais de 4.000 colaboradores, com relatórios acessados por diferentes níveis de liderança.",
          metadata: "SQL Server · Power BI · Python · Databricks",
        },
        {
          period: "2024 — 2025",
          company: "BIP Consulting",
          role: "People Analytics · Data Analytics",
          description:
            "Automatizei e redesenhei fluxos de reporting internacional, reduzindo um processo mensal de cerca de uma semana para um dia.",
          metadata: "Python · Power Query · Power Automate · ETL",
        },
        {
          period: "2022 — 2023",
          company: "Contmatic Phoenix",
          role: "Data Science Junior · Growth & Marketing Analytics",
          description:
            "Apliquei experimentação, analytics de clientes e segmentação a iniciativas de growth que contribuíram para mais conversão e menor custo de aquisição.",
          metadata: "Python · SQL · Experimentation · Growth Analytics",
        },
        {
          period: "2021 — 2022",
          company: "Rocketseat",
          role: "Data Science Junior · Growth & Customer Analytics",
          description:
            "Usei segmentação de clientes e modelagem preditiva para apoiar iniciativas de crescimento em educação digital, incluindo um trabalho associado a um aumento de cerca de 15% na conversão de compra de cursos.",
          metadata: "Python · R · SQL · Customer Analytics",
        },
      ],
    },
    otherWork: {
      eyebrow: "04 / OUTROS TRABALHOS & PESQUISA",
      headlineLine1: "Mais projetos, pesquisas",
      headlineLine2: "e reconhecimentos.",
      supportingCopy:
        "Projetos anteriores, pesquisa acadêmica e reconhecimentos em estatística, forecasting e ciência de dados aplicada.",
      groups: [
        {
          title: "OUTROS PROJETOS",
          items: [
            {
              kicker: "ENGENHARIA DE DADOS · INTELIGÊNCIA ECONÔMICA",
              title: "Steel Indicator",
              description:
                "Um indicador econômico auditável construído a partir de dados públicos fragmentados e parâmetros de política em constante mudança, com vintages imutáveis, rastreabilidade de origem dos dados e metodologia de índice versionada com proxies declarados.",
              evidence: "529 TESTES AUTOMATIZADOS",
              links: [{ label: "GitHub", href: "https://github.com/mori-mkm/steel-indicator" }],
            },
            {
              kicker: "MACHINE LEARNING · PEOPLE ANALYTICS",
              title: "Employee Attrition Prediction",
              description:
                "Um workflow de classificação interpretável focado em identificar funcionários com maior risco de desligamento.",
              evidence: "74% RECALL · SMOTE · OTIMIZAÇÃO DE THRESHOLD · VALIDAÇÃO CRUZADA 5-FOLD",
              metadata: "Python · Scikit-learn · Imbalanced-learn",
              links: [{ label: "GitHub", href: "https://github.com/mori-mkm/HR-Predict" }],
            },
          ],
        },
        {
          title: "PESQUISA & RECONHECIMENTO",
          items: [
            {
              kicker: "PESQUISA APLICADA · DATA SCIENCE",
              title: "Pesquisa sobre o Mercado de Tecnologia",
              context: "Rocketseat",
              description:
                "Pesquisa e análise de dados desenvolvidas durante minha atuação na Rocketseat, com resultados sobre a participação feminina no mercado de tecnologia chegando à CNN Brasil.",
              evidence: "~20% DE REPRESENTAÇÃO REPORTADA · COBERTURA DA CNN BRASIL",
              links: [{ label: "Assistir cobertura", href: "https://lnkd.in/p/djifF6qh" }],
            },
            {
              kicker: "PESQUISA",
              title: "Wavelet Multivariate Time Series Analysis",
              context: "UFSCar · Undergraduate Thesis · 2023",
              description:
                "Pesquisa de graduação em Estatística investigando como as relações entre mercados financeiros mudam ao longo do tempo e em diferentes escalas utilizando métodos wavelet.",
              metadata: "Time Series · Statistics · Wavelets",
              links: [
                {
                  label: "Ver pesquisa",
                  href: "https://github.com/mori-mkm/UFSCar/tree/main/undergraduate-thesis",
                },
              ],
            },
            {
              kicker: "RECONHECIMENTO",
              title: "FarmIA — Santander Data Challenge",
              context: "1º Lugar · 2020",
              description:
                "Projeto vencedor de um data challenge desenvolvido por uma equipe de cinco pessoas, utilizando modelagem estatística e dados agrometeorológicos para apoiar o planejamento agrícola.",
              evidence: "1º LUGAR · 100+ EQUIPES",
              metadata: "Applied Data Science · Agriculture",
              links: [{ label: "GitHub", href: "https://github.com/mori-mkm/FarmAI.Hackaton" }],
            },
            {
              kicker: "PESQUISA",
              title: "Retail Sales Forecasting",
              context: "Digital House · Final Data Science Project",
              description:
                "Projeto acadêmico de forecasting de vendas mensais por loja utilizando SARIMAX, validação cronológica e um protótipo histórico em Flask.",
              evidence: "PROJETO ACADÊMICO",
              metadata: "Forecasting · SARIMAX · Time Series",
              links: [
                { label: "GitHub", href: "https://github.com/mori-mkm/retail-sales-forecasting" },
              ],
            },
          ],
        },
      ],
    },
    about: {
      eyebrow: "05 / SOBRE",
      headlineLine1: "A abordagem de um estatístico",
      headlineLine2: "para construir IA.",
      paragraphs: [
        "Minha formação é em Estatística, e minha experiência profissional passa por ciência de dados, growth analytics, business intelligence e soluções de dados corporativas.",
        "Trabalhei com problemas de aquisição de clientes, conversão, retenção, reporting operacional e performance organizacional — aprendendo a conectar o trabalho técnico às necessidades reais do negócio.",
        "Essa experiência define como abordo AI engineering hoje: começar pelo problema, escolher a solução eficaz mais simples e avaliar se ela realmente funciona.",
        "Não me importo apenas em fazer modelos rodarem. Me importo em construir sistemas compreensíveis, confiáveis e úteis.",
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
          description: "Aplicações com LLM, agentes com ferramentas, avaliação e sistemas de IA observáveis.",
        },
        {
          title: "PRODUTOS DE DADOS",
          description:
            "Transformando modelos e análises em ferramentas que as pessoas realmente usam.",
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
            "Avaliação de IA",
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
      supportingCopy: [
        "Tenho interesse em oportunidades em que ciência de dados, machine learning e AI engineering possam gerar valor real para o negócio.",
        "Se você está construindo produtos com IA, resolvendo desafios complexos de dados ou procurando alguém que una execução técnica e entendimento de negócio, será um prazer conversar.",
      ],
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
