"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties, ReactNode } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  /** Stagger offset in ms, applied as a transition-delay. */
  delay?: number;
  /** Direction the element travels in from. Defaults to "up". */
  from?: "left" | "right" | "up";
  className?: string;
};

/**
 * Scroll reveal built directly on IntersectionObserver, independent of the
 * framer viewport feature. Used for the work wall, where each print fades and
 * rises into place as it enters view and then stays. A plain observer is more
 * predictable here than whileInView, and the CSS transition is disabled under
 * prefers-reduced-motion (see .reveal in globals.css).
 */
export function ScrollReveal({ children, delay = 0, from = "up", className = "" }: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    // If IO is unavailable, just show it.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setShown(true);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      data-shown={shown ? "true" : "false"}
      data-from={from}
      className={`reveal ${className}`}
      style={{ transitionDelay: `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
