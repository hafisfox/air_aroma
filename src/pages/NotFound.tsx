import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useLocaleRouting } from "../lib/localeRouting";

export default function NotFound() {
  const { isArabic, toLocalePath } = useLocaleRouting();

  return (
    <div className="w-full bg-brand-black text-[#f8f8f8] min-h-[70vh] flex flex-col justify-center items-center text-center px-6">
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
        className="text-white/60 text-lg font-light tracking-wide mb-12"
      >
        {isArabic
          ? "الصفحة التي تبحث عنها غير موجودة."
          : "The page you are looking for could not be found."}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <Link to={toLocalePath("/")} className="inline-block px-12 py-4 bg-black text-white text-sm tracking-widest uppercase hover:bg-neutral-800 transition-colors">
          {isArabic ? "العودة للرئيسية" : "Return Home"}
        </Link>
      </motion.div>
    </div>
  );
}
