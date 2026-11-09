import type { ProjectVisualKind } from "@/content/home";

/**
 * Restrained editorial system diagrams — the media fallback for featured
 * projects without a real screenshot/video (ADR-021). Each stage is an
 * evidence-based summary of the project's documented architecture, never a
 * new claim. Decorative (the project text stands alone), so aria-hidden.
 *
 * ADR-018: dark product panel, stages read left-to-right on desktop and
 * vertically below `lg`; the final stage — the system's output — is the one
 * accent-marked element. ADR-021: on desktop it uses the same 16:10 stage
 * as a real image preview, so every project's media has the same footprint.
 */
const STAGES: Record<ProjectVisualKind, string[]> = {
  datalab: ["PROBLEM + DATASET", "LANGGRAPH", "DE · ANALYTICS · DS", "INDEPENDENT REVIEW", "EVENTS + CONTROL PLANE"],
  closer: ["MEET CAPTIONS", "CONVERSATION ANALYSIS", "COMMERCIAL MEMORY", "KNOWLEDGE RETRIEVAL", "ONE NEXT ACTION"],
  procurement: ["5.7M+ RAW RECORDS", "BRONZE", "SILVER", "GOLD", "ML + STREAMLIT"],
};

export function ProjectVisual({ kind }: { kind: ProjectVisualKind }) {
  const stages = STAGES[kind];

  return (
    <div
      aria-hidden="true"
      className="group/visual flex min-h-[300px] flex-col justify-center overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--background-secondary)] px-6 py-10 md:px-10 lg:aspect-[16/10] lg:min-h-0"
    >
      <ol className="mx-auto flex w-full max-w-[340px] flex-col items-stretch motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[var(--ease)] motion-safe:group-hover/visual:scale-[1.01] lg:max-w-none lg:flex-row lg:items-center">
        {stages.map((stage, i) => {
          const last = i === stages.length - 1;
          return (
            <li key={stage} className="flex flex-col items-center lg:flex-1 lg:flex-row">
              <div
                className={`flex w-full flex-col gap-2 rounded-[var(--radius-md)] border px-4 py-2.5 lg:min-h-[96px] lg:justify-between lg:px-3 lg:py-4 ${
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
                <span className="my-1 h-4 w-px bg-[var(--border-strong)] lg:mx-1.5 lg:my-0 lg:h-px lg:w-4 lg:shrink-0" />
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
