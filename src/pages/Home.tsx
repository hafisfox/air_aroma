import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Sensory\n/\nBranding",
    description: "Crafting signature fragrances for iconic brands.",
    image: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/the-lana-banner-1.jpg",
    link: "/scent-marketing",
    textColor: "text-white",
    descColor: "text-gray-200"
  },
  {
    title: "Custom Scent Design",
    description: "Discover your distinctive brand scent.",
    image: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/custom-scent-design-banner.jpg",
    link: "/signature-scent",
    textColor: "text-white",
    descColor: "text-gray-200"
  },
  {
    title: "Premium Scent Diffusion",
    description: "High-performance diffusers that make an impact.",
    image: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/premium-scent-diffusers-banner.jpg",
    link: "/diffusers",
    textColor: "text-white",
    descColor: "text-gray-300"
  },
  {
    title: "Fairmont Signature Scent",
    description: "Get the exclusive brand scented candles.",
    image: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2024/11/fairmont-candle-for-sale.jpg",
    link: "/store/candles/fairmont-iconic-white",
    textColor: "text-gray-200",
    descColor: "text-gray-400"
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[85vh] lg:h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="absolute inset-0 z-0"
          >
            <Link to={slides[currentSlide].link} className="block w-full h-full relative cursor-pointer group">
              <img 
                src={slides[currentSlide].image} 
                alt={slides[currentSlide].title} 
                className="w-full h-full object-cover object-center transition-transform duration-[10s] group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20"></div>
              
              <div className="absolute inset-0 z-10 text-center px-4 flex flex-col items-center justify-center">
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className={`${slides[currentSlide].textColor} text-[40px] sm:text-6xl font-light tracking-wide leading-tight mb-2 whitespace-pre-line`}
                >
                  {slides[currentSlide].title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                  className={`${slides[currentSlide].descColor} text-[17px] sm:text-[19px] font-light mt-4 tracking-wide`}
                >
                  {slides[currentSlide].description}
                </motion.p>
              </div>
            </Link>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <h2 className="text-[26px] sm:text-3xl font-light mb-8 text-neutral-900 leading-[1.3] tracking-wide">
          Scent Marketing Agency, designing fragrances for luxury brands
        </h2>
        <div className="text-neutral-600 font-light text-[15px] sm:text-[16px] leading-[1.8] space-y-6 text-left md:text-center px-0 md:px-12">
          <p>
            Air Aroma is the leading scent marketing agency; we design custom fragrances for luxury brands around the world. With over 25 years experience offering scented air solutions, combined with an unrivaled global network, we help brands create memorable experiences for their customers through scent.
          </p>
          <p>
            Our expertise includes custom <Link to="/signature-scent/" className="underline decoration-1 underline-offset-4 hover:text-black">Signature Scent</Link> design, natural <Link to="/essential-oils/" className="underline decoration-1 underline-offset-4 hover:text-black">Essential Oils</Link> and premium <Link to="/diffusers/" className="underline decoration-1 underline-offset-4 hover:text-black">Aroma Diffuser</Link> Systems. <Link to="/contact/" className="underline decoration-1 underline-offset-4 hover:text-black">Contact</Link> us to create your brand's Signature Fragrance.
          </p>
        </div>
      </section>

      {/* Separator line */}
      <div className="w-full max-w-6xl mx-auto border-t border-gray-100"></div>

      {/* Featured Clients */}
      <section className="py-20 px-6 lg:px-12 max-w-6xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-light mb-12 tracking-wide">Featured Clients</h2>
        
        {/* Large tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Link to="/clients/capella-hotels-scent/" className="bg-[#f2f2f2] aspect-[4/3] flex flex-col items-center justify-center relative group overflow-hidden">
            <h3 className="text-[22px] font-light z-10 p-8 group-hover:opacity-0 transition-opacity duration-300 tracking-wide">Capella Hotels</h3>
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2023/06/feature-capella-hotels.jpg" alt="Capella Hotels" className="absolute bottom-0 w-full h-[55%] object-cover transition-all duration-500 group-hover:h-full" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white z-20 font-light tracking-widest uppercase text-sm">View</div>
          </Link>
          <Link to="/clients/jlr-scent/" className="bg-[#f2f2f2] aspect-[4/3] flex flex-col items-center justify-center relative group overflow-hidden">
            <h3 className="text-[22px] font-light z-10 p-8 group-hover:opacity-0 transition-opacity duration-300 tracking-wide">JLR</h3>
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2021/05/UPDATED-JLR-feature.jpg" alt="JLR" className="absolute bottom-0 w-full h-[55%] object-cover transition-all duration-500 group-hover:h-full" />
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white z-20 font-light tracking-widest uppercase text-sm">View</div>
          </Link>
        </div>
        
        {/* Small logos */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
          <div className="bg-white border border-gray-100 aspect-square flex items-center justify-center p-8 group cursor-pointer transition-colors hover:bg-neutral-50">
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2026/05/Raffles-logo.png" alt="Raffles" className="w-full max-w-[150px] object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="bg-white border border-gray-100 aspect-square flex items-center justify-center p-8 group cursor-pointer transition-colors hover:bg-neutral-50">
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/max-mara.png" alt="Max Mara Logo" className="w-full max-w-[150px] object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="bg-white border border-gray-100 aspect-square flex flex-col items-center justify-center p-8 group cursor-pointer transition-colors hover:bg-neutral-50">
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/aston-martin.png" alt="Aston Martin Logo" className="w-full max-w-[150px] object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="bg-white border border-gray-100 aspect-square flex flex-col items-center justify-center p-8 group cursor-pointer transition-colors hover:bg-neutral-50">
             <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/cathay-pacific.png" alt="Cathay Pacific Logo" className="w-full max-w-[150px] object-contain opacity-70 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>

        <Link to="/clients/" className="block w-full border border-gray-100 py-12 text-[15px] font-light hover:bg-neutral-50 transition-colors text-black tracking-wide">
          View more clients
        </Link>
      </section>

      {/* Two column articles section */}
      <section className="py-20 px-6 lg:px-12 max-w-6xl mx-auto border-t border-gray-100 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8">
        <div className="md:border-r border-gray-100 md:pr-12 flex flex-col items-start">
          <h3 className="text-xl font-light mb-4"><Link to="/blog/sofitel-products/" className="hover:text-gray-600 transition-colors">Sofitel and Air Aroma's Custom Fragrance Products</Link></h3>
          <p className="text-neutral-500 font-light text-[15px] leading-relaxed mb-6">
            Sofitel Hotels & Resorts has long understood that luxury is a feeling, and not just a simple combination of parts. As the largest international hospitality brand rooted in French heritage, Sofitel has built its identity around...
          </p>
          <Link to="/blog/sofitel-products/" className="underline decoration-1 underline-offset-4 hover:text-gray-600 font-light text-sm tracking-wide">Read More</Link>
        </div>
        <div className="md:pl-4 flex flex-col items-start">
          <h3 className="text-xl font-light mb-4"><Link to="/scenting/" className="hover:text-gray-600 transition-colors">Who’s Scenting?</Link></h3>
          <p className="text-neutral-500 font-light text-[15px] leading-relaxed mb-6">
            We design scents for hotels, retail stores, financial institutions, fashion brands, events, residential homes and so much more.
          </p>
          <Link to="/scenting/" className="underline decoration-1 underline-offset-4 hover:text-gray-600 font-light text-sm tracking-wide">Read More</Link>
        </div>
      </section>
    </div>
  );
}
