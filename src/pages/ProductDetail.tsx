import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useLocaleRouting } from "../lib/localeRouting";
import {
  ActionLink,
  ActionRow,
  BulletList,
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";
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
} from "../data/products";

const fragranceFallbackUseCases = {
  en: ["Hotels", "Luxury retail", "Residences"],
  ar: ["الفنادق", "التجزئة الفاخرة", "المساكن"],
};

const diffuserFallbackUseCases = {
  en: ["Residences", "Boutiques", "VIP rooms", "Wellness suites"],
  ar: ["المساكن", "المتاجر الراقية", "غرف كبار الشخصيات", "أجنحة العافية"],
};

const detailCopy = {
  en: {
    backToProducts: "Back to products",
    backToCollection: "Back to collection",
    storyLabel: "Scent Story",
    notesLabel: "Notes",
    featuresLabel: "Key Features",
    idealLabel: "Ideal Environments",
    enjoyedLabel: "If You Enjoyed",
    finishesLabel: "Available Options",
    relatedLabel: "Related Products",
    relatedTitle: "Continue through the collection",
    exploreLabel: "View product",
    contactCta: "Talk to Air Aroma",
    consultTitle: "Planning this for a project in Saudi Arabia or the GCC?",
    consultBody:
      "Share the type of space and the atmosphere you want to create. We will help match the right fragrance or diffuser setup.",
    categoryHub: "Products",
    variantLabel: "Variants",
    notesCountLabel: "Scent notes",
    craftedLabel: "Crafted for premium spaces",
  },
  ar: {
    backToProducts: "العودة إلى المنتجات",
    backToCollection: "العودة إلى المجموعة",
    storyLabel: "قصة العطر",
    notesLabel: "النفحات",
    featuresLabel: "المزايا الأساسية",
    idealLabel: "البيئات المناسبة",
    enjoyedLabel: "إذا أعجبك",
    finishesLabel: "الخيارات المتاحة",
    relatedLabel: "منتجات ذات صلة",
    relatedTitle: "واصل استكشاف المجموعة",
    exploreLabel: "عرض المنتج",
    contactCta: "تحدث مع Air Aroma",
    consultTitle: "هل تخطط لاستخدام هذا المنتج في مشروع داخل السعودية أو الخليج؟",
    consultBody:
      "شاركنا نوع المساحة والانطباع الذي ترغب في صناعته، وسنساعدك على اختيار العطر أو نظام النشر الأنسب.",
    categoryHub: "المنتجات",
    variantLabel: "الخيارات",
    notesCountLabel: "عدد النفحات",
    craftedLabel: "مصمم للمساحات الراقية",
  },
};

