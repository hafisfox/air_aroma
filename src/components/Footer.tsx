import { Link } from "react-router-dom";
import { footerColumns, referenceImages } from "../data/referenceContent";
import type { Locale } from "../seo/site";
import { withLocale } from "../seo/site";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Footer({ locale }: { locale: Locale }) {
  return (
    <footer className="site-footer" role="contentinfo" aria-label="Site footer">
      <div className="reference-container">
        <div className="site-footer__grid">
          {footerColumns.map((column, columnIndex) => (
            <nav
              key={`footer-column-${columnIndex}`}
              className="site-footer__links"
              aria-label={`Footer links ${columnIndex + 1}`}
            >
              {column.map((item) =>
                "href" in item ? (
                  <a key={item.label.en} href={item.href}>
                    {item.label[locale]}
                  </a>
                ) : (
                  <Link key={item.label.en} to={withLocale(item.path, locale)}>
                    {item.label[locale]}
                  </Link>
                ),
              )}
            </nav>
          ))}

          <div className="site-footer__newsletter">
            <p>{locale === "ar" ? "ابق على اطلاع" : "Stay up to date"}</p>
            <form
              action="https://air-aroma.us7.list-manage.com/subscribe/post?u=9972593963fdf7aff92d5ce9e&amp;id=210793dc09&amp;f_id=0064d0e4f0"
              method="post"
              target="_blank"
              aria-label={locale === "ar" ? "الاشتراك في النشرة" : "Newsletter subscription"}
            >
              <label htmlFor="footer-email" className="sr-only">
                {locale === "ar" ? "البريد الإلكتروني" : "Email address"}
              </label>
              <input
                id="footer-email"
                name="EMAIL"
                type="email"
                placeholder={locale === "ar" ? "أدخل بريدك الإلكتروني" : "Enter Email"}
                autoComplete="email"
                required
              />
              <button type="submit">{locale === "ar" ? "اشتراك" : "Subscribe"}</button>
            </form>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p dir="ltr">
            Copyright © {new Date().getFullYear()} Air Aroma.{" "}
            {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>
          <div className="site-footer__region">
            <LanguageSwitcher />
            <span>{locale === "ar" ? "اختر البلد أو المنطقة" : "Select country or region"}</span>
            <img
              src={referenceImages.flagUs}
              alt={locale === "ar" ? "علم الولايات المتحدة" : "United States flag"}
              width="20"
              height="20"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

