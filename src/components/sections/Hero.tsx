/**
 * Hero — SPEC §8 / HOME_WIREFRAME §8-9.
 * Server Component: no interactivity of its own, all links are plain anchors.
 * Primary CTA and nav-adjacent links point to sections that don't exist yet
 * (#projects) — inert until those ship (see BACKLOG M1-03+), not a bug.
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
  github: { label: string; href: string };
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
  github,
  resume,
}: HeroProps) {
  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-[var(--container-max)] flex-col justify-center px-5 py-20 md:min-h-[calc(82vh-72px)] md:px-8 md:py-0">
      <p className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-secondary)] mb-8">
        {eyebrow}
      </p>

      <p className="mb-5 text-lg font-medium text-[var(--text-primary)] md:mb-7 md:text-xl">
        {name}
      </p>

      <h1 className="max-w-[900px] text-[44px] font-semibold leading-[0.98] tracking-[-0.03em] text-[var(--text-primary)] md:text-[76px] md:leading-[1.0] md:tracking-[-0.04em] lg:text-[88px]">
        {headlineLine1}
        <br />
        {headlineLine2}
      </h1>

      <p className="mt-8 max-w-[720px] whitespace-pre-line text-[23px] leading-[1.2] text-[var(--text-primary)] md:mt-11 md:text-[30px]">
        {descriptor}
      </p>

      <p className="mt-6 max-w-[620px] text-base leading-[1.55] text-[var(--text-secondary)] md:mt-6 md:text-lg">
        {supportingCopy}
      </p>

      <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-8">
        <a
          href={primaryCtaHref}
          className="inline-flex w-full items-center justify-center bg-[var(--text-primary)] px-6 py-3 text-[15px] font-medium text-[var(--background)] transition-opacity hover:opacity-90 sm:w-auto"
        >
          {primaryCta}
        </a>
        <div className="flex items-center gap-6">
          <a
            href={github.href}
            target="_blank"
            rel="noreferrer"
            className="text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {github.label} ↗
          </a>
          <a
            href={resume.href}
            target="_blank"
            rel="noreferrer"
            className="text-[15px] text-[var(--text-secondary)] hover:text-[var(--text-primary)]"
          >
            {resume.label} ↗
          </a>
        </div>
      </div>

      <a
        href={scrollCueHref}
        className="mt-16 hidden font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-muted)] md:absolute md:bottom-10 md:right-8 md:mt-0 md:block"
      >
        ↓ {scrollCue}
      </a>
    </section>
  );
}

