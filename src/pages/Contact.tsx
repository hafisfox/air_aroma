import { motion } from "motion/react";
import SEOHead from "../components/SEOHead";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Air Aroma",
    "description": "Get in touch with Air Aroma for a complimentary scent consultation and fragrance demonstration.",
    "url": "https://air-aroma.com/contact",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Air Aroma",
      "url": "https://air-aroma.com",
      "telephone": "+1-800-123-4567",
      "email": "info@air-aroma.com",
      "description": "Premium scent marketing agency designing custom fragrances for luxury brands worldwide.",
      "address": [
        {
          "@type": "PostalAddress",
          "addressLocality": "New York",
          "addressRegion": "NY",
          "addressCountry": "US",
          "name": "North America Headquarters"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "London",
          "addressCountry": "GB",
          "name": "Europe Office"
        },
        {
          "@type": "PostalAddress",
          "addressLocality": "Dubai",
          "addressCountry": "AE",
          "name": "Middle East Office"
        }
      ],
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://air-aroma.com" },
      { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://air-aroma.com/contact" }
    ]
  }
];

export default function Contact() {
  return (
    <div className="w-full bg-brand-black text-[#f8f8f8]">
      <SEOHead
        title="Contact Air Aroma | Schedule a Fragrance Consultation Worldwide"
        description="Get in touch with Air Aroma for a complimentary scent consultation and fragrance demonstration. Offices in New York, London, and Dubai. Email info@air-aroma.com or call +1 800 123 4567."
        keywords="contact Air Aroma, scent consultation, fragrance demonstration, scent marketing inquiry, Air Aroma offices, New York, Dubai, London"
        canonicalPath="/contact"
        structuredData={structuredData}
      />

      {/* Hero Section */}
      <section id="contact-hero" aria-label="Contact introduction" className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-white/10">
        <div className="max-w-4xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl font-light tracking-wide leading-tight mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/60 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Experience the power of scent. Schedule a complimentary consultation and fragrance demonstration anywhere in the world.
          </motion.p>
        </div>
      </section>

      <section id="contact-form-section" aria-label="Contact form and office locations" className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl font-light mb-8 text-neutral-900">Get in Touch</h2>
            <form className="space-y-8" aria-label="Contact form" id="contact-form">
              <div>
                <label htmlFor="contact-name" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">Name</label>
                <input id="contact-name" type="text" name="name" autoComplete="name" className="w-full border-b border-white/20 py-3 text-[15px] focus:outline-none focus:border-black transition-colors bg-transparent font-light" placeholder="Your name" />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">Email</label>
                <input id="contact-email" type="email" name="email" autoComplete="email" className="w-full border-b border-white/20 py-3 text-[15px] focus:outline-none focus:border-black transition-colors bg-transparent font-light" placeholder="Your email address" />
              </div>
              <div>
                <label htmlFor="contact-company" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">Company</label>
                <input id="contact-company" type="text" name="organization" autoComplete="organization" className="w-full border-b border-white/20 py-3 text-[15px] focus:outline-none focus:border-black transition-colors bg-transparent font-light" placeholder="Your organization" />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-[11px] uppercase tracking-widest text-white/40 mb-2">Message</label>
                <textarea id="contact-message" name="message" className="w-full border-b border-white/20 py-3 text-[15px] focus:outline-none focus:border-black transition-colors bg-transparent font-light resize-none" rows={4} placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="bg-black text-white px-8 py-4 uppercase tracking-widest text-[11px] hover:bg-neutral-800 transition-colors block w-full mt-8">
                Send Message
              </button>
            </form>
          </div>

          <aside className="bg-[#111] p-12 flex flex-col justify-center" aria-label="Office locations and contact details">
            <div className="mb-12">
              <h3 className="text-xl font-light mb-4">North America</h3>
              <address className="text-white/50 font-light leading-relaxed text-[15px] not-italic">
                Global Headquarters<br />
                New York, NY<br />
              </address>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-light mb-4">Europe & Middle East</h3>
              <address className="text-white/50 font-light leading-relaxed text-[15px] not-italic">
                Regional Office<br />
                London, UK / Dubai, UAE<br />
              </address>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">Direct Contact</h3>
              <address className="text-white/50 font-light leading-relaxed text-[15px] not-italic">
                Email: <a href="mailto:info@air-aroma.com" className="underline decoration-1 underline-offset-4 hover:text-white transition-colors">info@air-aroma.com</a><br />
                Phone: <a href="tel:+18001234567" className="underline decoration-1 underline-offset-4 hover:text-white transition-colors">+1 800 123 4567</a>
              </address>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
