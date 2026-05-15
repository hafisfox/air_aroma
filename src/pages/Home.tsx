import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation();
  
  // Scrollytelling refs and transforms
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Smooth the scroll progress for cleaner animations
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Transforms for the background media (video/image scaling)
  const mediaScale = useTransform(smoothProgress, [0, 0.5, 1], [1, 1.2, 1.4]);
  const mediaOpacity = useTransform(smoothProgress, [0, 0.8, 1], [0.6, 0.3, 0]);

  // Transforms for Text Group 1 (Intro)
  const text1Opacity = useTransform(smoothProgress, [0, 0.15, 0.3], [1, 1, 0]);
  const text1Y = useTransform(smoothProgress, [0, 0.3], [0, -50]);

  // Transforms for Text Group 2 (Essence)
  const text2Opacity = useTransform(smoothProgress, [0.3, 0.45, 0.65], [0, 1, 0]);
  const text2Y = useTransform(smoothProgress, [0.3, 0.45, 0.65], [50, 0, -50]);

  // Transforms for Text Group 3 (Craft)
  const text3Opacity = useTransform(smoothProgress, [0.65, 0.8, 1], [0, 1, 1]);
  const text3Y = useTransform(smoothProgress, [0.65, 0.8, 1], [50, 0, 0]);

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <SEOHead
        title="Air Aroma — Premium Scent Marketing Agency | Custom Fragrances & Luxury Diffusers"
        description="Air Aroma is the leading scent marketing agency designing custom fragrances for luxury brands worldwide. 25+ years of expertise in signature scent design, essential oils, and premium aroma diffuser systems."
        keywords="scent marketing, aroma diffuser, custom fragrance, signature scent, luxury brands, essential oils, olfactory branding, scent design, Air Aroma, scent marketing agency"
        canonicalPath="/"
        structuredData={homeStructuredData}
      />

      {/* Scrollytelling Hero Section */}
      <section ref={containerRef} className="relative h-[300vh] bg-black">
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Background Media Space - Setup for Video or Motion */}
          <motion.div 
            style={{ scale: mediaScale, opacity: mediaOpacity }}
            className="absolute inset-0 w-full h-full"
          >
            {/* 
              Perfume Video Space. 
              Currently using an image from Air Aroma with motion, but perfectly setup for a looping <video>
            */}
            <img 
              src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2024/11/fairmont-candle-for-sale.jpg" 
              alt="Air Aroma Luxury Fragrance"
              className="w-full h-full object-cover object-center"
            />
            {/* 
            Example Video Tag Setup:
            <video 
              autoPlay 
              loop 
              muted 
              playsInline 
              className="w-full h-full object-cover object-center"
            >
              <source src="/path/to/perfume-video.mp4" type="video/mp4" />
            </video>
            */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/80"></div>
          </motion.div>

          {/* Text Overlays */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex flex-col items-center justify-center text-center h-full">
            
            {/* Phase 1: Intro */}
            <motion.div 
              style={{ opacity: text1Opacity, y: text1Y }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-white font-serif mb-6">
                Sensory / Branding
              </h1>
              <p className="text-lg md:text-xl text-white/80 font-light tracking-widest uppercase">
                Crafting signature fragrances for iconic brands
              </p>
            </motion.div>

            {/* Phase 2: The Essence */}
            <motion.div 
              style={{ opacity: text2Opacity, y: text2Y }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h2 className="text-4xl md:text-6xl font-light tracking-wide text-white font-serif mb-6">
                Custom Scent Design
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
                Discover your distinctive brand scent. With over 25 years experience, we design custom fragrances that capture the pure essence of luxury.
              </p>
            </motion.div>

            {/* Phase 3: The Craft */}
            <motion.div 
              style={{ opacity: text3Opacity, y: text3Y }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <h2 className="text-4xl md:text-6xl font-light tracking-wide text-white font-serif mb-6">
                Premium Scent Diffusion
              </h2>
              <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed mb-10">
                High-performance diffusers that make an impact, combining elegant aesthetics with state-of-the-art cold-air diffusion technology.
              </p>
              <Link to="/diffusers" className="border border-white/30 hover:border-white/80 hover:bg-white/10 text-white px-8 py-4 tracking-[0.2em] uppercase text-sm transition-all duration-300">
                Explore The Collection
              </Link>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Featured Products / Collections */}
      <section id="collections" className="py-32 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-medium tracking-[0.3em] uppercase text-brand-gold mb-4"
          >
            Curated For You
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-light text-white"
          >
            The Masterpiece Collection
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Signature Fragrances",
              desc: "Bespoke olfactory identities for luxury spaces.",
              img: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/custom-scent-design-banner.jpg",
              link: "/signature-scent"
            },
            {
              title: "Essential Oils",
              desc: "100% pure, natural, and therapeutic grade.",
              img: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/the-lana-banner-1.jpg",
              link: "/essential-oils"
            },
            {
              title: "Aroma Diffusers",
              desc: "Sleek, powerful systems for any environment.",
              img: "https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2025/08/premium-scent-diffusers-banner.jpg",
              link: "/diffusers"
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <Link to={item.link} className="group block">
                <div className="relative aspect-[4/5] overflow-hidden mb-6 bg-[#111]">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
                <h4 className="text-2xl font-serif font-light text-white mb-2">{item.title}</h4>
                <p className="text-white/50 font-light">{item.desc}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Clients (Refined for luxury feel) */}
      <section id="featured-clients" className="py-24 px-6 border-t border-white/5 bg-[#050505]">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-white/40 mb-12">
            Trusted by the world's finest brands
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale">
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2026/05/Raffles-logo.png" alt="Raffles" className="h-8 md:h-10 object-contain invert" />
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/max-mara.png" alt="Max Mara" className="h-6 md:h-8 object-contain invert" />
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/aston-martin.png" alt="Aston Martin" className="h-8 md:h-10 object-contain invert" />
            <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/cathay-pacific.png" alt="Cathay Pacific" className="h-10 md:h-12 object-contain invert" />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-32 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2023/06/feature-capella-hotels.jpg')] bg-cover bg-center opacity-20"></div>
        <div className="absolute inset-0 bg-black/80"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-white mb-8">
            Create Your Signature Fragrance
          </h2>
          <p className="text-white/70 font-light mb-12 text-lg">
            We design scents for hotels, retail stores, fashion brands, and residential homes. Let us capture the essence of your space.
          </p>
          <Link to="/contact" className="bg-white text-black hover:bg-brand-gold hover:text-white px-10 py-4 tracking-[0.2em] uppercase text-sm font-medium transition-all duration-300">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
