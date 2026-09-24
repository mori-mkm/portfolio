import type { ProjectVisualKind } from "@/content/home";

/**
 * Restrained editorial system diagrams (no real screenshots exist yet — see
 * CURRENT_TASK.md M1-03/M1-04). Decorative supplementary flavor, not required
 * to use or understand the section (the project description/proof/stack text
 * already stands alone), so the whole diagram is aria-hidden rather than
 * duplicated as accessible text.
 *
 * All kinds render through the SAME vertical stage-pipeline anatomy —
 * Attrition must not diverge into a different diagram shape (M1-04 fix: it
 * previously used a one-off horizontal chip layout, which read as a broken/
 * inconsistent anatomy relative to the others). Its lower prominence
 * comes only from CONTAINER_HEIGHT, never from a different structure.
 */
const STAGES: Record<ProjectVisualKind, string[]> = {
  datalab: ["PROBLEM + DATASET", "LANGGRAPH", "DE · ANALYTICS · DS", "INDEPENDENT REVIEW", "EVENTS + CONTROL PLANE"],
  procurement: ["5.7M+ RAW RECORDS", "BRONZE", "SILVER", "GOLD", "ML + STREAMLIT"],
  steel: ["PUBLIC SOURCES", "INDEX ENGINE", "METHODOLOGY", "IMMUTABLE VINTAGE", "REPORT"],
  attrition: ["DATA", "LOGISTIC REGRESSION", "SMOTE", "THRESHOLD", "5-FOLD CV"],
};

const STAT: Partial<Record<ProjectVisualKind, { value: string; label: string }>> = {
  attrition: { value: "74%", label: "Recall" },
};

const CONTAINER_HEIGHT: Record<ProjectVisualKind, string> = {
  datalab: "min-h-[360px] lg:min-h-[480px]",
  procurement: "min-h-[360px] lg:min-h-[480px]",
  steel: "min-h-[360px] lg:min-h-[480px]",
  attrition: "min-h-[300px] lg:min-h-[360px]",
};

/**
 * ADR-018: full-width dark product panel. Stages read left-to-right on
 * desktop (vertical on smaller screens); the final stage — the system's
 * output — is the one accent-marked element.
 */
export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  const stages = STAGES[kind];
  const stat = STAT[kind];

  return (
    <div
      aria-hidden="true"
      className={`group/visual flex flex-col justify-center gap-10 overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--background-secondary)] px-6 py-12 md:px-12 ${CONTAINER_HEIGHT[kind]}`}
    >
      <ol className="mx-auto flex w-full max-w-[340px] flex-col items-stretch motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[var(--ease)] motion-safe:group-hover/visual:scale-[1.01] lg:max-w-none lg:flex-row lg:items-center">
        {stages.map((stage, i) => {
          const last = i === stages.length - 1;
          return (
            <li key={stage} className="flex flex-col items-center lg:flex-1 lg:flex-row">
              <div
                className={`flex w-full flex-col gap-2 rounded-[var(--radius-md)] border px-4 py-3 lg:min-h-[96px] lg:justify-between lg:py-4 ${
                  last
                    ? "border-[var(--accent-border)] bg-[var(--accent-soft)]"
                    : "border-[var(--border)] bg-[var(--surface)]"
                }`}
              >
                <span className={`font-mono text-[11px] ${last ? "text-[var(--accent)]" : "text-[var(--text-muted)]"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-[11px] uppercase leading-[1.4] tracking-[0.06em] text-[var(--text-secondary)]">
                  {stage}
                </span>
              </div>
              {!last && (
                <span className="my-1.5 h-5 w-px bg-[var(--border-strong)] lg:mx-2 lg:my-0 lg:h-px lg:w-5 lg:shrink-0" />
              )}
            </li>
          );
        })}
      </ol>

      {stat && (
        <div className="text-center">
          <span className="block text-[40px] font-medium leading-none tracking-[-0.03em] text-[var(--text-primary)] md:text-[56px]">
            {stat.value}
          </span>
          <span className="eyebrow mt-3 block text-[11px] text-[var(--text-muted)]">
            {stat.label}
          </span>
        </div>
      )}
    </div>
  );
}
