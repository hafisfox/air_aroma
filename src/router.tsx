import type { ReactNode } from "react";
import { useEffect } from "react";
import {
  type RouteObject,
  useRoutes,
  matchRoutes,
} from "react-router-dom";
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
import { setLocale } from "./i18n";
import SEOHead from "./components/SEOHead";
import type { RouteKey } from "./seo/routes";
import type { Locale } from "./seo/site";
import { getLocaleFromPath } from "./seo/site";

function RouteShell({
  children,
  locale,
  routeKey,
}: {
  children: ReactNode;
  locale: Locale;
  routeKey: RouteKey;
}) {
  return (
    <>
      <SEOHead locale={locale} routeKey={routeKey} />
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
        <RouteShell locale={locale} routeKey="home">
          <Home />
        </RouteShell>
      ),
      handle: { routeKey: "home", status: 200 },
    },
    {
      path: "scent-marketing",
      element: (
        <RouteShell locale={locale} routeKey="scentMarketing">
          <ScentMarketing />
        </RouteShell>
      ),
      handle: { routeKey: "scentMarketing", status: 200 },
    },
    {
      path: "fragrances",
      element: (
        <RouteShell locale={locale} routeKey="fragrances">
          <Fragrances />
        </RouteShell>
      ),
      handle: { routeKey: "fragrances", status: 200 },
    },
    {
      path: "diffusers",
      element: (
        <RouteShell locale={locale} routeKey="diffusers">
          <Diffusers />
        </RouteShell>
      ),
      handle: { routeKey: "diffusers", status: 200 },
    },
    {
      path: "about",
      element: (
        <RouteShell locale={locale} routeKey="about">
          <About />
        </RouteShell>
      ),
      handle: { routeKey: "about", status: 200 },
    },
    {
      path: "contact",
      element: (
        <RouteShell locale={locale} routeKey="contact">
          <Contact />
        </RouteShell>
      ),
      handle: { routeKey: "contact", status: 200 },
    },
    {
      path: "products",
      element: (
        <RouteShell locale={locale} routeKey="products">
          <Products />
        </RouteShell>
      ),
      handle: { routeKey: "products", status: 200 },
    },
    {
      path: "clients",
      element: (
        <RouteShell locale={locale} routeKey="clients">
          <Clients />
        </RouteShell>
      ),
      handle: { routeKey: "clients", status: 200 },
    },
    {
      path: "blog",
      element: (
        <RouteShell locale={locale} routeKey="blog">
          <Blog />
        </RouteShell>
      ),
      handle: { routeKey: "blog", status: 200 },
    },
    {
      path: "signature-scent",
      element: (
        <RouteShell locale={locale} routeKey="signatureScent">
          <SignatureScent />
        </RouteShell>
      ),
      handle: { routeKey: "signatureScent", status: 200 },
    },
    {
      path: "essential-oils",
      element: (
        <RouteShell locale={locale} routeKey="essentialOils">
          <EssentialOils />
        </RouteShell>
      ),
      handle: { routeKey: "essentialOils", status: 200 },
    },
    {
      path: "*",
      element: (
        <RouteShell locale={locale} routeKey="notFound">
          <NotFound />
        </RouteShell>
      ),
      handle: { routeKey: "notFound", status: 404 },
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

export function getRouteResponseInfo(pathname: string) {
  const locale = getLocaleFromPath(pathname);
  const matches = matchRoutes(getRouteObjects(), pathname);
  const leafMatch = matches?.at(-1);
  const statusCode =
    typeof leafMatch?.route.handle?.status === "number"
      ? leafMatch.route.handle.status
      : 200;

  return { locale, statusCode };
}
