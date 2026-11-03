import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Education } from "@/components/sections/education";
import { Experience } from "@/components/sections/experience";
import { Freelance } from "@/components/sections/freelance";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { Skills } from "@/components/sections/skills";
import { certifications, education } from "@/data/education";
import { experience } from "@/data/experience";
import { freelance } from "@/data/freelance";
import { profile } from "@/data/profile";
import { featuredProjects } from "@/data/projects";
import { services } from "@/data/services";
import { visibleSkillCategories } from "@/data/skills";
import { getSocial, socialLinks } from "@/data/social-links";

/*
 * Order is tuned for conversion: proof of work first (projects, client work),
 * then what I offer, then background, then contact.
 */
export default function HomePage() {
  const topics = [...services.map((service) => service.title), "Full-time opportunity", "Something else"];

  return (
    <>
      <Hero profile={profile} socials={socialLinks} projects={featuredProjects} experience={experience} />
      <Projects projects={featuredProjects} githubUrl={getSocial("github")?.href ?? "https://github.com"} />
      <Freelance items={freelance} availability={profile.availability.label} />
      <Services services={services} />
      <Experience items={experience} />
      <About profile={profile} />
      <Skills categories={visibleSkillCategories} />
      <Education education={education} certifications={certifications} />
      <Contact profile={profile} socials={socialLinks} topics={topics} />
    </>
  );
}
