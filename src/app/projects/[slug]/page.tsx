import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { ButtonLink } from "@/components/ui/button-link";
import { SampleBadge } from "@/components/ui/sample-badge";
import { TagList } from "@/components/ui/tag";
import { profile } from "@/data/profile";
import { getProject, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/projects/${project.slug}/` },
    openGraph: {
      title: `${project.title} — ${profile.name}`,
      description: project.description,
      type: "article",
      images: project.thumbnail ? [{ url: project.thumbnail }] : undefined,
    },
    robots: project.isSample ? { index: false, follow: true } : undefined,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const meta = [
    { label: "Role", value: project.role },
    { label: "Year", value: project.year },
    { label: "Category", value: project.category },
  ];

  return (
    <article>
      <header className="relative overflow-hidden">
        <div aria-hidden className="backdrop-hero absolute inset-0" />
        <div className="container-x relative pb-12 pt-[calc(var(--header-h)+2.5rem)] md:pt-[calc(var(--header-h)+4rem)]">
          <nav aria-label="Breadcrumb" className="enter flex items-center gap-2 text-sm text-fg-muted">
            <Link href="/#work" className="group inline-flex items-center gap-1.5 transition-colors hover:text-fg">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" aria-hidden />
              All projects
            </Link>
            <span className="text-fg-subtle">/</span>
            <span className="text-fg">{project.title}</span>
          </nav>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-8">
              <div className="enter flex flex-wrap items-center gap-3" style={{ "--d": "60ms" } as React.CSSProperties}>
                <p className="text-caption">{project.category}</p>
                {project.isSample && <SampleBadge />}
              </div>
              <h1 className="enter text-h1 mt-4" style={{ "--d": "100ms" } as React.CSSProperties}>
                {project.title}
              </h1>
              <p className="enter text-lead mt-5 max-w-2xl text-fg-muted" style={{ "--d": "160ms" } as React.CSSProperties}>
                {project.tagline}
              </p>
            </div>
            <div className="enter flex flex-wrap gap-3 lg:col-span-4 lg:justify-end" style={{ "--d": "220ms" } as React.CSSProperties}>
              {project.liveUrl && (
                <ButtonLink href={project.liveUrl} kind="external" icon="external">
                  Live demo
                </ButtonLink>
              )}
              {project.githubUrl && (
                <ButtonLink href={project.githubUrl} kind="external" icon="external" variant="secondary">
                  GitHub
                </ButtonLink>
              )}
            </div>
          </div>

          <dl className="enter mt-12 grid grid-cols-2 gap-6 border-t border-line pt-8 md:grid-cols-4" style={{ "--d": "260ms" } as React.CSSProperties}>
            {meta.map((item) => (
              <div key={item.label}>
                <dt className="text-caption">{item.label}</dt>
                <dd className="mt-2 font-medium">{item.value}</dd>
              </div>
            ))}
            <div className="col-span-2 md:col-span-1">
              <dt className="text-caption">Stack</dt>
              <dd className="mt-2 font-medium">{project.technologies.slice(0, 4).join(", ")}</dd>
            </div>
          </dl>
        </div>
      </header>

      <div className="container-x">
        <Reveal className="card bg-surface-2 p-3 sm:p-6 lg:p-10">
          <BrowserFrame
            title={project.title}
            url={project.liveUrl}
            image={project.preview ?? project.thumbnail}
            accent={project.accent}
            priority
            sizes="(min-width: 1280px) 1150px, 100vw"
          />
        </Reveal>
      </div>

      <div className="container-x grid gap-12 py-[var(--section-y)] lg:grid-cols-12 lg:gap-16">
        <aside className="lg:col-span-4">
          <div className="space-y-8 lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <div>
              <p className="text-caption mb-3">Summary</p>
              <p className="leading-relaxed text-fg-muted">{project.description}</p>
            </div>
            <div>
              <p className="text-caption mb-3">Technologies</p>
              <TagList items={project.technologies} label="Technologies" />
            </div>
          </div>
        </aside>

        <div className="space-y-14 lg:col-span-8">
          {project.details.map((section) => (
            <Reveal key={section.heading}>
              <section aria-label={section.heading}>
                <h2 className="text-h3">{section.heading}</h2>
                <p className="mt-4 text-lg leading-relaxed text-fg-muted">{section.body}</p>
              </section>
            </Reveal>
          ))}

          <Reveal>
            <section aria-labelledby="features" className="card p-6 sm:p-8">
              <h2 id="features" className="text-h3">
                Key features
              </h2>
              <ul className="mt-5 space-y-3">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 leading-snug">
                    <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />
                    {highlight}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        </div>
      </div>

      {next && next.slug !== project.slug && (
        <div className="container-x pb-[var(--section-y)]">
          <Link
            href={`/projects/${next.slug}`}
            className="card group grid items-center gap-6 overflow-hidden p-6 transition-[border-color,box-shadow] duration-500 hover:border-line-strong hover:shadow-[var(--shadow-lift)] sm:p-8 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <p className="text-caption">Next project</p>
              <p className="text-h2 mt-3">{next.title}</p>
              <p className="mt-3 text-fg-muted">{next.tagline}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                View case study
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </span>
            </div>
            <div className="md:col-span-5">
              <BrowserFrame
                title={next.title}
                url={next.liveUrl}
                image={next.thumbnail}
                accent={next.accent}
                sizes="(min-width: 768px) 35vw, 100vw"
                className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:-translate-y-1"
              />
            </div>
          </Link>
        </div>
      )}
    </article>
  );
}
