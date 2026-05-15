import { Outlet, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import type { Locale } from "../seo/site";

export default function Layout({ locale }: { locale: Locale }) {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="site-shell">
      <Navbar locale={locale} />
      <main className="site-main">
        <Outlet />
      </main>
      <Footer locale={locale} />
    </div>
  );
}
