import { Reveal } from "@/components/motion/Reveal";
import { PhotoPrint } from "@/components/ui/PhotoPrint";
import { aboutPage } from "@/lib/content";

const TILTS = [-2.5, 2, -1.5, 2.5, -2, 1.5];

/**
 * "Away from the desktop": a personal, editorial photo section using the same
 * photo-print treatment as the rest of the site. Until Niall supplies the
 * photographs, an empty src renders a labelled placeholder frame in the same
 * shape, so the layout is ready for the real pictures.
 */
export function AwayFromDesk() {
  const { heading, intro, items } = aboutPage.awayFromDesk;

  return (
    <section aria-labelledby="away-heading" className="container-page py-24">
      <Reveal>
        <h2
          id="away-heading"
          className="font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
        >
          {heading}
        </h2>
        <p className="mt-3 max-w-prose text-lg text-primary/80">{intro}</p>
      </Reveal>

      <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <Reveal key={item.label} delay={(i % 4) * 90}>
            {item.image.src ? (
              <PhotoPrint
                image={item.image}
                caption={item.label}
                tilt={TILTS[i % TILTS.length]!}
                tape
                camera={i % 2 === 1}
                rec={i % 2 === 0}
                ratio="aspect-[4/5]"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 44vw, 90vw"
              />
            ) : (
              // Placeholder print: same physical object, waiting for the photo.
              <figure
                className="photo-print relative"
                style={{ "--tilt": `${TILTS[i % TILTS.length]!}deg` } as React.CSSProperties}
              >
                <span aria-hidden="true" className="photo-tape" />
                <div className="photo-print__img aspect-[4/5]">
                  <div className="absolute inset-0 flex items-center justify-center border border-dashed border-border">
                    <span className="px-4 text-center font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                      Photo: {item.label}
                    </span>
                  </div>
                </div>
                <figcaption className="pt-2">
                  <span className="photo-caption text-xl sm:text-2xl">{item.label}</span>
                </figcaption>
              </figure>
            )}
            <p className="mt-4 text-base leading-relaxed text-primary/80">{item.body}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
