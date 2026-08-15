import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { workPage } from "@/lib/content";

export function Closing() {
  const { closing } = workPage;

  return (
    <section aria-labelledby="work-closing-heading" className="border-t border-border">
      <div className="container-page py-32 text-center">
        <Reveal>
          <h2
            id="work-closing-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            {closing.heading}
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">{closing.body}</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={closing.primaryCta.href} variant="primary">
              {closing.primaryCta.label}
            </Button>
            <Button href={closing.secondaryCta.href} variant="ghost">
              {closing.secondaryCta.label}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
