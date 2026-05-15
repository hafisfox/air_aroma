import { getRouteMetadata, type RouteKey } from "./routes";
import { type Locale, SITE_NAME } from "./site";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export function renderHeadHtml(routeKey: RouteKey, locale: Locale) {
  const metadata = getRouteMetadata(routeKey, locale);
  const tags: string[] = [
    `<title>${escapeHtml(metadata.title)}</title>`,
    `<meta name="description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="author" content="${SITE_NAME}" />`,
    '<meta name="theme-color" content="#0a0a0a" />',
    metadata.keywords
      ? `<meta name="keywords" content="${escapeHtml(metadata.keywords)}" />`
      : "",
    metadata.noindex
      ? '<meta name="robots" content="noindex, nofollow" />'
      : '<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />',
    metadata.canonicalUrl
      ? `<link rel="canonical" href="${metadata.canonicalUrl}" />`
      : "",
    ...metadata.alternates.map(
      (alternate) =>
        `<link rel="alternate" hrefLang="${alternate.hrefLang}" href="${alternate.href}" />`,
    ),
    `<meta property="og:type" content="${metadata.ogType}" />`,
    `<meta property="og:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta property="og:description" content="${escapeHtml(metadata.description)}" />`,
    metadata.canonicalUrl
      ? `<meta property="og:url" content="${metadata.canonicalUrl}" />`
      : "",
    `<meta property="og:image" content="${metadata.ogImage}" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    `<meta property="og:site_name" content="${SITE_NAME}" />`,
    `<meta property="og:locale" content="${locale === "ar" ? "ar_SA" : "en_SA"}" />`,
    '<meta property="og:see_also" content="https://www.instagram.com/airaroma" />',
    '<meta property="og:see_also" content="https://www.facebook.com/AirAroma" />',
    '<meta property="og:see_also" content="https://www.youtube.com/user/airaroma" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(metadata.title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(metadata.description)}" />`,
    `<meta name="twitter:image" content="${metadata.ogImage}" />`,
    '<meta name="twitter:site" content="@AirAroma" />',
    metadata.structuredData.length > 0
      ? `<script type="application/ld+json">${JSON.stringify(metadata.structuredData)}</script>`
      : "",
  ];

  return tags.filter(Boolean).join("");
}
