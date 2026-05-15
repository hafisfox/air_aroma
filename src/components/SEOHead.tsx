import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { getRouteMetadata } from "../seo/routes";
import { SITE_NAME, type Locale } from "../seo/site";

interface SEOHeadProps {
  locale: Locale;
}

function upsertMeta(attribute: "name" | "property", value: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${value}"]`,
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

function upsertLink(
  selector: string,
  attributes: Record<string, string>,
) {
  let element = document.head.querySelector<HTMLLinkElement>(selector);

  if (!element) {
    element = document.createElement("link");
    document.head.appendChild(element);
  }

  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
}

export default function SEOHead({ locale }: SEOHeadProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = getRouteMetadata(pathname);

    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.title = metadata.title;

    upsertMeta("name", "description", metadata.description);
    upsertMeta("name", "author", SITE_NAME);
    upsertMeta("name", "theme-color", "#0a0a0a");
    upsertMeta(
      "name",
      "robots",
      metadata.noindex
        ? "noindex, nofollow"
        : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
    );

    if (metadata.keywords) {
      upsertMeta("name", "keywords", metadata.keywords);
    }

    if (metadata.canonicalUrl) {
      upsertLink('link[rel="canonical"]', {
        rel: "canonical",
        href: metadata.canonicalUrl,
      });
    }

    document
      .querySelectorAll('link[data-air-aroma-alternate="true"]')
      .forEach((node) => node.remove());

    for (const alternate of metadata.alternates) {
      const link = document.createElement("link");
      link.setAttribute("rel", "alternate");
      link.setAttribute("hrefLang", alternate.hrefLang);
      link.setAttribute("href", alternate.href);
      link.setAttribute("data-air-aroma-alternate", "true");
      document.head.appendChild(link);
    }

    upsertMeta("property", "og:type", metadata.ogType);
    upsertMeta("property", "og:title", metadata.title);
    upsertMeta("property", "og:description", metadata.description);
    if (metadata.canonicalUrl) {
      upsertMeta("property", "og:url", metadata.canonicalUrl);
    }
    upsertMeta("property", "og:image", metadata.ogImage);
    upsertMeta("property", "og:image:width", "1200");
    upsertMeta("property", "og:image:height", "630");
    upsertMeta("property", "og:site_name", SITE_NAME);
    upsertMeta("property", "og:locale", locale === "ar" ? "ar_SA" : "en_SA");
    upsertMeta("property", "og:see_also", "https://www.youtube.com/user/airaroma");

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", metadata.title);
    upsertMeta("name", "twitter:description", metadata.description);
    upsertMeta("name", "twitter:image", metadata.ogImage);
    upsertMeta("name", "twitter:site", "@AirAroma");

    document
      .querySelectorAll('script[data-air-aroma-schema="true"]')
      .forEach((node) => node.remove());

    if (metadata.structuredData.length > 0) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-air-aroma-schema", "true");
      script.textContent = JSON.stringify(metadata.structuredData);
      document.head.appendChild(script);
    }
  }, [locale, pathname]);

  return null;
}
