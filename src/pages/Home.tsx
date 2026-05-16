import { Link } from "react-router-dom";
import {
  clientLogos,
  featuredClients,
  referenceImages,
} from "../data/referenceContent";
import {
  getProductById,
  getProductCategoryLabel,
  getProductDetailBasePath,
  getProductName,
  type Product,
} from "../data/products";
import { useLocaleRouting } from "../lib/localeRouting";

const pathwayItems = [
  {
    label: { en: "Diffusion Systems", ar: "أنظمة النشر" },
    title: { en: "Match the hardware to the space.", ar: "طابق الجهاز مع المساحة." },
    description: {
      en: "For homes, hospitality, retail, and larger commercial zones.",
      ar: "للمنازل والضيافة والتجزئة والمناطق التجارية الأكبر.",
    },
    href: "/diffusers",
  },
  {
    label: { en: "Fragrance Library", ar: "مكتبة العطور" },
    title: { en: "Start with a clear scent direction.", ar: "ابدأ باتجاه عطري واضح." },
    description: {
      en: "Review finished blends by mood, notes, and project fit.",
      ar: "راجع خلطات جاهزة بحسب المزاج والنفحات وملاءمة المشروع.",
    },
    href: "/fragrances",
  },
  {
    label: { en: "Signature Scent", ar: "العطر المميز" },
    title: { en: "Create a fragrance that belongs to the brand.", ar: "اصنع عطراً ينتمي إلى العلامة." },
    description: {
      en: "For projects that need a private scent identity and rollout plan.",
      ar: "للمشاريع التي تحتاج هوية عطرية خاصة وخطة تطبيق واضحة.",
    },
    href: "/signature-scent",
  },
];

const featuredProductIds = ["aromax", "amber-grand", "white-tea"];

function isProduct(product: Product | undefined): product is Product {
  return Boolean(product);
}

