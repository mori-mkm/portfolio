/**
 * Standard section heading — SPEC §29, restyled by ADR-018.
 * Hairline -> "01 / ABOUT" eyebrow (number in accent) -> large two-line
 * editorial headline -> optional intro offset to the right on desktop.
 */
type SectionHeadingProps = {
  eyebrow: string;
  lines: [string, string];
  intro?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, lines, intro, className }: SectionHeadingProps) {
  const [number, ...label] = eyebrow.split(" / ");

  return (
    <div className={`reveal border-t border-[var(--border)] pt-6 ${className ?? ""}`}>
      <p className="eyebrow">
        {label.length > 0 ? (
          <>
            <span className="text-[var(--accent)]">{number}</span>
            <span className="text-[var(--text-muted)]"> / </span>
            {label.join(" / ")}
          </>
        ) : (
          eyebrow
        )}
      </p>
      <h2 className="heading-section mt-8 max-w-[1100px] md:mt-12">
        {lines[0]}
        <br />
        {lines[1]}
      </h2>
      {intro && (
        <p className="lead mt-8 md:mt-12 lg:ml-[50%] lg:max-w-[520px]">{intro}</p>
      )}
    </div>
  );
}
