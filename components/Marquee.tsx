import type { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  reverse?: boolean;
  pauseOnHover?: boolean;
  children: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
}

export default function Marquee({
  className = "",
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={`group flex gap-[var(--gap)] overflow-hidden [--duration:20s] [--gap:0.75rem] ${
        vertical ? "flex-col" : "flex-row"
      } ${className}`}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={`flex shrink-0 justify-around gap-[var(--gap)] ${
              vertical
                ? "flex-col animate-marquee-vertical"
                : reverse
                  ? "flex-row animate-marquee-reverse"
                  : "flex-row animate-marquee"
            } ${pauseOnHover ? "group-hover:[animation-play-state:paused]" : ""}`}
          >
            {children}
          </div>
        ))}
    </div>
  );
}
