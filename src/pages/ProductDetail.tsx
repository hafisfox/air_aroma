import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Link, useParams } from "react-router-dom";
import NotFound from "./NotFound";
import { useLocaleRouting } from "../lib/localeRouting";
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
    storyLabel: "Product Story",
    notesLabel: "Scent Notes",
    featuresLabel: "Key Features",
    idealLabel: "Ideal Environments",
    enjoyedLabel: "If You Enjoyed",
    finishesLabel: "Available Options",
    galleryLabel: "Gallery",
    relatedLabel: "Related Products",
    relatedTitle: "Continue through the collection",
    exploreLabel: "View product",
    contactCta: "Talk to Air Aroma",
    consultTitle: "Planning this scent for a project in Saudi Arabia or the GCC?",
    consultBody:
      "Share the type of space and the atmosphere you want to create. We will help match the right fragrance or diffuser setup.",
    categoryHub: "Products",
    variantLabel: "Variants",
    notesCountLabel: "Notes",
    craftedLabel: "Crafted for premium spaces",
    galleryBody:
      "Refined finish options presented with the same premium attention as the fragrance collection.",
  },
  ar: {
    backToProducts: "العودة إلى المنتجات",
    backToCollection: "العودة إلى المجموعة",
    storyLabel: "قصة المنتج",
    notesLabel: "نفحات العطر",
    featuresLabel: "المزايا الأساسية",
    idealLabel: "البيئات المناسبة",
    enjoyedLabel: "إذا أعجبك",
    finishesLabel: "الخيارات المتاحة",
    galleryLabel: "المعرض",
    relatedLabel: "منتجات ذات صلة",
    relatedTitle: "واصل استكشاف المجموعة",
    exploreLabel: "عرض المنتج",
    contactCta: "تحدث مع Air Aroma",
    consultTitle: "هل تخطط لاستخدام هذا المنتج في مشروع داخل السعودية أو الخليج؟",
    consultBody:
      "شاركنا نوع المساحة والانطباع الذي ترغب في صناعته، وسنساعدك على اختيار العطر أو نظام النشر الأنسب.",
    categoryHub: "المنتجات",
    variantLabel: "الخيارات",
    notesCountLabel: "النفحات",
    craftedLabel: "مصمم للمساحات الراقية",
    galleryBody:
      "خيارات عرض مصقولة ومقدمة بالعناية نفسها التي تظهر في مجموعة العطور الراقية.",
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
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src={product.images[0].file}
            alt={`${name} by Air Aroma`}
            width="1800"
            height="1200"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.22),transparent_40%)]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/80 to-brand-black" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-28 lg:px-12">
          <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/45">
            <Link
              to={toLocalePath("/")}
              className="transition-colors hover:text-white"
            >
              Air Aroma
            </Link>
            <span>/</span>
            <Link
              to={toLocalePath("/products")}
              className="transition-colors hover:text-white"
            >
              {copy.categoryHub}
            </Link>
            <span>/</span>
            <span className="text-brand-gold">{name}</span>
          </div>

          <div className="mt-10 grid gap-16 lg:grid-cols-[1.05fr,0.95fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="order-2 lg:order-1"
            >
              <p className="mb-5 text-[11px] uppercase tracking-[0.32em] text-brand-gold">
                {category}
              </p>
              <h1 className="max-w-3xl text-5xl font-light leading-[1.02] text-white md:text-7xl">
                {name}
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/70">
                {story}
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                    {copy.variantLabel}
                  </p>
                  <p className="mt-3 text-2xl font-light text-white">
                    {product.images.length}
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                    {copy.notesCountLabel}
                  </p>
                  <p className="mt-3 text-2xl font-light text-white">
                    {notes.length}
                  </p>
                </div>
                <div className="border border-white/10 bg-white/[0.03] p-5">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-white/35">
                    Air Aroma
                  </p>
                  <p className="mt-3 text-sm uppercase tracking-[0.22em] text-brand-gold">
                    {copy.craftedLabel}
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  to={toLocalePath("/contact")}
                  className="inline-flex items-center justify-center bg-brand-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-white"
                >
                  {copy.contactCta}
                </Link>
                <Link
                  to={collectionPath}
                  className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
                >
                  {copy.backToCollection}
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.08 }}
              className="order-1 lg:order-2"
            >
              <div className="overflow-hidden border border-white/10 bg-[#121212] shadow-[0_30px_120px_rgba(0,0,0,0.35)]">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={activeImage.file}
                    alt={`${name} in ${activeImage.size}`}
                    width="1400"
                    height="1750"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {product.images.map((image, index) => (
                  <button
                    key={image.file}
                    type="button"
                    onClick={() => setActiveImageIndex(index)}
                    className={`border p-2 text-start transition-colors ${
                      index === activeImageIndex
                        ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                        : "border-white/10 bg-white/[0.03] text-white/70 hover:border-white/30"
                    }`}
                  >
                    <div className="aspect-[4/4.5] overflow-hidden bg-[#111]">
                      <img
                        src={image.file}
                        alt={`${name} ${image.size}`}
                        width="600"
                        height="600"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <p className="mt-3 text-[10px] uppercase tracking-[0.24em]">
                      {image.size}
                    </p>
                  </button>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-3">
          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="border border-white/10 bg-white/[0.03] p-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              {copy.storyLabel}
            </p>
            <p className="mt-5 text-[15px] leading-8 text-white/65">{story}</p>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.06 }}
            className="border border-white/10 bg-white/[0.03] p-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              {notes.length > 0 ? copy.notesLabel : copy.featuresLabel}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {(notes.length > 0 ? notes : characteristics).map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-3 py-1 text-[12px] text-white/70"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.12 }}
            className="border border-white/10 bg-white/[0.03] p-8"
          >
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              {copy.idealLabel}
            </p>
            <ul className="mt-5 space-y-3 text-[15px] leading-7 text-white/65">
              {idealUseCases.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.article>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.95fr,1.05fr] lg:px-12">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              {copy.featuresLabel}
            </p>
            <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
              {name}
            </h2>
            <div className="mt-8 flex flex-wrap gap-2">
              {characteristics.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-brand-gold/20 bg-brand-gold/10 px-3 py-1 text-[12px] text-brand-gold"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="border border-white/10 p-7">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                {copy.finishesLabel}
              </p>
              <div className="mt-5 space-y-3 text-[15px] leading-7 text-white/65">
                {product.images.map((image) => (
                  <p key={image.file}>{image.size}</p>
                ))}
              </div>
            </div>

            {ifYouEnjoyed.length > 0 ? (
              <div className="border border-white/10 p-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                  {copy.enjoyedLabel}
                </p>
                <div className="mt-5 space-y-3 text-[15px] leading-7 text-white/65">
                  {ifYouEnjoyed.map((item) => (
                    <p key={item}>{item}</p>
                  ))}
                </div>
              </div>
            ) : (
              <div className="border border-white/10 p-7">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                  {copy.galleryLabel}
                </p>
                <p className="mt-5 text-[15px] leading-7 text-white/65">
                  {copy.galleryBody}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
            {copy.relatedLabel}
          </p>
          <h2 className="mt-4 max-w-3xl text-4xl font-light text-white md:text-5xl">
            {copy.relatedTitle}
          </h2>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {relatedProducts.map((related, index) => {
              const relatedName = getProductName(related, locale);

              return (
                <motion.article
                  key={related.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className="flex h-full flex-col overflow-hidden border border-white/10 bg-white/[0.03]"
                >
                  <div className="aspect-[4/5] overflow-hidden bg-[#111]">
                    <img
                      src={related.images[0].file}
                      alt={relatedName}
                      width="1200"
                      height="1500"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-[10px] uppercase tracking-[0.24em] text-brand-gold">
                      {getProductCategoryLabel(related, locale)}
                    </p>
                    <h3 className="mt-3 text-2xl font-light text-white">
                      {relatedName}
                    </h3>
                    <p className="mt-4 flex-1 text-[15px] leading-7 text-white/60">
                      {getProductStory(related, locale)}
                    </p>
                    <Link
                      to={toLocalePath(getProductDetailBasePath(related))}
                      className="mt-8 max-w-max text-[11px] uppercase tracking-[0.24em] text-brand-gold transition-colors hover:text-white"
                    >
                      {copy.exploreLabel}
                    </Link>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </section>
      )}

      <section className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-12">
          <h2 className="text-4xl font-light text-white md:text-5xl">
            {copy.consultTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-8 text-white/60">
            {copy.consultBody}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to={toLocalePath("/contact")}
              className="inline-flex items-center justify-center bg-brand-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-white"
            >
              {copy.contactCta}
            </Link>
            <Link
              to={toLocalePath("/products")}
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
            >
              {copy.backToProducts}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
