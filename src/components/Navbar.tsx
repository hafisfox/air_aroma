import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Scent Marketing", path: "/scent-marketing" },
  { name: "Fragrances", path: "/fragrances" },
  { name: "Diffusers", path: "/diffusers" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white z-50">
      {/* Top tier */}
      <div className="w-full flex justify-between items-center px-6 lg:px-12 py-6 border-b border-gray-100">
        <div className="w-6 md:w-10"></div>{/* Spacer */}
        
        <Link to="/" className="text-4xl font-light tracking-wide text-black mx-auto">
          Air<span className="text-gray-300">/</span>Aroma
        </Link>

        {/* Desktop Cart / Mobile Toggle */}
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-black hover:text-gray-500 transition-colors">
            <ShoppingCart size={22} strokeWidth={1.5} />
          </Link>
          <button 
            className="md:hidden text-black"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Bottom tier (Desktop) */}
      <div className="hidden md:flex justify-between items-center px-6 lg:px-12 py-4 border-b border-gray-100 text-[13px] font-medium tracking-wide">
        <div className="flex space-x-12">
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
        <Link 
          to="/fragrances" 
          className="text-black hover:text-gray-500 transition-colors"
        >
          Store
        </Link>
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
           <div className="flex flex-col px-6 py-4 space-y-4 text-sm font-medium">
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
             <Link
               to="/fragrances"
               onClick={() => setMobileMenuOpen(false)}
               className="text-black hover:text-gray-500"
             >
               Store
             </Link>
           </div>
         </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
