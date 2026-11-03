import { cn } from "@/lib/utils";

/** Technology / metadata chip. */
export function Tag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line bg-surface-2 px-2.5 py-1 text-[0.8125rem] leading-none text-fg-muted",
        className,
      )}
    >
      {children}
    </span>
  );
}

export function TagList({ items, label, className }: { items: string[]; label: string; className?: string }) {
  return (
    <ul className={cn("flex flex-wrap gap-1.5", className)} aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
