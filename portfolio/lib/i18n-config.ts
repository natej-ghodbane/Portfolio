export const LOCALES = ["en", "fr"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_COOKIE = "NEXT_LOCALE";

export function isLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale);
}

export function getPreferredLocale(acceptLanguageHeader: string | null): Locale {
  if (!acceptLanguageHeader) {
    return DEFAULT_LOCALE;
  }

  const normalized = acceptLanguageHeader.toLowerCase();
  if (normalized.includes("fr")) {
    return "fr";
  }

  return DEFAULT_LOCALE;
}
