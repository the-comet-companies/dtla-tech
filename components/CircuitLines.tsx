"use client";

export default function CircuitLines() {
  return (
    <>
      {/* Left circuit */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 h-full w-[180px] opacity-[0.4]"
      >
        <svg className="h-full w-full" viewBox="0 0 180 900" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pulseL1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="50%" stopColor="#F05C4E" stopOpacity="1" />
              <stop offset="65%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform attributeName="gradientTransform" type="translate" from="0 -1" to="0 1" dur="8s" repeatCount="indefinite" />
            </linearGradient>
            <linearGradient id="pulseL2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="50%" stopColor="#F05C4E" stopOpacity="1" />
              <stop offset="65%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform attributeName="gradientTransform" type="translate" from="0 -1" to="0 1" dur="11s" repeatCount="indefinite" />
            </linearGradient>
            <linearGradient id="pulseL3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="50%" stopColor="#F05C4E" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform attributeName="gradientTransform" type="translate" from="0 -1" to="0 1" dur="9.5s" repeatCount="indefinite" />
            </linearGradient>
          </defs>

          {/* Static circuit traces — thicker */}
          <path d="M60 0 L60 180 L120 220 L120 380 L75 410 L75 520 L105 540 L105 650 L60 680 L60 900" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
          <path d="M105 0 L105 120 L45 160 L45 340 L90 370 L90 480 L50 510 L50 620 L80 640 L80 900" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
          <path d="M30 0 L30 250 L80 280 L80 450 L35 480 L35 600 L75 630 L75 750 L45 780 L45 900" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />

          {/* Animated pulse traces — thicker */}
          <path d="M60 0 L60 180 L120 220 L120 380 L75 410 L75 520 L105 540 L105 650 L60 680 L60 900" stroke="url(#pulseL1)" strokeWidth="3" fill="none" />
          <path d="M105 0 L105 120 L45 160 L45 340 L90 370 L90 480 L50 510 L50 620 L80 640 L80 900" stroke="url(#pulseL2)" strokeWidth="2.5" fill="none" />
          <path d="M30 0 L30 250 L80 280 L80 450 L35 480 L35 600 L75 630 L75 750 L45 780 L45 900" stroke="url(#pulseL3)" strokeWidth="2" fill="none" />

          {/* Circuit nodes — bigger */}
          <circle cx="60" cy="180" r="4" fill="#F05C4E" opacity="0.4" />
          <circle cx="120" cy="220" r="3.5" fill="#F05C4E" opacity="0.35" />
          <circle cx="75" cy="410" r="4" fill="#F05C4E" opacity="0.4" />
          <circle cx="105" cy="540" r="3.5" fill="#F05C4E" opacity="0.35" />
          <circle cx="60" cy="680" r="4" fill="#F05C4E" opacity="0.4" />
          <circle cx="45" cy="160" r="3.5" fill="#F05C4E" opacity="0.3" />
          <circle cx="90" cy="370" r="4" fill="#F05C4E" opacity="0.35" />
          <circle cx="50" cy="510" r="3.5" fill="#F05C4E" opacity="0.3" />
          <circle cx="80" cy="640" r="4" fill="#F05C4E" opacity="0.35" />
          <circle cx="80" cy="280" r="3.5" fill="#F05C4E" opacity="0.3" />
          <circle cx="35" cy="480" r="3.5" fill="#F05C4E" opacity="0.3" />
          <circle cx="75" cy="630" r="4" fill="#F05C4E" opacity="0.35" />

          {/* Horizontal branch ticks — thicker */}
          <line x1="60" y1="180" x2="90" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <line x1="75" y1="410" x2="110" y2="410" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <line x1="105" y1="540" x2="140" y2="540" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
          <line x1="45" y1="340" x2="15" y2="340" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
          <line x1="35" y1="480" x2="8" y2="480" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
          <line x1="80" y1="280" x2="120" y2="280" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />

          {/* Square nodes — bigger */}
          <rect x="86" y="175" width="7" height="7" rx="1.5" fill="#F05C4E" opacity="0.3" />
          <rect x="106" y="405" width="7" height="7" rx="1.5" fill="#F05C4E" opacity="0.3" />
          <rect x="136" y="535" width="7" height="7" rx="1.5" fill="#F05C4E" opacity="0.25" />
          <rect x="116" y="275" width="7" height="7" rx="1.5" fill="#F05C4E" opacity="0.25" />
        </svg>
      </div>

      {/* Right circuit — mirrored */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-full w-[180px] opacity-[0.4]"
        style={{ transform: "scaleX(-1)" }}
      >
        <svg className="h-full w-full" viewBox="0 0 180 900" fill="none" preserveAspectRatio="none">
          <defs>
            <linearGradient id="pulseR1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="50%" stopColor="#F05C4E" stopOpacity="1" />
              <stop offset="65%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform attributeName="gradientTransform" type="translate" from="0 1" to="0 -1" dur="9s" repeatCount="indefinite" />
            </linearGradient>
            <linearGradient id="pulseR2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="50%" stopColor="#F05C4E" stopOpacity="1" />
              <stop offset="65%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform attributeName="gradientTransform" type="translate" from="0 1" to="0 -1" dur="10.5s" repeatCount="indefinite" />
            </linearGradient>
            <linearGradient id="pulseR3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="transparent" />
              <stop offset="35%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="50%" stopColor="#F05C4E" stopOpacity="0.8" />
              <stop offset="65%" stopColor="#F05C4E" stopOpacity="0" />
              <stop offset="100%" stopColor="transparent" />
              <animateTransform attributeName="gradientTransform" type="translate" from="0 1" to="0 -1" dur="12s" repeatCount="indefinite" />
            </linearGradient>
          </defs>

          {/* Static traces */}
          <path d="M60 0 L60 180 L120 220 L120 380 L75 410 L75 520 L105 540 L105 650 L60 680 L60 900" stroke="rgba(255,255,255,0.1)" strokeWidth="2" fill="none" />
          <path d="M105 0 L105 120 L45 160 L45 340 L90 370 L90 480 L50 510 L50 620 L80 640 L80 900" stroke="rgba(255,255,255,0.08)" strokeWidth="2" fill="none" />
          <path d="M30 0 L30 250 L80 280 L80 450 L35 480 L35 600 L75 630 L75 750 L45 780 L45 900" stroke="rgba(255,255,255,0.06)" strokeWidth="1.5" fill="none" />

          {/* Animated pulses — running upward */}
          <path d="M60 0 L60 180 L120 220 L120 380 L75 410 L75 520 L105 540 L105 650 L60 680 L60 900" stroke="url(#pulseR1)" strokeWidth="3" fill="none" />
          <path d="M105 0 L105 120 L45 160 L45 340 L90 370 L90 480 L50 510 L50 620 L80 640 L80 900" stroke="url(#pulseR2)" strokeWidth="2.5" fill="none" />
          <path d="M30 0 L30 250 L80 280 L80 450 L35 480 L35 600 L75 630 L75 750 L45 780 L45 900" stroke="url(#pulseR3)" strokeWidth="2" fill="none" />

          {/* Nodes */}
          <circle cx="60" cy="180" r="4" fill="#F05C4E" opacity="0.4" />
          <circle cx="120" cy="220" r="3.5" fill="#F05C4E" opacity="0.35" />
          <circle cx="75" cy="410" r="4" fill="#F05C4E" opacity="0.4" />
          <circle cx="105" cy="540" r="3.5" fill="#F05C4E" opacity="0.35" />
          <circle cx="60" cy="680" r="4" fill="#F05C4E" opacity="0.4" />
          <circle cx="45" cy="160" r="3.5" fill="#F05C4E" opacity="0.3" />
          <circle cx="90" cy="370" r="4" fill="#F05C4E" opacity="0.35" />
          <circle cx="50" cy="510" r="3.5" fill="#F05C4E" opacity="0.3" />
          <circle cx="80" cy="640" r="4" fill="#F05C4E" opacity="0.35" />
          <circle cx="80" cy="280" r="3.5" fill="#F05C4E" opacity="0.3" />
          <circle cx="35" cy="480" r="3.5" fill="#F05C4E" opacity="0.3" />
          <circle cx="75" cy="630" r="4" fill="#F05C4E" opacity="0.35" />

          {/* Horizontal branches */}
          <line x1="60" y1="180" x2="90" y2="180" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <line x1="75" y1="410" x2="110" y2="410" stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
          <line x1="105" y1="540" x2="140" y2="540" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
          <line x1="45" y1="340" x2="15" y2="340" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />
          <line x1="35" y1="480" x2="8" y2="480" stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" />

          {/* Square nodes */}
          <rect x="86" y="175" width="7" height="7" rx="1.5" fill="#F05C4E" opacity="0.3" />
          <rect x="106" y="405" width="7" height="7" rx="1.5" fill="#F05C4E" opacity="0.3" />
          <rect x="136" y="535" width="7" height="7" rx="1.5" fill="#F05C4E" opacity="0.25" />
        </svg>
      </div>
    </>
  );
}
