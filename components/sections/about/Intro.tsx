import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

/**
 * Personal introduction: strategy to creative to digital execution to
 * measurement, told as a narrative rather than a list of services.
 */
export function Intro() {
  const { heading, paragraphs } = aboutPage.intro;

  return (
    <section aria-labelledby="about-intro-heading" className="bg-surface">
      <div className="container-page py-24">
        <Reveal>
          <h2
            id="about-intro-heading"
            className="max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-primary sm:text-4xl"
          >
            {heading}
          </h2>
        </Reveal>
        <Reveal delay={100} className="mt-8 max-w-prose space-y-4 text-lg leading-relaxed text-primary/85">
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
