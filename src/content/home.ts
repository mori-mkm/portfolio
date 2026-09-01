import type { Locale } from "@/lib/i18n";

type HomeContent = {
  name: string;
  roleLine1: string;
  roleLine2: string;
  headline: string;
  description: string;
  primaryCta: string;
  github: string;
  resume: string;
};

export const homeContent: Record<Locale, HomeContent> = {
  en: {
    name: "Matheus Mori",
    roleLine1: "Data Scientist",
    roleLine2: "& AI Engineer",
    headline:
      "Building production-oriented AI, machine learning and data products.",
    description:
      "I work across data, machine learning and AI — turning complex problems into systems people can actually use.",
    primaryCta: "Explore my work",
    github: "GitHub",
    resume: "Resume",
  },

  pt: {
    name: "Matheus Mori",
    roleLine1: "Cientista de Dados",
    roleLine2: "& Engenheiro de IA",
    headline:
      "Construindo produtos de IA, machine learning e dados orientados à produção.",
    description:
      "Atuo entre dados, machine learning e inteligência artificial — transformando problemas complexos em sistemas que as pessoas realmente podem usar.",
    primaryCta: "Conheça meus projetos",
    github: "GitHub",
    resume: "Currículo",
  },
};