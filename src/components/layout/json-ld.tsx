import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { profile } from "@/data/profile";
import { site } from "@/data/site";
import { skillCategories } from "@/data/skills";
import { socialLinks } from "@/data/social-links";

/** schema.org Person + ProfilePage, generated from the same data the UI renders. */
export function PersonJsonLd() {
  const current = experience[0];
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: site.url,
    mainEntity: {
      "@type": "Person",
      name: profile.name,
      jobTitle: current?.roles[0]?.title ?? profile.role,
      description: profile.shortIntro,
      email: `mailto:${profile.email}`,
      url: site.url,
      sameAs: socialLinks.filter((link) => link.kind !== "email").map((link) => link.href),
      worksFor: current ? { "@type": "Organization", name: current.company } : undefined,
      alumniOf: education.map((entry) => ({ "@type": "CollegeOrUniversity", name: entry.institution })),
      knowsAbout: skillCategories.flatMap((category) => category.skills.map((skill) => skill.name)),
    },
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD must be inline; escape "<" so content can never close the tag.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}
