import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { mainNavItems, referenceImages } from "../data/referenceContent";
import type { Locale } from "../seo/site";
import { stripLocalePrefix, withLocale } from "../seo/site";
import LanguageSwitcher from "./LanguageSwitcher";

function isActivePath(currentPath: string, itemPath: string) {
  return currentPath === itemPath || currentPath.startsWith(`${itemPath}/`);
}

export default function Navbar({ locale }: { locale: Locale }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const basePath = stripLocalePrefix(location.pathname);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="site-header">
      <div className="site-header__top">
        <button
          type="button"
          className="site-header__menu"
          onClick={() => setMobileMenuOpen((open) => !open)}
          aria-expanded={mobileMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        <Link to={withLocale("/", locale)} className="site-logo" aria-label="Air Aroma home">
          <img
            src={referenceImages.logo}
            alt="Air Aroma"
            width="154"
            height="24"
            decoding="async"
          />
        </Link>

        <div className="site-header__actions">
          <LanguageSwitcher />
        </div>
      </div>

      <nav className="site-header__nav" aria-label="Main navigation">
        <div className="reference-container site-header__nav-inner">
          <div className="site-header__links">
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={withLocale(item.path, locale)}
                className="site-header__link"
                data-active={isActivePath(basePath, item.path)}
              >
                {item.label[locale]}
              </Link>
            ))}
          </div>

          <Link to={withLocale("/contact", locale)} className="site-header__cta">
            {locale === "ar" ? "استفسر الآن" : "Enquire"}
          </Link>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen ? (
          <motion.nav
            id="mobile-navigation"
            className="mobile-navigation"
            aria-label="Mobile navigation"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18 }}
          >
            {mainNavItems.map((item) => (
              <Link
                key={item.path}
                to={withLocale(item.path, locale)}
                className="mobile-navigation__link"
                data-active={isActivePath(basePath, item.path)}
              >
                {item.label[locale]}
              </Link>
            ))}
            <Link to={withLocale("/contact", locale)} className="mobile-navigation__link">
              {locale === "ar" ? "استفسر الآن" : "Enquire"}
            </Link>
          </motion.nav>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
