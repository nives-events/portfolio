"use client";

import Link from "next/link";
import { useRef } from "react";
import type { CSSProperties } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { PhotoPrint } from "@/components/ui/PhotoPrint";
import type { CaseStudy } from "@/lib/types";

export type WallDirection = "up" | "down" | "left" | "right";

type WallPhotoProps = {
  study: CaseStudy;
  index: number;
  total: number;
  /** Resting tilt in degrees, applied to the print itself (see PhotoPrint). */
  tilt: number;
  /** Which edge the print settles in from as it reveals. */
  direction: WallDirection;
  rec?: boolean;
  camera?: boolean;
  className?: string;
  style?: CSSProperties;
};

const OFFSET: Record<WallDirection, { x: number; y: number }> = {
  up: { x: 0, y: 64 },
  down: { x: 0, y: -64 },
  left: { x: -48, y: 24 },
  right: { x: 48, y: 24 },
};

/**
 * One photograph on the wall. Reveal is scroll-scrubbed and fully bidirectional:
 * a local `useScroll` reads this element's own position against the viewport,
 * and `useTransform` maps that continuously to opacity/position/scale, so
 * scrolling down builds the print into place and scrolling back up dismantles
 * it again from wherever it stopped. No one-shot enter animation.
 *
 * Rotation is deliberately NOT driven here: the print's resting tilt and its
 * hover-straighten are plain CSS on PhotoPrint (`--tilt`, `.photo-print:hover`),
 * so the two motion systems never fight over the same transform.
 */
export function WallPhoto({
  study,
  index,
  total,
  tilt,
  direction,
  rec = false,
  camera = false,
  className = "",
  style,
}: WallPhotoProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const offset = OFFSET[direction];

  // Progress 0 as the print's top edge reaches the bottom of the viewport,
  // 1 once its bottom edge has cleared the top: a full traverse. Mapping the
  // reveal to only the first ~22% of that means it settles quickly after
  // entering, then holds at rest for the remaining scroll (still visible).
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const revealAt: [number, number] = [0, 0.22];
  const opacity = useTransform(scrollYProgress, revealAt, [0, 1]);
  const y = useTransform(scrollYProgress, revealAt, [offset.y, 0]);
  const x = useTransform(scrollYProgress, revealAt, [offset.x, 0]);
  const scale = useTransform(scrollYProgress, revealAt, [0.94, 1]);

  return (
    <m.div
      ref={ref}
      style={reduced ? { ...style } : { ...style, opacity, y, x, scale }}
      className={className}
    >
      <Link
        href={study.href ?? "/work"}
        aria-label={`${study.title}. ${study.tag}.`}
        className="block focus-visible:outline-offset-8"
      >
        <PhotoPrint
          image={study.image ?? { src: "", alt: study.title }}
          caption={study.title}
          index={String(index + 1).padStart(2, "0")}
          rec={rec}
          camera={camera}
          tilt={tilt}
          ratio="aspect-[4/3]"
          sizes="(min-width: 1024px) 30vw, (min-width: 640px) 44vw, 82vw"
        />
      </Link>
      {/* The tag and one-line brief stay in the DOM for crawlers and screen
          readers, even though the wall itself is title-only by design. */}
      <p className="sr-only">
        {index + 1} of {total}. {study.tag}. {study.body}
      </p>
    </m.div>
  );
}
