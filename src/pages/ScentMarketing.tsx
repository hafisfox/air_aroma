import { useLocaleRouting } from "../lib/localeRouting";
import {
  ActionLink,
  FaqAccordion,
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";

const serviceCards = {
  en: [
    {
      title: "Luxury Hospitality",
      desc: "Arrival, suite, spa, and guest-zone scent programs that shape memory while respecting the daily discipline of hospitality operations.",
      img: "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&w=1600&q=80",
      alt: "Luxury hospitality scent marketing by Air Aroma",
    },
    {
      title: "Premium Retail",
      desc: "A clearer sensory layer for brands that want the in-store atmosphere to feel more recognizable, more memorable, and more consistent.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      alt: "Premium retail scent marketing by Air Aroma",
    },
    {
      title: "Branded Developments",
      desc: "Support for private clubs, residential destinations, wellness concepts, and mixed-use projects that need a more considered emotional environment.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      alt: "Branded development scent strategy by Air Aroma",
    },
  ],
  ar: [
    {
      title: "الضيافة الفاخرة",
      desc: "برامج وصول وأجنحة وسبا ومناطق ضيافة تشكل الذاكرة مع احترام متطلبات التشغيل اليومية داخل الفنادق والمنتجعات.",
      img: "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&w=1600&q=80",
      alt: "تسويق الروائح للضيافة الفاخرة من Air Aroma",
    },
    {
      title: "التجزئة الراقية",
      desc: "طبقة حسية أوضح للعلامات التي تريد أن تبدو أجواؤها أكثر تميزاً وقابلية للتذكر واتساقاً عبر الفروع.",
      img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
      alt: "تسويق الروائح للتجزئة الراقية من Air Aroma",
    },
    {
      title: "المشروعات ذات العلامات",
      desc: "دعم للنوادي الخاصة والوجهات السكنية ومفاهيم العافية والمشروعات متعددة الاستخدامات التي تحتاج بيئة أكثر حساسية واتزاناً.",
      img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80",
      alt: "استراتيجية عطرية للمشروعات ذات العلامات",
    },
  ],
};

const faqItems = {
  en: [
    {
      question: "How is a scent marketing brief usually structured?",
      answer:
        "A strong brief covers the brand character, audience profile, site type, zones that need coverage, and the emotional or commercial outcome the project should support.",
    },
    {
      question: "When should the fragrance and diffuser strategy be decided?",
      answer:
        "Ideally during design development, so the fragrance direction, air-handling constraints, and hardware planning can be aligned before launch or handover.",
    },
  ],
  ar: [
    {
      question: "كيف تُبنى وثيقة مشروع تسويق الروائح عادة؟",
      answer:
        "تغطي الوثيقة الجيدة شخصية العلامة التجارية وملف الجمهور ونوع الموقع والمناطق التي تحتاج إلى تغطية والنتيجة الشعورية أو التجارية التي يجب أن يدعمها المشروع.",
    },
    {
      question: "متى يجب تحديد العطر وخطة النشر؟",
      answer:
        "يفضل ذلك أثناء تطوير التصميم، حتى يمكن تنسيق الاتجاه العطري وقيود الهواء والأجهزة قبل الافتتاح أو التسليم.",
    },
  ],
};

export default function ScentMarketing() {
  const { isArabic, locale, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        badge: "استراتيجية الروائح",
        title: "خدمات تسويق الروائح للمساحات والعلامات الفاخرة حول العالم.",
        body:
          "لا يقتصر الهدف على تعطير المكان. البرنامج الجيد يخلق ذاكرة حسية متماسكة مع العلامة التجارية، ويترجمها إلى تجربة وصول وإقامة وتسوق يمكن الاعتماد عليها كل يوم.",
        processEyebrow: "كيف نعمل",
        processTitle: "من فكرة العلامة إلى خطة تشغيل قابلة للتنفيذ.",
        processBody:
          "العمل يبدأ من الإحساس المطلوب، لكنه لا يكتمل إلا عندما يصبح قابلاً للتنفيذ داخل الموقع نفسه.",
        processSteps: [
          "نحدد نوع المساحة والجمهور المستهدف والهدف العاطفي أو التجاري للتجربة.",
          "نقترح اتجاهات عطرية أو مسار عطر مميز يتناسب مع شخصية المشروع.",
          "نطابق ذلك مع نظام نشر يناسب الحجم، وتوزيع المناطق، ومتطلبات التشغيل.",
        ],
        faqEyebrow: "أسئلة شائعة",
        faqTitle: "ما الذي تحتاج الفرق إلى معرفته قبل البدء؟",
        faqBody:
          "هذه الأسئلة تساعد على توضيح ما إذا كان المشروع يحتاج برنامج روائح كامل أو تطوير عطر مميز أو مراجعة تقنية للنشر.",
        finalTitle: "هل تحتاج إلى صياغة موجز عطري أوضح؟",
        finalBody:
          "يمكننا مساعدتك على تحديد ما إذا كانت الخطوة التالية هي تسويق الروائح أو العطر المميز أو نظام النشر الأنسب.",
        finalPrimary: "ناقش مشروعك",
        finalSecondary: "العطر المميز",
      }
    : {
        badge: "Scent Strategy",
        title: "Scent marketing services for premium spaces and global brands.",
        body:
          "The goal is not simply to fragrance a space. The strongest program builds a sensory memory that aligns with the brand, then translates it into an arrival, guest, or retail experience that holds up every day.",
        processEyebrow: "How We Work",
        processTitle: "From brand atmosphere to an operating plan the site can actually sustain.",
        processBody:
          "The work starts with the feeling the space should create, but it only succeeds when that feeling becomes operationally credible.",
        processSteps: [
          "We define the project type, the audience, and the emotional or commercial objective the experience should support.",
          "That becomes fragrance directions or a signature scent path that the team can review with clarity.",
          "The scent concept is then matched to the right diffusion approach for scale, zones, and daily performance.",
        ],
        faqEyebrow: "FAQ",
        faqTitle: "What should a team clarify before it starts?",
        faqBody:
          "These questions usually help define whether the next step is a full scent marketing program, signature fragrance development, or a more technical diffuser review.",
        finalTitle: "Need help shaping a clearer fragrance brief?",
        finalBody:
          "We can help define whether the next move is scent marketing, signature scent development, or a diffuser recommendation shaped to the site.",
        finalPrimary: "Discuss Your Project",
        finalSecondary: "Signature Scent",
      };

  return (
    <div>
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="section-inner section-block">
          <div className="grid gap-10 xl:grid-cols-[1.04fr_0.96fr] xl:items-center">
            <MountReveal className="space-y-7">
              <span className="kicker-pill">{copy.badge}</span>
              <h1 className="hero-title max-w-[12ch]">{copy.title}</h1>
              <p className="hero-body">{copy.body}</p>
            </MountReveal>

            <MountReveal delay={0.12}>
              <div className="media-frame aspect-[4/5] min-h-[24rem]">
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80"
                  alt={
                    isArabic
                      ? "مساحة ضيافة فاخرة تعبّر عن استراتيجية روائح متكاملة"
                      : "Luxury hospitality environment representing integrated scent strategy"
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
          <div className="grid gap-6 lg:grid-cols-[1.08fr_0.96fr_0.96fr]">
            {serviceCards[locale].map((item, index) => (
              <div key={item.title}>
                <Reveal delay={index * 0.08}>
                  <article className="surface-panel flex h-full flex-col overflow-hidden">
                    <div className={index === 0 ? "aspect-[5/4]" : "aspect-[4/4.3]"}>
                      <img
                        src={item.img}
                        alt={item.alt}
                        width="1600"
                        height="1400"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-4 p-6 md:p-7">
                      <h2 className="font-display text-[2rem] leading-[1.02] text-ink">
                        {item.title}
                      </h2>
                      <p className="text-[1rem] leading-8 text-ink-soft">{item.desc}</p>
                    </div>
                  </article>
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="section-inner section-block">
          <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr]">
            <Reveal>
              <SectionIntro
                eyebrow={copy.processEyebrow}
                title={copy.processTitle}
                body={copy.processBody}
              />
            </Reveal>

            <div className="grid gap-4">
              {copy.processSteps.map((step, index) => (
                <div key={step}>
                  <Reveal delay={index * 0.08}>
                    <div className="surface-panel-dark p-6 md:p-7">
                      <div className="flex items-start gap-4">
                        <span className="chip border-white/15 bg-white/6 text-white/75">
                          0{index + 1}
                        </span>
                        <p className="text-[1rem] leading-8 text-white/76">{step}</p>
                      </div>
                    </div>
                  </Reveal>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner grid gap-10 xl:grid-cols-[1.02fr_0.98fr]">
          <Reveal>
            <SectionIntro
              eyebrow={copy.faqEyebrow}
              title={copy.faqTitle}
              body={copy.faqBody}
              className="mb-8"
            />
            <FaqAccordion items={faqItems[locale]} />
          </Reveal>

          <Reveal delay={0.08}>
            <div className="surface-panel h-full p-6 md:p-8">
              <p className="eyebrow">{isArabic ? "المسارات التالية" : "Suggested Next Steps"}</p>
              <div className="mt-5 grid gap-4">
                <ActionLink to={toLocalePath("/signature-scent")}>
                  {isArabic ? "تصميم العطر المميز" : "Signature Scent Design"}
                </ActionLink>
                <ActionLink to={toLocalePath("/diffusers")} variant="secondary">
                  {isArabic ? "استكشف أنظمة النشر" : "Explore Diffuser Systems"}
                </ActionLink>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title={copy.finalTitle}
        body={copy.finalBody}
        primary={{ label: copy.finalPrimary, to: toLocalePath("/contact") }}
        secondary={{ label: copy.finalSecondary, to: toLocalePath("/signature-scent") }}
        tone="light"
      />
    </div>
  );
}
