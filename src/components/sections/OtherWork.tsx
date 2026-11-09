import { SectionHeading } from "@/components/ui/SectionHeading";
import type { OtherWorkContent } from "@/content/home";

/**
 * Other Work & Research — ADR-021. Replaces the former Case Studies and
 * Research & Recognition sections with one quieter editorial index: no
 * diagrams, no metric tiles, smaller titles than Selected Work. Two groups
 * (other projects, research & recognition); each row is kicker/title on the
 * left, description/evidence/links on the right from `lg`.
 * Server Component: no interactivity.
 */
export function OtherWork({
  eyebrow,
  headlineLine1,
  headlineLine2,
  supportingCopy,
  groups,
}: OtherWorkContent) {
  return (
    <section id="other-work" className="section">
      <SectionHeading
        eyebrow={eyebrow}
        lines={[headlineLine1, headlineLine2]}
        intro={supportingCopy}
      />

      <div className="mt-16 flex flex-col gap-16 md:mt-24 md:gap-20">
        {groups.map((group) => (
          <div key={group.title}>
            <h3 className="eyebrow mb-6 text-[var(--text-primary)]">{group.title}</h3>
            <ol className="flex flex-col">
              {group.items.map((item) => (
                <li
                  key={item.title}
                  className="reveal grid gap-4 border-t border-[var(--border)] py-8 md:py-10 lg:grid-cols-12 lg:gap-x-10"
                >
                  <div className="lg:col-span-5">
                    <p className="eyebrow text-[11px] text-[var(--text-muted)]">{item.kicker}</p>
                    <h4 className="mt-3 text-[24px] font-medium leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] md:text-[28px]">
                      {item.title}
                    </h4>
                    {item.context && (
                      <p className="mt-2 text-sm text-[var(--text-secondary)]">{item.context}</p>
                    )}
                  </div>

                  <div className="lg:col-span-7">
                    <p className="max-w-[680px] text-base leading-[1.6] text-[var(--text-secondary)] md:text-[17px]">
                      {item.description}
                    </p>
                    {item.evidence && <p className="eyebrow mt-4 text-[11px]">{item.evidence}</p>}
                    <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      {item.metadata && (
                        <p className="font-mono text-[13px] text-[var(--text-muted)]">{item.metadata}</p>
                      )}
                      <div className="flex flex-wrap gap-x-6 gap-y-2 sm:ml-auto">
                        {item.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link-arrow"
                          >
                            {link.label} <span aria-hidden="true">↗</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </div>
    </section>
  );
}
