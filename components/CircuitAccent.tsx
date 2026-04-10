"use client";

import { useId } from "react";

type CircuitAccentProps = {
  variant: "left" | "right" | "top" | "bottom";
  className?: string;
  /** Opacity multiplier for the whole circuit (0–1). Default 0.4 */
  opacity?: number;
};

/**
 * Reusable circuit/trace accent with animated brand pulse.
 * Slim variants of the hero CircuitLines component.
 *
 * - "left" / "right": vertical strip (160px wide, full section height)
 * - "top" / "bottom": horizontal strip (160px tall, full section width)
 */
export default function CircuitAccent({
  variant,
  className = "",
  opacity = 0.4,
}: CircuitAccentProps) {
  const id = useId();
  const grad1 = `${id}-g1`;
  const grad2 = `${id}-g2`;
  const grad3 = `${id}-g3`;

  if (variant === "left" || variant === "right") {
    const isMirrored = variant === "right";
    return (
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute top-0 h-full w-[160px] ${
          variant === "left" ? "left-0" : "right-0"
        } ${className}`}
        style={{ opacity, transform: isMirrored ? "scaleX(-1)" : undefined }}
      >
        <svg
          className="h-full w-full"
          viewBox="0 0 160 900"
          fill="none"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id={grad1} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="#0066CC" stopOpacity="0" />
              <stop offset="50%" stopColor="#0066CC" stopOpacity="1" />
              <stop offset="65%" stopColor="#0066CC" stopOpacity="0" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="0 -1"
                to="0 1"
                dur="9s"
                repeatCount="indefinite"
              />
            </linearGradient>
            <linearGradient id={grad2} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="#0066CC" stopOpacity="0" />
              <stop offset="50%" stopColor="#0066CC" stopOpacity="0.85" />
              <stop offset="65%" stopColor="#0066CC" stopOpacity="0" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="0 -1"
                to="0 1"
                dur="12s"
                repeatCount="indefinite"
              />
            </linearGradient>
          </defs>

          {/* Static traces */}
          <path
            d="M50 0 L50 200 L100 240 L100 380 L60 410 L60 540 L90 570 L90 700 L50 730 L50 900"
            stroke="rgba(0,0,0,0.05)"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M90 0 L90 140 L40 180 L40 360 L75 390 L75 500 L45 530 L45 680 L70 710 L70 900"
            stroke="rgba(0,0,0,0.04)"
            strokeWidth="1.5"
            fill="none"
          />

          {/* Animated pulses */}
          <path
            d="M50 0 L50 200 L100 240 L100 380 L60 410 L60 540 L90 570 L90 700 L50 730 L50 900"
            stroke={`url(#${grad1})`}
            strokeWidth="2.5"
            fill="none"
          />
          <path
            d="M90 0 L90 140 L40 180 L40 360 L75 390 L75 500 L45 530 L45 680 L70 710 L70 900"
            stroke={`url(#${grad2})`}
            strokeWidth="2"
            fill="none"
          />

          {/* Nodes */}
          <circle cx="50" cy="200" r="3.5" fill="#0066CC" opacity="0.4" />
          <circle cx="100" cy="240" r="3" fill="#0066CC" opacity="0.35" />
          <circle cx="60" cy="410" r="3.5" fill="#0066CC" opacity="0.4" />
          <circle cx="90" cy="570" r="3" fill="#0066CC" opacity="0.35" />
          <circle cx="50" cy="730" r="3.5" fill="#0066CC" opacity="0.4" />
          <circle cx="40" cy="180" r="3" fill="#0066CC" opacity="0.3" />
          <circle cx="75" cy="390" r="3.5" fill="#0066CC" opacity="0.35" />
          <circle cx="45" cy="530" r="3" fill="#0066CC" opacity="0.3" />
          <circle cx="70" cy="710" r="3.5" fill="#0066CC" opacity="0.35" />

          {/* Square chip nodes */}
          <rect
            x="76"
            y="195"
            width="6"
            height="6"
            rx="1"
            fill="#0066CC"
            opacity="0.3"
          />
          <rect
            x="86"
            y="405"
            width="6"
            height="6"
            rx="1"
            fill="#0066CC"
            opacity="0.3"
          />
          <rect
            x="116"
            y="565"
            width="6"
            height="6"
            rx="1"
            fill="#0066CC"
            opacity="0.25"
          />
        </svg>
      </div>
    );
  }

  // Horizontal variants (top / bottom)
  const isBottom = variant === "bottom";
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute left-0 w-full h-[160px] ${
        isBottom ? "bottom-0" : "top-0"
      } ${className}`}
      style={{ opacity, transform: isBottom ? "scaleY(-1)" : undefined }}
    >
      <svg
        className="h-full w-full"
        viewBox="0 0 1440 160"
        fill="none"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={grad1} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="35%" stopColor="#0066CC" stopOpacity="0" />
            <stop offset="50%" stopColor="#0066CC" stopOpacity="1" />
            <stop offset="65%" stopColor="#0066CC" stopOpacity="0" />
            <stop offset="100%" stopColor="transparent" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="10s"
              repeatCount="indefinite"
            />
          </linearGradient>
          <linearGradient id={grad2} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="35%" stopColor="#0066CC" stopOpacity="0" />
            <stop offset="50%" stopColor="#0066CC" stopOpacity="0.85" />
            <stop offset="65%" stopColor="#0066CC" stopOpacity="0" />
            <stop offset="100%" stopColor="transparent" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="13s"
              repeatCount="indefinite"
            />
          </linearGradient>
          <linearGradient id={grad3} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="35%" stopColor="#0066CC" stopOpacity="0" />
            <stop offset="50%" stopColor="#0066CC" stopOpacity="0.7" />
            <stop offset="65%" stopColor="#0066CC" stopOpacity="0" />
            <stop offset="100%" stopColor="transparent" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="11s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        {/* Static traces */}
        <path
          d="M0 50 L200 50 L240 90 L420 90 L460 60 L660 60 L700 100 L900 100 L940 70 L1140 70 L1180 100 L1440 100"
          stroke="rgba(0,0,0,0.05)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0 110 L160 110 L200 75 L380 75 L420 110 L620 110 L660 80 L860 80 L900 115 L1100 115 L1140 85 L1440 85"
          stroke="rgba(0,0,0,0.04)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0 30 L260 30 L300 65 L500 65 L540 35 L780 35 L820 70 L1020 70 L1060 40 L1280 40 L1320 70 L1440 70"
          stroke="rgba(0,0,0,0.035)"
          strokeWidth="1"
          fill="none"
        />

        {/* Animated pulse traces */}
        <path
          d="M0 50 L200 50 L240 90 L420 90 L460 60 L660 60 L700 100 L900 100 L940 70 L1140 70 L1180 100 L1440 100"
          stroke={`url(#${grad1})`}
          strokeWidth="2.5"
          fill="none"
        />
        <path
          d="M0 110 L160 110 L200 75 L380 75 L420 110 L620 110 L660 80 L860 80 L900 115 L1100 115 L1140 85 L1440 85"
          stroke={`url(#${grad2})`}
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M0 30 L260 30 L300 65 L500 65 L540 35 L780 35 L820 70 L1020 70 L1060 40 L1280 40 L1320 70 L1440 70"
          stroke={`url(#${grad3})`}
          strokeWidth="1.5"
          fill="none"
        />

        {/* Junction nodes */}
        <circle cx="240" cy="90" r="3.5" fill="#0066CC" opacity="0.4" />
        <circle cx="460" cy="60" r="3" fill="#0066CC" opacity="0.35" />
        <circle cx="700" cy="100" r="3.5" fill="#0066CC" opacity="0.4" />
        <circle cx="940" cy="70" r="3" fill="#0066CC" opacity="0.35" />
        <circle cx="1180" cy="100" r="3.5" fill="#0066CC" opacity="0.4" />
        <circle cx="200" cy="75" r="3" fill="#0066CC" opacity="0.3" />
        <circle cx="420" cy="110" r="3" fill="#0066CC" opacity="0.3" />
        <circle cx="660" cy="80" r="3.5" fill="#0066CC" opacity="0.35" />
        <circle cx="900" cy="115" r="3" fill="#0066CC" opacity="0.3" />
        <circle cx="1140" cy="85" r="3.5" fill="#0066CC" opacity="0.35" />
        <circle cx="300" cy="65" r="3" fill="#0066CC" opacity="0.3" />
        <circle cx="540" cy="35" r="3" fill="#0066CC" opacity="0.3" />
        <circle cx="820" cy="70" r="3.5" fill="#0066CC" opacity="0.35" />
        <circle cx="1060" cy="40" r="3" fill="#0066CC" opacity="0.3" />

        {/* Vertical branch ticks */}
        <line x1="240" y1="90" x2="240" y2="120" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" />
        <line x1="460" y1="60" x2="460" y2="30" stroke="rgba(0,0,0,0.05)" strokeWidth="1.5" />
        <line x1="700" y1="100" x2="700" y2="135" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5" />
        <line x1="940" y1="70" x2="940" y2="40" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5" />
        <line x1="1180" y1="100" x2="1180" y2="130" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5" />
        <line x1="540" y1="35" x2="540" y2="10" stroke="rgba(0,0,0,0.04)" strokeWidth="1.5" />

        {/* Square chip nodes */}
        <rect x="237" y="115" width="6" height="6" rx="1" fill="#0066CC" opacity="0.3" />
        <rect x="457" y="20" width="6" height="6" rx="1" fill="#0066CC" opacity="0.3" />
        <rect x="697" y="130" width="6" height="6" rx="1" fill="#0066CC" opacity="0.25" />
        <rect x="937" y="30" width="6" height="6" rx="1" fill="#0066CC" opacity="0.25" />
        <rect x="1177" y="125" width="6" height="6" rx="1" fill="#0066CC" opacity="0.3" />
      </svg>
    </div>
  );
}
