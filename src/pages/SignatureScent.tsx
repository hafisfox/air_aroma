import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Signature Scent Design",
  "provider": { "@type": "Organization", "name": "Air Aroma" },
  "description": "Create your brand's unique signature scent with Air Aroma's master perfumers.",
  "url": "https://air-aroma.com/signature-scent",
  "serviceType": "Scent Design"
};

export default function SignatureScent() {
  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <SEOHead
        title="Signature Scent Design | Air Aroma"
        description="Create your brand's unique signature scent with Air Aroma's master perfumers."
        canonicalPath="/signature-scent"
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
            Signature Scent Design
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            A bespoke fragrance tells your brand's story without words. Collaborate with our master perfumers to design a scent exclusively yours.
          </motion.p>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="aspect-[4/3] bg-[#111] overflow-hidden">
            <img src="https://images.unsplash.com/photo-1596433809252-260c2745cf5b?auto=format&fit=crop&q=80" alt="Perfumer creating scent" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-3xl font-light mb-6">The Process</h2>
            <p className="text-white/50 font-light text-[15px] leading-relaxed mb-6">
              Our signature scent creation process begins with a deep dive into your brand's identity, target audience, and environment. We translate your brand values into olfactory notes.
            </p>
            <p className="text-white/50 font-light text-[15px] leading-relaxed">
              Once the brief is established, our perfumers craft several distinct concepts. Through an iterative review process, we refine the chosen direction until it perfectly encapsulates your brand essence.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
