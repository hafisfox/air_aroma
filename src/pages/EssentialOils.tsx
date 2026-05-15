import { useLocaleRouting } from "../lib/localeRouting";
import {
  BulletList,
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";

export default function EssentialOils() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        badge: "الزيوت الأساسية",
        title: "خلطات أكثر هدوءاً للمشاريع التي تحتاج حضوراً طبيعياً أو موجهاً للعافية.",
        body:
          "هذا المسار يناسب السبا والفلل والمساكن الراقية والبرامج التي تحتاج طبقة عطرية أخف، حيث يكون الهدف هو الهدوء والاسترخاء والنقاء أكثر من الدراما العطرية الواضحة.",
        useTitle: "متى يكون هذا المسار هو الأنسب؟",
        usePoints: [
          "عندما تكون العافية أو الاسترخاء أو الإيقاع الهادئ جزءاً أساسياً من التجربة.",
          "عندما يحتاج المشروع إلى طابع أقرب إلى الطبيعة دون فقدان وضوح النشر أو الأداء.",
          "عندما يكون الفريق في بداية الرحلة ويريد اختبار اتجاه أهدأ قبل تطوير هوية عطرية أكثر تميزاً.",
        ],
        finalTitle: "هل تحتاج إلى معرفة ما إذا كانت الزيوت الأساسية أو العطر المميز هو المسار الأنسب؟",
        finalBody:
          "يمكننا المساعدة على مقارنة الخيارات بحسب نوع المساحة، وهدوء التجربة المطلوبة، وطريقة التشغيل اليومية.",
        finalPrimary: "استكشف الموزعات",
        finalSecondary: "تواصل معنا",
      }
    : {
        badge: "Essential Oils",
        title: "A quieter blend direction for projects that need a more natural, wellness-led atmosphere.",
        body:
          "This route suits spas, villas, premium residences, and other environments that need a softer scent layer, where the objective is calm, restoration, and clarity rather than a more dramatic fragrance statement.",
        useTitle: "When is this the right direction?",
        usePoints: [
          "When relaxation, wellness, or a slower emotional rhythm is central to the experience.",
          "When the project needs a more nature-led character without losing delivery clarity or performance.",
          "When the team wants to test a gentler scent path before developing a more distinctive signature fragrance.",
        ],
        finalTitle: "Need help deciding whether essential oils or a signature fragrance is the better fit?",
        finalBody:
          "We can compare the options based on the type of space, the level of subtlety the project needs, and the daily operating pattern behind it.",
        finalPrimary: "Explore Diffusers",
        finalSecondary: "Contact Air Aroma",
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
              <div className="media-frame aspect-[4/5] min-h-[24rem]">
                <img
                  src="https://images.unsplash.com/photo-1608528577891-eb0559d18e58?auto=format&fit=crop&w=1800&q=80"
                  alt={isArabic ? "زيوت أساسية من Air Aroma" : "Air Aroma essential oils"}
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
        <div className="section-inner grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          <Reveal>
            <SectionIntro
              eyebrow={isArabic ? "اتجاه الاستخدام" : "Use Direction"}
              title={copy.useTitle}
              body={
                isArabic
                  ? "هذا المسار مناسب للمشروعات التي تحتاج حضوراً أكثر هدوءاً وطابعاً أقرب إلى العافية والطبيعة."
                  : "This path suits environments that need less perfume-like drama and more calm, restorative atmospheric support."
              }
            />
            <div className="mt-8">
              <BulletList items={copy.usePoints} />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-panel h-full p-6 md:p-8">
              <p className="eyebrow">{isArabic ? "ما الذي يجب موازنته؟" : "What Needs Balancing?"}</p>
              <p className="mt-5 text-[1rem] leading-8 text-ink-soft">
                {isArabic
                  ? "القرار لا يتعلق فقط بطبيعة الرائحة، بل أيضاً بمدى وضوحها داخل المساحة، وطريقة تشغيلها، وما إذا كان المشروع يحتاج لغة حسية هادئة أو هوية أكثر حضوراً."
                  : "The choice is not only about the scent profile itself. It also depends on how present the fragrance should feel in the space, how it will be delivered, and whether the project needs a quieter layer or a more assertive identity."}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title={copy.finalTitle}
        body={copy.finalBody}
        primary={{ label: copy.finalPrimary, to: toLocalePath("/diffusers") }}
        secondary={{ label: copy.finalSecondary, to: toLocalePath("/contact") }}
        tone="light"
      />
    </div>
  );
}
