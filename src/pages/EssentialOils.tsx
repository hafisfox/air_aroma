import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Air Aroma Essential Oils",
  "description": "100% pure and natural essential oil blends.",
  "url": "https://air-aroma.com/essential-oils"
};

export default function EssentialOils() {
  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <SEOHead
        title="Essential Oils | Air Aroma"
        description="100% pure and natural essential oil blends."
        canonicalPath="/essential-oils"
        structuredData={structuredData}
      />
      <section className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            Essential Oils
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Sourced from the finest natural ingredients across the globe, our 100% pure essential oil blends offer aromachology benefits and sensory delight.
          </motion.p>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-light mb-6">Nature's Essence</h2>
            <p className="text-white/50 font-light text-[15px] leading-relaxed mb-6">
              Our essential oils are cold-pressed or steam distilled to preserve their therapeutic properties. We offer single notes and complex blends designed to invigorate, relax, or balance your environment.
            </p>
            <p className="text-white/50 font-light text-[15px] leading-relaxed">
              Ideal for wellness centers, spas, and residential spaces seeking the authentic touch of nature.
            </p>
          </div>
          <div className="aspect-[4/3] bg-[#111] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1608528577891-eb0559d18e58?auto=format&fit=crop&q=80" alt="Essential oils" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>
    </div>
  );
}
