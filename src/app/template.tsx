import type { ReactNode } from "react";

/**
 * Re-mounts on every route change, replaying a short CSS fade. Pure CSS so the
 * first paint (and LCP) never waits for JavaScript.
 */
export default function Template({ children }: { children: ReactNode }) {
  return <div className="route-enter">{children}</div>;
}
