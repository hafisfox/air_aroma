import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Air Aroma Clients",
  "description": "Discover the luxury brands that trust Air Aroma for their scent marketing.",
  "url": "https://air-aroma.com/clients"
};

export default function Clients() {
  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <SEOHead
        title="Clients | Air Aroma"
        description="Discover the luxury brands that trust Air Aroma for their scent marketing."
        canonicalPath="/clients"
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
            Our Clients
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Partnering with the world's most iconic luxury brands to create unforgettable olfactory experiences.
          </motion.p>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           <div className="flex items-center justify-center p-12 bg-[#111] aspect-square">
             <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2026/05/Raffles-logo.png" alt="Raffles Hotels & Resorts" className="w-full max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity" />
           </div>
           <div className="flex items-center justify-center p-12 bg-[#111] aspect-square">
             <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/max-mara.png" alt="Max Mara" className="w-full max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity" />
           </div>
           <div className="flex items-center justify-center p-12 bg-[#111] aspect-square">
             <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/aston-martin.png" alt="Aston Martin" className="w-full max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity" />
           </div>
           <div className="flex items-center justify-center p-12 bg-[#111] aspect-square">
             <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/cathay-pacific.png" alt="Cathay Pacific" className="w-full max-w-[140px] object-contain opacity-70 hover:opacity-100 transition-opacity" />
           </div>
        </div>
      </section>
    </div>
  );
}
