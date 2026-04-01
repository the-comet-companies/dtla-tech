import { builtByOperatorsSection, operatorStats } from "@/lib/constants";

export default function BuiltByOperators() {

  return (
    <section
      id="about"
      className="w-full py-[var(--section-padding-y)] bg-gradient-to-b from-[#0F1420] to-[#0A0E1A] text-white overflow-hidden border-y border-white/[0.04]"
      data-scroll-section
    >
      <div className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)]" data-scroll-content>
        <div data-scroll-heading className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15] text-sm font-medium text-white mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <span className="w-2 h-2 rounded-full bg-[var(--brand)]" />
            <span>{builtByOperatorsSection.badge}</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.4rem+1vw,2.5rem)] font-bold leading-[1.1] text-white max-w-3xl mx-auto mb-6">
            {builtByOperatorsSection.titleLine1}
            <br />
            {builtByOperatorsSection.titleLine2}
          </h2>
          <p className="text-lg leading-relaxed text-white/80 max-w-2xl mx-auto mb-12">
            {builtByOperatorsSection.description}
          </p>
        </div>

        <div className="h-px bg-white/[0.15] mb-12" data-animate="line" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {operatorStats.map((stat) => (
            <div key={stat.label} data-scroll-item>
              <p className="text-4xl md:text-5xl font-bold text-white">
                <span data-animate="counter" data-value={stat.value}>
                  {stat.value}
                </span>
                {stat.suffix}
              </p>
              <p className="text-sm text-white/50 mt-2 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
