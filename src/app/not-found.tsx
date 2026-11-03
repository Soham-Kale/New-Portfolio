import { ButtonLink } from "@/components/ui/button-link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="backdrop-hero absolute inset-0" />
      <div className="container-x relative flex min-h-[80svh] flex-col justify-center pt-[var(--header-h)]">
        <p className="text-caption">Error 404</p>
        <h1 className="text-h1 mt-4">This page doesn&apos;t exist.</h1>
        <p className="text-lead mt-5 max-w-md text-fg-muted">It may have moved, or the link might be mistyped.</p>
        <div className="mt-9">
          <ButtonLink href="/" kind="route">
            Back to home
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
