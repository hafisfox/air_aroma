import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";
import {
  ActionLink,
  BulletList,
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";
import {
  getProductById,
  getProductCategoryLabel,
  getProductDetailBasePath,
  getProductName,
  getProductStory,
} from "../data/products";

const featuredProductIds = ["aromax", "sencha", "saffron-suede"] as const;

export default function Products() {
  const { isArabic, locale, toLocalePath } = useLocaleRouting();
  const featuredProducts = featuredProductIds
    .map((productId) => getProductById(productId))
    .filter((product) => product !== undefined);

  const copy = isArabic
    ? {
        badge: "محور المنتجات",
        title: "اختر المسار الأنسب بين العطور والموزعات والزيوت الأساسية.",
        body:
          "تساعد هذه الصفحة فرق المشاريع على الانتقال بسرعة من الفكرة العامة إلى المسار الأنسب، سواء كانت الأولوية هوية عطرية مميزة أو نظام نشر مناسب أو طبقة عطرية أكثر هدوءاً للعافية والمساكن.",
        categories: [
          {
            title: "العطور المميزة",
            description:
              "مكتبة عطور جاهزة للاكتشاف أو كنقطة بداية لتطوير هوية عطرية خاصة بالمشروع.",
            path: "/fragrances",
            image:
              "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1600&q=80",
            alt: "مجموعة عطور فاخرة من Air Aroma",
            cta: "استكشف العطور",
          },
          {
            title: "الموزعات",
            description:
              "أنظمة نشر مستقلة أو مرتبطة بـ HVAC للمشاريع الصغيرة والكبيرة التي تحتاج أداءً يومياً واضحاً.",
            path: "/diffusers",
            image:
              "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=1600&q=80",
            alt: "موزعات عطرية فاخرة",
            cta: "استكشف الموزعات",
          },
          {
            title: "الزيوت الأساسية",
            description:
              "خلطات أكثر نعومة للمساحات التي تميل إلى العافية والهدوء والطابع الطبيعي.",
            path: "/essential-oils",
            image:
              "https://images.unsplash.com/photo-1608528577891-eb0559d18e58?auto=format&fit=crop&w=1600&q=80",
            alt: "زيوت أساسية لمشروعات العافية",
            cta: "استكشف الزيوت",
          },
        ],
        featuredEyebrow: "اختيارات بارزة",
        featuredTitle: "بعض الاتجاهات التي يبدأ منها كثير من العملاء.",
        featuredBody:
          "هذه المنتجات تمنح نظرة سريعة على النطاق الذي تغطيه Air Aroma، من هوية العطر إلى الجهاز نفسه.",
        compareTitle: "كيف تختار الفئة المناسبة؟",
        comparePoints: [
          "ابدأ بالعطر إذا كانت الأولوية هي الشعور الذي يجب أن يتركه المكان.",
          "ابدأ بالجهاز إذا كان التحدي الأساسي هو التغطية أو طريقة التشغيل.",
          "ابدأ بالزيوت الأساسية إذا كان المشروع يميل إلى العافية أو طبقة عطرية أكثر هدوءاً.",
        ],
        finalTitle: "هل تحتاج إلى توجيه أوضح قبل اختيار المسار؟",
        finalBody:
          "يمكننا مساعدتك على تضييق الخيار بين العطر والجهاز والبرنامج الأنسب بحسب نوع المساحة والجدول الزمني.",
        finalPrimary: "اطلب استشارة",
        finalSecondary: "تواصل معنا",
      }
    : {
        badge: "Product Hub",
        title: "Choose the right path across fragrance, diffusion, and essential-oil programs.",
        body:
          "This page helps project teams move from a broad idea to the right product path, whether the priority is signature fragrance identity, hardware performance, or a softer wellness-led scent layer.",
        categories: [
          {
            title: "Signature Fragrances",
            description:
              "A fragrance library to review as-is or use as the first step toward a more custom scent identity.",
            path: "/fragrances",
            image:
              "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&w=1600&q=80",
            alt: "Luxury fragrance collection by Air Aroma",
            cta: "Explore Fragrances",
          },
          {
            title: "Diffusers",
            description:
              "Standalone and HVAC-linked systems for projects that need clarity, scale, and reliable daily operation.",
            path: "/diffusers",
            image:
              "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&w=1600&q=80",
            alt: "Luxury diffuser systems by Air Aroma",
            cta: "Explore Diffusers",
          },
          {
            title: "Essential Oils",
            description:
              "Softer blends for wellness-led environments, residences, and scent programs that need a quieter profile.",
            path: "/essential-oils",
            image:
              "https://images.unsplash.com/photo-1608528577891-eb0559d18e58?auto=format&fit=crop&w=1600&q=80",
            alt: "Essential-oil program for premium wellness spaces",
            cta: "Explore Essential Oils",
          },
        ],
        featuredEyebrow: "Featured Directions",
        featuredTitle: "A few standout starting points across the collection.",
        featuredBody:
          "These products show how Air Aroma moves between fragrance-led, hardware-led, and hybrid project needs.",
        compareTitle: "How should a project team choose the right category?",
        comparePoints: [
          "Start with fragrance if the priority is the emotional tone the space needs to leave behind.",
          "Start with hardware if the main challenge is coverage, airflow, or day-to-day operating logic.",
          "Start with essential oils if the project leans wellness-led or needs a quieter scent layer.",
        ],
        finalTitle: "Need a clearer recommendation before choosing a path?",
        finalBody:
          "We can help narrow the best route between fragrance, hardware, and the right program for the type of space and project stage.",
        finalPrimary: "Request a Consultation",
        finalSecondary: "Contact Air Aroma",
      };

  const heroProduct = featuredProducts[0];
  const sideProducts = featuredProducts.slice(1);

  return (
    <div>
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="section-inner section-block">
          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <MountReveal className="space-y-7">
              <span className="kicker-pill">{copy.badge}</span>
              <h1 className="hero-title max-w-[13ch]">{copy.title}</h1>
              <p className="hero-body">{copy.body}</p>
            </MountReveal>

            <MountReveal delay={0.12}>
              <div className="surface-panel p-6 md:p-8">
                <p className="eyebrow">{copy.compareTitle}</p>
                <div className="mt-6">
                  <BulletList items={copy.comparePoints} />
                </div>
              </div>
            </MountReveal>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.96fr_0.96fr]">
            {copy.categories.map((category, index) => (
              <div key={category.title}>
                <Reveal delay={index * 0.08}>
                  <article className="surface-panel flex h-full flex-col overflow-hidden">
                    <div className={index === 0 ? "aspect-[5/4]" : "aspect-[4/4.3]"}>
                      <img
                        src={category.image}
                        alt={category.alt}
                        width="1600"
                        height="1400"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
                      <h2 className="font-display text-[2rem] leading-[1.04] text-ink">
                        {category.title}
                      </h2>
                      <p className="text-[1rem] leading-8 text-ink-soft">
                        {category.description}
                      </p>
                      <ActionLink
                        to={toLocalePath(category.path)}
                        variant="subtle"
                        className="mt-auto"
                      >
                        {category.cta}
                      </ActionLink>
                    </div>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="section-inner section-block">
          <div className="grid gap-8 xl:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <SectionIntro
                eyebrow={copy.featuredEyebrow}
                title={copy.featuredTitle}
                body={copy.featuredBody}
              />
            </Reveal>

            {heroProduct ? (
              <div className="grid gap-6 lg:grid-cols-[1.08fr_0.92fr]">
                <Reveal>
                  <article className="surface-panel-dark flex h-full flex-col overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={heroProduct.images[0].file}
                        alt={getProductName(heroProduct, locale)}
                        width="1400"
                        height="1100"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-6 md:p-8">
                      <p className="eyebrow text-white/80">
                        {getProductCategoryLabel(heroProduct, locale)}
                      </p>
                      <h2 className="font-display text-[2.3rem] leading-[1.02] text-white">
                        {getProductName(heroProduct, locale)}
                      </h2>
                      <p className="text-[1rem] leading-8 text-white/72">
                        {getProductStory(heroProduct, locale)}
                      </p>
                      <ActionLink
                        to={toLocalePath(getProductDetailBasePath(heroProduct))}
                        className="mt-auto self-start"
                      >
                        {isArabic ? "عرض المنتج" : "View Product"}
                      </ActionLink>
                    </div>
                  </article>
                </Reveal>

                <div className="grid gap-6">
                  {sideProducts.map((product, index) => (
                    <div key={product.id}>
                      <Reveal delay={index * 0.08}>
                        <article className="surface-panel flex h-full items-center gap-5 p-4 md:p-5">
                          <div className="media-frame aspect-[4/5] w-[7rem] flex-none md:w-[8rem]">
                            <img
                              src={product.images[0].file}
                              alt={getProductName(product, locale)}
                              width="700"
                              height="900"
                              loading="lazy"
                              decoding="async"
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex flex-1 flex-col gap-3">
                            <p className="eyebrow">{getProductCategoryLabel(product, locale)}</p>
                            <h3 className="font-display text-[1.8rem] leading-[1.02] text-ink">
                              {getProductName(product, locale)}
                            </h3>
                            <p className="text-[0.96rem] leading-7 text-ink-soft">
                              {getProductStory(product, locale)}
                            </p>
                            <Link
                              to={toLocalePath(getProductDetailBasePath(product))}
                              className="button-subtle mt-2 self-start"
                            >
                              {isArabic ? "عرض المنتج" : "View Product"}
                            </Link>
                          </div>
                        </article>
                      </Reveal>
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>

      <FinalCta
        title={copy.finalTitle}
        body={copy.finalBody}
        primary={{ label: copy.finalPrimary, to: toLocalePath("/contact") }}
        secondary={{ label: copy.finalSecondary, to: toLocalePath("/contact") }}
        tone="light"
      />
    </div>
  );
}
