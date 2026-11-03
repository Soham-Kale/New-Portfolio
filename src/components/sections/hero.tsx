import { ButtonLink } from "@/components/ui/button-link";
import { BrowserFrame } from "@/components/ui/browser-frame";
import { SocialGlyph } from "@/components/ui/glyph";
import { cn } from "@/lib/utils";
import type { Experience, Profile, Project, SocialLink } from "@/types";

/* Staggered CSS entrance: no JS needed for the first paint. */
const delay = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** Real product screenshots arranged as a layered composition. */
function Showcase({ projects }: { projects: Project[] }) {
  const [front, ...rest] = [...projects].reverse();
  const back = rest.slice(0, 2);
  const positions = ["left-0 top-0 w-[68%]", "right-0 top-[10%] w-[62%]"];

  return (
    <div className="enter relative mx-auto aspect-[5/4] w-full max-w-[38rem]" style={delay(260)} aria-label="Recent projects" role="img">
      {back.map((project, i) => (
        <div key={project.slug} className={cn("absolute opacity-60 transition-opacity duration-500 hover:opacity-90", positions[i])}>
          <BrowserFrame title={project.title} url={project.liveUrl} image={project.thumbnail} accent={project.accent} sizes="(min-width: 1024px) 26vw, 60vw" />
        </div>
      ))}
      {front && (
        <div className="absolute bottom-0 left-1/2 w-[82%] -translate-x-1/2">
          <BrowserFrame
            title={front.title}
            url={front.liveUrl}
            image={front.thumbnail}
            accent={front.accent}
            priority
            sizes="(min-width: 1024px) 34vw, 82vw"
            className="shadow-[0_40px_80px_-24px_rgb(0_0_0/0.9)]"
          />
        </div>
      )}
    </div>
  );
}

export function Hero({
  profile,
  socials,
  projects,
  experience,
}: {
  profile: Profile;
  socials: SocialLink[];
  projects: Project[];
  experience: Experience[];
}) {
  const proof = [...experience.map((entry) => entry.company.replace(/ Software Technologies.*$/, "")), ...projects.map((p) => p.title)].filter(
    (name, i, all) => all.indexOf(name) === i,
  );

  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden">
      <div aria-hidden className="backdrop-hero absolute inset-0" />
      <div aria-hidden className="grid-fade absolute inset-x-0 top-0 h-[42rem]" />

      <div className="container-x relative grid items-center gap-14 pb-16 pt-[calc(var(--header-h)+3.5rem)] md:pt-[calc(var(--header-h)+5rem)] lg:min-h-[min(100svh,58rem)] lg:grid-cols-12 lg:gap-10 lg:pb-20">
        <div className="lg:col-span-6">
          <p className="enter inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/70 py-1.5 pl-3 pr-4 text-sm text-fg-muted">
            <span className="status-dot" aria-hidden />
            {profile.availability.label}
          </p>

          <p className="enter mt-8 text-[0.9375rem] font-medium text-fg-muted" style={delay(60)}>
            {profile.name} <span className="text-fg-subtle">—</span> {profile.headline}
          </p>
          <h1 id="hero-title" className="enter text-h1 mt-3" style={delay(110)}>
            {profile.heroHeadline}
          </h1>

          <p className="enter text-lead mt-6 max-w-xl text-fg-muted" style={delay(160)}>
            {profile.shortIntro}
          </p>

          <div className="enter mt-9 flex flex-wrap items-center gap-3" style={delay(220)}>
            <ButtonLink href="#work">View my work</ButtonLink>
            <ButtonLink href="#contact" variant="secondary" icon="none">
              Let&apos;s connect
            </ButtonLink>
            <ButtonLink href={profile.resumeUrl} kind="download" variant="ghost" icon="download" className="px-2">
              Download resume
            </ButtonLink>
          </div>

          <div className="enter mt-10 flex items-center gap-5 border-t border-line pt-6" style={delay(300)}>
            <ul className="flex gap-2" aria-label="Social links">
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
            <p className="text-sm text-fg-subtle">{profile.location}</p>
          </div>
        </div>

        <div className="lg:col-span-6">
          <Showcase projects={projects} />
        </div>
      </div>

      {/* Proof strip: companies and clients from the data files */}
      <div className="container-x relative pb-16 md:pb-20">
        <div className="flex flex-col gap-4 border-t border-line pt-8 md:flex-row md:items-center md:gap-10">
          <p className="text-caption shrink-0">Built for teams & clients including</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-3">
            {proof.map((name) => (
              <li key={name} className="text-lg font-semibold tracking-[-0.02em] text-fg-muted">
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
