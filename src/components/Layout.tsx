import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import type { Locale } from "../seo/site";

export default function Layout({ locale }: { locale: Locale }) {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-brand-black text-[#f8f8f8]">
      <Navbar locale={locale} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
