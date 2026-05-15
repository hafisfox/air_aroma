import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import { diffuserProducts } from "../data/products";

export default function Diffusers() {
  const { i18n } = useTranslation();
  const isAr = i18n.language === "ar";
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const aromax = diffuserProducts[0];

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      {/* Hero */}
      <section
        id="diffusers-hero"
        aria-label="Aroma diffusers introduction"
        className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-white/10 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/5 via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-xs font-medium mb-4"
          >
            {isAr ? "تقنية النشر" : "Diffusion Technology"}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            {isAr ? "موزعات العطور" : "Aroma Diffusers"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            {isAr
              ? "تقنية نشر هواء بارد متطورة. مُصمَّمة للكفاءة وصُنعت للتكامل المثالي مع المساحات الفاخرة."
              : "State-of-the-art cold air diffusion technology. Engineered for efficiency, designed for absolute discretion."}
          </motion.p>
        </div>
      </section>

      {/* Aromax Featured Product */}
      <section
        id="aromax-diffuser"
        aria-label="Aromax oil diffuser"
        className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/5"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image panel */}
          <div className="flex flex-col gap-4">
            <div className="relative aspect-square overflow-hidden bg-[#0f0f0f] rounded-sm border border-white/5">
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeColorIdx}
                  src={aromax.images[activeColorIdx].file}
                  alt={`Aromax diffuser in ${aromax.images[activeColorIdx].size} — Air Aroma`}
                  width="1200"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <div className="absolute top-4 left-4">
                <span className="text-[10px] uppercase tracking-widest bg-brand-gold/90 text-brand-black px-3 py-1 font-semibold">
                  {isAr ? "منتج مميز" : "Featured Product"}
                </span>
              </div>
            </div>
            {/* Color swatches */}
            <div className="flex gap-3">
              {aromax.images.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setActiveColorIdx(i)}
                  className={`flex-1 py-2 text-[11px] uppercase tracking-widest border transition-all duration-200 ${
                    i === activeColorIdx
                      ? "border-brand-gold text-brand-gold"
                      : "border-white/10 text-white/40 hover:border-white/30"
                  }`}
                >
                  {img.size}
                </button>
              ))}
            </div>
          </div>

          {/* Text */}
          <div className="lg:pl-8">
            <p className="uppercase tracking-[0.3em] text-[11px] text-brand-gold mb-4">
              {isAr ? "آروماكس" : "Aromax"}
            </p>
            <h2 className="text-3xl sm:text-4xl font-light mb-6 leading-tight">
              {isAr ? aromax.nameAr : aromax.nameEn}
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-10 text-[15px]">
              {isAr ? aromax.storyAr : aromax.storyEn}
            </p>

            {/* Key features */}
            <div className="mb-8">
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-4">
                {isAr ? "المزايا الأساسية" : "Key Features"}
              </p>
              <ul
                className="space-y-3 text-white/60 font-light text-[14px]"
                aria-label={isAr ? "مزايا آروماكس" : "Aromax diffuser features"}
              >
                {(isAr ? aromax.characteristicsAr : aromax.characteristicsEn).map((feat, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="text-brand-gold mt-0.5">✓</span>
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Available colors */}
            <div>
              <p className="text-[10px] uppercase tracking-widest text-white/30 mb-3">
                {isAr ? "الألوان المتاحة" : "Available Colors"}
              </p>
              <p className="text-white/50 text-sm font-light">
                {aromax.images.map((img) => img.size).join(" · ")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HVAC + Standalone */}
      <section
        id="diffuser-products"
        aria-label="Diffuser product range"
        className="py-24 px-6 lg:px-12 max-w-7xl mx-auto"
      >
        {/* HVAC */}
        <article className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="aspect-[4/3] overflow-hidden bg-[#111]">
            <img
              src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80"
              alt="Air Aroma HVAC-integrated cold air diffusion system for large commercial spaces"
              width="1600"
              height="1200"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={isAr ? "md:pr-12" : "md:pl-12"}>
            <p className="uppercase tracking-widest text-[11px] font-medium text-brand-gold/60 mb-4">
              {isAr ? "درجة المؤسسات" : "Enterprise Grade"}
            </p>
            <h2 className="text-3xl font-light mb-6">
              {isAr ? "التكامل مع نظام التكييف HVAC" : "HVAC Integration"}
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-8 text-[15px]">
              {isAr
                ? "تتصل موزعات HVAC الرائدة لدينا مباشرةً بأنظمة تكييف الهواء المركزية. مثالية للمساحات الكبرى كصالات الفنادق الضخمة ومجمعات المكاتب."
                : "Our flagship HVAC diffusers connect directly to central air conditioning systems. Perfect for massive spaces like mall atriums, mega-hotels, and sprawling office complexes."}
            </p>
            <ul
              className="space-y-4 text-white/50 font-light text-[14px]"
              aria-label={isAr ? "مزايا نظام HVAC" : "HVAC diffuser features"}
            >
              {(isAr
                ? ["تغطية تصل إلى 10,000 م³ باستخدام تدفق هواء عالي الكفاءة", "تقنية النانو لا تترك أي أثر على مجاري الهواء أو الأثاث", "قابل للبرمجة بالكامل عبر تطبيق ذكي مع تحكم متعدد المناطق"]
                : ["Covers up to 10,000 m³ using high-efficiency airflow", "Nano-droplet technology leaves no residue on ducts or furnishings", "Fully programmable via smart app with multi-zone control"]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>

        {/* Standalone */}
        <article className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="md:order-last aspect-[4/3] overflow-hidden bg-[#111]">
            <img
              src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80"
              alt="Air Aroma standalone architectural aroma diffuser in anodized aluminum finish"
              width="1600"
              height="1200"
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={isAr ? "md:pl-12" : "md:pr-12"}>
            <p className="uppercase tracking-widest text-[11px] font-medium text-brand-gold/60 mb-4">
              {isAr ? "السلسلة المعمارية" : "Architectural Series"}
            </p>
            <h2 className="text-3xl font-light mb-6">
              {isAr ? "الوحدات المستقلة" : "Standalone Units"}
            </h2>
            <p className="text-white/50 font-light leading-relaxed mb-8 text-[15px]">
              {isAr
                ? "تصميمات أنيقة من الألومنيوم المؤكسد تبدو كأنها قطع ديكور راقية. تقدم هذه الوحدات مرونة في التوضع لصالات البيع بالتجزئة وغرف كبار الشخصيات والإقامات الفاخرة."
                : "Sleek, anodized aluminum designs that look like high-end decor. These units offer flexible placement for retail boutiques, VIP rooms, and luxury residences."}
            </p>
            <ul
              className="space-y-4 text-white/50 font-light text-[14px]"
              aria-label={isAr ? "مزايا الوحدات المستقلة" : "Standalone diffuser features"}
            >
              {(isAr
                ? ["سهولة التشغيل الفوري مع خيارات التثبيت الجداري", "تشغيل صامت غير ملحوظ من قِبل الضيوف", "التحكم الدقيق في الشدة للبيئات الديناميكية"]
                : ["Plug-and-play simplicity with wall mounting options", "Whisper-quiet operation undetectable by guests", "Precision intensity control for dynamic environments"]
              ).map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
