import { SmartImage } from "@/components/ui/SmartImage";
import type { CaseImage } from "@/lib/types";

type CaseFigureProps = {
  image: CaseImage;
  /** Fallback aspect ratio when the image doesn't specify one. */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Renders a case study visual, or a labelled dashed placeholder while the
 * asset is pending (empty `src`). SVGs render via a plain <img> - they're
 * resolution-independent, so next/image adds nothing but config friction.
 */
export function CaseFigure({
  image,
  ratio = "aspect-[16/10]",
  sizes = "(min-width: 768px) 50vw, 100vw",
  priority = false,
}: CaseFigureProps) {
  const frame = image.ratio ?? ratio;
  const isSvg = image.src.endsWith(".svg");
  const focal = image.position === "top" ? "object-top" : "object-center";
  // `contain` never crops, so a focal point is meaningless alongside it.
  const fit = image.fit === "contain" ? "object-contain" : `object-cover ${focal}`;

  return (
    <figure className="w-full">
      {image.src ? (
        <div className={`relative ${frame} w-full overflow-hidden rounded-none border border-border bg-surface`}>
          {isSvg ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image.src}
              alt={image.alt}
              className={`absolute inset-0 h-full w-full ${fit}`}
            />
          ) : (
            <SmartImage src={image.src} alt={image.alt} sizes={sizes} priority={priority} className={fit} />
          )}
        </div>
      ) : (
        <div
          role="img"
          aria-label={image.alt}
          className={`flex ${frame} w-full items-center justify-center rounded-none border border-dashed border-border bg-surface`}
        >
          <span className="max-w-[80%] text-center font-mono text-xs uppercase tracking-wider text-muted">
            {image.alt}
          </span>
        </div>
      )}
      {image.caption ? (
        <figcaption className="mt-3 text-xs leading-relaxed text-muted">{image.caption}</figcaption>
      ) : null}
    </figure>
  );
}
