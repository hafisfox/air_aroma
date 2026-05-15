import {
  diffuserProducts,
  fragrances,
  getProductById,
  getProductCategoryLabel,
  getProductDetailBasePath,
  getProductName,
  getProductStory,
  products,
  type Product,
} from "../data/products";
import {
  DEFAULT_OG_IMAGE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  type Locale,
  getAbsoluteUrl,
  getLocaleFromPath,
  normalizePath,
  stripLocalePrefix,
  withLocale,
} from "./site";

export type RouteKey =
  | "home"
  | "scentMarketing"
  | "fragrances"
  | "diffusers"
  | "about"
  | "contact"
  | "products"
  | "clients"
  | "blog"
  | "signatureScent"
  | "essentialOils"
  | "productDetail"
  | "notFound";

type StaticRouteKey = Exclude<RouteKey, "productDetail">;
type IndexableStaticRouteKey = Exclude<StaticRouteKey, "notFound">;

interface RouteSeoDefinition {
  basePath: string;
  breadcrumbLabel: Record<Locale, string>;
  description: Record<Locale, string>;
  indexable: boolean;
  keywords?: Record<Locale, string>;
  llmsDescription?: Record<Locale, string>;
  ogType?: "website" | "article";
  sourceFiles: string[];
  title: Record<Locale, string>;
}

type RouteSeoMap = Record<StaticRouteKey, RouteSeoDefinition>;

export interface RouteSeoMetadata {
  routeKey: RouteKey;
  locale: Locale;
  statusCode: number;
  basePath: string;
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  alternates: Array<{ hrefLang: string; href: string }>;
  ogType: "website" | "article";
  ogImage: string;
  noindex: boolean;
  structuredData: object[];
}

interface ResolvedRoute {
  routeKey: RouteKey;
  locale: Locale;
  normalizedPath: string;
  statusCode: number;
  product?: Product;
}

interface IndexablePageEntry {
  routeKey: Exclude<RouteKey, "notFound">;
  title: string;
  url: string;
  description: string;
  sourceFiles: string[];
}

const organizationDescription: Record<Locale, string> = {
  en: "Global scent marketing agency designing custom fragrances, diffuser systems, and sensory branding for luxury brands.",
  ar: "وكالة عالمية في تسويق الروائح تصمم العطور المخصصة وأنظمة النشر والهوية الحسية للعلامات الفاخرة.",
};

const productDetailSourceFiles = [
  "src/pages/ProductDetail.tsx",
  "src/data/products.ts",
];

