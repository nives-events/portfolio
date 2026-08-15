import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

export function OutsideWork() {
  return (
    <section aria-labelledby="outside-work-heading" className="container-page py-24">
      <Reveal>
        <h2
          id="outside-work-heading"
          className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
        >
          Outside work
        </h2>
        <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-primary/85">
          {aboutPage.outsideWork.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
