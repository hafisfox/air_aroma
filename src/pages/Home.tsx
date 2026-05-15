import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

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
    description: "Discover our exclusive brand scented candles.",
    image: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2024/11/fairmont-candle-for-sale.jpg",
    link: "/fragrances",
    textColor: "text-gray-200",
    descColor: "text-gray-400"
  }
];

const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Air Aroma — Premium Scent Marketing Agency",
    "description": "Leading scent marketing agency designing custom fragrances for luxury brands worldwide. 25+ years of expertise in signature scent design, essential oils, and premium aroma diffuser systems.",
    "url": "https://air-aroma.com",
    "mainEntity": {
      "@type": "Organization",
      "name": "Air Aroma",
      "url": "https://air-aroma.com"
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://air-aroma.com"
      }
    ]
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(1);

  // Keep slides functional but remove auto-play to match static reference


  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <SEOHead
        title="Air Aroma — Premium Scent Marketing Agency | Custom Fragrances & Luxury Diffusers"
        description="Air Aroma is the leading scent marketing agency designing custom fragrances for luxury brands worldwide. 25+ years of expertise in signature scent design, essential oils, and premium aroma diffuser systems."
        keywords="scent marketing, aroma diffuser, custom fragrance, signature scent, luxury brands, essential oils, olfactory branding, scent design, Air Aroma, scent marketing agency"
        canonicalPath="/"
        structuredData={homeStructuredData}
      />

      {/* Hero Section */}
      <section id="hero" aria-label="Featured scent marketing campaigns" className="relative h-[85vh] lg:h-[90vh] flex items-center justify-center overflow-hidden bg-black">
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
                alt={`Air Aroma ${slides[currentSlide].title} — ${slides[currentSlide].description}`}
                loading="eager"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-105 transition-transform duration-[20s] ease-out"
              />
              <div className="absolute inset-0 bg-black/40"></div>
              
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

        <div className="absolute bottom-6 flex space-x-3 z-20" role="tablist" aria-label="Hero slideshow controls">
          {slides.map((slide, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              role="tab"
              aria-selected={index === currentSlide}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-white scale-125" : "bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`View slide ${index + 1}: ${slide.title}`}
            />
          ))}
        </div>
      </section>

      {/* Intro Section */}
      <section id="about-intro" aria-label="About Air Aroma" className="py-32 px-6 lg:px-12 max-w-4xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-[26px] sm:text-3xl font-light mb-12 text-white leading-[1.4] tracking-wide"
        >
          Scent Marketing Agency, designing fragrances for luxury brands
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white/60 font-light text-[15px] sm:text-[17px] leading-[1.9] space-y-8 text-left md:text-center px-0 md:px-12"
        >
          <p>
            Air Aroma is the leading scent marketing agency; we design custom fragrances for luxury brands around the world. With over 25 years experience offering scented air solutions, combined with an unrivaled global network, we help brands create memorable experiences for their customers through scent.
          </p>
          <p>
            Our expertise includes custom <Link to="/signature-scent/" className="text-white hover:text-brand-gold transition-colors">Signature Scent</Link> design, natural <Link to="/essential-oils/" className="text-white hover:text-brand-gold transition-colors">Essential Oils</Link> and premium <Link to="/diffusers/" className="text-white hover:text-brand-gold transition-colors">Aroma Diffuser</Link> Systems. <Link to="/contact/" className="text-white hover:text-brand-gold transition-colors">Contact</Link> us to create your brand's Signature Fragrance.
          </p>
        </motion.div>
      </section>

      {/* Separator line */}
      <div className="w-full max-w-6xl mx-auto border-t border-white/10" role="separator"></div>

      {/* Featured Clients */}
      <section id="featured-clients" aria-label="Featured clients" className="py-32 px-6 lg:px-12 max-w-6xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-light mb-16 tracking-wide text-white"
        >
          Featured Clients
        </motion.h2>
        
        {/* Large tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Link to="/clients" className="bg-[#111] aspect-[4/3] flex flex-col items-center justify-center relative group overflow-hidden" aria-label="View Capella Hotels scent marketing case study">
            <h3 className="text-[22px] font-light z-10 p-8 text-white group-hover:opacity-0 transition-opacity duration-300 tracking-wide">Capella Hotels</h3>
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2023/06/feature-capella-hotels.jpg" alt="Capella Hotels luxury lobby with Air Aroma custom scent diffusion" loading="lazy" className="absolute bottom-0 w-full h-[55%] object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:h-full group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white z-20 font-medium tracking-[0.2em] uppercase text-xs">View</div>
          </Link>
          <Link to="/clients" className="bg-[#111] aspect-[4/3] flex flex-col items-center justify-center relative group overflow-hidden" aria-label="View JLR scent marketing case study">
            <h3 className="text-[22px] font-light z-10 p-8 text-white group-hover:opacity-0 transition-opacity duration-300 tracking-wide">JLR</h3>
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2021/05/UPDATED-JLR-feature.jpg" alt="JLR Jaguar Land Rover showroom with Air Aroma signature scent" loading="lazy" className="absolute bottom-0 w-full h-[55%] object-cover transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] group-hover:h-full group-hover:scale-105" />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center text-white z-20 font-medium tracking-[0.2em] uppercase text-xs">View</div>
          </Link>
        </div>
        
        {/* Small logos & Link block */}
        <div className="bg-[#0f0f0f] w-full flex flex-col mt-6 border border-white/5">
          <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            <div className="flex items-center justify-center p-12 md:p-16 border-b border-r border-white/5 md:border-b-0 group cursor-pointer">
              <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2026/05/Raffles-logo.png" alt="Raffles Hotels & Resorts — Air Aroma client" loading="lazy" width="140" height="60" className="w-full max-w-[140px] object-contain opacity-40 group-hover:opacity-100 transition-opacity brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center p-12 md:p-16 border-b border-white/5 md:border-b-0 md:border-r group cursor-pointer">
              <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/max-mara.png" alt="Max Mara fashion brand — Air Aroma client" loading="lazy" width="140" height="60" className="w-full max-w-[140px] object-contain opacity-40 group-hover:opacity-100 transition-opacity brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center p-12 md:p-16 border-r border-white/5 md:border-r group cursor-pointer">
              <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/aston-martin.png" alt="Aston Martin luxury automotive — Air Aroma client" loading="lazy" width="140" height="60" className="w-full max-w-[140px] object-contain opacity-40 group-hover:opacity-100 transition-opacity brightness-0 invert" />
            </div>
            <div className="flex items-center justify-center p-12 md:p-16 group cursor-pointer">
               <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/cathay-pacific.png" alt="Cathay Pacific Airways — Air Aroma client" loading="lazy" width="140" height="60" className="w-full max-w-[140px] object-contain opacity-40 group-hover:opacity-100 transition-opacity brightness-0 invert" />
            </div>
          </div>
          
          <div className="w-full h-px bg-white/5"></div>
          
          <Link to="/clients/" className="block w-full py-10 text-center text-[13px] tracking-widest uppercase font-medium text-white/50 hover:text-brand-gold transition-colors">
            View more clients
          </Link>
        </div>
      </section>

      {/* Two column articles section */}
      <section id="latest-articles" aria-label="Latest articles and insights" className="py-24 px-6 lg:px-12 max-w-6xl mx-auto border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-16">
        <motion.article 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:border-r border-white/10 md:pr-16 flex flex-col items-start"
        >
          <h3 className="text-2xl font-light mb-6"><Link to="/blog" className="text-white hover:text-brand-gold transition-colors">Sofitel and Air Aroma's Custom Fragrance Products</Link></h3>
          <p className="text-white/50 font-light text-[15px] leading-[1.8] mb-8">
            Sofitel Hotels & Resorts has long understood that luxury is a feeling, and not just a simple combination of parts. As the largest international hospitality brand rooted in French heritage, Sofitel has built its identity around...
          </p>
          <Link to="/blog" className="text-brand-gold hover:text-white font-medium text-xs tracking-[0.2em] uppercase transition-colors" aria-label="Read more about Sofitel and Air Aroma's custom fragrance products">Read More</Link>
        </motion.article>
        <motion.article 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:pl-8 flex flex-col items-start"
        >
          <h3 className="text-2xl font-light mb-6"><Link to="/clients" className="text-white hover:text-brand-gold transition-colors">Who's Scenting?</Link></h3>
          <p className="text-white/50 font-light text-[15px] leading-[1.8] mb-8">
            We design scents for hotels, retail stores, financial institutions, fashion brands, events, residential homes and so much more.
          </p>
          <Link to="/clients" className="text-brand-gold hover:text-white font-medium text-xs tracking-[0.2em] uppercase transition-colors" aria-label="Read more about who uses scent marketing">Read More</Link>
        </motion.article>
      </section>
    </div>
  );
}
