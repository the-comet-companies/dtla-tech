import { audiences } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

const icons = [
  // Screen Printers
  <svg key="sp" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" /></svg>,
  // Embroidery
  <svg key="em" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><path strokeLinecap="round" strokeLinejoin="round" d="M9 14l2 2 4-4" /></svg>,
  // DTG/DTF
  <svg key="dtg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><line x1="3" y1="9" x2="21" y2="9" /><path d="M9 21V9" /></svg>,
  // Promo
  <svg key="pr" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="m3 11 18-5v12L3 14v-3z" /><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" /></svg>,
  // Multi-Location
  <svg key="ml" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>,
];

export default function WhoThisIsFor() {
  return (
    <section
      className="w-full py-[var(--section-padding-y)]"
      data-scroll-section
    >
      <div className="w-full px-[var(--container-padding-x)]" data-scroll-content>
        <div className="max-w-[80rem] mx-auto" data-scroll-heading>
          <SectionHeading
            label="Who This Is For"
            title="Built for every decoration method"
            subtitle="Whether you're running a single press or multiple facilities, our systems scale with you."
          />
        </div>

        {/* Bento grid — 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Screen Printers — large, spans 2 cols + 2 rows */}
          <div
            data-scroll-item
            className="md:col-span-2 md:row-span-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-8 lg:p-10 flex flex-col justify-end min-h-[320px] transition-all duration-300 hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-[0.75rem] bg-[var(--brand-10)] text-[var(--brand)] mb-5">
              {icons[0]}
            </div>
            <h3 className="text-xl font-bold text-[var(--text)] mb-2">{audiences[0].title}</h3>
            <p className="text-[0.9375rem] leading-relaxed text-[var(--text-secondary)] max-w-md">
              {audiences[0].description}
            </p>
          </div>

          {/* Embroidery */}
          <div
            data-scroll-item
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-6 flex flex-col justify-end transition-all duration-300 hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-[0.75rem] bg-[var(--brand-10)] text-[var(--brand)] mb-4">
              {icons[1]}
            </div>
            <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-1">
              {audiences[1].title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {audiences[1].description}
            </p>
          </div>

          {/* DTG/DTF */}
          <div
            data-scroll-item
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-6 flex flex-col justify-end transition-all duration-300 hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-[0.75rem] bg-[var(--brand-10)] text-[var(--brand)] mb-4">
              {icons[2]}
            </div>
            <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-1">
              {audiences[2].title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {audiences[2].description}
            </p>
          </div>

          {/* Promo Distributors */}
          <div
            data-scroll-item
            className="bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-6 flex flex-col justify-end transition-all duration-300 hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-[0.75rem] bg-[var(--brand-10)] text-[var(--brand)] mb-4">
              {icons[3]}
            </div>
            <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-1">
              {audiences[3].title}
            </h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              {audiences[3].description}
            </p>
          </div>

          {/* Multi-Location — spans 2 cols */}
          <div
            data-scroll-item
            className="md:col-span-2 bg-[var(--bg-card)] border border-[var(--border)] rounded-[16px] p-6 flex items-start gap-5 transition-all duration-300 hover:border-white/[0.15] hover:shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
          >
            <div className="inline-flex items-center justify-center w-11 h-11 rounded-[0.75rem] bg-[var(--brand-10)] text-[var(--brand)] shrink-0">
              {icons[4]}
            </div>
            <div>
              <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-1">
                {audiences[4].title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-[var(--text-secondary)]">
                {audiences[4].description}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-10" data-scroll-item>
          <InteractiveHoverButton href="#interest-form" variant="primary">
            Request Early Access
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
