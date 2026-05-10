import { motion } from "motion/react";
import { Link } from "react-router-dom";
import SEOHead from "../components/SEOHead";

export default function NotFound() {
  return (
    <div className="w-full bg-white text-black min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
      <SEOHead
        title="Page Not Found | Air Aroma"
        description="The page you are looking for does not exist."
        canonicalPath="/404"
      />
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-6xl md:text-8xl font-light tracking-wide mb-6"
      >
        404
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-neutral-600 text-lg font-light tracking-wide mb-12"
      >
        The page you are looking for could not be found.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link to="/" className="inline-block px-12 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-neutral-800 transition-colors">
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
