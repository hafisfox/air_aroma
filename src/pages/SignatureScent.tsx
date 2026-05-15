import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";

export default function SignatureScent() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        title: "تصميم العطر المميز",
        intro:
          "العطر المميز يمنح العلامة التجارية طبقة شعورية لا تحتاج إلى شرح طويل. نطوّر اتجاهاً عطرياً يمكن ربطه بالوصول والضيافة والخصوصية والترف داخل المشروع.",
        processTitle: "مراحل تطوير العطر",
        steps: [
          "نبدأ بقراءة شخصية العلامة ونوع المساحة والجمهور المستهدف.",
          "نحوّل هذه المدخلات إلى اتجاهات عطرية أولية يمكن مراجعتها مع الفريق.",
          "بعد اعتماد الاتجاه، نربط العطر بخطة نشر تتناسب مع المساحة والاستخدام اليومي.",
        ],
        cta: "ناقش مشروعك",
      }
    : {
        title: "Signature Scent Design",
        intro:
          "A signature fragrance gives a brand an emotional layer that does not rely on copy alone. We develop a scent direction that can be tied to arrival, privacy, hospitality, and luxury within the physical experience.",
        processTitle: "How the fragrance development process works",
        steps: [
          "We begin with brand character, space type, and audience expectations.",
          "Those inputs become fragrance directions that the project team can review and refine.",
          "Once approved, the scent is paired with the right diffusion plan for the space and the daily operating reality.",
        ],
        cta: "Discuss Your Project",
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
        <div className="aspect-[4/3] overflow-hidden bg-[#111]">
          <img
            src="https://images.unsplash.com/photo-1596433809252-260c2745cf5b?auto=format&fit=crop&q=80"
            alt={isArabic ? "خبير عطور يعمل على تطوير عطر مميز" : "Perfumer developing a signature scent"}
            width="1600"
            height="1200"
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl font-light text-white">{copy.processTitle}</h2>
          <div className="mt-8 space-y-5">
            {copy.steps.map((step) => (
              <div
                key={step}
                className="border border-white/10 bg-white/[0.03] p-6 text-[15px] leading-7 text-white/55"
              >
                {step}
              </div>
            ))}
          </div>
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