const routeSeoMap: RouteSeoMap = {
  home: {
    basePath: "/",
    breadcrumbLabel: { en: "Home", ar: "الرئيسية" },
    description: {
      en: "Air Aroma designs scent marketing programs, custom fragrances, and premium diffuser systems for luxury brands around the world.",
      ar: "تصمم Air Aroma برامج تسويق الروائح والعطور المخصصة وأنظمة النشر الفاخرة للعلامات الراقية حول العالم.",
    },
    indexable: true,
    keywords: {
      en: "scent marketing agency, luxury fragrance design, hotel scenting, retail scent branding, aroma diffuser systems",
      ar: "وكالة تسويق الروائح، تصميم عطور فاخرة، تعطير الفنادق، هوية عطرية للمتاجر، أنظمة نشر العطور",
    },
    llmsDescription: {
      en: "Overview of Air Aroma's scent marketing, fragrance design, and diffusion systems for luxury brands worldwide.",
      ar: "نظرة عامة على خدمات Air Aroma في تسويق الروائح وتصميم العطور وأنظمة النشر للعلامات الفاخرة عالمياً.",
    },
    sourceFiles: ["src/pages/Home.tsx", "src/data/products.ts"],
    title: {
      en: "Scent Marketing Agency for Luxury Brands | Air Aroma",
      ar: "وكالة تسويق الروائح للعلامات الفاخرة | Air Aroma",
    },
  },
  scentMarketing: {
    basePath: "/scent-marketing",
    breadcrumbLabel: { en: "Scent Marketing", ar: "تسويق الروائح" },
    description: {
      en: "Luxury scent marketing strategy for hotels, retail, residences, and branded destinations.",
      ar: "استراتيجية تسويق روائح فاخرة للفنادق والمتاجر والمساكن والوجهات ذات العلامات التجارية.",
    },
    indexable: true,
    keywords: {
      en: "scent marketing services, hotel scenting, retail scent strategy, olfactory branding, sensory branding",
      ar: "خدمات تسويق الروائح، تعطير الفنادق، استراتيجية الروائح للمتاجر، الهوية العطرية، الهوية الحسية",
    },
    llmsDescription: {
      en: "Service page covering Air Aroma's scent marketing approach for hospitality, retail, and premium developments.",
      ar: "صفحة خدمة تشرح منهج Air Aroma في تسويق الروائح للضيافة والتجزئة والمشروعات الراقية.",
    },
    sourceFiles: ["src/pages/ScentMarketing.tsx"],
    title: {
      en: "Scent Marketing Services for Luxury Brands | Air Aroma",
      ar: "خدمات تسويق الروائح للعلامات الفاخرة | Air Aroma",
    },
  },
  fragrances: {
    basePath: "/fragrances",
    breadcrumbLabel: { en: "Fragrances", ar: "العطور" },
    description: {
      en: "Explore premium fragrance blends designed for luxury hotels, retail environments, and branded spaces.",
      ar: "اكتشف مجموعات عطرية فاخرة صُممت للفنادق الراقية وبيئات التجزئة والمساحات ذات العلامات التجارية.",
    },
    indexable: true,
    keywords: {
      en: "signature fragrances, hotel scent collection, luxury ambient fragrance, premium fragrance oils",
      ar: "عطور مميزة، مجموعة عطور الفنادق، عطور الأجواء الفاخرة، زيوت عطرية فاخرة",
    },
    llmsDescription: {
      en: "Collection of Air Aroma signature fragrances with scent stories, notes, and use cases.",
      ar: "مجموعة عطور Air Aroma المميزة مع قصص العطر ونفحاته واستخداماته.",
    },
    sourceFiles: ["src/pages/Fragrances.tsx", "src/data/products.ts"],
    title: {
      en: "Luxury Fragrance Collection | Air Aroma",
      ar: "مجموعة عطور فاخرة | Air Aroma",
    },
  },
  diffusers: {
    basePath: "/diffusers",
    breadcrumbLabel: { en: "Diffusers", ar: "الموزعات" },
    description: {
      en: "Cold-air diffuser systems for homes, hospitality, retail, and commercial projects.",
      ar: "أنظمة نشر العطور بالهواء البارد للمنازل والضيافة والتجزئة والمشروعات التجارية.",
    },
    indexable: true,
    keywords: {
      en: "aroma diffusers, cold air diffuser, HVAC scent diffuser, luxury diffuser systems",
      ar: "موزعات عطرية، موزع هواء بارد، موزع عطور HVAC، أنظمة عطرية فاخرة",
    },
    llmsDescription: {
      en: "Commercial and residential diffuser systems, including HVAC and standalone cold-air diffusion solutions.",
      ar: "أنظمة نشر عطرية تجارية وسكنية تشمل حلول HVAC والوحدات المستقلة بالهواء البارد.",
    },
    sourceFiles: ["src/pages/Diffusers.tsx", "src/data/products.ts"],
    title: {
      en: "Luxury Aroma Diffusers | Air Aroma",
      ar: "موزعات عطرية فاخرة | Air Aroma",
    },
  },
  about: {
    basePath: "/about",
    breadcrumbLabel: { en: "About", ar: "عن الشركة" },
    description: {
      en: "Learn how Air Aroma combines fragrance design, diffusion technology, and service strategy for luxury brands.",
      ar: "تعرّف على كيفية دمج Air Aroma بين تصميم العطور وتقنيات النشر واستراتيجية الخدمة للعلامات الفاخرة.",
    },
    indexable: true,
    keywords: {
      en: "about Air Aroma, fragrance design team, scent marketing specialists",
      ar: "عن Air Aroma، فريق تصميم العطور، مختصو تسويق الروائح",
    },
    llmsDescription: {
      en: "About page for Air Aroma's scent design expertise, technology, and service philosophy.",
      ar: "صفحة تعريفية بخبرة Air Aroma في تصميم العطور والتقنية وفلسفة الخدمة.",
    },
    sourceFiles: ["src/pages/About.tsx"],
    title: {
      en: "About Air Aroma | Fragrance Design & Diffusion Expertise",
      ar: "عن Air Aroma | خبرة تصميم العطور وأنظمة النشر",
    },
  },
  contact: {
    basePath: "/contact",
    breadcrumbLabel: { en: "Contact", ar: "اتصل بنا" },
    description: {
      en: "Contact Air Aroma to discuss scent marketing, luxury diffuser systems, and signature fragrance projects.",
      ar: "تواصل مع Air Aroma لمناقشة تسويق الروائح وأنظمة النشر الفاخرة ومشروعات العطور المميزة.",
    },
    indexable: true,
    keywords: {
      en: "contact Air Aroma, fragrance consultation, scent marketing consultation",
      ar: "التواصل مع Air Aroma، استشارة عطور، استشارة تسويق الروائح",
    },
    llmsDescription: {
      en: "Consultation and project brief page for prospective scent marketing clients.",
      ar: "صفحة الاستشارات وملخصات المشاريع للعملاء المحتملين في تسويق الروائح.",
    },
    sourceFiles: ["src/pages/Contact.tsx"],
    title: {
      en: "Contact Air Aroma for Scent Projects",
      ar: "تواصل مع Air Aroma لمشروعات الروائح",
    },
  },
  products: {
    basePath: "/products",
    breadcrumbLabel: { en: "Products", ar: "المنتجات" },
    description: {
      en: "Compare Air Aroma fragrance, diffuser, and essential oil solutions for hospitality, retail, and premium homes.",
      ar: "قارن بين حلول Air Aroma للعطور والموزعات والزيوت الأساسية للضيافة والتجزئة والمنازل الراقية.",
    },
    indexable: true,
    keywords: {
      en: "Air Aroma products, scent marketing products, diffusers and fragrances",
      ar: "منتجات Air Aroma، منتجات تسويق الروائح، موزعات وعطور",
    },
    llmsDescription: {
      en: "Product hub that compares fragrance, diffuser, and essential oil categories for premium spaces.",
      ar: "مركز المنتجات الذي يقارن بين فئات العطور والموزعات والزيوت الأساسية للمساحات الراقية.",
    },
    sourceFiles: ["src/pages/Products.tsx", "src/data/products.ts"],
    title: {
      en: "Scent Marketing Products | Air Aroma",
      ar: "منتجات تسويق الروائح | Air Aroma",
    },
  },
  clients: {
    basePath: "/clients",
    breadcrumbLabel: { en: "Clients", ar: "عملاؤنا" },
    description: {
      en: "See the hospitality, fashion, and lifestyle brands that trust Air Aroma for premium scent experiences.",
      ar: "اطّلع على علامات الضيافة والأزياء وأنماط الحياة التي تثق بـ Air Aroma لتجارب عطرية متميزة.",
    },
    indexable: true,
    keywords: {
      en: "Air Aroma clients, luxury hospitality scent case studies, branded fragrance references",
      ar: "عملاء Air Aroma، دراسات حالة لتعطير الضيافة الفاخرة، مراجع عطرية للعلامات",
    },
    llmsDescription: {
      en: "Client and partnership page featuring selected luxury brands and category coverage.",
      ar: "صفحة العملاء والشراكات التي تعرض علامات فاخرة مختارة وفئات العمل.",
    },
    sourceFiles: ["src/pages/Clients.tsx"],
    title: {
      en: "Luxury Brands Using Air Aroma | Client Portfolio",
      ar: "علامات فاخرة تستخدم Air Aroma | ملف العملاء",
    },
  },
  blog: {
    basePath: "/blog",
    breadcrumbLabel: { en: "Insights", ar: "المعرفة" },
    description: {
      en: "Read practical scent branding insights for hotels, retail destinations, and brand teams.",
      ar: "اقرأ رؤى عملية حول الهوية العطرية للفنادق ووجهات التجزئة وفرق العلامات.",
    },
    indexable: true,
    keywords: {
      en: "scent marketing insights, fragrance branding articles, hotel scent strategy",
      ar: "رؤى تسويق الروائح، مقالات الهوية العطرية، استراتيجية تعطير الفنادق",
    },
    llmsDescription: {
      en: "Insight hub for scent marketing education, project strategy, and regional inspiration.",
      ar: "مركز معرفي لتثقيف تسويق الروائح واستراتيجية المشاريع والإلهام الإقليمي.",
    },
    sourceFiles: ["src/pages/Blog.tsx"],
    title: {
      en: "Scent Marketing Insights | Air Aroma",
      ar: "رؤى تسويق الروائح | Air Aroma",
    },
  },
  signatureScent: {
    basePath: "/signature-scent",
    breadcrumbLabel: { en: "Signature Scent", ar: "العطر المميز" },
    description: {
      en: "Create a signature scent for hotels, retail spaces, homes, and branded environments.",
      ar: "ابتكر عطراً مميزاً للفنادق والمتاجر والمنازل والبيئات ذات العلامات التجارية.",
    },
    indexable: true,
    keywords: {
      en: "signature scent, bespoke fragrance, custom ambient scent design",
      ar: "عطر مميز، عطر مخصص، تصميم روائح مخصصة للأجواء",
    },
    llmsDescription: {
      en: "Service page focused on signature scent creation and the fragrance development process.",
      ar: "صفحة خدمة تركز على ابتكار العطر المميز وعملية تطويره.",
    },
    sourceFiles: ["src/pages/SignatureScent.tsx"],
    title: {
      en: "Signature Scent Design | Air Aroma",
      ar: "تصميم العطر المميز | Air Aroma",
    },
  },
  essentialOils: {
    basePath: "/essential-oils",
    breadcrumbLabel: { en: "Essential Oils", ar: "الزيوت الأساسية" },
    description: {
      en: "Explore essential oil blends designed for diffuser programs, wellness spaces, and premium guest experiences.",
      ar: "استكشف خلطات الزيوت الأساسية المصممة لبرامج نشر العطور ومساحات العافية وتجارب الضيوف الراقية.",
    },
    indexable: true,
    keywords: {
      en: "essential oils, premium diffuser oils, wellness scent blends",
      ar: "زيوت أساسية، زيوت موزعات فاخرة، خلطات عطرية للعافية",
    },
    llmsDescription: {
      en: "Essential oil collection page for wellness-led fragrance programs and diffuser use.",
      ar: "صفحة مجموعة الزيوت الأساسية لبرامج العطور الموجهة للعافية واستخدام الموزعات.",
    },
    sourceFiles: ["src/pages/EssentialOils.tsx"],
    title: {
      en: "Essential Oils for Scent Programs | Air Aroma",
      ar: "الزيوت الأساسية لبرامج الروائح | Air Aroma",
    },
  },
  notFound: {
    basePath: "/404",
    breadcrumbLabel: { en: "Page Not Found", ar: "الصفحة غير موجودة" },
    description: {
      en: "The page you are looking for could not be found.",
      ar: "تعذر العثور على الصفحة التي تبحث عنها.",
    },
    indexable: false,
    sourceFiles: ["src/pages/NotFound.tsx"],
    title: {
      en: "Page Not Found | Air Aroma",
      ar: "الصفحة غير موجودة | Air Aroma",
    },
  },
};

