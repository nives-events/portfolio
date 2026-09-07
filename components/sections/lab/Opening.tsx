import { Reveal } from "@/components/motion/Reveal";

export function Opening() {
  return (
    <section aria-labelledby="lab-heading" className="container-page pb-16 pt-32 md:pb-20 md:pt-40">
      <Reveal>
        <p className="kicker">Off the clock</p>
        <h1
          id="lab-heading"
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl"
        >
          Things I build when nobody asks.
        </h1>
      </Reveal>

      <Reveal delay={120}>
        <p className="mt-8 max-w-prose text-lg leading-relaxed text-primary/85">
          Side projects and builds outside client work, including athlonesfinest.com and this
          portfolio. This is where I push a tool until I know whether it belongs in real work.
        </p>
      </Reveal>
    </section>
  );
}
