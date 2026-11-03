import { Check } from "lucide-react";
import Link from "next/link";
import { Reveal } from "@/components/animations/reveal";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { SampleBadge } from "@/components/ui/sample-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag";
import { cn } from "@/lib/utils";
import type { Project } from "@/types";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const flip = index % 2 === 1;

  return (
    <Reveal>
      <article className="card group grid overflow-hidden transition-[border-color,box-shadow] duration-500 hover:border-line-strong hover:shadow-[var(--shadow-lift)] lg:grid-cols-12">
        {/* Media */}
        <Link
          href={`/projects/${project.slug}`}
          aria-label={`${project.title} case study`}
          className={cn(
            "relative block overflow-hidden bg-surface-2 p-5 sm:p-8 lg:col-span-7 lg:p-10",
            flip && "lg:order-2",
          )}
        >
          <div aria-hidden className="absolute inset-0 opacity-60" style={{ background: `radial-gradient(80% 70% at 50% 100%, ${project.accent[0]}22, transparent 70%)` }} />
          <BrowserFrame
            title={project.title}
            url={project.liveUrl}
            image={project.preview ?? project.thumbnail}
            accent={project.accent}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-1.5"
          />
        </Link>

        {/* Content */}
        <div className="flex flex-col p-6 sm:p-8 lg:col-span-5 lg:p-10">
          <div className="flex items-center justify-between gap-4">
            <p className="text-caption">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </p>
            {project.isSample ? <SampleBadge /> : <p className="text-caption">{project.year}</p>}
          </div>

          <h3 className="mt-5 text-[clamp(1.5rem,2.4vw,2rem)] font-semibold leading-tight tracking-[-0.03em]">
            <Link href={`/projects/${project.slug}`} className="transition-colors hover:text-white">
              {project.title}
            </Link>
          </h3>
          <p className="mt-3 text-fg-muted">{project.description}</p>

          <div className="mt-7">
            <p className="text-caption mb-3">Key features</p>
            <ul className="space-y-2.5">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex gap-3 text-[0.9375rem] leading-snug">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <TagList items={project.technologies} label="Technologies" className="mt-7" />

          <div className="mt-8 flex flex-wrap items-center gap-2 pt-1 lg:mt-auto lg:pt-8">
            {project.liveUrl && (
              <ButtonLink href={project.liveUrl} kind="external" icon="external" size="sm">
                Live demo
              </ButtonLink>
            )}
            {project.githubUrl && (
              <ButtonLink href={project.githubUrl} kind="external" icon="external" size="sm" variant="secondary">
                GitHub
              </ButtonLink>
            )}
            <ButtonLink href={`/projects/${project.slug}`} kind="route" variant="ghost" className="ml-2 text-sm">
              Case study
            </ButtonLink>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

export function Projects({ projects, githubUrl }: { projects: Project[]; githubUrl: string }) {
  return (
    <section id="work" aria-labelledby="work-title" className="section-y">
      <div className="container-x">
        <SectionHeading
          id="work-title"
          eyebrow="Selected work"
          title="Featured projects"
          description="Production products I've built for companies and clients, each one live today."
          action={
            <ButtonLink href={githubUrl} kind="external" icon="external" variant="ghost">
              More on GitHub
            </ButtonLink>
          }
        />
        <div className="space-y-6 md:space-y-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
