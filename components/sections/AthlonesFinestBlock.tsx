import { Reveal } from "@/components/motion/Reveal";
import { CaseStudyCard } from "@/components/ui/CaseStudyCard";
import { athlonesFinest } from "@/lib/content";

export function AthlonesFinestBlock() {
  return (
    <section aria-labelledby="afe-heading" className="container-page py-24">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-widest text-muted">
          {athlonesFinest.eyebrow}
        </p>
        <h2
          id="afe-heading"
          className="mt-4 font-display text-4xl font-bold tracking-tight text-primary sm:text-5xl"
        >
          {athlonesFinest.heading}
        </h2>
        <div className="mt-4 max-w-prose space-y-4 text-lg text-primary/80">
          {athlonesFinest.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
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
