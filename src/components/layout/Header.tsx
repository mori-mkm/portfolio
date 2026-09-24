"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import type { Locale } from "@/lib/i18n";
import type { NavItem } from "@/content/home";

/**
 * Header — SPEC §7 / HOME_WIREFRAME §7.
 * Client Component because it genuinely needs interaction state:
 * - sticky background/opacity change on scroll (§7.5)
 * - mobile menu open/close (§7.6)
 * ADR-018: desktop shows brand, section links, language and a "Contact →"
 * CTA only; Resume/GitHub/LinkedIn live in the mobile menu, hero and footer.
 */
type HeaderProps = {
  locale: Locale;
  brand: string;
  nav: NavItem[];
  languageSwitcher: { en: string; pt: string };
  menuToggle: { open: string; close: string };
  github: { label: string; href: string };
  linkedin: { label: string; href: string };
  resume: { label: string; href: string };
};

export function Header({
  locale,
  brand,
  nav,
  languageSwitcher,
  menuToggle,
  github,
  linkedin,
  resume,
}: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  // ADR-018: Contact renders as the header CTA, not as a regular nav item.
  const contact = nav.find((item) => item.href === "#contact");
  const links = nav.filter((item) => item !== contact);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile overlay on route/locale change or Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      id="top"
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled || menuOpen
          ? "border-[var(--border)] bg-[var(--background)]/85 backdrop-blur-[6px]"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-[13px] font-medium tracking-[0.08em] text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
        >
          {brand.toUpperCase()}
        </button>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="eyebrow transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-8 lg:flex">
          <LanguageSwitcher locale={locale} labels={languageSwitcher} />
          {contact && (
            <a href={contact.href} className="link-arrow">
              {contact.label} <span aria-hidden="true">→</span>
            </a>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="eyebrow text-[var(--text-primary)] lg:hidden"
        >
          {menuOpen ? menuToggle.close : menuToggle.open}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-[var(--header-h)] bottom-0 z-40 overflow-y-auto bg-[var(--background)] px-[var(--gutter)] py-10 lg:hidden"
        >
          <nav aria-label="Primary" className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-[32px] leading-[1.1] tracking-[-0.02em] text-[var(--text-primary)] transition-colors hover:text-[var(--accent)]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-10 flex flex-col gap-6 border-t border-[var(--border)] pt-6">
            {/* WIREFRAME §7.7: language switcher sits inside the menu, before external links. */}
            <LanguageSwitcher locale={locale} labels={languageSwitcher} />

            {/* WIREFRAME §7.6: GitHub -> LinkedIn -> Resume, in that order. */}
            <div className="flex flex-col gap-3">
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                className="eyebrow transition-colors hover:text-[var(--accent)]"
              >
                {github.label} ↗
              </a>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="eyebrow transition-colors hover:text-[var(--accent)]"
              >
                {linkedin.label} ↗
              </a>
              <a
                href={resume.href}
                target="_blank"
                rel="noreferrer"
                className="eyebrow transition-colors hover:text-[var(--accent)]"
              >
                {resume.label} ↗
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function LanguageSwitcher({
  locale,
  labels,
}: {
  locale: Locale;
  labels: { en: string; pt: string };
}) {
  return (
    <div className="eyebrow flex items-center gap-1.5" aria-label="Language">
      <Link
        href="/en"
        className={locale === "en" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:text-[var(--accent)]"}
        aria-current={locale === "en" ? "true" : undefined}
      >
        {labels.en}
      </Link>
      <span className="text-[var(--text-muted)]">/</span>
      <Link
        href="/pt"
        className={locale === "pt" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)] hover:text-[var(--accent)]"}
        aria-current={locale === "pt" ? "true" : undefined}
      >
        {labels.pt}
      </Link>
    </div>
  );
}
