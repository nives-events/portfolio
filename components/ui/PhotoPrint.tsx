import type { CSSProperties } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import type { CaseImage } from "@/lib/types";

type PhotoPrintProps = {
  image: Pick<CaseImage, "src" | "alt" | "position">;
  /** Handwritten caption on the bottom border, set in Caveat. */
  caption?: string;
  /** Frame number badge, top-left of the image (e.g. "01"). */
  index?: string;
  /** Blinking REC mark, top-right of the image. */
  rec?: boolean;
  /** Show the ISO / f-stop metadata strip along the bottom of the image. */
  camera?: boolean;
  /** Small mono note bottom-right of the white border (e.g. a project tag). */
  note?: string;
  /** Resting tilt in degrees. Straightens on hover when inside a link. */
  tilt?: number;
  /** Strip of tape across the top edge. */
  tape?: boolean;
  /** Black-and-white treatment: used for environment shots, never the work. */
  bw?: boolean;
  /** Tailwind aspect utility for the photo area. */
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  className?: string;
};

/**
 * A physical photo print with digital-camera chrome: white border, the image
 * inside, a frame number, a REC mark, ISO/f-stop metadata, and a handwritten
 * caption below. The single visual object the whole "open mic night" system is
 * built from. Colours are theme-constant because a print is an object on the
 * wall, not a UI surface (see .photo-print in globals.css).
 */
export function PhotoPrint({
  image,
  caption,
  index,
  rec = false,
  camera = false,
  note,
  tilt = 0,
  tape = false,
  bw = false,
  ratio = "aspect-[4/3]",
  sizes = "(min-width: 1024px) 420px, (min-width: 640px) 50vw, 90vw",
  priority = false,
  className = "",
}: PhotoPrintProps) {
  const fit = `object-cover ${image.position === "top" ? "object-top" : "object-center"} ${
    bw ? "bw-photo" : ""
  }`;

  return (
    <figure
      className={`photo-print relative ${className}`}
      style={{ "--tilt": `${tilt}deg` } as CSSProperties}
    >
      {tape ? <span aria-hidden="true" className="photo-tape" /> : null}

      <div className={`photo-print__img ${ratio}`}>
        {image.src.endsWith(".svg") ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image.src}
            alt={image.alt}
            loading={priority ? "eager" : "lazy"}
            className={`absolute inset-0 h-full w-full ${fit}`}
          />
        ) : (
          <SmartImage src={image.src} alt={image.alt} sizes={sizes} priority={priority} className={fit} />
        )}

        {/* Digicam chrome. Decorative: hidden from assistive tech. */}
        <div aria-hidden="true" className="photo-chrome">
          {/* Gradients so the mono marks stay legible over any photo. */}
          {index || rec ? (
            <span className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-black/45 to-transparent" />
          ) : null}
          {camera ? (
            <span className="absolute inset-x-0 bottom-0 h-9 bg-gradient-to-t from-black/45 to-transparent" />
          ) : null}

          {index ? <span className="absolute left-2.5 top-2 font-semibold">{index}</span> : null}
          {rec ? (
            <span className="absolute right-2.5 top-2 inline-flex items-center gap-1.5">
              <span className="rec-dot" />
              REC
            </span>
          ) : null}
          {camera ? (
            <>
              <span className="absolute bottom-2 left-2.5">ISO 800</span>
              <span className="absolute bottom-2 right-2.5">F 2.8</span>
            </>
          ) : null}
        </div>
      </div>

      {caption || note ? (
        <figcaption className="flex items-baseline justify-between gap-3 pt-2">
          {caption ? (
            <span className="photo-caption text-xl sm:text-2xl">{caption}</span>
          ) : (
            <span />
          )}
          {note ? (
            <span className="shrink-0 font-mono text-[10px] uppercase tracking-[0.14em] text-[var(--photo-ink)] opacity-55">
              {note}
            </span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
