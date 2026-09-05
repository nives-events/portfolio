import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { site } from "@/lib/content";
import type { CaseStudyDetail } from "@/lib/types";

export function CaseWhatsNext({ next }: { next?: CaseStudyDetail }) {
  return (
    <section aria-labelledby="whats-next-heading" className="border-t border-border">
      <div className="container-page py-16 md:py-20">
        <Reveal>
          <h2
            id="whats-next-heading"
            className="font-mono text-xs uppercase tracking-widest text-muted"
          >
            What&apos;s next
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {next ? (
            <Reveal delay={60}>
              <Link
                href={`/work/${next.slug}`}
                className="group block h-full border-[0.5px] border-border bg-surface p-8 transition-all duration-200 ease-out-strong hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_32px_var(--shadow-card)]"
              >
                <p className="text-xs uppercase tracking-widest text-muted">
                  Next case study
                </p>
                <p className="mt-3 font-display text-xl font-bold leading-tight text-primary sm:text-2xl">
                  {next.title}
                </p>
                <p className="mt-2 text-sm text-muted">{next.tag}</p>
              </Link>
            </Reveal>
          ) : (
            <Reveal delay={60}>
              <Link
                href="/work"
                className="group block h-full border-[0.5px] border-border bg-surface p-8 transition-all duration-200 ease-out-strong hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_32px_var(--shadow-card)]"
              >
                <p className="text-xs uppercase tracking-widest text-muted">
                  More work
                </p>
                <p className="mt-3 font-display text-xl font-bold leading-tight text-primary sm:text-2xl">
                  See all case studies
                </p>
                <p className="mt-2 text-sm text-muted">
                  Ten write-ups covering brand, growth, content and events.
                </p>
              </Link>
            </Reveal>
          )}

          <Reveal delay={120}>
            <a
              href={`mailto:${site.email}`}
              className="group block h-full border-[0.5px] border-border bg-surface p-8 transition-all duration-200 ease-out-strong hover:-translate-y-1 hover:border-primary hover:shadow-[0_8px_32px_var(--shadow-card)]"
            >
              <p className="text-xs uppercase tracking-widest text-muted">
                Get in touch
              </p>
              <p className="mt-3 font-display text-xl font-bold leading-tight text-primary sm:text-2xl">
                Want to talk about working together?
              </p>
              <p className="mt-2 text-sm text-muted">
                Open to full-time roles and freelance projects.
              </p>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
