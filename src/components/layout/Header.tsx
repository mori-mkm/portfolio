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
 * Nav items besides "About" point to anchors that don't exist until later
 * milestones (Selected Work, Case Studies, etc. — see BACKLOG M1-03+);
 * that's expected, not a bug, until those sections ship.
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
      className={`sticky top-0 z-50 border-b transition-colors ${
        scrolled
          ? "border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-sm"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[var(--container-max)] items-center justify-between px-5 md:h-[72px] md:px-8">
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="font-mono text-sm font-semibold tracking-[0.02em] text-[var(--text-primary)]"
        >
          {brand.toUpperCase()}
        </button>

        {/* Desktop nav */}
        <nav
          aria-label="Primary"
          className="hidden items-center gap-7 md:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[15px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher locale={locale} labels={languageSwitcher} />
          <a
            href={resume.href}
            target="_blank"
            rel="noreferrer"
            className="text-[15px] text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
          >
            {resume.label} ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          className="font-mono text-sm uppercase tracking-[0.04em] text-[var(--text-primary)] md:hidden"
        >
          {menuOpen ? menuToggle.close : menuToggle.open}
        </button>
      </div>

      {menuOpen && (
        <div
          id="mobile-menu"
          className="fixed inset-x-0 top-16 bottom-0 z-40 overflow-y-auto bg-[var(--background)] px-5 py-8 md:hidden"
        >
          <nav aria-label="Primary" className="flex flex-col gap-5">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl text-[var(--text-primary)]"
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
                className="text-[15px] text-[var(--text-secondary)]"
              >
                {github.label} ↗
              </a>
              <a
                href={linkedin.href}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-[var(--text-secondary)]"
              >
                {linkedin.label} ↗
              </a>
              <a
                href={resume.href}
                target="_blank"
                rel="noreferrer"
                className="text-[15px] text-[var(--text-secondary)]"
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
    <div className="flex items-center gap-1 text-[15px]" aria-label="Language">
      <Link
        href="/en"
        className={locale === "en" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}
        aria-current={locale === "en" ? "true" : undefined}
      >
        {labels.en}
      </Link>
      <span className="text-[var(--text-muted)]">/</span>
      <Link
        href="/pt"
        className={locale === "pt" ? "text-[var(--text-primary)]" : "text-[var(--text-muted)]"}
        aria-current={locale === "pt" ? "true" : undefined}
      >
        {labels.pt}
      </Link>
    </div>
  );
}
