import { Link } from "react-router-dom";
import SecondaryNav from "../components/SecondaryNav";
import {
  diffuserShowcases,
  diffusersSecondaryNav,
} from "../data/referenceContent";
import { useLocaleRouting } from "../lib/localeRouting";

export default function Diffusers() {
  const { locale, toLocalePath } = useLocaleRouting();
  const isArabic = locale === "ar";

  return (
    <div>
      <SecondaryNav
        items={diffusersSecondaryNav}
        locale={locale}
        label={isArabic ? "أنواع الموزعات" : "Diffuser types"}
      />

      <section className="quiet-section">
        <div className="section-intro section-intro--center">
          <h1 className="section-title">{isArabic ? "الموزعات" : "Diffusers"}</h1>
          <p className="section-body text-[clamp(28px,4vw,42px)] leading-[1.22]">
            {isArabic
              ? "اكتشف منتجات موزعات Air Aroma. أنظمة عطرية أنيقة وهادئة وسهلة الاستخدام. عندما لا يكفي إلا أفضل موزع."
              : "Discover Air Aroma scent diffuser products. Elegant, discreet, and easy to use aroma diffuser systems. When only the best diffuser will do."}
          </p>
        </div>
      </section>

      <section className="quiet-section pt-0">
        <div className="diffuser-grid">
          {diffuserShowcases.map((item) => {
            const content = (
              <>
                <div className="diffuser-card__content">
                  <h2>{item.title[locale]}</h2>
                  <p>{item.description[locale]}</p>
                  <span>{item.cta[locale]}</span>
                </div>
                <img
                  className="diffuser-card__image"
                  src={item.image}
                  alt={item.imageAlt[locale]}
                  width="800"
                  height="800"
                  loading="lazy"
                  decoding="async"
                />
              </>
            );

            if (item.href.startsWith("http")) {
              return (
                <a
                  key={item.id}
                  id={item.id}
                  href={item.href}
                  className="diffuser-card"
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
                className="diffuser-card"
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

