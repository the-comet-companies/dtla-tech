import { builtByOperatorsSection, operatorStats } from "@/lib/constants";

export default function BuiltByOperators() {

  return (
    <section
      id="about"
      className="w-full py-[var(--section-padding-y)] bg-[var(--bg-secondary)] overflow-hidden border-y border-[var(--structural-border)]"
      data-scroll-section
    >
      <div className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)]" data-scroll-content>
        <div data-scroll-heading className="text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/[0.04] border border-[var(--structural-border)] text-sm font-medium text-[var(--text)] mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <span className="w-2 h-2 rounded-full bg-[var(--brand)]" />
            <span>{builtByOperatorsSection.badge}</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.4rem+1vw,2.5rem)] font-bold leading-[1.1] text-[var(--text)] max-w-3xl mx-auto mb-6">
            {builtByOperatorsSection.titleLine1}
            <br />
            {builtByOperatorsSection.titleLine2}
          </h2>
          <p className="text-lg leading-relaxed text-[var(--text-secondary)] max-w-2xl mx-auto mb-12">
            {builtByOperatorsSection.description}
          </p>
        </div>

        <div className="h-px bg-[var(--structural-border)] mb-12" data-animate="line" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {operatorStats.map((stat) => (
            <div key={stat.label} data-scroll-item>
              <p className="text-4xl md:text-5xl font-bold text-[var(--text)]">
                <span data-animate="counter" data-value={stat.value}>
                  {stat.value}
                </span>
                {stat.suffix}
              </p>
              <p className="text-sm text-[var(--text-secondary)] mt-2 uppercase tracking-wider font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
