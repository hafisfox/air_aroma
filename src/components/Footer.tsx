import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white text-black pt-16 px-6 lg:px-12 border-t border-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16 text-[13px] font-light">
        {/* Column 1 */}
        <div className="flex flex-col space-y-3">
          <Link to="/scent-marketing" className="hover:text-gray-500 transition-colors">Scent Marketing</Link>
          <Link to="/products" className="hover:text-gray-500 transition-colors">Products</Link>
          <Link to="/clients" className="hover:text-gray-500 transition-colors">Clients</Link>
          <Link to="/blog" className="hover:text-gray-500 transition-colors">Blog</Link>
          <Link to="/store" className="hover:text-gray-500 transition-colors">Store</Link>
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col space-y-3">
          <Link to="/about" className="hover:text-gray-500 transition-colors">About</Link>
          <Link to="/services" className="hover:text-gray-500 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
          <a href="#" className="hover:text-gray-500 transition-colors">Facebook</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Instagram</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-3">
          <a href="#" className="hover:text-gray-500 transition-colors">Twitter</a>
          <a href="#" className="hover:text-gray-500 transition-colors">YouTube</a>
          <a href="#" className="hover:text-gray-500 transition-colors">Legal</a>
          <a href="#" className="hover:text-gray-500 transition-colors">FAQ</a>
        </div>

        {/* Newsletter Column */}
        <div className="col-span-2 lg:col-span-2 flex flex-col pt-8 md:pt-0">
          <h4 className="text-[13px] font-light mb-4">Stay up to date</h4>
          <form className="flex flex-col max-w-sm space-y-3">
            <input 
              type="email" 
              placeholder="Enter Email" 
              className="border border-gray-200 px-4 py-2.5 text-[13px] placeholder:font-light focus:outline-none focus:border-gray-400"
            />
            <button 
              type="submit" 
              className="bg-black text-white px-4 py-2.5 text-[13px] hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      
      <div className="max-w-6xl mx-auto border-t border-gray-100 py-6 flex flex-col md:flex-row justify-between items-center text-[13px] font-light text-gray-500 space-y-4 md:space-y-0">
        <p>Copyright &copy; 2026 Air Aroma. All rights reserved.</p>
        <div className="flex items-center space-x-2">
          <span>Select country or region</span>
          <img src="https://flagcdn.com/w40/us.png" alt="United States" className="w-6 shadow-sm border border-gray-200 rounded-sm" />
        </div>
      </div>
    </footer>
  );
}
