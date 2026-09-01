import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectFeature } from "@/components/ui/ProjectFeature";
import type { SelectedWorkContent } from "@/content/home";

/**
 * Selected Work — SPEC §10-11 / HOME_WIREFRAME §12-20.
 * Server Component: hover states are pure CSS, no client boundary needed.
 */
type SelectedWorkProps = SelectedWorkContent;

export function SelectedWork({
  eyebrow,
  headlineLine1,
  headlineLine2,
  supportingCopy,
  githubLabel,
  demoLabel,
  projects,
}: SelectedWorkProps) {
  return (
    <section
      id="projects"
      className="mx-auto max-w-[var(--container-max)] px-5 py-20 md:px-8 md:py-32"
    >
      <SectionHeading eyebrow={eyebrow} lines={[headlineLine1, headlineLine2]} />
      <p className="mt-6 max-w-[var(--reading-max)] text-lg leading-[1.55] text-[var(--text-secondary)] md:mt-8 md:text-xl">
        {supportingCopy}
      </p>

      <div className="mt-16 flex flex-col gap-24 md:mt-24 md:gap-[160px]">
        {projects.map((project, index) => (
          <ProjectFeature
            key={project.index}
            project={project}
            reverse={index % 2 === 1}
            githubLabel={githubLabel}
            demoLabel={demoLabel}
          />
        ))}
      </div>
    </section>
  );
}
