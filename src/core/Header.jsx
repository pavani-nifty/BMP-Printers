import React, { useState, useRef, useEffect } from "react";

// Load Poppins font (place this in your index.html <head> instead for production):
// <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&display=swap" rel="stylesheet">

const servicesMenu = [
  "Digital Printing",
  "Offset Printing",
  "Large Format Printing",
  "Packaging Solutions",
  "Branding & Design",
  "Signage & Displays",
  "Custom Merchandise",
];

export default function Header() {
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);

  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  // Close desktop dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
      if (aboutRef.current && !aboutRef.current.contains(e.target)) {
        setAboutOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="w-full bg-[#0B1220] border-b border-white/10 relative z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo placeholder */}
         <a href="#" className="flex items-center gap-3 shrink-0">
  <img
    src="src/assets/logo.png"
    alt="YourLogo"
    className="h-10 md:h-12 w-auto object-contain"
  />
</a>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Home
            </a>

            {/* About Us dropdown */}
            <div className="relative" ref={aboutRef}>
              <button
                onClick={() => setAboutOpen((o) => !o)}
                className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                About Us
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    aboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {aboutOpen && (
                <div className="absolute left-0 top-full mt-3 w-56 bg-[#111a2c] border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 overflow-hidden">
                  {["Equipment"].map(
                    (item) => (
                      <a
                        key={item}
                        href="#"
                        className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                      >
                        {item}
                      </a>
                    )
                  )}
                </div>
              )}
            </div>

          

            {/* Services dropdown (7 submenus) */}
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen((o) => !o)}
                className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {servicesOpen && (
                <div className="absolute left-0 top-full mt-3 w-64 bg-[#111a2c] border border-white/10 rounded-xl shadow-2xl shadow-black/40 py-2 overflow-hidden">
                  {servicesMenu.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2.5 text-sm text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <a
              href="#"
              className="text-sm font-medium text-white/80 hover:text-white transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#0B1220] text-sm font-semibold transition-colors shadow-md shadow-amber-400/20"
            >
              Get a Quote
            </a>

            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden text-white p-2 -mr-2"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0B1220] px-4 sm:px-6 pb-4">
          <nav className="flex flex-col divide-y divide-white/5">
            <a href="#" className="py-3 text-sm font-medium text-white/80 hover:text-white">
              Home
            </a>

            {/* About Us accordion */}
            <div>
              <button
                onClick={() => setMobileAboutOpen((o) => !o)}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-white/80"
              >
                About Us
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    mobileAboutOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileAboutOpen && (
                <div className="pb-2 pl-3 flex flex-col gap-1">
                  {[" Equipment"].map((item) => (
                    <a key={item} href="#" className="py-2 text-sm text-white/60 hover:text-white">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            

            {/* Services accordion */}
            <div>
              <button
                onClick={() => setMobileServicesOpen((o) => !o)}
                className="w-full flex items-center justify-between py-3 text-sm font-medium text-white/80"
              >
                Services
                <svg
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    mobileServicesOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {mobileServicesOpen && (
                <div className="pb-2 pl-3 flex flex-col gap-1">
                  {servicesMenu.map((item) => (
                    <a key={item} href="#" className="py-2 text-sm text-white/60 hover:text-white">
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

           

            <a href="#" className="py-3 text-sm font-medium text-white/80 hover:text-white">
              Pricing
            </a>


          

            <a
              href="#"
              className="mt-4 inline-flex items-center justify-center px-5 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#0B1220] text-sm font-semibold transition-colors"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}