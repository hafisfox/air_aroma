import { AnimatePresence, motion } from "motion/react";
import { Check, Globe } from "lucide-react";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { setLocale } from "../i18n";
import { getLocaleFromPath, switchLocalePath, type Locale } from "../seo/site";

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = getLocaleFromPath(location.pathname);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  async function toggleLanguage(lang: Locale) {
    await setLocale(lang);
    navigate(switchLocalePath(location.pathname, lang));
    setIsOpen(false);
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        className="language-switcher__button"
        aria-haspopup="menu"
        aria-label="Switch language"
        aria-expanded={isOpen}
      >
        <Globe size={16} strokeWidth={1.65} />
        <span>{currentLang.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen ? (
          <>
            <button
              type="button"
              className="fixed inset-0 z-40 cursor-default"
              aria-label="Close language menu"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="language-switcher__menu"
              role="menu"
            >
              <button
                type="button"
                onClick={() => toggleLanguage("en")}
                className={cx(
                  "language-switcher__option",
                  currentLang === "en" && "language-switcher__option--active",
                )}
                role="menuitem"
              >
                <span>English</span>
                {currentLang === "en" ? <Check size={16} strokeWidth={2} /> : null}
              </button>
              <button
                type="button"
                onClick={() => toggleLanguage("ar")}
                className={cx(
                  "language-switcher__option",
                  currentLang === "ar" && "language-switcher__option--active",
                )}
                role="menuitem"
                dir="rtl"
              >
                <span>العربية</span>
                {currentLang === "ar" ? <Check size={16} strokeWidth={2} /> : null}
              </button>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
