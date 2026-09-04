import { Reveal } from "@/components/motion/Reveal";
import { ReelRow } from "@/components/ui/ReelRow";
import { workPage } from "@/lib/content";

/**
 * All case studies, grouped by project, each group its own chapter with a mono
 * kicker and a heading. Cards run as the editorial showreel (see ReelRow), so
 * the index page moves the same way the homepage does.
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
                <p className="kicker">{group.eyebrow}</p>
                <h2
                  id={headingId}
                  className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
                >
                  {group.heading}
                </h2>
                {group.intro ? (
                  <p className="mt-3 max-w-prose text-lg text-primary/80">{group.intro}</p>
                ) : null}
              </Reveal>

              <div className="mt-16 flex flex-col gap-24 sm:gap-28">
                {group.cards.map((study, index) => (
                  <ReelRow
                    key={study.title}
                    study={study}
                    index={index}
                    total={group.cards.length}
                    flip={index % 2 === 1}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
}
