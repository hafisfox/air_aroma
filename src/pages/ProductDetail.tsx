import { MessageCircle, Phone } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SecondaryNav from "../components/SecondaryNav";
import { aromaxSecondaryNav, referenceImages } from "../data/referenceContent";
import {
  getProductById,
  getProductCategoryLabel,
  getProductCharacteristics,
  getProductCollectionBasePath,
  getProductDetailBasePath,
  getProductIfYouEnjoyed,
  getProductName,
  getProductNotes,
  getProductStory,
  getProductUsedBy,
  getRelatedProducts,
  type Product,
} from "../data/products";
import { useLocaleRouting } from "../lib/localeRouting";
import NotFound from "./NotFound";

const aromaxColorTiles = [
  { label: { en: "Silver", ar: "فضي" }, image: referenceImages.aromaxSilverTile },
  { label: { en: "Gold", ar: "ذهبي" }, image: referenceImages.aromaxGoldTile },
  { label: { en: "Black", ar: "أسود" }, image: referenceImages.aromaxBlackTile },
  { label: { en: "Red", ar: "أحمر" }, image: referenceImages.aromaxRedTile },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const { locale, toLocalePath } = useLocaleRouting();
  const isArabic = locale === "ar";
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return <NotFound />;
  }

  if (product.id === "aromax") {
    return (
      <AromaxDetail
        product={product}
        locale={locale}
        isArabic={isArabic}
        toLocalePath={toLocalePath}
      />
    );
  }

  const name = getProductName(product, locale);
  const notes = getProductNotes(product, locale);
  const characteristics = getProductCharacteristics(product, locale);
  const usedBy = getProductUsedBy(product, locale);
  const ifYouEnjoyed = getProductIfYouEnjoyed(product, locale);
  const relatedProducts = getRelatedProducts(product, 3);

  return (
    <div>
      <section className="product-detail-hero">
        <div className="reference-container--wide product-detail-hero__grid">
          <div className="product-detail-hero__media">
            <img
              src={product.images[0].file}
              alt={name}
              width="1100"
              height="1300"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="product-detail-hero__copy">
            <p className="eyebrow">{getProductCategoryLabel(product, locale)}</p>
            <h1>{name}</h1>
            <p>{getProductStory(product, locale)}</p>
            <div className="product-chip-row">
              {characteristics.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
            <div className="action-row">
              <Link to={toLocalePath("/contact#contact-form")} className="button-primary">
                {isArabic ? "اطلب توصية" : "Request Recommendation"}
              </Link>
              <Link
                to={toLocalePath(getProductCollectionBasePath(product))}
                className="button-secondary"
              >
                {isArabic ? "العودة إلى المجموعة" : "Back to Collection"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="quiet-section quiet-section--compact">
        <div className="reference-container--wide product-detail-grid">
          <article className="product-detail-panel product-detail-panel--image">
            <img
              src={product.images[1]?.file ?? product.images[0].file}
              alt={`${name} ${product.images[1]?.size ?? product.images[0].size}`}
              width="900"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </article>

          <DetailPanel title={isArabic ? "النفحات" : "Notes"} items={notes} />
          <DetailPanel title={isArabic ? "الطابع" : "Character"} items={characteristics} />
          <DetailPanel
            title={isArabic ? "مناسب لـ" : "Often Used For"}
            items={usedBy.length > 0 ? usedBy : characteristics.slice(0, 2)}
          />
          <DetailPanel
            title={isArabic ? "إذا أعجبك" : "If You Enjoyed"}
            items={ifYouEnjoyed.length > 0 ? ifYouEnjoyed : [isArabic ? "العطور الفندقية الهادئة" : "quiet hotel scent profiles"]}
          />
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="quiet-section quiet-section--border">
          <div className="reference-container section-split mb-12">
            <div className="section-intro">
              <p className="eyebrow">{isArabic ? "عطور قريبة" : "Related Scents"}</p>
              <h2 className="section-title">
                {isArabic
                  ? "استكشف اتجاهات أخرى قبل تثبيت المسار."
                  : "Compare nearby directions before fixing the route."}
              </h2>
            </div>
            <Link to={toLocalePath("/fragrances")} className="button-secondary">
              {isArabic ? "عرض كل العطور" : "View All Fragrances"}
            </Link>
          </div>

          <div className="reference-container--wide related-product-grid">
            {relatedProducts.map((related) => (
              <Link
                key={related.id}
                to={toLocalePath(getProductDetailBasePath(related))}
                className="related-product-card"
              >
                <img
                  src={related.images[0].file}
                  alt={getProductName(related, locale)}
                  width="800"
                  height="900"
                  loading="lazy"
                  decoding="async"
                />
                <div>
                  <span className="eyebrow">{getProductCategoryLabel(related, locale)}</span>
                  <h3>{getProductName(related, locale)}</h3>
                </div>
              </Link>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function DetailPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="product-detail-panel">
      <h2>{title}</h2>
      <div className="product-chip-row">
        {items.map((item) => (
          <span key={item} className="chip">
            {item}
          </span>
        ))}
      </div>
    </article>
  );
}

function AromaxDetail({
  product,
  locale,
  isArabic,
  toLocalePath,
}: {
  product: Product;
  locale: "en" | "ar";
  isArabic: boolean;
  toLocalePath: (pathname: string) => string;
}) {
  const characteristics = getProductCharacteristics(product, locale);

  return (
    <div>
      <SecondaryNav
        items={aromaxSecondaryNav}
        locale={locale}
        label={isArabic ? "محتوى آروماكس" : "Aromax sections"}
      />

      <section className="product-detail-hero product-detail-hero--diffuser">
        <div className="reference-container--wide product-detail-hero__grid">
          <div className="product-detail-hero__media">
            <img
              src="/products/AROMAX/Aromax-Silver-01.jpg"
              alt={getProductName(product, locale)}
              width="1100"
              height="1300"
              fetchPriority="high"
              decoding="async"
            />
          </div>
          <div className="product-detail-hero__copy">
            <p className="eyebrow">{isArabic ? "موزع عطور فاخر" : "Luxury Diffuser"}</p>
            <h1>{isArabic ? "آروماكس" : "Aromax"}</h1>
            <p>
              {isArabic
                ? "موزع منزلي مستقل يجمع بين هيكل ألمنيوم بسيط وتشغيل هادئ وإخراج عطري قابل للضبط."
                : "A standalone home diffuser with a minimal aluminum body, quiet operation, and adjustable scent output."}
            </p>
            <div className="product-chip-row">
              {characteristics.map((item) => (
                <span key={item} className="chip">
                  {item}
                </span>
              ))}
            </div>
            <div className="action-row">
              <Link to={toLocalePath("/contact#contact-form")} className="button-primary">
                {isArabic ? "استفسر عن آروماكس" : "Enquire About Aromax"}
              </Link>
              <Link to={toLocalePath("/diffusers")} className="button-secondary">
                {isArabic ? "كل الموزعات" : "All Diffusers"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="overview" className="quiet-section quiet-section--compact">
        <div className="reference-container section-split">
          <div className="section-intro">
            <p className="eyebrow">{isArabic ? "نظرة عامة" : "Overview"}</p>
            <h2 className="section-title">
              {isArabic
                ? "موزع بسيط للمساحات التي تحتاج حضوراً عطرياً هادئاً."
                : "A simple diffuser for spaces that need a quiet scent presence."}
            </h2>
          </div>
          <p className="section-body">
            {isArabic
              ? "تصميمه المستقل يجعله مناسباً للمنازل والشقق والمكاتب الصغيرة، مع مؤقت مدمج ومخرجات عطرية يمكن ضبطها بحسب إيقاع الاستخدام."
              : "Its standalone design suits homes, apartments, and smaller offices, with a built-in timer and fragrance output that can be adjusted to the rhythm of use."}
          </p>
        </div>
      </section>

      <section id="tech-specs" className="quiet-section quiet-section--border">
        <div className="aromax-story">
          <img
            src={referenceImages.aromaxContent}
            alt={isArabic ? "آروماكس على رف داخلي" : "Aromax diffuser on an interior shelf"}
            width="1440"
            height="1026"
            loading="lazy"
            decoding="async"
          />
          <div className="aromax-story__copy">
            <h2>
              {isArabic
                ? "الشكل والوظيفة يعملان كجزء من المساحة."
                : "Form and function work as part of the room."}
            </h2>
            <p>
              {isArabic
                ? "الهدف من آروماكس هو نشر العطر دون أن يفرض الجهاز نفسه بصرياً. الحواف الناعمة والهيكل المعدني الهادئ يجعلان حضوره قريباً من قطعة داخلية مختارة بعناية."
                : "Aromax is built to scent the space without visually dominating it. Its soft shape and quiet metal body make it feel closer to a considered interior object."}
            </p>
          </div>
        </div>
      </section>

      <section id="color-options" className="quiet-section">
        <div className="reference-container section-split mb-12">
          <div className="section-intro">
            <p className="eyebrow">{isArabic ? "الألوان" : "Color Options"}</p>
            <h2 className="section-title">{isArabic ? "اختر اللون قبل اختيار الرائحة." : "Choose the finish before the fragrance."}</h2>
          </div>
          <Link to={toLocalePath("/contact#contact-form")} className="button-secondary">
            {isArabic ? "استفسر عن آروماكس" : "Enquire About Aromax"}
          </Link>
        </div>

        <div className="aromax-color-grid">
          {aromaxColorTiles.map((tile) => (
            <article key={tile.label.en} className="aromax-color-card">
              <h3>{tile.label[locale]}</h3>
              <img
                src={tile.image}
                alt={`${tile.label[locale]} Aromax`}
                width="800"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="quiet-section pt-0">
        <div className="split-actions">
          <article className="split-action">
            <span className="split-action__icon" aria-hidden="true">
              <Phone size={17} />
            </span>
            <h3>{isArabic ? "اتصل بنا" : "Call us"}</h3>
            <p>
              {isArabic
                ? "تواصل مع ممثل Air Aroma وسنساعدك على اختيار الجهاز والرائحة."
                : "Contact an Air Aroma representative and we will help match the diffuser with the right scent."}
            </p>
            <Link to={toLocalePath("/contact")} className="button-subtle">
              {isArabic ? "اتصل" : "Contact"}
            </Link>
          </article>

          <article className="split-action">
            <span className="split-action__icon" aria-hidden="true">
              <MessageCircle size={17} />
            </span>
            <h3>{isArabic ? "احصل على توصية" : "Request a recommendation"}</h3>
            <p>
              {isArabic
                ? "أخبرنا عن المساحة وسنقترح نظام النشر والرائحة الأنسب."
                : "Tell us about the space and we will suggest the right diffuser system and scent route."}
            </p>
            <Link to={toLocalePath("/contact#contact-form")} className="button-subtle">
              {isArabic ? "إرسال استفسار" : "Send enquiry"}
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
