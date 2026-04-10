import { offerings, whatsAvailableSection } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

export default function WhatsAvailable() {
  return (
    <section
      id="whats-available"
      className="w-full py-[var(--section-padding-y)] bg-[var(--bg-secondary)]"
      data-scroll-section
    >
      <div className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)]" data-scroll-content>
        <div data-scroll-heading>
          <SectionHeading
            label={whatsAvailableSection.label}
            title={whatsAvailableSection.title}
            subtitle={whatsAvailableSection.subtitle}
          />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering) => (
            <div
              key={offering.title}
              data-scroll-item
              className="bg-[var(--bg-card)] rounded-[14px] border border-[var(--border)] p-6 flex flex-col transition-all duration-300 hover:shadow-[var(--shadow)]"
            >
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-[0.75rem] bg-[var(--brand-10)] text-[var(--brand)] mb-4">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>

              <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-2">
                {offering.title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-[var(--text)] opacity-75 mb-5">
                {offering.description}
              </p>

              <div className="h-px bg-[var(--border)] mb-5" data-animate="line" />

              <ul className="space-y-3 mt-auto">
                {offering.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="flex items-start gap-3 text-[0.9375rem] text-[var(--text)] opacity-75"
                  >
                    <svg
                      className="w-4 h-4 shrink-0 mt-0.5 text-[var(--brand)]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path
                        d="M9 12l2 2 4-4"
                        fill="none"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10" data-scroll-item>
          <InteractiveHoverButton href={whatsAvailableSection.cta.href} variant="primary">
            {whatsAvailableSection.cta.text}
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
