import { useLocaleRouting } from "../lib/localeRouting";
import {
  ActionLink,
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";

export default function SignatureScent() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        badge: "العطر المميز",
        title: "هوية عطرية تمنح العلامة طبقة شعورية لا تحتاج إلى شرح طويل.",
        body:
          "نحوّل شخصية المكان أو العلامة إلى اتجاه عطري يمكن ربطه بالوصول والضيافة والخصوصية والترف، ثم نطوّره بطريقة قابلة للمراجعة والتشغيل.",
        processTitle: "كيف تبدو عملية تطوير العطر؟",
        steps: [
          "نبدأ بقراءة شخصية العلامة ونوع المساحة والجمهور الذي يتحرك داخلها.",
          "نحوّل هذه المدخلات إلى اتجاهات عطرية أولية يمكن للفريق مراجعتها بوضوح.",
          "بعد اعتماد الاتجاه، نربطه بخطة نشر تناسب المساحة وطبيعة التشغيل اليومي.",
        ],
        cta: "ناقش مشروعك",
        finalTitle: "هل حان وقت الانتقال من الفكرة العامة إلى عطر خاص بالمشروع؟",
        finalBody:
          "يمكننا مساعدتك على صياغة الاتجاه الأول أو مراجعة المسارات القائمة قبل تثبيت القرار النهائي.",
        finalPrimary: "تواصل معنا",
        finalSecondary: "خدمات الروائح",
      }
    : {
        badge: "Signature Scent",
        title: "A fragrance identity that gives the brand an emotional layer without relying on copy alone.",
        body:
          "We translate the character of a space or brand into a fragrance direction that can be tied to arrival, hospitality, privacy, and luxury, then develop it in a way the team can review and operate with confidence.",
        processTitle: "How does the development process work?",
        steps: [
          "We begin with the character of the brand, the type of space, and the audience moving through it.",
          "Those inputs become fragrance directions the team can review with clarity.",
          "Once a direction is approved, it is paired with the right diffusion plan for the space and its daily operating reality.",
        ],
        cta: "Discuss Your Project",
        finalTitle: "Ready to move from a broad idea to a fragrance that belongs to the project?",
        finalBody:
          "We can help shape the first direction or review the current options before the team commits to a final scent path.",
        finalPrimary: "Contact Air Aroma",
        finalSecondary: "Scent Services",
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
              <ActionLink to={toLocalePath("/contact")}>{copy.cta}</ActionLink>
            </MountReveal>

            <MountReveal delay={0.12}>
              <div className="media-frame aspect-[4/5] min-h-[24rem]">
                <img
                  src="https://images.unsplash.com/photo-1596433809252-260c2745cf5b?auto=format&fit=crop&w=1800&q=80"
                  alt={
                    isArabic
                      ? "خبير عطور يعمل على تطوير عطر مميز"
                      : "Perfumer developing a signature scent"
                  }
                  width="1800"
                  height="2200"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </div>
            </MountReveal>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <Reveal>
            <SectionIntro
              eyebrow={isArabic ? "العملية" : "The Process"}
              title={copy.processTitle}
              body={
                isArabic
                  ? "العطر المميز يحتاج لغة واضحة بين الشعور المطلوب وطريقة تطويره ومراجعته."
                  : "A signature fragrance needs a clear bridge between the feeling the project wants and the way that feeling is developed and reviewed."
              }
              className="mb-10"
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {copy.steps.map((step, index) => (
              <div key={step}>
                <Reveal delay={index * 0.08}>
                  <article className="surface-panel h-full p-6 md:p-7">
                    <p className="eyebrow">0{index + 1}</p>
                    <p className="mt-5 text-[1rem] leading-8 text-ink-soft">{step}</p>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCta
        title={copy.finalTitle}
        body={copy.finalBody}
        primary={{ label: copy.finalPrimary, to: toLocalePath("/contact") }}
        secondary={{ label: copy.finalSecondary, to: toLocalePath("/scent-marketing") }}
        tone="light"
      />
    </div>
  );
}
