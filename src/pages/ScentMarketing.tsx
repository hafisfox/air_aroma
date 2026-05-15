import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";

const serviceCards = {
  en: [
    {
      title: "Luxury Hospitality",
      desc: "Create a recognizable arrival and guest-room experience for hotels, resorts, spas, and branded residences.",
      img: "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&q=80",
      alt: "Luxury hospitality scent marketing by Air Aroma",
    },
    {
      title: "Premium Retail",
      desc: "Use scent to support store identity, dwell time, and a more premium in-store atmosphere across flagship or multi-site programs.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
      alt: "Premium retail scent marketing by Air Aroma",
    },
    {
      title: "Branded Developments",
      desc: "Support showrooms, private clubs, wellness concepts, and lifestyle destinations with a scent direction that feels considered from day one.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      alt: "Branded development scent design by Air Aroma",
    },
  ],
  ar: [
    {
      title: "الضيافة الفاخرة",
      desc: "اصنع تجربة وصول وإقامة يمكن تمييزها للفنادق والمنتجعات والسبا والمساكن ذات العلامات التجارية.",
      img: "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&q=80",
      alt: "تسويق الروائح للضيافة الفاخرة من Air Aroma",
    },
    {
      title: "التجزئة الراقية",
      desc: "استخدم الروائح لدعم هوية المتجر وزمن البقاء وخلق أجواء أكثر فخامة في الفروع الرئيسية أو متعددة المواقع.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
      alt: "تسويق الروائح للتجزئة الراقية من Air Aroma",
    },
    {
      title: "المشروعات ذات العلامات",
      desc: "ادعم صالات العرض والنوادي الخاصة ومفاهيم العافية والوجهات السكنية باتجاه عطري مدروس منذ البداية.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
      alt: "تصميم عطري للمشروعات ذات العلامات من Air Aroma",
    },
  ],
};

const faqItems = {
  en: [
    {
      question: "How is a scent marketing brief structured?",
      answer:
        "A useful brief usually includes brand positioning, guest or shopper profile, site type, diffusion zone requirements, and the emotional outcome you want the space to trigger.",
    },
    {
      question: "When should a project team decide on fragrance and diffuser hardware?",
      answer:
        "The best time is early in design development so fragrance direction, air handling constraints, and diffuser placement can be aligned before opening or handover.",
    },
  ],
  ar: [
    {
      question: "كيف تُبنى وثيقة مشروع تسويق الروائح؟",
      answer:
        "تشمل الوثيقة المفيدة عادة تموضع العلامة التجارية وملف الضيف أو المتسوق ونوع الموقع ومتطلبات مناطق النشر والنتيجة الشعورية المطلوبة من المساحة.",
    },
    {
      question: "متى يجب تحديد العطر ونظام النشر؟",
      answer:
        "الوقت الأنسب هو مبكراً أثناء تطوير التصميم حتى يتوافق الاتجاه العطري وقيود أنظمة الهواء ومواقع الأجهزة قبل الافتتاح أو التسليم.",
    },
  ],
};

