import React from 'react'
import {
  CreditCard,
  FileText,
  Receipt,
  BookOpen,
  Truck,
  ClipboardList,
  Mail,
  Tag,
  Folder,
  Layers,
  BookMarked,
  NotebookText,
  Printer,
  ScrollText,
  StickyNote,
  Heart,
  Building2,
  Phone,
  MapPin,
} from 'lucide-react'

const COLORS = {
  warmWhite: '#FAF8F3',
  paper: '#FFFFFF',
  charcoal: '#201D1B',
  charcoalSoft: '#4A4541',
  footerBg: '#17140F',
  footerBgSoft: '#221E19',
  grey: '#8C857C',
  greyLine: '#E7E1D6',
  orange: '#E06B27',
  green: '#2E8B57',
  blue: '#2C5F8A',
}

const FONT_DISPLAY = "'Fraunces', 'Georgia', serif"
const FONT_BODY = "'Inter', system-ui, sans-serif"
const FONT_MONO = "'JetBrains Mono', 'Courier New', monospace"

const PHONE_PRIMARY = '8072363829'
const PHONE_DISPLAY = '8072363829 / 9345525445'
const EMAIL_1 = 'bmpprinter64@gmail.com'
const EMAIL_2 = 'sarathybm@gmail.com'
const ADDRESS = 'No. 51, Jayaram Street, West Saidapet, Chennai - 15.'
const GSTIN = '33ASKPP4877G1ZB'
const UDYAM = 'TN-02-0288639'

const SERVICES = [
  { n: '01', name: 'Visiting Card', icon: CreditCard },
  { n: '02', name: 'Letter Head', icon: FileText },
  { n: '03', name: 'Invoice', icon: Receipt },
  { n: '04', name: 'Ledger Book', icon: BookOpen },
  { n: '05', name: 'Delivery Challan', icon: Truck },
  { n: '06', name: 'Voucher Pads', icon: ClipboardList },
  { n: '07', name: 'All Kinds of Envelopes', icon: Mail },
  { n: '08', name: 'All Kinds of Stickers', icon: Tag },
  { n: '09', name: 'Files', icon: Folder },
  { n: '10', name: 'Brochure', icon: Layers },
  { n: '11', name: 'Catalogue', icon: BookMarked },
  { n: '12', name: 'Log Book', icon: NotebookText },
  { n: '13', name: 'Printer Forms', icon: Printer },
  { n: '14', name: 'Pamphlets', icon: ScrollText },
  { n: '15', name: 'Memo Pads (Writing Sheets)', icon: StickyNote },
  { n: '16', name: 'Wedding Cards', icon: Heart },
  { n: '17', name: 'All Kinds of Office Printing Jobs Works', icon: Building2 },
]

