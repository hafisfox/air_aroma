import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, useNavigate } from 'react-router-dom';
import { setLocale } from '../i18n';
import { getLocaleFromPath, switchLocalePath, type Locale } from '../seo/site';

export default function LanguageSwitcher() {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const currentLang = getLocaleFromPath(location.pathname);

  const toggleLanguage = async (lang: Locale) => {
    await setLocale(lang);
    navigate(switchLocalePath(location.pathname, lang));
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-white/80 hover:text-white transition-colors"
        aria-label="Toggle Language"
        aria-expanded={isOpen}
      >
        <Globe size={18} strokeWidth={1.5} />
        <span className="text-[11px] font-medium uppercase tracking-wider hidden md:inline-block ms-1">
          {currentLang === 'ar' ? 'العربية' : 'EN'}
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <div 
              className="fixed inset-0 z-40" 
              onClick={() => setIsOpen(false)} 
            />
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.2 }}
              className="absolute end-0 mt-2 w-32 rounded-sm bg-[#1a1a1a] shadow-xl border border-white/10 z-50 overflow-hidden"
            >
              <div className="py-1 flex flex-col" role="menu">
                <button
                  onClick={() => toggleLanguage('en')}
                  className={`px-4 py-2 text-sm text-start w-full hover:bg-white/5 transition-colors ${currentLang === 'en' ? 'text-brand-gold' : 'text-white/80'}`}
                  role="menuitem"
                >
                  {t('nav.english')}
                </button>
                <button
                  onClick={() => toggleLanguage('ar')}
                  className={`px-4 py-2 text-sm text-start w-full hover:bg-white/5 transition-colors ${currentLang === 'ar' ? 'text-brand-gold' : 'text-white/80'}`}
                  role="menuitem"
                  dir="rtl"
                >
                  {t('nav.arabic')}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
