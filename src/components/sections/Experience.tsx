import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ExperienceItem } from "@/content/home";

/**
 * Experience — PORTFOLIO_SPEC §15 / HOME_WIREFRAME §22-23, task M1-05.
 * Server Component: no interactivity needed, resume link is a plain anchor.
 * Editorial list, not a graphical timeline — no dots/rail/connectors, only
 * a border-top separator between items (WIREFRAME §22.4).
 *
 * Layout split is 4/12 : 8/12, but the switch to two columns happens at a
 * custom 900px breakpoint (not the site's usual `md:` 768px) per the task's
 * explicit "don't keep a cramped split below ~900px" instruction — this
 * section's items are denser (role + description + metadata) than About's.
 */
type ExperienceProps = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  intro: string;
  items: ExperienceItem[];
  resume: { label: string; href: string };
};

export function Experience({
  eyebrow,
  headlineLine1,
  headlineLine2,
  intro,
  items,
  resume,
}: ExperienceProps) {
  return (
    <section
      id="experience"
      className="mx-auto max-w-[var(--container-max)] px-5 py-20 md:px-8 md:py-32"
    >
      <SectionHeading eyebrow={eyebrow} lines={[headlineLine1, headlineLine2]} />

      <div className="mt-10 flex flex-col gap-10 min-[900px]:mt-20 min-[900px]:flex-row min-[900px]:gap-16">
        <div className="flex flex-col gap-6 min-[900px]:w-1/3">
          <p className="max-w-[360px] text-lg leading-[1.55] text-[var(--text-secondary)] md:text-xl">
            {intro}
          </p>
          <a
            href={resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex w-fit items-center gap-1.5 text-[15px] text-[var(--text-primary)] underline decoration-[var(--border-strong)] underline-offset-4 transition-colors hover:decoration-[var(--text-primary)]"
          >
            {resume.label}
            <span className="inline-block motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-0.5">
              ↗
            </span>
          </a>
        </div>

        <ol className="flex flex-col min-[900px]:w-2/3">
          {items.map((item) => (
            <li
              key={item.company}
              className="border-t border-[var(--border)] py-9 md:py-12"
            >
              <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-muted)] mb-4">
                {item.period}
              </p>
              <h3 className="text-[28px] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[32px]">
                {item.company}
              </h3>
              <p className="mt-2 text-base text-[var(--text-secondary)] md:text-[17px]">
                {item.role}
              </p>
              <p className="mt-5 max-w-[640px] text-base leading-[1.55] text-[var(--text-primary)] md:text-[18px]">
                {item.description}
              </p>
              <p className="mt-5 font-mono text-[13px] text-[var(--text-secondary)]">
                {item.metadata}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
