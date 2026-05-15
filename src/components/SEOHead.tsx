import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface SEOHeadProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalPath?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object | object[];
  noindex?: boolean;
}

const SITE_URL = "https://air-aroma.com";
const DEFAULT_OG_IMAGE = "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/the-lana-banner-1.jpg";
const SITE_NAME = "Air Aroma";

/**
 * SEOHead component — dynamically manages document <head> meta tags for SEO.
 * Handles title, meta description, Open Graph, Twitter Cards, canonical URL,
 * and JSON-LD structured data injection using react-helmet-async.
 */
export default function SEOHead({
  title,
  description,
  keywords,
  canonicalPath,
  ogImage,
  ogType = "website",
  structuredData,
  noindex,
}: SEOHeadProps) {
  const location = useLocation();
  const currentPath = canonicalPath || location.pathname;
  const canonicalUrl = `${SITE_URL}${currentPath === "/" ? "" : currentPath}`;
  const imageUrl = ogImage || DEFAULT_OG_IMAGE;

  return (
    <Helmet>
      {/* Standard Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      )}
      <meta name="author" content="Air Aroma" />

      {/* Canonical Link */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:site" content="@AirAroma" />

      {/* Schema.org JSON-LD */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(Array.isArray(structuredData) ? structuredData : [structuredData])}
        </script>
      )}
    </Helmet>
  );
}
