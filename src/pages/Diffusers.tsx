import { Link } from "react-router-dom";
import SecondaryNav from "../components/SecondaryNav";
import {
  diffuserShowcases,
  diffusersSecondaryNav,
  referenceImages,
} from "../data/referenceContent";
import {
  getProductById,
  getProductCharacteristics,
  getProductDetailBasePath,
  getProductName,
} from "../data/products";
import { useLocaleRouting } from "../lib/localeRouting";

export default function Diffusers() {
  const { locale, toLocalePath } = useLocaleRouting();
  const isArabic = locale === "ar";
  const aromax = getProductById("aromax");
  const secondaryDiffusers = diffuserShowcases.filter((item) => item.id !== "aromax");

  return (
    <div>
      <SecondaryNav
        items={diffusersSecondaryNav}
        locale={locale}
        label={isArabic ? "أنواع الموزعات" : "Diffuser types"}
      />

      <section className="product-hub-hero product-hub-hero--quiet">
        <div className="reference-container--wide product-hub-hero__grid">
          <div className="product-hub-hero__copy">
            <p className="eyebrow">{isArabic ? "أنظمة النشر" : "Diffusion Systems"}</p>
            <h1>
              {isArabic
                ? "أجهزة عطرية هادئة تجعل الاختيار مرتبطاً بالمساحة، لا بالشكل فقط."
                : "Quiet scent hardware chosen by space, scale, and operating rhythm."}
            </h1>
            <p>
              {isArabic
                ? "من جهاز منزلي مستقل إلى أنظمة تغطي مناطق أكبر، الهدف هو اختيار طريقة نشر تبدو طبيعية داخل التجربة اليومية."
                : "From standalone home diffusion to systems for larger zones, the goal is to choose a delivery method that feels natural inside the daily experience."}
            </p>
            <div className="action-row">
              <Link to={toLocalePath("/products/aromax")} className="button-primary">
                {isArabic ? "عرض آروماكس" : "View Aromax"}
              </Link>
              <Link to={toLocalePath("/contact#contact-form")} className="button-secondary">
                {isArabic ? "اطلب توصية" : "Request Recommendation"}
              </Link>
            </div>
          </div>

          <div className="product-hub-hero__media">
            <img
              src={referenceImages.aromaxHero}
              alt={isArabic ? "موزع آروماكس داخل مساحة داخلية" : "Aromax diffuser in an interior space"}
              width="1800"
              height="900"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      {aromax ? (
        <section id="aromax" className="quiet-section quiet-section--compact">
          <article className="reference-container--wide featured-diffuser">
            <div className="featured-diffuser__image">
              <img
                src="/products/AROMAX/Aromax-Silver-01.jpg"
                alt={getProductName(aromax, locale)}
                width="900"
                height="900"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="featured-diffuser__content">
              <p className="eyebrow">{isArabic ? "الجهاز الرئيسي" : "Flagship Diffuser"}</p>
              <h2>{getProductName(aromax, locale)}</h2>
              <p>
                {isArabic
                  ? "تصميم مستقل للمنازل والمكاتب الصغيرة، مع تشغيل هادئ وإخراج عطري قابل للضبط."
                  : "A standalone diffuser for homes and smaller offices, with quiet operation and adjustable scent output."}
              </p>
              <div className="product-chip-row">
                {getProductCharacteristics(aromax, locale).map((item) => (
                  <span key={item} className="chip">
                    {item}
                  </span>
                ))}
              </div>
              <Link
                to={toLocalePath(getProductDetailBasePath(aromax))}
                className="button-primary"
              >
                {isArabic ? "استكشف آروماكس" : "Explore Aromax"}
              </Link>
            </div>
          </article>
        </section>
      ) : null}

      <section className="quiet-section quiet-section--border">
        <div className="reference-container section-split mb-12">
          <div className="section-intro">
            <p className="eyebrow">{isArabic ? "خيارات أخرى" : "Other Systems"}</p>
            <h2 className="section-title">
              {isArabic
                ? "أنظمة تحتاج توصية بحسب الحجم والاستخدام."
                : "Systems best matched through scale and use case."}
            </h2>
          </div>
          <p className="section-body">
            {isArabic
              ? "تساعد هذه الخيارات في تغطية المساحات الأكبر أو المتطلبات التجارية، لذلك يبدأ مسارها عادة من موجز سريع."
              : "These options support larger spaces or commercial requirements, so their path usually starts with a short project brief."}
          </p>
        </div>

        <div className="product-route-grid product-route-grid--three">
          {secondaryDiffusers.map((item) => (
            <Link
              key={item.id}
              id={item.id}
              to={toLocalePath(item.href)}
              className="product-route-card"
              data-tone={item.tone}
            >
              <div className="product-route-card__media">
                <img
                  src={item.image}
                  alt={item.imageAlt[locale]}
                  width="900"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="product-route-card__content">
                <span className="eyebrow">{isArabic ? "استفسار موجه" : "Guided Enquiry"}</span>
                <h2>{item.title[locale]}</h2>
                <p>{item.description[locale]}</p>
                <span className="button-subtle">{item.cta[locale]}</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
