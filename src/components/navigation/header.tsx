"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useSmoothScroll } from "@/components/animations/smooth-scroll";
import { SocialGlyph } from "@/components/ui/glyph";
import { cn } from "@/lib/utils";
import type { NavItem, SocialLink } from "@/types";

interface HeaderProps {
  items: NavItem[];
  socials: SocialLink[];
  initials: string;
  name: string;
  role: string;
  email: string;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export function Header({ items, socials, initials, name, role, email }: HeaderProps) {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { scrollTo, lenis } = useSmoothScroll();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [observed, setObserved] = useState<string | null>(null);
  const active = isHome ? observed : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the section currently in the middle of the viewport.
  useEffect(() => {
    if (!isHome) return;
    const sections = items.map((item) => document.getElementById(item.id)).filter(Boolean) as HTMLElement[];
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && setObserved(entry.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [isHome, items]);

  // Freeze page scroll while the mobile menu is open.
  useEffect(() => {
    if (open) lenis?.stop();
    else lenis?.start();
    document.documentElement.style.overflow = open ? "hidden" : "";
  }, [open, lenis]);

  const go = (event: React.MouseEvent, id: string) => {
    setOpen(false);
    if (!isHome) return; // Let the link navigate to /#id.
    event.preventDefault();
    lenis?.start();
    document.documentElement.style.removeProperty("overflow");
    scrollTo(`#${id}`);
  };

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300",
          scrolled || open ? "border-line bg-canvas/80 backdrop-blur-xl" : "border-transparent bg-transparent",
        )}
      >
        <div className="container-x flex h-[var(--header-h)] items-center justify-between gap-6">
          <Link href="/" aria-label={`${name}, home`} className="group flex items-center gap-3" onClick={() => setOpen(false)}>
            <span className="grid h-9 w-9 place-items-center rounded-full bg-fg font-mono text-xs font-semibold tracking-wider text-canvas">{initials}</span>
            <span className="hidden flex-col leading-tight sm:flex">
              <span className="text-sm font-semibold tracking-tight">{name}</span>
              <span className="text-xs text-fg-subtle">{role}</span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
            {items.map((item) => (
              <Link
                key={item.id}
                href={`/#${item.id}`}
                onClick={(event) => go(event, item.id)}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3.5 py-2 text-sm transition-colors",
                  active === item.id ? "bg-surface-2 text-fg" : "text-fg-muted hover:text-fg",
                )}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              href="/#contact"
              onClick={(event) => go(event, "contact")}
              className="hidden h-10 items-center gap-2 rounded-full bg-fg px-4 text-sm font-medium text-canvas transition-colors hover:bg-white active:scale-[0.98] sm:inline-flex"
            >
              Let&apos;s connect
            </Link>
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="relative grid h-10 w-10 place-items-center rounded-full border border-line-strong lg:hidden"
            >
              <span className={cn("absolute h-px w-4 bg-fg transition-transform duration-300", open ? "rotate-45" : "-translate-y-[3px]")} />
              <span className={cn("absolute h-px w-4 bg-fg transition-transform duration-300", open ? "-rotate-45" : "translate-y-[3px]")} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 z-40 flex flex-col bg-canvas pt-[var(--header-h)] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <nav aria-label="Mobile" className="container-x flex flex-1 flex-col justify-center">
              {[...items, { id: "contact", label: "Contact", index: "" }].map((item, i) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, ease: EASE, delay: 0.05 + i * 0.04 }}
                  className="border-b border-line"
                >
                  <Link
                    href={`/#${item.id}`}
                    onClick={(event) => go(event, item.id)}
                    className="flex items-center justify-between py-4 text-[1.75rem] font-semibold tracking-[-0.03em]"
                  >
                    {item.label}
                    <span className="text-caption">{String(i + 1).padStart(2, "0")}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="container-x flex flex-wrap items-center justify-between gap-4 border-t border-line py-6">
              <a href={`mailto:${email}`} className="text-sm text-fg-muted">
                {email}
              </a>
              <div className="flex gap-2">
                {socials
                  .filter((social) => social.kind !== "email")
                  .map((social) => (
                    <a
                      key={social.kind}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="grid h-11 w-11 place-items-center rounded-full border border-line-strong"
                    >
                      <SocialGlyph kind={social.kind} />
                    </a>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
