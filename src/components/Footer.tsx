import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f2f2f2] text-black pt-16 px-6 lg:px-12 mt-16 pb-8" role="contentinfo" aria-label="Site footer">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16 text-[14px] font-light">
        {/* Column 1 — Main pages */}
        <nav aria-label="Main pages" className="flex flex-col space-y-4">
          <Link to="/scent-marketing" className="hover:text-gray-500 transition-colors">Scent Marketing</Link>
          <Link to="/products" className="hover:text-gray-500 transition-colors">Products</Link>
          <Link to="/clients" className="hover:text-gray-500 transition-colors">Clients</Link>
          <Link to="/blog" className="hover:text-gray-500 transition-colors">Blog</Link>
        </nav>
        
        {/* Column 2 — Company & social */}
        <nav aria-label="Company pages" className="flex flex-col space-y-4">
          <Link to="/about" className="hover:text-gray-500 transition-colors">About</Link>
          <Link to="/scent-marketing" className="hover:text-gray-500 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
          <a href="https://www.facebook.com/AirAroma" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors" aria-label="Visit Air Aroma on Facebook">Facebook</a>
          <a href="https://www.instagram.com/airaroma" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors" aria-label="Visit Air Aroma on Instagram">Instagram</a>
        </nav>

        {/* Column 3 — Social & legal */}
        <nav aria-label="Social media and legal" className="flex flex-col space-y-4">
          <a href="https://twitter.com/AirAroma" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors" aria-label="Visit Air Aroma on Twitter">Twitter</a>
          <a href="https://www.youtube.com/user/airaroma" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500 transition-colors" aria-label="Visit Air Aroma on YouTube">YouTube</a>
          <Link to="/about" className="hover:text-gray-500 transition-colors">Legal</Link>
          <Link to="/contact" className="hover:text-gray-500 transition-colors">FAQ</Link>
        </nav>

        {/* Newsletter Column */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col pt-8 md:pt-0">
          <h4 className="text-[14px] font-light mb-4 text-[#999999]">Stay up to date</h4>
          <form action="https://air-aroma.us7.list-manage.com/subscribe/post?u=9972593963fdf7aff92d5ce9e&amp;id=210793dc09&amp;f_id=0064d0e4f0" method="post" target="_blank" className="flex flex-col w-full space-y-3" aria-label="Newsletter subscription">
            <label htmlFor="footer-email" className="sr-only">Email address for newsletter</label>
            <input 
              id="footer-email"
              type="email" 
              name="EMAIL"
              placeholder="Enter Email" 
              className="bg-transparent border-b border-gray-300 pb-2 text-[15px] placeholder:font-light focus:outline-none focus:border-black transition-colors w-full"
              required
              autoComplete="email"
              aria-required="true"
            />
            <button 
              type="submit" 
              className="bg-black text-white px-6 py-3 text-[12px] font-light tracking-widest uppercase hover:bg-gray-800 transition-colors w-max mt-4"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-[1200px] mx-auto pt-6 flex flex-col md:flex-row justify-between items-center text-[12px] font-light text-gray-500 space-y-4 md:space-y-0">
        <p>&copy; 2026 Air Aroma. All rights reserved.</p>
        <div className="flex items-center space-x-3 cursor-pointer hover:text-black transition-colors">
          <Link to="/" aria-label="Select your country or region">Select country or region</Link>
          <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2021/05/flag-us.png" alt="United States flag" width="18" height="12" className="w-[18px] object-contain block" loading="lazy" />
        </div>
      </div>
    </footer>
  );
}
