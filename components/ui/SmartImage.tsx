"use client";

import Image from "next/image";
import { useState } from "react";

type SmartImageProps = {
  src: string;
  alt: string;
  sizes: string;
  priority?: boolean;
  className?: string;
  transparent?: boolean;
};

/**
 * A `fill` next/image with a wireframe placeholder shown until the photo has
 * actually decoded, rather than leaving a blank or half-painted frame while it
 * loads. Fill-only: every current call site sizes its image via an
 * aspect-ratio'd, positioned parent.
 */
export function SmartImage({ src, alt, sizes, priority = false, className = "", transparent = false }: SmartImageProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <span className="img-skeleton-wrap" data-loaded={loaded} style={transparent ? { background: "transparent" } : undefined}>
      <span aria-hidden="true" className="img-skeleton">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="4" width="20" height="16" rx="1.5" />
          <circle cx="8" cy="10" r="1.75" />
          <path d="M2 17l6-5 4 3.5L18 9l4 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={`img-skeleton-media ${className}`}
        onLoad={() => setLoaded(true)}
      />
    </span>
  );
}
