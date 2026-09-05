import type { ProjectVisualKind } from "@/content/home";

/**
 * Restrained editorial system diagrams (no real screenshots exist yet — see
 * CURRENT_TASK.md M1-03/M1-04). Decorative supplementary flavor, not required
 * to use or understand the section (the project description/proof/stack text
 * already stands alone), so the whole diagram is aria-hidden rather than
 * duplicated as accessible text.
 *
 * All four kinds render through the SAME vertical stage-pipeline anatomy —
 * Attrition must not diverge into a different diagram shape (M1-04 fix: it
 * previously used a one-off horizontal chip layout, which read as a broken/
 * inconsistent anatomy relative to the other three). Its lower prominence
 * comes only from CONTAINER_HEIGHT and the `compact` spacing below, never
 * from a different structure.
 */
const STAGES: Record<ProjectVisualKind, string[]> = {
  procurement: ["5.7M+ RAW RECORDS", "BRONZE", "SILVER", "GOLD", "ML + STREAMLIT"],
  steel: ["PUBLIC SOURCES", "INDEX ENGINE", "METHODOLOGY", "IMMUTABLE VINTAGE", "REPORT"],
  attrition: ["DATA", "LOGISTIC REGRESSION", "SMOTE", "THRESHOLD", "5-FOLD CV"],
};

const STAT: Partial<Record<ProjectVisualKind, { value: string; label: string }>> = {
  attrition: { value: "74%", label: "Recall" },
};

const CONTAINER_HEIGHT: Record<ProjectVisualKind, string> = {
  procurement: "min-h-[300px] md:min-h-[420px]",
  steel: "min-h-[300px] md:min-h-[420px]",
  attrition: "min-h-[220px] md:min-h-[300px]",
};

export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  const compact = kind === "attrition";
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--background-soft)] px-6 ${compact ? "py-7" : "py-10"} motion-safe:transition-transform motion-safe:duration-300 hover:motion-safe:scale-[1.015] ${CONTAINER_HEIGHT[kind]}`}
    >
      <PipelineDiagram stages={STAGES[kind]} stat={STAT[kind]} compact={compact} />
    </div>
  );
}

function PipelineDiagram({
  stages,
  stat,
  compact,
}: {
  stages: string[];
  stat?: { value: string; label: string };
  compact?: boolean;
}) {
  return (
    <div
      className={`flex w-full ${compact ? "max-w-[260px]" : "max-w-[320px]"} flex-col items-stretch`}
    >
      {stages.map((stage, i) => (
        <div key={stage} className="flex flex-col items-center">
          <div
            className={`w-full rounded-md border border-[var(--border)] bg-[var(--surface)] text-center ${compact ? "px-3 py-2" : "px-4 py-3"}`}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-secondary)]">
              {stage}
            </span>
          </div>
          {i < stages.length - 1 && (
            <span className={`font-mono text-[var(--text-muted)] ${compact ? "my-1" : "my-2"}`}>
              ↓
            </span>
          )}
        </div>
      ))}
      {stat && (
        <div className="mt-5 text-center">
          <span className="block text-[28px] font-medium leading-none text-[var(--text-primary)]">
            {stat.value}
          </span>
          <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-muted)]">
            {stat.label}
          </span>
        </div>
      )}
    </div>
  );
}
