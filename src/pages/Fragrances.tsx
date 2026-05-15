import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";
import {
  ActionLink,
  BulletList,
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";
import {
  fragrances,
  getProductCharacteristics,
  getProductDetailBasePath,
  getProductName,
  getProductNotes,
  getProductStory,
} from "../data/products";

export default function Fragrances() {
  const { isArabic, locale, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        badge: "مكتبة العطور",
        title: "عطور مميزة تمنح المشروع نقطة شعورية أوضح قبل تطوير الرائحة الخاصة به.",
        body:
          "تجمع المجموعة بين الحمضيات والأخشاب والراتنجات والمسارات الهادئة المرتبطة بالعافية، لتساعد فرق المشاريع على تسمية المزاج المطلوب قبل الانتقال إلى موجز عطري أكثر تخصيصاً.",
        guideTitle: "كيف يستخدمها فريق المشروع؟",
        guidePoints: [
          "لمقارنة مزاجات مختلفة قبل تثبيت اتجاه عطري واحد.",
          "لاكتشاف ما إذا كان المشروع يحتاج وضوحاً مشرقاً أو عمقاً أدفأ أو حضوراً أكثر هدوءاً.",
          "لاستخدامها كنقطة بداية قبل تطوير هوية عطرية خاصة بالعلامة أو بالمكان.",
        ],
        notesLabel: "النفحات",
        exploreLabel: "عرض العطر",
        finalTitle: "هل تحتاج إلى مساعدة في تضييق الاتجاه الأنسب؟",
        finalBody:
          "يمكننا مساعدتك على التمييز بين المسارات الخشبية والحمضية والراتنجية والهادئة بحسب نوع المساحة وشخصية المشروع.",
        finalPrimary: "تحدث مع Air Aroma",
        finalSecondary: "ابدأ مشروعك العطري",
      }
    : {
        badge: "Fragrance Library",
        title: "Signature scents that give a project a clearer emotional starting point before custom development begins.",
        body:
          "The collection moves across citrus, woods, resins, and softer wellness-led profiles, helping project teams name the atmosphere they want before moving into a more tailored scent brief.",
        guideTitle: "How do teams use the collection?",
        guidePoints: [
          "To compare different moods before committing to one fragrance direction.",
          "To understand whether the space needs brightness, warmth, calm, or deeper atmospheric weight.",
          "To use an existing blend as the first step toward a more bespoke scent identity.",
        ],
        notesLabel: "Notes",
        exploreLabel: "View Fragrance",
        finalTitle: "Need help narrowing the right fragrance direction?",
        finalBody:
          "We can help you distinguish between woody, citrus, resinous, and quieter wellness-led profiles based on the kind of experience the space should create.",
        finalPrimary: "Talk to Air Aroma",
        finalSecondary: "Start Your Scent Project",
      };

  const featuredFragrance = fragrances[0];
  const remainingFragrances = fragrances.slice(1);

  return (
    <div>
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="section-inner section-block">
          <div className="grid gap-10 xl:grid-cols-[1.06fr_0.94fr] xl:items-center">
            <MountReveal className="space-y-7">
              <div className="kicker-row">
                <span className="kicker-pill">{copy.badge}</span>
                <span className="chip">
                  {fragrances.length} {isArabic ? "عطور مميزة" : "signature scents"}
                </span>
              </div>
              <h1 className="hero-title max-w-[13ch]">{copy.title}</h1>
              <p className="hero-body">{copy.body}</p>
            </MountReveal>

            <MountReveal delay={0.12}>
              <div className="surface-panel p-6 md:p-8">
                <p className="eyebrow">{copy.guideTitle}</p>
                <div className="mt-6">
                  <BulletList items={copy.guidePoints} />
                </div>
              </div>
            </MountReveal>
          </div>
        </div>
      </section>

      {featuredFragrance ? (
        <section className="section-block">
          <div className="section-inner">
            <Reveal>
              <article className="surface-panel grid overflow-hidden xl:grid-cols-[0.88fr_1.12fr]">
                <div className="aspect-[4/5] xl:aspect-auto">
                  <img
                    src={featuredFragrance.images[0].file}
                    alt={getProductName(featuredFragrance, locale)}
                    width="1400"
                    height="1700"
                    fetchPriority="high"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-6 p-6 md:p-8 xl:p-10">
                  <span className="chip self-start">
                    {getProductCharacteristics(featuredFragrance, locale)[0]}
                  </span>
                  <div>
                    <h2 className="font-display text-[clamp(2.3rem,4vw,4.3rem)] leading-[0.98] text-ink">
                      {getProductName(featuredFragrance, locale)}
                    </h2>
                    <p className="mt-5 max-w-[34rem] text-[1rem] leading-8 text-ink-soft">
                      {getProductStory(featuredFragrance, locale)}
                    </p>
                  </div>
                  <div>
                    <p className="eyebrow">{copy.notesLabel}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {getProductNotes(featuredFragrance, locale).slice(0, 6).map((note) => (
                        <span key={note} className="chip">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ActionLink
                    to={toLocalePath(getProductDetailBasePath(featuredFragrance))}
                    className="self-start"
                  >
                    {copy.exploreLabel}
                  </ActionLink>
                </div>
              </article>
            </Reveal>
          </div>
        </section>
      ) : null}

      <section className="section-block">
        <div className="section-inner">
          <Reveal>
            <SectionIntro
              eyebrow={isArabic ? "العطور" : "The Collection"}
              title={
                isArabic
                  ? "اتجاهات عطرية يمكن مراجعتها بسرعة ثم تطويرها بعمق."
                  : "Fragrance directions you can review quickly, then develop with precision."
              }
              body={
                isArabic
                  ? "كل بطاقة تمنح الفريق مدخلاً عملياً إلى القصة والنفحات والطابع العام للعطر."
                  : "Each card gives the team a practical way into the scent story, note profile, and overall character."
              }
              className="mb-10"
            />
          </Reveal>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {remainingFragrances.map((fragrance, index) => {
              const name = getProductName(fragrance, locale);
              const story = getProductStory(fragrance, locale);
              const notes = getProductNotes(fragrance, locale);
              const characteristics = getProductCharacteristics(fragrance, locale);

              return (
                <div key={fragrance.id}>
                  <Reveal delay={index * 0.04}>
                    <article className="surface-panel flex h-full flex-col overflow-hidden">
                      <Link
                        to={toLocalePath(getProductDetailBasePath(fragrance))}
                        className="block aspect-[4/5] overflow-hidden"
                      >
                        <img
                          src={fragrance.images[0].file}
                          alt={name}
                          width="1200"
                          height="1500"
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
                        />
                      </Link>

                      <div className="flex flex-1 flex-col gap-5 p-6">
                        <div className="flex flex-wrap gap-2">
                          {characteristics.slice(0, 3).map((item) => (
                            <span key={item} className="chip">
                              {item}
                            </span>
                          ))}
                        </div>

                        <div>
                          <h2 className="font-display text-[2rem] leading-[1.02] text-ink">
                            {name}
                          </h2>
                          <p className="mt-4 text-[1rem] leading-8 text-ink-soft">
                            {story}
                          </p>
                        </div>

                        <div className="mt-auto border-t border-black/6 pt-5">
                          <p className="eyebrow">{copy.notesLabel}</p>
                          <p className="mt-3 text-[0.96rem] leading-7 text-muted">
                            {notes.slice(0, 5).join(" • ")}
                          </p>
                        </div>

                        <Link
                          to={toLocalePath(getProductDetailBasePath(fragrance))}
                          className="button-subtle self-start"
                        >
                          {copy.exploreLabel}
                        </Link>
                      </div>
                    </article>
                  </Reveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <FinalCta
        title={copy.finalTitle}
        body={copy.finalBody}
        primary={{ label: copy.finalPrimary, to: toLocalePath("/contact") }}
        secondary={{ label: copy.finalSecondary, to: toLocalePath("/contact") }}
        tone="light"
      />
    </div>
  );
}
