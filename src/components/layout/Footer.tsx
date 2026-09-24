import type { FooterContent } from "@/content/home";

/**
 * Footer — PORTFOLIO_SPEC §21, ADR-018. Server Component.
 * Closes the page with a large statement, then an identity line and the
 * external links. No email on purpose: the Contact form replaces a public
 * address (same rule as Contact.tsx).
 */
type FooterProps = {
  brand: string;
  content: FooterContent;
  links: { label: string; href: string }[];
};

export function Footer({ brand, content, links }: FooterProps) {
  return (
    <footer className="container-x pt-[var(--section-y)] pb-10">
      <p className="heading-display reveal border-t border-[var(--border)] pt-10 md:pt-16">
        {content.headlineLine1}
        <br />
        <span className="text-[var(--text-muted)]">{content.headlineLine2}</span>
      </p>

      <div className="mt-20 grid gap-10 border-t border-[var(--border)] pt-8 md:mt-32 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="font-mono text-[13px] font-medium tracking-[0.08em] text-[var(--text-primary)]">
            {brand.toUpperCase()}
          </p>
          <p className="mt-2 text-[15px] text-[var(--text-secondary)]">{content.role}</p>
          <p className="mt-1 text-[15px] text-[var(--text-secondary)]">{content.location}</p>
        </div>

        <ul className="flex flex-col gap-3 md:col-span-4">
          {links.map((link) => (
            <li key={link.label}>
              <a href={link.href} target="_blank" rel="noopener noreferrer" className="link-arrow">
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-col gap-3 md:col-span-3 md:items-end">
          <a href="#top" className="link-arrow">
            {content.backToTop} <span aria-hidden="true">↑</span>
          </a>
          <p className="eyebrow text-[var(--text-muted)]">
            © {new Date().getFullYear()} {brand}
          </p>
        </div>
      </div>
    </footer>
  );
}