export const indexableRouteKeys = (Object.keys(routeSeoMap) as StaticRouteKey[])
  .filter(
    (routeKey): routeKey is IndexableStaticRouteKey =>
      routeSeoMap[routeKey].indexable,
  );

export function getRouteDefinition(routeKey: StaticRouteKey) {
  return routeSeoMap[routeKey];
}

export function resolveRoute(pathname: string): ResolvedRoute {
  const cleanPath = normalizeInputPath(pathname);
  const locale = getLocaleFromPath(cleanPath);
  const normalizedPath = stripLocalePrefix(cleanPath);

  const staticMatch = (Object.keys(routeSeoMap) as StaticRouteKey[]).find(
    (routeKey) => routeSeoMap[routeKey].basePath === normalizedPath,
  );

  if (staticMatch && staticMatch !== "notFound") {
    return {
      routeKey: staticMatch,
      locale,
      normalizedPath,
      statusCode: 200,
    };
  }

  const productMatch = normalizedPath.match(/^\/products\/([^/]+)$/);
  if (productMatch) {
    const product = getProductById(productMatch[1]);

    if (product) {
      return {
        routeKey: "productDetail",
        locale,
        normalizedPath,
        statusCode: 200,
        product,
      };
    }
  }

  return {
    routeKey: "notFound",
    locale,
    normalizedPath,
    statusCode: 404,
  };
}

