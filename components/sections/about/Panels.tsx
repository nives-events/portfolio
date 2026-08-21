import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";

/**
 * Strategist / Builder / Operator split. Hairline dividers between columns,
 * with the last panel carrying no right border.
 */
export function Panels() {
  const last = aboutPage.panels.length - 1;

  return (
    <section aria-labelledby="panels-heading" className="container-page py-24">
      <h2 id="panels-heading" className="sr-only">
        Strategist, builder, operator
      </h2>
      <Reveal className="grid border-y border-border md:grid-cols-3">
        {aboutPage.panels.map((panel, index) => (
          <div
            key={panel.label}
            className={`py-10 md:py-14 ${
              index === last
                ? "md:pl-8"
                : "md:border-r md:border-border md:pr-8"
            } ${index > 0 && index < last ? "md:px-8" : ""}`}
          >
            <p className="text-xs font-medium uppercase tracking-widest text-primary">
              {panel.label}
            </p>
            <p className="mt-4 font-display text-xl font-bold leading-tight text-primary sm:text-2xl">
              {panel.body}
            </p>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
