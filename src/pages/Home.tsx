import { motion } from "motion/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1605371924599-2d0365da1ae0?auto=format&fit=crop&q=80" 
            alt="Candle and packaging" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 flex flex-col items-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-2"
          >
            Sensory<br />
            <span className="text-white/60">/</span><br />
            Branding
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-white text-lg sm:text-xl font-light mt-4 tracking-wide"
          >
            Crafting signature fragrances for iconic brands.
          </motion.p>
        </div>
        <div className="absolute bottom-6 flex space-x-2 z-10">
          <div className="w-2 h-2 rounded-full bg-white"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
          <div className="w-2 h-2 rounded-full bg-white/40"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 lg:px-12 max-w-4xl mx-auto text-center border-b border-gray-100">
        <h2 className="text-[26px] sm:text-3xl font-light mb-8 text-neutral-900 leading-snug tracking-wide">
          Scent Marketing Agency, designing fragrances for luxury brands
        </h2>
        <div className="text-neutral-600 font-light text-[15px] sm:text-base leading-relaxed space-y-6 text-left md:text-center px-0 md:px-12">
          <p>
            Air Aroma is the leading scent marketing agency; we design custom fragrances for luxury brands around the world. With over 25 years experience offering scented air solutions, combined with an unrivaled global network, we help brands create memorable experiences for their customers through scent.
          </p>
          <p>
            Our expertise includes custom <Link to="#" className="underline decoration-1 underline-offset-4 hover:text-black">Signature Scent</Link> design, natural <Link to="#" className="underline decoration-1 underline-offset-4 hover:text-black">Essential Oils</Link> and premium <Link to="#" className="underline decoration-1 underline-offset-4 hover:text-black">Aroma Diffuser</Link> Systems. <Link to="/contact" className="underline decoration-1 underline-offset-4 hover:text-black">Contact</Link> us to create your brand's Signature Fragrance.
          </p>
        </div>
      </section>

      {/* Featured Clients */}
      <section className="py-24 px-6 lg:px-12 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-light mb-12 tracking-wide">Featured Clients</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-neutral-50 aspect-[4/3] flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">
            <h3 className="text-xl font-light z-10 p-8 group-hover:opacity-0 transition-opacity duration-300">Capella Hotels</h3>
            <img src="https://images.unsplash.com/photo-1620023605886-90f7ec62f270?auto=format&fit=crop&q=80" alt="Capella" className="absolute bottom-0 w-full h-1/2 object-cover transition-all duration-500 group-hover:h-full" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white z-20">View</div>
          </div>
          <div className="bg-neutral-50 aspect-[4/3] flex flex-col items-center justify-center relative group cursor-pointer overflow-hidden">
            <h3 className="text-xl font-light z-10 p-8 group-hover:opacity-0 transition-opacity duration-300">JLR</h3>
            <img src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&q=80" alt="JLR" className="absolute bottom-0 w-full h-1/2 object-cover transition-all duration-500 group-hover:h-full" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white z-20">View</div>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-neutral-50 aspect-square flex items-center justify-center p-8 text-neutral-400 font-serif tracking-widest hover:text-black transition-colors cursor-pointer">
            RAFFLES
          </div>
          <div className="bg-neutral-50 aspect-square flex items-center justify-center p-8 text-neutral-400 font-serif tracking-widest hover:text-black transition-colors cursor-pointer">
            MaxMara
          </div>
          <div className="bg-neutral-50 aspect-square flex flex-col items-center justify-center p-8 text-neutral-400 text-xs font-serif tracking-widest hover:text-black transition-colors cursor-pointer">
            <svg width="60" height="20" viewBox="0 0 100 30" fill="currentColor" className="mb-2"><path d="M50 0L100 20L50 15L0 20L50 0Z"/></svg>
            ASTON MARTIN
          </div>
          <div className="bg-neutral-50 aspect-square flex flex-col items-center justify-center p-8 text-neutral-400 text-xs font-serif tracking-widest hover:text-black transition-colors cursor-pointer">
             <svg width="40" height="20" viewBox="0 0 100 50" fill="currentColor" className="mb-2"><path d="M0 50L100 0C100 0 80 40 50 40C20 40 0 50 0 50Z"/></svg>
            CATHAY PACIFIC
          </div>
        </div>

        <Link to="/scent-marketing" className="block w-full bg-neutral-50 py-12 text-lg font-light hover:bg-neutral-100 transition-colors">
          View more about Scent Marketing
        </Link>
      </section>

      {/* Articles Section */}
      <section className="py-16 px-6 lg:px-12 max-w-6xl mx-auto border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
        <div className="text-center md:border-r border-gray-100 md:pr-8 flex flex-col items-center">
          <h3 className="text-xl font-light mb-6">Custom Fragrances</h3>
          <p className="text-neutral-600 font-light text-[15px] leading-relaxed mb-6">
            Luxury is a feeling, and not just a simple combination of parts. We build brand identity around a custom signature scent.
          </p>
          <Link to="/fragrances" className="underline decoration-1 underline-offset-4 hover:text-gray-600 font-light">Read More</Link>
        </div>
        <div className="text-center md:pl-8 flex flex-col items-center">
          <h3 className="text-xl font-light mb-6">Who's Scenting?</h3>
          <p className="text-neutral-600 font-light text-[15px] leading-relaxed mb-6">
            We design scents for hotels, retail stores, financial institutions, fashion brands, events, residential homes and so much more.
          </p>
          <Link to="/scent-marketing" className="underline decoration-1 underline-offset-4 hover:text-gray-600 font-light">Read More</Link>
        </div>
      </section>
    </div>
  );
}
