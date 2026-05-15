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
        className="nav-icon-button min-w-[3.5rem] gap-2 px-3 text-[0.72rem] font-semibold uppercase tracking-[0.16em]"
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
              className="surface-panel absolute end-0 z-50 mt-3 min-w-[11rem] p-2"
              role="menu"
            >
              <button
                type="button"
                onClick={() => toggleLanguage("en")}
                className={cx(
                  "flex min-h-11 w-full items-center justify-between rounded-full px-4 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft",
                  currentLang === "en" && "bg-accent-soft text-accent-strong",
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
                  "flex min-h-11 w-full items-center justify-between rounded-full px-4 text-sm font-semibold text-ink transition-colors hover:bg-accent-soft",
                  currentLang === "ar" && "bg-accent-soft text-accent-strong",
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
