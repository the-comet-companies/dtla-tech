import { footer } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="w-full py-10 border-t border-[var(--structural-border)]">
      <div className="w-full max-w-[80rem] mx-auto px-[var(--container-padding-x)] flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <span className="text-base font-bold tracking-tight text-[var(--text)]">
            Shop <span className="text-[var(--brand)]">Titan</span>
          </span>
          <span className="text-sm text-[var(--text-muted)]">
            &copy; {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
          <a
            href={footer.siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text-secondary)] transition-colors duration-200"
          >
            {footer.siteLabel}
          </a>
          <a
            href={footer.ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group text-sm text-[var(--text-secondary)] hover:text-[var(--brand)] transition-colors duration-200 flex items-center gap-1.5"
          >
            {footer.ctaText}
            <svg
              className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
