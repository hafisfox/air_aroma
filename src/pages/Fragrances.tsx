import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";

const fragrances = [
  {
    name: "Royal Oud",
    notes: ["Agarwood", "Amber", "Saffron"],
    desc: "A deep, majestic fragrance that pays homage to Arabian heritage. Perfect for VIP lounges and luxury hotel lobbies.",
    img: "https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80",
    alt: "Royal Oud fragrance — rich agarwood and amber scent by Air Aroma for VIP lounges"
  },
  {
    name: "Taif Blossom",
    notes: ["Taif Rose", "Bergamot", "White Musk"],
    desc: "Elegant and welcoming. This floral arrangement brings a sense of refined luxury to spas and boutique hotels.",
    img: "https://images.unsplash.com/photo-1600857313093-68d1f73d81b3?auto=format&fit=crop&q=80",
    alt: "Taif Blossom fragrance — Taif rose and bergamot scent by Air Aroma for luxury spas"
  },
  {
    name: "Desert Night",
    notes: ["Sandalwood", "Cardamom", "Vanilla"],
    desc: "Warm and inviting, capturing the mysterious allure of the evening. Ideal for premium retail spaces.",
    img: "https://images.unsplash.com/photo-1596433809252-260c2745cf5b?auto=format&fit=crop&q=80",
    alt: "Desert Night fragrance — sandalwood and cardamom scent by Air Aroma for retail"
  },
  {
    name: "Oasis Breeze",
    notes: ["Mandarin", "Jasmine", "Marine Notes"],
    desc: "Crisp and energizing. A modern scent profile designed for corporate environments and premium fitness centers.",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&q=80",
    alt: "Oasis Breeze fragrance — mandarin and jasmine scent by Air Aroma for corporate spaces"
  }
];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Air Aroma Premium Fragrances Collection",
    "description": "Bespoke fragrances crafted from the finest ingredients for luxury spaces.",
    "url": "https://air-aroma.com/fragrances",
    "numberOfItems": fragrances.length,
    "itemListElement": fragrances.map((f, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": f.name,
        "description": f.desc,
        "image": f.img,
        "brand": { "@type": "Brand", "name": "Air Aroma" },
        "category": "Premium Fragrance"
      }
    }))
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://air-aroma.com" },
      { "@type": "ListItem", "position": 2, "name": "Fragrances", "item": "https://air-aroma.com/fragrances" }
    ]
  }
];

export default function Fragrances() {
  return (
    <div className="w-full bg-white text-black">
      <SEOHead
        title="Premium Fragrances Collection | Air Aroma — Bespoke Scent Design"
        description="Discover Air Aroma's collection of bespoke fragrances crafted from the finest ingredients. From rich Arabian oud to fresh citrus blends, perfectly tailored for luxury hotels, retail, and corporate spaces."
        keywords="premium fragrances, bespoke scent, oud fragrance, luxury scent, hotel fragrance, custom perfume, Air Aroma fragrances, signature scent collection"
        canonicalPath="/fragrances"
        structuredData={structuredData}
      />

      <section id="fragrances-hero" aria-label="Fragrances collection introduction" className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            Fragrances
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-600 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Crafted for discerning tastes. Our palette ranges from rich woods and resins, to fresh, contemporary citrus blends perfectly tailored for premium spaces.
          </motion.p>
        </div>
      </section>

      <section id="fragrances-collection" aria-label="Fragrance collection" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {fragrances.map((fragrance, idx) => (
            <article key={idx} className="group flex flex-col md:flex-row gap-8 items-center border-b border-gray-100 pb-12">
               <div className="w-full md:w-1/2 overflow-hidden aspect-square flex-shrink-0 bg-neutral-50">
                  <img 
                    src={fragrance.img} 
                    alt={fragrance.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100"
                  />
               </div>
               <div className="w-full md:w-1/2">
                  <h2 className="text-2xl font-light mb-2">{fragrance.name}</h2>
                  <p className="text-neutral-400 uppercase tracking-widest text-[11px] mb-6 font-medium">
                    {fragrance.notes.join(" • ")}
                  </p>
                  <p className="text-neutral-500 font-light leading-relaxed text-[15px]">
                    {fragrance.desc}
                  </p>
               </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
