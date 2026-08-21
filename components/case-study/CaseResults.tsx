import { CaseFigure } from "@/components/case-study/CaseFigure";
import { Reveal } from "@/components/motion/Reveal";
import type { CaseStudyDetail } from "@/lib/types";

/**
 * The payoff. Stats as a bordered grid of cells — each cell lifts and takes
 * the accent border on hover, echoing the card language used site-wide.
 */
export function CaseResults({ study }: { study: CaseStudyDetail }) {
  const { results } = study;
  const index = String(study.sections.length + 1).padStart(2, "0");

  return (
    <section aria-labelledby="results-heading" className="container-page py-20 md:py-24">
      <Reveal>
        <p className="font-mono text-sm text-primary">{index} · {results.heading}</p>
        <p className="mt-4 max-w-prose font-display text-2xl font-bold leading-snug text-primary sm:text-3xl">
          {results.summary}
        </p>
      </Reveal>

      <dl className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {results.stats.map((stat, index) => (
          <Reveal key={stat.label} delay={index * 60}>
            <div className="group h-full border-[0.5px] border-border bg-surface p-6 transition-all duration-200 ease-out-strong hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_32px_rgba(96,165,250,0.08)]">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-mono text-3xl text-accent sm:text-4xl">
                  {stat.value}
                </span>
                <span className="mt-2 block text-xs uppercase tracking-wider text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          </Reveal>
        ))}
      </dl>

      {results.receipts && results.receipts.length > 0 ? (
        // Half-width columns on desktop so tall analytics screenshots stay reasonable.
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          {results.receipts.map((image, index) => (
            <Reveal key={image.alt} delay={index * 80}>
              <CaseFigure image={image} ratio="aspect-[16/9]" />
            </Reveal>
          ))}
        </div>
      ) : null}
    </section>
  );
}
