import { features, featuresSection } from "@/lib/constants";
import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

/* Bento-style grid layout matching the design */
export default function FeatureCards() {
  return (
    <section
      id="features"
      className="w-full py-[var(--section-padding-y)] bg-[var(--bg-secondary)]"
      data-scroll-section
    >
      <div className="w-full px-[var(--container-padding-x)]" data-scroll-content>
        <div className="max-w-[80rem] mx-auto" data-scroll-heading>
          <SectionHeading
            label={featuresSection.label}
            title={featuresSection.title}
            subtitle={featuresSection.subtitle}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Row 1: Art Approval (wide) + 78+ AI Agents (tall right) */}
          <div
            data-scroll-item
            className="md:col-span-2 bg-[var(--bg-card)] rounded-[16px] border border-[var(--border)] p-7 flex items-center gap-6 transition-all duration-300 hover:shadow-[var(--shadow)]"
          >
            <div className="shrink-0">
              <img src="/art-approval.svg" alt="Art Approval" width={56} height={56} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] leading-tight mb-2">
                {features[0].title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-[var(--text)] opacity-75">
                {features[0].description}
              </p>
            </div>
          </div>

          <div
            data-scroll-item
            className="md:row-span-2 bg-[var(--bg-card)] rounded-[16px] border border-[var(--border)] p-7 flex flex-col items-center justify-center text-center transition-all duration-300 hover:shadow-[var(--shadow)]"
          >
            <div className="mb-4">
              <img src="/ai-agents.svg" alt="AI Agents" width={80} height={80} />
            </div>
            <h3 className="text-xl font-bold text-[var(--text)] leading-tight mb-2">
              {features[4].title}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-[var(--text)] opacity-75">
              {features[4].description}
            </p>
          </div>

          {/* Row 2: Production Tracking + Customer Portal */}
          <div
            data-scroll-item
            className="bg-[var(--bg-card)] rounded-[16px] border border-[var(--border)] p-7 transition-all duration-300 hover:shadow-[var(--shadow)]"
          >
            <div className="mb-4">
              <img src="/real-time.svg" alt="Real-Time Tracking" width={56} height={56} />
            </div>
            <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-2">
              {features[1].title}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-[var(--text)] opacity-75">
              {features[1].description}
            </p>
          </div>

          <div
            data-scroll-item
            className="relative bg-[var(--bg-card)] rounded-[16px] border border-[var(--border)] p-7 transition-all duration-300 hover:shadow-[var(--shadow)] overflow-hidden"
          >
            {/* Ribbon */}
            <svg
              aria-hidden="true"
              className="absolute top-0 right-5 w-7 h-10"
              viewBox="0 0 28 40"
              fill="var(--brand)"
            >
              <path d="M0 0h28v36l-14-6-14 6V0z" />
            </svg>

            <div className="mb-4">
              <img src="/customer.svg" alt="Customer Portal" width={56} height={56} />
            </div>
            <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-2">
              {features[3].title}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-[var(--text)] opacity-75">
              {features[3].description}
            </p>
          </div>

          {/* Row 3: Quoting System (wide) + N8N Integrations */}
          <div
            data-scroll-item
            className="md:col-span-2 bg-[var(--bg-card)] rounded-[16px] border border-[var(--border)] p-7 flex items-center gap-6 transition-all duration-300 hover:shadow-[var(--shadow)]"
          >
            <div className="shrink-0">
              <img src="/quoting.svg" alt="Quoting System" width={56} height={56} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[var(--text)] leading-tight mb-2">
                {features[2].title}
              </h3>
              <p className="text-[0.9375rem] leading-relaxed text-[var(--text)] opacity-75">
                {features[2].description}
              </p>
            </div>
          </div>

          <div
            data-scroll-item
            className="bg-[var(--bg-card)] rounded-[16px] border border-[var(--border)] p-7 transition-all duration-300 hover:shadow-[var(--shadow)]"
          >
            <div className="mb-4">
              <img src="/n8n.svg" alt="N8N Integrations" width={56} height={56} />
            </div>
            <h3 className="text-lg font-bold text-[var(--text)] leading-tight mb-2">
              {features[5].title}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-[var(--text)] opacity-75">
              {features[5].description}
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-10" data-scroll-item>
          <InteractiveHoverButton href={featuresSection.cta.href} variant="outline">
            {featuresSection.cta.text}
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
