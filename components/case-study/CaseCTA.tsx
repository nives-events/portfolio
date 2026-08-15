import { Reveal } from "@/components/motion/Reveal";
import { Button } from "@/components/ui/Button";
import { site } from "@/lib/content";

/**
 * Conversion block placed right after the results, while the numbers are
 * still fresh. Mailto primary, CV download secondary.
 */
export function CaseCTA() {
  return (
    <section aria-labelledby="case-cta-heading" className="bg-surface">
      <div className="container-page py-20 text-center md:py-24">
        <Reveal>
          <h2
            id="case-cta-heading"
            className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            Need this kind of work done?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted">
            If this case study looks like the brief on your desk, in-house or freelance, let&apos;s
            talk about it.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href={`mailto:${site.email}`} variant="primary" aria-label="Send Niall an email">
              Get in touch
            </Button>
            <Button href="/Niall_Awogboro_CV.pdf" variant="ghost" download>
              Download my CV
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
