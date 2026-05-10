/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import ScentMarketing from "./pages/ScentMarketing";
import Fragrances from "./pages/Fragrances";
import Diffusers from "./pages/Diffusers";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Clients from "./pages/Clients";
import Blog from "./pages/Blog";
import SignatureScent from "./pages/SignatureScent";
import EssentialOils from "./pages/EssentialOils";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="scent-marketing" element={<ScentMarketing />} />
          <Route path="fragrances" element={<Fragrances />} />
          <Route path="diffusers" element={<Diffusers />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="products" element={<Products />} />
          <Route path="clients" element={<Clients />} />
          <Route path="blog" element={<Blog />} />
          <Route path="signature-scent" element={<SignatureScent />} />
          <Route path="essential-oils" element={<EssentialOils />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
}

