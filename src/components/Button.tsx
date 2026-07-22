import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type CommonProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
  onClick?: () => void;
  type?: never;
};

type ButtonAsButton = CommonProps & {
  href?: never;
  onClick?: () => void;
  type?: "button" | "submit";
};

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variants: Record<Variant, string> = {
  primary:
    "bg-gradient-accent text-white border border-transparent shadow-[0_0_24px_rgba(43,108,255,0.35)] hover:shadow-[0_0_32px_rgba(0,212,255,0.4)] hover:brightness-110",
  secondary:
    "bg-transparent text-white border border-accent/60 hover:border-accent-cyan hover:bg-accent/10 hover:shadow-[0_0_20px_rgba(43,108,255,0.25)]",
  ghost:
    "bg-transparent text-white border border-accent/50 hover:border-accent-cyan hover:bg-accent/10",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-cyan/60 focus-visible:ring-offset-2 focus-visible:ring-offset-background";

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", onClick } = props;
  const classes = `${base} ${variants[variant]} ${className}`.trim();

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={props.type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
