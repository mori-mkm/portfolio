/**
 * Hero — SPEC §8 / HOME_WIREFRAME §8-9.
 * Server Component: no interactivity of its own, all links are plain anchors.
 * ADR-018: bottom-anchored headline. ADR-020: a single primary CTA (no
 * résumé link; GitHub stays in Contact, Footer and the mobile menu).
 * ADR-021: hiring-first positioning — the headline is a full sentence, so it
 * uses the section type scale (a display-size sentence would wrap into 4+
 * lines), followed by two short paragraphs.
 */
type HeroProps = {
  eyebrow: string;
  name: string;
  headlineLine1: string;
  headlineLine2: string;
  paragraphs: string[];
  primaryCta: string;
  primaryCtaHref: string;
  scrollCue: string;
  scrollCueHref: string;
};

export function Hero({
  eyebrow,
  name,
  headlineLine1,
  headlineLine2,
  paragraphs,
  primaryCta,
  primaryCtaHref,
  scrollCue,
  scrollCueHref,
}: HeroProps) {
  const [lead, ...rest] = paragraphs;

  return (
    <section className="container-x relative flex min-h-[calc(92svh-var(--header-h))] flex-col justify-end pt-24 pb-20 md:min-h-[calc(100svh-var(--header-h))] md:pb-28">
      <div className="intro">
        <p className="eyebrow">
          {name}
          <span className="text-[var(--text-muted)]"> / </span>
          <span className="text-[var(--accent)]">{eyebrow}</span>
        </p>

        <h1 className="heading-section mt-8 max-w-[1180px] md:mt-10">
          {headlineLine1}
          <br />
          {headlineLine2}
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[640px]">
            <p className="text-[18px] leading-[1.5] text-[var(--text-primary)] md:text-[20px]">{lead}</p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="mt-5 text-base leading-[1.6] text-[var(--text-secondary)] md:text-[17px]">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row">
            <a href={primaryCtaHref} className="btn btn-primary">
              {primaryCta} <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>

      <a
        href={scrollCueHref}
        className="eyebrow absolute top-8 right-[var(--gutter)] hidden text-[var(--text-muted)] transition-colors hover:text-[var(--accent)] md:block"
      >
        ↓ {scrollCue}
      </a>
    </section>
  );
}