export default function Home() {
  const { locale, toLocalePath } = useLocaleRouting();
  const isArabic = locale === "ar";
  const featuredProducts = featuredProductIds.map(getProductById).filter(isProduct);

  return (
    <div>
      <section className="home-hero" aria-label={isArabic ? "مقدمة الموقع" : "Site introduction"}>
        <div className="reference-container--wide home-hero__grid">
          <div className="home-hero__copy">
            <p className="eyebrow">{isArabic ? "Air Aroma" : "Air Aroma"}</p>
            <h1 className="home-hero__title">
              {isArabic
                ? "روائح ومنتجات نشر مصممة للمساحات التي يجب أن تُتذكر."
                : "Fragrance and diffusion systems for spaces designed to be remembered."}
            </h1>
            <p>
              {isArabic
                ? "نساعد فرق الضيافة والتجزئة والمساكن الراقية على اختيار العطر ونظام النشر المناسبين، من أول اتجاه عطري إلى تجربة يومية قابلة للتشغيل."
                : "We help hospitality, retail, and premium residential teams choose the right scent direction and delivery system, from the first fragrance brief to a daily operating experience."}
            </p>
            <div className="action-row">
              <Link to={toLocalePath("/products")} className="button-primary">
                {isArabic ? "استكشف المنتجات" : "Explore Products"}
              </Link>
              <Link to={toLocalePath("/contact")} className="button-secondary">
                {isArabic ? "ناقش مشروعك" : "Discuss Your Project"}
              </Link>
            </div>
          </div>

          <div className="home-hero__media">
            <img
              src={referenceImages.productsHero}
              alt={
                isArabic
                  ? "منتجات Air Aroma للعطور ونشر الروائح"
                  : "Air Aroma fragrance and scent diffusion products"
              }
              width="1800"
              height="900"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="quiet-section quiet-section--compact">
        <div className="reference-container product-pathways">
          {pathwayItems.map((item) => (
            <Link
              key={item.href}
              to={toLocalePath(item.href)}
              className="pathway-card"
            >
              <span className="eyebrow">{item.label[locale]}</span>
              <h2>{item.title[locale]}</h2>
              <p>{item.description[locale]}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="quiet-section quiet-section--border">
        <div className="reference-container section-split">
          <div className="section-intro">
            <p className="eyebrow">{isArabic ? "مجموعة مختارة" : "Curated Starting Points"}</p>
            <h2 className="section-title">
              {isArabic
                ? "ابدأ بمنتج واضح، ثم ضيّق القرار مع الفريق."
                : "Start with a tangible product, then narrow the decision with the team."}
            </h2>
          </div>
          <p className="section-body">
            {isArabic
              ? "تعرض هذه المجموعة ثلاثة مسارات مختلفة: جهاز نشر، عطر دافئ، واتجاه أكثر نقاءً وهدوءاً."
              : "This selection shows three different routes: a diffuser system, a warmer scent profile, and a cleaner quieter fragrance direction."}
          </p>
        </div>

        <div className="reference-container--wide featured-product-grid mt-12">
          {featuredProducts.map((product) => (
            <Link
              key={product.id}
              to={toLocalePath(getProductDetailBasePath(product))}
              className="featured-product"
            >
              <div className="featured-product__image">
                <img
                  src={product.images[0].file}
                  alt={getProductName(product, locale)}
                  width="900"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="featured-product__content">
                <span className="eyebrow">{getProductCategoryLabel(product, locale)}</span>
                <h3>{getProductName(product, locale)}</h3>
                <span className="button-subtle">
                  {isArabic ? "عرض التفاصيل" : "View details"}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="quiet-section">
        <div className="reference-container section-split">
          <div className="section-intro">
            <p className="eyebrow">{isArabic ? "ثقة العملاء" : "Client Confidence"}</p>
            <h2 className="section-title">
              {isArabic
                ? "تجارب عطرية لعلامات تحتاج حضوراً ثابتاً كل يوم."
                : "Scent experiences for brands that need presence to hold every day."}
            </h2>
          </div>
          <Link to={toLocalePath("/clients")} className="button-secondary">
            {isArabic ? "عرض العملاء" : "View Clients"}
          </Link>
        </div>

        <div className="client-proof mt-12">
          {featuredClients.map((client) => (
            <article key={client.name} className="client-proof__feature">
              <img
                src={client.image}
                alt={client.alt[locale]}
                width="920"
                height="616"
                loading="lazy"
                decoding="async"
              />
              <h3>{client.name}</h3>
            </article>
          ))}

          <div className="client-proof__logos">
            {clientLogos.map((logo) => (
              <img
                key={logo.name}
                src={logo.image}
                alt={logo.name}
                width="260"
                height="110"
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="quiet-section quiet-section--border">
        <div className="editorial-teasers">
          <article className="editorial-teaser">
            <h3>{isArabic ? "هل تحتاج إلى عطر خاص؟" : "Need a private scent identity?"}</h3>
            <p>
              {isArabic
                ? "حوّل شخصية العلامة أو المكان إلى اتجاه عطري يمكن مراجعته وتشغيله بثقة."
                : "Turn the character of a brand or destination into a fragrance direction that can be reviewed and operated with confidence."}
            </p>
            <Link to={toLocalePath("/signature-scent")} className="button-subtle">
              {isArabic ? "العطر المميز" : "Signature Scent"}
            </Link>
          </article>

          <article className="editorial-teaser">
            <h3>{isArabic ? "هل تبحث عن توصية؟" : "Looking for a recommendation?"}</h3>
            <p>
              {isArabic
                ? "أخبرنا عن المساحة، وسنساعدك على اختيار العطر ونظام النشر المناسبين."
                : "Tell us about the space, and we will help match the fragrance route with the right diffuser system."}
            </p>
            <Link to={toLocalePath("/contact#contact-form")} className="button-subtle">
              {isArabic ? "ابدأ الاستفسار" : "Start Enquiry"}
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
