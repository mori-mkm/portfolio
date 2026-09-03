"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

import type { ContactContent } from "@/content/home";
import type { Locale } from "@/lib/i18n";

/**
 * Contact form — M1-08, security-updated (ADR-015). The only Client
 * Component this section needs; `Contact.tsx` itself stays a Server
 * Component (ADR-005). Uncontrolled (native `<form>` + FormData on
 * submit, reset via `form.reset()`) rather than per-field React state —
 * simpler for 4 fields, no form-library dependency needed. Native HTML
 * constraints (required/type/min-max length) give client-side UX; the
 * server route is authoritative.
 *
 * Cloudflare Turnstile: rendered only when
 * NEXT_PUBLIC_TURNSTILE_SITE_KEY is configured — never a fake CAPTCHA
 * placeholder. Uses Cloudflare's official script + explicit `render()`
 * call (not a React wrapper dependency) so the token can be reset after a
 * failed submission (tokens are single-use/short-lived).
 */
const TURNSTILE_SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY;
const TURNSTILE_SCRIPT_SRC = "https://challenges.cloudflare.com/turnstile/v0/api.js";

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: () => void;
          "expired-callback"?: () => void;
        },
      ) => string;
      reset: (widgetId?: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

type ContactFormProps = {
  locale: Locale;
  fields: ContactContent["fields"];
  submitLabel: string;
  submittingLabel: string;
  success: ContactContent["success"];
  error: ContactContent["error"];
  privacyCopy: string;
};

type Status = "idle" | "submitting" | "success" | "error";

export function ContactForm({
  locale,
  fields,
  submitLabel,
  submittingLabel,
  success,
  error,
  privacyCopy,
}: ContactFormProps) {
  const [status, setStatus] = useState<Status>("idle");
  // Always-mounted sr-only live region, decoupled from the visible
  // success/error UI below — a freshly-mounted aria-live element isn't
  // reliably announced by assistive tech, but one already present when
  // its text changes is.
  const [announcement, setAnnouncement] = useState("");

  const [turnstileScriptReady, setTurnstileScriptReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const turnstileContainerRef = useRef<HTMLDivElement>(null);
  const turnstileWidgetIdRef = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileScriptReady || !turnstileContainerRef.current) return;
    if (!window.turnstile) return;

    const widgetId = window.turnstile.render(turnstileContainerRef.current, {
      sitekey: TURNSTILE_SITE_KEY,
      callback: (token) => setTurnstileToken(token),
      "error-callback": () => setTurnstileToken(null),
      "expired-callback": () => setTurnstileToken(null),
    });
    turnstileWidgetIdRef.current = widgetId;

    // Without this, React Strict Mode's dev-mode mount/unmount/remount
    // renders a second widget into the same container without removing
    // the first, leaving a stale widget ID that Cloudflare's own teardown
    // later can't find ("Cannot find Widget ...").
    return () => {
      window.turnstile?.remove(widgetId);
      if (turnstileWidgetIdRef.current === widgetId) {
        turnstileWidgetIdRef.current = undefined;
      }
    };
  }, [turnstileScriptReady]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    setStatus("submitting");
    setAnnouncement("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          phone: data.get("phone"),
          message: data.get("message"),
          locale,
          website: data.get("website"),
          turnstileToken: turnstileToken ?? undefined,
        }),
      });
      const json: unknown = await response.json().catch(() => null);
      const ok =
        response.ok && typeof json === "object" && json !== null && (json as { ok?: unknown }).ok === true;

      if (ok) {
        setStatus("success");
        setAnnouncement(`${success.heading}. ${success.body}`);
        form.reset();
      } else {
        setStatus("error");
        setAnnouncement(`${error.heading} ${error.body}`);
        resetTurnstile();
      }
    } catch {
      setStatus("error");
      setAnnouncement(`${error.heading} ${error.body}`);
      resetTurnstile();
    }
  }

  function resetTurnstile() {
    // Turnstile tokens are single-use / short-lived — get a fresh one for the retry.
    if (TURNSTILE_SITE_KEY && window.turnstile && turnstileWidgetIdRef.current) {
      window.turnstile.reset(turnstileWidgetIdRef.current);
    }
    setTurnstileToken(null);
  }

  const turnstileConfigured = Boolean(TURNSTILE_SITE_KEY);
  const submitDisabled = status === "submitting" || (turnstileConfigured && !turnstileToken);

  return (
    <div className="max-w-[520px]">
      {turnstileConfigured && (
        <Script src={TURNSTILE_SCRIPT_SRC} strategy="afterInteractive" onReady={() => setTurnstileScriptReady(true)} />
      )}

      <div aria-live="polite" role="status" className="sr-only">
        {announcement}
      </div>

      {/*
        Both branches stay mounted throughout — toggled with `hidden`,
        never unmounted — so the Turnstile container below never leaves
        the DOM while its widget is still alive. Unmounting it on success
        (the previous approach) tore the widget's container out from under
        Cloudflare's own bookkeeping without calling remove() first, which
        is what produced the stray "Cannot find Widget" warning once the
        effect's cleanup later tried to remove() an already-detached
        widget.
      */}
      <div hidden={status !== "success"}>
        <p className="font-mono text-sm uppercase tracking-[0.08em] text-[var(--success)]">
          {success.heading}
        </p>
        <p className="mt-3 text-lg text-[var(--text-primary)]">{success.body}</p>
      </div>

      <form onSubmit={handleSubmit} hidden={status === "success"} className="flex flex-col gap-8">
        <Field
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          required
          minLength={2}
          maxLength={100}
          label={fields.name.label}
          placeholder={fields.name.placeholder}
        />
        <Field
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          required
          maxLength={254}
          label={fields.email.label}
          placeholder={fields.email.placeholder}
        />
        <Field
          id="contact-phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          required
          minLength={7}
          maxLength={40}
          label={fields.phone.label}
          placeholder={fields.phone.placeholder}
        />

        <div className="flex flex-col gap-2">
          <label
            htmlFor="contact-message"
            className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]"
          >
            {fields.message.label}
          </label>
          <textarea
            id="contact-message"
            name="message"
            rows={5}
            maxLength={2000}
            placeholder={fields.message.placeholder}
            className="resize-none border-0 border-b border-[var(--border)] bg-transparent py-2 text-[17px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--text-primary)]"
          />
        </div>

        {/* Honeypot — invisible and unreachable for real visitors/AT; bots that fill it are silently ignored server-side. */}
        <div className="hidden" aria-hidden="true">
          <label htmlFor="contact-website">Website</label>
          <input id="contact-website" name="website" type="text" tabIndex={-1} autoComplete="off" />
        </div>

        {turnstileConfigured && <div ref={turnstileContainerRef} />}

        <div className="flex flex-col gap-4">
          <button
            type="submit"
            disabled={submitDisabled}
            className="inline-flex w-fit items-center justify-center bg-[var(--text-primary)] px-6 py-3 text-[15px] font-medium text-[var(--background)] transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {status === "submitting" ? submittingLabel : submitLabel}
          </button>

          {status === "error" && (
            <p className="text-sm text-[var(--warning)]">
              {error.heading} {error.body}
            </p>
          )}

          <p className="text-sm text-[var(--text-muted)]">{privacyCopy}</p>
        </div>
      </form>
    </div>
  );
}

function Field({
  id,
  name,
  type,
  autoComplete,
  required,
  minLength,
  maxLength,
  label,
  placeholder,
}: {
  id: string;
  name: string;
  type: string;
  autoComplete: string;
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  label: string;
  placeholder: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="font-mono text-xs uppercase tracking-[0.08em] text-[var(--text-muted)]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete={autoComplete}
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        placeholder={placeholder}
        className="border-0 border-b border-[var(--border)] bg-transparent py-2 text-[17px] text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)] focus:border-[var(--text-primary)]"
      />
    </div>
  );
}
