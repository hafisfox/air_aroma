import { Phone, ShoppingCart } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import SecondaryNav from "../components/SecondaryNav";
import {
  AROMAX_STORE_URL,
  aromaxSecondaryNav,
  referenceImages,
} from "../data/referenceContent";
import {
  getProductById,
  getProductCharacteristics,
  getProductCollectionBasePath,
  getProductName,
  getProductNotes,
  getProductStory,
} from "../data/products";
import { useLocaleRouting } from "../lib/localeRouting";
import NotFound from "./NotFound";

const aromaxColorTiles = [
  { label: { en: "Silver", ar: "فضي" }, image: referenceImages.aromaxSilverTile },
  { label: { en: "Gold", ar: "ذهبي" }, image: referenceImages.aromaxGoldTile },
  { label: { en: "Black", ar: "أسود" }, image: referenceImages.aromaxBlackTile },
  { label: { en: "Red", ar: "أحمر" }, image: referenceImages.aromaxRedTile },
];

export default function ProductDetail() {
  const { productId } = useParams();
  const { locale, toLocalePath } = useLocaleRouting();
  const isArabic = locale === "ar";
  const product = productId ? getProductById(productId) : undefined;

  if (!product) {
    return <NotFound />;
  }

  if (product.id === "aromax") {
    return <AromaxDetail locale={locale} isArabic={isArabic} toLocalePath={toLocalePath} />;
  }

  const name = getProductName(product, locale);
  const notes = getProductNotes(product, locale);
  const characteristics = getProductCharacteristics(product, locale);

  return (
    <div>
      <section className="quiet-section">
        <div className="reference-container simple-page__grid">
          <div>
            <p className="eyebrow">{isArabic ? "عطر من Air Aroma" : "Air Aroma scent"}</p>
            <h1 className="simple-page__title mt-4">{name}</h1>
          </div>
          <div className="simple-page__body">
            <p>{getProductStory(product, locale)}</p>
            <div className="action-row">
              <Link to={toLocalePath("/contact")} className="button-primary">
                {isArabic ? "تواصل معنا" : "Contact"}
              </Link>
              <Link
                to={toLocalePath(getProductCollectionBasePath(product))}
                className="button-secondary"
              >
                {isArabic ? "العودة إلى المجموعة" : "Back to collection"}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="quiet-section pt-0">
        <div className="reference-container--wide simple-card-grid">
          <article className="simple-card">
            <img
              src={product.images[0].file}
              alt={name}
              width="900"
              height="900"
              loading="lazy"
              decoding="async"
            />
          </article>
          <article className="simple-card">
            <h2>{isArabic ? "النفحات" : "Notes"}</h2>
            <p>{notes.length > 0 ? notes.join(", ") : characteristics.join(", ")}</p>
          </article>
          <article className="simple-card">
            <h2>{isArabic ? "الطابع" : "Characteristics"}</h2>
            <p>{characteristics.join(", ")}</p>
          </article>
        </div>
      </section>
    </div>
  );
}

