import Link from "next/link";
import { SmartImage } from "@/components/ui/SmartImage";
import type { CaseStudy } from "@/lib/types";

type CaseStudyCardProps = {
  study: CaseStudy;
  /** Resting tilt in degrees; the print straightens on hover. */
  tilt?: number;
};

/**
 * A case study as a photo print with notes written under it. Same physical
 * object as the homepage wall (see .photo-print in globals.css), extended
 * with the supporting text the index pages need: tag, summary, stats, link.
 * Print colours are theme-constant: white paper, dark ink.
 */
export function CaseStudyCard({ study, tilt = 0 }: CaseStudyCardProps) {
  const { title, tag, body, href, stats, image } = study;

  const inner = (
    <article
      className="photo-print relative flex h-full flex-col"
      style={{ "--tilt": `${tilt}deg` } as React.CSSProperties}
    >
      {image ? (
        <div className="photo-print__img aspect-[16/10]">
          {image.src.endsWith(".svg") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover ${
                image.position === "top" ? "object-top" : "object-center"
              }`}
            />
          ) : (
            <SmartImage
              src={image.src}
              alt={image.alt}
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={`object-cover ${image.position === "top" ? "object-top" : "object-center"}`}
            />
          )}
        </div>
      ) : null}

      <div className="flex flex-1 flex-col gap-3 pt-3 text-[var(--photo-ink)]">
        <p className="font-mono text-[10px] uppercase tracking-[0.16em] opacity-55">{tag}</p>

        <h3 className="font-display text-2xl font-bold leading-tight sm:text-3xl">{title}</h3>

        <p className="max-w-prose text-sm leading-relaxed opacity-75">{body}</p>

        {stats ? (
          <dl className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 pt-2">
            {stats.map((stat) => (
              <div key={stat.label}>
                <dt className="sr-only">{stat.label}</dt>
                <dd>
                  <span className="block font-mono text-lg">{stat.value}</span>
                  <span className="text-xs leading-snug opacity-55">{stat.label}</span>
                </dd>
              </div>
            ))}
          </dl>
        ) : null}

        {href ? (
          <span className="photo-caption mt-auto inline-flex min-h-[44px] w-fit items-center pt-3 text-xl">
            see the full story →
          </span>
        ) : null}
      </div>
    </article>
  );

  // The whole print is the link, so hovering anywhere picks it off the wall.
  return href ? (
    <Link href={href} className="block h-full focus-visible:outline-offset-8">
      {inner}
    </Link>
  ) : (
    inner
  );
}
