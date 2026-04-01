"use client";

import { audiences, whoThisIsForSection } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

const codes = whoThisIsForSection.codes;

const icons = [
  // Screen Printers — squeegee/drop
  <svg key="sp" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>,
  // Embroidery — needle/thread
  <svg key="em" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" /></svg>,
  // DTG/DTF — printer
  <svg key="dtg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><path d="M9 21V9" /></svg>,
  // Promo — megaphone
  <svg key="pr" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>,
  // Multi-Location — people
  <svg key="ml" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
];

export default function WhoThisIsFor() {
  return (
    <section
      className="w-full py-[var(--section-padding-y)]"
      data-scroll-section
    >
      <div
        className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)]"
        data-scroll-content
      >
        <div data-scroll-heading>
          <SectionHeading
            label={whoThisIsForSection.label}
            title={whoThisIsForSection.title}
            subtitle={whoThisIsForSection.subtitle}
          />
        </div>

        {/* Editorial list */}
        <div className="relative">
          {audiences.map((audience, i) => (
            <div
              key={i}
              data-scroll-item
              className="group relative"
            >
              {/* Top border line */}
              {i === 0 && (
                <div className="absolute top-0 left-0 right-0 h-px bg-[var(--border)]" />
              )}

              <div className="relative flex items-center gap-6 md:gap-10 py-7 md:py-9 cursor-default">
                {/* Left: oversized number */}
                <div className="shrink-0 w-16 md:w-24 relative">
                  <span
                    className="block text-[3rem] md:text-[4.5rem] font-bold leading-none tracking-tighter transition-colors duration-500"
                    style={{
                      fontFamily: "var(--font-accent)",
                      color: "rgba(255,255,255,0.04)",
                    }}
                  >
                    <span className="group-hover:hidden">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className="hidden group-hover:block"
                      style={{ color: "var(--brand)", opacity: 0.15 }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </span>
                </div>

                {/* Coral accent bar */}
                <div
                  className="shrink-0 self-stretch transition-all duration-500 rounded-full"
                  style={{
                    width: 3,
                    backgroundColor: "rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="w-full h-0 group-hover:h-full rounded-full transition-all duration-500 ease-out"
                    style={{ backgroundColor: "var(--brand)" }}
                  />
                </div>

                {/* Code badge + icon */}
                <div className="shrink-0 hidden sm:flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-[var(--border)] flex items-center justify-center text-white/30 transition-all duration-300 group-hover:bg-[var(--brand-10)] group-hover:border-[var(--brand)]/20 group-hover:text-[var(--brand)]">
                    {icons[i]}
                  </div>
                  <span
                    className="text-[0.6875rem] font-semibold tracking-[0.15em] uppercase text-white/15 transition-colors duration-300 group-hover:text-[var(--brand)]/60"
                    style={{ fontFamily: "var(--font-accent)" }}
                  >
                    {codes[i]}—{String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-[1.125rem] md:text-[1.25rem] font-bold leading-tight text-[var(--text)] transition-all duration-300 group-hover:translate-x-1">
                    {audience.title}
                  </h3>
                  <p className="text-[0.875rem] md:text-[0.9375rem] leading-relaxed text-[var(--text-secondary)] mt-1 transition-all duration-300 group-hover:translate-x-1 group-hover:text-[var(--text-secondary)]">
                    {audience.description}
                  </p>
                </div>

                {/* Right arrow — appears on hover */}
                <div className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  <svg
                    className="w-4 h-4 text-[var(--brand)]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                    />
                  </svg>
                </div>
              </div>

              {/* Bottom border line */}
              <div className="h-px bg-[var(--border)]" />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12" data-scroll-item>
          <InteractiveHoverButton href={whoThisIsForSection.cta.href} variant="primary">
            {whoThisIsForSection.cta.text}
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
