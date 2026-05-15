import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";

export default function Products() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        title: "منتجات Air Aroma",
        subtitle:
          "استكشف مسارات العطور والموزعات والزيوت الأساسية لتحديد التوليفة المناسبة للضيافة الراقية والتجزئة والمساكن الفاخرة في السعودية والخليج.",
        sections: [
          {
            title: "العطور المميزة",
            description:
              "عطور جاهزة للاكتشاف أو كنقطة انطلاق لبناء هوية عطرية مخصصة تتماشى مع شخصية المشروع.",
            path: "/fragrances",
            image:
              "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80",
            alt: "مجموعة عطور Air Aroma الفاخرة",
          },
          {
            title: "موزعات العطور",
            description:
              "أنظمة نشر بالهواء البارد للمساحات الصغيرة والكبيرة، تشمل حلولاً مستقلة وأخرى مرتبطة بـ HVAC.",
            path: "/diffusers",
            image:
              "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80",
            alt: "موزعات عطرية فاخرة من Air Aroma",
          },
          {
            title: "الزيوت الأساسية",
            description:
              "خلطات نقية موجهة للعافية والتجارب الهادئة وبرامج العطور التي تركز على الطبيعة والاسترخاء.",
            path: "/essential-oils",
            image:
              "https://images.unsplash.com/photo-1608528577891-eb0559d18e58?auto=format&fit=crop&q=80",
            alt: "زيوت أساسية من Air Aroma",
          },
        ],
        compareTitle: "كيف تختار الفئة المناسبة؟",
        compareText:
          "تبدأ معظم المشاريع بتحديد ما إذا كانت الأولوية هي تطوير عطر مميز أو اختيار نظام نشر أو بناء تجربة عافية قائمة على الزيوت الأساسية. صفحة المنتجات هذه تساعدك على بدء المسار الصحيح بسرعة.",
        cta: "اطلب استشارة",
      }
    : {
        title: "Air Aroma Product Categories",
        subtitle:
          "Compare fragrance, diffuser, and essential-oil pathways to find the right fit for premium hospitality, retail, and residential projects in Saudi Arabia and the GCC.",
        sections: [
          {
            title: "Signature Fragrances",
            description:
              "Explore ready-to-review blends or use the collection as a starting point for a custom scent identity.",
            path: "/fragrances",
            image:
              "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80",
            alt: "Air Aroma fragrance collection",
          },
          {
            title: "Aroma Diffusers",
            description:
              "Cold-air systems for compact and large-format spaces, including standalone hardware and HVAC-linked options.",
            path: "/diffusers",
            image:
              "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80",
            alt: "Air Aroma luxury diffuser systems",
          },
          {
            title: "Essential Oils",
            description:
              "Wellness-led blends for calmer scent experiences, nature-led programs, and diffuser applications that need a softer profile.",
            path: "/essential-oils",
            image:
              "https://images.unsplash.com/photo-1608528577891-eb0559d18e58?auto=format&fit=crop&q=80",
            alt: "Air Aroma essential oils",
          },
        ],
        compareTitle: "How should a project team choose the right category?",
        compareText:
          "Most teams start by deciding whether the priority is fragrance identity, hardware selection, or a wellness-led essential-oil program. This page is designed to move you into the right path quickly.",
        cta: "Request a Consultation",
      };

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <section className="border-b border-white/10 px-6 py-28 lg:px-12">
        <div className="mx-auto max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl font-light leading-tight sm:text-6xl"
          >
            {copy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/60"
          >
            {copy.subtitle}
          </motion.p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-12 md:grid-cols-3">
          {copy.sections.map((section, index) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex h-full flex-col bg-[#0f0f0f] border border-white/5"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={section.image}
                  alt={section.alt}
                  width="1200"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <h2 className="text-2xl font-light text-white">{section.title}</h2>
                <p className="mt-5 flex-1 text-[15px] leading-7 text-white/55">
                  {section.description}
                </p>
                <Link
                  to={toLocalePath(section.path)}
                  className="mt-8 max-w-max text-[11px] uppercase tracking-[0.24em] text-brand-gold transition-colors hover:text-white"
                >
                  {isArabic ? "استكشف" : "Explore"}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center lg:px-12">
          <h2 className="text-3xl font-light text-white sm:text-4xl">
            {copy.compareTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-8 text-white/60">
            {copy.compareText}
          </p>
          <Link
            to={toLocalePath("/contact")}
            className="mt-10 inline-flex items-center justify-center bg-brand-gold px-8 py-4 text-sm uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-white"
          >
            {copy.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
