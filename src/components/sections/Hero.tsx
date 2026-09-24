/**
 * Hero — SPEC §8 / HOME_WIREFRAME §8-9.
 * Server Component: no interactivity of its own, all links are plain anchors.
 * ADR-018: bottom-anchored display headline, one primary + one secondary
 * CTA (GitHub moved out of the hero; it stays in Contact, Footer, mobile menu).
 */
type HeroProps = {
  eyebrow: string;
  name: string;
  headlineLine1: string;
  headlineLine2: string;
  descriptor: string;
  supportingCopy: string;
  primaryCta: string;
  primaryCtaHref: string;
  scrollCue: string;
  scrollCueHref: string;
  resume: { label: string; href: string };
};

export function Hero({
  eyebrow,
  name,
  headlineLine1,
  headlineLine2,
  descriptor,
  supportingCopy,
  primaryCta,
  primaryCtaHref,
  scrollCue,
  scrollCueHref,
  resume,
}: HeroProps) {
  return (
    <section className="container-x relative flex min-h-[calc(92svh-var(--header-h))] flex-col justify-end pt-24 pb-20 md:min-h-[calc(100svh-var(--header-h))] md:pb-28">
      <div className="intro">
        <p className="eyebrow">
          {name}
          <span className="text-[var(--text-muted)]"> / </span>
          <span className="text-[var(--accent)]">{eyebrow}</span>
        </p>

        <h1 className="heading-display mt-8 md:mt-10">
          {headlineLine1}
          <br />
          {headlineLine2}
        </h1>

        <div className="mt-10 flex flex-col gap-10 md:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[560px]">
            <p className="whitespace-pre-line text-[20px] leading-[1.35] text-[var(--text-primary)] md:text-[24px]">
              {descriptor}
            </p>
            <p className="mt-5 text-base leading-[1.6] text-[var(--text-secondary)] md:text-[17px]">
              {supportingCopy}
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={primaryCtaHref} className="btn btn-primary">
              {primaryCta} <span aria-hidden="true">→</span>
            </a>
            <a href={resume.href} target="_blank" rel="noreferrer" className="btn btn-secondary">
              {resume.label} <span aria-hidden="true">↗</span>
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
