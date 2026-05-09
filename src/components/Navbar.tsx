import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Scent marketing", path: "/scent-marketing" },
  { name: "Products", path: "/products" },
  { name: "Clients", path: "/clients" },
  { name: "Blog", path: "/blog" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white z-50">
      {/* Top tier */}
      <div className="w-full flex justify-between items-center px-6 lg:px-12 py-6">
        
        {/* Mobile Menu Button / Placeholder */}
        <div className="w-[26px]">
          <button 
            className="md:hidden text-black hover:text-gray-500 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
          </button>
        </div>
        
        {/* Logo */}
        <Link to="/" className="mx-auto flex justify-center items-center">
          <span className="text-[34px] md:text-[44px] font-light tracking-tight text-black leading-none">Air<span className="text-[#a8a8a8]">/</span>Aroma</span>
        </Link>

        {/* Desktop Right Spacer */}
        <div className="w-[26px]"></div>
      </div>
      
      {/* Bottom tier (Desktop) */}
      <div className="hidden md:flex justify-between items-center px-6 lg:px-12 pb-5 text-[13px] font-light tracking-wide">
        <div className="flex space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-black hover:text-gray-500 transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
           <motion.div
           initial={{ opacity: 0, height: 0 }}
           animate={{ opacity: 1, height: "auto" }}
           exit={{ opacity: 0, height: 0 }}
           transition={{ duration: 0.3 }}
           className="md:hidden border-b border-gray-100 bg-white overflow-hidden"
         >
           <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium uppercase tracking-[0.15em]">
             {navLinks.map((link) => (
               <Link
                 key={link.name}
                 to={link.path}
                 onClick={() => setMobileMenuOpen(false)}
                 className="text-black hover:text-gray-500"
               >
                 {link.name}
               </Link>
             ))}

           </div>
         </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
