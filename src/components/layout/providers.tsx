"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";
import { SmoothScroll } from "@/components/animations/smooth-scroll";

/** App-wide client providers. MotionConfig honours the OS reduced-motion setting. */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>{children}</SmoothScroll>
    </MotionConfig>
  );
}
