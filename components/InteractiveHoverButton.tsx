import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  variant?: "primary" | "outline";
  children: ReactNode;
  className?: string;
};

type AsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" };

type AsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as: "button" };

type InteractiveHoverButtonProps = AsLink | AsButton;

export default function InteractiveHoverButton(
  props: InteractiveHoverButtonProps
) {
  const {
    children,
    className = "",
    variant = "primary",
    as: Tag,
    ...rest
  } = props;

  const isPrimary = variant === "primary";
  const element = Tag ?? "a";

  /*
   * Primary:  solid brand bg  →  dot (page bg) expands  →  looks outlined
   * Outline:  transparent bg  →  dot (brand)  expands   →  looks solid
   */
  const classes = `group/btn relative inline-flex w-auto cursor-pointer items-center justify-center overflow-hidden rounded-full px-7 py-3.5 font-semibold text-[0.9375rem] border-2 transition-all duration-300 ${
    isPrimary
      ? "bg-[var(--brand)] border-[var(--brand)] text-white"
      : "bg-transparent border-[var(--border-primary)] text-[var(--text)]"
  } ${className}`;

  const inner = (
    <>
      {/* Default visible content */}
      {/* Hidden dot — only appears when scaling on hover */}
      <div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2.5 w-2.5 rounded-full opacity-0 transition-all duration-500 group-hover/btn:scale-[100] group-hover/btn:opacity-100 ${
          isPrimary
            ? "bg-[var(--bg-body)]"
            : "bg-[var(--brand)]"
        }`}
      />
      <div className="flex items-center justify-center">
        <span className="inline-block transition-all duration-300 group-hover/btn:translate-x-12 group-hover/btn:opacity-0">
          {children}
        </span>
      </div>

      {/* Hover content — slides in on top */}
      <div
        className={`absolute top-0 left-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover/btn:-translate-x-0 group-hover/btn:opacity-100 ${
          isPrimary ? "text-[var(--brand)]" : "text-white"
        }`}
      >
        <span>{children}</span>
        <svg
          className="w-4 h-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </>
  );

  if (element === "button") {
    const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
    return (
      <button className={classes} {...buttonProps}>
        {inner}
      </button>
    );
  }

  const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
  return (
    <a className={classes} {...anchorProps}>
      {inner}
    </a>
  );
}
