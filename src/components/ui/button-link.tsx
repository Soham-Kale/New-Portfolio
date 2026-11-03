"use client";

import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import type { ReactNode } from "react";
import { useSmoothScroll } from "@/components/animations/smooth-scroll";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "sm";

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  /** "anchor" smooth-scrolls in-page, "route" is a client navigation, "external" opens a new tab. */
  kind?: "anchor" | "route" | "external" | "download";
  icon?: "arrow" | "external" | "download" | "none";
  className?: string;
}

const variants: Record<Variant, string> = {
  primary: "bg-fg text-canvas hover:bg-white shadow-[0_1px_0_0_rgb(255_255_255/0.4)_inset]",
  secondary: "border border-line-strong bg-surface-2 text-fg hover:border-fg/30 hover:bg-surface-3",
  ghost: "text-fg-muted hover:text-fg",
};

const sizes: Record<Size, string> = {
  md: "h-12 px-6 text-[0.9375rem]",
  sm: "h-10 px-4 text-sm",
};

const icons = { arrow: ArrowRight, external: ArrowUpRight, download: Download };

/** The one button style used site-wide: three variants, two sizes, a sliding icon. */
export function ButtonLink({ href, children, variant = "primary", size = "md", kind = "anchor", icon = "arrow", className }: ButtonLinkProps) {
  const { scrollTo } = useSmoothScroll();
  const Icon = icon === "none" ? null : icons[icon];

  const classes = cn(
    "group inline-flex items-center justify-center gap-2 rounded-full font-medium tracking-[-0.01em] transition-[background-color,border-color,color,transform] duration-300 active:scale-[0.98]",
    variants[variant],
    variant !== "ghost" && sizes[size],
    className,
  );

  const content = (
    <>
      {children}
      {Icon && (
        <Icon
          className={cn(
            "h-4 w-4 transition-transform duration-300 ease-[var(--ease-out-expo)]",
            icon === "arrow" && "group-hover:translate-x-0.5",
            icon === "external" && "group-hover:-translate-y-0.5 group-hover:translate-x-0.5",
            icon === "download" && "group-hover:translate-y-0.5",
          )}
          aria-hidden
        />
      )}
    </>
  );

  if (kind === "route") {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  if (kind === "anchor") {
    return (
      <a
        href={href}
        className={classes}
        onClick={(event) => {
          event.preventDefault();
          scrollTo(href.replace(/^\//, ""));
        }}
      >
        {content}
      </a>
    );
  }

  return (
    <a href={href} className={classes} {...(kind === "external" ? { target: "_blank", rel: "noopener noreferrer" } : { download: "" })}>
      {content}
    </a>
  );
}