export default function ProductDetail() {
  const { productId } = useParams();
  const { isArabic, locale, toLocalePath } = useLocaleRouting();
  const copy = isArabic ? detailCopy.ar : detailCopy.en;
  const product = productId ? getProductById(productId) : undefined;
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    setActiveImageIndex(0);
  }, [productId]);

  if (!product) {
    return <NotFound />;
  }

  const name = getProductName(product, locale);
  const story = getProductStory(product, locale);
  const category = getProductCategoryLabel(product, locale);
  const notes = getProductNotes(product, locale);
  const characteristics = getProductCharacteristics(product, locale);
  const usedBy = getProductUsedBy(product, locale);
  const ifYouEnjoyed = getProductIfYouEnjoyed(product, locale);
  const relatedProducts = getRelatedProducts(product, 3);
  const collectionPath = toLocalePath(getProductCollectionBasePath(product));
  const idealUseCases =
    usedBy.length > 0
      ? usedBy
      : product.type === "diffuser"
        ? diffuserFallbackUseCases[locale]
        : fragranceFallbackUseCases[locale];
  const activeImage = product.images[activeImageIndex] ?? product.images[0];

  return (
    <div>
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="section-inner section-block">
          <div className="mb-8 flex flex-wrap items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-muted">
            <Link to={toLocalePath("/")} className="transition-colors hover:text-ink">
              Air Aroma
            </Link>
            <span>/</span>
            <Link to={toLocalePath("/products")} className="transition-colors hover:text-ink">
              {copy.categoryHub}
            </Link>
            <span>/</span>
            <span className="text-accent-strong">{name}</span>
          </div>

          <div className="grid gap-10 xl:grid-cols-[0.96fr_1.04fr] xl:items-center">
            <MountReveal className="space-y-8">
              <div className="kicker-row">
                <span className="kicker-pill">{category}</span>
                {notes.length > 0 ? (
                  <span className="chip">
                    {notes.length} {copy.notesLabel}
                  </span>
                ) : null}
              </div>

              <h1 className="hero-title max-w-[11ch]">{name}</h1>
              <p className="hero-body">{story}</p>

              <ActionRow>
                <ActionLink to={toLocalePath("/contact")}>{copy.contactCta}</ActionLink>
                <ActionLink to={collectionPath} variant="secondary">
                  {copy.backToCollection}
                </ActionLink>
              </ActionRow>

              <div className="metric-grid">
                <div className="metric-card">
                  <p className="metric-label">{copy.variantLabel}</p>
                  <p className="metric-value">{product.images.length}</p>
                </div>
                <div className="metric-card">
                  <p className="metric-label">
                    {notes.length > 0 ? copy.notesCountLabel : copy.featuresLabel}
                  </p>
                  <p className="metric-value">
                    {notes.length > 0 ? notes.length : characteristics.length}
                  </p>
                </div>
                <div className="metric-card">
                  <p className="metric-label">Air Aroma</p>
                  <p className="mt-3 text-[0.98rem] font-semibold leading-7 text-accent-strong">
                    {copy.craftedLabel}
                  </p>
                </div>
              </div>
            </MountReveal>

            <MountReveal delay={0.12}>
              <div className="surface-panel p-5 md:p-6">
                <div className="media-frame aspect-[4/5]">
                  <img
                    src={activeImage.file}
                    alt={`${name} in ${activeImage.size}`}
                    width="1400"
                    height="1750"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {product.images.map((image, index) => (
                    <button
                      key={image.file}
                      type="button"
                      onClick={() => setActiveImageIndex(index)}
                      className={
                        index === activeImageIndex
                          ? "surface-panel p-2 text-start"
                          : "rounded-[1.2rem] border border-line bg-white/55 p-2 text-start transition-colors hover:border-accent-strong"
                      }
                    >
                      <div className="media-frame aspect-[4/4.5] rounded-[1rem]">
                        <img
                          src={image.file}
                          alt={`${name} ${image.size}`}
                          width="600"
                          height="700"
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <p className="mt-3 px-2 text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                        {image.size}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </MountReveal>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="grid gap-6 xl:grid-cols-3">
            <Reveal>
              <article className="surface-panel h-full p-6 md:p-7">
                <p className="eyebrow">{copy.storyLabel}</p>
                <p className="mt-5 text-[1rem] leading-8 text-ink-soft">{story}</p>
              </article>
            </Reveal>

            <Reveal delay={0.06}>
              <article className="surface-panel h-full p-6 md:p-7">
                <p className="eyebrow">
                  {notes.length > 0 ? copy.notesLabel : copy.featuresLabel}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {(notes.length > 0 ? notes : characteristics).map((item) => (
                    <span key={item} className="chip">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>

            <Reveal delay={0.12}>
              <article className="surface-panel h-full p-6 md:p-7">
                <p className="eyebrow">{copy.idealLabel}</p>
                <div className="mt-5">
                  <BulletList items={idealUseCases} />
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="section-inner section-block">
          <div className="grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
            <Reveal>
              <SectionIntro
                eyebrow={copy.featuresLabel}
                title={name}
                body={
                  product.type === "diffuser"
                    ? isArabic
                      ? "أنظمة نشر توازن بين المظهر والأداء اليومي."
                      : "Diffusion hardware that balances visual refinement with everyday performance."
                    : isArabic
                      ? "مجموعة عطرية تقدم الشخصية والنفحات والاستخدام المقترح بوضوح."
                      : "A fragrance profile that makes the character, notes, and intended use feel immediately legible."
                }
              />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="surface-panel-dark h-full p-6 md:p-7">
                  <p className="eyebrow text-white/80">{copy.finishesLabel}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.images.map((image) => (
                      <span key={image.file} className="chip border-white/15 bg-white/6 text-white/75">
                        {image.size}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.08}>
                <div className="surface-panel-dark h-full p-6 md:p-7">
                  <p className="eyebrow text-white/80">
                    {ifYouEnjoyed.length > 0 ? copy.enjoyedLabel : copy.featuresLabel}
                  </p>
                  <div className="mt-5">
                    <BulletList
                      items={ifYouEnjoyed.length > 0 ? ifYouEnjoyed : characteristics}
                      dark
                    />
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 ? (
        <section className="section-block">
          <div className="section-inner">
            <Reveal>
              <SectionIntro
                eyebrow={copy.relatedLabel}
                title={copy.relatedTitle}
                body={
                  isArabic
                    ? "منتجات أخرى قريبة من هذا الاتجاه يمكن أن تساعد الفريق على مواصلة المقارنة."
                    : "Other products in the same direction that can help a team continue comparing the collection."
                }
                className="mb-10"
              />
            </Reveal>

            <div className="grid gap-6 md:grid-cols-3">
              {relatedProducts.map((related, index) => {
                const relatedName = getProductName(related, locale);

                return (
                  <div key={related.id}>
                    <Reveal delay={index * 0.08}>
                      <article className="surface-panel flex h-full flex-col overflow-hidden">
                        <div className="aspect-[4/5] overflow-hidden">
                          <img
                            src={related.images[0].file}
                            alt={relatedName}
                            width="1200"
                            height="1500"
                            loading="lazy"
                            decoding="async"
                            className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                          />
                        </div>
                        <div className="flex flex-1 flex-col gap-4 p-6">
                          <p className="eyebrow">{getProductCategoryLabel(related, locale)}</p>
                          <h3 className="font-display text-[2rem] leading-[1.02] text-ink">
                            {relatedName}
                          </h3>
                          <p className="text-[1rem] leading-8 text-ink-soft">
                            {getProductStory(related, locale)}
                          </p>
                          <Link
                            to={toLocalePath(getProductDetailBasePath(related))}
                            className="button-subtle mt-auto self-start"
                          >
                            {copy.exploreLabel}
                          </Link>
                        </div>
                      </article>
                    </Reveal>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      ) : null}

      <FinalCta
        title={copy.consultTitle}
        body={copy.consultBody}
        primary={{ label: copy.contactCta, to: toLocalePath("/contact") }}
        secondary={{ label: copy.backToProducts, to: toLocalePath("/products") }}
        tone="light"
      />
    </div>
  );
}
