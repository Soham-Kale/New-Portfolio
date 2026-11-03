"use client";

import Lenis from "lenis";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/use-media";

type ScrollTo = (target: string | number | HTMLElement, options?: { immediate?: boolean }) => void;

const ScrollContext = createContext<{ lenis: Lenis | null; scrollTo: ScrollTo }>({
  lenis: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(ScrollContext);

/** Gentle inertial scrolling (wheel only; touch stays native). Off under reduced motion. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion();
  const [lenis, setLenis] = useState<Lenis | null>(null);

  useEffect(() => {
    if (reduced) return;
    const instance = new Lenis({ lerp: 0.12, autoRaf: true, anchors: false });
    window.__lenis = instance;
    // eslint-disable-next-line react-hooks/set-state-in-effect -- Lenis must be created after mount.
    setLenis(instance);
    return () => {
      instance.destroy();
      window.__lenis = undefined;
      setLenis(null);
    };
  }, [reduced]);

  const scrollTo = useCallback<ScrollTo>(
    (target, { immediate = false } = {}) => {
      const offset = typeof target === "number" ? 0 : -72;
      if (lenis) {
        lenis.scrollTo(target, { immediate, offset, duration: 1.1 });
        return;
      }
      if (typeof target === "number") {
        window.scrollTo({ top: target, behavior: immediate || reduced ? "auto" : "smooth" });
        return;
      }
      const el = typeof target === "string" ? document.querySelector(target) : target;
      el?.scrollIntoView({ behavior: immediate || reduced ? "auto" : "smooth" });
    },
    [lenis, reduced],
  );

  return <ScrollContext.Provider value={{ lenis, scrollTo }}>{children}</ScrollContext.Provider>;
}

declare global {
  interface Window {
    __lenis?: Lenis;
  }
}
