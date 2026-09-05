import { Reveal } from "@/components/motion/Reveal";
import { GalleryWall } from "@/components/sections/GalleryWall";
import { homepage } from "@/lib/content";

export function HomeWork() {
  const { kicker, heading, subheading, scrollHint, cards } = homepage.work;

  return (
    <section id="work" aria-labelledby="work-heading" className="scroll-mt-24 bg-surface">
      <div className="container-page pb-8 pt-24">
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
            <p className="hidden font-mono text-[11px] uppercase tracking-[0.22em] text-primary/70 lg:block">
              {scrollHint} <span aria-hidden="true">&#8595;</span>
            </p>
          </Reveal>
        </div>
      </div>

      <div className="mt-8">
        <GalleryWall cards={[...cards]} />
      </div>
    </section>
  );
}
