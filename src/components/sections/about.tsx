import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import type { Profile } from "@/types";

export function About({ profile }: { profile: Profile }) {
  const { about } = profile;

  return (
    <section id="about" aria-labelledby="about-title" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading id="about-title" eyebrow="About" title={about.heading} description={about.statement} />

        <div className="grid gap-6 lg:grid-cols-12">
          {/* Story */}
          <Reveal className="card p-6 sm:p-8 lg:col-span-7 lg:p-10">
            <p className="text-caption mb-6">My journey</p>
            <div className="space-y-5 leading-relaxed text-fg-muted">
              {about.journey.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {about.stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-none tracking-[-0.04em]">{stat.value}</dd>
                  <dd className="mt-2 text-sm leading-snug text-fg-subtle">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Expertise */}
          <Reveal className="card flex flex-col p-6 sm:p-8 lg:col-span-5 lg:p-10" delay={0.08}>
            <p className="text-caption mb-6">Technical expertise</p>
            <ul className="space-y-4">
              {about.expertise.map((item) => (
                <li key={item} className="flex gap-3 font-medium leading-snug">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                    <Check className="h-3 w-3" aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-auto border-t border-line pt-6 text-[0.9375rem] leading-relaxed text-fg-muted lg:mt-10">{about.collaboration}</p>
          </Reveal>
        </div>

        {/* Problem-solving approach */}
        <div className="mt-16">
          <Reveal>
            <h3 className="text-h3">How I approach problems</h3>
          </Reveal>
          <Stagger className="mt-6 grid gap-4 md:grid-cols-3">
            {about.approach.map((principle, i) => (
              <StaggerItem key={principle.title} className="card p-6 sm:p-7">
                <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-4 text-lg font-semibold tracking-[-0.02em]">{principle.title}</p>
                <p className="mt-2 text-[0.9375rem] leading-relaxed text-fg-muted">{principle.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
