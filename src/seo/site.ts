export const SITE_NAME = "Air Aroma";
export const SITE_URL = "https://air-aroma.com";
export const DEFAULT_LOCALE = "en";
export const SUPPORTED_LOCALES = ["en", "ar"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const SOCIAL_LINKS = [
  "https://www.facebook.com/AirAroma",
  "https://www.instagram.com/airaroma",
  "https://twitter.com/AirAroma",
  "https://www.youtube.com/user/airaroma",
];

export const DEFAULT_OG_IMAGE = `${SITE_URL}/products/AROMAX/Aromax-Gold-01.jpg`;

export function getLocaleFromPath(pathname: string): Locale {
  return pathname === "/ar" || pathname.startsWith("/ar/") ? "ar" : "en";
}

export function stripLocalePrefix(pathname: string): string {
  if (pathname === "/ar") {
    return "/";
  }

  if (pathname.startsWith("/ar/")) {
    return pathname.slice(3) || "/";
  }

  return pathname || "/";
}

export function withLocale(basePath: string, locale: Locale): string {
  const normalizedBasePath = normalizePath(basePath);

  if (locale === "en") {
    return normalizedBasePath;
  }

  return normalizedBasePath === "/"
    ? "/ar"
    : `/ar${normalizedBasePath}`;
}

export function getAbsoluteUrl(pathname: string): string {
  const normalizedPath = normalizePath(pathname);
  return `${SITE_URL}${normalizedPath === "/" ? "" : normalizedPath}`;
}

export function switchLocalePath(pathname: string, locale: Locale): string {
  return withLocale(stripLocalePrefix(pathname), locale);
}

export function normalizePath(pathname: string): string {
  if (!pathname) {
    return "/";
  }

  const sanitized = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return sanitized !== "/" && sanitized.endsWith("/")
    ? sanitized.slice(0, -1)
    : sanitized;
}