export function getRouteMetadata(pathname: string): RouteSeoMetadata {
  const resolved = resolveRoute(pathname);

  if (resolved.routeKey === "productDetail" && resolved.product) {
    return buildProductMetadata(resolved.product, resolved.locale);
  }

  if (resolved.routeKey === "productDetail") {
    return buildStaticRouteMetadata("notFound", resolved.locale, 404);
  }

  if (resolved.routeKey === "notFound") {
    return buildStaticRouteMetadata("notFound", resolved.locale, resolved.statusCode);
  }

  return buildStaticRouteMetadata(
    resolved.routeKey,
    resolved.locale,
    resolved.statusCode,
  );
}

export function getRouteResponseInfo(pathname: string) {
  const resolved = resolveRoute(pathname);

  return {
    locale: resolved.locale,
    statusCode: resolved.statusCode,
  };
}

export function getLlmsEntries(locale: Locale) {
  return getIndexablePageEntries(locale).map((entry) => ({
    routeKey: entry.routeKey,
    title: entry.title,
    url: entry.url,
    description: entry.description,
    sourceFiles: entry.sourceFiles,
  }));
}

function getIndexablePageEntries(locale: Locale): IndexablePageEntry[] {
  const staticEntries = indexableRouteKeys.map((routeKey) => {
    const definition = routeSeoMap[routeKey];

    return {
      routeKey,
      title: definition.title[locale],
      url: getAbsoluteUrl(withLocale(definition.basePath, locale)),
      description:
        definition.llmsDescription?.[locale] ?? definition.description[locale],
      sourceFiles: definition.sourceFiles,
    };
  });

  const productEntries = products.map((product) => ({
    routeKey: "productDetail" as const,
    title: buildProductPageTitle(product, locale),
    url: getAbsoluteUrl(withLocale(getProductDetailBasePath(product), locale)),
    description: getProductStory(product, locale),
    sourceFiles: productDetailSourceFiles,
  }));

  return [...staticEntries, ...productEntries];
}

