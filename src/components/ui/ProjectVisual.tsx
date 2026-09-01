import type { ProjectVisualKind } from "@/content/home";

/**
 * Restrained editorial system diagrams (no real screenshots exist yet — see
 * CURRENT_TASK.md M1-03). Decorative supplementary flavor, not required to
 * use or understand the section (the project description/proof/stack text
 * already stands alone), so the whole diagram is aria-hidden rather than
 * duplicated as accessible text.
 */
const PIPELINE_STAGES: Record<
  Exclude<ProjectVisualKind, "attrition">,
  string[]
> = {
  procurement: ["5.7M+ RAW RECORDS", "BRONZE", "SILVER", "GOLD", "ML + STREAMLIT"],
  steel: ["PUBLIC SOURCES", "INDEX ENGINE", "METHODOLOGY", "IMMUTABLE VINTAGE", "REPORT"],
  "application-job": [
    "JOB DESCRIPTION + EVIDENCE",
    "CLAUDE CODE",
    "STRUCTURED JSON",
    "ATS DOCX + TRACKING",
  ],
};

const CONTAINER_HEIGHT: Record<ProjectVisualKind, string> = {
  procurement: "min-h-[300px] md:min-h-[420px]",
  steel: "min-h-[300px] md:min-h-[420px]",
  "application-job": "min-h-[260px] md:min-h-[340px]",
  attrition: "min-h-[180px] md:min-h-[220px]",
};

export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  return (
    <div
      aria-hidden="true"
      className={`flex items-center justify-center overflow-hidden rounded-[10px] border border-[var(--border)] bg-[var(--background-soft)] px-6 py-10 motion-safe:transition-transform motion-safe:duration-300 hover:motion-safe:scale-[1.015] ${CONTAINER_HEIGHT[kind]}`}
    >
      {kind === "attrition" ? (
        <AttritionDiagram />
      ) : (
        <PipelineDiagram stages={PIPELINE_STAGES[kind]} />
      )}
    </div>
  );
}

function PipelineDiagram({ stages }: { stages: string[] }) {
  return (
    <div className="flex w-full max-w-[320px] flex-col items-stretch">
      {stages.map((stage, i) => (
        <div key={stage} className="flex flex-col items-center">
          <div className="w-full rounded-md border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-center">
            <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-secondary)]">
              {stage}
            </span>
          </div>
          {i < stages.length - 1 && (
            <span className="my-2 font-mono text-[var(--text-muted)]">↓</span>
          )}
        </div>
      ))}
    </div>
  );
}

function AttritionDiagram() {
  const steps = ["LOGISTIC REGRESSION", "SMOTE", "THRESHOLD", "5-FOLD CV"];
  return (
    <div className="flex w-full max-w-[380px] flex-col items-center gap-8">
      <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
        {steps.map((step, i) => (
          <span key={step} className="flex items-center gap-3">
            <span className="rounded-md border border-[var(--border)] bg-[var(--surface)] px-3 py-2 font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-secondary)]">
              {step}
            </span>
            {i < steps.length - 1 && <span className="text-[var(--text-muted)]">→</span>}
          </span>
        ))}
      </div>
      <div className="text-center">
        <span className="block text-[40px] font-medium leading-none text-[var(--text-primary)]">
          74%
        </span>
        <span className="mt-2 block font-mono text-[11px] uppercase tracking-[0.06em] text-[var(--text-muted)]">
          Recall
        </span>
      </div>
    </div>
  );
}
