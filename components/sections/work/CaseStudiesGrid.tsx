import { Reveal } from "@/components/motion/Reveal";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { workPage } from "@/lib/content";

/**
 * All case studies, grouped by project. Groups alternate background bands so
 * each organisation reads as its own chapter, matching the homepage rhythm.
 */
export function CaseStudiesGrid() {
  return (
    <>
      {workPage.groups.map((group, groupIndex) => {
        const headingId = `work-group-${groupIndex}`;
        const banded = groupIndex % 2 === 0;

        return (
          <section
            key={group.heading}
            aria-labelledby={headingId}
            className={banded ? "bg-surface" : undefined}
          >
            <div className="container-page py-24">
              <Reveal>
                <p className="text-xs font-medium uppercase tracking-widest text-muted">
                  {group.eyebrow}
                </p>
                <h2
                  id={headingId}
                  className="mt-4 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
                >
                  {group.heading}
                </h2>
                <p className="mt-3 max-w-prose text-lg text-primary/80">{group.intro}</p>
              </Reveal>

              <ul
                className={`mt-12 grid gap-8 md:grid-cols-2 ${
                  group.cards.length > 2 ? "lg:grid-cols-3" : ""
                }`}
              >
                {group.cards.map((study, index) => (
                  <Reveal as="li" key={study.title} delay={index * 80} className="list-none">
                    <CaseStudyCard study={study} />
                  </Reveal>
                ))}
              </ul>
            </div>
          </section>
        );
      })}
    </>
  );
}
