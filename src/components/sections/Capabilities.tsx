import { SectionHeading } from "@/components/ui/SectionHeading";
import type { CapabilityGroup } from "@/content/home";

/**
 * Capabilities — PORTFOLIO_SPEC §18 / HOME_WIREFRAME §26-27, task M1-07.
 * A synthesis layer, deliberately the quietest section on Home: no cards,
 * no per-column borders, no icons/logos/percentages — whitespace is the
 * only structural device (task's own "prefer whitespace first" guidance).
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
      className="mx-auto max-w-[var(--container-max)] px-5 py-20 md:px-8 md:py-32"
    >
      <SectionHeading eyebrow={eyebrow} lines={[headlineLine1, headlineLine2]} />
      {supportingCopy && (
        <p className="mt-6 max-w-[var(--reading-max)] text-lg leading-[1.55] text-[var(--text-secondary)] md:mt-8 md:text-xl">
          {supportingCopy}
        </p>
      )}

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-10 border-t border-[var(--border)] pt-10 sm:grid-cols-2 lg:grid-cols-4 md:mt-20 md:pt-12">
        {groups.map((group, index) => (
          <div key={group.title}>
            <h3 className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-primary)] mb-5">
              {String(index + 1).padStart(2, "0")} / {group.title}
            </h3>
            <ul className="flex flex-col gap-2.5">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="text-[17px] leading-[1.5] text-[var(--text-secondary)] md:text-[18px]"
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
