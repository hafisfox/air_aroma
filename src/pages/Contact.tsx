import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";

export default function Contact() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        title: "تواصل مع Air Aroma",
        subtitle:
          "أخبرنا عن نوع المشروع والمساحة والنتيجة العطرية التي تريدها. سواء كنت تبحث عن برنامج تسويق روائح أو عطر مميز أو نظام نشر، يمكننا مساعدتك في تحديد الخطوة التالية.",
        intakeTitle: "ما الذي يفيد مشاركته في البداية؟",
        intakeItems: [
          "نوع المساحة: فندق، متجر، سكن، سبا، أو مشروع متعدد الاستخدامات.",
          "حجم الموقع أو عدد المناطق التي تحتاج إلى نشر عطري.",
          "الانطباع المطلوب: فاخر، هادئ، منعش، دافئ، أو موجّه للعافية.",
          "الجدول الزمني المتوقع للافتتاح أو التوريد أو الاختبار.",
        ],
        emailTitle: "التواصل المباشر",
        emailText:
          "يمكنك إرسال ملخص المشروع إلى info@air-aroma.com وسنستخدمه كنقطة بداية لمحادثة أوضح حول العطر والنشر والمتطلبات التشغيلية.",
        primaryCta: "راسلنا عبر البريد",
        secondaryCta: "استكشف العطور",
      }
    : {
        title: "Contact Air Aroma",
        subtitle:
          "Tell us about the project type, space profile, and the scent experience you want to create. Whether you need a scent marketing program, a signature fragrance, or a diffuser recommendation, we can help frame the next step.",
        intakeTitle: "What is useful to share first?",
        intakeItems: [
          "Space type: hotel, retail, residence, spa, or mixed-use destination.",
          "Approximate site scale or the number of areas that need fragrance coverage.",
          "The mood you want to create: luxurious, calming, fresh, warm, or wellness-led.",
          "Your expected opening, supply, or testing timeline.",
        ],
        emailTitle: "Direct project intake",
        emailText:
          "You can email a short project brief to info@air-aroma.com and we will use it to start a clearer conversation around fragrance direction, diffusion needs, and operating requirements.",
        primaryCta: "Email Air Aroma",
        secondaryCta: "Explore Fragrances",
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

      <section className="mx-auto grid max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.1fr,0.9fr] lg:px-12">
        <div>
          <h2 className="text-3xl font-light text-white">{copy.intakeTitle}</h2>
          <ul className="mt-8 space-y-4 text-[15px] leading-8 text-white/55">
            {copy.intakeItems.map((item) => (
              <li key={item} className="flex gap-4">
                <span className="mt-3 h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <aside className="border border-white/10 bg-[#111] p-10">
          <h3 className="text-2xl font-light text-white">{copy.emailTitle}</h3>
          <p className="mt-6 text-[15px] leading-8 text-white/55">
            {copy.emailText}
          </p>
          <div className="mt-10 flex flex-col gap-4">
            <a
              href="mailto:info@air-aroma.com"
              className="inline-flex items-center justify-center bg-brand-gold px-8 py-4 text-sm uppercase tracking-[0.2em] text-brand-black transition-colors hover:bg-white"
            >
              {copy.primaryCta}
            </a>
            <Link
              to={toLocalePath("/fragrances")}
              className="inline-flex items-center justify-center border border-white/20 px-8 py-4 text-sm uppercase tracking-[0.2em] text-white transition-colors hover:border-white/70 hover:bg-white/10"
            >
              {copy.secondaryCta}
            </Link>
          </div>
        </aside>
      </section>
    </div>
  );
}
