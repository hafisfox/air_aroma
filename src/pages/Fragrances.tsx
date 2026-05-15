import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";
import {
  fragrances,
  getProductCharacteristics,
  getProductDetailBasePath,
  getProductName,
  getProductNotes,
  getProductStory,
} from "../data/products";

export default function Fragrances() {
  const { isArabic, locale, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        label: "مجموعتنا",
        title: "العطور",
        intro:
          "صُنعت لأرقى الأذواق. تمتد مجموعتنا من الأخشاب والراتنجات العريقة إلى أعذب مزيج من الحمضيات المعاصرة، المصممة خصيصًا للمساحات الفاخرة.",
        countSuffix: "عطرًا مميزًا",
        notesLabel: "النفحات",
        exploreLabel: "عرض العطر",
        consultTitle: "تحتاج إلى توجيه لاختيار العطر المناسب؟",
        consultBody:
          "يمكننا مساعدتك في تضييق المسار بين النفحات الخشبية والحمضية والراتنجية والمنعشة بما يناسب مشروعك.",
        consultCta: "تحدث مع Air Aroma",
      }
    : {
        label: "Our Collection",
        title: "Fragrances",
        intro:
          "Crafted for discerning tastes. Our palette ranges from rich woods and resins to fresh, contemporary citrus blends tailored for premium spaces.",
        countSuffix: "signature scents",
        notesLabel: "Notes",
        exploreLabel: "View fragrance",
        consultTitle: "Need help narrowing the right fragrance direction?",
        consultBody:
          "We can help you sort through woody, citrus, resinous, fresh, and wellness-led profiles based on the atmosphere your project needs to create.",
        consultCta: "Talk to Air Aroma",
      };

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/custom-scent-design-banner.jpg"
            alt={isArabic ? "مجموعة عطور Air Aroma" : "Air Aroma fragrance library"}
            width="1800"
            height="1200"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/75 to-brand-black" />
        </div>

        <div className="relative mx-auto max-w-6xl px-6 py-28 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-brand-gold uppercase tracking-[0.3em] text-xs font-medium"
          >
            {copy.label}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="mt-5 text-5xl font-light tracking-wide leading-tight text-white sm:text-7xl"
          >
            {copy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/65"
          >
            {copy.intro}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.24 }}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.24em] text-white/40"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-gold" />
            {fragrances.length} {copy.countSuffix}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-12">
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {fragrances.map((fragrance, index) => {
            const name = getProductName(fragrance, locale);
            const story = getProductStory(fragrance, locale);
            const notes = getProductNotes(fragrance, locale);
            const characteristics = getProductCharacteristics(fragrance, locale);

            return (
              <motion.article
                key={fragrance.id}
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: index * 0.07 }}
                className="group flex h-full flex-col overflow-hidden border border-white/10 bg-[#0f0f0f] transition-colors duration-500 hover:border-brand-gold/30"
              >
                <Link
                  to={toLocalePath(getProductDetailBasePath(fragrance))}
                  className="block aspect-[4/5] overflow-hidden bg-[#111]"
                >
                  <img
                    src={fragrance.images[0].file}
                    alt={name}
                    width="1200"
                    height="1500"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </Link>

                <div className="flex flex-1 flex-col p-7">
                  <div className="flex flex-wrap gap-2">
                    {characteristics.slice(0, 3).map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/50"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-5 text-3xl font-light tracking-wide text-white">
                    {name}
                  </h2>

                  <p className="mt-5 flex-1 text-[15px] leading-7 text-white/58">
                    {story}
                  </p>

                  <div className="mt-6 border-t border-white/5 pt-5">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-white/35">
                      {copy.notesLabel}
                    </p>
                    <p className="mt-3 text-[13px] leading-7 text-white/55">
                      {notes.slice(0, 5).join(" · ")}
                    </p>
                  </div>

                  <Link
                    to={toLocalePath(getProductDetailBasePath(fragrance))}
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

      <section className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-12">
          <h2 className="text-4xl font-light text-white md:text-5xl">
            {copy.consultTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-8 text-white/60">
            {copy.consultBody}
          </p>
          <Link
            to={toLocalePath("/contact")}
            className="mt-10 inline-flex items-center justify-center bg-brand-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-white"
          >
            {copy.consultCta}
          </Link>
        </div>
      </section>
    </div>
  );
}
