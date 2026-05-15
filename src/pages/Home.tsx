import { Link } from "react-router-dom";
import type { CSSProperties } from "react";
import {
  clientLogos,
  featuredClients,
  referenceImages,
} from "../data/referenceContent";
import { useLocaleRouting } from "../lib/localeRouting";

const slides = [
  {
    title: { en: "Sensory\n/\nBranding", ar: "العلامات\n/\nالحسية" },
    description: {
      en: "Crafting signature fragrances for iconic brands.",
      ar: "نصنع عطوراً مميزة لعلامات أيقونية.",
    },
    image: referenceImages.homeHeroLana,
  },
  {
    title: { en: "Custom\nScent Design", ar: "تصميم\nعطور مخصصة" },
    description: {
      en: "Discover your distinctive brand scent.",
      ar: "اكتشف الرائحة الخاصة بعلامتك.",
    },
    image: referenceImages.homeHeroCustomScent,
  },
  {
    title: { en: "Premium\nScent Diffusion", ar: "نشر عطري\nفاخر" },
    description: {
      en: "High-performance diffusers that make an impact.",
      ar: "موزعات عالية الأداء تترك أثراً واضحاً.",
    },
    image: referenceImages.aromaxHero,
  },
  {
    title: { en: "Signature\nFragrance", ar: "العطر\nالمميز" },
    description: {
      en: "Design a fragrance that belongs to your brand.",
      ar: "صمم عطراً ينتمي إلى علامتك.",
    },
    image: referenceImages.productSignature,
  },
];

export default function Home() {
  const { locale, toLocalePath } = useLocaleRouting();
  const isArabic = locale === "ar";

  return (
    <div>
      <section className="home-hero" aria-label={isArabic ? "أبرز محتوى" : "Featured content"}>
        {slides.map((slide, index) => (
          <article
            key={slide.title.en}
            className="home-hero__slide"
            style={{ "--slide-index": index } as CSSProperties}
            aria-hidden={index !== 0}
          >
            <img
              src={slide.image}
              alt=""
              width="1800"
              height="900"
              fetchPriority={index === 0 ? "high" : undefined}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
            <div className="home-hero__content">
              <h1 className="home-hero__title">{slide.title[locale]}</h1>
              <p>{slide.description[locale]}</p>
            </div>
          </article>
        ))}
        <div className="home-hero__dots" aria-hidden="true">
          {slides.map((slide) => (
            <span key={slide.title.en} />
          ))}
        </div>
      </section>

      <section className="quiet-section">
        <div className="reference-container">
          <div className="section-intro section-intro--center">
            <h2 className="section-title">
              {isArabic
                ? "وكالة تسويق روائح، تصمم العطور للعلامات الفاخرة"
                : "Scent Marketing Agency, designing fragrances for luxury brands"}
            </h2>
          </div>
          <div className="reference-copy mt-10">
            <p>
              {isArabic
                ? "Air Aroma هي وكالة رائدة في تسويق الروائح؛ نصمم عطوراً مخصصة للعلامات الفاخرة حول العالم. مع أكثر من 25 عاماً من الخبرة في حلول الهواء المعطر وشبكة عالمية متميزة، نساعد العلامات على خلق تجارب لا تنسى من خلال الرائحة."
                : "Air Aroma is the leading scent marketing agency; we design custom fragrances for luxury brands around the world. With over 25 years experience offering scented air solutions, combined with an unrivaled global network, we help brands create memorable experiences for their customers through scent."}
            </p>
            <p className="mt-6">
              {isArabic ? "تشمل خبراتنا تصميم " : "Our expertise includes custom "}
              <Link to={toLocalePath("/signature-scent")}>
                {isArabic ? "العطر المميز" : "Signature Scent"}
              </Link>
              {isArabic ? "، و" : " design, natural "}
              <Link to={toLocalePath("/essential-oils")}>
                {isArabic ? "الزيوت الأساسية" : "Essential Oils"}
              </Link>
              {isArabic ? " وأنظمة " : " and premium "}
              <Link to={toLocalePath("/diffusers")}>
                {isArabic ? "موزعات العطور" : "Aroma Diffuser"}
              </Link>
              {isArabic ? " الفاخرة. " : " Systems. "}
              <Link to={toLocalePath("/contact")}>
                {isArabic ? "اتصل" : "Contact"}
              </Link>
              {isArabic
                ? " بنا لإنشاء عطر علامتك المميز."
                : " us to create your brand's Signature Fragrance."}
            </p>
          </div>
        </div>
      </section>

      <section className="quiet-section quiet-section--border">
        <div className="section-intro section-intro--center mb-16">
          <h2 className="section-title">{isArabic ? "أبرز العملاء" : "Featured Clients"}</h2>
        </div>

        <div className="client-mosaic">
          {featuredClients.map((client) => (
            <article key={client.name} className="client-mosaic__feature">
              <div className="client-mosaic__title">{client.name}</div>
              <img
                src={client.image}
                alt={client.alt[locale]}
                width="920"
                height="616"
                loading="lazy"
                decoding="async"
              />
            </article>
          ))}

          {clientLogos.map((logo) => (
            <div key={logo.name} className="client-mosaic__logo">
              <img
                src={logo.image}
                alt={logo.name}
                width="260"
                height="110"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}

          <Link to={toLocalePath("/clients")} className="client-mosaic__more">
            {isArabic ? "عرض المزيد من العملاء" : "View more clients"}
          </Link>
        </div>
      </section>

      <section className="quiet-section">
        <div className="editorial-teasers">
          <article className="editorial-teaser">
            <h3>{isArabic ? "العطور الزهرية" : "Floral Fragrances"}</h3>
            <p>
              {isArabic
                ? "تلتقط الخلاصات الزهرية نوعاً من الجمال الذي تعبّر عنه الرائحة بأفضل شكل."
                : "Floral essences capture a type of beauty best expressed in scent. The ancient pull to the sweet, tart, or hazy aroma of a blossoming floral has connected humans to their environment for thousands of years. Florals..."}
            </p>
            <Link to={toLocalePath("/fragrances")} className="button-subtle">
              {isArabic ? "اقرأ المزيد" : "Read More"}
            </Link>
          </article>

          <article className="editorial-teaser">
            <h3>{isArabic ? "من يستخدم الروائح؟" : "Who's Scenting?"}</h3>
            <p>
              {isArabic
                ? "نصمم الروائح للفنادق والمتاجر والمؤسسات المالية وعلامات الأزياء والفعاليات والمنازل والمزيد."
                : "We design scents for hotels, retail stores, financial institutions, fashion brands, events, residential homes and so much more."}
            </p>
            <Link to={toLocalePath("/scent-marketing")} className="button-subtle">
              {isArabic ? "اقرأ المزيد" : "Read More"}
            </Link>
          </article>
        </div>
      </section>
    </div>
  );
}
