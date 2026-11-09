import Image from "next/image";

import { SectionHeading } from "@/components/ui/SectionHeading";
import type { AboutContent } from "@/content/home";

/**
 * About — SPEC §9 / HOME_WIREFRAME §10-11; moved after Other Work and made
 * portrait-ready by ADR-021. The left column shows a REAL portrait only when
 * `portrait` is set (none exists yet — never a placeholder or stock photo),
 * then the Background / Current direction lists; without a portrait the
 * section is complete as-is. Server Component, no interactivity.
 */
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
  portrait,
}: AboutContent) {
  return (
    <section id="about" className="section">
      <SectionHeading eyebrow={eyebrow} lines={[headlineLine1, headlineLine2]} />

      <div className="mt-12 flex flex-col gap-12 md:mt-24 md:flex-row md:gap-16">
        <div className="flex flex-col gap-8 md:w-1/3">
          {portrait && (
            <Image
              src={portrait.src}
              alt={portrait.alt}
              width={portrait.width}
              height={portrait.height}
              sizes="(min-width: 768px) 33vw, 100vw"
              className="h-auto w-full max-w-[360px] rounded-[var(--radius-lg)] border border-[var(--border)]"
            />
          )}
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
