import type { ReactNode } from "react";
import { Reveal } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";

/** Consistent section opener: caption, H2, optional description and action. */
export function SectionHeading({
  id,
  eyebrow,
  title,
  description,
  action,
  className,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  action?: ReactNode;
  className?: string;
}) {
  return (
    <Reveal className={cn("mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between", className)}>
      <div className="max-w-2xl">
        <p className="text-caption flex items-center gap-2.5">
          <span className="h-px w-6 bg-accent" aria-hidden />
          {eyebrow}
        </p>
        <h2 id={id} className="text-h2 mt-5">
          {title}
        </h2>
        {description && <p className="text-lead mt-5 text-fg-muted">{description}</p>}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </Reveal>
  );
}
