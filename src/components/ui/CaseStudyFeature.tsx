import type { CaseStudy, CaseStudyVisualKind } from "@/content/home";

/**
 * One editorial case study row — HOME_WIREFRAME §21, task M1-04.
 * Deliberately NOT the ProjectFeature anatomy: Selected Work answers "what
 * did I build" (alternating text/visual columns, big-number proof grid);
 * Case Studies answers "how did I think about the problem" (single-column,
 * problem -> diagram -> evidence-sentence blocks -> link). Same typography/
 * spacing/border tokens, different structure — same DOM order works for
 * both mobile and desktop, no CSS reordering needed.
 */
type CaseStudyFeatureProps = {
  study: CaseStudy;
  githubLabel: string;
};

export function CaseStudyFeature({ study, githubLabel }: CaseStudyFeatureProps) {
  return (
    <article className="reveal">
      <p className="eyebrow">
        <span className="text-[var(--accent)]">{study.index}</span>
        <span className="text-[var(--text-muted)]"> / </span>
        {study.category}
      </p>
      <h3 className="heading-title mt-6 max-w-[900px]">
        {study.title}
      </h3>
      <p className="lead mt-6">
        {study.positioning}
      </p>

      <CaseStudyDiagram kind={study.visual} />

      <dl className="grid grid-cols-1 gap-x-10 gap-y-7 pt-10 sm:grid-cols-2 lg:grid-cols-4">
        {study.evidence.map((item) => (
          <div key={item.label} className="border-l border-[var(--border)] pl-4 md:pl-5">
            <dt className="eyebrow mb-3 text-[var(--text-primary)]">
              {item.label}
            </dt>
            <dd className="text-[15px] leading-[1.5] text-[var(--text-secondary)]">
              {item.text}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
        {study.githubHref && <CaseStudyLink href={study.githubHref} label={githubLabel} />}
        {study.externalHref && study.externalLabel && (
          <CaseStudyLink href={study.externalHref} label={study.externalLabel} />
        )}
      </div>
    </article>
  );
}

function CaseStudyLink({ href, label }: { href: string; label: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="link-arrow"
    >
      {label} <span aria-hidden="true">↗</span>
    </a>
  );
}

/**
 * Decorative, aria-hidden (see ProjectVisual.tsx for the same rationale).
 * A horizontal wrapping chip-flow, not the vertical pipeline used by
 * Selected Work's ProjectVisual — case studies read full-width, so the
 * diagram flows like a sentence instead of sitting in a narrow side column.
 */
const DIAGRAM_NODES: Record<CaseStudyVisualKind, string[]> = {
  steel: [
    "PUBLIC SOURCES — COMEX · BCB · IBGE",
    "SOURCE ADAPTERS",
    "INDEX ENGINE",
    "METHODOLOGY",
    "IMMUTABLE VINTAGE",
    "PUBLICATION / REPORT",
  ],
  research: ["RESEARCH QUESTION", "DATA", "ANALYSIS", "FINDING", "PUBLIC COVERAGE"],
};

const DIAGRAM_STAT: Partial<Record<CaseStudyVisualKind, { value: string; label: string }>> = {
  research: { value: "~20%", label: "Reported representation" },
};

function CaseStudyDiagram({ kind }: { kind: CaseStudyVisualKind }) {
  const nodes = DIAGRAM_NODES[kind];
  const stat = DIAGRAM_STAT[kind];

  return (
    <div
      aria-hidden="true"
      className="mt-10 flex flex-wrap items-center gap-x-3 gap-y-3 rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--background-secondary)] px-5 py-8 md:mt-14 md:px-10 md:py-14"
    >
      {nodes.map((node, i) => (
        <span key={node} className="flex items-center gap-3">
          <span className="rounded-[var(--radius-sm)] border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-secondary)]">
            {node}
          </span>
          {i < nodes.length - 1 && <span className="text-[var(--text-muted)]">→</span>}
        </span>
      ))}
      {stat && (
        <span className="ml-2 flex items-baseline gap-2">
          <span className="text-[28px] font-medium tracking-[-0.02em] leading-none text-[var(--text-primary)]">
            {stat.value}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-muted)]">
            {stat.label}
          </span>
        </span>
      )}
    </div>
  );
}
