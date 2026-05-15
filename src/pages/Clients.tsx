import { useLocaleRouting } from "../lib/localeRouting";
import {
  BulletList,
  FinalCta,
  MountReveal,
  Reveal,
  SectionIntro,
} from "../components/brand/BrandPrimitives";

const clientLogos = [
  {
    name: "Raffles Hotels & Resorts",
    src: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2026/05/Raffles-logo.png",
  },
  {
    name: "Max Mara",
    src: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/max-mara.png",
  },
  {
    name: "Aston Martin",
    src: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/aston-martin.png",
  },
  {
    name: "Cathay Pacific",
    src: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/cathay-pacific.png",
  },
];

export default function Clients() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  const copy = isArabic
    ? {
        badge: "محفظة العملاء",
        title: "تثق علامات الضيافة والأزياء والسفر الراقية بـ Air Aroma لبناء حضور عطري أكثر اتساقاً.",
        body:
          "هذه الأسماء لا تمثل مجرد شهرة، بل تشير إلى نوع التوقعات التي يأتي بها عملاء يبحثون عن تجربة حسية موثوقة ومتكاملة مع صورة العلامة وطريقة تشغيلها اليومية.",
        proofTitle: "ماذا يعني ذلك للمشروع الجديد؟",
        proofPoints: [
          "أن الأداء اليومي يجب أن يكون ثابتاً بقدر أهمية الانطباع الأول.",
          "أن الاتجاه العطري يجب أن يبدو جزءاً من الهوية، لا إضافة عابرة.",
          "أن الثقة تُبنى عندما تكون التجربة الراقية قابلة للتكرار، لا عندما تكون مؤثرة مرة واحدة فقط.",
        ],
        finalTitle: "هل تريد بناء تجربة عطرية تستحق هذا المستوى من الثقة؟",
        finalBody:
          "يمكننا مساعدتك على تحويل شخصية المشروع إلى برنامج روائح أكثر وضوحاً وقابلية للتنفيذ.",
        finalPrimary: "استكشف خدمات الروائح",
        finalSecondary: "تواصل معنا",
      }
    : {
        badge: "Client Portfolio",
        title: "Luxury hospitality, fashion, and travel brands trust Air Aroma to create a more coherent scent presence.",
        body:
          "These names matter not just because they are recognizable, but because they reflect the level of expectation behind projects that need a sensory experience to feel credible, refined, and dependable every day.",
        proofTitle: "What does that signal for a new project?",
        proofPoints: [
          "That daily performance matters just as much as the first impression.",
          "That fragrance direction should feel like part of the identity, not an afterthought.",
          "That trust is built when a premium experience can be repeated consistently, not when it feels impressive once.",
        ],
        finalTitle: "Want to build a scent experience that earns this level of trust?",
        finalBody:
          "We can help turn the character of the project into a clearer scent program that is both premium and operationally grounded.",
        finalPrimary: "Explore Scent Services",
        finalSecondary: "Contact Air Aroma",
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
                <p className="eyebrow">{isArabic ? "ثقة العلامات" : "Brand Confidence"}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {clientLogos.map((logo) => (
                    <div
                      key={logo.name}
                      className="flex min-h-[8rem] items-center justify-center rounded-[1.5rem] border border-line bg-white/55 p-6"
                    >
                      <img
                        src={logo.src}
                        alt={logo.name}
                        width="260"
                        height="110"
                        loading="lazy"
                        decoding="async"
                        className="w-full max-w-[7rem] object-contain opacity-75"
                      />
                    </div>
                  ))}
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
                src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80"
                alt={
                  isArabic
                    ? "مساحة داخلية راقية تعبّر عن ثقة العلامات المتميزة"
                    : "Refined interior environment representing premium client confidence"
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
              eyebrow={isArabic ? "ما يعنيه ذلك" : "What That Means"}
              title={copy.proofTitle}
              body={
                isArabic
                  ? "عندما تستثمر العلامة الراقية في برنامج عطري، فهي تبحث عن حضور متماسك يمكن الوثوق به كل يوم."
                  : "When a premium brand invests in fragrance, it is usually looking for a sensory layer that feels deliberate, reliable, and aligned with its wider identity."
              }
            />
            <div className="mt-8">
              <BulletList items={copy.proofPoints} />
            </div>
          </Reveal>
        </div>
      </section>

      <FinalCta
        title={copy.finalTitle}
        body={copy.finalBody}
        primary={{ label: copy.finalPrimary, to: toLocalePath("/scent-marketing") }}
        secondary={{ label: copy.finalSecondary, to: toLocalePath("/contact") }}
        tone="light"
      />
    </div>
  );
}
