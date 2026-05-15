import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";
import { useTranslation } from "react-i18next";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Air Aroma",
    "description": "Learn about Air Aroma, the pioneering scent marketing agency with 25+ years of experience designing custom fragrances for luxury brands worldwide.",
    "url": "https://air-aroma.com/about",
    "mainEntity": {
      "@type": "Organization",
      "name": "Air Aroma",
      "url": "https://air-aroma.com",
      "foundingDate": "2000",
      "description": "Premium scent marketing agency designing custom fragrances for luxury brands worldwide.",
      "knowsAbout": ["Scent Marketing", "Custom Fragrance Design", "Cold Air Diffusion", "Olfactory Branding"],
      "numberOfEmployees": { "@type": "QuantitativeValue", "minValue": 50 }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://air-aroma.com" },
      { "@type": "ListItem", "position": 2, "name": "About", "item": "https://air-aroma.com/about" }
    ]
  }
];

export default function About() {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <SEOHead
        title="About Air Aroma | Global Scent Marketing Leader — 25+ Years of Expertise"
        description="Learn about Air Aroma, the pioneering scent marketing agency with 25+ years of experience. We combine international expertise with local insights to design olfactory profiles for luxury brands worldwide."
        keywords="about Air Aroma, scent marketing agency, fragrance company, olfactory branding, sensory experience design, master perfumers, cold air diffusion technology"
        canonicalPath="/about"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section id="about-hero" aria-label="About Air Aroma" className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-white/10 mt-20 md:mt-0">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6 text-white"
          >
            {t("about.title", "About Us")}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            {t("about.subtitle", "Air Aroma was founded with a single purpose: to elevate the standard of environmental design through the power of scent.")}
          </motion.p>
        </div>
      </section>

      <section id="about-story" aria-label="Our story and vision" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="md:pr-12 rtl:pr-0 md:rtl:pl-12"
          >
            <h2 className="text-3xl font-light mb-8 leading-tight text-white whitespace-pre-line">
              {t("about.storyTitle", "Pioneering the Future\nof Sensory Experience")}
            </h2>
            <p className="text-white/60 font-light leading-[1.8] mb-6 text-[15px]">
              {t("about.storyP1", "As the global demand for immersive experiences grows, Air Aroma leads the scent marketing industry by combining international expertise with specialized local insights. We design olfactory profiles that give spaces a distinctive, memorable identity.")}
            </p>
            <p className="text-white/60 font-light leading-[1.8] text-[15px]">
              {t("about.storyP2", "We understand the nuanced role that scent plays in shaping environments. From welcoming guests with traditional notes to modernizing retail spaces with bespoke blends, our work touches millions of lives every day.")}
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="overflow-hidden bg-[#111] aspect-[4/3] group relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1541888048496-e2a1e6417721?auto=format&fit=crop&q=80" 
              alt="Modern architectural interior representing Air Aroma's vision for sensory design in luxury spaces" 
              loading="lazy"
              className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-[1.5s] ease-out group-hover:scale-105"
            />
          </motion.div>
        </div>
      </section>

      <section id="why-air-aroma" aria-label="Why choose Air Aroma" className="py-32 px-6 lg:px-12 text-center max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-light mb-20 tracking-wide text-white"
        >
          {t("about.whyChoose", "Why Choose Air Aroma?")}
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16">
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-px bg-white/20 mb-8 transition-colors group-hover:bg-brand-gold" aria-hidden="true"></div>
            <h3 className="text-lg font-light mb-4 text-white">{t("about.feature1Title", "Local Expertise")}</h3>
            <p className="text-white/50 font-light leading-[1.8] text-[14px] max-w-sm">
              {t("about.feature1Desc", "Headquartered with dedicated teams for rapid installation and uncompromising maintenance.")}
            </p>
          </motion.article>
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-px bg-white/20 mb-8 transition-colors group-hover:bg-brand-gold" aria-hidden="true"></div>
            <h3 className="text-lg font-light mb-4 text-white">{t("about.feature2Title", "Master Perfumers")}</h3>
            <p className="text-white/50 font-light leading-[1.8] text-[14px] max-w-sm">
              {t("about.feature2Desc", "Our bespoke fragrances are crafted in collaboration with the world's leading boutique fragrance houses.")}
            </p>
          </motion.article>
          <motion.article 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center group"
          >
            <div className="w-16 h-px bg-white/20 mb-8 transition-colors group-hover:bg-brand-gold" aria-hidden="true"></div>
            <h3 className="text-lg font-light mb-4 text-white">{t("about.feature3Title", "Cutting-Edge Tech")}</h3>
            <p className="text-white/50 font-light leading-[1.8] text-[14px] max-w-sm">
              {t("about.feature3Desc", "We deploy advanced, reliable cold-air diffusion systems designed for extensive use and exact control.")}
            </p>
          </motion.article>
        </div>
      </section>
    </div>
  );
}