function buildStaticRouteMetadata(
  routeKey: StaticRouteKey,
  locale: Locale,
  statusCode: number,
): RouteSeoMetadata {
  const definition = routeSeoMap[routeKey];
  const localizedPath = withLocale(definition.basePath, locale);
  const canonicalUrl = definition.indexable
    ? getAbsoluteUrl(localizedPath)
    : undefined;

  return {
    routeKey,
    locale,
    statusCode,
    basePath: definition.basePath,
    title: definition.title[locale],
    description: definition.description[locale],
    keywords: definition.keywords?.[locale],
    canonicalUrl,
    alternates: definition.indexable
      ? buildAlternates(definition.basePath)
      : [],
    ogType: definition.ogType ?? "website",
    ogImage: DEFAULT_OG_IMAGE,
    noindex: !definition.indexable,
    structuredData: buildStaticStructuredData(routeKey, locale),
  };
}

function buildProductMetadata(
  product: Product,
  locale: Locale,
): RouteSeoMetadata {
  const basePath = getProductDetailBasePath(product);
  const pageUrl = getAbsoluteUrl(withLocale(basePath, locale));

  return {
    routeKey: "productDetail",
    locale,
    statusCode: 200,
    basePath,
    title: buildProductPageTitle(product, locale),
    description: getProductStory(product, locale),
    keywords: buildProductKeywords(product, locale),
    canonicalUrl: pageUrl,
    alternates: buildAlternates(basePath),
    ogType: "website",
    ogImage: getAbsoluteUrl(product.images[0].file),
    noindex: false,
    structuredData: buildProductStructuredData(product, locale),
  };
}

