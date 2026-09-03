import { notFound } from "next/navigation";

import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Experience } from "@/components/sections/Experience";
import { ResearchRecognition } from "@/components/sections/ResearchRecognition";
import { Capabilities } from "@/components/sections/Capabilities";
import { Contact } from "@/components/sections/Contact";
import { homeContent } from "@/content/home";
import { isValidLocale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const content = homeContent[locale];

  return (
    <>
      <Header
        locale={locale}
        brand={content.brand}
        nav={content.nav}
        languageSwitcher={content.languageSwitcher}
        menuToggle={content.menuToggle}
        github={{
          label: content.externalLinks.github,
          href: content.externalLinks.githubHref,
        }}
        linkedin={{
          label: content.externalLinks.linkedin,
          href: content.externalLinks.linkedinHref,
        }}
        resume={{
          label: content.externalLinks.resume,
          href: content.externalLinks.resumeHref,
        }}
      />
      <main>
        <Hero
          eyebrow={content.hero.eyebrow}
          name={content.hero.name}
          headlineLine1={content.hero.headlineLine1}
          headlineLine2={content.hero.headlineLine2}
          descriptor={content.hero.descriptor}
          supportingCopy={content.hero.supportingCopy}
          primaryCta={content.hero.primaryCta}
          primaryCtaHref={content.hero.primaryCtaHref}
          scrollCue={content.hero.scrollCue}
          scrollCueHref={content.hero.scrollCueHref}
          github={{
            label: content.externalLinks.github,
            href: content.externalLinks.githubHref,
          }}
          resume={{
            label: content.externalLinks.resume,
            href: content.externalLinks.resumeHref,
          }}
        />
        <About
          eyebrow={content.about.eyebrow}
          headlineLine1={content.about.headlineLine1}
          headlineLine2={content.about.headlineLine2}
          paragraphs={content.about.paragraphs}
          backgroundLabel={content.about.backgroundLabel}
          background={content.about.background}
          directionLabel={content.about.directionLabel}
          direction={content.about.direction}
          pillars={content.about.pillars}
        />
        <SelectedWork
          eyebrow={content.selectedWork.eyebrow}
          headlineLine1={content.selectedWork.headlineLine1}
          headlineLine2={content.selectedWork.headlineLine2}
          supportingCopy={content.selectedWork.supportingCopy}
          githubLabel={content.selectedWork.githubLabel}
          demoLabel={content.selectedWork.demoLabel}
          projects={content.selectedWork.projects}
        />
        <CaseStudies
          eyebrow={content.caseStudies.eyebrow}
          headlineLine1={content.caseStudies.headlineLine1}
          headlineLine2={content.caseStudies.headlineLine2}
          supportingCopy={content.caseStudies.supportingCopy}
          githubLabel={content.caseStudies.githubLabel}
          studies={content.caseStudies.studies}
        />
        <Experience
          eyebrow={content.experience.eyebrow}
          headlineLine1={content.experience.headlineLine1}
          headlineLine2={content.experience.headlineLine2}
          intro={content.experience.intro}
          items={content.experience.items}
          resume={{
            label: content.externalLinks.resume,
            href: content.externalLinks.resumeHref,
          }}
        />
        <ResearchRecognition
          eyebrow={content.researchRecognition.eyebrow}
          headlineLine1={content.researchRecognition.headlineLine1}
          headlineLine2={content.researchRecognition.headlineLine2}
          supportingCopy={content.researchRecognition.supportingCopy}
          items={content.researchRecognition.items}
        />
        <Capabilities
          eyebrow={content.capabilities.eyebrow}
          headlineLine1={content.capabilities.headlineLine1}
          headlineLine2={content.capabilities.headlineLine2}
          supportingCopy={content.capabilities.supportingCopy}
          groups={content.capabilities.groups}
        />
        <Contact
          eyebrow={content.contact.eyebrow}
          headlineLine1={content.contact.headlineLine1}
          headlineLine2={content.contact.headlineLine2}
          supportingCopy={content.contact.supportingCopy}
          fields={content.contact.fields}
          submitLabel={content.contact.submitLabel}
          submittingLabel={content.contact.submittingLabel}
          success={content.contact.success}
          error={content.contact.error}
          privacyCopy={content.contact.privacyCopy}
          locale={locale}
          linkedin={{
            label: content.externalLinks.linkedin,
            href: content.externalLinks.linkedinHref,
          }}
          github={{
            label: content.externalLinks.github,
            href: content.externalLinks.githubHref,
          }}
          resume={{
            label: content.externalLinks.resume,
            href: content.externalLinks.resumeHref,
          }}
        />
      </main>
    </>
  );
}
