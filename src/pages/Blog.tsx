import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Air Aroma Blog",
  "description": "Insights on scent marketing, fragrance design, and brand experiences.",
  "url": "https://air-aroma.com/blog",
  "publisher": { "@type": "Organization", "name": "Air Aroma" }
};

export default function Blog() {
  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <SEOHead
        title="Blog | Air Aroma"
        description="Insights on scent marketing, fragrance design, and brand experiences."
        canonicalPath="/blog"
        structuredData={structuredData}
      />
      <section className="relative h-[40vh] flex flex-col justify-center px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            Blog
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Insights on scent marketing, fragrance design, and brand experiences.
          </motion.p>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <article>
            <div className="aspect-[16/9] bg-[#111] mb-6 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&q=80" alt="Sofitel Products" className="w-full h-full object-cover" />
            </div>
            <p className="uppercase tracking-widest text-[11px] font-medium text-white/40 mb-4">Case Study</p>
            <h2 className="text-2xl font-light mb-4">Sofitel and Air Aroma's Custom Fragrance Products</h2>
            <p className="text-white/50 font-light text-[15px] leading-relaxed">
              Sofitel Hotels & Resorts has long understood that luxury is a feeling, and not just a simple combination of parts...
            </p>
          </article>
          <article>
            <div className="aspect-[16/9] bg-[#111] mb-6 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80" alt="Who's Scenting" className="w-full h-full object-cover" />
            </div>
            <p className="uppercase tracking-widest text-[11px] font-medium text-white/40 mb-4">Industry Insights</p>
            <h2 className="text-2xl font-light mb-4">Who's Scenting?</h2>
            <p className="text-white/50 font-light text-[15px] leading-relaxed">
              We design scents for hotels, retail stores, financial institutions, fashion brands, events, residential homes and so much more...
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}
