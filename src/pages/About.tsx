import { useLocaleRouting } from "../lib/localeRouting";
import {
  BulletList,
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";

export default function About() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        badge: "عن Air Aroma",
        title: "الرائحة بالنسبة لنا طبقة تصميم حقيقية، لا إضافة زخرفية.",
        body:
          "لهذا يربط عملنا بين اتجاه العطر ذاته وطريقة انتشاره داخل المكان وقدرته على الحفاظ على الجودة والثبات والخصوصية التي يحتاجها المشروع الرفيع.",
        storyTitle: "نفكر في العطر بوصفه جزءاً من التجربة الكاملة.",
        storyBody:
          "تعمل Air Aroma عند نقطة التقاء الهوية العطرية بالواقع التشغيلي. نهتم بالانطباع الذي يتركه العطر، لكننا نهتم أيضاً بكيفية تحوله إلى تجربة يومية يمكن الوثوق بها داخل الفنادق والمتاجر والمساكن الراقية.",
        principles: [
          "اتجاه عطري يبدأ من شخصية المشروع لا من قالب جاهز.",
          "مطابقة بين الإحساس المطلوب وطريقة النشر والتشغيل الواقعي.",
          "اهتمام بالتفاصيل الصغيرة التي تجعل التجربة متسقة من الوصول حتى الاستخدام المتكرر.",
        ],
        featureTitle: "ما الذي يميز هذا النهج؟",
        features: [
          {
            title: "تفكير استراتيجي",
            description:
              "نربط العطر بنوع المساحة، والجمهور، والهدف التجاري أو الشعوري الذي يجب أن تدعمه التجربة.",
          },
          {
            title: "مكتبة مرنة",
            description:
              "يمكن البدء من مجموعة قائمة أو استخدام ذلك كنقطة انطلاق لتطوير هوية عطرية خاصة.",
          },
          {
            title: "حلول نشر مناسبة",
            description:
              "نساعد في اختيار النظام الذي يناسب الحجم، والهدوء المطلوب، ومتطلبات التشغيل اليومية.",
          },
        ],
        finalTitle: "هل تريد معرفة كيف يمكن أن يبدو هذا النهج داخل مشروعك؟",
        finalBody:
          "يمكننا مساعدتك على ترجمة شخصية العلامة أو المكان إلى اتجاه عطري وخطة نشر واضحة.",
        finalPrimary: "تواصل معنا",
        finalSecondary: "استكشف الخدمات",
      }
    : {
        badge: "About Air Aroma",
        title: "We treat scent as a genuine design layer, not a decorative extra.",
        body:
          "That is why the work always connects the fragrance direction itself with the way it moves through a space and the quality, discretion, and consistency the project expects over time.",
        storyTitle: "The fragrance has to belong to the full experience, not sit beside it.",
        storyBody:
          "Air Aroma works at the intersection of scent identity and operational reality. We care about the emotional impression a fragrance leaves, but also about how it becomes a daily experience a hospitality, retail, or residential team can rely on.",
        principles: [
          "Fragrance direction begins with the character of the project, not with a template.",
          "The emotional brief is matched to a delivery plan and an operating reality.",
          "Small experiential details matter because consistency is what makes a premium environment believable.",
        ],
        featureTitle: "What makes that approach different?",
        features: [
          {
            title: "Strategic Fragrance Thinking",
            description:
              "The scent is connected to the space type, the audience, and the commercial or emotional outcome it should support.",
          },
          {
            title: "Flexible Library",
            description:
              "Teams can begin with the existing collection or use it as the first step toward a more bespoke fragrance identity.",
          },
          {
            title: "Right-Sized Diffusion",
            description:
              "We help match the hardware to the scale of the site, the required subtlety, and the demands of daily operation.",
          },
        ],
        finalTitle: "Want to see how this approach could translate into your project?",
        finalBody:
          "We can help turn the character of a brand or destination into a fragrance direction and diffusion plan with more clarity.",
        finalPrimary: "Contact Air Aroma",
        finalSecondary: "Explore Services",
      };

  return (
    <div>
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="section-inner section-block">
          <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-center">
            <MountReveal className="space-y-7">
              <span className="kicker-pill">{copy.badge}</span>
              <h1 className="hero-title max-w-[12ch]">{copy.title}</h1>
              <p className="hero-body">{copy.body}</p>
            </MountReveal>

            <MountReveal delay={0.12}>
              <div className="surface-panel p-6 md:p-8">
                <h2 className="font-display text-[2.3rem] leading-[1.02] text-ink">
                  {copy.storyTitle}
                </h2>
                <p className="mt-5 text-[1rem] leading-8 text-ink-soft">
                  {copy.storyBody}
                </p>
              </div>
            </MountReveal>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          <Reveal>
            <div className="media-frame aspect-[4/5] min-h-[24rem]">
              <img
                src="https://images.unsplash.com/photo-1541888048496-e2a1e6417721?auto=format&fit=crop&w=1800&q=80"
                alt={
                  isArabic
                    ? "مساحة معمارية فاخرة تعبّر عن التصميم الحسي"
                    : "Luxury architectural interior representing sensory design"
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
            <SectionIntro
              eyebrow={copy.featureTitle}
              title={copy.storyTitle}
              body={copy.storyBody}
            />
            <div className="mt-8">
              <BulletList items={copy.principles} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <Reveal>
            <SectionIntro
              eyebrow={copy.featureTitle}
              title={
                isArabic
                  ? "ثلاث ركائز تجعل الموقع والعمل يبدوان أكثر مصداقية."
                  : "Three anchors that make the work feel more credible."
              }
              body={
                isArabic
                  ? "المشروع الرفيع لا يحتاج فقط إلى جماليات حسية، بل إلى منهج متماسك خلفها."
                  : "A premium project does not only need atmosphere. It needs a coherent method behind the atmosphere."
              }
              className="mb-10"
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-3">
            {copy.features.map((feature, index) => (
              <div key={feature.title}>
                <Reveal delay={index * 0.08}>
                  <article className="surface-panel h-full p-6 md:p-7">
                    <h2 className="font-display text-[2rem] leading-[1.02] text-ink">
                      {feature.title}
                    </h2>
                    <p className="mt-5 text-[1rem] leading-8 text-ink-soft">
                      {feature.description}
                    </p>
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
