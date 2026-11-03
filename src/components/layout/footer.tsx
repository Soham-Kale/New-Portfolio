import Link from "next/link";
import { SocialGlyph } from "@/components/ui/glyph";
import type { NavItem, SocialLink } from "@/types";

export function Footer({
  name,
  role,
  email,
  location,
  items,
  socials,
  year,
}: {
  name: string;
  role: string;
  email: string;
  location: string;
  items: NavItem[];
  socials: SocialLink[];
  year: number;
}) {
  return (
    <footer className="border-t border-line">
      <div className="container-x grid gap-10 py-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="text-lg font-semibold tracking-[-0.02em]">{name}</p>
          <p className="mt-1 text-fg-muted">{role}</p>
          <a href={`mailto:${email}`} className="mt-5 inline-block text-fg underline decoration-line-strong underline-offset-4 transition-colors hover:decoration-fg">
            {email}
          </a>
        </div>
        <nav aria-label="Footer" className="md:col-span-4">
          <p className="text-caption mb-4">Navigate</p>
          <ul className="grid grid-cols-2 gap-2">
            {[...items, { id: "skills", label: "Skills", index: "" }, { id: "contact", label: "Contact", index: "" }].map((item) => (
              <li key={item.id}>
                <Link href={`/#${item.id}`} className="text-sm text-fg-muted transition-colors hover:text-fg">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="md:col-span-3">
          <p className="text-caption mb-4">Elsewhere</p>
          <ul className="flex gap-2">
            {socials.map((social) => (
              <li key={social.kind}>
                <a
                  href={social.href}
                  {...(social.kind === "email" ? {} : { target: "_blank", rel: "noopener noreferrer" })}
                  aria-label={social.label}
                  className="grid h-10 w-10 place-items-center rounded-full border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
                >
                  <SocialGlyph kind={social.kind} size={15} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container-x flex flex-col gap-2 border-t border-line py-6 text-sm text-fg-subtle sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {name}. All rights reserved.
        </p>
        <p>{location}</p>
      </div>
    </footer>
  );
}
