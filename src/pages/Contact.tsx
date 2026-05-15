import { useLocaleRouting } from "../lib/localeRouting";
import {
  ActionAnchor,
  ActionLink,
  BulletList,
  FinalCta,
  MountReveal,
  Reveal,
} from "../components/brand/BrandPrimitives";

export default function Contact() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        badge: "تواصل معنا",
        title: "شاركنا نوع المشروع والانطباع الذي تريد أن يتركه المكان.",
        body:
          "سواء كنت تبحث عن برنامج تسويق روائح أو عطر مميز أو توصية بشأن نظام النشر، يمكننا مساعدتك على تحديد الخطوة التالية بطريقة أوضح وأهدأ.",
        intakeTitle: "ما الذي يفيد مشاركته في البداية؟",
        intakeItems: [
          "نوع المساحة: فندق، متجر، مسكن، سبا، أو مشروع متعدد الاستخدامات.",
          "الحجم التقريبي للموقع أو عدد المناطق التي تحتاج إلى تغطية عطرية.",
          "المزاج الذي تريد خلقه: فخم، هادئ، منعش، دافئ، أو موجّه للعافية.",
          "الجدول الزمني المتوقع للافتتاح أو الاختبار أو التوريد.",
        ],
        emailTitle: "المدخل المباشر للمشروع",
        emailText:
          "يمكنك إرسال موجز مختصر إلى info@air-aroma.com وسنستخدمه كنقطة بداية لمحادثة أكثر دقة حول العطر والنشر ومتطلبات التشغيل.",
        primaryCta: "راسل Air Aroma",
        secondaryCta: "استكشف العطور",
        finalTitle: "هل تريد أن نساعدك على صياغة الموجز قبل الإرسال؟",
        finalBody:
          "ابدأ من العطور أو الخدمات إذا كنت لا تزال في مرحلة تحديد المسار، ثم عد إلينا عندما تكون جاهزاً للنقاش التفصيلي.",
        finalPrimary: "استكشف الخدمات",
        finalSecondary: "عرض العطور",
      }
    : {
        badge: "Contact Air Aroma",
        title: "Tell us the kind of project you are planning and the feeling the space should leave behind.",
        body:
          "Whether the need is scent marketing, a signature fragrance, or a diffuser recommendation, we can help frame the next step with more clarity and less guesswork.",
        intakeTitle: "What is useful to share first?",
        intakeItems: [
          "Space type: hotel, retail, residence, spa, or mixed-use destination.",
          "Approximate site scale or the number of areas that need fragrance coverage.",
          "The atmosphere the project should create: luxurious, calming, bright, warm, or wellness-led.",
          "Expected opening, testing, or supply timeline.",
        ],
        emailTitle: "Direct project intake",
        emailText:
          "You can email a short brief to info@air-aroma.com and we will use it to begin a clearer conversation around fragrance direction, diffusion needs, and operating requirements.",
        primaryCta: "Email Air Aroma",
        secondaryCta: "Explore Fragrances",
        finalTitle: "Need help shaping the brief before you send it?",
        finalBody:
          "Start with the services or fragrance collection if you are still deciding on direction, then come back when you are ready for a more detailed conversation.",
        finalPrimary: "Explore Services",
        finalSecondary: "View Fragrances",
      };

  return (
    <div>
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="section-inner section-block">
          <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <MountReveal className="space-y-7">
              <span className="kicker-pill">{copy.badge}</span>
              <h1 className="hero-title max-w-[12ch]">{copy.title}</h1>
              <p className="hero-body">{copy.body}</p>
            </MountReveal>

            <MountReveal delay={0.12}>
              <div className="surface-panel p-6 md:p-8">
                <p className="eyebrow">{copy.intakeTitle}</p>
                <div className="mt-6">
                  <BulletList items={copy.intakeItems} />
                </div>
              </div>
            </MountReveal>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner grid gap-10 xl:grid-cols-[0.98fr_1.02fr] xl:items-center">
          <Reveal>
            <div className="media-frame aspect-[4/5] min-h-[24rem]">
              <img
                src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80"
                alt={
                  isArabic
                    ? "مساحة ضيافة راقية تعبّر عن مشروع عطري"
                    : "Premium hospitality space representing a scent project brief"
                }
                width="1800"
                height="2200"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-panel h-full p-6 md:p-8">
              <p className="eyebrow">{copy.emailTitle}</p>
              <h2 className="mt-4 font-display text-[2.4rem] leading-[1.02] text-ink">
                info@air-aroma.com
              </h2>
              <p className="mt-5 text-[1rem] leading-8 text-ink-soft">
                {copy.emailText}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionAnchor href="mailto:info@air-aroma.com">
                  {copy.primaryCta}
                </ActionAnchor>
                <ActionLink to={toLocalePath("/fragrances")} variant="secondary">
                  {copy.secondaryCta}
                </ActionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title={copy.finalTitle}
        body={copy.finalBody}
        primary={{ label: copy.finalPrimary, to: toLocalePath("/scent-marketing") }}
        secondary={{ label: copy.finalSecondary, to: toLocalePath("/fragrances") }}
        tone="light"
      />
    </div>
  );
}
