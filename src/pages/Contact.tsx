import { motion } from "motion/react";

export default function Contact() {
  return (
    <div className="w-full bg-white text-black">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex flex-col justify-center px-6 lg:px-12 border-b border-gray-100">
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
            className="text-neutral-600 text-lg sm:text-xl font-light tracking-wide max-w-2xl leading-relaxed"
          >
            Experience the power of scent. Schedule a complimentary consultation and fragrance demonstration anywhere in the world.
          </motion.p>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-2xl font-light mb-8 text-neutral-900">Get in Touch</h2>
            <form className="space-y-8">
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-neutral-400 mb-2">Name</label>
                <input type="text" className="w-full border-b border-gray-200 py-3 text-[15px] focus:outline-none focus:border-black transition-colors bg-transparent font-light" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-neutral-400 mb-2">Email</label>
                <input type="email" className="w-full border-b border-gray-200 py-3 text-[15px] focus:outline-none focus:border-black transition-colors bg-transparent font-light" placeholder="Your email address" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-neutral-400 mb-2">Company</label>
                <input type="text" className="w-full border-b border-gray-200 py-3 text-[15px] focus:outline-none focus:border-black transition-colors bg-transparent font-light" placeholder="Your organization" />
              </div>
              <div>
                <label className="block text-[11px] uppercase tracking-widest text-neutral-400 mb-2">Message</label>
                <textarea className="w-full border-b border-gray-200 py-3 text-[15px] focus:outline-none focus:border-black transition-colors bg-transparent font-light resize-none" rows={4} placeholder="How can we help you?"></textarea>
              </div>
              <button type="button" className="bg-black text-white px-8 py-4 uppercase tracking-widest text-[11px] hover:bg-neutral-800 transition-colors block w-full mt-8">
                Send Message
              </button>
            </form>
          </div>

          <div className="bg-neutral-50 p-12 flex flex-col justify-center">
            <div className="mb-12">
              <h3 className="text-xl font-light mb-4">North America</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-[15px]">
                Global Headquarters<br />
                New York, NY<br />
              </p>
            </div>
            
            <div className="mb-12">
              <h3 className="text-xl font-light mb-4">Europe & Middle East</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-[15px]">
                Regional Office<br />
                London, UK / Dubai, UAE<br />
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-4">Direct Contact</h3>
              <p className="text-neutral-500 font-light leading-relaxed text-[15px]">
                Email: info@air-aroma.com<br />
                Phone: +1 800 123 4567
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
