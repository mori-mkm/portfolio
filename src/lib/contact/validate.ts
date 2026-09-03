import type { Locale } from "@/lib/i18n";
import { isValidLocale } from "@/lib/i18n";

/**
 * Server-side contact form validation (M1-08). Authoritative — the client
 * form's native HTML constraints are UX only, not a security boundary.
 * A small explicit validator, not a new dependency (Zod/Yup) for 4 fields.
 */
export type ValidatedContact = {
  name: string;
  email: string;
  phone: string;
  message: string | null;
  locale: Locale;
};

export type ValidationFieldError = {
  field: "name" | "email" | "phone" | "message" | "locale";
  message: string;
};

export type ValidationResult =
  | { ok: true; data: ValidatedContact }
  | { ok: false; errors: ValidationFieldError[] };

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+()\-.\s]+$/;

function asTrimmedString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  return value.trim();
}

export function validateContactPayload(input: unknown): ValidationResult {
  const errors: ValidationFieldError[] = [];

  if (typeof input !== "object" || input === null) {
    return { ok: false, errors: [{ field: "name", message: "invalid payload" }] };
  }

  const body = input as Record<string, unknown>;

  const name = asTrimmedString(body.name) ?? "";
  if (name.length < 2 || name.length > 100) {
    errors.push({ field: "name", message: "must be 2-100 characters" });
  }

  const email = asTrimmedString(body.email) ?? "";
  if (email.length < 3 || email.length > 254 || !EMAIL_RE.test(email)) {
    errors.push({ field: "email", message: "must be a valid email address" });
  }

  const phone = asTrimmedString(body.phone) ?? "";
  if (phone.length < 7 || phone.length > 40 || !PHONE_RE.test(phone)) {
    errors.push({ field: "phone", message: "must be 7-40 characters, digits/+()-. and spaces only" });
  }

  const rawMessage = asTrimmedString(body.message);
  const message = rawMessage && rawMessage.length > 0 ? rawMessage : null;
  if (message && message.length > 2000) {
    errors.push({ field: "message", message: "must be 2000 characters or fewer" });
  }

  const localeInput = asTrimmedString(body.locale) ?? "";
  if (!isValidLocale(localeInput)) {
    errors.push({ field: "locale", message: "must be en or pt" });
  }

  if (errors.length > 0) {
    return { ok: false, errors };
  }

  return {
    ok: true,
    data: { name, email, phone, message, locale: localeInput as Locale },
  };
}

/** True when the honeypot field was filled in — real visitors never do this. */
export function isHoneypotTriggered(input: unknown): boolean {
  if (typeof input !== "object" || input === null) return false;
  const body = input as Record<string, unknown>;
  return typeof body.website === "string" && body.website.trim().length > 0;
}
