import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import type { Locale } from "../seo/site";
import { withLocale } from "../seo/site";

export default function Footer({ locale }: { locale: Locale }) {
  const { t } = useTranslation();

  return (
    <footer className="bg-[#050505] text-white/70 pt-20 px-6 lg:px-12 pb-8 border-t border-white/5" role="contentinfo" aria-label={t('footer.ariaLabel', 'Site footer')}>
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-12 mb-20 text-[13px] font-light tracking-wide uppercase">
        {/* Column 1 — Main pages */}
        <nav aria-label={t('footer.mainPages', 'Main pages')} className="flex flex-col space-y-5">
          <Link to={withLocale("/scent-marketing", locale)} className="hover:text-brand-gold transition-colors w-max">{t('nav.scentMarketing', 'Scent Marketing')}</Link>
          <Link to={withLocale("/products", locale)} className="hover:text-brand-gold transition-colors w-max">{t('nav.products', 'Products')}</Link>
          <Link to={withLocale("/clients", locale)} className="hover:text-brand-gold transition-colors w-max">{t('nav.clients', 'Clients')}</Link>
          <Link to={withLocale("/blog", locale)} className="hover:text-brand-gold transition-colors w-max">{t('nav.blog', 'Blog')}</Link>
        </nav>
        
        {/* Column 2 — Company & social */}
        <nav aria-label={t('footer.companySocial', 'Company pages')} className="flex flex-col space-y-5">
          <Link to={withLocale("/about", locale)} className="hover:text-brand-gold transition-colors w-max">{t('nav.about', 'About')}</Link>
          <Link to={withLocale("/scent-marketing", locale)} className="hover:text-brand-gold transition-colors w-max">{t('footer.services', 'Services')}</Link>
          <Link to={withLocale("/contact", locale)} className="hover:text-brand-gold transition-colors w-max">{t('nav.contact', 'Contact')}</Link>
          <a href="https://www.facebook.com/AirAroma" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors w-max" aria-label="Visit Air Aroma on Facebook">Facebook</a>
          <a href="https://www.instagram.com/airaroma" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors w-max" aria-label="Visit Air Aroma on Instagram">Instagram</a>
          <a href="https://www.youtube.com/user/airaroma" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors w-max" aria-label="Visit Air Aroma on YouTube">YouTube</a>
        </nav>

        {/* Column 3 — Social & legal */}
        <nav aria-label={t('footer.socialLegal', 'Social media and legal')} className="flex flex-col space-y-5">
          <a href="https://twitter.com/AirAroma" target="_blank" rel="noopener noreferrer" className="hover:text-brand-gold transition-colors w-max" aria-label="Visit Air Aroma on Twitter">Twitter</a>
          <Link to={withLocale("/about", locale)} className="hover:text-brand-gold transition-colors w-max">{t('footer.legal', 'Legal')}</Link>
          <Link to={withLocale("/contact", locale)} className="hover:text-brand-gold transition-colors w-max">{t('footer.faq', 'FAQ')}</Link>
          <a href="mailto:info@air-aroma.com" className="hover:text-brand-gold transition-colors w-max" aria-label="Email Air Aroma">info@air-aroma.com</a>
        </nav>

        {/* Newsletter Column */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col pt-8 md:pt-0 normal-case tracking-normal">
          <h4 className="text-[13px] font-medium tracking-widest uppercase mb-6 text-white">{t('footer.newsletter', 'Stay up to date')}</h4>
          <form action="https://air-aroma.us7.list-manage.com/subscribe/post?u=9972593963fdf7aff92d5ce9e&amp;id=210793dc09&amp;f_id=0064d0e4f0" method="post" target="_blank" className="flex flex-col w-full space-y-5" aria-label={t('footer.newsletterAria', 'Newsletter subscription')}>
            <label htmlFor="footer-email" className="sr-only">{t('footer.emailLabel', 'Email address for newsletter')}</label>
            <input 
              id="footer-email"
              type="email" 
              name="EMAIL"
              placeholder={t('footer.emailPlaceholder', 'Enter your email')}
              className="bg-transparent border-b border-white/20 pb-3 text-[15px] placeholder:font-light placeholder:text-white/40 focus:outline-none focus:border-brand-gold transition-colors w-full text-white rtl:text-right"
              required
              autoComplete="email"
              aria-required="true"
            />
            <button 
              type="submit" 
              className="bg-brand-gold text-brand-black px-8 py-4 text-[12px] font-medium tracking-widest uppercase hover:bg-white transition-colors w-max"
            >
              {t('footer.subscribe', 'Subscribe')}
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[12px] font-light text-white/40 space-y-4 md:space-y-0">
        <p dir="ltr">&copy; {new Date().getFullYear()} Air Aroma. {t('footer.rights', 'All rights reserved.')}</p>
        <div className="flex items-center space-x-3 cursor-pointer hover:text-white transition-colors rtl:space-x-reverse">
          <Link to={withLocale("/", locale)} aria-label={t('footer.selectCountry', 'Select country or region')}>{t('footer.selectCountry', 'Select country or region')}</Link>
          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-white/50">
            EN / AR
          </span>
        </div>
      </div>
    </footer>
  );
}
