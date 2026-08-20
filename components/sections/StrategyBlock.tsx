import { Reveal } from "@/components/motion/Reveal";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { strategyProjects } from "@/lib/content";

/**
 * The applied strategy work: a go-to-market plan and a conversion analysis.
 * Sits on the homepage in its own band so the product marketing evidence is
 * not buried behind the two employer blocks.
 */
export function StrategyBlock() {
  return (
    <section aria-labelledby="strategy-heading" className="border-t border-border">
      <div className="container-page py-24">
        <Reveal>
          <h2
            id="strategy-heading"
            className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            {strategyProjects.heading}
          </h2>
          <p className="mt-4 max-w-prose text-lg text-primary/80">{strategyProjects.intro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-8 md:grid-cols-2">
          {strategyProjects.cards.map((study, index) => (
            <Reveal as="li" key={study.title} delay={index * 80} className="list-none">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
