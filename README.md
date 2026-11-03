# Soham Kale — Portfolio

A fully static portfolio built with Next.js 16 (App Router), TypeScript, Tailwind CSS v4,
Framer Motion and Lenis.

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
npm run typecheck
npm run lint
```

Deploy the `out/` folder to any static host (Vercel, Netlify, GitHub Pages, S3…).
Set `NEXT_PUBLIC_SITE_URL` at build time so canonical URLs, the sitemap and Open Graph use your domain.

## Editing content

All content lives in `src/data/`; components never hardcode it.

| File | What it holds |
| --- | --- |
| `profile.ts` | Name, role, intro, About copy, stats, email, resume path |
| `social-links.ts` | LinkedIn, GitHub, email |
| `experience.ts` | Companies → roles, responsibilities, contributions, technologies |
| `projects.ts` | Featured projects (each gets `/projects/[slug]`) |
| `freelance.ts` | Client work |
| `skills.ts` | Skill categories (empty categories are hidden) |
| `services.ts` | Services offered (one can be `featured`) |
| `education.ts` | Degree and certifications |
| `site.ts` | SEO defaults and navigation |

**Sources:** facts come from the July 2026 resume. LinkedIn blocks automated reading, so check
the data against your profile. Lines marked `DRAFT COPY` are wording to rewrite in your own voice.

**Placeholders to replace before publishing**
- `projects.ts`: any entry with `isSample: true` shows a "Sample" badge and is excluded from the sitemap (`noindex`)
- `education.ts`: certifications are placeholders (hidden on the site until real ones are added)

**Images:** put files in `public/images/projects/` and reference them as
`/images/projects/<file>` in `thumbnail`, `preview` or `screenshots`. Without images, a
tinted placeholder frame is rendered, so there is never a broken image.

**Resume:** replace `public/resume/Soham-Kale-Resume.pdf`.

## Architecture

```
src/
  app/                 layout, home, /projects/[slug], sitemap, robots, OG image, icon
  components/
    animations/        Lenis smooth scroll, Framer Motion reveal helpers
    layout/            providers, footer, JSON-LD
    navigation/        header + mobile menu
    sections/          one file per home-page section
    ui/                buttons, section headings, tags, browser frame, badges
  data/                all portfolio content
  hooks/  lib/  types/
```

**Design system** (`src/app/globals.css`): Geist + Geist Mono only; type scale `text-h1`, `text-h2`,
`text-h3`, `text-lead` and `text-caption`; one `card` surface; one accent colour; one button
component (`ui/button-link.tsx`) with three variants.

**Motion:** the hero entrance and route fade are pure CSS, so the first paint never waits for
JavaScript. Framer Motion handles scroll reveals, and Lenis smooths wheel scrolling. Everything
respects `prefers-reduced-motion`.

**Contact form:** the site is static, so the form opens the visitor's email app with the
subject and message pre-filled. To receive submissions directly, point it at a form service
such as Formspree.
