import { ProjectMediaStage } from "@/components/ui/ProjectMediaStage";
import type { FeaturedProject, ProjectEvidence } from "@/content/home";

/**
 * One featured project — ADR-018 editorial block, extended by ADR-021 into a
 * product story with optional regions. Same DOM order on every breakpoint:
 *
 *   header: index/category, status, title, outcome headline
 *           | description, labeled notes (differentiator/status), links
 *   body:   media (8/12) | evidence micrographics (4/12)
 *   stack:  one quiet mono line — technology stays secondary
 *
 * Variation between projects comes from data (media kind, evidence kinds,
 * optional notes), not from per-project components.
 */
type ProjectFeatureProps = {
  project: FeaturedProject;
  githubLabel: string;
  demoLabel: string;
};

export function ProjectFeature({ project, githubLabel, demoLabel }: ProjectFeatureProps) {
  return (
    <article className="reveal">
      <header className="grid gap-8 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-7">
          <p className="eyebrow">
            <span className="text-[var(--accent)]">{project.index}</span>
            <span className="text-[var(--text-muted)]"> / </span>
            {project.category}
          </p>
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.08em] text-[var(--text-muted)]">
            <span aria-hidden="true">— </span>
            {project.status}
          </p>
          <h3 className="heading-title mt-6">{project.title}</h3>
          <p className="mt-5 max-w-[640px] text-[22px] leading-[1.3] tracking-[-0.01em] text-[var(--text-primary)] md:text-[26px]">
            {project.headline}
          </p>
        </div>

        <div className="flex flex-col gap-5 lg:col-span-5 lg:pt-10">
          {project.description.map((paragraph) => (
            <p key={paragraph} className="text-base leading-[1.6] text-[var(--text-secondary)] md:text-[17px]">
              {paragraph}
            </p>
          ))}

          {project.notes?.map((note) => (
            <div key={note.label} className="border-l border-[var(--border-strong)] pl-4">
              <p className="eyebrow text-[11px] text-[var(--text-muted)]">{note.label}</p>
              <p className="mt-1.5 text-[15px] leading-[1.55] text-[var(--text-primary)]">{note.text}</p>
            </div>
          ))}

          {(project.githubHref || project.demoHref) && (
            <div className="mt-2 flex flex-wrap items-center gap-x-8 gap-y-3">
              {project.githubHref && <ProjectLink href={project.githubHref} label={githubLabel} />}
              {project.demoHref && <ProjectLink href={project.demoHref} label={demoLabel} />}
            </div>
          )}
        </div>
      </header>

      <div className="mt-10 grid gap-8 md:mt-14 lg:grid-cols-12 lg:gap-x-10">
        <div className="lg:col-span-8">
          <ProjectMediaStage media={project.media} />
        </div>
        <EvidenceList evidence={project.evidence} />
      </div>

      <p className="mt-8 border-t border-[var(--border)] pt-5 font-mono text-[13px] leading-[1.6] text-[var(--text-muted)]">
        {project.stack}
      </p>
    </article>
  );
}

/**
 * Micrographics: hairline-separated, mono labels, real values only.
 * Below `lg` a 2-column grid; a comparison always spans both columns, and
 * when the remaining items are odd the first one spans too (no orphan cell).
 * At `lg` it becomes the single column beside the media.
 */
function EvidenceList({ evidence }: { evidence: ProjectEvidence[] }) {
  const firstSingle = evidence.findIndex((item) => item.kind !== "comparison");
  const singles = evidence.filter((item) => item.kind !== "comparison").length;

  return (
    <dl className="grid grid-cols-1 content-start gap-x-8 sm:grid-cols-2 lg:col-span-4 lg:grid-cols-1">
      {evidence.map((item, i) => {
        const wide = item.kind === "comparison" || (singles % 2 === 1 && i === firstSingle);
        return (
          <div
            key={item.label}
            className={`border-t border-[var(--border)] py-5 ${wide ? "sm:col-span-2 lg:col-span-1" : ""}`}
          >
            <dt className="eyebrow text-[11px] text-[var(--text-muted)]">{item.label}</dt>
            <dd className="mt-3">
              <EvidenceValue item={item} />
            </dd>
          </div>
        );
      })}
    </dl>
  );
}

function EvidenceValue({ item }: { item: ProjectEvidence }) {
  if (item.kind === "comparison") {
    // "vs": the first value is the selected option. "→": the second is the result.
    const emphasizeFirst = item.joiner === "vs";
    const [first, second] = item.items;
    return (
      <>
        <div className="flex flex-wrap items-end gap-x-4 gap-y-3">
          <ComparisonValue {...first} emphasis={emphasizeFirst} />
          <span aria-hidden="true" className="pb-6 font-mono text-[13px] text-[var(--text-muted)]">
            {item.joiner}
          </span>
          <ComparisonValue {...second} emphasis={!emphasizeFirst} />
        </div>
        <p className="mt-3 text-[14px] leading-[1.5] text-[var(--text-secondary)]">{item.note}</p>
      </>
    );
  }

  return (
    <>
      {item.kind === "metric" ? (
        <span className="block text-[28px] font-medium leading-none tracking-[-0.02em] text-[var(--text-primary)] md:text-[32px]">
          {item.value}
        </span>
      ) : (
        <span className="block font-mono text-[13px] uppercase leading-[1.45] tracking-[0.06em] text-[var(--text-primary)]">
          {item.value}
        </span>
      )}
      {item.note && (
        <p className="mt-2 text-[14px] leading-[1.5] text-[var(--text-secondary)]">{item.note}</p>
      )}
    </>
  );
}

function ComparisonValue({ label, value, emphasis }: { label: string; value: string; emphasis?: boolean }) {
  return (
    <span className="flex flex-col">
      <span
        className={`text-[40px] font-medium leading-none tracking-[-0.03em] md:text-[48px] ${
          emphasis ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"
        }`}
      >
        {value}
      </span>
      <span className="eyebrow mt-2 max-w-[130px] text-[11px] text-[var(--text-muted)]">{label}</span>
    </span>
  );
}

function ProjectLink({ href, label }: { href: string; label: string }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="link-arrow">
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}
