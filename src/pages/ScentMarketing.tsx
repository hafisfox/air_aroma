import { motion } from "motion/react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Scent Marketing Services",
    "provider": { "@type": "Organization", "name": "Air Aroma", "url": "https://air-aroma.com" },
    "description": "Professional scent marketing solutions for luxury hospitality, premium retail, and corporate environments.",
    "url": "https://air-aroma.com/scent-marketing",
    "serviceType": "Scent Marketing",
    "areaServed": { "@type": "Place", "name": "Worldwide" }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://air-aroma.com" },
      { "@type": "ListItem", "position": 2, "name": "Scent Marketing", "item": "https://air-aroma.com/scent-marketing" }
    ]
  }
];

const services = [
  {
    title: "Luxury Hospitality",
    desc: "From the grand lobbies to coastal resorts, scent welcomes guests with an unforgettable signature.",
    img: "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&q=80",
    alt: "Luxury hotel lobby — scent marketing for hospitality by Air Aroma"
  },
  {
    title: "Premium Retail",
    desc: "Enhance the shopping experience. Customers browse longer and spend more in beautifully scented environments.",
    img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80",
    alt: "Premium retail store — retail scent marketing by Air Aroma"
  },
  {
    title: "Corporate HQs",
    desc: "Create an atmosphere of focus and prestige. A subtle, refined scent speaks volumes about your corporate identity.",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80",
    alt: "Modern corporate office — corporate scent branding by Air Aroma"
  }
];

export default function ScentMarketing() {
  return (
    <div className="w-full bg-white text-black">
      <SEOHead
        title="Scent Marketing Services | Air Aroma — Olfactory Branding for Luxury Brands"
        description="Professional scent marketing solutions for luxury hospitality, premium retail, and corporate environments. Custom olfactory branding that increases dwell time and elevates brand perception."
        keywords="scent marketing, olfactory branding, hotel scent, retail scent marketing, corporate scent, sensory marketing"
        canonicalPath="/scent-marketing"
        structuredData={structuredData}
      />

      <section id="scent-marketing-hero" aria-label="Scent marketing introduction" className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            Scent Marketing
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-600 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Scent is the strongest sense tied to memory and emotion. We design olfactory experiences that increase dwell time, elevate brand perception, and forge lasting connections.
          </motion.p>
        </div>
      </section>

      <section id="scent-marketing-services" aria-label="Scent marketing service areas" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto border-b border-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {services.map((item, idx) => (
            <article key={idx} className="group">
              <div className="overflow-hidden mb-6 aspect-square">
                <img src={item.img} alt={item.alt} loading="lazy" className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105" />
              </div>
              <h2 className="text-xl font-light mb-4">{item.title}</h2>
              <p className="text-neutral-500 font-light text-[15px] leading-relaxed">{item.desc}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="scent-marketing-cta" aria-label="Contact call to action" className="py-24 px-6 lg:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl font-light mb-8">Ready to define your signature scent?</h2>
        <Link to="/contact" className="inline-block px-12 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-neutral-800 transition-colors" aria-label="Contact Air Aroma to design your signature scent">
          Contact Us
        </Link>
      </section>
    </div>
  );
}
