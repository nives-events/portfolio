import { site } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container-page flex flex-col gap-4 py-10 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Footer" className="flex items-center gap-6">
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center transition-colors hover:text-primary"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-[44px] items-center transition-colors hover:text-primary"
          >
            {site.email}
          </a>
        </nav>
        <p>
          © {year} {site.name}
        </p>
      </div>
    </footer>
  );
}
