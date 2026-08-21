import type { CSSProperties } from "react";
import Link from "next/link";
import { CaseFigure } from "@/components/case-study/CaseFigure";
import { CaseVideoFigure } from "@/components/case-study/CaseVideoFigure";
import type { CaseStudyDetail } from "@/lib/types";

const riseDelay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

/**
 * Case study opener. Uses the homepage's CSS-only load stagger (hero-rise)
 * so the page feels alive immediately, before any scroll reveals fire.
 */
export function CaseHero({ study }: { study: CaseStudyDetail }) {
  return (
    <section aria-labelledby="case-heading" className="container-page pb-16 pt-32 md:pt-40">
      <nav aria-label="Breadcrumb" className="hero-rise" style={riseDelay(0)}>
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted transition-colors duration-200 hover:text-primary"
        >
          <span aria-hidden="true">←</span> All work
        </Link>
      </nav>

      <div className="hero-rise mt-10 flex items-baseline gap-4" style={riseDelay(100)}>
        <span aria-hidden="true" className="font-mono text-sm text-primary">
          {study.index}
        </span>
        <p className="text-xs font-medium uppercase tracking-widest text-muted">{study.tag}</p>
      </div>

      <h1
        id="case-heading"
        className="hero-rise mt-5 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl"
        style={riseDelay(200)}
      >
        {study.title}
      </h1>

      <p
        className="hero-rise mt-6 max-w-prose text-lg leading-relaxed text-primary/85"
        style={riseDelay(350)}
      >
        {study.intro}
      </p>

      {/* Role / timeline / scope — the facts a hiring manager scans for first. */}
      <dl
        className="hero-rise mt-12 grid gap-6 border-y border-border py-8 sm:grid-cols-3"
        style={riseDelay(500)}
      >
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">Role</dt>
          <dd className="mt-2 text-sm leading-relaxed text-primary/85">{study.meta.role}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">Timeline</dt>
          <dd className="mt-2 font-mono text-sm text-primary/85">{study.meta.timeline}</dd>
        </div>
        <div>
          <dt className="text-xs uppercase tracking-widest text-muted">Scope</dt>
          <dd className="mt-2 flex flex-wrap gap-2">
            {study.meta.scope.map((item) => (
              <span
                key={item}
                className="rounded-[50px] border border-border px-3 py-1 text-xs text-primary/75"
              >
                {item}
              </span>
            ))}
          </dd>
        </div>
      </dl>

      <div className="hero-rise mt-12" style={riseDelay(650)}>
        {study.heroVideo ? (
          <CaseVideoFigure video={study.heroVideo} />
        ) : study.heroImage ? (
          <CaseFigure image={study.heroImage} ratio="aspect-[21/9]" sizes="100vw" priority />
        ) : null}
      </div>

      <dl
        aria-label="Headline results"
        className="hero-rise mt-10 flex flex-wrap gap-x-12 gap-y-6"
        style={riseDelay(800)}
      >
        {study.heroStats.map((stat) => (
          <div key={stat.label}>
            <dt className="sr-only">{stat.label}</dt>
            <dd>
              <span className="block font-mono text-3xl text-accent sm:text-4xl">{stat.value}</span>
              <span className="mt-1 block text-xs uppercase tracking-wider text-muted">
                {stat.label}
              </span>
            </dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
