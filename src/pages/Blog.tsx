import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";
import {
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";

export default function Blog() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        badge: "رؤى وملاحظات",
        title: "أفكار عملية تساعد فرق الضيافة والتجزئة على فهم دور الهوية العطرية.",
        body:
          "هذه الصفحة تجمع نقاط دخول واضحة للفرق التي ما زالت تصوغ تصورها الأول حول تسويق الروائح، وكيف يمكن أن يتحول إلى جزء فعلي من تجربة المكان.",
        cards: [
          {
            title: "كيف يُبنى عطر مميز لمشروع ضيافة؟",
            description:
              "ابدأ من أسلوب الوصول والانطباع المطلوب، ثم اربط ذلك بخطة نشر واقعية عبر الردهات والأجنحة والمناطق المشتركة.",
            image:
              "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&w=1600&q=80",
            alt: "مثال على تجربة فندقية فاخرة",
            cta: "تعرف على الخدمة",
            path: "/scent-marketing",
          },
          {
            title: "متى تحتاج المتاجر إلى عطر مميز؟",
            description:
              "عندما تحتاج العلامة إلى أجواء أكثر قابلية للتذكر، يصبح العطر جزءاً من اللغة الحسية للمكان وليس مجرد إضافة جمالية.",
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
            alt: "متجر راقٍ مع تجربة حسية",
            cta: "استكشف العطور",
            path: "/fragrances",
          },
        ],
        finalTitle: "هل تريد الانتقال من الفكرة العامة إلى مسار أوضح؟",
        finalBody:
          "ابدأ من الخدمة أو من مكتبة العطور بحسب المرحلة التي وصل إليها مشروعك، ثم دعنا نساعدك على تضييق القرار.",
        finalPrimary: "استكشف الخدمات",
        finalSecondary: "العطور",
      }
    : {
        badge: "Insights and Notes",
        title: "Practical thinking for hospitality and retail teams exploring fragrance as part of the space.",
        body:
          "This page offers clear starting points for teams that are still shaping the first version of their scent strategy and want to understand how it becomes part of a real environment.",
        cards: [
          {
            title: "How does a signature hotel scent get built?",
            description:
              "Start with arrival style and the emotional outcome the property should leave behind, then connect that to a diffuser plan that works across shared and private guest zones.",
            image:
              "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&w=1600&q=80",
            alt: "Luxury hospitality example for scent strategy",
            cta: "Learn About the Service",
            path: "/scent-marketing",
          },
          {
            title: "When does retail need a signature fragrance?",
            description:
              "As soon as the brand needs a more memorable and repeatable atmosphere, fragrance becomes part of the sensory language instead of a decorative layer.",
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
            alt: "Luxury retail environment for scent strategy",
            cta: "Explore the Fragrances",
            path: "/fragrances",
          },
        ],
        finalTitle: "Want to move from broad inspiration to a clearer next step?",
        finalBody:
          "Start with the service page or the fragrance library depending on where the project currently stands, then let us help narrow the decision.",
        finalPrimary: "Explore Services",
        finalSecondary: "Fragrances",
      };

  return (
    <div>
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="section-inner section-block">
          <MountReveal className="space-y-7">
            <span className="kicker-pill">{copy.badge}</span>
            <h1 className="hero-title max-w-[12ch]">{copy.title}</h1>
            <p className="hero-body">{copy.body}</p>
          </MountReveal>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <Reveal>
            <SectionIntro
              eyebrow={isArabic ? "مقالات مميزة" : "Featured Reading"}
              title={
                isArabic
                  ? "نقطتا دخول واضحتان لفهم دور الروائح داخل التجربة."
                  : "Two clear entry points for understanding how fragrance shapes experience."
              }
              body={
                isArabic
                  ? "كل موضوع يربط بين الفكرة العامة والحالة العملية داخل الفنادق أو المتاجر أو المساحات الراقية."
                  : "Each direction ties the broad idea back to a practical environment, whether the project is hospitality, retail, or another premium space."
              }
              className="mb-10"
            />
          </Reveal>

          <div className="grid gap-6 xl:grid-cols-[1.06fr_0.94fr]">
            {copy.cards.map((card, index) => (
              <div key={card.title}>
                <Reveal delay={index * 0.08}>
                  <article className="surface-panel flex h-full flex-col overflow-hidden">
                    <div className={index === 0 ? "aspect-[5/4]" : "aspect-[4/4.3]"}>
                      <img
                        src={card.image}
                        alt={card.alt}
                        width="1600"
                        height="1400"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
                      <h2 className="font-display text-[2rem] leading-[1.02] text-ink">
                        {card.title}
                      </h2>
                      <p className="text-[1rem] leading-8 text-ink-soft">
                        {card.description}
                      </p>
                      <Link
                        to={toLocalePath(card.path)}
                        className="button-subtle mt-auto self-start"
                      >
                        {card.cta}
                      </Link>
                    </div>
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
        primary={{ label: copy.finalPrimary, to: toLocalePath("/scent-marketing") }}
        secondary={{ label: copy.finalSecondary, to: toLocalePath("/fragrances") }}
        tone="light"
      />
    </div>
  );
}
