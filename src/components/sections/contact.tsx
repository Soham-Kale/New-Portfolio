"use client";

import { ArrowUpRight, Check, Copy, Download } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/animations/reveal";
import { SocialGlyph } from "@/components/ui/glyph";
import type { Profile, SocialLink } from "@/types";
import { ContactForm } from "./contact-form";

function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : "Copy email address"}
      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-line text-fg-muted transition-colors hover:border-line-strong hover:text-fg"
    >
      {copied ? <Check className="h-4 w-4 text-success" /> : <Copy className="h-4 w-4" />}
    </button>
  );
}

export function Contact({ profile, socials, topics }: { profile: Profile; socials: SocialLink[]; topics: string[] }) {
  const links = socials.filter((social) => social.kind !== "email");

  return (
    <section id="contact" aria-labelledby="contact-title" className="section-y relative overflow-hidden border-t border-line">
      <div aria-hidden className="absolute inset-0 bg-[radial-gradient(50rem_28rem_at_15%_0%,rgb(91_140_255/0.12),transparent_70%)]" />
      <div className="container-x relative grid gap-12 lg:grid-cols-12 lg:gap-14">
        <Reveal className="lg:col-span-5">
          <p className="text-caption flex items-center gap-2.5">
            <span className="h-px w-6 bg-accent" aria-hidden />
            Contact
          </p>
          <h2 id="contact-title" className="text-h2 mt-5">
            Have a project in mind? Let&apos;s build something extraordinary.
          </h2>
          <p className="text-lead mt-5 text-fg-muted">Tell me what you&apos;re building. I&apos;ll reply with next steps and a clear plan.</p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl border border-success/25 bg-success/[0.06] p-4">
            <span className="status-dot mt-2 shrink-0" aria-hidden />
            <div>
              <p className="font-medium">{profile.availability.label}</p>
              <p className="mt-0.5 text-sm text-fg-muted">{profile.availability.detail}</p>
            </div>
          </div>

          <ul className="mt-8 divide-y divide-line border-y border-line">
            <li className="flex items-center justify-between gap-4 py-4">
              <a href={`mailto:${profile.email}`} className="group flex min-w-0 items-center gap-3">
                <SocialGlyph kind="email" className="shrink-0 text-fg-muted" />
                <span className="truncate font-medium transition-colors group-hover:text-white">{profile.email}</span>
              </a>
              <CopyEmail email={profile.email} />
            </li>
            {links.map((social) => (
              <li key={social.kind}>
                <a href={social.href} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-between gap-4 py-4">
                  <span className="flex items-center gap-3">
                    <SocialGlyph kind={social.kind} className="text-fg-muted" />
                    <span className="font-medium">{social.label}</span>
                    <span className="hidden text-sm text-fg-subtle sm:inline">{social.handle}</span>
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-fg-subtle transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-fg" aria-hidden />
                </a>
              </li>
            ))}
            <li>
              <a href={profile.resumeUrl} download className="group flex items-center justify-between gap-4 py-4">
                <span className="flex items-center gap-3">
                  <SocialGlyph kind="resume" className="text-fg-muted" />
                  <span className="font-medium">Resume</span>
                  <span className="hidden text-sm text-fg-subtle sm:inline">PDF</span>
                </span>
                <Download className="h-4 w-4 text-fg-subtle transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-fg" aria-hidden />
              </a>
            </li>
          </ul>
        </Reveal>

        <Reveal className="lg:col-span-7" delay={0.08}>
          <ContactForm email={profile.email} topics={topics} />
        </Reveal>
      </div>
    </section>
  );
}
