import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { aboutPage } from "@/lib/content";

export function ClosingCTA() {
  const { heading, sub, cta } = aboutPage.closing;

  return (
    <section aria-labelledby="about-cta-heading" className="border-t border-border">
      <div className="container-page py-28 text-center">
        <Reveal>
          <h2
            id="about-cta-heading"
            className="font-display text-4xl font-bold leading-tight tracking-tight text-primary sm:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-4 font-display text-2xl font-bold text-primary/80 sm:text-3xl">{sub}</p>
          <div className="mt-10 flex justify-center">
            <Button href={cta.href} variant="primary">
              {cta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
