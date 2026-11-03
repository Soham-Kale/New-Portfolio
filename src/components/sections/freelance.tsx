import { Check } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/animations/reveal";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { SampleBadge } from "@/components/ui/sample-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag";
import type { FreelanceProject } from "@/types";

// DRAFT COPY: how a freelance engagement runs.
const PROCESS = [
  { title: "Discovery", body: "A short call to understand your goals, audience, content and timeline." },
  { title: "Design", body: "Page structure and visual direction agreed before development starts." },
  { title: "Build", body: "Responsive development with regular previews you can click through." },
  { title: "Launch & handover", body: "Deployment, a final check on real devices and a walkthrough of the site." },
];

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-snug text-fg-muted">
          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
          {item}
        </li>
      ))}
    </ul>
  );
}

function ClientCase({ item }: { item: FreelanceProject }) {
  const [main, ...more] = item.screenshots;

  return (
    <Reveal>
      <article className="card overflow-hidden">
        <header className="flex flex-col gap-5 border-b border-line p-6 sm:p-8 md:flex-row md:items-center md:justify-between lg:px-10">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">{item.client}</h3>
              {item.isSample && <SampleBadge />}
            </div>
            <p className="mt-1.5 text-fg-muted">
              {item.title} <span className="text-fg-subtle">·</span> {item.industry} <span className="text-fg-subtle">·</span> {item.year}
            </p>
          </div>
          {item.liveUrl && (
            <ButtonLink href={item.liveUrl} kind="external" icon="external" size="sm" variant="secondary">
              Visit live site
            </ButtonLink>
          )}
        </header>

        {/* Gallery */}
        <div className="grid gap-4 bg-surface-2 p-5 sm:p-8 lg:grid-cols-3 lg:p-10">
          <BrowserFrame title={item.client} url={item.liveUrl} image={main} accent={item.accent} className="lg:col-span-2" sizes="(min-width: 1024px) 55vw, 100vw" />
          {more.length > 0 && (
            <div className="grid grid-cols-2 gap-4 lg:grid-cols-1 lg:content-between">
              {more.slice(0, 2).map((shot) => (
                <BrowserFrame key={shot} title={item.client} url={item.liveUrl} image={shot} accent={item.accent} sizes="(min-width: 1024px) 25vw, 50vw" />
              ))}
            </div>
          )}
        </div>

        {/* Case details */}
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          <div className="bg-surface p-6 sm:p-8">
            <p className="text-caption mb-3">Overview</p>
            <p className="text-[0.9375rem] leading-relaxed text-fg-muted">{item.overview}</p>
          </div>
          <div className="bg-surface p-6 sm:p-8">
            <p className="text-caption mb-3">The challenge</p>
            <p className="text-[0.9375rem] leading-relaxed text-fg-muted">{item.challenge}</p>
          </div>
          <div className="bg-surface p-6 sm:p-8">
            <p className="text-caption mb-3">My responsibilities</p>
            <List items={item.responsibilities} />
          </div>
          <div className="bg-surface p-6 sm:p-8">
            <p className="text-caption mb-3">Deliverables</p>
            <List items={item.deliverables} />
          </div>
        </div>
        <div className="border-t border-line px-6 py-5 sm:px-8 lg:px-10">
          <TagList items={item.technologies} label="Technologies used" />
        </div>
      </article>
    </Reveal>
  );
}

export function Freelance({ items, availability }: { items: FreelanceProject[]; availability: string }) {
  return (
    <section id="clients" aria-labelledby="clients-title" className="section-y border-y border-line bg-surface/40">
      <div className="container-x">
        <SectionHeading
          id="clients-title"
          eyebrow="Freelance"
          title="Client work"
          description="I help businesses launch websites that look premium, load fast and are easy for customers to use, from first call to live site."
          action={<ButtonLink href="#contact">Start a project</ButtonLink>}
        />

        <div className="space-y-8">
          {items.map((item) => (
            <ClientCase key={item.id} item={item} />
          ))}
        </div>

        {/* Process + conversion */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <Reveal className="lg:col-span-4">
            <h3 className="text-h3">How a project runs</h3>
            <p className="mt-3 text-fg-muted">A clear, simple process so you always know what happens next.</p>
            <p className="mt-6 inline-flex items-center gap-2.5 text-sm text-fg-muted">
              <span className="status-dot" aria-hidden />
              {availability}
            </p>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2 lg:col-span-8">
            {PROCESS.map((step, i) => (
              <StaggerItem key={step.title} className="card p-6">
                <p className="font-mono text-xs text-accent">{String(i + 1).padStart(2, "0")}</p>
                <p className="mt-3 font-semibold tracking-tight">{step.title}</p>
                <p className="mt-1.5 text-[0.9375rem] leading-relaxed text-fg-muted">{step.body}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
