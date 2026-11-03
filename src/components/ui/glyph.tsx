"use client";

import { serviceIcons, skillIcons, socialIcons } from "@/lib/icons";
import type { ServiceIcon, SkillIcon, SocialKind } from "@/types";

/** Client-side icon resolvers so Server Components can pass plain string keys. */
export function SkillGlyph({ icon, size = 18, className }: { icon: SkillIcon; size?: number; className?: string }) {
  const Icon = skillIcons[icon];
  return <Icon size={size} className={className} aria-hidden />;
}

export function ServiceGlyph({ icon, size = 20, className }: { icon: ServiceIcon; size?: number; className?: string }) {
  const Icon = serviceIcons[icon];
  return <Icon size={size} className={className} aria-hidden />;
}

export function SocialGlyph({ kind, size = 16, className }: { kind: SocialKind; size?: number; className?: string }) {
  const Icon = socialIcons[kind];
  return <Icon size={size} className={className} aria-hidden />;
}
