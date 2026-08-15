"use client";

import Image from "next/image";
import { useId, useState } from "react";
import type { CaseImage } from "@/lib/types";

type BeforeAfterProps = {
  before: CaseImage;
  after: CaseImage;
  caption?: string;
};

/**
 * Interactive old/new comparison. The handle is a real range input, so it
 * works with keyboard, touch, and screen readers out of the box; the visual
 * split is just a clip-path driven by its value.
 */
export function BeforeAfter({ before, after, caption }: BeforeAfterProps) {
  const [position, setPosition] = useState(50);
  const labelId = useId();

  return (
    <figure className="w-full">
      {/* Both source screenshots are 1890x784, so the frame matches them exactly. */}
      <div className="relative aspect-[12/5] w-full overflow-hidden rounded-[12px] border border-border bg-surface">
        {/* AFTER — full layer underneath */}
        <Image
          src={after.src}
          alt={after.alt}
          fill
          sizes="(min-width: 1024px) 900px, 100vw"
          className="object-cover object-top"
        />

        {/* BEFORE — clipped to the left of the handle */}
        <div
          aria-hidden="true"
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={before.src}
            alt=""
            fill
            sizes="(min-width: 1024px) 900px, 100vw"
            className="object-cover object-top"
          />
        </div>

        {/* Divider + handle */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-y-0 w-[2px] bg-accent"
          style={{ left: `${position}%` }}
        >
          <span className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent bg-bg/90 font-mono text-[10px] text-accent">
            ↔
          </span>
        </div>

        {/* Corner tags */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-[50px] bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-primary/85 backdrop-blur-sm">
          Before
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-[50px] bg-bg/80 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-accent backdrop-blur-sm">
          After
        </span>

        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(event) => setPosition(Number(event.target.value))}
          aria-labelledby={labelId}
          className="absolute inset-0 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0"
        />
      </div>

      <figcaption id={labelId} className="mt-3 text-xs leading-relaxed text-muted">
        {caption ?? "Drag to compare the old homepage with the rebuild."}
      </figcaption>
    </figure>
  );
}
