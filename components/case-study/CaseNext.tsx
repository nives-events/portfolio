import Link from "next/link";
import type { CaseStudyDetail } from "@/lib/types";

/**
 * Full-width handoff to the next case study, so the reading flow never dead
 * ends. Oversized title, arrow slides on hover.
 */
export function CaseNext({ next }: { next: CaseStudyDetail }) {
  return (
    <section aria-label="Next case study" className="border-t border-border">
      <Link
        href={`/work/${next.slug}`}
        className="group block transition-colors duration-300 hover:bg-surface"
      >
        <div className="container-page flex items-center justify-between gap-8 py-16 md:py-20">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted">
              Next case study
            </p>
            <p className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-primary transition-colors duration-200 group-hover:text-accent sm:text-4xl lg:text-5xl">
              {next.title}
            </p>
            <p className="mt-3 text-sm uppercase tracking-widest text-muted">{next.tag}</p>
          </div>
          <span
            aria-hidden="true"
            className="shrink-0 font-display text-4xl text-accent transition-transform duration-200 ease-out-strong group-hover:translate-x-2 sm:text-5xl"
          >
            →
          </span>
        </div>
      </Link>
    </section>
  );
}
