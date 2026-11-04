import { SectionHeading } from "@/components/ui/SectionHeading";
import { CaseStudyFeature } from "@/components/ui/CaseStudyFeature";
import type { CaseStudiesContent } from "@/content/home";

/**
 * Case Studies — PORTFOLIO_SPEC §13-14 / HOME_WIREFRAME §21, task M1-04.
 * Server Component: hover states are pure CSS, no client boundary needed.
 */
type CaseStudiesProps = CaseStudiesContent;

export function CaseStudies({
  eyebrow,
  headlineLine1,
  headlineLine2,
  supportingCopy,
  githubLabel,
  studies,
}: CaseStudiesProps) {
  return (
    <section
      id="case-studies"
      className="section"
    >
      <SectionHeading
        eyebrow={eyebrow}
        lines={[headlineLine1, headlineLine2]}
        intro={supportingCopy}
      />

      <div className="mt-20 flex flex-col gap-28 md:mt-32 md:gap-[160px]">
        {studies.map((study) => (
          <CaseStudyFeature key={study.index} study={study} githubLabel={githubLabel} />
        ))}
      </div>
    </section>
  );
}
