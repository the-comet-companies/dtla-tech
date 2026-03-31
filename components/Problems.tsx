import { painPoints } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

export default function Problems() {
  return (
    <section
      id="problem"
      className="relative w-full py-[var(--section-padding-y)] bg-[var(--bg-secondary)] overflow-hidden"
      data-scroll-section
    >
      {/* Watermark text */}
      <div
        aria-hidden="true"
        className="absolute bottom-6 right-[var(--container-padding-x)] select-none pointer-events-none text-[clamp(4rem,8vw,7rem)] font-extrabold uppercase leading-none tracking-tight text-[var(--text)] opacity-[0.04]"
      >
        BROKEN SYSTEMS
      </div>

      <div className="relative w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)]" data-scroll-content>
        <div data-scroll-heading>
          <SectionHeading
            label="The Problem"
            title="Sound familiar?"
            align="left"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-[var(--border)] rounded-[14px] overflow-hidden">
          {painPoints.map((point, i) => {
            const isLast = i === painPoints.length - 1;
            return (
              <div
                key={point.number}
                data-scroll-item
                className={`bg-[var(--bg-card)] p-6 ${
                  isLast ? "sm:col-span-2 border-t border-[var(--border)]" : ""
                } ${
                  !isLast && i <= 1 ? "border-b border-[var(--border)]" : ""
                } ${
                  !isLast && i % 2 === 0 ? "sm:border-r sm:border-[var(--border)]" : ""
                }`}
              >
                <div className="flex items-start gap-5">
                  <span className="shrink-0 inline-flex items-center justify-center w-11 h-11 rounded-[0.75rem] bg-[var(--brand-10)] text-[var(--brand)] text-sm font-bold">
                    {String(point.number).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-1.5">
                      {point.title}
                    </h3>
                    <p className="text-[0.9375rem] leading-relaxed text-[var(--text)] opacity-75">
                      {point.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex justify-center mt-10" data-scroll-item>
          <InteractiveHoverButton href="#interest-form" variant="primary">
            See How We Solve This
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
