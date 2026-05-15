import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../seo/site";
import { withLocale } from "../seo/site";

export default function Footer({ locale }: { locale: Locale }) {
  const { t } = useTranslation();
  const isArabic = locale === "ar";

  const summary = isArabic
    ? "حلول عطرية مدروسة للضيافة الفاخرة والتجزئة والمساكن الراقية في السعودية ودول الخليج."
    : "Tailored fragrance strategy, signature scents, and diffuser systems for luxury hospitality, retail, and residential projects in Saudi Arabia and the GCC.";

  const exploreLinks = [
    { label: t("nav.scentMarketing"), to: withLocale("/scent-marketing", locale) },
    { label: t("nav.products"), to: withLocale("/products", locale) },
    { label: t("nav.clients"), to: withLocale("/clients", locale) },
    { label: t("nav.blog"), to: withLocale("/blog", locale) },
  ];

  const companyLinks = [
    { label: t("nav.about"), to: withLocale("/about", locale) },
    { label: t("nav.contact"), to: withLocale("/contact", locale) },
    { label: isArabic ? "العطر المميز" : "Signature Scent", to: withLocale("/signature-scent", locale) },
    { label: isArabic ? "الموزعات" : "Diffusers", to: withLocale("/diffusers", locale) },
  ];

  const socialLinks = [
    { label: "Instagram", href: "https://www.instagram.com/airaroma" },
    { label: "Facebook", href: "https://www.facebook.com/AirAroma" },
    { label: "YouTube", href: "https://www.youtube.com/user/airaroma" },
    { label: "X / Twitter", href: "https://twitter.com/AirAroma" },
  ];

  return (
    <footer className="site-footer" role="contentinfo" aria-label={t("footer.ariaLabel")}>
      <div className="section-inner section-block">
        <div className="site-footer__grid">
          <div className="space-y-5">
            <Link
              to={withLocale("/", locale)}
              className="brand-mark text-[2rem] text-white"
              dir="ltr"
            >
              <span>Air</span>
              <span className="brand-mark__slash" aria-hidden="true">
                /
              </span>
              <span>Aroma</span>
            </Link>
            <p className="max-w-[28rem] text-[1rem] leading-8 text-white/65">
              {summary}
            </p>
            <div className="kicker-row">
              <span className="kicker-pill bg-white/6 text-white/75">
                {isArabic ? "السعودية" : "Saudi Arabia"}
              </span>
              <span className="kicker-pill bg-white/6 text-white/75">GCC</span>
            </div>
          </div>

          <div className="space-y-5">
            <p className="site-footer__title">{isArabic ? "استكشف" : "Explore"}</p>
            <nav className="site-footer__stack" aria-label={t("footer.mainPages")}>
              {exploreLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className="space-y-5">
            <p className="site-footer__title">{isArabic ? "الشركة" : "Company"}</p>
            <div className="site-footer__stack">
              {companyLinks.map((link) => (
                <Link key={link.to} to={link.to}>
                  {link.label}
                </Link>
              ))}
              <a href="mailto:info@air-aroma.com">info@air-aroma.com</a>
            </div>
          </div>

          <div className="space-y-5">
            <p className="site-footer__title">{t("footer.newsletter")}</p>
            <form
              action="https://air-aroma.us7.list-manage.com/subscribe/post?u=9972593963fdf7aff92d5ce9e&amp;id=210793dc09&amp;f_id=0064d0e4f0"
              method="post"
              target="_blank"
              className="space-y-3"
              aria-label={t("footer.newsletterAria")}
            >
              <label htmlFor="footer-email" className="sr-only">
                {t("footer.emailLabel")}
              </label>
              <input
                id="footer-email"
                type="email"
                name="EMAIL"
                placeholder={t("footer.emailPlaceholder")}
                className="newsletter-input"
                required
                autoComplete="email"
              />
              <button type="submit" className="button-primary w-full sm:w-auto">
                {t("footer.subscribe")}
              </button>
            </form>
            <div className="site-footer__stack pt-2">
              {socialLinks.map((link) => (
                <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <p dir="ltr">&copy; {new Date().getFullYear()} Air Aroma. {t("footer.rights")}</p>
          <p>{t("footer.selectCountry")} • EN / AR</p>
        </div>
      </div>
    </footer>
  );
}
