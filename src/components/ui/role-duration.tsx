"use client";

import { useEffect, useState } from "react";
import { formatDuration } from "@/lib/utils";
import type { ExperienceRole } from "@/types";

/** Duration that stays current for ongoing roles (recomputed with the visitor's date). */
export function RoleDuration({ role }: { role: ExperienceRole }) {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- the visitor's date is only known after hydration.
    setNow(new Date());
  }, []);
  if (role.end) return <>{formatDuration(role.start, role.end)}</>;
  return <>{now ? formatDuration(role.start, null, now) : "Ongoing"}</>;
}
