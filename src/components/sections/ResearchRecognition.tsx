import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ResearchRecognitionItem } from "@/content/home";

/**
 * Research & Recognition — PORTFOLIO_SPEC §16 / HOME_WIREFRAME §24-25, task
 * M1-06. An editorial index, not project cards: no diagrams, no metric
 * tiles, no big-number proof grid — the visually quietest section on Home.
 * Server Component: no interactivity needed.
 */
type ResearchRecognitionProps = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy: string;
  items: ResearchRecognitionItem[];
};

export function ResearchRecognition({
  eyebrow,
  headlineLine1,
  headlineLine2,
  supportingCopy,
  items,
}: ResearchRecognitionProps) {
  return (
    <section
      id="research"
      className="section"
    >
      <SectionHeading
        eyebrow={eyebrow}
        lines={[headlineLine1, headlineLine2]}
        intro={supportingCopy}
      />

      <ol className="mt-16 flex flex-col md:mt-24">
        {items.map((item) => (
          <li
            key={item.title}
            className="reveal border-t border-[var(--border)] py-10 md:py-14"
          >
            <p className="eyebrow mb-5 text-[var(--text-muted)]">
              {item.type === "research" ? "RESEARCH" : "RECOGNITION"} /{" "}
              <span className="text-[var(--accent)]">{item.index}</span>
            </p>
            <h3 className="max-w-[820px] text-[28px] font-medium leading-[1.05] tracking-[-0.025em] text-[var(--text-primary)] md:text-[36px]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)] md:text-[15px]">
              {item.context}
            </p>
            <p className="mt-5 max-w-[640px] text-[17px] leading-[1.55] text-[var(--text-secondary)] md:text-[18px]">
              {item.description}
            </p>
            {item.evidence && (
              <p className="eyebrow mt-4">
                {item.evidence}
              </p>
            )}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[13px] text-[var(--text-muted)]">
                {item.metadata}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="link-arrow"
              >
                {item.linkLabel} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
