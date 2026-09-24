import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Pillar } from "@/content/home";

/**
 * About — SPEC §9 / HOME_WIREFRAME §10-11.
 * Server Component, no interactivity. Uses the "BACKGROUND / CURRENT
 * DIRECTION" left block (WIREFRAME §10.5's *preferred* V1 content), not the
 * metrics alternative — metrics mix project-specific numbers and the spec
 * explicitly warns against surfacing those without clear per-project
 * context, which belongs to Selected Work (BACKLOG M1-03), not here.
 */
type AboutProps = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  paragraphs: string[];
  backgroundLabel: string;
  background: string[];
  directionLabel: string;
  direction: string[];
  pillars: Pillar[];
};

export function About({
  eyebrow,
  headlineLine1,
  headlineLine2,
  paragraphs,
  backgroundLabel,
  background,
  directionLabel,
  direction,
  pillars,
}: AboutProps) {
  return (
    <section
      id="about"
      className="section"
    >
      <SectionHeading eyebrow={eyebrow} lines={[headlineLine1, headlineLine2]} />

      <div className="mt-12 flex flex-col gap-12 md:mt-24 md:flex-row md:gap-16">
        <div className="flex flex-col gap-8 md:w-1/3">
          <List label={backgroundLabel} items={background} />
          <List label={directionLabel} items={direction} />
        </div>

        <div className="flex flex-col gap-6 md:w-2/3">
          {paragraphs.map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-[720px] text-lg leading-[1.6] text-[var(--text-primary)] md:text-[21px]"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 border-t border-[var(--border)] pt-10 sm:grid-cols-3 md:mt-24 md:gap-10 md:pt-12">
        {pillars.map((pillar, index) => (
          <div
            key={pillar.title}
            className={
              index === 0
                ? undefined
                : "border-t border-[var(--border)] pt-6 sm:border-t-0 sm:border-l sm:pl-8 sm:pt-0"
            }
          >
            <p className="eyebrow mb-3 text-[var(--text-primary)]">
              {pillar.title}
            </p>
            <p className="text-[15px] leading-[1.5] text-[var(--text-secondary)]">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function List({ label, items }: { label: string; items: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-4 text-[var(--text-muted)]">
        {label}
      </p>
      <ul className="flex flex-col gap-1.5">
        {items.map((item) => (
          <li key={item} className="text-[15px] text-[var(--text-primary)]">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
