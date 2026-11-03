import type { SocialLink } from "@/types";
import { profile } from "./profile";

export const socialLinks: SocialLink[] = [
  {
    kind: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/soham-kale-dev/",
    handle: "in/soham-kale-dev",
  },
  {
    kind: "github",
    label: "GitHub",
    href: "https://github.com/Soham-Kale",
    handle: "@Soham-Kale",
  },
  {
    kind: "email",
    label: "Email",
    href: `mailto:${profile.email}`,
    handle: profile.email,
  },
];

export const getSocial = (kind: SocialLink["kind"]) => socialLinks.find((link) => link.kind === kind);
