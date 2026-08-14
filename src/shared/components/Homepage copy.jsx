import React from 'react'


const features = [
  {
    label: "High Quality Printing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l2.4 6.6L21 11l-6.6 2.4L12 20l-2.4-6.6L3 11l6.6-2.4L12 2z" />
      </svg>
    ),
  },
  {
    label: "Fast Turnaround On Time Delivery",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Modern Technology",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 7h10v10H7V7z" />
      </svg>
    ),
  },
  {
    label: "Affordable Pricing",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V6m0 10v2m9-8a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    label: "Customer Support",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
  },
];
 

export default function Homepage() {
  return (
    <section
      style={{ fontFamily: "'Poppins', sans-serif" }}
      className="w-full bg-[#0B1220] px-4 sm:px-6 lg:px-8 py-14 md:py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-8 items-center">
          {/* Left: text content */}
          <div>
            <h1 className="text-4xl sm:text-5xl xl:text-[3.4rem] font-bold text-white leading-tight tracking-tight">
              We Print
              <br />
              Your{" "}
              <span className="bg-gradient-to-r from-orange-400 via-fuchsia-500 to-indigo-400 bg-clip-text text-transparent">
                Imagination
              </span>
            </h1>
 
            <p className="mt-5 text-white/90 text-base sm:text-lg max-w-md">
              All Types of Printing Solutions
              <br />
              Under One Roof
            </p>
 
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-amber-400 hover:bg-amber-300 text-[#0B1220] text-sm font-semibold transition-colors shadow-md shadow-amber-400/20"
              >
                Get a Quote
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href="#"
                className="inline-flex items-center px-6 py-3 rounded-lg border border-white/25 hover:border-white/50 text-white text-sm font-semibold transition-colors"
              >
                Explore Services
              </a>
            </div>
 
            {/* Feature row */}
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-8">
              {features.map((f) => (
                <div key={f.label} className="flex flex-col items-start gap-2">
                  <div className="text-white/90">{f.icon}</div>
                  <p className="text-xs text-white/90 leading-snug max-w-[9rem]">
                    {f.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
 
          {/* Right: image placeholder */}
       <div className="relative flex items-center justify-center">
  <img
    src="src/assets/banner.png"
    alt="Printing products showcase"
    className="w-full h-auto object-contain"
  />
</div>


        </div>
      </div>
    </section>
  )
}
