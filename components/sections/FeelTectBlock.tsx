import { Reveal } from "@/components/motion/Reveal";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { StatStrip } from "@/components/ui/StatStrip";
import { feeltect } from "@/lib/content";

export function FeelTectBlock() {
  return (
    <section
      id="work"
      aria-labelledby="feeltect-heading"
      className="scroll-mt-24 bg-surface"
    >
      <div className="container-page py-24">
        <Reveal>
          <h2
            id="feeltect-heading"
            className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl"
          >
            {feeltect.heading}
          </h2>
        </Reveal>

        <Reveal delay={80} className="mt-10 border-t border-border pt-8">
          <StatStrip stats={feeltect.statsBefore} label="FeelTect headline results" />
        </Reveal>

        <ul className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {feeltect.cards.map((study, index) => (
            <Reveal as="li" key={study.title} delay={index * 80} className="list-none">
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </ul>

        <Reveal className="mt-12 border-t border-border pt-8">
          <StatStrip stats={feeltect.statsAfter} label="FeelTect delivery in numbers" />
        </Reveal>
      </div>
    </section>
  );
}
