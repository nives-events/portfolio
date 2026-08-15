import { CaseFigure } from "@/components/case-study/CaseFigure";
import { Reveal } from "@/components/motion/Reveal";
import { craft } from "@/lib/content";

/**
 * Design output collected in one place. Every asset here also appears in the
 * case study it belongs to; this section exists so the craft is visible
 * without a reader having to open five pages to find it.
 */
export function Craft() {
  return (
    <section aria-labelledby="craft-heading" className="border-t border-border">
      <div className="container-page py-24">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-widest text-muted">
            {craft.eyebrow}
          </p>
          <h2
            id="craft-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl"
          >
            {craft.heading}
          </h2>
          <p className="mt-3 max-w-prose text-lg text-primary/80">{craft.intro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {craft.items.map((item, index) => (
            <Reveal as="li" key={item.image.src} delay={(index % 4) * 60} className="list-none">
              {/* One frame for every asset so the grid reads as a set, not a
                  pile. The assets are contained rather than cropped: these are
                  finished designs, and a crop cuts the copy off them. */}
              <CaseFigure
                image={{ ...item.image, ratio: undefined, fit: "contain", caption: item.note }}
                ratio="aspect-[3/4]"
              />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
