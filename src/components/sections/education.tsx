import { GraduationCap } from "lucide-react";
import { Reveal } from "@/components/animations/reveal";
import type { Certification, Education as EducationEntry } from "@/types";

/** Compact education band. Placeholder certifications stay in data but are never shown. */
export function Education({ education, certifications }: { education: EducationEntry[]; certifications: Certification[] }) {
  const certs = certifications.filter((cert) => !cert.isPlaceholder);

  return (
    <section id="education" aria-labelledby="education-title" className="pb-[var(--section-y)]">
      <div className="container-x">
        <Reveal className="card grid gap-8 p-6 sm:p-8 md:grid-cols-12 lg:p-10">
          <div className="md:col-span-4">
            <p className="text-caption">Education</p>
            <h2 id="education-title" className="text-h3 mt-3">
              Academic background
            </h2>
          </div>
          <div className="grid gap-6 md:col-span-8">
            {education.map((entry) => (
              <div key={entry.institution} className="flex gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-line-strong bg-surface-3 text-fg-muted">
                  <GraduationCap className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold tracking-[-0.01em]">
                    {entry.degree}, {entry.field}
                  </p>
                  <p className="mt-0.5 text-fg-muted">{entry.institution}</p>
                  <p className="mt-1 text-sm text-fg-subtle">
                    {entry.location} · {entry.start} — {entry.end}
                    {entry.grade && ` · ${entry.grade}`}
                  </p>
                </div>
              </div>
            ))}
            {certs.length > 0 && (
              <ul className="grid gap-3 border-t border-line pt-6 sm:grid-cols-2">
                {certs.map((cert) => (
                  <li key={cert.name}>
                    <p className="font-medium">
                      {cert.credentialUrl ? (
                        <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline">
                          {cert.name}
                        </a>
                      ) : (
                        cert.name
                      )}
                    </p>
                    <p className="text-sm text-fg-subtle">
                      {cert.issuer}
                      {cert.date && ` · ${cert.date}`}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
