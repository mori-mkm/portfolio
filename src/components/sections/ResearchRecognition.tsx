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
      className="mx-auto max-w-[var(--container-max)] px-5 py-20 md:px-8 md:py-32"
    >
      <SectionHeading eyebrow={eyebrow} lines={[headlineLine1, headlineLine2]} />
      <p className="mt-6 max-w-[var(--reading-max)] text-lg leading-[1.55] text-[var(--text-secondary)] md:mt-8 md:text-xl">
        {supportingCopy}
      </p>

      <ol className="mt-16 flex flex-col md:mt-20">
        {items.map((item) => (
          <li
            key={item.title}
            className="border-t border-[var(--border)] py-9 md:py-12"
          >
            <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-muted)] mb-4">
              {item.type === "research" ? "RESEARCH" : "RECOGNITION"} / {item.index}
            </p>
            <h3 className="max-w-[720px] text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[36px]">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)] md:text-[15px]">
              {item.context}
            </p>
            <p className="mt-5 max-w-[640px] text-[17px] leading-[1.55] text-[var(--text-secondary)] md:text-[18px]">
              {item.description}
            </p>
            {item.evidence && (
              <p className="mt-4 font-mono text-[13px] uppercase tracking-[0.06em] text-[var(--text-secondary)]">
                {item.evidence}
              </p>
            )}

            <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-mono text-[13px] text-[var(--text-secondary)]">
                {item.metadata}
              </p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-1.5 text-[15px] text-[var(--text-primary)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-[var(--text-primary)]"
              >
                {item.linkLabel}
                <span className="inline-block motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
