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
 */

export type NavItem = {
  label: string;
  href: string;
};

export type Pillar = {
  title: string;
  description: string;
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
      { label: "Writing", href: "#writing" },
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
      eyebrow: "DATA SCIENCE · AI ENGINEERING",
      name: "Matheus Mori",
      headlineLine1: "Data Scientist",
      headlineLine2: "& AI Engineer",
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
  },

  pt: {
    brand: "Matheus Mori",
    nav: [
      { label: "Sobre", href: "#about" },
      { label: "Projetos", href: "#projects" },
      { label: "Estudos de Caso", href: "#case-studies" },
      { label: "Experiência", href: "#experience" },
      { label: "Pesquisa", href: "#research" },
      { label: "Artigos", href: "#writing" },
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
      eyebrow: "DATA SCIENCE · ENGENHARIA DE IA",
      name: "Matheus Mori",
      headlineLine1: "Cientista de Dados",
      headlineLine2: "& Engenheiro de IA",
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
  },
};
