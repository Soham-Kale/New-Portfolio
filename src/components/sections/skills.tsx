import { Stagger, StaggerItem } from "@/components/animations/reveal";
import { SkillGlyph } from "@/components/ui/glyph";
import { SectionHeading } from "@/components/ui/section-heading";
import type { SkillCategory } from "@/types";

export function Skills({ categories }: { categories: SkillCategory[] }) {
  const total = categories.reduce((sum, category) => sum + category.skills.length, 0);

  return (
    <section id="skills" aria-labelledby="skills-title" className="section-y border-t border-line">
      <div className="container-x">
        <SectionHeading
          id="skills-title"
          eyebrow="Skills & technologies"
          title="The stack I build with"
          description={`${total} technologies used in production work and client projects, grouped by where they fit.`}
        />
        <Stagger className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <StaggerItem key={category.id} className="card flex flex-col p-6 sm:p-7">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold tracking-[-0.02em]">{category.label}</h3>
                <span className="font-mono text-xs text-fg-subtle">{String(category.skills.length).padStart(2, "0")}</span>
              </div>
              <p className="mt-1 text-sm text-fg-subtle">{category.description}</p>
              <ul className="mt-6 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <li
                    key={skill.name}
                    title={skill.note}
                    className="flex items-center gap-2 rounded-lg border border-line bg-surface-2 px-3 py-2 text-sm text-fg transition-colors duration-300 hover:border-line-strong hover:bg-surface-3"
                  >
                    <SkillGlyph icon={skill.icon} size={15} className="text-fg-muted" />
                    {skill.name}
                  </li>
                ))}
              </ul>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
