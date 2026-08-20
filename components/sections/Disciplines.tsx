import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { disciplines } from "@/lib/content";

/**
 * The five briefs the site answers, with a line of evidence under each. Sits
 * directly under the hero so a hiring reader can find their own job title
 * before they decide whether to keep scrolling.
 */
export function Disciplines() {
  return (
    <section aria-labelledby="disciplines-heading" className="border-y border-border">
      <div className="container-page py-20 text-center">
        <Reveal>
          <h2
            id="disciplines-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Five briefs, one person
          </h2>
        </Reveal>

        <dl className="mx-auto mt-12 grid max-w-5xl gap-x-12 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {disciplines.map((item, index) => (
            <Reveal
              key={item.label}
              delay={index * 60}
              className="flex flex-col items-center border-t border-border pt-6 text-center"
            >
              <dt className="font-display text-xl font-bold text-primary sm:text-2xl">
                {item.label}
              </dt>
              <dd className="mt-3 max-w-sm text-base leading-relaxed text-primary/80">
                {item.body}
              </dd>
              <Button href={item.href} variant="ghost" className="mt-6">
                See the case study
              </Button>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
