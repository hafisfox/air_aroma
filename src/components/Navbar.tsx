import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Scent Marketing", path: "/scent-marketing" },
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
      <div className="w-full flex justify-between items-center px-6 lg:px-12 py-5 border-b border-gray-100">
        
        {/* Mobile Menu Button / Placeholder */}
        <button 
          className="text-black hover:text-gray-500 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} strokeWidth={1.5} /> : <Menu size={26} strokeWidth={1.5} />}
        </button>
        
        {/* Logo */}
        <Link to="/" className="mx-auto flex justify-center items-center">
          <img 
            src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2020/09/airaroma-logo2x.png" 
            alt="Air Aroma Logo" 
            className="h-7 w-auto object-contain sm:h-8"
          />
        </Link>

        {/* Desktop Cart / Mobile Toggle */}
        <div className="flex items-center space-x-6">
          <Link to="/store/cart/" className="hidden md:flex text-[13px] font-medium tracking-wide text-black hover:text-gray-500 transition-colors items-center">
            Cart (<span id="store-count">0</span>)
          </Link>
          <Link to="/my-account/" className="hidden md:flex text-[13px] font-medium tracking-wide text-black hover:text-gray-500 transition-colors">
            Sign in / Sign up
          </Link>
          <Link to="/cart" className="text-black hover:text-gray-500 transition-colors">
            <ShoppingCart size={22} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
      
      {/* Bottom tier (Desktop) */}
      <div className="hidden md:flex justify-center items-center px-6 lg:px-12 py-4 border-b border-gray-100 text-[13px] font-medium tracking-wide">
        <div className="flex space-x-12">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-black hover:text-gray-500 transition-colors uppercase tracking-[0.15em] text-[11px]"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/store" 
            className="text-black hover:text-gray-500 transition-colors uppercase tracking-[0.15em] text-[11px]"
          >
            Store
          </Link>
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
             <Link
               to="/store"
               onClick={() => setMobileMenuOpen(false)}
               className="text-black hover:text-gray-500"
             >
               Store
             </Link>
             <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col space-y-4">
               <Link to="/store/cart/" className="text-black hover:text-gray-500 transition-colors">
                  Cart (0)
               </Link>
               <Link to="/my-account/" className="text-black hover:text-gray-500 transition-colors">
                  Sign in / Sign up
               </Link>
             </div>
           </div>
         </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
