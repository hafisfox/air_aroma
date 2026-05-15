import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";

const faqItems = {
  en: [
    {
      question: "What is scent marketing for hotels and retail brands?",
      answer:
        "Scent marketing uses a custom ambient fragrance to shape how guests remember a space, strengthen brand recognition, and create a more premium arrival experience.",
    },
    {
      question: "Can Air Aroma support projects in Saudi Arabia and across the GCC?",
      answer:
        "Yes. Air Aroma's product mix and fragrance strategy are suited to hospitality, luxury retail, residences, and branded developments across Saudi Arabia and the GCC.",
    },
    {
      question: "Which diffuser system is best for a large commercial space?",
      answer:
        "Large-format hospitality and retail projects typically benefit from HVAC-connected cold-air systems, while boutiques, suites, and villas often need discreet standalone diffusers.",
    },
  ],
  ar: [
    {
      question: "ما المقصود بتسويق الروائح للفنادق والمتاجر الراقية؟",
      answer:
        "تسويق الروائح هو استخدام عطر محيطي مخصص لتشكيل ذاكرة الضيف عن المكان وتعزيز هوية العلامة التجارية وخلق تجربة استقبال أكثر فخامة.",
    },
    {
      question: "هل تدعم Air Aroma المشاريع في السعودية ودول الخليج؟",
      answer:
        "نعم. مزيج المنتجات واستراتيجية العطور لدى Air Aroma مناسب لمشروعات الضيافة الفاخرة والتجزئة والمساكن والوجهات ذات العلامات التجارية في السعودية والخليج.",
    },
    {
      question: "ما النظام الأنسب للمساحات التجارية الكبيرة؟",
      answer:
        "المشروعات الكبرى في الضيافة والتجزئة تستفيد عادة من أنظمة الهواء البارد المرتبطة بـ HVAC، بينما تحتاج المتاجر الصغيرة والأجنحة والفلل غالباً إلى موزعات مستقلة أنيقة.",
    },
  ],
};

