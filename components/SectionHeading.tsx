export default function SectionHeading({
  label,
  title,
  subtitle,
  align = "center",
}: {
  label?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}) {
  return (
    <div
      className={`mb-12 ${align === "center" ? "text-center" : "text-left"}`}
      data-animate="fade-up"
    >
      {label && (
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.06] border border-[var(--border)] text-sm font-medium text-[var(--text)] mb-6">
          <span className="w-2 h-2 rounded-full bg-[var(--brand)]" />
          <span>{label}</span>
        </div>
      )}
      <h2 className="text-[clamp(1.75rem,1.4rem+1vw,2.5rem)] font-bold leading-[1.1] text-[var(--text)] mb-4">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg leading-relaxed text-[var(--text)] opacity-85 ${
            align === "center" ? "max-w-[42rem] mx-auto" : "max-w-[42rem]"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
