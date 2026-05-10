import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Air Aroma Diffuser Systems",
    "description": "State-of-the-art cold air diffusion technology for commercial and luxury spaces.",
    "url": "https://air-aroma.com/diffusers",
    "numberOfItems": 2,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Product",
          "name": "HVAC Integration Diffuser",
          "description": "Enterprise-grade HVAC diffusers that connect directly to central air conditioning systems. Covers up to 10,000 m³.",
          "brand": { "@type": "Brand", "name": "Air Aroma" },
          "category": "Commercial Aroma Diffuser"
        }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": {
          "@type": "Product",
          "name": "Standalone Architectural Diffuser",
          "description": "Sleek anodized aluminum standalone units for retail boutiques, VIP rooms, and luxury residences.",
          "brand": { "@type": "Brand", "name": "Air Aroma" },
          "category": "Standalone Aroma Diffuser"
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://air-aroma.com" },
      { "@type": "ListItem", "position": 2, "name": "Diffusers", "item": "https://air-aroma.com/diffusers" }
    ]
  }
];

export default function Diffusers() {
  return (
    <div className="w-full bg-white text-black">
      <SEOHead
        title="Aroma Diffusers | Air Aroma — Cold Air Diffusion Technology"
        description="State-of-the-art cold air diffusion technology by Air Aroma. HVAC-integrated and standalone aroma diffusers engineered for efficiency and designed for absolute discretion in commercial and luxury spaces."
        keywords="aroma diffuser, cold air diffusion, HVAC scent diffuser, commercial diffuser, luxury diffuser, scent machine, Air Aroma diffuser, standalone diffuser"
        canonicalPath="/diffusers"
        structuredData={structuredData}
      />

      <section id="diffusers-hero" aria-label="Aroma diffusers introduction" className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            Aroma Diffusers
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-600 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            State-of-the-art cold air diffusion technology. Engineered for efficiency, designed for absolute discretion.
          </motion.p>
        </div>
      </section>

      <section id="diffuser-products" aria-label="Diffuser product range" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <article className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
          <div className="aspect-[4/3] overflow-hidden bg-neutral-50">
            <img 
              src="https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80" 
              alt="Air Aroma HVAC-integrated cold air diffusion system for large commercial spaces"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:pl-12">
            <p className="uppercase tracking-widest text-[11px] font-medium text-neutral-400 mb-4">Enterprise Grade</p>
            <h2 className="text-3xl font-light mb-6">HVAC Integration</h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-8 text-[15px]">
              Our flagship HVAC diffusers connect directly to central air conditioning systems. Perfect for massive spaces like mall atriums, mega-hotels, and sprawling office complexes. 
            </p>
            <ul className="space-y-4 text-neutral-500 font-light text-[14px]" aria-label="HVAC diffuser features">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-4 mt-2" aria-hidden="true"></span> 
                Covers up to 10,000 m³ using high-efficiency airflow
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-4 mt-2" aria-hidden="true"></span> 
                Nano-droplet technology leaves no residue on ducts or furnishings
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-4 mt-2" aria-hidden="true"></span> 
                Fully programmable via smart app with multi-zone control
              </li>
            </ul>
          </div>
        </article>

        <article className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="md:order-last aspect-[4/3] overflow-hidden bg-neutral-50">
            <img 
              src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80" 
              alt="Air Aroma standalone architectural aroma diffuser in anodized aluminum finish"
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="md:pr-12">
            <p className="uppercase tracking-widest text-[11px] font-medium text-neutral-400 mb-4">Architectural Series</p>
            <h2 className="text-3xl font-light mb-6">Standalone Units</h2>
            <p className="text-neutral-500 font-light leading-relaxed mb-8 text-[15px]">
              Sleek, anodized aluminum designs that look like high-end decor. These units offer flexible placement for retail boutiques, VIP rooms, and luxury residences.
            </p>
            <ul className="space-y-4 text-neutral-500 font-light text-[14px]" aria-label="Standalone diffuser features">
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-4 mt-2" aria-hidden="true"></span> 
                Plug-and-play simplicity with wall mounting options
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-4 mt-2" aria-hidden="true"></span> 
                Whisper-quiet operation undetectable by guests
              </li>
              <li className="flex items-start">
                <span className="w-1.5 h-1.5 bg-neutral-300 rounded-full mr-4 mt-2" aria-hidden="true"></span> 
                Precision intensity control for dynamic environments
              </li>
            </ul>
          </div>
        </article>
      </section>
    </div>
  );
}
