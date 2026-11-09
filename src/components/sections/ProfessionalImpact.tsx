import { SectionHeading } from "@/components/ui/SectionHeading";
import type { ProfessionalImpactContent } from "@/content/home";

/**
 * Professional Impact — ADR-021. Results from professional experience (not
 * personal projects), shown as editorial evidence rather than a dashboard:
 * large numbers on hairlines, mono labels, one attributed sentence each.
 * Two columns from `sm` up — deliberately not a 4-up card row.
 * Server Component: no interactivity.
 */
export function ProfessionalImpact({
  eyebrow,
  headlineLine1,
  headlineLine2,
  supportingCopy,
  items,
}: ProfessionalImpactContent) {
  return (
    <section id="impact" className="section">
      <SectionHeading
        eyebrow={eyebrow}
        lines={[headlineLine1, headlineLine2]}
        intro={supportingCopy}
      />

      <ol className="mt-16 grid grid-cols-1 gap-x-10 sm:grid-cols-2 md:mt-24 lg:gap-x-16">
        {items.map((item, i) => (
          <li key={item.label} className="reveal border-t border-[var(--border)] pt-6 pb-12 md:pb-16">
            <p className="font-mono text-[11px] text-[var(--accent)]">{String(i + 1).padStart(2, "0")}</p>
            <p className="mt-6 text-[44px] font-medium leading-[1] tracking-[-0.035em] text-[var(--text-primary)] [overflow-wrap:anywhere] md:text-[56px] lg:text-[72px]">
              {item.value}
            </p>
            <p className="eyebrow mt-4 text-[var(--text-muted)]">{item.label}</p>
            <p className="mt-5 max-w-[460px] text-base leading-[1.6] text-[var(--text-secondary)] md:text-[17px]">
              {item.description}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}
