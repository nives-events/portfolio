"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";

type RevealTag = "div" | "section" | "article" | "ul" | "li";

type RevealProps = {
  children: ReactNode;
  /** Stagger offset within a section group, in ms. */
  delay?: number;
  className?: string;
  /** Semantic element to render. Defaults to a div. */
  as?: RevealTag;
};

/**
 * Scroll-triggered reveal. Fires once when 20% of the element is in view.
 * Children are passed through untouched, so server components stay server
 * components — only this thin wrapper ships to the client.
 * Reduced motion is handled globally by MotionConfig.
 */
export function Reveal({ children, delay = 0, className, as = "div" }: RevealProps) {
  const MotionTag = m[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.5,
        ease: [0.23, 1, 0.32, 1],
        delay: delay / 1000,
      }}
    >
      {children}
    </MotionTag>
  );
}