export default function ScentMarketing() {
  const { isArabic, toLocalePath } = useLocaleRouting();
  const locale = isArabic ? "ar" : "en";

  const copy = isArabic
    ? {
        eyebrow: "استراتيجية الروائح",
        title: "خدمات تسويق الروائح للمشاريع الراقية في السعودية والخليج",
        intro:
          "نطوّر برامج روائح مخصصة للضيافة الفاخرة والتجزئة والعافية والوجهات السكنية. الهدف ليس مجرد تعطير المكان، بل بناء ذاكرة حسية متناسقة مع العلامة وتجربة الضيف.",
        processLabel: "كيف نعمل",
        processTitle: "من الهوية إلى الأداء اليومي",
        processSteps: [
          "نحدد نوع المساحة والجمهور المستهدف والهدف التجاري أو التشغيلي.",
          "نقترح اتجاهات عطرية أو عطر مميز يتناسب مع شخصية المشروع.",
          "نطابق العطر مع نظام نشر يناسب حجم المساحة ومتطلبات التشغيل.",
        ],
        ctaTitle: "هل تحتاج إلى عطر مميز أو خطة نشر واضحة؟",
        ctaText:
          "يمكنك البدء بخدمة تسويق الروائح أو الانتقال مباشرة إلى تصميم العطر المميز أو أنظمة النشر بحسب مرحلة المشروع.",
        ctaPrimary: "ناقش مشروعك",
        ctaSecondary: "تصميم عطر مميز",
        faqLabel: "أسئلة شائعة",
      }
    : {
        eyebrow: "Scent Strategy",
        title: "Scent marketing services for premium Saudi and GCC spaces",
        intro:
          "We build tailored scent marketing programs for luxury hospitality, retail, wellness, and residential destinations. The goal is not just to fragrance a space, but to create a memory that fits the brand and the guest journey.",
        processLabel: "How We Work",
        processTitle: "From brand direction to daily performance",
        processSteps: [
          "We define the space type, audience profile, and commercial or operational objective.",
          "We recommend fragrance directions or a signature scent concept that fits the project identity.",
          "We match the fragrance to a diffuser system that suits scale, airflow, and operating needs.",
        ],
        ctaTitle: "Need a clearer scent brief or diffuser direction?",
        ctaText:
          "You can begin with a scent marketing consultation, move into signature scent development, or review diffuser systems based on your project stage.",
        ctaPrimary: "Discuss Your Project",
        ctaSecondary: "Explore Signature Scent",
        faqLabel: "FAQ",
      };

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <section
        id="scent-marketing-hero"
        aria-label={isArabic ? "مقدمة تسويق الروائح" : "Scent marketing introduction"}
        className="relative overflow-hidden border-b border-white/10"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 via-transparent to-transparent" />
        <div className="mx-auto max-w-6xl px-6 py-32 lg:px-12">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 text-xs font-medium uppercase tracking-[0.3em] text-brand-gold"
          >
            {copy.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="max-w-4xl text-4xl font-light leading-tight sm:text-6xl"
          >
            {copy.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-8 max-w-3xl text-lg leading-8 text-white/60"
          >
            {copy.intro}
          </motion.p>
        </div>
      </section>

      <section
        id="scent-marketing-services"
        aria-label={isArabic ? "مجالات خدمة تسويق الروائح" : "Scent marketing service areas"}
        className="mx-auto max-w-7xl border-b border-white/10 px-6 py-24 lg:px-12"
      >
        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {serviceCards[locale].map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="group"
            >
              <div className="mb-6 aspect-square overflow-hidden">
                <img
                  src={item.img}
                  alt={item.alt}
                  width="1200"
                  height="1200"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <h2 className="mb-4 text-xl font-light">{item.title}</h2>
              <p className="text-[15px] leading-7 text-white/50">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[0.9fr,1.1fr] lg:px-12">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gold">
            {copy.processLabel}
          </p>
          <h2 className="text-3xl font-light text-white sm:text-4xl">
            {copy.processTitle}
          </h2>
        </div>
        <div className="space-y-5">
          {copy.processSteps.map((step) => (
            <div
              key={step}
              className="border border-white/10 bg-white/[0.03] p-6 text-[15px] leading-7 text-white/60"
            >
              {step}
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#050505]">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-brand-gold">
            {copy.faqLabel}
          </p>
          <div className="grid gap-8 md:grid-cols-2">
            {faqItems[locale].map((item) => (
              <article key={item.question} className="border border-white/10 p-8">
                <h3 className="text-2xl font-light text-white">{item.question}</h3>
                <p className="mt-5 text-[15px] leading-7 text-white/55">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="scent-marketing-cta"
        aria-label={isArabic ? "دعوة للتواصل" : "Contact call to action"}
        className="mx-auto max-w-5xl px-6 py-24 text-center lg:px-12"
      >
        <h2 className="text-3xl font-light text-white sm:text-4xl">
          {copy.ctaTitle}
        </h2>
        <p className="mt-6 text-[15px] leading-8 text-white/60">
          {copy.ctaText}
        </p>
        <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            to={toLocalePath("/contact")}
            className="inline-flex items-center justify-center bg-brand-gold px-8 py-4 text-sm uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-white"
          >
            {copy.ctaPrimary}
          </Link>
          <Link
            to={toLocalePath("/signature-scent")}
            className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
          >
            {copy.ctaSecondary}
          </Link>
        </div>
      </section>
    </div>
  );
}
