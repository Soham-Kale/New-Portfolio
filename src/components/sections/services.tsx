import { ArrowRight } from "lucide-react";
import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { ServiceGlyph } from "@/components/ui/glyph";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import type { Service } from "@/types";

function ServiceCard({ service }: { service: Service }) {
  return (
    <article
      className={cn(
        "card group flex h-full flex-col p-6 transition-[border-color,transform,box-shadow] duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-lift)] sm:p-7",
        service.featured && "bg-[linear-gradient(160deg,rgb(91_140_255/0.10),transparent_55%)]",
      )}
    >
      <span className="grid h-11 w-11 place-items-center rounded-xl border border-line-strong bg-surface-3 text-fg-muted transition-colors duration-300 group-hover:text-accent">
        <ServiceGlyph icon={service.icon} />
      </span>
      <h3 className="text-h3 mt-6">{service.title}</h3>
      <p className="mt-2.5 text-[0.9375rem] leading-relaxed text-fg-muted">{service.description}</p>
      <ul className="mt-auto flex flex-wrap gap-x-4 gap-y-1.5 pt-6" aria-label={`${service.title} includes`}>
        {service.includes.map((item) => (
          <li key={item} className="flex items-center gap-1.5 text-[0.8125rem] text-fg-subtle">
            <span className="h-1 w-1 rounded-full bg-accent" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}

export function Services({ services }: { services: Service[] }) {
  return (
    <section id="services" aria-labelledby="services-title" className="section-y">
      <div className="container-x">
        <SectionHeading
          id="services-title"
          eyebrow="Services"
          title="How I can help"
          description="From a new marketing site to a full product build, scoped clearly and delivered with care."
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <StaggerItem key={service.id} className={cn(service.featured && "sm:col-span-2")}>
              <ServiceCard service={service} />
            </StaggerItem>
          ))}
          <StaggerItem className="sm:col-span-2 lg:col-span-1">
            <a
              href="#contact"
              className="group flex h-full min-h-[14rem] flex-col justify-between rounded-[var(--radius-card)] bg-fg p-6 text-canvas transition-transform duration-500 ease-[var(--ease-out-expo)] hover:-translate-y-1 sm:p-7"
            >
              <p className="text-h3">Something else in mind?</p>
              <span className="flex items-center justify-between">
                <span className="text-[0.9375rem] font-medium">Tell me about your project</span>
                <span className="grid h-10 w-10 place-items-center rounded-full bg-canvas text-fg transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </span>
              </span>
            </a>
          </StaggerItem>
        </Stagger>
      </div>
    </section>
  );
}
