import { ProjectVisual } from "@/components/ui/ProjectVisual";
import type { SelectedProject } from "@/content/home";

/**
 * One editorial project row — HOME_WIREFRAME §13-20.
 * DOM order is always header -> visual -> footer, matching the required
 * mobile order (§20). `reverse` only changes desktop CSS grid placement
 * (§14-17: text-left/visual-right alternating with visual-left/text-right),
 * so no JS reordering is needed.
 */
type ProjectFeatureProps = {
  project: SelectedProject;
  reverse: boolean;
  githubLabel: string;
  demoLabel: string;
};

export function ProjectFeature({
  project,
  reverse,
  githubLabel,
  demoLabel,
}: ProjectFeatureProps) {
  const textCol = reverse ? "md:col-start-8" : "md:col-start-1";
  const visualCol = reverse ? "md:col-start-1" : "md:col-start-6";

  return (
    <article className="flex flex-col gap-8 md:grid md:grid-cols-12 md:items-start md:gap-x-10 md:gap-y-9">
      <header className={`md:col-span-5 md:row-start-1 ${textCol}`}>
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-muted)] mb-3">
          PROJECT / {project.index}
        </p>
        <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-secondary)] mb-5">
          {project.category}
        </p>
        <h3 className="text-[32px] font-medium leading-[1.05] tracking-[-0.02em] text-[var(--text-primary)] md:text-[48px] lg:text-[52px]">
          {project.title}
        </h3>
        <p className="mt-6 max-w-[520px] text-lg leading-[1.5] text-[var(--text-secondary)] md:text-xl">
          {project.description}
        </p>
      </header>

      <div className={`md:col-span-7 md:row-span-2 md:row-start-1 ${visualCol}`}>
        <ProjectVisual kind={project.visual} />
      </div>

      <footer className={`md:col-span-5 md:row-start-2 ${textCol}`}>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-5 border-t border-[var(--border)] pt-6">
          {project.proof.map((item) => (
            <div key={item.label}>
              <dt className="sr-only">{item.label}</dt>
              <dd>
                <span className="block break-words text-[24px] font-medium leading-[1.05] text-[var(--text-primary)] md:text-[30px]">
                  {item.value}
                </span>
                <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-muted)]">
                  {item.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>

        <p className="mt-7 text-sm text-[var(--text-secondary)]">{project.stack}</p>

        <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3">
          {project.demoHref && (
            <ProjectLink href={project.demoHref} label={demoLabel} />
          )}
          {project.githubHref && (
            <ProjectLink href={project.githubHref} label={githubLabel} />
          )}
        </div>
      </footer>
    </article>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-1.5 text-[15px] text-[var(--text-primary)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-[var(--text-primary)]"
    >
      {label}
      <span className="inline-block motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-0.5">
        ↗
      </span>
    </a>
  );
}
