import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-[#f2f2f2] text-black pt-16 px-6 lg:px-12 mt-16 pb-8">
      <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 mb-16 text-[14px] font-light">
        {/* Column 1 */}
        <div className="flex flex-col space-y-4">
          <Link to="/scent-marketing" className="hover:text-gray-500 transition-colors">Scent Marketing</Link>
          <Link to="/products" className="hover:text-gray-500 transition-colors">Products</Link>
          <Link to="/clients" className="hover:text-gray-500 transition-colors">Clients</Link>
          <Link to="/blog" className="hover:text-gray-500 transition-colors">Blog</Link>
          <Link to="/store" className="hover:text-gray-500 transition-colors">Store</Link>
        </div>
        
        {/* Column 2 */}
        <div className="flex flex-col space-y-4">
          <Link to="/about" className="hover:text-gray-500 transition-colors">About</Link>
          <Link to="/services" className="hover:text-gray-500 transition-colors">Services</Link>
          <Link to="/contact" className="hover:text-gray-500 transition-colors">Contact</Link>
          <a href="https://www.facebook.com/AirAroma" className="hover:text-gray-500 transition-colors">Facebook</a>
          <a href="https://www.instagram.com/airaroma" className="hover:text-gray-500 transition-colors">Instagram</a>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-4">
          <a href="https://twitter.com/AirAroma" className="hover:text-gray-500 transition-colors">Twitter</a>
          <a href="https://www.youtube.com/user/airaroma" className="hover:text-gray-500 transition-colors">YouTube</a>
          <Link to="/legal" className="hover:text-gray-500 transition-colors">Legal</Link>
          <Link to="/faq" className="hover:text-gray-500 transition-colors">FAQ</Link>
        </div>

        {/* Newsletter Column */}
        <div className="col-span-2 md:col-span-4 lg:col-span-1 flex flex-col pt-8 md:pt-0">
          <h4 className="text-[14px] font-light mb-4 text-[#999999]">Stay up to date</h4>
          <form action="https://air-aroma.us7.list-manage.com/subscribe/post?u=9972593963fdf7aff92d5ce9e&amp;id=210793dc09&amp;f_id=0064d0e4f0" method="post" target="_blank" className="flex flex-col w-full space-y-3">
            <input 
              type="email" 
              name="EMAIL"
              placeholder="Enter Email" 
              className="bg-transparent border-b border-gray-300 pb-2 text-[15px] placeholder:font-light focus:outline-none focus:border-black transition-colors w-full"
              required
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
        <p>Copyright &copy; 2026 Air Aroma. All rights reserved.</p>
        <div className="flex items-center space-x-3 cursor-pointer hover:text-black transition-colors">
          <Link to="/country/">Select country or region</Link>
          <img src="https://d3vawd8bbgt5rs.cloudfront.net/wp-content/uploads/2021/05/flag-us.png" alt="United States" className="w-[18px] object-contain block" />
        </div>
      </div>
    </footer>
  );
}
