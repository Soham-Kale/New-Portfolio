import { Reveal } from "@/components/animations/reveal";
import { RoleDuration } from "@/components/ui/role-duration";
import { SectionHeading } from "@/components/ui/section-heading";
import { TagList } from "@/components/ui/tag";
import { cn, formatRange, formatYearMonth } from "@/lib/utils";
import type { Experience as ExperienceEntry } from "@/types";

function CompanyCard({ company }: { company: ExperienceEntry }) {
  const first = company.roles[company.roles.length - 1];
  const latest = company.roles[0];

  return (
    <Reveal>
      <article className="card grid gap-8 p-6 sm:p-8 lg:grid-cols-12 lg:gap-10 lg:p-10">
        <div className="lg:col-span-4">
          <div className="lg:sticky lg:top-[calc(var(--header-h)+2rem)]">
            <span className="grid h-12 w-12 place-items-center rounded-xl border border-line-strong bg-surface-3 text-lg font-semibold">
              {company.company.charAt(0)}
            </span>
            <h3 className="text-h3 mt-5">{company.company}</h3>
            <p className="mt-1.5 text-sm text-fg-muted">
              {company.workMode} · {formatYearMonth(first.start)} — {formatYearMonth(latest.end)}
            </p>
            {company.roles.length > 1 && <p className="text-caption mt-4">{company.roles.length} roles</p>}
          </div>
        </div>

        <ol className="space-y-10 lg:col-span-8">
          {company.roles.map((role, i) => (
            <li key={role.title} className={cn("relative pl-6", i < company.roles.length - 1 && "pb-10 border-b border-line")}>
              <span aria-hidden className={cn("absolute left-0 top-2 h-2 w-2 rounded-full", role.end ? "bg-fg-subtle" : "bg-success")} />
              <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                <h4 className="text-lg font-semibold tracking-[-0.02em]">{role.title}</h4>
                <p className="text-caption normal-case tracking-normal">
                  {formatRange(role.start, role.end)} · <RoleDuration role={role} />
                </p>
              </div>
              <p className="mt-1 text-sm text-fg-subtle">{role.employmentType}</p>

              <ul className="mt-5 space-y-2.5">
                {role.responsibilities.map((item) => (
                  <li key={item} className="flex gap-3 text-[0.9375rem] leading-relaxed text-fg-muted">
                    <span className="mt-[0.7em] h-px w-3 shrink-0 bg-fg-subtle" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>

              {role.contributions.length > 0 && (
                <div className="mt-6 rounded-xl border border-line bg-surface-2 p-4 sm:p-5">
                  <p className="text-caption mb-3 text-accent">Key contributions</p>
                  <ul className="grid gap-2.5 md:grid-cols-2">
                    {role.contributions.map((item) => (
                      <li key={item} className="flex gap-2.5 text-[0.9375rem] leading-snug">
                        <span className="text-accent" aria-hidden>
                          ↗
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <TagList items={role.technologies} label="Technologies used" className="mt-5" />
            </li>
          ))}
        </ol>
      </article>
    </Reveal>
  );
}

export function Experience({ items }: { items: ExperienceEntry[] }) {
  const roles = items.flatMap((company) => company.roles);
  const earliest = roles.map((role) => role.start).sort()[0];

  return (
    <section id="experience" aria-labelledby="experience-title" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading
          id="experience-title"
          eyebrow="Experience"
          title="Where I've worked"
          description={`${roles.length} roles across ${items.length} companies since ${formatYearMonth(earliest)}, all fully remote.`}
        />
        <div className="space-y-6">
          {items.map((company) => (
            <CompanyCard key={company.id} company={company} />
          ))}
        </div>
      </div>
    </section>
  );
}
