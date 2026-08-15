import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

export function Opening() {
  return (
    <section aria-labelledby="about-heading" className="container-page pb-20 pt-32 md:pb-28 md:pt-40">
      <Reveal>
        <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted">About</p>
        <h1
          id="about-heading"
          className="mt-6 max-w-4xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-primary sm:text-5xl lg:text-6xl"
        >
          {aboutPage.headline}
        </h1>
      </Reveal>

      <Reveal delay={120} className="mt-8 max-w-prose space-y-5 text-lg leading-relaxed text-primary/85">
        {aboutPage.opening.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </Reveal>
    </section>
  );
}
