import { motion } from "motion/react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "Air Aroma Products",
  "description": "Discover our premium fragrances, diffusers, and essential oils.",
  "url": "https://air-aroma.com/products"
};

export default function Products() {
  return (
    <div className="w-full bg-white text-black">
      <SEOHead
        title="Products | Air Aroma"
        description="Discover our premium fragrances, diffusers, and essential oils."
        canonicalPath="/products"
        structuredData={structuredData}
      />
      <section className="relative h-[40vh] flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            Products
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-neutral-600 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Explore our collection of bespoke fragrances, cutting-edge diffusers, and natural essential oils.
          </motion.p>
        </div>
      </section>
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <Link to="/fragrances" className="group">
             <div className="aspect-square bg-neutral-50 mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80" alt="Fragrances" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             </div>
             <h2 className="text-2xl font-light mb-2">Premium Fragrances</h2>
             <p className="text-neutral-500 font-light text-[15px]">Our collection of signature scents for luxury spaces.</p>
          </Link>
          <Link to="/diffusers" className="group">
             <div className="aspect-square bg-neutral-50 mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80" alt="Diffusers" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             </div>
             <h2 className="text-2xl font-light mb-2">Aroma Diffusers</h2>
             <p className="text-neutral-500 font-light text-[15px]">State-of-the-art cold air diffusion technology.</p>
          </Link>
          <Link to="/essential-oils" className="group">
             <div className="aspect-square bg-neutral-50 mb-6 overflow-hidden">
                <img src="https://images.unsplash.com/photo-1608528577891-eb0559d18e58?auto=format&fit=crop&q=80" alt="Essential Oils" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
             </div>
             <h2 className="text-2xl font-light mb-2">Essential Oils</h2>
             <p className="text-neutral-500 font-light text-[15px]">100% pure and natural essential oil blends.</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
