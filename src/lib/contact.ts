import type { Locale } from "../seo/site";

export const contactReasons = [
  "General Enquiry",
  "Become a Distributor",
  "Sales",
  "Technical Support",
  "Website Support",
] as const;

export interface ContactPayload {
  firstName: string;
  lastName: string;
  company?: string;
  email: string;
  emailConfirm: string;
  phone?: string;
  country: string;
  state: string;
  reason: string;
  message: string;
  subscribe: boolean;
  website?: string;
  locale: Locale;
}

export interface ContactResponse {
  ok: boolean;
  message: string;
  errors?: Partial<Record<keyof ContactPayload, string>>;
}

export function validateContactPayload(payload: ContactPayload) {
  const errors: Partial<Record<keyof ContactPayload, string>> = {};

  if (!payload.firstName.trim()) {
    errors.firstName = "First name is required.";
  }

  if (!payload.lastName.trim()) {
    errors.lastName = "Last name is required.";
  }

  if (!isValidEmail(payload.email)) {
    errors.email = "A valid email is required.";
  }

  if (payload.email.trim() !== payload.emailConfirm.trim()) {
    errors.emailConfirm = "Email addresses must match.";
  }

  if (!payload.country.trim()) {
    errors.country = "Country is required.";
  }

  if (!payload.state.trim()) {
    errors.state = "State or region is required.";
  }

  if (!payload.reason.trim()) {
    errors.reason = "Reason is required.";
  }

  if (!payload.message.trim()) {
    errors.message = "Message is required.";
  }

  if (payload.website?.trim()) {
    errors.website = "Spam check failed.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}

export function normalizeContactPayload(input: Record<string, unknown>): ContactPayload {
  return {
    firstName: stringValue(input.firstName),
    lastName: stringValue(input.lastName),
    company: stringValue(input.company),
    email: stringValue(input.email),
    emailConfirm: stringValue(input.emailConfirm),
    phone: stringValue(input.phone),
    country: stringValue(input.country) || "United States",
    state: stringValue(input.state) || "Alabama",
    reason: stringValue(input.reason) || "General Enquiry",
    message: stringValue(input.message),
    subscribe: booleanValue(input.subscribe),
    website: stringValue(input.website),
    locale: stringValue(input.locale) === "ar" ? "ar" : "en",
  };
}

function stringValue(value: unknown) {
  if (typeof value === "string") {
    return value;
  }

  if (Array.isArray(value)) {
    return stringValue(value[0]);
  }

  return "";
}

function booleanValue(value: unknown) {
  return value === true || value === "true" || value === "on" || value === "1";
}

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

