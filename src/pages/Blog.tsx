import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";

export default function Blog() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        title: "رؤى حول تسويق الروائح",
        intro:
          "هذه الصفحة تجمع أمثلة عملية وأفكاراً تساعد فرق الضيافة والتجزئة والمطورين على فهم كيف يمكن للهوية العطرية أن تدعم تجربة المكان.",
        cards: [
          {
            title: "كيف يُبنى العطر المميز لمساحة فندقية؟",
            description:
              "ابدأ من نوع الوصول والهوية الشعورية المطلوبة، ثم طابق ذلك مع خطة نشر واقعية داخل الردهات والأجنحة والمناطق المشتركة.",
            image:
              "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&q=80",
            alt: "مثال على تجربة فندقية فاخرة",
            cta: "تعرف على الخدمة",
            path: "/scent-marketing",
          },
          {
            title: "متى تحتاج المتاجر إلى عطر مميز؟",
            description:
              "عندما تبحث العلامة عن تجربة متكررة وقابلة للتذكر، يصبح العطر جزءاً من اللغة الحسية للمتجر وليس مجرد إضافة جمالية.",
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
            alt: "متجر فاخر مع تجربة حسية",
            cta: "اكتشف العطور",
            path: "/fragrances",
          },
        ],
      }
    : {
        title: "Scent Marketing Insights",
        intro:
          "This page collects practical ideas and project thinking to help hospitality teams, retailers, and developers understand how fragrance can support the experience of a space.",
        cards: [
          {
            title: "How does a signature hotel scent get built?",
            description:
              "Start with arrival style and the emotional outcome you want, then connect that to a diffuser plan that works across lobbies, suites, and shared guest zones.",
            image:
              "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&q=80",
            alt: "Luxury hospitality example for scent strategy",
            cta: "Learn About the Service",
            path: "/scent-marketing",
          },
          {
            title: "When does retail need a signature fragrance?",
            description:
              "As soon as the brand needs a more memorable and repeatable in-store feeling, fragrance becomes part of the sensory language instead of a decorative extra.",
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
            alt: "Luxury retail environment for scent strategy",
            cta: "Explore the Fragrances",
            path: "/fragrances",
          },
        ],
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

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="grid gap-16 md:grid-cols-2">
          {copy.cards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="mb-6 aspect-[16/9] overflow-hidden bg-[#111]">
                <img
                  src={card.image}
                  alt={card.alt}
                  width="1600"
                  height="900"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
              <h2 className="text-2xl font-light text-white">{card.title}</h2>
              <p className="mt-5 text-[15px] leading-7 text-white/55">
                {card.description}
              </p>
              <Link
                to={toLocalePath(card.path)}
                className="mt-6 inline-flex text-[11px] uppercase tracking-[0.24em] text-brand-gold transition-colors hover:text-white"
              >
                {card.cta}
              </Link>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
