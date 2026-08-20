import { Reveal } from "@/components/motion/Reveal";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { athlonesFinest } from "@/lib/content";

export function AthlonesFinestBlock() {
  return (
    <section aria-labelledby="afe-heading" className="container-page py-24">
      <Reveal>
        <h2
          id="afe-heading"
          className="font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl"
        >
          {athlonesFinest.heading}
        </h2>
      </Reveal>

      <ul className="mt-12 grid gap-8 md:grid-cols-2">
        {athlonesFinest.cards.map((study, index) => (
          <Reveal as="li" key={study.title} delay={index * 80} className="list-none">
            <CaseStudyCard study={study} />
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
