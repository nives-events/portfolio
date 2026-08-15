import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page not found",
  description: "That page does not exist. The work, the about page and the lab are all still here.",
  robots: { index: false, follow: true },
  // Without this the page inherits the layout's canonical and tells crawlers a
  // missing URL is the homepage.
  alternates: { canonical: null },
};

const routes = [
  { label: "Work", href: "/work", note: "Seven case studies" },
  { label: "About", href: "/about", note: "How I work and what I have shipped" },
  { label: "Lab", href: "/lab", note: "Builds outside client work" },
];

export default function NotFound() {
  return (
    <section
      aria-labelledby="not-found-heading"
      className="container-page flex min-h-[70vh] flex-col justify-center py-32"
    >
      <p className="font-mono text-sm text-accent">404</p>

      <h1
        id="not-found-heading"
        className="mt-6 max-w-3xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl"
      >
        That page does not exist.
      </h1>

      <p className="mt-6 max-w-prose text-lg leading-relaxed text-primary/85">
        Either the link is wrong or the page has moved. Everything else is where you left it.
      </p>

      <ul className="mt-12 grid gap-6 sm:grid-cols-3">
        {routes.map((route) => (
          <li key={route.href} className="list-none">
            <Link
              href={route.href}
              className="group flex h-full flex-col gap-2 border-[0.5px] border-border bg-surface p-6 transition-all duration-200 ease-out-strong hover:-translate-y-1 hover:border-accent"
            >
              <span className="font-display text-xl font-bold text-primary transition-colors duration-200 group-hover:text-accent">
                {route.label}
              </span>
              <span className="text-sm leading-relaxed text-muted">{route.note}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="mt-12">
        <Button href="/" variant="ghost">
          Back to the homepage
        </Button>
      </div>
    </section>
  );
}
