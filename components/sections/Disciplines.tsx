import { Reveal } from "@/components/motion/Reveal";
import { disciplines } from "@/lib/content";

/**
 * The five briefs the site answers, with a line of evidence under each. Sits
 * directly under the hero so a hiring reader can find their own job title
 * before they decide whether to keep scrolling.
 */
export function Disciplines() {
  return (
    <section aria-labelledby="disciplines-heading" className="border-y border-border">
      <div className="container-page py-20">
        <Reveal>
          <h2
            id="disciplines-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Five briefs, one person
          </h2>
        </Reveal>

        <dl className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((item, index) => (
            <Reveal key={item.label} delay={index * 60} className="border-t border-border pt-6">
              <dt className="font-display text-xl font-bold text-primary sm:text-2xl">
                {item.label}
              </dt>
              <dd className="mt-3 text-base leading-relaxed text-primary/80">{item.body}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
