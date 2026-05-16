import { Link } from "react-router-dom";
import SecondaryNav from "../components/SecondaryNav";
import {
  productShowcases,
  productsSecondaryNav,
  referenceImages,
} from "../data/referenceContent";
import { useLocaleRouting } from "../lib/localeRouting";

const discoverySteps = {
  en: [
    "Define the experience the space should leave behind.",
    "Choose a fragrance path, a diffuser path, or both.",
    "Use the contact brief to turn that choice into a recommendation.",
  ],
  ar: [
    "حدّد الأثر الذي يجب أن تتركه المساحة.",
    "اختر مسار العطر أو الموزع أو كليهما.",
    "استخدم نموذج التواصل لتحويل الاختيار إلى توصية واضحة.",
  ],
};

export default function Products() {
  const { locale, toLocalePath } = useLocaleRouting();
  const isArabic = locale === "ar";

  return (
    <div>
      <SecondaryNav
        items={productsSecondaryNav}
        locale={locale}
        label={isArabic ? "أقسام المنتجات" : "Product sections"}
      />

      <section className="product-hub-hero">
        <div className="reference-container--wide product-hub-hero__grid">
          <div className="product-hub-hero__copy">
            <p className="eyebrow">{isArabic ? "مركز المنتجات" : "Product Guide"}</p>
            <h1>
              {isArabic
                ? "اختر العطر وطريقة النشر كما يختار فريق التصميم مادة أساسية."
                : "Choose fragrance and diffusion like a design team chooses a core material."}
            </h1>
            <p>
              {isArabic
                ? "تساعدك هذه الصفحة على فهم المسار الأنسب: عطر جاهز، عطر مميز، زيوت أساسية، جهاز نشر، أو منتج حسي قابل للتقديم والبيع."
                : "This page helps you understand the right route: finished scent, signature fragrance, essential oils, diffuser hardware, or a tangible branded scent product."}
            </p>
            <div className="action-row">
              <Link to={toLocalePath("/contact#contact-form")} className="button-primary">
                {isArabic ? "احصل على توصية" : "Request Recommendation"}
              </Link>
              <Link to={toLocalePath("/fragrances")} className="button-secondary">
                {isArabic ? "عرض العطور" : "View Fragrances"}
              </Link>
            </div>
          </div>

          <div className="product-hub-hero__media">
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
        <div className="reference-container guide-strip">
          {discoverySteps[locale].map((step, index) => (
            <article key={step} className="guide-strip__item">
              <span className="eyebrow">0{index + 1}</span>
              <p>{step}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="quiet-section quiet-section--border">
        <div className="reference-container section-split mb-12">
          <div className="section-intro">
            <p className="eyebrow">{isArabic ? "المسارات" : "Product Routes"}</p>
            <h2 className="section-title">
              {isArabic
                ? "ستة مداخل واضحة، من الجهاز إلى العطر الخاص."
                : "Six clear entry points, from hardware to private fragrance."}
            </h2>
          </div>
          <p className="section-body">
            {isArabic
              ? "كل مسار يشرح متى يكون مناسباً، ثم يوجّهك إلى الخطوة العملية التالية."
              : "Each route explains when it fits, then points to the next practical step."}
          </p>
        </div>

        <div className="product-route-grid">
          {productShowcases.map((item, index) => {
            const content = (
              <>
                <div className="product-route-card__media">
                  <img
                    src={item.image}
                    alt={item.imageAlt[locale]}
                    width="900"
                    height="900"
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                  />
                </div>
                <div className="product-route-card__content">
                  <span className="eyebrow">
                    {item.placeholder
                      ? isArabic
                        ? "توصية عبر الفريق"
                        : "Team Recommendation"
                      : isArabic
                        ? "استكشاف مباشر"
                        : "Direct Exploration"}
                  </span>
                  <h2>{item.title[locale]}</h2>
                  <p>{item.description[locale]}</p>
                  <span className="button-subtle">{item.cta[locale]}</span>
                </div>
              </>
            );

            if (item.href.startsWith("http")) {
              return (
                <a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  className="product-route-card"
                  data-tone={item.tone}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={item.id}
                id={item.id}
                to={toLocalePath(item.href)}
                className="product-route-card"
                data-tone={item.tone}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
