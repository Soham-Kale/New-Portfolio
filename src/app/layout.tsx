import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Footer } from "@/components/layout/footer";
import { PersonJsonLd } from "@/components/layout/json-ld";
import { Providers } from "@/components/layout/providers";
import { Header } from "@/components/navigation/header";
import { profile } from "@/data/profile";
import { navItems, site } from "@/data/site";
import { socialLinks } from "@/data/social-links";
import "./globals.css";

const sans = Geist({ subsets: ["latin"], variable: "--font-geist", display: "swap" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.title, template: `%s — ${profile.name}` },
  description: site.description,
  applicationName: `${profile.name} Portfolio`,
  authors: [{ name: profile.name, url: site.url }],
  creator: profile.name,
  keywords: [
    profile.name,
    profile.role,
    profile.headline,
    "React developer",
    "Next.js developer",
    "React Native developer",
    "Freelance web developer",
    "Portfolio",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    firstName: profile.firstName,
    lastName: profile.lastName,
    url: "/",
    siteName: profile.name,
    title: site.title,
    description: site.description,
    locale: site.locale,
  },
  twitter: { card: "summary_large_image", title: site.title, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#08090c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="fixed left-4 top-4 z-[100] -translate-y-24 rounded-full bg-fg px-5 py-3 text-sm font-medium text-canvas transition-transform focus:translate-y-0"
        >
          Skip to content
        </a>
        <Providers>
          <Header items={navItems} socials={socialLinks} initials={profile.initials} name={profile.name} role={profile.headline} email={profile.email} />
          <main id="main">{children}</main>
          <Footer
            name={profile.name}
            role={`${profile.role} · ${profile.headline}`}
            email={profile.email}
            location={profile.location}
            items={navItems}
            socials={socialLinks}
            year={new Date().getFullYear()}
          />
        </Providers>
        <PersonJsonLd />
      </body>
    </html>
  );
}
