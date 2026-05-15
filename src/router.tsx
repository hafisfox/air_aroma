import type { ReactNode } from "react";
import { useEffect } from "react";
import { type RouteObject, useRoutes } from "react-router-dom";
import Layout from "./components/Layout";
import NotFound from "./pages/NotFound";
import ScentMarketing from "./pages/ScentMarketing";
import Home from "./pages/Home";
import Fragrances from "./pages/Fragrances";
import Diffusers from "./pages/Diffusers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Blog from "./pages/Blog";
import SignatureScent from "./pages/SignatureScent";
import EssentialOils from "./pages/EssentialOils";
import ProductDetail from "./pages/ProductDetail";
import { setLocale } from "./i18n";
import SEOHead from "./components/SEOHead";
import type { Locale } from "./seo/site";

function RouteShell({
  children,
  locale,
}: {
  children: ReactNode;
  locale: Locale;
}) {
  return (
    <>
      <SEOHead locale={locale} />
      {children}
    </>
  );
}

function LocaleLayout({ locale }: { locale: Locale }) {
  useEffect(() => {
    void setLocale(locale);
  }, [locale]);

  return <Layout locale={locale} />;
}

function buildLocalizedChildren(locale: Locale): RouteObject[] {
  return [
    {
      index: true,
      element: (
        <RouteShell locale={locale}>
          <Home />
        </RouteShell>
      ),
    },
    {
      path: "scent-marketing",
      element: (
        <RouteShell locale={locale}>
          <ScentMarketing />
        </RouteShell>
      ),
    },
    {
      path: "fragrances",
      element: (
        <RouteShell locale={locale}>
          <Fragrances />
        </RouteShell>
      ),
    },
    {
      path: "diffusers",
      element: (
        <RouteShell locale={locale}>
          <Diffusers />
        </RouteShell>
      ),
    },
    {
      path: "about",
      element: (
        <RouteShell locale={locale}>
          <About />
        </RouteShell>
      ),
    },
    {
      path: "contact",
      element: (
        <RouteShell locale={locale}>
          <Contact />
        </RouteShell>
      ),
    },
    {
      path: "products",
      element: (
        <RouteShell locale={locale}>
          <Products />
        </RouteShell>
      ),
    },
    {
      path: "products/:productId",
      element: (
        <RouteShell locale={locale}>
          <ProductDetail />
        </RouteShell>
      ),
    },
    {
      path: "clients",
      element: (
        <RouteShell locale={locale}>
          <Clients />
        </RouteShell>
      ),
    },
    {
      path: "blog",
      element: (
        <RouteShell locale={locale}>
          <Blog />
        </RouteShell>
      ),
    },
    {
      path: "signature-scent",
      element: (
        <RouteShell locale={locale}>
          <SignatureScent />
        </RouteShell>
      ),
    },
    {
      path: "essential-oils",
      element: (
        <RouteShell locale={locale}>
          <EssentialOils />
        </RouteShell>
      ),
    },
    {
      path: "*",
      element: (
        <RouteShell locale={locale}>
          <NotFound />
        </RouteShell>
      ),
    },
  ];
}

export function getRouteObjects(): RouteObject[] {
  return [
    {
      path: "/",
      element: <LocaleLayout locale="en" />,
      children: buildLocalizedChildren("en"),
    },
    {
      path: "/ar",
      element: <LocaleLayout locale="ar" />,
      children: buildLocalizedChildren("ar"),
    },
  ];
}

export function AppRouter() {
  return useRoutes(getRouteObjects());
}
