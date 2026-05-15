import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
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
  const { isArabic, locale, toLocalePath } = useLocaleRouting();
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end end"],
  });
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 28,
    mass: 0.45,
  });

  const mediaScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.08, 1.16]);
  const mediaOpacity = useTransform(smoothProgress, [0, 0.82, 1], [0.72, 0.46, 0.18]);

  const phase1Opacity = useTransform(smoothProgress, [0, 0.12, 0.28], [1, 1, 0]);
  const phase1Y = useTransform(smoothProgress, [0, 0.28], [0, -42]);

  const phase2Opacity = useTransform(
    smoothProgress,
    [0.18, 0.35, 0.58],
    [0, 1, 0],
  );
  const phase2Y = useTransform(smoothProgress, [0.18, 0.35, 0.58], [44, 0, -38]);

  const phase3Opacity = useTransform(
    smoothProgress,
    [0.52, 0.72, 1],
    [0, 1, 1],
  );
  const phase3Y = useTransform(smoothProgress, [0.52, 0.72, 1], [40, 0, 0]);

  const copy = isArabic
    ? {
        badge: "حلول عطرية للضيافة الفاخرة والتجزئة",
        heroPhases: [
          {
            eyebrow: "هوية عطرية",
            title: "تجربة حسية فاخرة للمشاريع في السعودية ودول الخليج",
            body:
              "تصمم Air Aroma برامج تسويق الروائح التي تجعل الوصول إلى المكان أكثر فخامةً ووضوحًا في الذاكرة وأكثر ارتباطًا بالعلامة التجارية.",
          },
          {
            eyebrow: "اتجاه العطر",
            title: "عطور مميزة تبني الانطباع قبل أن تُقال أي كلمة",
            body:
              "من تطوير العطر المميز إلى اختيار النفحات الجاهزة للاكتشاف، نساعد الفرق على تحديد مزاج عطري متناسق مع شخصية المشروع.",
          },
          {
            eyebrow: "تقنية النشر",
            title: "أنظمة هواء بارد أنيقة وجاهزة للتشغيل على نطاق راقٍ",
            body:
              "نربط بين الهوية العطرية والنظام المناسب للتشغيل اليومي، سواء لمساحات الضيافة الكبيرة أو المتاجر أو المساكن الفاخرة.",
          },
        ],
        primaryCta: "ابدأ مشروعك العطري",
        secondaryCta: "استكشف أنظمة النشر",
        scrollHint: "اسحب لاكتشاف المراحل",
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
        focusLink: "اعرف المزيد",
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
        heroPhases: [
          {
            eyebrow: "Scent Strategy",
            title: "Luxury scent marketing for Saudi Arabia and the GCC",
            body:
              "Air Aroma creates premium scent programs that make arrivals feel more elevated, reinforce brand memory, and shape how a space is remembered.",
          },
          {
            eyebrow: "Fragrance Identity",
            title: "Signature fragrances that define the mood before a word is spoken",
            body:
              "From bespoke scent design to curated blends ready to review, we help teams shape a fragrance direction that feels coherent, premium, and brand-led.",
          },
          {
            eyebrow: "Diffusion Systems",
            title: "Cold-air diffusion designed to perform beautifully at scale",
            body:
              "We connect fragrance identity to the right delivery system, whether the project is a hotel, boutique, residence, wellness space, or large-format destination.",
          },
        ],
        primaryCta: "Start Your Scent Project",
        secondaryCta: "Explore Diffuser Systems",
        scrollHint: "Scroll to move through the story",
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
        focusLink: "Learn More",
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
      <section
        ref={heroRef}
        className="relative h-[220vh] border-b border-white/10 bg-black md:h-[280vh] xl:h-[300vh]"
      >
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div
            style={{ scale: mediaScale, opacity: mediaOpacity }}
            className="absolute inset-0"
          >
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
              className="h-full w-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(197,160,89,0.22),transparent_38%)]" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/68 to-black" />
          </motion.div>

          <div className="relative mx-auto flex h-full w-full max-w-7xl flex-col justify-center px-6 py-24 lg:px-12">
            <div className="absolute top-24 left-6 right-6 flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-white/35 lg:left-12 lg:right-12">
              <span className="rounded-full border border-brand-gold/40 bg-brand-gold/10 px-4 py-2 text-brand-gold">
                {copy.badge}
              </span>
              <span className="hidden md:block">{copy.scrollHint}</span>
            </div>

            <div className="relative h-[62vh] md:h-[70vh]">
              <motion.div
                style={{ opacity: phase1Opacity, y: phase1Y }}
                className="absolute inset-0 flex max-w-4xl flex-col justify-center"
              >
                <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-brand-gold">
                  {copy.heroPhases[0].eyebrow}
                </p>
                <h1 className="max-w-4xl text-5xl font-light leading-[1.02] text-white md:text-7xl lg:text-8xl">
                  {copy.heroPhases[0].title}
                </h1>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75 md:text-xl">
                  {copy.heroPhases[0].body}
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: phase2Opacity, y: phase2Y }}
                className="absolute inset-0 flex max-w-3xl flex-col justify-center"
              >
                <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-brand-gold">
                  {copy.heroPhases[1].eyebrow}
                </p>
                <h2 className="max-w-4xl text-4xl font-light leading-[1.05] text-white md:text-6xl lg:text-7xl">
                  {copy.heroPhases[1].title}
                </h2>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
                  {copy.heroPhases[1].body}
                </p>
              </motion.div>

              <motion.div
                style={{ opacity: phase3Opacity, y: phase3Y }}
                className="absolute inset-0 flex max-w-3xl flex-col justify-center"
              >
                <p className="mb-5 text-[11px] uppercase tracking-[0.34em] text-brand-gold">
                  {copy.heroPhases[2].eyebrow}
                </p>
                <h2 className="max-w-4xl text-4xl font-light leading-[1.05] text-white md:text-6xl lg:text-7xl">
                  {copy.heroPhases[2].title}
                </h2>
                <p className="mt-8 max-w-3xl text-lg leading-8 text-white/72 md:text-xl">
                  {copy.heroPhases[2].body}
                </p>
                <div className="mt-10 flex flex-col gap-4 sm:flex-row">
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
                </div>
              </motion.div>
            </div>

            <div className="absolute bottom-10 left-6 right-6 lg:left-12 lg:right-12">
              <div className="flex items-center gap-4 md:gap-8">
                {copy.heroPhases.map((phase, index) => (
                  <div key={phase.eyebrow} className="flex items-center gap-3">
                    <span className="h-2 w-2 rounded-full bg-brand-gold" />
                    <span className="hidden text-[10px] uppercase tracking-[0.28em] text-white/35 md:block">
                      0{index + 1} {phase.eyebrow}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
                {copy.focusLink}
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
