import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CapabilityGroup } from "@/content/home";

/**
 * Capabilities — PORTFOLIO_SPEC §18 / HOME_WIREFRAME §26-27, task M1-07.
 * A synthesis layer, deliberately the quietest section on Home: no cards,
 * no per-column borders, no icons/logos/percentages — whitespace is the
 * only structural device (task's own "prefer whitespace first" guidance).
 * ADR-021: moved after About and made more compact (smaller items, tighter
 * rhythm) — a technical index, not a skills dump.
 * Server Component: no interactivity needed.
 */
type CapabilitiesProps = {
  eyebrow: string;
  headlineLine1: string;
  headlineLine2: string;
  supportingCopy?: string;
  groups: CapabilityGroup[];
};

export function Capabilities({
  eyebrow,
  headlineLine1,
  headlineLine2,
  supportingCopy,
  groups,
}: CapabilitiesProps) {
  return (
    <section
      id="capabilities"
      className="section"
    >
      <SectionHeading
        eyebrow={eyebrow}
        lines={[headlineLine1, headlineLine2]}
        intro={supportingCopy}
      />

      <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
        {groups.map((group, index) => (
          <div key={group.title} className="reveal border-t border-[var(--border)] pt-6">
            <h3 className="eyebrow mb-5 text-[var(--text-primary)]">
              <span className="text-[var(--accent)]">{String(index + 1).padStart(2, "0")}</span> /{" "}
              {group.title}
            </h3>
            <ul className="flex flex-col gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[15px] leading-[1.5] text-[var(--text-secondary)] md:text-base"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
