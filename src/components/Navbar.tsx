import { AnimatePresence, motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";
import type { Locale } from "../seo/site";
import { stripLocalePrefix, withLocale } from "../seo/site";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function Navbar({ locale }: { locale: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const basePath = stripLocalePrefix(location.pathname);
  const isHomeRoute = basePath === "/";

  const navLinks = [
    { name: t("nav.scentMarketing"), path: withLocale("/scent-marketing", locale), basePath: "/scent-marketing" },
    { name: t("nav.products"), path: withLocale("/products", locale), basePath: "/products" },
    { name: t("nav.clients"), path: withLocale("/clients", locale), basePath: "/clients" },
    { name: t("nav.about"), path: withLocale("/about", locale), basePath: "/about" },
    { name: t("nav.blog"), path: withLocale("/blog", locale), basePath: "/blog" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 28);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const panelIsSolid = !isHomeRoute || scrolled || mobileMenuOpen;
  const panelClassName = cx(
    "nav-panel",
    !panelIsSolid && "nav-panel--hero",
    panelIsSolid && "nav-panel--solid",
  );

  return (
    <nav className="nav-shell" aria-label="Main navigation">
      <div className="nav-inner">
        <div className={panelClassName}>
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="nav-icon-button md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? <X size={18} strokeWidth={2} /> : <Menu size={18} strokeWidth={2} />}
            </button>

            <Link
              to={withLocale("/", locale)}
              className="brand-mark"
              aria-label="Air Aroma home"
              dir="ltr"
            >
              <span>Air</span>
              <span className="brand-mark__slash" aria-hidden="true">
                /
              </span>
              <span>Aroma</span>
            </Link>
          </div>

          <div className="nav-links">
            {navLinks.map((link) => {
              const isActive =
                basePath === link.basePath ||
                (link.basePath !== "/" && basePath.startsWith(`${link.basePath}/`));

              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="nav-link"
                  data-active={isActive}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="nav-actions">
            <div className="hidden md:block">
              <LanguageSwitcher />
            </div>
            <Link
              to={withLocale("/contact", locale)}
              className="button-primary hidden md:inline-flex min-h-[2.85rem] px-5 text-[0.68rem]"
            >
              {t("nav.contact")}
            </Link>
            <div className="md:hidden">
              <LanguageSwitcher />
            </div>
          </div>
        </div>

        <AnimatePresence>
          {mobileMenuOpen ? (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="mobile-menu md:hidden"
            >
              <div className="mobile-menu__list">
                {navLinks.map((link) => {
                  const isActive =
                    basePath === link.basePath ||
                    (link.basePath !== "/" && basePath.startsWith(`${link.basePath}/`));

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="nav-link"
                      data-active={isActive}
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="mobile-menu__footer">
                <Link
                  to={withLocale("/contact", locale)}
                  className="button-primary flex-1"
                >
                  {t("nav.contact")}
                </Link>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </nav>
  );
}