function buildStaticStructuredData(
  routeKey: StaticRouteKey,
  locale: Locale,
): object[] {
  const definition = routeSeoMap[routeKey];
  const pageUrl = definition.indexable
    ? getAbsoluteUrl(withLocale(definition.basePath, locale))
    : getAbsoluteUrl("/");

  const baseSchemas = definition.indexable
    ? [buildOrganizationSchema(locale), buildWebsiteSchema(locale)]
    : [];

  const breadcrumbSchema = definition.indexable
    ? buildBreadcrumbSchema(
        [
          {
            name: routeSeoMap.home.breadcrumbLabel[locale],
            item: getAbsoluteUrl(withLocale("/", locale)),
          },
          ...(routeKey === "home"
            ? []
            : [
                {
                  name: definition.breadcrumbLabel[locale],
                  item: getAbsoluteUrl(withLocale(definition.basePath, locale)),
                },
              ]),
        ],
      )
    : null;

  switch (routeKey) {
    case "home":
      return [
        ...baseSchemas,
        {
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: definition.title[locale],
          description: definition.description[locale],
          url: pageUrl,
          about: buildOrganizationReference(),
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ];
    case "scentMarketing":
      return [
        ...baseSchemas,
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: definition.title[locale],
          description: definition.description[locale],
          provider: buildOrganizationReference(),
          serviceType: locale === "ar" ? "تسويق الروائح" : "Scent Marketing",
          url: pageUrl,
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ];
    case "fragrances":
      return [
        ...baseSchemas,
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: definition.title[locale],
          description: definition.description[locale],
          url: pageUrl,
          numberOfItems: fragrances.length,
          itemListElement: fragrances.map((fragrance, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: getProductName(fragrance, locale),
              description: getProductStory(fragrance, locale),
              image: getAbsoluteUrl(fragrance.images[0].file),
              url: getAbsoluteUrl(
                withLocale(getProductDetailBasePath(fragrance), locale),
              ),
              brand: { "@type": "Brand", name: SITE_NAME },
              category: getProductCategoryLabel(fragrance, locale),
            },
          })),
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ];
    case "diffusers":
      return [
        ...baseSchemas,
        {
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: definition.title[locale],
          description: definition.description[locale],
          url: pageUrl,
          numberOfItems: diffuserProducts.length,
          itemListElement: diffuserProducts.map((product, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "Product",
              name: getProductName(product, locale),
              description: getProductStory(product, locale),
              image: getAbsoluteUrl(product.images[0].file),
              url: getAbsoluteUrl(
                withLocale(getProductDetailBasePath(product), locale),
              ),
              brand: { "@type": "Brand", name: SITE_NAME },
              category: getProductCategoryLabel(product, locale),
            },
          })),
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ];
    case "products":
    case "clients":
    case "blog":
    case "essentialOils":
      return [
        ...baseSchemas,
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: definition.title[locale],
          description: definition.description[locale],
          url: pageUrl,
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ];
    case "about":
      return [
        ...baseSchemas,
        {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: definition.title[locale],
          description: definition.description[locale],
          url: pageUrl,
          mainEntity: buildOrganizationReference(),
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ];
    case "contact":
      return [
        ...baseSchemas,
        {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: definition.title[locale],
          description: definition.description[locale],
          url: pageUrl,
          mainEntity: buildOrganizationReference(),
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ];
    case "signatureScent":
      return [
        ...baseSchemas,
        {
          "@context": "https://schema.org",
          "@type": "Service",
          name: definition.title[locale],
          description: definition.description[locale],
          provider: buildOrganizationReference(),
          serviceType:
            locale === "ar" ? "تصميم عطر مميز" : "Signature Scent Design",
          url: pageUrl,
        },
        ...(breadcrumbSchema ? [breadcrumbSchema] : []),
      ];
    case "notFound":
      return [];
  }
}

