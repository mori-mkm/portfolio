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
      className="section"
    >
      <SectionHeading
        eyebrow={eyebrow}
        lines={[headlineLine1, headlineLine2]}
        intro={supportingCopy}
      />

      <div className="mt-20 flex flex-col gap-28 md:mt-32 md:gap-[180px]">
        {projects.map((project) => (
          <ProjectFeature
            key={project.index}
            project={project}
            githubLabel={githubLabel}
            demoLabel={demoLabel}
          />
        ))}
      </div>
    </section>
  );
}
