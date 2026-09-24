import { ProjectVisual } from "@/components/ui/ProjectVisual";
import type { SelectedProject } from "@/content/home";

/**
 * One editorial project block — ADR-018 (supersedes the M1-03 alternating
 * text|visual rows). Same DOM order on every breakpoint:
 * header (label, title | description, stack, links) -> full-width visual
 * -> proof row. The visual is the dominant element; when real product
 * screenshots exist they replace ProjectVisual in the same slot.
 */
type ProjectFeatureProps = {
  project: SelectedProject;
  githubLabel: string;
  demoLabel: string;
};

export function ProjectFeature({ project, githubLabel, demoLabel }: ProjectFeatureProps) {
  return (
    <article className="reveal">
      <header className="grid gap-8 lg:grid-cols-12 lg:items-end lg:gap-x-10">
        <div className="lg:col-span-7">
          <p className="eyebrow">
            <span className="text-[var(--accent)]">{project.index}</span>
            <span className="text-[var(--text-muted)]"> / </span>
            {project.category}
          </p>
          <h3 className="heading-title mt-6">{project.title}</h3>
        </div>

        <div className="lg:col-span-5">
          <p className="text-[17px] leading-[1.6] text-[var(--text-secondary)] md:text-lg">
            {project.description}
          </p>
          <p className="mt-5 font-mono text-[13px] leading-[1.6] text-[var(--text-muted)]">
            {project.stack}
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
            {project.githubHref && (
              <ProjectLink href={project.githubHref} label={githubLabel} />
            )}
            {project.demoHref && (
              <ProjectLink href={project.demoHref} label={demoLabel} />
            )}
          </div>
        </div>
      </header>

      <div className="mt-10 md:mt-14">
        <ProjectVisual kind={project.visual} />
      </div>

      <dl className="mt-8 grid grid-cols-2 gap-y-6 md:grid-cols-4">
        {project.proof.map((item) => (
          <div
            key={item.label}
            className="border-l border-[var(--border)] pl-4 md:pl-5"
          >
            <dt className="sr-only">{item.label}</dt>
            <dd>
              <span className="block break-words text-[22px] font-medium leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)] md:text-[28px]">
                {item.value}
              </span>
              <span className="eyebrow mt-2 block text-[11px] text-[var(--text-muted)]">
                {item.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </article>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-arrow">
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}
