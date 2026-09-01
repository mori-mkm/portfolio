/**
 * Standard section heading — SPEC §29 (Section Heading Component).
 * "01 / ABOUT" style eyebrow (mono) + a two-line editorial headline.
 */
type SectionHeadingProps = {
  eyebrow: string;
  lines: [string, string];
  className?: string;
};

export function SectionHeading({ eyebrow, lines, className }: SectionHeadingProps) {
  return (
    <div className={className}>
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-secondary)] mb-6">
        {eyebrow}
      </p>
      <h2 className="text-[32px] leading-[1.1] tracking-[-0.02em] font-medium text-[var(--text-primary)] md:max-w-[820px] md:text-[48px] lg:text-[52px]">
        {lines[0]}
        <br />
        {lines[1]}
      </h2>
    </div>
  );
}
