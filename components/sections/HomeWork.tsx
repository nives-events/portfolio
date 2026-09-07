import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { WorkWall } from "@/components/ui/WorkWall";
import { homepage } from "@/lib/content";

/**
 * Selected work as a wall of photographs rather than a grid or list. Prints
 * hang staggered so none sits directly under another; each one fades and
 * settles into place on its own scroll-scrubbed progress (see WallPhoto),
 * fully reversible, so photos come and go as you scroll up and down.
 */
export function HomeWork() {
  const { kicker, heading, subheading, scrollHint, cards, seeAll } = homepage.work;

  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24 bg-surface">
      <div className="container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="kicker">{kicker}</p>
            <h2
              id="work-heading"
              className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
            >
              {heading}
            </h2>
            <p className="mt-3 max-w-prose text-base leading-relaxed text-primary/80">{subheading}</p>
          </Reveal>
          <Reveal delay={120}>
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-primary/70">
              {scrollHint} <span aria-hidden="true">&#8595;</span>
            </p>
          </Reveal>
        </div>

        <div className="mt-16">
          <WorkWall cards={[...cards]} />
        </div>

        <div className="mt-16 flex justify-center lg:mt-10">
          <Reveal>
            <Button href={seeAll.href} variant="primary">
              {seeAll.label}
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
