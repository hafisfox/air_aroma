import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";

const clientLogos = [
  {
    name: "Raffles Hotels & Resorts",
    src: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2026/05/Raffles-logo.png",
  },
  {
    name: "Max Mara",
    src: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/max-mara.png",
  },
  {
    name: "Aston Martin",
    src: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/aston-martin.png",
  },
  {
    name: "Cathay Pacific",
    src: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/cathay-pacific.png",
  },
];

export default function Clients() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        title: "عملاء Air Aroma",
        intro:
          "تثق علامات الضيافة والأزياء والسفر ونمط الحياة بـ Air Aroma لبناء تجارب عطرية متسقة وراقية. صفحة العملاء هذه تمنح فرق المشاريع مرجعاً سريعاً على نوعية العلامات التي تعمل معنا.",
        proofTitle: "ما الذي يعنيه ذلك للمشروعات الجديدة؟",
        proofText:
          "عندما تعمل العلامات المرموقة مع برنامج عطري، فهي تبحث عن ثبات في الأداء واتجاه عطري مناسب للهوية وتجربة مستخدم يمكن الاعتماد عليها يومياً.",
        cta: "اكتشف خدمات الروائح",
      }
    : {
        title: "Air Aroma Client Portfolio",
        intro:
          "Luxury hospitality, fashion, travel, and lifestyle brands work with Air Aroma to create scent experiences that feel cohesive, premium, and operationally dependable. This page gives project teams a quick reference point for the kinds of brands the work serves.",
        proofTitle: "What does that mean for a new project?",
        proofText:
          "When premium brands invest in fragrance programs, they are usually looking for reliable performance, scent direction that matches identity, and a guest experience that can hold up every day.",
        cta: "Explore Scent Services",
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
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {clientLogos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="flex aspect-square items-center justify-center border border-white/5 bg-[#111] p-12"
            >
              <img
                src={logo.src}
                alt={logo.name}
                width="280"
                height="120"
                loading="lazy"
                decoding="async"
                className="w-full max-w-[140px] object-contain opacity-70 transition-opacity hover:opacity-100"
              />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-12">
          <h2 className="text-3xl font-light text-white sm:text-4xl">
            {copy.proofTitle}
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-8 text-white/60">
            {copy.proofText}
          </p>
          <Link
            to={toLocalePath("/scent-marketing")}
            className="mt-10 inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
          >
            {copy.cta}
          </Link>
        </div>
      </section>
    </div>
  );
}
