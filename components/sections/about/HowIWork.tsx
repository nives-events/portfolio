import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

export function HowIWork() {
  return (
    <section aria-labelledby="how-i-work-heading" className="bg-surface">
      <div className="container-page py-24">
        <Reveal>
          <h2
            id="how-i-work-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            How I work
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-x-12 gap-y-10 md:grid-cols-2">
          {aboutPage.howIWork.map((point, index) => (
            <Reveal key={point.heading} delay={index * 60} className="border-t border-border pt-6">
              <h3 className="font-display text-xl font-bold leading-snug text-primary sm:text-2xl">
                {point.heading}
              </h3>
              <p className="mt-3 text-base leading-relaxed text-primary/80">{point.body}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
