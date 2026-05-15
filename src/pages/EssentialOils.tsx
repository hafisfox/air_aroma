import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";

export default function EssentialOils() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        title: "الزيوت الأساسية",
        intro:
          "خلطات نقية للمساحات التي تحتاج إلى مزاج أكثر هدوءاً وطبيعة، سواء في مرافق العافية أو الفلل أو برامج الروائح الأخف داخل الضيافة الفاخرة.",
        storyTitle: "متى تكون الزيوت الأساسية هي المسار المناسب؟",
        storyParagraphs: [
          "تعمل الزيوت الأساسية جيداً عندما يكون الهدف هو خلق تجربة أقرب إلى الاسترخاء أو الطبيعة أو العافية اليومية. كما يمكن استخدامها كنقطة بداية قبل الانتقال إلى عطر مخصص أكثر تميزاً.",
          "إذا كان المشروع يحتاج إلى توازن بين الطابع الطبيعي وسهولة التشغيل داخل نظام نشر، يمكننا المساعدة في توجيه الخلطة الأنسب والهيكل المناسب للتطبيق.",
        ],
        cta: "استكشف أنظمة النشر",
      }
    : {
        title: "Essential Oils",
        intro:
          "Pure blends for projects that need a softer, more wellness-led mood, whether that is a spa, villa, premium residence, or a quieter fragrance layer within luxury hospitality.",
        storyTitle: "When are essential oils the right direction?",
        storyParagraphs: [
          "Essential oils work well when the objective is relaxation, nature-led calm, or a more restorative guest experience. They can also be a useful starting point before moving into a more distinctive custom fragrance.",
          "If the project needs a balance between natural character and reliable diffuser performance, we can help guide the blend direction and the best application format.",
        ],
        cta: "Explore Diffuser Systems",
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
            {copy.intro}
          </motion.p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-12">
        <div>
          <h2 className="text-3xl font-light text-white">{copy.storyTitle}</h2>
          {copy.storyParagraphs.map((paragraph) => (
            <p key={paragraph} className="mt-6 text-[15px] leading-8 text-white/55">
              {paragraph}
            </p>
          ))}
          <Link
            to={toLocalePath("/diffusers")}
            className="mt-10 inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
          >
            {copy.cta}
          </Link>
        </div>
        <div className="aspect-[4/3] overflow-hidden bg-[#111]">
          <img
            src="https://images.unsplash.com/photo-1608528577891-eb0559d18e58?auto=format&fit=crop&q=80"
            alt={isArabic ? "زيوت أساسية من Air Aroma" : "Air Aroma essential oils"}
            width="1600"
            height="1200"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
    </div>
  );
}
