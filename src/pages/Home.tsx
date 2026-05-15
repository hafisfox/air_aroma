import { useLocaleRouting } from "../lib/localeRouting";
import {
  ActionLink,
  ActionRow,
  BulletList,
  FaqAccordion,
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";

const faqItems = {
  en: [
    {
      question: "What does a strong scent brief include?",
      answer:
        "The best starting point combines the type of space, the audience moving through it, the mood the brand wants to create, and the operational reality of the site.",
    },
    {
      question: "Can Air Aroma support both fragrance direction and hardware selection?",
      answer:
        "Yes. The work usually moves from fragrance strategy into a delivery plan, so the scent identity and the diffuser approach feel consistent from concept to rollout.",
    },
    {
      question: "Is this built for Saudi Arabia and the wider GCC market?",
      answer:
        "Yes. The positioning, service language, and product mix are designed around premium hospitality, retail, and residential projects across Saudi Arabia and the GCC.",
    },
  ],
  ar: [
    {
      question: "ما الذي يجب أن يتضمنه موجز مشروع عطري قوي؟",
      answer:
        "أفضل نقطة بداية تجمع بين نوع المساحة والجمهور الذي يتحرك داخلها والمزاج الذي تريد العلامة التجارية صنعه والواقع التشغيلي للموقع.",
    },
    {
      question: "هل يمكن لـ Air Aroma دعم الاتجاه العطري واختيار الأجهزة معاً؟",
      answer:
        "نعم. يبدأ العمل عادة من الاستراتيجية العطرية ثم ينتقل إلى خطة النشر، حتى تبدو الهوية العطرية وطريقة التوزيع متماسكتين من الفكرة إلى التشغيل.",
    },
    {
      question: "هل هذا موجّه لمشروعات السعودية ودول الخليج؟",
      answer:
        "نعم. تم إعداد التموضع واللغة الخدمية ومزيج المنتجات ليتوافق مع الضيافة الفاخرة والتجزئة والمساكن الراقية في السعودية ودول الخليج.",
    },
  ],
};

export default function Home() {
  const { isArabic, locale, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        badge: "اتجاه عطري للمشاريع الراقية في السعودية والخليج",
        heroTitle: "هوية عطرية تبدو معمارية، حسية، وواثقة من أول لحظة.",
        heroBody:
          "تصمم Air Aroma برامج تسويق الروائح والعطور المميزة وأنظمة النشر التي تمنح الفنادق والمتاجر والمشاريع السكنية الراقية حضوراً أوضح وذاكرة أقوى وتجربة يومية أكثر اتساقاً.",
        primaryCta: "ابدأ مشروعك العطري",
        secondaryCta: "استكشف أنظمة النشر",
        metrics: [
          { label: "النتيجة", value: "ذاكرة علامة أوضح" },
          { label: "المنهج", value: "اتجاه عطري + تشغيل" },
          { label: "المنطقة", value: "السعودية + الخليج" },
        ],
        heroCaptionTitle: "بيئات فاخرة تتطلب أكثر من عطر جميل",
        heroCaptionBody:
          "نربط الإحساس بالمكان مع الأداء اليومي حتى تبدو التجربة مترابطة من الوصول إلى أدق التفاصيل.",
        sectorsEyebrow: "مجالات العمل",
        sectorsTitle: "كيف تبدو برامج الروائح عندما تُصمم من منظور المكان نفسه؟",
        sectorsBody:
          "بدلاً من تكرار قالب واحد، نطوّر كل اتجاه بحسب نوع المشروع والهوية وطريقة استخدام المساحة يومياً.",
        sectors: [
          {
            title: "الفنادق والمنتجعات",
            body:
              "برامج وصول وأجنحة وسبا وممرات تصنع تجربة ضيافة أكثر أناقة وثباتاً.",
            image:
              "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&w=1600&q=80",
            alt: "فندق فاخر مع هوية حسية متكاملة",
            link: toLocalePath("/scent-marketing"),
            cta: "خدمات الروائح",
          },
          {
            title: "التجزئة الراقية",
            body:
              "هوية عطرية تساعد المتجر على أن يُشعَر به قبل أن يُوصف، مع اتساق عبر الفروع أو الوجهات الرئيسية.",
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
            alt: "متجر فاخر بتجربة حسية راقية",
            link: toLocalePath("/signature-scent"),
            cta: "العطر المميز",
          },
          {
            title: "الفلل والمساحات الخاصة",
            body:
              "حلول أكثر هدوءاً وخصوصية للمساكن والمجالس والأماكن التي تحتاج حضوراً محسوباً لا ضجيجاً.",
            image:
              "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
            alt: "مسكن فاخر بتفاصيل داخلية دافئة",
            link: toLocalePath("/diffusers"),
            cta: "أنظمة النشر",
          },
        ],
        processEyebrow: "المنهج",
        processTitle: "من شعور العلامة إلى واقع التشغيل اليومي.",
        processBody:
          "القيمة لا تأتي من الرائحة وحدها. البرنامج الناجح يجمع بين الاتجاه العطري والهوية التشغيلية والطريقة التي يتحرك بها الناس داخل المساحة.",
        processSteps: [
          "نقرأ نوع المشروع، الجمهور، والنتيجة الشعورية التي يجب أن تبقى في الذاكرة.",
          "نحوّل ذلك إلى اتجاه عطري أو عطر مميز يمكن مراجعته بوضوح مع فريق المشروع.",
          "نربطه بنظام نشر يناسب الحجم، وتدفق الهواء، ومتطلبات الأداء اليومية.",
        ],
        spotlightEyebrow: "مكتبة العطور",
        spotlightTitle: "استكشف المزاج قبل أن تبدأ موجز العطر المخصص.",
        spotlightBody:
          "يمكن للفرق البدء من مجموعات جاهزة تساعدها على تعريف المزاج المطلوب، ثم الانتقال إلى تطوير اتجاه عطري أكثر خصوصية إذا احتاج المشروع ذلك.",
        spotlightPoints: [
          "حمضيات نقية للمشاريع التي تحتاج حضوراً مشرقاً وسهلاً.",
          "أخشاب وراتنجات للمساحات التي تريد عمقاً وهدوءاً ودفئاً.",
          "مسارات عافية أخف للسبا والمساكن والبرامج الهادئة.",
        ],
        spotlightCta: "عرض مجموعة العطور",
        faqEyebrow: "أسئلة شائعة",
        faqTitle: "إجابات سريعة لفرق المشاريع والضيافة.",
        faqBody:
          "إذا كنت تقارن بين العطر المميز والأنظمة أو تحتاج إلى نقطة بداية أوضح، فهذه أكثر الأسئلة التي تساعد على توجيه القرار مبكراً.",
        proofTitle: "لماذا تختار الفرق الراقية هذا النوع من العمل؟",
        proofPoints: [
          "لأن الهوية العطرية يجب أن تبدو مقصودة، لا تجميلية فقط.",
          "لأن الثبات في الأداء مهم بقدر أهمية الجاذبية في اللحظة الأولى.",
          "ولأن التجربة الراقية تُقاس بقدرتها على الاستمرار يومياً، لا بإبهارها الأول فقط.",
        ],
        finalTitle: "هل تخطط لمشروع عطري في السعودية أو الخليج؟",
        finalBody:
          "شاركنا نوع المساحة والإحساس الذي تريد خلقه والمرحلة التي وصل إليها المشروع، وسنساعدك على تحديد العطر ونظام النشر المناسبين.",
        finalPrimary: "تواصل مع Air Aroma",
        finalSecondary: "استكشف المنتجات",
      }
    : {
        badge: "Architected scent strategy for Saudi Arabia and the GCC",
        heroTitle: "Scent identity that feels architectural, sensory, and assured from the first arrival.",
        heroBody:
          "Air Aroma designs scent marketing programs, signature fragrances, and diffusion systems that give luxury hospitality, retail, and residential spaces a clearer memory, a stronger atmosphere, and a more dependable daily experience.",
        primaryCta: "Start Your Scent Project",
        secondaryCta: "Explore Diffuser Systems",
        metrics: [
          { label: "Outcome", value: "Stronger brand memory" },
          { label: "Method", value: "Fragrance + operations" },
          { label: "Region", value: "Saudi Arabia + GCC" },
        ],
        heroCaptionTitle: "Premium environments need more than a beautiful fragrance.",
        heroCaptionBody:
          "We connect the emotional feel of a space with the operational reality behind it, so the experience holds together from arrival through everyday use.",
        sectorsEyebrow: "Where We Work",
        sectorsTitle: "What does a scent program look like when it is designed from the space outward?",
        sectorsBody:
          "Instead of forcing every project into one formula, the direction is shaped around the property type, the brand character, and the way the environment is used every day.",
        sectors: [
          {
            title: "Hotels and Resorts",
            body:
              "Arrival, suite, spa, and corridor programs that make hospitality environments feel more elevated and more consistent.",
            image:
              "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&w=1600&q=80",
            alt: "Luxury hospitality environment supported by scent strategy",
            link: toLocalePath("/scent-marketing"),
            cta: "Scent Services",
          },
          {
            title: "Premium Retail",
            body:
              "Signature fragrance direction that helps a store feel memorable before the visitor tries to describe why.",
            image:
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1600&q=80",
            alt: "Luxury retail environment with premium atmosphere",
            link: toLocalePath("/signature-scent"),
            cta: "Signature Scent",
          },
          {
            title: "Residences and Private Spaces",
            body:
              "A quieter fragrance layer for villas, wellness environments, and private interiors that need discretion as much as presence.",
            image:
              "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=80",
            alt: "Private luxury residence with refined interior design",
            link: toLocalePath("/diffusers"),
            cta: "Diffuser Systems",
          },
        ],
        processEyebrow: "How It Works",
        processTitle: "From brand atmosphere to the discipline of daily performance.",
        processBody:
          "The value does not come from fragrance alone. The strongest programs combine scent direction, operational logic, and an understanding of how people move through a space.",
        processSteps: [
          "We define the project type, the audience, and the emotional outcome the environment should leave behind.",
          "That becomes a fragrance direction or signature scent concept the team can review with clarity.",
          "The concept is then paired with the right diffusion system for scale, airflow, and daily performance.",
        ],
        spotlightEyebrow: "Fragrance Library",
        spotlightTitle: "Explore the mood before you brief a custom fragrance.",
        spotlightBody:
          "Teams often begin with the existing collection to define the right atmosphere, then move into a more tailored scent identity if the project needs something more distinctive.",
        spotlightPoints: [
          "Citrus-led profiles for projects that need brightness and clarity.",
          "Woods and resins for spaces that want calm depth and warmth.",
          "Wellness-led blends for spas, residences, and softer scent layers.",
        ],
        spotlightCta: "View Fragrance Collection",
        faqEyebrow: "FAQ",
        faqTitle: "Quick answers for hospitality and project teams.",
        faqBody:
          "If you are comparing scent strategy, signature fragrance, and diffuser options, these are the questions that usually help narrow the path early.",
        proofTitle: "Why do premium project teams invest in this kind of work?",
        proofPoints: [
          "Because scent identity should feel intentional, not merely decorative.",
          "Because reliable performance matters as much as a strong first impression.",
          "Because luxury experiences are judged by how well they hold up every day, not just by how dramatic they feel once.",
        ],
        finalTitle: "Planning a scent project in Saudi Arabia or the GCC?",
        finalBody:
          "Tell us the space type, the atmosphere you want to create, and the stage of the project. We will help narrow the right fragrance and diffusion direction.",
        finalPrimary: "Contact Air Aroma",
        finalSecondary: "Explore Products",
      };

  return (
    <div>
      <section className="overflow-hidden pt-28 md:pt-32">
        <div className="section-inner section-block">
          <div className="grid gap-10 xl:grid-cols-[1.02fr_0.98fr] xl:items-center">
            <MountReveal className="space-y-8">
              <div className="kicker-row">
                <span className="kicker-pill">{copy.badge}</span>
                <span className="chip">{locale === "ar" ? "مشروعات فاخرة" : "Luxury projects"}</span>
              </div>

              <h1 className="hero-title max-w-[12ch]">{copy.heroTitle}</h1>
              <p className="hero-body">{copy.heroBody}</p>

              <ActionRow>
                <ActionLink to={toLocalePath("/contact")}>{copy.primaryCta}</ActionLink>
                <ActionLink to={toLocalePath("/diffusers")} variant="secondary">
                  {copy.secondaryCta}
                </ActionLink>
              </ActionRow>

              <div className="metric-grid">
                {copy.metrics.map((metric) => (
                  <div key={metric.label} className="metric-card">
                    <p className="metric-label">{metric.label}</p>
                    <p className="metric-value">{metric.value}</p>
                  </div>
                ))}
              </div>
            </MountReveal>

            <MountReveal delay={0.12}>
              <div className="media-frame media-frame--shadowed aspect-[4/5] min-h-[26rem] md:min-h-[38rem]">
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1800&q=80"
                  alt={
                    isArabic
                      ? "ردهة فاخرة تعكس حضوراً حسياً راقياً"
                      : "Luxury interior environment with an elevated sensory atmosphere"
                  }
                  width="1800"
                  height="2200"
                  fetchPriority="high"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(20,17,14,0.74)] via-transparent to-transparent" />
                <div className="absolute inset-x-5 bottom-5 md:inset-x-8 md:bottom-8">
                  <div className="surface-panel-dark p-6 md:p-7">
                    <p className="eyebrow text-white/80">{copy.heroCaptionTitle}</p>
                    <p className="mt-3 text-[0.98rem] leading-8 text-white/72">
                      {copy.heroCaptionBody}
                    </p>
                  </div>
                </div>
              </div>
            </MountReveal>
          </div>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner">
          <Reveal>
            <SectionIntro
              eyebrow={copy.sectorsEyebrow}
              title={copy.sectorsTitle}
              body={copy.sectorsBody}
              className="mb-12"
            />
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr_0.85fr]">
            {copy.sectors.map((sector, index) => (
              <div key={sector.title}>
                <Reveal delay={index * 0.08}>
                  <article className="surface-panel flex h-full flex-col overflow-hidden">
                    <div className={index === 0 ? "aspect-[5/4]" : "aspect-[4/4.2]"}>
                      <img
                        src={sector.image}
                        alt={sector.alt}
                        width="1600"
                        height="1400"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-5 p-6 md:p-7">
                      <h2 className="font-display text-[2rem] leading-[1.02] text-ink">
                        {sector.title}
                      </h2>
                      <p className="text-[1rem] leading-8 text-ink-soft">{sector.body}</p>
                      <ActionLink to={sector.link} variant="subtle" className="mt-auto">
                        {sector.cta}
                      </ActionLink>
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
          <div className="grid gap-10 xl:grid-cols-[0.92fr_1.08fr] xl:items-start">
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
                        <span className="chip border-white/15 bg-white/6 text-white/72">
                          0{index + 1}
                        </span>
                        <p className="text-[1rem] leading-8 text-white/78">{step}</p>
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
        <div className="section-inner grid gap-10 xl:grid-cols-[0.95fr_1.05fr] xl:items-center">
          <Reveal>
            <div className="media-frame aspect-[4/5] min-h-[24rem]">
              <img
                src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/custom-scent-design-banner.jpg"
                alt={
                  isArabic
                    ? "مجموعة عطور Air Aroma الفاخرة"
                    : "Air Aroma fragrance collection"
                }
                width="1600"
                height="2000"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <SectionIntro
              eyebrow={copy.spotlightEyebrow}
              title={copy.spotlightTitle}
              body={copy.spotlightBody}
            />
            <div className="mt-8">
              <BulletList items={copy.spotlightPoints} />
            </div>
            <ActionRow className="mt-8">
              <ActionLink to={toLocalePath("/fragrances")}>
                {copy.spotlightCta}
              </ActionLink>
            </ActionRow>
          </Reveal>
        </div>
      </section>

      <section className="section-block">
        <div className="section-inner grid gap-10 xl:grid-cols-[1.05fr_0.95fr]">
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
              <p className="eyebrow">{locale === "ar" ? "سبب الاختيار" : "Why It Lands"}</p>
              <h2 className="mt-4 font-display text-[2.6rem] leading-[1.02] text-ink">
                {copy.proofTitle}
              </h2>
              <div className="mt-8">
                <BulletList items={copy.proofPoints} />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title={copy.finalTitle}
        body={copy.finalBody}
        primary={{ label: copy.finalPrimary, to: toLocalePath("/contact") }}
        secondary={{ label: copy.finalSecondary, to: toLocalePath("/products") }}
      />
    </div>
  );
}
