import { useState } from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";
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
        label: "تقنية النشر",
        title: "موزعات العطور",
        intro:
          "تقنية نشر هواء بارد متطورة، مصممة للكفاءة وجاهزة للاندماج السلس داخل المساحات الفاخرة والمشروعات عالية التوقعات.",
        featuredLabel: "منتج مميز",
        featuresLabel: "المزايا الأساسية",
        colorsLabel: "الألوان المتاحة",
        detailCta: "عرض صفحة المنتج",
        hvacLabel: "درجة المؤسسات",
        hvacTitle: "تكامل مع أنظمة HVAC للمشروعات الواسعة",
        hvacBody:
          "تتصل أنظمة النشر المركزية مباشرة بتكييف الهواء لخدمة الردهات والمساحات التجارية الكبرى والمشروعات متعددة المناطق بثبات أعلى وتحكم أدق.",
        hvacPoints: [
          "تغطية واسعة للمساحات التي تحتاج أداءً يومياً ثابتاً",
          "تشغيل نظيف دون ترسبات على الأثاث أو مجاري الهواء",
          "تحكم برمجي مناسب للمشروعات متعددة المناطق",
        ],
        standaloneLabel: "السلسلة المعمارية",
        standaloneTitle: "وحدات مستقلة أنيقة للمساحات الراقية",
        standaloneBody:
          "وحدات الألومنيوم المؤكسد تمنح مرونة في التوضع للمنازل الفاخرة والمتاجر والأجنحة الخاصة مع حضور بصري هادئ.",
        standalonePoints: [
          "تشغيل سهل مع خيارات تثبيت مرنة",
          "أداء هادئ ومناسب لبيئات الضيافة",
          "تحكم دقيق في الكثافة للمشروعات المتغيرة",
        ],
      }
    : {
        label: "Diffusion Technology",
        title: "Aroma Diffusers",
        intro:
          "State-of-the-art cold-air diffusion engineered for efficiency, quiet performance, and seamless integration into premium spaces.",
        featuredLabel: "Featured Product",
        featuresLabel: "Key Features",
        colorsLabel: "Available Colors",
        detailCta: "View product page",
        hvacLabel: "Enterprise Grade",
        hvacTitle: "HVAC integration for large-format projects",
        hvacBody:
          "Central diffusion systems connect directly into air-conditioning infrastructure to serve lobbies, retail footprints, and multi-zone projects with more control and consistency.",
        hvacPoints: [
          "Wide coverage for projects that need reliable daily performance",
          "Clean output with no residue on furnishings or ducting",
          "Programmable control suitable for multi-zone environments",
        ],
        standaloneLabel: "Architectural Series",
        standaloneTitle: "Standalone units for refined interiors",
        standaloneBody:
          "Anodized aluminum units offer flexible placement for residences, boutiques, suites, and wellness spaces while still feeling architectural and discreet.",
        standalonePoints: [
          "Easy setup with flexible placement or mounting options",
          "Quiet operation suited to hospitality-led environments",
          "Precision intensity control for changing dayparts",
        ],
      };

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-28 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-xs font-medium"
          >
            {copy.label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="mt-5 text-5xl font-light leading-tight text-white sm:text-7xl"
          >
            {copy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, delay: 0.16 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/65"
          >
            {copy.intro}
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 lg:grid-cols-[1fr,0.95fr] lg:items-center">
          <div>
            <div className="overflow-hidden border border-white/10 bg-[#0f0f0f]">
              <div className="aspect-square overflow-hidden">
                <img
                  src={aromax.images[activeColorIdx].file}
                  alt={`${getProductName(aromax, locale)} ${aromax.images[activeColorIdx].size}`}
                  width="1200"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {aromax.images.map((image, index) => (
                <button
                  key={image.file}
                  type="button"
                  onClick={() => setActiveColorIdx(index)}
                  className={`border px-3 py-3 text-[11px] uppercase tracking-[0.24em] transition-colors ${
                    index === activeColorIdx
                      ? "border-brand-gold bg-brand-gold/10 text-brand-gold"
                      : "border-white/10 text-white/55 hover:border-white/30"
                  }`}
                >
                  {image.size}
                </button>
              ))}
            </div>
          </div>

          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
              {copy.featuredLabel}
            </p>
            <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
              {getProductName(aromax, locale)}
            </h2>
            <p className="mt-8 text-[15px] leading-8 text-white/60">
              {getProductStory(aromax, locale)}
            </p>

            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                {copy.featuresLabel}
              </p>
              <ul className="mt-5 space-y-3 text-[15px] leading-7 text-white/60">
                {getProductCharacteristics(aromax, locale).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/35">
                {copy.colorsLabel}
              </p>
              <p className="mt-4 text-[15px] leading-7 text-white/60">
                {aromax.images.map((image) => image.size).join(" · ")}
              </p>
            </div>

            <Link
              to={toLocalePath(getProductDetailBasePath(aromax))}
              className="mt-10 inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
            >
              {copy.detailCta}
            </Link>
          </div>
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <article className="grid gap-16 md:grid-cols-2 md:items-center">
            <div className="aspect-[4/3] overflow-hidden bg-[#111]">
              <img
                src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80"
                alt="Air Aroma HVAC scent diffusion for large commercial spaces"
                width="1600"
                height="1200"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                {copy.hvacLabel}
              </p>
              <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
                {copy.hvacTitle}
              </h2>
              <p className="mt-8 text-[15px] leading-8 text-white/60">
                {copy.hvacBody}
              </p>
              <ul className="mt-8 space-y-3 text-[15px] leading-7 text-white/60">
                {copy.hvacPoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="mt-24 grid gap-16 md:grid-cols-2 md:items-center">
            <div className="md:order-last aspect-[4/3] overflow-hidden bg-[#111]">
              <img
                src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80"
                alt="Air Aroma standalone architectural diffuser"
                width="1600"
                height="1200"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-brand-gold">
                {copy.standaloneLabel}
              </p>
              <h2 className="mt-4 text-4xl font-light text-white md:text-5xl">
                {copy.standaloneTitle}
              </h2>
              <p className="mt-8 text-[15px] leading-8 text-white/60">
                {copy.standaloneBody}
              </p>
              <ul className="mt-8 space-y-3 text-[15px] leading-7 text-white/60">
                {copy.standalonePoints.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-gold" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
