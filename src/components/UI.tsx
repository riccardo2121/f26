import React from "react";
import { Link } from "react-router-dom";

export const Pill = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => (
  <span className={`inline-flex items-center px-3 py-1 rounded-full border border-[var(--line)] text-xs uppercase tracking-[.22em] font-semibold ${className}`}>
    {children}
  </span>
);

export const Button = ({
  href,
  variant = "solid",
  children,
  className = "",
  ...props
}: {
  href: string;
  variant?: "solid" | "outline" | "accent";
  children: React.ReactNode;
  className?: string;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-semibold tracking-tight transition-all duration-300 ease-out " +
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--ink)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--paper)] " +
    "active:scale-95";
  const solid = "bg-[var(--ink)] text-[var(--paper)] hover:opacity-90 hover:-translate-y-[1px] hover:shadow-lg hover:shadow-[var(--ink)]/20";
  const outline = "border border-[var(--ink)] hover:bg-[var(--ink)] hover:text-[var(--paper)] hover:-translate-y-[1px]";
  const accent = "bg-[var(--accent)] text-white hover:brightness-110 shadow-lg shadow-[var(--accent)]/30 hover:shadow-xl hover:shadow-[var(--accent)]/40 hover:-translate-y-[1px]";
  
  const combinedClassName = `${base} ${variant === "solid" ? solid : variant === "outline" ? outline : accent} ${className}`;

  if (href.startsWith("/")) {
    return (
      <Link to={href} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <a href={href} className={combinedClassName} {...props}>
      {children}
    </a>
  );
};

export const Stars = ({ n }: { n: number }) => (
  <div
    className="text-[var(--accent)] text-xs tracking-widest"
    role="img"
    aria-label={`Valutazione: ${n} su 5`}
    aria-live="polite"
  >
    {Array.from({ length: n }).map(() => "★").join("")}
  </div>
);
