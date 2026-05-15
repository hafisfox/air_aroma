import { mkdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  getLlmsEntries,
  getRouteDefinition,
  indexableRouteKeys,
} from "../src/seo/routes";
import {
  getAbsoluteUrl,
  withLocale,
  type Locale,
} from "../src/seo/site";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const publicDir = path.join(rootDir, "public");

async function generate() {
  await mkdir(publicDir, { recursive: true });

  const routeEntries = await Promise.all(
    indexableRouteKeys.flatMap((routeKey) => {
      const definition = getRouteDefinition(routeKey);

      return (["en", "ar"] as Locale[]).map(async (locale) => ({
        routeKey,
        locale,
        lastModified: await getLastModified(definition.sourceFiles),
        url: getAbsoluteUrl(withLocale(definition.basePath, locale)),
      }));
    }),
  );

  const sitemapXml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    '        xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...routeEntries.map((entry) => {
      const definition = getRouteDefinition(entry.routeKey);
      const englishUrl = getAbsoluteUrl(definition.basePath);
      const arabicUrl = getAbsoluteUrl(withLocale(definition.basePath, "ar"));

      return [
        "  <url>",
        `    <loc>${entry.url}</loc>`,
        `    <lastmod>${entry.lastModified}</lastmod>`,
        `    <xhtml:link rel="alternate" hreflang="en" href="${englishUrl}" />`,
        `    <xhtml:link rel="alternate" hreflang="ar" href="${arabicUrl}" />`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${englishUrl}" />`,
        "  </url>",
      ].join("\n");
    }),
    "</urlset>",
    "",
  ].join("\n");

  const llmsTxt = [
    "# Air Aroma",
    "> Premium scent marketing, fragrance design, and diffuser solutions for Saudi Arabia and the GCC.",
    "",
    "## English pages",
    ...getLlmsEntries("en").map(
      (entry) => `- [${entry.title}](${entry.url}): ${entry.description}`,
    ),
    "",
    "## Arabic pages",
    ...getLlmsEntries("ar").map(
      (entry) => `- [${entry.title}](${entry.url}): ${entry.description}`,
    ),
    "",
    "## Key facts",
    "- Air Aroma focuses on luxury hospitality, retail, residential, and branded environments.",
    "- The site provides service, product, and fragrance collection pages for discovery and consultation.",
    "",
  ].join("\n");

  await writeFile(path.join(publicDir, "sitemap.xml"), sitemapXml, "utf8");
  await writeFile(path.join(publicDir, "llms.txt"), llmsTxt, "utf8");
}

async function getLastModified(sourceFiles: string[]) {
  const mtimes = await Promise.all(
    sourceFiles.map(async (sourceFile) => {
      const filePath = path.join(rootDir, sourceFile);
      const details = await stat(filePath);
      return details.mtime;
    }),
  );

  const latest = mtimes.reduce((currentLatest, currentValue) =>
    currentValue > currentLatest ? currentValue : currentLatest,
  );

  return latest.toISOString().slice(0, 10);
}

void generate();
