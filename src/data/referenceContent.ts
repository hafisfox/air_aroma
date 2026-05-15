import type { Locale } from "../seo/site";

export type AnchorId =
  | "overview"
  | "tech-specs"
  | "buy-now"
  | "diffusers"
  | "signature-scents"
  | "scents"
  | "private-label"
  | "aropromo"
  | "aromax"
  | "aroslim"
  | "aroscent"
  | "ecoscent"
  | "locations"
  | "contact-form";

export interface SecondaryNavItem {
  label: Record<Locale, string>;
  href: string;
  anchorId?: AnchorId;
  external?: boolean;
}

export interface ShowcaseSection {
  id: AnchorId;
  title: Record<Locale, string>;
  description: Record<Locale, string>;
  image: string;
  imageAlt: Record<Locale, string>;
  href: string;
  cta: Record<Locale, string>;
  tone?: "light" | "warm" | "grey" | "dark";
  placeholder?: boolean;
}

export const STORE_URL = "https://www.air-aroma.com/store/";
export const AROMAX_STORE_URL = "https://www.air-aroma.com/store/aromax/";

export const referenceImages = {
  logo: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/airaroma-logo2x.png",
  flagUs: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2021/05/flag-us.png",
  homeHeroLana: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/the-lana-banner-1.jpg",
  homeHeroCustomScent: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/custom-scent-design-banner.jpg",
  productsHero: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2021/04/hero-products-home.jpg",
  productDiffuser: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/10/download-7.jpg",
  productSignature: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/10/download-8.jpg",
  productScents: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/10/download-9.jpg",
  productPrivateLabel: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/park-hyatt-tile-private-label-.jpg",
  productAropromo: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/10/download-10.jpg",
  diffuserAromax: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2021/05/tile-product-aromax.jpg",
  diffuserAroscent: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/10/download-12.jpg",
  diffuserAroslim: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/10/download-13.jpg",
  diffuserEcoscent: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/10/download-14.jpg",
  aromaxHero: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/12/hero-product-aromax-1.jpg",
  aromaxContent: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/12/aromax-silver-content-1024x728.jpg",
  aromaxSilverTile: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/12/tile-aromax-silver.jpg",
  aromaxGoldTile: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/12/tile-aromax-gold.jpg",
  aromaxBlackTile: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/12/tile-aromax-black.jpg",
  aromaxRedTile: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/12/tile-aromax-red.jpg",
  capellaFeature: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2023/06/feature-capella-hotels.jpg",
  jlrFeature: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2021/05/UPDATED-JLR-feature.jpg",
  rafflesLogo: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2026/05/Raffles-logo.png",
  maxMaraLogo: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/max-mara.png",
  astonMartinLogo: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/aston-martin.png",
  cathayPacificLogo: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/cathay-pacific.png",
};

export const mainNavItems = [
  { label: { en: "Scent Marketing", ar: "تسويق الروائح" }, path: "/scent-marketing" },
  { label: { en: "Products", ar: "المنتجات" }, path: "/products" },
  { label: { en: "Clients", ar: "العملاء" }, path: "/clients" },
  { label: { en: "Blog", ar: "المدونة" }, path: "/blog" },
  { label: { en: "Contact", ar: "اتصل بنا" }, path: "/contact" },
] as const;

export const footerColumns = [
  [
    { label: { en: "Scent Marketing", ar: "تسويق الروائح" }, path: "/scent-marketing" },
    { label: { en: "Products", ar: "المنتجات" }, path: "/products" },
    { label: { en: "Clients", ar: "العملاء" }, path: "/clients" },
    { label: { en: "Blog", ar: "المدونة" }, path: "/blog" },
    { label: { en: "Store", ar: "المتجر" }, href: STORE_URL },
  ],
  [
    { label: { en: "About", ar: "عن الشركة" }, path: "/about" },
    { label: { en: "Services", ar: "الخدمات" }, path: "/scent-marketing" },
    { label: { en: "Contact", ar: "اتصل بنا" }, path: "/contact" },
    { label: { en: "Facebook", ar: "فيسبوك" }, href: "https://www.facebook.com/AirAroma" },
    { label: { en: "Instagram", ar: "إنستغرام" }, href: "https://www.instagram.com/airaroma" },
  ],
  [
    { label: { en: "Twitter", ar: "تويتر" }, href: "https://twitter.com/AirAroma" },
    { label: { en: "YouTube", ar: "يوتيوب" }, href: "https://www.youtube.com/user/airaroma" },
    { label: { en: "Legal", ar: "قانوني" }, href: "https://www.air-aroma.com/legal/" },
    { label: { en: "FAQ", ar: "الأسئلة الشائعة" }, href: "https://www.air-aroma.com/faq/" },
  ],
] as const;

