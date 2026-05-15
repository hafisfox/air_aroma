import { Link } from "react-router-dom";
import SecondaryNav from "../components/SecondaryNav";
import {
  productShowcases,
  productsSecondaryNav,
  referenceImages,
} from "../data/referenceContent";
import { useLocaleRouting } from "../lib/localeRouting";

export default function Products() {
  const { locale, toLocalePath } = useLocaleRouting();
  const isArabic = locale === "ar";

  return (
    <div>
      <SecondaryNav
        items={productsSecondaryNav}
        locale={locale}
        label={isArabic ? "أقسام المنتجات" : "Product sections"}
      />

      <section className="page-hero page-hero--dark">
        <div className="page-hero__media">
          <img
            src={referenceImages.productsHero}
            alt=""
            width="1800"
            height="900"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <div className="page-hero__content">
          <h1>{isArabic ? "المنتجات" : "Products"}</h1>
          <p>
            {isArabic
              ? "تساعد منتجاتنا العلامات على بناء روابط مع العملاء من خلال الرائحة."
              : "Our products help brands build connections with customers through scent."}
          </p>
        </div>
      </section>

      <section className="quiet-section">
        <div className="product-mosaic">
          {productShowcases.map((item) => {
            const content = (
              <>
                <div className="product-card__content">
                  <h2>{item.title[locale]}</h2>
                  <p>{item.description[locale]}</p>
                  <span>{item.cta[locale]}</span>
                </div>
                <img
                  className="product-card__image"
                  src={item.image}
                  alt={item.imageAlt[locale]}
                  width="800"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
              </>
            );

            const className = "product-card";

            if (item.href.startsWith("http")) {
              return (
                <a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  className={className}
                  data-tone={item.tone}
                >
                  {content}
                </a>
              );
            }

            return (
              <Link
                key={item.id}
                id={item.id}
                to={toLocalePath(item.href)}
                className={className}
                data-tone={item.tone}
              >
                {content}
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}

