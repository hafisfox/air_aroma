import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  const navLinks = [
    { name: t("nav.scentMarketing"), path: "/scent-marketing" },
    { name: t("nav.products"), path: "/products" },
    { name: t("nav.clients"), path: "/clients" },
    { name: t("nav.blog"), path: "/blog" },
    { name: t("nav.contact"), path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <nav 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-500 ${scrolled ? 'glass-nav py-2' : 'bg-transparent py-6'}`}
      aria-label="Main navigation" 
      role="navigation"
    >
      {/* Top tier */}
      <div className="w-full flex justify-between items-center px-6 lg:px-12">
        
        {/* Mobile Menu Button */}
        <div className="w-[80px] flex items-center">
          <button 
            className="md:hidden text-white hover:text-brand-gold transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
        
        {/* Logo */}
        <Link to="/" className="mx-auto flex justify-center items-center group" aria-label="Air Aroma — Home">
          <span className="text-[34px] md:text-[44px] font-light tracking-tight text-white leading-none transition-transform duration-500 group-hover:scale-105">
            Air<span className="text-brand-gold transition-colors duration-500" aria-hidden="true">/</span>Aroma
          </span>
        </Link>

        {/* Desktop Right - Language Switcher */}
        <div className="w-[80px] flex justify-end items-center">
          <LanguageSwitcher />
        </div>
      </div>
      
      {/* Bottom tier (Desktop) */}
      <div className={`hidden md:flex justify-between items-center px-6 lg:px-12 transition-all duration-500 ${scrolled ? 'h-0 opacity-0 overflow-hidden pointer-events-none' : 'pt-4 pb-1 opacity-100'} text-[13px] font-light tracking-wide uppercase`}>
        <div className="flex space-x-10 mx-auto rtl:space-x-reverse">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="relative text-white/80 hover:text-white transition-colors group py-2"
            >
              {link.name}
              <span className="absolute left-0 bottom-0 w-0 h-px bg-brand-gold transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
           <motion.div
           id="mobile-menu"
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           exit={{ opacity: 0, height: 0 }}
           transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
           className="md:hidden border-t border-white/10 bg-[#0a0a0a]/95 backdrop-blur-xl overflow-hidden absolute top-full left-0 w-full"
           role="menu"
           aria-label="Mobile navigation menu"
         >
           <div className="flex flex-col px-8 py-8 space-y-6 text-sm font-medium uppercase tracking-[0.15em]">
             {navLinks.map((link, i) => (
               <motion.div
                 key={link.name}
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.1, duration: 0.4 }}
               >
                 <Link
                   to={link.path}
                   className="text-white/80 hover:text-brand-gold transition-colors block py-2"
                   role="menuitem"
                 >
                   {link.name}
                 </Link>
               </motion.div>
             ))}
           </div>
         </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
