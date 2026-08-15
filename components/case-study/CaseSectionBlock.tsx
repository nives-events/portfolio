import { BeforeAfter } from "@/components/case-study/BeforeAfter";
import { CaseFigure } from "@/components/case-study/CaseFigure";
import { CaseVideoFigure } from "@/components/case-study/CaseVideoFigure";
import { Reveal } from "@/components/motion/Reveal";
import type { CaseSection } from "@/lib/types";

/**
 * One numbered chapter of the case study narrative. The kicker column goes
 * sticky on desktop so the reader always knows where they are in the story.
 * Media order: comparison slider, then videos, then stills — motion first.
 */
export function CaseSectionBlock({ section, banded }: { section: CaseSection; banded: boolean }) {
  return (
    <section aria-label={section.heading} className={banded ? "bg-surface" : undefined}>
      <div className="container-page grid gap-8 py-20 md:grid-cols-12 md:gap-12 md:py-24">
        <div className="md:col-span-4">
          <Reveal className="md:sticky md:top-28">
            <p className="font-mono text-sm text-accent">{section.kicker}</p>
            <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-primary sm:text-3xl">
              {section.heading}
            </h2>
          </Reveal>
        </div>

        <div className="md:col-span-8">
          <Reveal delay={100} className="max-w-prose space-y-5 text-lg leading-relaxed text-primary/85">
            {section.body.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>

          {section.pullStat ? (
            <Reveal delay={160} className="mt-10 border-l-2 border-accent pl-6">
              <p className="font-mono text-4xl text-accent sm:text-5xl">{section.pullStat.value}</p>
              <p className="mt-2 text-sm uppercase tracking-wider text-muted">
                {section.pullStat.label}
              </p>
            </Reveal>
          ) : null}

          {section.beforeAfter ? (
            <Reveal delay={120} className="mt-10">
              <BeforeAfter
                before={section.beforeAfter.before}
                after={section.beforeAfter.after}
                caption={section.beforeAfter.caption}
              />
            </Reveal>
          ) : null}

          {section.videos && section.videos.length > 0 ? (
            <div
              className={`mt-10 grid gap-6 ${section.videos.length > 1 ? "sm:grid-cols-2" : ""}`}
            >
              {section.videos.map((video, index) => (
                <Reveal
                  key={video.src}
                  delay={index * 80}
                  // With an odd count, the lead video goes full width — hero of the group.
                  className={
                    section.videos!.length % 2 === 1 && index === 0 ? "sm:col-span-2" : ""
                  }
                >
                  <CaseVideoFigure video={video} />
                </Reveal>
              ))}
            </div>
          ) : null}

          {section.images && section.images.length > 0 ? (
            <div
              className={`mt-10 grid gap-6 ${section.images.length > 1 ? "sm:grid-cols-2" : ""}`}
            >
              {section.images.map((image, index) => (
                <Reveal key={image.alt} delay={index * 80}>
                  <CaseFigure image={image} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
