"use client";

import { useState } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import type { CaseVideo } from "@/lib/types";

/**
 * Click-to-play video facade.
 *
 * Before activation the figure is just an optimised poster image and a button,
 * so a page carrying five clips costs five images rather than five media
 * elements. The poster goes through next/image (WebP/AVIF, sized to the
 * breakpoint) instead of the native `poster` attribute, which would ship the
 * full-size original on load even under preload="none".
 *
 * On activation the real <video> mounts with autoPlay, so the click that loads
 * the clip is the click that starts it. The frame ratio is identical in both
 * states, so swapping one for the other never shifts the page.
 */
export function CaseVideoFigure({ video }: { video: CaseVideo }) {
  const [active, setActive] = useState(false);
  const ratio = video.ratio ?? "aspect-video";
  const frame = `relative ${ratio} w-full overflow-hidden rounded-none border border-border bg-black`;

  return (
    <figure className={`w-full ${video.portrait ? "mx-auto max-w-[420px]" : ""}`}>
      {active ? (
        <video
          controls
          autoPlay
          playsInline
          preload="auto"
          poster={video.poster}
          aria-label={video.label}
          className={`${frame} object-contain`}
        >
          <source src={video.src} type="video/mp4" />
          Your browser does not support embedded video.{" "}
          <a href={video.src}>Download the clip</a>.
        </video>
      ) : (
        <button
          type="button"
          onClick={() => setActive(true)}
          aria-label={`Play video: ${video.label}`}
          className={`${frame} group block cursor-pointer`}
        >
          {video.poster ? (
            <SmartImage
              src={video.poster}
              alt=""
              sizes="(min-width: 1024px) 900px, 100vw"
              className="object-contain"
            />
          ) : null}

          {/* Scrim keeps the play control legible over a bright frame. */}
          <span
            aria-hidden="true"
            className="absolute inset-0 bg-black/20 transition-colors duration-200 group-hover:bg-black/10"
          />

          <span
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-bg/80 backdrop-blur-sm transition-transform duration-200 ease-out-strong group-hover:scale-110"
          >
            <svg viewBox="0 0 24 24" className="ml-1 h-6 w-6 fill-primary" focusable="false">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      )}

      {video.caption ? (
        <figcaption className="mt-3 text-xs leading-relaxed text-muted">{video.caption}</figcaption>
      ) : null}
    </figure>
  );
}