export const productsSecondaryNav: SecondaryNavItem[] = [
  { label: { en: "Diffusers", ar: "الموزعات" }, href: "#diffusers", anchorId: "diffusers" },
  { label: { en: "Signature Scents", ar: "العطور المميزة" }, href: "#signature-scents", anchorId: "signature-scents" },
  { label: { en: "Scents", ar: "العطور" }, href: "#scents", anchorId: "scents" },
  { label: { en: "Private Label", ar: "العلامة الخاصة" }, href: "#private-label", anchorId: "private-label" },
  { label: { en: "Aropromo", ar: "أروبرومو" }, href: "#aropromo", anchorId: "aropromo" },
];

export const diffusersSecondaryNav: SecondaryNavItem[] = [
  { label: { en: "Aromax", ar: "آروماكس" }, href: "#aromax", anchorId: "aromax" },
  { label: { en: "Aroslim", ar: "أروسليم" }, href: "#aroslim", anchorId: "aroslim" },
  { label: { en: "Aroscent", ar: "أروسنت" }, href: "#aroscent", anchorId: "aroscent" },
  { label: { en: "Ecoscent", ar: "إيكوسنت" }, href: "#ecoscent", anchorId: "ecoscent" },
];

export const aromaxSecondaryNav: SecondaryNavItem[] = [
  { label: { en: "Overview", ar: "نظرة عامة" }, href: "#overview", anchorId: "overview" },
  { label: { en: "Tech Specs", ar: "المواصفات" }, href: "#tech-specs", anchorId: "tech-specs" },
  { label: { en: "Buy Now", ar: "اشتر الآن" }, href: "#buy-now", anchorId: "buy-now" },
];

export const contactSecondaryNav: SecondaryNavItem[] = [
  { label: { en: "Contact", ar: "التواصل" }, href: "#contact-form", anchorId: "contact-form" },
  { label: { en: "Locations", ar: "المكاتب" }, href: "#locations", anchorId: "locations" },
];

export const productShowcases: ShowcaseSection[] = [
  {
    id: "diffusers",
    title: { en: "Diffusers", ar: "الموزعات" },
    description: {
      en: "Market leading scent diffuser technology. Elegant, discreet and easy to use aroma diffuser systems.",
      ar: "تقنية نشر عطرية رائدة. أنظمة أنيقة وهادئة وسهلة الاستخدام.",
    },
    image: referenceImages.productDiffuser,
    imageAlt: { en: "Aromax diffuser", ar: "موزع آروماكس" },
    href: "/diffusers",
    cta: { en: "View", ar: "عرض" },
    tone: "warm",
  },
  {
    id: "signature-scents",
    title: { en: "Signature Scents", ar: "العطور المميزة" },
    description: {
      en: "Create your own scent. Perfectly tailored to your brand and exclusively yours to use.",
      ar: "اصنع عطرك الخاص، مصمماً بدقة لعلامتك ومخصصاً لاستخدامك وحدك.",
    },
    image: referenceImages.productSignature,
    imageAlt: { en: "Air Aroma blotter sample", ar: "عينة عطرية من Air Aroma" },
    href: "/signature-scent",
    cta: { en: "View", ar: "عرض" },
    tone: "light",
  },
  {
    id: "scents",
    title: { en: "Scents", ar: "العطور" },
    description: {
      en: "A carefully curated range of fragrances from essential oils to bespoke aromas.",
      ar: "مجموعة منتقاة بعناية من العطور، من الزيوت الأساسية إلى الروائح المصممة خصيصاً.",
    },
    image: referenceImages.productScents,
    imageAlt: { en: "Summerbliss fragrance oil", ar: "زيت عطري من Air Aroma" },
    href: "/fragrances",
    cta: { en: "View", ar: "عرض" },
    tone: "grey",
  },
  {
    id: "private-label",
    title: { en: "Private Label", ar: "العلامة الخاصة" },
    description: {
      en: "Transform your scent into a lasting, tangible keepsake that generates revenue.",
      ar: "حوّل عطرك إلى تذكار ملموس ودائم يمكن بيعه وتقديمه للعملاء.",
    },
    image: referenceImages.productPrivateLabel,
    imageAlt: { en: "Private label candle", ar: "شمعة بعلامة خاصة" },
    href: "/contact#contact-form",
    cta: { en: "Enquire", ar: "استفسر" },
    tone: "grey",
    placeholder: true,
  },
  {
    id: "aropromo",
    title: { en: "Aropromo", ar: "أروبرومو" },
    description: {
      en: "Point of Sale scenting devices designed around your brand and products.",
      ar: "أجهزة تعطير لنقاط البيع مصممة حول علامتك ومنتجاتك.",
    },
    image: referenceImages.productAropromo,
    imageAlt: { en: "Aropromo scenting device", ar: "جهاز أروبرومو للتعطير" },
    href: STORE_URL,
    cta: { en: "Visit Store", ar: "زيارة المتجر" },
    tone: "dark",
    placeholder: true,
  },
];

