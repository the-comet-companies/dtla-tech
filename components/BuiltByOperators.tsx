import SectionHeading from "./SectionHeading";
import InteractiveHoverButton from "./InteractiveHoverButton";

export default function BuiltByOperators() {
  const stats = [
    { value: "1000", suffix: "s+", label: "Orders Processed" },
    { value: "78", suffix: "+", label: "AI Agents" },
    { value: "24", suffix: "/7", label: "System Uptime" },
    { value: "Years", suffix: "", label: "Battle-Tested" },
  ];

  return (
    <section
      id="about"
      className="w-full py-[var(--section-padding-y)] bg-gradient-to-b from-[#0F1420] to-[#0A0E1A] text-white overflow-hidden border-y border-white/[0.04]"
      data-scroll-section
    >
      <div className="w-full px-[var(--container-padding-x)]" data-scroll-content>
        <div data-scroll-heading>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.08] border border-white/[0.15] text-sm font-medium text-white mb-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
            <span className="w-2 h-2 rounded-full bg-[var(--brand)]" />
            <span>Built by operators, for operators</span>
          </div>
          <h2 className="text-[clamp(1.75rem,1.4rem+1vw,2.5rem)] font-bold leading-[1.1] text-white max-w-3xl mb-6">
            This isn&apos;t theory.
            <br />
            It&apos;s battle-tested daily.
          </h2>
          <p className="text-lg leading-relaxed text-white/80 max-w-2xl mb-12">
            Every feature in this platform was developed in-house at DTLA
            Print — a real decoration shop processing thousands of orders.
            We didn&apos;t build software and then look for a market. We built
            it because we needed it.
          </p>
        </div>

        <div className="h-px bg-white/[0.15] mb-12" data-animate="line" />

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
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

        <div className="flex justify-center mt-12" data-scroll-item>
          <InteractiveHoverButton href="#interest-form" variant="primary">
            License Our Tech Stack
          </InteractiveHoverButton>
        </div>
      </div>
    </section>
  );
}
