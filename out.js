(() => {
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });

  // src/main.tsx
  var import_react10 = __require("react");
  var import_client = __require("react-dom/client");

  // src/App.tsx
  var import_react_router_dom6 = __require("react-router-dom");

  // src/components/Layout.tsx
  var import_react_router_dom3 = __require("react-router-dom");

  // src/components/Navbar.tsx
  var import_react = __require("react");
  var import_react_router_dom = __require("react-router-dom");
  var import_lucide_react = __require("lucide-react");
  var import_react2 = __require("motion/react");
  var import_jsx_runtime = __require("react/jsx-runtime");
  var navLinks = [
    { name: "Scent Marketing", path: "/scent-marketing" },
    { name: "Fragrances", path: "/fragrances" },
    { name: "Diffusers", path: "/diffusers" },
    { name: "About Us", path: "/about" }
  ];
  function Navbar() {
    const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
    const [mobileMenuOpen, setMobileMenuOpen] = (0, import_react.useState)(false);
    (0, import_react.useEffect)(() => {
      const handleScroll = () => {
        setIsScrolled(window.scrollY > 50);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navClass = `fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-md py-4 shadow-sm text-black" : "bg-transparent py-6 text-white"}`;
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", { className: navClass, children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react_router_dom.Link, { to: "/", className: "text-2xl font-serif tracking-widest uppercase relative z-50", children: [
          "Air",
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: isScrolled ? "text-gold" : "text-white/80", children: "Aroma" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "hidden md:flex space-x-10 items-center", children: [
          navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react_router_dom.Link,
            {
              to: link.path,
              className: "text-sm tracking-widest uppercase hover:opacity-70 transition-opacity",
              children: link.name
            },
            link.name
          )),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
            import_react_router_dom.Link,
            {
              to: "/contact",
              className: `border px-6 py-2 text-sm tracking-widest uppercase transition-colors ${isScrolled ? "border-black hover:bg-black hover:text-white" : "border-white hover:bg-white hover:text-black"}`,
              children: "Contact"
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
          "button",
          {
            className: "md:hidden relative z-50",
            onClick: () => setMobileMenuOpen(!mobileMenuOpen),
            children: mobileMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.X, { size: 28, className: isScrolled ? "text-black" : "text-white" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_lucide_react.Menu, { size: 28 })
          }
        )
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react2.AnimatePresence, { children: mobileMenuOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        import_react2.motion.div,
        {
          initial: { opacity: 0, y: "-100%" },
          animate: { opacity: 1, y: 0 },
          exit: { opacity: 0, y: "-100%" },
          transition: { type: "tween", duration: 0.4 },
          className: "fixed inset-0 bg-white z-40 flex flex-col justify-center items-center text-black",
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: "flex flex-col space-y-8 text-center text-xl uppercase tracking-widest", children: [
            navLinks.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_react_router_dom.Link,
              {
                to: link.path,
                onClick: () => setMobileMenuOpen(false),
                className: "hover:text-gold transition-colors",
                children: link.name
              },
              link.name
            )),
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
              import_react_router_dom.Link,
              {
                to: "/contact",
                onClick: () => setMobileMenuOpen(false),
                className: "hover:text-gold transition-colors pt-8 border-t border-gray-100",
                children: "Contact Us"
              }
            )
          ] })
        }
      ) })
    ] });
  }

  // src/components/Footer.tsx
  var import_react_router_dom2 = __require("react-router-dom");
  var import_jsx_runtime2 = __require("react/jsx-runtime");
  function Footer() {
    return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("footer", { className: "bg-black text-white pt-20 pb-10 px-6 lg:px-12", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "col-span-1 md:col-span-2", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)(import_react_router_dom2.Link, { to: "/", className: "text-3xl font-serif tracking-widest uppercase mb-6 block", children: [
            "Air",
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("span", { className: "text-gold", children: "Aroma" })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("p", { className: "text-white/60 max-w-sm mb-8 font-light leading-relaxed", children: "The premier scent marketing agency for Saudi Arabia. We design bespoke fragrances and install state-of-the-art diffusers for luxury brands in Riyadh, Jeddah, and beyond." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { className: "text-xs tracking-widest uppercase mb-6 text-white/40", children: "Solutions" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-4 text-sm font-light text-white/80", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/scent-marketing", className: "hover:text-gold transition-colors", children: "Scent Marketing" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/fragrances", className: "hover:text-gold transition-colors", children: "Signature Scents" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/diffusers", className: "hover:text-gold transition-colors", children: "Aroma Diffusers" }) }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "/about", className: "hover:text-gold transition-colors", children: "Our Approach" }) })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("h4", { className: "text-xs tracking-widest uppercase mb-6 text-white/40", children: "Contact" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("ul", { className: "space-y-4 text-sm font-light text-white/80", children: [
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "King Fahd Road, Riyadh" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { children: "Kingdom of Saudi Arabia" }),
            /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("li", { className: "pt-4", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("a", { href: "mailto:info@air-aroma.sa", className: "hover:text-gold transition-colors", children: "info@air-aroma.sa" }) })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-white/40 font-light", children: [
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("p", { children: [
          "\xA9 ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Air Aroma KSA. All rights reserved."
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("div", { className: "flex space-x-6 mt-4 md:mt-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "#", className: "hover:text-white transition-colors", children: "Privacy Policy" }),
          /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react_router_dom2.Link, { to: "#", className: "hover:text-white transition-colors", children: "Terms of Service" })
        ] })
      ] })
    ] });
  }

  // src/components/Layout.tsx
  var import_react3 = __require("react");
  var import_react_router_dom4 = __require("react-router-dom");
  var import_jsx_runtime3 = __require("react/jsx-runtime");
  function Layout() {
    const { pathname } = (0, import_react_router_dom4.useLocation)();
    (0, import_react3.useEffect)(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return /* @__PURE__ */ (0, import_jsx_runtime3.jsxs)("div", { className: "min-h-screen flex flex-col bg-[#fcfcfc] text-neutral-900", children: [
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Navbar, {}),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("main", { className: "flex-grow", children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react_router_dom3.Outlet, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(Footer, {})
    ] });
  }

  // src/pages/Home.tsx
  var import_react4 = __require("motion/react");
  var import_react_router_dom5 = __require("react-router-dom");
  var import_lucide_react2 = __require("lucide-react");
  var import_jsx_runtime4 = __require("react/jsx-runtime");
  function Home() {
    return /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "relative h-screen flex items-center justify-center overflow-hidden", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "absolute inset-0 z-0", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            "img",
            {
              src: "https://images.unsplash.com/photo-1615996001292-62bdafb23b49?auto=format&fit=crop&q=80",
              alt: "Luxury Scent Atmosphere",
              className: "w-full h-full object-cover object-center scale-105 transform origin-center animate-pulse-slow"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute inset-0 bg-black/40" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react4.motion.p,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.2 },
              className: "text-white/80 uppercase tracking-[0.3em] text-xs sm:text-sm mb-6",
              children: "The Essence of Luxury in KSA"
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
            import_react4.motion.h1,
            {
              initial: { opacity: 0, y: 20 },
              animate: { opacity: 1, y: 0 },
              transition: { duration: 0.8, delay: 0.4 },
              className: "text-white text-5xl sm:text-7xl font-serif font-light leading-tight mb-10",
              children: [
                "Elevate Your Space ",
                /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("br", {}),
                " With Scent"
              ]
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
            import_react4.motion.div,
            {
              initial: { opacity: 0 },
              animate: { opacity: 1 },
              transition: { duration: 1, delay: 0.8 },
              children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(
                import_react_router_dom5.Link,
                {
                  to: "/scent-marketing",
                  className: "inline-flex items-center space-x-3 text-white border border-white/30 px-8 py-4 uppercase tracking-widest text-xs hover:bg-white hover:text-black transition-all duration-300 group",
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("span", { children: "Discover Scenting" }),
                    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_lucide_react2.ArrowRight, { size: 16, className: "transform group-hover:translate-x-1 transition-transform" })
                  ]
                }
              )
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("section", { className: "py-32 px-6 lg:px-12 bg-white selection:bg-gold selection:text-white", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h2", { className: "text-3xl sm:text-5xl font-serif mb-10 text-neutral-900 leading-snug", children: "Scent Marketing for the Saudi Vision" }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-neutral-500 font-light text-lg sm:text-xl leading-relaxed mb-12", children: "In the rapidly evolving landscape of the Kingdom, creating memorable experiences is paramount. We design bespoke signature scents and deploy advanced diffusion technology for royal palaces, luxury hotels, retail flagships, and corporate headquarters across Riyadh, Jeddah, and beyond." }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "img",
          {
            src: "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&q=80",
            alt: "Luxury Hotel Lobby",
            className: "w-full h-[500px] object-cover mb-12 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("section", { className: "grid grid-cols-1 md:grid-cols-2", children: [
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-[#111] text-white p-16 lg:p-32 flex flex-col justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-gold uppercase tracking-[0.2em] text-xs mb-6", children: "Fragrance Creation" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "text-4xl font-serif mb-6 leading-tight", children: "Signature Scents" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-white/60 font-light leading-relaxed mb-10", children: "From the deep resonance of premium Oud to the delicate notes of Taif Rose, our perfumers craft fragrances that embody your brand's unique identity and heritage." }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom5.Link, { to: "/fragrances", className: "uppercase tracking-widest text-xs border-b border-white/30 pb-2 self-start hover:border-gold hover:text-gold transition-colors", children: "Explore Fragrances" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative h-[400px] md:h-auto", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "img",
          {
            src: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?auto=format&fit=crop&q=80",
            alt: "Essential Oils",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "relative h-[400px] md:h-auto md:order-last", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
          "img",
          {
            src: "https://images.unsplash.com/photo-1615996001292-62bdafb23b49?auto=format&fit=crop&q=80",
            alt: "Diffuser Tech",
            className: "absolute inset-0 w-full h-full object-cover"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "bg-[#fcfcfc] text-black p-16 lg:p-32 flex flex-col justify-center border-b border-neutral-100", children: [
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-neutral-400 uppercase tracking-[0.2em] text-xs mb-6", children: "Technology" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("h3", { className: "text-4xl font-serif mb-6 leading-tight", children: "Advanced Diffusers" }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-neutral-500 font-light leading-relaxed mb-10", children: "Our cold-air diffusion technology seamlessly integrates with your HVAC systems, providing consistent, discreet, and perfectly calibrated scenting for spaces of any scale." }),
          /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react_router_dom5.Link, { to: "/diffusers", className: "uppercase tracking-widest text-xs border-b border-black/30 pb-2 self-start hover:border-gold hover:text-gold transition-colors", children: "View Diffusers" })
        ] })
      ] })
    ] });
  }

  // src/pages/ScentMarketing.tsx
  var import_react5 = __require("motion/react");
  var import_jsx_runtime5 = __require("react/jsx-runtime");
  function ScentMarketing() {
    return /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "w-full", children: [
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "pt-40 pb-20 px-6 lg:px-12 bg-black text-white selection:bg-gold selection:text-white", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_react5.motion.p,
          {
            initial: { opacity: 0, y: 10 },
            animate: { opacity: 1, y: 0 },
            className: "text-gold uppercase tracking-[0.2em] text-xs mb-6",
            children: "The Science of Emotion"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_react5.motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { delay: 0.2 },
            className: "text-5xl md:text-7xl font-serif font-light leading-tight mb-10",
            children: "Scent Marketing"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          import_react5.motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.4 },
            className: "text-white/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto",
            children: "Scent is the strongest sense tied to memory and emotion. We design olfactory experiences that increase dwell time, elevate brand perception, and forge lasting connections."
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("section", { className: "py-24 px-6 lg:px-12 bg-white", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16", children: [
        {
          title: "Luxury Hospitality",
          desc: "From the grand lobbies of Riyadh to the coastal resorts of Jeddah, scent welcomes guests with an unforgettable signature.",
          img: "https://images.unsplash.com/photo-1542314831-c6a4d1424869?auto=format&fit=crop&q=80"
        },
        {
          title: "Premium Retail",
          desc: "Enhance the shopping experience. Customers browse longer and spend more in beautifully scented environments.",
          img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80"
        },
        {
          title: "Corporate HQs",
          desc: "Create an atmosphere of focus and prestige. A subtle, refined scent speaks volumes about your corporate identity.",
          img: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
        }
      ].map((item, idx) => /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)("div", { className: "group", children: [
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("div", { className: "overflow-hidden mb-6 h-64", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
          "img",
          {
            src: item.img,
            alt: item.title,
            className: "w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("h3", { className: "text-2xl font-serif mb-4", children: item.title }),
        /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("p", { className: "text-neutral-500 font-light leading-relaxed", children: item.desc })
      ] }, idx)) }) })
    ] });
  }

  // src/pages/Fragrances.tsx
  var import_react6 = __require("motion/react");
  var import_jsx_runtime6 = __require("react/jsx-runtime");
  function Fragrances() {
    return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "w-full bg-[#fcfcfc]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "pt-40 pb-20 px-6 lg:px-12 bg-black text-white", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react6.motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "text-5xl md:text-7xl font-serif font-light leading-tight mb-8",
            children: "Signature Scents"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
          import_react6.motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.2 },
            className: "text-white/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto",
            children: "Crafted for the discerning tastes of Saudi Arabia. Our palette ranges from rich Oriental woods to fresh, contemporary citrus blends."
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("section", { className: "py-20 px-6 lg:px-12 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12", children: [
        {
          name: "Royal Oud",
          notes: ["Agarwood", "Amber", "Saffron"],
          desc: "A deep, majestic fragrance that pays homage to Arabian heritage. Perfect for VIP lounges and palace lobbies."
        },
        {
          name: "Taif Blossom",
          notes: ["Taif Rose", "Bergamot", "White Musk"],
          desc: "Elegant and welcoming. This floral arrangement brings a sense of refined luxury to spas and boutique hotels."
        },
        {
          name: "Desert Night",
          notes: ["Sandalwood", "Cardamom", "Vanilla"],
          desc: "Warm and inviting, capturing the mysterious allure of the evening. Ideal for premium retail spaces."
        },
        {
          name: "Oasis Breeze",
          notes: ["Mandarin", "Jasmine", "Marine Notes"],
          desc: "Crisp and energizing. A modern scent profile designed for corporate environments and premium fitness centers."
        }
      ].map((fragrance, idx) => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "bg-white p-12 shadow-sm border border-neutral-100 hover:shadow-xl transition-shadow duration-500", children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("h3", { className: "text-3xl font-serif mb-2", children: fragrance.name }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-gold uppercase tracking-widest text-xs mb-6 font-medium", children: fragrance.notes.join(" \u2022 ") }),
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("p", { className: "text-neutral-500 font-light leading-relaxed", children: fragrance.desc })
      ] }, idx)) })
    ] });
  }

  // src/pages/Diffusers.tsx
  var import_react7 = __require("motion/react");
  var import_jsx_runtime7 = __require("react/jsx-runtime");
  function Diffusers() {
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "w-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("section", { className: "pt-40 pb-20 px-6 lg:px-12 bg-black text-white", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react7.motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "text-5xl md:text-7xl font-serif font-light leading-tight mb-8",
            children: "Aroma Diffusers"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
          import_react7.motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.2 },
            className: "text-white/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto",
            children: "State-of-the-art cold air diffusion technology. Engineered for efficiency, designed for absolute discretion."
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("section", { className: "py-24 px-6 lg:px-12 max-w-7xl mx-auto", children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-20 items-center mb-24", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "img",
            {
              src: "https://images.unsplash.com/photo-1596462502278-27bf85033e5a?auto=format&fit=crop&q=80",
              alt: "HVAC Diffusion",
              className: "w-full h-auto grayscale"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-gold uppercase tracking-[0.2em] text-xs mb-4", children: "Enterprise Grade" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "text-4xl font-serif mb-6", children: "HVAC Integration" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-neutral-500 font-light leading-relaxed mb-6", children: "Our flagship HVAC diffusers connect directly to central air conditioning systems. Perfect for massive spaces like mall atriums, mega-hotels, and sprawling office complexes across the Kingdom." }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("ul", { className: "space-y-3 text-neutral-600 font-light text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "w-2 h-2 bg-gold rounded-full mr-3" }),
                " Covers up to 10,000 m\xB3"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "w-2 h-2 bg-gold rounded-full mr-3" }),
                " Nano-droplet technology leaves no residue"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "w-2 h-2 bg-gold rounded-full mr-3" }),
                " Fully programmable via smart app"
              ] })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-20 items-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "md:order-last", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            "img",
            {
              src: "https://images.unsplash.com/photo-1629198688000-71f23e745b6e?auto=format&fit=crop&q=80",
              alt: "Standalone Diffuser",
              className: "w-full h-auto grayscale"
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-gold uppercase tracking-[0.2em] text-xs mb-4", children: "Architectural Series" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("h2", { className: "text-4xl font-serif mb-6", children: "Standalone Units" }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("p", { className: "text-neutral-500 font-light leading-relaxed mb-6", children: "Sleek, anodized aluminum designs that look like high-end decor. These units offer flexible placement for retail boutiques, VIP rooms, and luxury residences." }),
            /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("ul", { className: "space-y-3 text-neutral-600 font-light text-sm", children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "w-2 h-2 bg-gold rounded-full mr-3" }),
                " Plug-and-play simplicity"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "w-2 h-2 bg-gold rounded-full mr-3" }),
                " Whisper-quiet operation"
              ] }),
              /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)("li", { className: "flex items-center", children: [
                /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "w-2 h-2 bg-gold rounded-full mr-3" }),
                " Precision intensity control"
              ] })
            ] })
          ] })
        ] })
      ] })
    ] });
  }

  // src/pages/About.tsx
  var import_react8 = __require("motion/react");
  var import_jsx_runtime8 = __require("react/jsx-runtime");
  function About() {
    return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "w-full bg-[#fcfcfc]", children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "pt-40 pb-20 px-6 lg:px-12 bg-black text-white", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_react8.motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "text-5xl md:text-7xl font-serif font-light leading-tight mb-8",
            children: "Our Story"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          import_react8.motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.2 },
            className: "text-white/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto",
            children: "Air Aroma was founded with a single purpose: to elevate the standard of environmental design in Saudi Arabia through the power of scent."
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("section", { className: "py-24 px-6 lg:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-20 items-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-gold uppercase tracking-[0.2em] text-xs mb-4", children: "Vision 2030 Aligned" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("h2", { className: "text-4xl font-serif mb-6 text-neutral-900 leading-tight", children: [
            "Pioneering the Future",
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("br", {}),
            " of Sensory Experience"
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neutral-500 font-light leading-relaxed mb-6", children: "As the Kingdom undergoes its unprecedented transformation, the demand for world-class, immersive experiences has never been higher. Air Aroma leads the scent marketing industry within the region, combining global expertise with deep local roots." }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-neutral-500 font-light leading-relaxed", children: "We understand the cultural nuances of scent in the Middle East. From welcoming guests with traditional Oud to modernizing retail spaces with bespoke blends, our work touches millions of lives across the Kingdom every day." })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "relative", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", { className: "absolute inset-0 bg-gold/10 transform translate-x-6 translate-y-6" }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
            "img",
            {
              src: "https://images.unsplash.com/photo-1541888048496-e2a1e6417721?auto=format&fit=crop&q=80",
              alt: "Riyadh Skyline",
              className: "relative z-10 w-full h-[500px] object-cover grayscale"
            }
          )
        ] })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("section", { className: "py-24 px-6 lg:px-12 bg-neutral-900 text-white text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h2", { className: "text-3xl font-serif mb-16", children: "Why Choose Air Aroma?" }),
        /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-12", children: [
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-xl font-serif mb-4", children: "Local Expertise" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-white/60 font-light leading-relaxed text-sm", children: "Headquartered in Riyadh with teams across the Kingdom for rapid installation and maintenance." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-xl font-serif mb-4", children: "Master Perfumers" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-white/60 font-light leading-relaxed text-sm", children: "Our bespoke fragrances are crafted in collaboration with the world's leading fragrance houses in Grasse and Dubai." })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("h3", { className: "text-xl font-serif mb-4", children: "Cutting-Edge Tech" }),
            /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("p", { className: "text-white/60 font-light leading-relaxed text-sm", children: "We deploy the most advanced, reliable cold-air diffusion systems designed for extreme climates and extensive use." })
          ] })
        ] })
      ] })
    ] });
  }

  // src/pages/Contact.tsx
  var import_react9 = __require("motion/react");
  var import_jsx_runtime9 = __require("react/jsx-runtime");
  function Contact() {
    return /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "w-full bg-white", children: [
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("section", { className: "pt-40 pb-20 px-6 lg:px-12 bg-black text-white", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "max-w-4xl mx-auto text-center", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_react9.motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            className: "text-5xl md:text-7xl font-serif font-light leading-tight mb-8",
            children: "Contact Us"
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(
          import_react9.motion.p,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 0.2 },
            className: "text-white/70 font-light text-lg md:text-xl leading-relaxed max-w-2xl mx-auto",
            children: "Experience the power of scent. Schedule a complimentary consultation and fragrance demonstration anywhere in KSA."
          }
        )
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("section", { className: "py-24 px-6 lg:px-12 max-w-7xl mx-auto", children: /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-20", children: [
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h2", { className: "text-3xl font-serif mb-8 text-neutral-900", children: "Get in Touch" }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("form", { className: "space-y-6", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block text-xs uppercase tracking-widest text-neutral-500 mb-2", children: "Name" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", className: "w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent", placeholder: "Your name" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block text-xs uppercase tracking-widest text-neutral-500 mb-2", children: "Email" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "email", className: "w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent", placeholder: "Your email address" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block text-xs uppercase tracking-widest text-neutral-500 mb-2", children: "Company" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("input", { type: "text", className: "w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent", placeholder: "Your organization" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("label", { className: "block text-xs uppercase tracking-widest text-neutral-500 mb-2", children: "Message" }),
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("textarea", { className: "w-full border-b border-neutral-300 py-3 focus:outline-none focus:border-black transition-colors bg-transparent", rows: 4, placeholder: "How can we help you?" })
            ] }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("button", { type: "button", className: "bg-black text-white px-8 py-4 uppercase tracking-widest text-xs hover:bg-gold transition-colors block w-full mt-8", children: "Send Message" })
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "bg-neutral-50 p-12 flex flex-col justify-center", children: [
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mb-12", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-xl font-serif mb-4", children: "Riyadh Headquarters" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "text-neutral-500 font-light leading-relaxed", children: [
              "King Fahd Road",
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
              "Al Olaya District",
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
              "Riyadh, Kingdom of Saudi Arabia"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { className: "mb-12", children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-xl font-serif mb-4", children: "Jeddah Office" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "text-neutral-500 font-light leading-relaxed", children: [
              "Prince Sultan Road",
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
              "Al Rawdah District",
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
              "Jeddah, Kingdom of Saudi Arabia"
            ] })
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("div", { children: [
            /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("h3", { className: "text-xl font-serif mb-4", children: "Direct Contact" }),
            /* @__PURE__ */ (0, import_jsx_runtime9.jsxs)("p", { className: "text-neutral-500 font-light leading-relaxed", children: [
              "Email: info@air-aroma.sa",
              /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("br", {}),
              "Phone: +966 11 123 4567"
            ] })
          ] })
        ] })
      ] }) })
    ] });
  }

  // src/App.tsx
  var import_jsx_runtime10 = __require("react/jsx-runtime");
  function App() {
    return /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom6.BrowserRouter, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom6.Routes, { children: /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_react_router_dom6.Route, { path: "/", element: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Layout, {}), children: [
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom6.Route, { index: true, element: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Home, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom6.Route, { path: "scent-marketing", element: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(ScentMarketing, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom6.Route, { path: "fragrances", element: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Fragrances, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom6.Route, { path: "diffusers", element: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Diffusers, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom6.Route, { path: "about", element: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(About, {}) }),
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_react_router_dom6.Route, { path: "contact", element: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Contact, {}) })
    ] }) }) });
  }

  // src/main.tsx
  var import_jsx_runtime11 = __require("react/jsx-runtime");
  (0, import_client.createRoot)(document.getElementById("root")).render(
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react10.StrictMode, { children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(App, {}) })
  );
})();
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
