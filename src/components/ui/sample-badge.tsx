import { cn } from "@/lib/utils";

/** Visible marker for placeholder content that must be replaced before publishing. */
export function SampleBadge({ label = "Sample", className }: { label?: string; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border border-dashed border-amber-300/50 bg-amber-300/10 px-2.5 py-1 font-mono text-[0.625rem] uppercase tracking-[0.14em] text-amber-200",
        className,
      )}
    >
      <span className="h-1 w-1 rounded-full bg-amber-300" />
      {label}
    </span>
  );
}
