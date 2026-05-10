import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";

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
  return (
    <div className="w-full bg-white text-black">
      <SEOHead
        title="About Air Aroma | Global Scent Marketing Leader — 25+ Years of Expertise"
        description="Learn about Air Aroma, the pioneering scent marketing agency with 25+ years of experience. We combine international expertise with local insights to design olfactory profiles for luxury brands worldwide."
        keywords="about Air Aroma, scent marketing agency, fragrance company, olfactory branding, sensory experience design, master perfumers, cold air diffusion technology"
        canonicalPath="/about"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section id="about-hero" aria-label="About Air Aroma" className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            About Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-600 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Air Aroma was founded with a single purpose: to elevate the standard of environmental design through the power of scent.
          </motion.p>
        </div>
      </section>

      <section id="about-story" aria-label="Our story and vision" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="md:pr-12">
            <h2 className="text-3xl font-light mb-8 leading-tight">
              Pioneering the Future<br/>of Sensory Experience
            </h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-6 text-[15px]">
              As the global demand for immersive experiences grows, Air Aroma leads the scent marketing industry by combining international expertise with specialized local insights. We design olfactory profiles that give spaces a distinctive, memorable identity.
            </p>
            <p className="text-neutral-500 font-light leading-relaxed text-[15px]">
              We understand the nuanced role that scent plays in shaping environments. From welcoming guests with traditional notes to modernizing retail spaces with bespoke blends, our work touches millions of lives every day.
            </p>
          </div>
          <div className="overflow-hidden bg-neutral-50 aspect-[4/3]">
            <img 
              src="https://images.unsplash.com/photo-1541888048496-e2a1e6417721?auto=format&fit=crop&q=80" 
              alt="Modern architectural interior representing Air Aroma's vision for sensory design in luxury spaces" 
              loading="lazy"
              className="w-full h-full object-cover grayscale opacity-80"
            />
          </div>
        </div>
      </section>

      <section id="why-air-aroma" aria-label="Why choose Air Aroma" className="py-24 px-6 lg:px-12 text-center max-w-7xl mx-auto">
        <h2 className="text-2xl font-light mb-16 tracking-wide">Why Choose Air Aroma?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
          <article className="flex flex-col items-center">
            <div className="w-16 h-px bg-black mb-8" aria-hidden="true"></div>
            <h3 className="text-lg font-light mb-4">Local Expertise</h3>
            <p className="text-neutral-500 font-light leading-relaxed text-[14px] max-w-sm">
              Headquartered with dedicated teams for rapid installation and uncompromising maintenance.
            </p>
          </article>
          <article className="flex flex-col items-center">
            <div className="w-16 h-px bg-black mb-8" aria-hidden="true"></div>
            <h3 className="text-lg font-light mb-4">Master Perfumers</h3>
            <p className="text-neutral-500 font-light leading-relaxed text-[14px] max-w-sm">
              Our bespoke fragrances are crafted in collaboration with the world's leading boutique fragrance houses.
            </p>
          </article>
          <article className="flex flex-col items-center">
            <div className="w-16 h-px bg-black mb-8" aria-hidden="true"></div>
            <h3 className="text-lg font-light mb-4">Cutting-Edge Tech</h3>
            <p className="text-neutral-500 font-light leading-relaxed text-[14px] max-w-sm">
              We deploy advanced, reliable cold-air diffusion systems designed for extensive use and exact control.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