export default function Homepage() {
  return (
    <div id="top" style={{ fontFamily: FONT_BODY }} className="antialiased">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
      `}</style>

      {/* ============================= HERO ============================= */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: COLORS.warmWhite }}>
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-6 items-center">

            {/* Left: content */}
            <div className="max-w-xl">
              {/* Logo */}
              <img
                src="src/assets/logo1.png"
                alt="BMP Printers"
                className="h-14 sm:h-16 lg:h-28 w-auto mb-6 mx-auto lg:mx-0 block"
              />

              {/* Coming Soon — big statement */}
              <div className="flex items-center gap-3 mb-4">
                <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: COLORS.green }} />
                <h2
                  style={{ fontFamily: FONT_DISPLAY, color: COLORS.charcoal, letterSpacing: '0.02em' }}
                  className="text-4xl sm:text-5xl lg:text-[52px] font-semibold tracking-tight leading-none"
                >
                  Coming Soon
                </h2>
              </div>

              {/* BMP Printers — medium size */}
              <h1
                style={{ fontFamily: FONT_DISPLAY, color: COLORS.charcoalSoft }}
                className="text-2xl sm:text-3xl font-medium tracking-tight leading-tight mb-5"
              >
                BMP Printers
              </h1>

              <p
                style={{ fontFamily: FONT_BODY, color: COLORS.charcoalSoft }}
                className="text-lg sm:text-xl font-medium mb-4 leading-snug"
              >
                Professional Printing. Beautifully Delivered.
              </p>

              <div className="flex items-center gap-2.5 mb-5">
                <div className="h-px w-8" style={{ backgroundColor: COLORS.orange }} />
                <span
                  style={{ fontFamily: FONT_MONO, color: COLORS.orange, letterSpacing: '0.1em' }}
                  className="text-[11px] uppercase font-medium"
                >
                  All kinds of Printing &amp; Binding Works
                </span>
              </div>

              <p style={{ fontFamily: FONT_BODY, color: COLORS.grey }} className="text-[15px] leading-relaxed mb-8 max-w-md">
                Complete printing solutions for businesses, offices and personal requirements.
              </p>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  style={{ backgroundColor: COLORS.charcoal, fontFamily: FONT_BODY }}
                  className="inline-flex items-center gap-2 text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
                >
                  <Phone size={15} strokeWidth={2.2} />
                  Call Us
                </a>
                <a
                  href={`tel:${PHONE_PRIMARY}`}
                  style={{ fontFamily: FONT_MONO, color: COLORS.charcoalSoft }}
                  className="text-sm tracking-wide hover:opacity-70 transition-opacity"
                >
                  {PHONE_DISPLAY}
                </a>
              </div>
            </div>

            {/* Right: hero visual */}
            <div className="flex justify-center">
              <img
                src="src/assets/image1.png"
                alt="BMP Printers — printing and binding"
                className="w-full max-w-[300px] sm:max-w-[380px] lg:max-w-[560px] xl:max-w-[620px] h-auto"
              />
            </div>

          </div>
        </div>
      </section>

     {/* ============================ SERVICES ============================ */}
<section id="services" className="relative w-full overflow-hidden" style={{ backgroundColor: COLORS.warmgold }}>
  {/* decorative halftone dots at edges */}
  <div
    className="pointer-events-none absolute top-0 left-0 w-40 h-full"
    style={{
      backgroundImage: `radial-gradient(${COLORS.orange} 1px, transparent 1.4px)`,
      backgroundSize: '14px 14px',
      opacity: 0.12,
      maskImage: 'linear-gradient(to right, black, transparent)',
      WebkitMaskImage: 'linear-gradient(to right, black, transparent)',
    }}
  />
  <div
    className="pointer-events-none absolute top-0 right-0 w-40 h-full"
    style={{
      backgroundImage: `radial-gradient(${COLORS.blue} 1px, transparent 1.4px)`,
      backgroundSize: '14px 14px',
      opacity: 0.12,
      maskImage: 'linear-gradient(to left, black, transparent)',
      WebkitMaskImage: 'linear-gradient(to left, black, transparent)',
    }}
  />

  <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
    <div className="max-w-xl mx-auto text-center mb-12 sm:mb-14">
      <div
        className="inline-flex items-center justify-center w-11 h-11 rounded-xl mb-4"
        style={{ backgroundColor: `${COLORS.orange}1A` }}
      >
        <Printer size={20} strokeWidth={1.8} style={{ color: COLORS.orange }} />
      </div>
      <h2 style={{ fontFamily: FONT_DISPLAY, color: COLORS.charcoal }} className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3">
        Our Printing Services
      </h2>
      <p style={{ fontFamily: FONT_BODY, color: COLORS.grey }} className="text-[15px] leading-relaxed mb-5">
        Complete printing solutions for businesses, offices, events and everyday needs.
      </p>
      <div className="flex items-center justify-center gap-2">
        <div className="h-px w-8" style={{ backgroundColor: COLORS.greyLine }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.orange }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.green }} />
        <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: COLORS.blue }} />
        <div className="h-px w-8" style={{ backgroundColor: COLORS.greyLine }} />
      </div>
    </div>

    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
      {SERVICES.map((s, i) => {
        const Icon = s.icon
        const accent = [COLORS.orange, COLORS.blue, COLORS.green][i % 3]
        const isLast = s.n === '17'
        return (
          <div
            key={s.n}
            className={`group relative rounded-xl p-4 sm:p-5 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm ${
              isLast ? 'col-span-2 sm:col-span-3 lg:col-span-5 flex items-center gap-4' : ''
            }`}
            style={{ border: `1px solid ${COLORS.greyLine}`, backgroundColor: COLORS.paper }}
          >
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{ backgroundColor: `${accent}1A` }}
            >
              <Icon size={16} strokeWidth={1.8} style={{ color: accent }} />
            </div>

            {isLast ? (
              <div className="flex items-center gap-3">
                <span style={{ fontFamily: FONT_MONO, color: COLORS.grey }} className="text-[11px] tracking-widest">
                  {s.n}
                </span>
                <span style={{ fontFamily: FONT_BODY, color: COLORS.charcoal }} className="text-[14px] font-medium leading-snug">
                  {s.name}
                </span>
              </div>
            ) : (
              <>
                <span
                  style={{ fontFamily: FONT_MONO, color: COLORS.grey }}
                  className="absolute top-4 sm:top-5 right-4 sm:right-5 text-[11px] tracking-widest"
                >
                  {s.n}
                </span>
                <div style={{ fontFamily: FONT_BODY, color: COLORS.charcoal }} className="text-[13.5px] font-medium leading-snug mt-3">
                  {s.name}
                </div>
              </>
            )}
          </div>
        )
      })}
    </div>
  </div>
</section>
  
      {/* ============================= FOOTER ============================= */}
      <footer className="relative w-full" style={{ backgroundColor: COLORS.footerBg }}>
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(${COLORS.paper} 1px, transparent 1.4px)`,
            backgroundSize: '13px 13px',
            opacity: 0.03,
          }}
        />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 pt-14 sm:pt-16 pb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

            {/* Brand */}
            <div className="lg:col-span-1">
             

               <img
                src="src/assets/logo1.png"
                alt="BMP Printers"
                className="h-14 sm:h-16 lg:h-28 w-auto mb-6 mx-auto lg:mx-0 block"
              />
              <p style={{ fontFamily: FONT_MONO, color: COLORS.orange, letterSpacing: '0.08em' }} className="text-[11px] mt-4 mb-3">
                All kinds of Printing &amp; Binding Works
              </p>
              {/* <p style={{ fontFamily: FONT_BODY, color: '#8C857C' }} className="text-[13px] leading-relaxed max-w-[240px]">
                Professional printing solutions for businesses, offices, events and personal requirements.
              </p> */}
            </div>

            {/* Quick links */}
            <div>
              <h3 style={{ fontFamily: FONT_MONO, color: COLORS.paper, letterSpacing: '0.14em' }} className="text-[11px] uppercase mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#top" style={{ fontFamily: FONT_BODY, color: '#C8C2B6' }} className="text-[13.5px] hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" style={{ fontFamily: FONT_BODY, color: '#C8C2B6' }} className="text-[13.5px] hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#contact" style={{ fontFamily: FONT_BODY, color: '#C8C2B6' }} className="text-[13.5px] hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div id="contact">
              <h3 style={{ fontFamily: FONT_MONO, color: COLORS.paper, letterSpacing: '0.14em' }} className="text-[11px] uppercase mb-5">
                Contact Us
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-2.5">
                  <Phone size={14} className="mt-0.5 shrink-0" style={{ color: COLORS.orange }} />
                  <a href={`tel:${PHONE_PRIMARY}`} style={{ fontFamily: FONT_BODY, color: '#C8C2B6' }} className="text-[13.5px] hover:text-white transition-colors">
                    {PHONE_DISPLAY}
                  </a>
                </li>
                <li className="flex items-start gap-2.5">
                  <Mail size={14} className="mt-0.5 shrink-0" style={{ color: COLORS.green }} />
                  <div className="flex flex-col gap-1">
                    <a href={`mailto:${EMAIL_1}`} style={{ fontFamily: FONT_BODY, color: '#C8C2B6' }} className="text-[13.5px] hover:text-white transition-colors break-all">
                      {EMAIL_1}
                    </a>
                    <a href={`mailto:${EMAIL_2}`} style={{ fontFamily: FONT_BODY, color: '#C8C2B6' }} className="text-[13.5px] hover:text-white transition-colors break-all">
                      {EMAIL_2}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: COLORS.blue }} />
                  <span style={{ fontFamily: FONT_BODY, color: '#C8C2B6' }} className="text-[13.5px] leading-relaxed">
                    {ADDRESS}
                  </span>
                </li>
              </ul>
            </div>

            {/* Business info */}
            {/* <div>
              <h3 style={{ fontFamily: FONT_MONO, color: COLORS.paper, letterSpacing: '0.14em' }} className="text-[11px] uppercase mb-5">
                Business Information
              </h3>
              <ul className="space-y-3">
                <li>
                  <div style={{ fontFamily: FONT_MONO, color: COLORS.grey }} className="text-[10px] uppercase tracking-wider mb-1">
                    GSTIN
                  </div>
                  <div style={{ fontFamily: FONT_BODY, color: '#C8C2B6' }} className="text-[13.5px] tracking-wide">
                    {GSTIN}
                  </div>
                </li>
                <li>
                  <div style={{ fontFamily: FONT_MONO, color: COLORS.grey }} className="text-[10px] uppercase tracking-wider mb-1">
                    UDYAM
                  </div>
                  <div style={{ fontFamily: FONT_BODY, color: '#C8C2B6' }} className="text-[13.5px] tracking-wide">
                    {UDYAM}
                  </div>
                </li>
              </ul>
            </div> */}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 sm:mt-14 pt-6" style={{ borderTop: `1px solid ${COLORS.footerBgSoft}` }}>
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
              <p style={{ fontFamily: FONT_BODY, color: '#6B655D' }} className="text-[12.5px] text-center sm:text-left">
                © 2026 BMP Printers. All rights reserved. · Developed by{' '}
                <a
                  href="https://www.lowcostwebdesign.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: COLORS.orange }}
                  className="hover:opacity-80 transition-opacity"
                >
                  Low Cost Web Design
                </a>
              </p>
              <p style={{ fontFamily: FONT_MONO, color: '#6B655D', letterSpacing: '0.08em' }} className="text-[11px] uppercase">
                Chennai, Tamil Nadu, India
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}