function AromaxDetail({
  locale,
  isArabic,
  toLocalePath,
}: {
  locale: "en" | "ar";
  isArabic: boolean;
  toLocalePath: (pathname: string) => string;
}) {
  return (
    <div>
      <SecondaryNav
        items={aromaxSecondaryNav}
        locale={locale}
        label={isArabic ? "محتوى آروماكس" : "Aromax sections"}
      />

      <section className="page-hero page-hero--dark aromax-hero">
        <div className="page-hero__media">
          <img
            src={referenceImages.aromaxHero}
            alt=""
            width="1800"
            height="900"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="page-hero__content">
          <h1>{isArabic ? "آروماكس" : "Aromax"}</h1>
          <p className="text-[clamp(18px,2vw,22px)] leading-[1.24]">
            {isArabic
              ? "آروماكس أكثر من مجرد موزع عطر. إنه التصميم والابتكار والطبيعة معاً لصنع أفضل موزع منزلي."
              : "The Aromax aromatherapy diffuser is more than just an aroma diffuser. It's design, innovation and nature coming together to create the best home scent diffuser."}
          </p>
        </div>
      </section>

      <section id="overview" className="quiet-section">
        <div className="reference-container aromax-overview">
          <h2>{isArabic ? "تعرّف على آروماكس. ناعم، أنيق، وجاهز لتعطير منزلك." : "Meet the Aromax. Smooth, stylish, and ready to fragrance your home."}</h2>
          <div className="aromax-overview__copy">
            <p>
              {isArabic
                ? "اصنع أجواء عطرية مثالية مع موزع آروماكس. التصميم البسيط والهيكل المصنوع من الألمنيوم عالي الجودة يجعلان آروماكس موزعاً منزلياً أساسياً ينسجم مع أي مساحة داخلية."
                : "Create the perfect scented ambience with the Aromax aromatherapy diffuser. The minimalist design and high end aluminum enclosure of the Aromax make it the essential home diffuser to complement any interior."}
            </p>
            <p className="mt-6">
              {isArabic
                ? "مع تشغيل فائق الهدوء ومؤقت مدمج وإخراج عطري قابل للتعديل، يمكنك الحفاظ على رائحة مساحتك رائعة وبأسلوب أنيق."
                : "With whisper silent operation, a built-in timer and an adjustable scent output, you can keep your space smelling great in style."}
            </p>
          </div>
          <img
            className="aromax-overview__product"
            src="/products/AROMAX/Aromax-Silver-01.jpg"
            alt={isArabic ? "موزع آروماكس الفضي" : "Silver Aromax diffuser"}
            width="900"
            height="900"
            loading="lazy"
            decoding="async"
          />
        </div>
      </section>

      <section id="tech-specs" className="quiet-section pt-0">
        <div className="aromax-story">
          <img
            src={referenceImages.aromaxContent}
            alt={isArabic ? "آروماكس على رف داخلي" : "Aromax diffuser on an interior shelf"}
            width="1440"
            height="1026"
            loading="lazy"
            decoding="async"
          />
          <div className="aromax-story__copy">
            <h2>
              {isArabic
                ? "يتحد الشكل والوظيفة لصنع موزع عطر يبدو بجمال رائحته."
                : "Form and function combine to create a fragrance diffuser that looks as good as it smells."}
            </h2>
            <p>
              {isArabic
                ? "عند تصميم آروماكس، كان الهدف هو صنع أفضل موزع زيوت للمنازل والشقق والمكاتب الصغيرة. يمنحه الشكل المنحني إحساساً ودوداً وهادئاً، بينما تعكس وظائفه البسيطة عناية واضحة بالتفاصيل."
                : "When we set out to design the Aromax, we wanted to create the best oil diffuser ideal for apartments, homes or small offices. The curved shaped design gives the Aromax an inviting and approachable feel, creating a sense of understated luxury. The craftsmanship and attention to detail is reflected in the Aromax's functions which are simple and user friendly."}
            </p>
          </div>
        </div>
      </section>

      <section id="buy-now" className="quiet-section">
        <div className="reference-container aromax-colors">
          <div className="aromax-colors__copy">
            <h2>{isArabic ? "عطرك، لونك." : "Your fragrance, your color."}</h2>
            <p>
              {isArabic
                ? "يتوفر آروماكس بأربعة ألوان رائعة. لم يكن تنسيق آروماكس مع أسلوب منزلك أسهل من الآن. كل ما تبقى هو اختيار الرائحة المناسبة من مجموعة العطور المنزلية الفاخرة."
                : "The Aromax is available in 4 brilliant color choices. Matching the Aromax to your interior style has never been easier. All that's left to do is pair the right aroma from our home luxury scents range."}
            </p>
          </div>
          <a href={AROMAX_STORE_URL} className="button-secondary">
            {isArabic ? "اشتر الآن" : "Buy Now"}
          </a>
        </div>

        <div className="aromax-color-grid mt-14">
          {aromaxColorTiles.map((tile) => (
            <article key={tile.label.en} className="aromax-color-card">
              <h3>{tile.label[locale]}</h3>
              <img
                src={tile.image}
                alt={`${tile.label[locale]} Aromax`}
                width="800"
                height="800"
                loading="lazy"
                decoding="async"
              />
            </article>
          ))}
        </div>
      </section>

      <section className="quiet-section pt-0">
        <div className="split-actions">
          <article className="split-action">
            <span className="split-action__icon" aria-hidden="true">
              <Phone size={17} />
            </span>
            <h3>{isArabic ? "اتصل بنا" : "Call us"}</h3>
            <p>
              {isArabic
                ? "تواصل مع ممثل Air Aroma اليوم وسنساعدك على تعطير مساحتك بأفضل شكل."
                : "Contact an Air Aroma representative today and we'll get your business smelling great in no time."}
            </p>
            <Link to={toLocalePath("/contact")} className="button-subtle">
              {isArabic ? "اتصل" : "Contact"}
            </Link>
          </article>

          <article className="split-action">
            <span className="split-action__icon" aria-hidden="true">
              <ShoppingCart size={17} />
            </span>
            <h3>{isArabic ? "تسوق عبر الإنترنت" : "Shop online"}</h3>
            <p>
              {isArabic
                ? "زر متجر Air Aroma لاكتشاف العطور والموزعات وطلبها مباشرة إلى بابك."
                : "Visit the Air Aroma online store to discover our range of scents and diffusers and get them delivered directly to your door."}
            </p>
            <a href={AROMAX_STORE_URL} className="button-subtle">
              {isArabic ? "اشتر آروماكس" : "Buy an Aromax"}
            </a>
          </article>
        </div>
      </section>
    </div>
  );
}