function buildProductStructuredData(product: Product, locale: Locale) {
  const basePath = getProductDetailBasePath(product);
  const pageUrl = getAbsoluteUrl(withLocale(basePath, locale));
  const categoryLabel = getProductCategoryLabel(product, locale);
  const productName = getProductName(product, locale);

  return [
    buildOrganizationSchema(locale),
    buildWebsiteSchema(locale),
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: productName,
      description: getProductStory(product, locale),
      category: categoryLabel,
      image: product.images.map((image) => getAbsoluteUrl(image.file)),
      url: pageUrl,
      brand: {
        "@type": "Brand",
        name: SITE_NAME,
      },
      additionalProperty: product.images.map((image) => ({
        "@type": "PropertyValue",
        name: locale === "ar" ? "الخيار" : "Option",
        value: image.size,
      })),
    },
    buildBreadcrumbSchema([
      {
        name: routeSeoMap.home.breadcrumbLabel[locale],
        item: getAbsoluteUrl(withLocale("/", locale)),
      },
      {
        name: routeSeoMap.products.breadcrumbLabel[locale],
        item: getAbsoluteUrl(withLocale(routeSeoMap.products.basePath, locale)),
      },
      {
        name: productName,
        item: pageUrl,
      },
    ]),
  ];
}

function buildProductPageTitle(product: Product, locale: Locale) {
  const productName = getProductName(product, locale);

  if (locale === "ar") {
    return `${productName} | ${getProductCategoryLabel(product, locale)} من Air Aroma`;
  }

  return `${productName} | ${getProductCategoryLabel(product, locale)} by Air Aroma`;
}

function buildProductKeywords(product: Product, locale: Locale) {
  const keywords = [
    getProductName(product, locale),
    getProductCategoryLabel(product, locale),
    ...(locale === "ar" ? product.notesAr : product.notesEn).slice(0, 6),
    ...(locale === "ar"
      ? product.characteristicsAr
      : product.characteristicsEn).slice(0, 4),
    locale === "ar" ? "Air Aroma عالمي" : "Air Aroma global",
  ];

  return keywords.filter(Boolean).join(", ");
}

function buildAlternates(basePath: string) {
  return [
    { hrefLang: "en", href: getAbsoluteUrl(basePath) },
    { hrefLang: "ar", href: getAbsoluteUrl(withLocale(basePath, "ar")) },
    { hrefLang: "x-default", href: getAbsoluteUrl(basePath) },
  ];
}

function buildBreadcrumbSchema(
  items: Array<{ name: string; item: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((entry, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: entry.name,
      item: entry.item,
    })),
  };
}

function buildOrganizationSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    description: organizationDescription[locale],
    sameAs: SOCIAL_LINKS,
  };
}

function buildWebsiteSchema(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: locale,
    description: organizationDescription[locale],
    publisher: buildOrganizationReference(),
  };
}

function buildOrganizationReference() {
  return {
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
  };
}

function normalizeInputPath(pathname: string) {
  const withoutHash = pathname.split("#")[0] ?? pathname;
  const withoutQuery = withoutHash.split("?")[0] ?? withoutHash;
  return normalizePath(withoutQuery);
}
