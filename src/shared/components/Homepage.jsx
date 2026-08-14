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

const HERO_BG_IMAGE = 'assets/image2.png'
const LOGO_IMAGE = 'assets/logo1.png'

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
  {
    n: '17',
    name: 'All Kinds of Office Printing Jobs Works',
    icon: Building2,
  },
]

export default function Homepage() {
  return (
    <div
      id="top"
      style={{ fontFamily: FONT_BODY }}
      className="antialiased"
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap');
      `}</style>

      {/* ============================= HERO ============================= */}

      <section
        className="relative w-full overflow-hidden bg-cover bg-center"
        style={{
          backgroundImage: `url(${HERO_BG_IMAGE})`,
          
        }}
      >
        {/* HERO OVERLAY */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(180deg, rgba(23,20,15,0.55) 0%, rgba(23,20,15,0.72) 55%, rgba(23,20,15,0.85) 100%)',
          }}
        />

        <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-12 py-16 sm:py-24 lg:py-32">
          <div className="flex flex-col items-center text-center">

            {/* LOGO */}

            <img
              src={LOGO_IMAGE}
              alt="BMP Printers"
              className="h-20 sm:h-28 lg:h-36 w-auto mb-6 sm:mb-8 block"
            />

            {/* COMING SOON */}

            <h2
              style={{
                fontFamily: FONT_DISPLAY,
                color: COLORS.paper,
                letterSpacing: '0.02em',
              }}
              className="text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-none mb-4 sm:mb-6"
            >
              Coming Soon
            </h2>

            {/* COMPANY NAME */}

            <h1
              style={{
                fontFamily: FONT_DISPLAY,
                color: COLORS.paper,
              }}
              className="text-xl sm:text-2xl lg:text-3xl font-medium tracking-tight leading-tight mb-8 sm:mb-10 opacity-90"
            >
              BMP Printers
            </h1>

            {/* CALL BUTTON + PHONE */}

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

              {/* CALL BUTTON */}
              <a
                href={`tel:${PHONE_PRIMARY}`}
                style={{
                  backgroundColor: COLORS.orange,
                  fontFamily: FONT_BODY,
                }}
                className="inline-flex items-center gap-2 text-white text-sm font-medium px-6 py-3 rounded-full hover:opacity-90 transition-opacity"
              >
                <Phone size={15} strokeWidth={2.2} />
                Call Us
              </a>

              {/* PHONE NUMBER */}
              <a
                href={`tel:${PHONE_PRIMARY}`}
                style={{
                  fontFamily: FONT_MONO,
                  color: COLORS.paper,
                }}
                className="text-sm tracking-wide hover:opacity-70 transition-opacity"
              >
                {PHONE_DISPLAY}
              </a>

            </div>
          </div>
        </div>
      </section>

      {/* ============================ SERVICES ============================ */}

  
<section
  id="services"
  className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
  style={{ backgroundColor: COLORS.footerBg }}
>
  {/* soft background glow */}
  <div
    className="pointer-events-none absolute inset-0"
    style={{
      background:
        'radial-gradient(circle at 10% 15%, rgba(224,107,39,0.14), transparent 26%), radial-gradient(circle at 88% 78%, rgba(224,107,39,0.08), transparent 24%)',
    }}
  />

  <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
    {/* heading */}
    <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
      <div className="mb-5 flex items-center justify-center gap-3">
        <span
          className="h-px w-10"
          style={{ backgroundColor: 'rgba(255,255,255,0.24)' }}
        />
        <span
          className="flex h-11 w-11 items-center justify-center rounded-full border"
          style={{
            color: COLORS.orange,
            borderColor: 'rgba(224,107,39,0.55)',
            backgroundColor: 'rgba(224,107,39,0.10)',
          }}
        >
          <Printer size={19} strokeWidth={1.8} />
        </span>
        <span
          className="h-px w-10"
          style={{ backgroundColor: 'rgba(255,255,255,0.24)' }}
        />
      </div>

      <p
        className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em]"
        style={{ fontFamily: FONT_MONO, color: COLORS.orange }}
      >
        BMP Printers
      </p>

      <h2
        className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        style={{ fontFamily: FONT_DISPLAY, color: COLORS.paper }}
      >
        Our Printing Services
      </h2>

      <p
        className="mx-auto mt-4 max-w-xl text-sm leading-7 sm:text-[15px]"
        style={{ color: 'rgba(255,255,255,0.62)' }}
      >
        Complete printing solutions for businesses, offices, events and
        everyday needs.
      </p>
    </div>

    {/* equal-width responsive service cards */}
    <div className="grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2">
      {SERVICES.map((s) => {
        const Icon = s.icon

        return (
          <article
            key={s.n}
            className="group relative flex min-w-0 items-center overflow-hidden rounded-2xl border px-4 py-4 transition duration-300 hover:-translate-y-1 sm:px-5 sm:py-5"
            style={{
              borderColor: 'rgba(255,255,255,0.12)',
              backgroundColor: 'rgba(255,255,255,0.035)',
            }}
          >
            <div
              className="absolute inset-x-0 top-0 h-px origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
              style={{ backgroundColor: COLORS.orange }}
            />

            <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
              <div
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition duration-300 group-hover:scale-110"
                style={{
                  color: COLORS.orange,
                  borderColor: 'rgba(224,107,39,0.55)',
                  backgroundColor: 'rgba(224,107,39,0.11)',
                }}
              >
                <Icon size={18} strokeWidth={1.8} />
              </div>

              <div className="min-w-0 flex-1">
                <span
                  className="mb-1 block text-[10px] font-medium tracking-[0.18em]"
                  style={{
                    fontFamily: FONT_MONO,
                    color: 'rgba(255,255,255,0.42)',
                  }}
                >
                  SERVICE {s.n}
                </span>

                <h3
                  className="break-words text-sm font-medium leading-snug sm:text-[15px]"
                  style={{ color: COLORS.paper }}
                >
                  {s.name}
                </h3>
              </div>

              <span
                className="hidden h-2 w-2 shrink-0 rounded-full sm:block"
                style={{
                  backgroundColor: COLORS.orange,
                  boxShadow: '0 0 0 5px rgba(224,107,39,0.10)',
                }}
              />
            </div>
          </article>
        )
      })}
    </div>
  </div>
</section>


{/* ========================= CTA ========================= */}
<section
  id="order-cta"
  className="relative w-full overflow-hidden"
  style={{
    backgroundColor: COLORS.warmWhite,
  }}
>
  <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-14">

    <div
      className="
        relative overflow-hidden rounded-[22px]
        border px-6 py-7
        sm:px-8 sm:py-8
        lg:px-10 lg:py-9
      "
      style={{
        backgroundColor: COLORS.paper,
        borderColor: COLORS.greyLine,
        boxShadow: '0 12px 35px rgba(32,29,27,0.07)',
      }}
    >

      {/* Subtle decorative shape */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full"
        style={{
          border: `1px solid ${COLORS.greyLine}`,
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-20 right-20 h-32 w-32 rounded-full"
        style={{
          border: `1px solid ${COLORS.greyLine}`,
        }}
      />

      {/* Content */}
      <div
        className="
          relative z-10
          flex flex-col gap-6
          lg:flex-row lg:items-center lg:justify-between
        "
      >

        {/* Left Content */}
        <div className="min-w-0 max-w-2xl">

          <span
            className="
              mb-3 inline-flex
              rounded-full px-3 py-1
              text-[10px] font-semibold uppercase
              tracking-[0.18em]
            "
            style={{
              fontFamily: FONT_MONO,
              color: COLORS.orange,
              backgroundColor: `${COLORS.orange}12`,
            }}
          >
            BMP Printers
          </span>

          <h2
            className="
              text-2xl font-semibold leading-tight
              sm:text-3xl
            "
            style={{
              fontFamily: FONT_DISPLAY,
              color: COLORS.charcoal,
            }}
          >
            Need Something Printed?
          </h2>

          <p
            className="
              mt-2 max-w-xl
              text-sm leading-6
              sm:text-[15px]
            "
            style={{
              fontFamily: FONT_BODY,
              color: COLORS.charcoalSoft,
            }}
          >
            Tell us what you need and let BMP Printers turn your
            ideas into quality prints.
          </p>

        </div>

        {/* Right Button */}
        <div className="shrink-0 lg:pl-8">

          <a
            href="#top"
            className="
              inline-flex w-full items-center justify-center
              gap-2 rounded-full
              px-6 py-3.5
              text-sm font-semibold
              transition-all duration-200
              hover:-translate-y-0.5
              hover:shadow-md
              sm:w-auto
            "
            style={{
              backgroundColor: COLORS.charcoal,
              color: COLORS.paper,
              fontFamily: FONT_BODY,
            }}
          >
            Order Now
            <span aria-hidden="true">→</span>
          </a>

        </div>

      </div>
    </div>

  </div>
</section>


      {/* ============================= FOOTER ============================= */}

      <footer
        className="w-full"
        style={{ backgroundColor: COLORS.footerBg }}
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12 py-4 sm:py-5">

          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-center sm:text-left">

            {/* COPYRIGHT */}

            <p
              style={{
                fontFamily: FONT_BODY,
                color: '#C8C2B6',
              }}
              className="text-[12.5px]"
            >
              © 2026 BMP Printers. All Rights Reserved.
            </p>

            {/* DEVELOPER */}

            <p
              style={{
                fontFamily: FONT_BODY,
                color: '#C8C2B6',
              }}
              className="text-[12.5px]"
            >
              Developed by{' '}

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

          </div>
        </div>
      </footer>

    </div>
  )
}