export default function Home() {
  const { isArabic, toLocalePath } = useLocaleRouting();
  const locale = isArabic ? "ar" : "en";

  const copy = isArabic
    ? {
        badge: "حلول عطرية للضيافة الفاخرة والتجزئة",
        title: "هوية عطرية فاخرة للمشاريع في السعودية ودول الخليج",
        intro:
          "تصمم Air Aroma برامج تسويق الروائح والعطور المميزة وأنظمة النشر بالهواء البارد للفنادق والمتاجر والمساكن الراقية والوجهات ذات العلامات التجارية.",
        support:
          "من تطوير الرائحة المميزة إلى اختيار نظام النشر المناسب، نساعد الفرق على بناء تجربة حسية واضحة وقابلة للتوسع ومتناغمة مع مستوى المشروع.",
        primaryCta: "ابدأ مشروعك العطري",
        secondaryCta: "استكشف أنظمة النشر",
        focusLabel: "مجالات العمل",
        focusTitle: "كيف ندعم مشاريع الروائح في الخليج",
        focusCards: [
          {
            title: "الفنادق والمنتجعات",
            description:
              "برامج روائح للاستقبال والسبا والأجنحة والممرات، مع توزيع ثابت يناسب معايير الضيافة الراقية.",
            link: toLocalePath("/scent-marketing"),
          },
          {
            title: "التجزئة الفاخرة",
            description:
              "هوية عطرية تساعد على تمييز العلامة وزيادة الإحساس بالفخامة عبر رحلات تسوق متناسقة.",
            link: toLocalePath("/signature-scent"),
          },
          {
            title: "أنظمة النشر",
            description:
              "موزعات مستقلة وأنظمة HVAC لمشروعات الفلل والمعارض والفنادق والمساحات التجارية الكبرى.",
            link: toLocalePath("/diffusers"),
          },
        ],
        proofLabel: "لماذا Air Aroma",
        proofTitle: "تصميم عطري واضح من الفكرة إلى التشغيل",
        proofPoints: [
          "استراتيجية تجمع بين الهوية العطرية ومتطلبات التشغيل والصيانة.",
          "مجموعات عطرية مناسبة للضيافة الفاخرة والتجزئة والمساكن الراقية.",
          "أنظمة نشر بالهواء البارد لمشروعات صغيرة ومتوسطة وكبيرة.",
        ],
        fragranceLabel: "العطور",
        fragranceTitle: "مجموعات عطرية جاهزة للاكتشاف",
        fragranceText:
          "استكشف مزجاً بين الحمضيات والأخشاب والراتنجات والنفحات النظيفة لبناء اتجاه عطري يناسب مساحتك أو لتحديد نقطة انطلاق لعطر مخصص.",
        fragranceCta: "عرض مجموعة العطور",
        faqLabel: "الأسئلة الشائعة",
        faqTitle: "إجابات سريعة لفرق المشاريع والضيافة",
        contactTitle: "هل لديك مشروع في السعودية أو الخليج؟",
        contactText:
          "شاركنا نوع المساحة والهدف من التجربة والجدول الزمني، وسنساعدك على تحديد العطر والنظام المناسبين.",
        contactCta: "التواصل مع Air Aroma",
      }
    : {
        badge: "Scent strategy for luxury hospitality and retail",
        title: "Luxury scent marketing for Saudi Arabia and the GCC",
        intro:
          "Air Aroma creates premium scent marketing programs, signature fragrances, and cold-air diffusion systems for hotels, retail destinations, residences, and branded environments.",
        support:
          "From fragrance development through diffuser selection, we help teams build a scent identity that feels elevated, scalable, and operationally dependable.",
        primaryCta: "Start Your Scent Project",
        secondaryCta: "Explore Diffuser Systems",
        focusLabel: "Where We Work",
        focusTitle: "How we support GCC fragrance projects",
        focusCards: [
          {
            title: "Hotels and Resorts",
            description:
              "Arrival, spa, suite, and corridor scent programs designed for premium guest experiences and reliable daily performance.",
            link: toLocalePath("/scent-marketing"),
          },
          {
            title: "Luxury Retail",
            description:
              "Signature fragrance direction that helps premium stores feel distinctive, memorable, and consistent across locations.",
            link: toLocalePath("/signature-scent"),
          },
          {
            title: "Diffusion Systems",
            description:
              "Standalone and HVAC scent systems for villas, boutiques, hospitality venues, and large-format commercial spaces.",
            link: toLocalePath("/diffusers"),
          },
        ],
        proofLabel: "Why Air Aroma",
        proofTitle: "A clearer fragrance path from concept to rollout",
        proofPoints: [
          "Scent strategy that connects brand direction with day-to-day operations.",
          "Fragrance collections suited to hospitality, retail, wellness, and residential use.",
          "Cold-air diffusion options for compact spaces, flagships, and large developments.",
        ],
        fragranceLabel: "Fragrance Library",
        fragranceTitle: "Explore blends before you brief a custom scent",
        fragranceText:
          "Browse citrus, woods, resinous, fresh, and wellness-led profiles to define the mood of your project or to shape the first direction for a bespoke fragrance brief.",
        fragranceCta: "View Fragrance Collection",
        faqLabel: "FAQ",
        faqTitle: "Quick answers for hospitality and project teams",
        contactTitle: "Planning a scent project in Saudi Arabia or the GCC?",
        contactText:
          "Share the type of space, the experience you want to create, and your preferred timeline. We will help you narrow the right fragrance and diffusion approach.",
        contactCta: "Contact Air Aroma",
      };

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <section className="relative isolate overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2024/11/fairmont-candle-for-sale.jpg"
            alt={
              isArabic
                ? "مشهد عطري فاخر من Air Aroma"
                : "Luxury scent marketing scene by Air Aroma"
            }
            width="1800"
            height="1200"
            fetchPriority="high"
            decoding="async"
            className="h-full w-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/70 to-black" />
        </div>

        <div className="relative mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-6 py-32 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-6 max-w-max rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-2 text-[11px] uppercase tracking-[0.24em] text-brand-gold"
          >
            {copy.badge}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className="max-w-4xl text-5xl font-light leading-[1.05] text-white md:text-7xl"
          >
            {copy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/75 md:text-xl"
          >
            {copy.intro}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24 }}
            className="mt-4 max-w-3xl text-base leading-8 text-white/55"
          >
            {copy.support}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.32 }}
            className="mt-10 flex flex-col gap-4 sm:flex-row"
          >
            <Link
              to={toLocalePath("/contact")}
              className="inline-flex items-center justify-center bg-brand-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-white"
            >
              {copy.primaryCta}
            </Link>
            <Link
              to={toLocalePath("/diffusers")}
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
            >
              {copy.secondaryCta}
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        <div className="mb-14">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-gold">
            {copy.focusLabel}
          </p>
          <h2 className="max-w-3xl text-4xl font-light text-white md:text-5xl">
            {copy.focusTitle}
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {copy.focusCards.map((card, index) => (
            <motion.article
              key={card.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex h-full flex-col border border-white/10 bg-white/[0.03] p-8"
            >
              <h3 className="mb-4 text-2xl font-light text-white">{card.title}</h3>
              <p className="mb-8 flex-1 text-[15px] leading-7 text-white/55">
                {card.description}
              </p>
              <Link
                to={card.link}
                className="max-w-max text-[11px] uppercase tracking-[0.24em] text-brand-gold transition-colors hover:text-white"
              >
                {isArabic ? "اعرف المزيد" : "Learn More"}
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="border-y border-white/5 bg-[#050505]">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr,0.9fr] lg:px-12">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-gold">
              {copy.proofLabel}
            </p>
            <h2 className="max-w-3xl text-4xl font-light text-white md:text-5xl">
              {copy.proofTitle}
            </h2>
          </div>
          <ul className="space-y-5 text-[15px] leading-8 text-white/60">
            {copy.proofPoints.map((point) => (
              <li key={point} className="flex gap-4">
                <span className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-2 lg:px-12">
        <div className="overflow-hidden bg-[#111]">
          <img
            src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/custom-scent-design-banner.jpg"
            alt={
              isArabic
                ? "مجموعة عطور Air Aroma الفاخرة"
                : "Air Aroma luxury fragrance collection"
            }
            width="1600"
            height="1200"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-col justify-center">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-gold">
            {copy.fragranceLabel}
          </p>
          <h2 className="text-4xl font-light text-white md:text-5xl">
            {copy.fragranceTitle}
          </h2>
          <p className="mt-8 text-[15px] leading-8 text-white/60">
            {copy.fragranceText}
          </p>
          <Link
            to={toLocalePath("/fragrances")}
            className="mt-10 inline-flex max-w-max items-center border border-white/20 px-7 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
          >
            {copy.fragranceCta}
          </Link>
        </div>
      </section>

      <section className="border-t border-white/5 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-brand-gold">
            {copy.faqLabel}
          </p>
          <h2 className="max-w-3xl text-4xl font-light text-white md:text-5xl">
            {copy.faqTitle}
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {faqItems[locale].map((item, index) => (
              <motion.article
                key={item.question}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="border border-white/10 p-8"
              >
                <h3 className="text-xl font-light text-white">{item.question}</h3>
                <p className="mt-5 text-[15px] leading-7 text-white/55">
                  {item.answer}
                </p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-12">
        <h2 className="text-4xl font-light text-white md:text-5xl">
          {copy.contactTitle}
        </h2>
        <p className="mx-auto mt-8 max-w-3xl text-[15px] leading-8 text-white/60">
          {copy.contactText}
        </p>
        <Link
          to={toLocalePath("/contact")}
          className="mt-10 inline-flex items-center justify-center bg-brand-gold px-8 py-4 text-sm font-medium uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-white"
        >
          {copy.contactCta}
        </Link>
      </section>
    </div>
  );
}
