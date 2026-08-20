import Image from "next/image";
import Link from "next/link";
import type { CaseStudy } from "@/lib/types";

type CaseStudyCardProps = {
  study: CaseStudy;
};

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const { title, body, href, stats, image } = study;

  return (
    <article className="group relative flex h-full flex-col gap-4 border-[0.5px] border-border bg-surface p-6 transition-all duration-200 ease-out-strong hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_32px_rgba(96,165,250,0.08)]">
      {image ? (
        // Edge-to-edge header. aspect-ratio reserves the space (zero CLS);
        // the zoom is transform-only so nothing reflows on hover.
        <div className="relative -mx-6 -mt-6 mb-1 aspect-[16/10] overflow-hidden">
          {image.src.endsWith(".svg") ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image.src}
              alt={image.alt}
              loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.04] ${
                image.position === "top" ? "object-top" : "object-center"
              }`}
            />
          ) : (
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
              className={`object-cover transition-transform duration-300 ease-out-strong group-hover:scale-[1.04] ${
                image.position === "top" ? "object-top" : "object-center"
              }`}
            />
          )}
          {/* Soft scrim so the image settles into the card surface. */}
          <div
            aria-hidden="true"
            className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-surface to-transparent"
          />
        </div>
      ) : null}

      <h3 className="font-display text-2xl font-bold leading-tight text-primary">
        {title}
      </h3>

      <p className="max-w-prose text-base leading-relaxed text-primary/80">
        {body}
      </p>

      {stats ? (
        <dl className="mt-auto grid grid-cols-2 gap-x-6 gap-y-3 pt-2">
          {stats.map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="block font-mono text-xl text-accent">
                  {stat.value}
                </span>
                <span className="text-xs leading-snug text-muted">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
      ) : null}

      {href ? (
        <Link
          href={href}
          className="mt-auto inline-flex min-h-[44px] w-fit items-center pt-4 text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent"
        >
          Learn more
        </Link>
      ) : null}
    </article>
  );
}
