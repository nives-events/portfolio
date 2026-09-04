import Link from "next/link";
import { ScrollReveal } from "@/components/motion/ScrollReveal";
import { SmartImage } from "@/components/ui/SmartImage";
import type { CaseStudy } from "@/lib/types";

/**
 * One row of the editorial showreel: a large image that scales and parallaxes
 * as it moves through the viewport (see .reel-media in globals.css), with the
 * project title and category set large beside it. Rows alternate side to side.
 * Shared by the homepage Recent Work and the Projects/Work index.
 */
export function ReelRow({
  study,
  index,
  total,
  flip,
  showBody = true,
}: {
  study: CaseStudy;
  index: number;
  total: number;
  flip: boolean;
  /** One-line description under the title. Off for the sparse homepage reel. */
  showBody?: boolean;
}) {
  return (
    <ScrollReveal from={flip ? "right" : "left"}>
      <Link
        href={study.href ?? "/work"}
        className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
      >
        <div className={`md:col-span-7 ${flip ? "md:order-2 md:col-start-6" : "md:order-1"}`}>
          <div className="reel-frame aspect-[16/10]">
            {study.image ? (
              study.image.src.endsWith(".svg") ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={study.image.src} alt={study.image.alt} className="reel-media" loading="lazy" />
              ) : (
                <SmartImage
                  src={study.image.src}
                  alt={study.image.alt}
                  sizes="(min-width: 768px) 58vw, 92vw"
                  className="reel-media"
                />
              )
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <span className="font-mono text-xs uppercase tracking-widest text-white/50">
                  {study.title}
                </span>
              </div>
            )}
            <span className="pointer-events-none absolute left-4 top-3 font-mono text-[11px] tracking-[0.14em] text-white/90 [text-shadow:0_1px_3px_rgba(0,0,0,0.6)]">
              {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
            </span>
          </div>
        </div>

        <div className={`md:col-span-5 ${flip ? "md:order-1" : "md:order-2"}`}>
          <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary/60">
            {study.tag}
          </p>
          <h3 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.98] tracking-tight text-primary sm:text-5xl">
            {study.title}
          </h3>
          {showBody ? (
            <p className="mt-4 max-w-prose text-base leading-relaxed text-primary/75">{study.body}</p>
          ) : null}
          <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 group-hover:underline">
            View project <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </ScrollReveal>
  );
}
