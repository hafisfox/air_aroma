import { useState } from "react";
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
  diffuserProducts,
  getProductCharacteristics,
  getProductDetailBasePath,
  getProductName,
  getProductStory,
} from "../data/products";

export default function Diffusers() {
  const { isArabic, locale, toLocalePath } = useLocaleRouting();
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const aromax = diffuserProducts[0];

  const copy = isArabic
    ? {
        badge: "أنظمة النشر",
        title: "تقنية نشر راقية تربط الهوية العطرية بالأداء اليومي.",
        body:
          "تتراوح أنظمة Air Aroma بين وحدات مستقلة أنيقة ومشروعات HVAC واسعة النطاق، بحيث يتوافق حضور العطر مع حجم المساحة وطبيعة استخدامها وتوقعات التشغيل.",
        metrics: [
          { label: "النهج", value: "أداء هادئ" },
          { label: "المرونة", value: "وحدات + HVAC" },
          { label: "الاستخدام", value: "ضيافة • تجزئة • مساكن" },
        ],
        featuredEyebrow: "وحدة مميزة",
        featuresLabel: "المزايا الأساسية",
        colorsLabel: "الخيارات المتاحة",
        detailCta: "عرض صفحة المنتج",
        systemsEyebrow: "أنظمة النشر",
        systemsTitle: "اختر بين التغطية المعمارية الواسعة والحضور المستقل الأكثر خصوصية.",
        hvacTitle: "حلول مرتبطة بـ HVAC للمشروعات الكبيرة",
        hvacBody:
          "عندما يحتاج المشروع إلى تغطية متعددة المناطق وأداء ثابت في الردهات والمساحات التجارية الكبرى، يصبح الربط مع أنظمة الهواء خياراً أكثر انضباطاً وفاعلية.",
        hvacPoints: [
          "تغطية واضحة للمساحات الكبيرة ذات حركة الاستخدام اليومية المستمرة.",
          "تحكم برمجي يناسب المشروعات متعددة المناطق أو متعددة أوقات التشغيل.",
          "حل أكثر انسجاماً مع البيئات التي تتطلب أداءً ثابتاً ومظهراً هادئاً.",
        ],
        standaloneTitle: "وحدات مستقلة للمساحات الهادئة والمصقولة",
        standaloneBody:
          "الوحدات المستقلة مناسبة للفلل والمتاجر الصغيرة والأجنحة الخاصة والمساحات التي تحتاج حضوراً عطرياً محسوباً دون تعقيد تشغيلي كبير.",
        standalonePoints: [
          "سهولة في التثبيت والموضع مع طابع بصري أكثر أناقة.",
          "أداء هادئ يلائم الضيافة الراقية والمجالس والمساحات الخاصة.",
          "تحكم دقيق في شدة العطر بحسب اليوم والوقت ونمط الاستخدام.",
        ],
        finalTitle: "هل تحتاج إلى معرفة النظام الأنسب للموقع؟",
        finalBody:
          "إذا شاركتنا نوع المساحة وحجمها وطريقة تشغيلها، يمكننا المساعدة على تحديد ما إذا كان المشروع يحتاج جهازاً مستقلاً أو نظاماً أوسع.",
        finalPrimary: "تواصل معنا",
        finalSecondary: "ابدأ مشروعك",
      }
    : {
        badge: "Diffusion Systems",
        title: "Premium diffusion technology that connects scent identity to daily performance.",
        body:
          "Air Aroma's systems range from elegant standalone units to large-format HVAC integration, so the delivery method matches the scale of the space, the way it operates, and the level of control the project needs.",
        metrics: [
          { label: "Approach", value: "Quiet performance" },
          { label: "Flexibility", value: "Standalone + HVAC" },
          { label: "Use Cases", value: "Hospitality • Retail • Residential" },
        ],
        featuredEyebrow: "Featured Unit",
        featuresLabel: "Key Features",
        colorsLabel: "Available Options",
        detailCta: "View Product Page",
        systemsEyebrow: "System Planning",
        systemsTitle: "Choose between large-scale architectural coverage and more discreet standalone presence.",
        hvacTitle: "HVAC-linked systems for large-format projects",
        hvacBody:
          "When a project needs multi-zone coverage and dependable performance across lobbies, retail footprints, or destination-scale environments, HVAC integration becomes the more disciplined option.",
        hvacPoints: [
          "Clear coverage for larger spaces with consistent day-to-day movement.",
          "Programmable control that suits multi-zone and multi-daypart operation.",
          "A stronger fit for environments that need dependable performance with minimal visual noise.",
        ],
        standaloneTitle: "Standalone units for quieter, more private spaces",
        standaloneBody:
          "Standalone hardware suits villas, boutique environments, suites, and other spaces that need a refined scent layer without the complexity of a larger infrastructure plan.",
        standalonePoints: [
          "Flexible placement and setup with a more decorative architectural presence.",
          "Quiet operation that works well in luxury hospitality and private interiors.",
          "Fine-grained scent intensity control across changing use patterns.",
        ],
        finalTitle: "Need help deciding which system fits the site?",
        finalBody:
          "If you share the space type, scale, and operating pattern, we can help determine whether the project needs a standalone unit or a broader HVAC-linked plan.",
        finalPrimary: "Contact Air Aroma",
        finalSecondary: "Start Your Project",
      };

  if (!aromax) {
    return null;
  }

  return (
    <div>
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="section-inner section-block">
          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <MountReveal className="space-y-8">
              <span className="kicker-pill">{copy.badge}</span>
              <h1 className="hero-title max-w-[12ch]">{copy.title}</h1>
              <p className="hero-body">{copy.body}</p>

              <div className="metric-grid">
                {copy.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <p className="metric-label">{metric.label}</p>
                    <p className="metric-value">{metric.value}</p>
                  </div>
                ))}
              </div>
            </MountReveal>

            <MountReveal delay={0.12}>
              <div className="surface-panel p-5 md:p-6">
                <div className="media-frame aspect-[4/5]">
                  <img
                    src={aromax.images[activeColorIdx].file}
                    alt={`${getProductName(aromax, locale)} ${aromax.images[activeColorIdx].size}`}
                    width="1400"
                    height="1700"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="mt-5 flex flex-wrap gap-2">
                  {aromax.images.map((image, index) => (
                    <button
                      key={image.file}
                      type="button"
                      onClick={() => setActiveColorIdx(index)}
                      className={
                        index === activeColorIdx
                          ? "chip bg-accent-soft text-accent-strong"
                          : "chip"
                      }
                    >
                      {image.size}
                    </button>
                  ))}
                </div>
              </div>
            </MountReveal>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner grid gap-10 xl:grid-cols-[1fr_1fr] xl:items-center">
          <Reveal>
            <SectionIntro
              eyebrow={copy.featuredEyebrow}
              title={getProductName(aromax, locale)}
              body={getProductStory(aromax, locale)}
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="surface-panel p-6">
                <p className="eyebrow">{copy.featuresLabel}</p>
                <div className="mt-5">
                  <BulletList items={getProductCharacteristics(aromax, locale)} />
                </div>
              </div>
              <div className="surface-panel p-6">
                <p className="eyebrow">{copy.colorsLabel}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {aromax.images.map((image) => (
                    <span key={image.file} className="chip">
                      {image.size}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="mt-8">
              <ActionLink to={toLocalePath(getProductDetailBasePath(aromax))}>
                {copy.detailCta}
              </ActionLink>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-panel-dark p-6 md:p-8">
              <SectionIntro
                eyebrow={copy.systemsEyebrow}
                title={copy.systemsTitle}
                body=""
              />
              <div className="mt-6 grid gap-6">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h2 className="font-display text-[2rem] leading-[1.02] text-white">
                    {copy.hvacTitle}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-8 text-white/72">
                    {copy.hvacBody}
                  </p>
                  <div className="mt-5">
                    <BulletList items={copy.hvacPoints} dark />
                  </div>
                </div>

                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                  <h2 className="font-display text-[2rem] leading-[1.02] text-white">
                    {copy.standaloneTitle}
                  </h2>
                  <p className="mt-4 text-[1rem] leading-8 text-white/72">
                    {copy.standaloneBody}
                  </p>
                  <div className="mt-5">
                    <BulletList items={copy.standalonePoints} dark />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
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
