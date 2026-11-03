import Image from "next/image";
import type { Accent } from "@/types";
import { cn } from "@/lib/utils";

interface BrowserFrameProps {
  title: string;
  url?: string;
  image?: string;
  accent: Accent;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
}

/**
 * Screenshot presented in a slim browser window. Without a screenshot it renders an
 * abstract page wireframe tinted with the project's accent (never a broken image).
 */
export function BrowserFrame({ title, url, image, accent, className, imageClassName, sizes = "(min-width: 1024px) 50vw, 100vw", priority }: BrowserFrameProps) {
  const host = url ? new URL(url).host.replace(/^www\./, "") : "preview";
  const [a, b] = accent;

  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-media)] border border-line-strong bg-surface-2 shadow-[var(--shadow-lift)]", className)}>
      <div className="flex h-8 items-center gap-3 border-b border-line bg-surface-3/60 px-3">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
        </div>
        <div className="mx-auto max-w-[60%] truncate rounded bg-white/[0.05] px-2.5 py-0.5 font-mono text-[0.625rem] text-fg-subtle">{host}</div>
        <span className="w-[1.9rem]" aria-hidden />
      </div>
      <div className="relative aspect-[16/10] overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={`${title} screenshot`}
            fill
            sizes={sizes}
            priority={priority}
            className={cn("object-cover object-top", imageClassName)}
          />
        ) : (
          <div role="img" aria-label={`${title} preview`} className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${b} 0%, #0a0a0d 75%)` }}>
            <div className="absolute -right-[10%] -top-[30%] h-[90%] w-[60%] rounded-full blur-3xl" style={{ background: a, opacity: 0.35 }} />
          </div>
        )}
      </div>
    </div>
  );
}
