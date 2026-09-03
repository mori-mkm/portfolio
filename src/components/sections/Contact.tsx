import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import type { ContactContent } from "@/content/home";
import type { Locale } from "@/lib/i18n";

/**
 * Contact — PORTFOLIO_SPEC §20 / HOME_WIREFRAME §30, task M1-08.
 * Server Component: the interactive form state lives entirely in the
 * small Client Component below (ADR-005). Reuses `content.externalLinks`
 * (LinkedIn/GitHub/Resume) rather than duplicating URLs here — no Email
 * link, on purpose: the real form replaces the need to publish a personal
 * address (CONTACT_NOTIFICATION_EMAIL stays server-only).
 */
type ContactProps = ContactContent & {
  locale: Locale;
  linkedin: { label: string; href: string };
  github: { label: string; href: string };
  resume: { label: string; href: string };
};

export function Contact({
  eyebrow,
  headlineLine1,
  headlineLine2,
  supportingCopy,
  fields,
  submitLabel,
  submittingLabel,
  success,
  error,
  privacyCopy,
  locale,
  linkedin,
  github,
  resume,
}: ContactProps) {
  const links = [linkedin, github, resume];

  return (
    <section
      id="contact"
      className="mx-auto max-w-[var(--container-max)] px-5 py-20 md:px-8 md:py-32"
    >
      <SectionHeading eyebrow={eyebrow} lines={[headlineLine1, headlineLine2]} />

      <div className="mt-10 flex flex-col gap-12 md:mt-16 md:flex-row md:gap-16">
        <div className="flex flex-col gap-8 md:w-1/3">
          <p className="max-w-[360px] text-lg leading-[1.55] text-[var(--text-secondary)] md:text-xl">
            {supportingCopy}
          </p>

          <ul className="flex flex-col divide-y divide-[var(--border)] border-y border-[var(--border)]">
            {links.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between py-5 text-[17px] text-[var(--text-primary)] transition-colors hover:text-[var(--text-secondary)]"
                >
                  {link.label}
                  <span className="inline-block motion-safe:transition-transform motion-safe:duration-200 group-hover:translate-x-0.5">
                    ↗
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:w-2/3">
          <ContactForm
            locale={locale}
            fields={fields}
            submitLabel={submitLabel}
            submittingLabel={submittingLabel}
            success={success}
            error={error}
            privacyCopy={privacyCopy}
          />
        </div>
      </div>
    </section>
  );
}
