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
      className="section"
    >
      <SectionHeading eyebrow={eyebrow} lines={[headlineLine1, headlineLine2]} />

      <div className="mt-12 flex flex-col gap-10 min-[900px]:mt-20 min-[900px]:flex-row min-[900px]:gap-16">
        <div className="flex flex-col gap-6 min-[900px]:w-1/3">
          <p className="lead max-w-[360px]">
            {intro}
          </p>
          <a
            href={resume.href}
            target="_blank"
            rel="noopener noreferrer"
            className="link-arrow"
          >
            {resume.label} <span aria-hidden="true">↗</span>
          </a>
        </div>

        <ol className="flex flex-col min-[900px]:w-2/3">
          {items.map((item) => (
            <li
              key={item.company}
              className="reveal border-t border-[var(--border)] py-10 md:py-14"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
                <h3 className="text-[28px] font-medium leading-[1.05] tracking-[-0.025em] text-[var(--text-primary)] md:text-[36px]">
                  {item.company}
                </h3>
                <p className="eyebrow shrink-0 text-[var(--text-muted)]">{item.period}</p>
              </div>
              <p className="mt-2 text-base text-[var(--text-secondary)] md:text-[17px]">
                {item.role}
              </p>
              <p className="mt-6 max-w-[640px] text-base leading-[1.6] text-[var(--text-primary)] md:text-[17px]">
                {item.description}
              </p>
              <p className="mt-5 font-mono text-[13px] leading-[1.6] text-[var(--text-muted)]">
                {item.metadata}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