export const diffuserShowcases: ShowcaseSection[] = [
  {
    id: "aromax",
    title: { en: "Aromax", ar: "آروماكس" },
    description: {
      en: "Smooth, stylish, and ready to fragrance your home.",
      ar: "ناعم وأنيق وجاهز لتعطير منزلك.",
    },
    image: referenceImages.diffuserAromax,
    imageAlt: { en: "Aromax scent diffuser", ar: "موزع آروماكس" },
    href: "/products/aromax",
    cta: { en: "View", ar: "عرض" },
    tone: "light",
  },
  {
    id: "aroscent",
    title: { en: "Aroscent", ar: "أروسنت" },
    description: {
      en: "A discreet professional diffuser for larger scenting needs.",
      ar: "موزع احترافي هادئ للمساحات التي تحتاج تغطية أكبر.",
    },
    image: referenceImages.diffuserAroscent,
    imageAlt: { en: "Aroscent aroma diffuser", ar: "موزع أروسنت" },
    href: STORE_URL,
    cta: { en: "Shop online", ar: "تسوق الآن" },
    tone: "dark",
    placeholder: true,
  },
  {
    id: "aroslim",
    title: { en: "Aroslim", ar: "أروسليم" },
    description: {
      en: "A slim diffusion system for commercial and residential scenting.",
      ar: "نظام نشر نحيف للتعطير التجاري والسكني.",
    },
    image: referenceImages.diffuserAroslim,
    imageAlt: { en: "Aroslim diffusion system", ar: "نظام أروسليم" },
    href: "/contact#contact-form",
    cta: { en: "Enquire", ar: "استفسر" },
    tone: "grey",
    placeholder: true,
  },
  {
    id: "ecoscent",
    title: { en: "Ecoscent", ar: "إيكوسنت" },
    description: {
      en: "HVAC scent diffusion for larger environments.",
      ar: "نشر عطري عبر أنظمة الهواء للمساحات الأكبر.",
    },
    image: referenceImages.diffuserEcoscent,
    imageAlt: { en: "Ecoscent HVAC scent diffuser", ar: "موزع إيكوسنت" },
    href: "/contact#contact-form",
    cta: { en: "Contact", ar: "تواصل" },
    tone: "warm",
    placeholder: true,
  },
];

export const featuredClients = [
  {
    name: "Capella Hotels",
    image: referenceImages.capellaFeature,
    alt: { en: "Capella Hotels scent project", ar: "مشروع عطري لفنادق كابيلا" },
  },
  {
    name: "JLR",
    image: referenceImages.jlrFeature,
    alt: { en: "JLR vehicle scent project", ar: "مشروع عطري لـ JLR" },
  },
];

export const clientLogos = [
  { name: "Raffles", image: referenceImages.rafflesLogo },
  { name: "Max Mara", image: referenceImages.maxMaraLogo },
  { name: "Aston Martin", image: referenceImages.astonMartinLogo },
  { name: "Cathay Pacific", image: referenceImages.cathayPacificLogo },
];

export const officeDetails = {
  local: {
    title: { en: "Local Office", ar: "المكتب المحلي" },
    lines: [
      "Air Aroma USA",
      "251 West 39th Street, 8th Floor",
      "New York, NY 10018",
      "United States of America",
      "",
      "Tel: +1 646 861 7872",
      "Fax: +1 212 704 2180",
      "Web: https://www.air-aroma.com",
    ],
  },
  corporate: {
    title: { en: "Corporate Office", ar: "المكتب الرئيسي" },
    lines: [
      "Air Aroma International",
      "",
      "(Main Office)",
      "Office 5, Level 1, Building 4",
      "15 Cochranes road",
      "Moorabbin, VIC 3189",
      "Australia",
      "",
      "Tel: +61 3 9017 3511",
      "Fax: +61 3 9584 2971",
      "Web: https://www.air-aroma.com",
    ],
  },
};

