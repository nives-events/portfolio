"use client";

import { m } from "framer-motion";
import type { ReactNode } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { homepage } from "@/lib/content";

/**
 * Key achievements as a whiteboard: each result sits inside a hand-drawn shape
 * with a highlighter label, and they drop into a bordered board one after
 * another (the "fall into place" idea from bastienmoiroux.fr). The board is a
 * physical white object in both themes, so the black ink and highlighter
 * colours read the same on light and dark. Colour lives only here, on the
 * marker tags: the rest of the site stays monochrome.
 */

type ShapeKind = "hexagon" | "cloud" | "circle" | "triangle";

// Shapes are drawn in a 220x220 box. `box` is the inset rectangle (in %) where
// the value sits, tuned to each shape's usable interior so the number always
// fits: a triangle's room is low and central, a hexagon's is wide, and so on.
const SHAPES: Record<ShapeKind, { node: ReactNode; box: string }> = {
  circle: {
    node: <circle cx="110" cy="110" r="100" />,
    box: "inset-[22%]",
  },
  hexagon: {
    node: <polygon points="110,8 200,60 200,160 110,212 20,160 20,60" />,
    box: "inset-x-[24%] inset-y-[30%]",
  },
  cloud: {
    node: (
      <path d="M70 168c-30 0-50-20-46-46 3-19 19-29 34-28-1-28 20-46 46-46 24 0 41 15 46 37 24-4 46 12 46 38 0 27-22 45-52 45Z" />
    ),
    box: "inset-x-[26%] inset-y-[34%]",
  },
  triangle: {
    node: <polygon points="110,14 206,196 14,196" />,
    // Room is the lower-middle band of a triangle.
    box: "inset-x-[30%] bottom-[10%] top-[48%]",
  },
};

// One card per stat: shape, resting tilt, highlighter colour, drop distance.
// Short numbers go to the tighter shapes (triangle), wide ones to the roomy
// shapes (hexagon, cloud) so nothing has to shrink too far. Six entries for
// the six key achievements (1,900% and the 3rd-ranked site joined the board
// in the September 2026 revision).
const CARDS = [
  { shape: "hexagon" as ShapeKind, tilt: -3, marker: "#b6f24d", drop: -120 },
  { shape: "cloud" as ShapeKind, tilt: 2.5, marker: "#ff7a4d", drop: -150 },
  { shape: "circle" as ShapeKind, tilt: -2, marker: "#d59bf6", drop: -110 },
  { shape: "triangle" as ShapeKind, tilt: 3, marker: "#7db3f6", drop: -140 },
  { shape: "cloud" as ShapeKind, tilt: -2.5, marker: "#ffd84d", drop: -130 },
  { shape: "hexagon" as ShapeKind, tilt: 2, marker: "#6de5c3", drop: -145 },
];

export function KeyStats() {
  const { kicker, heading, ovation, stats } = homepage.keyStats;

  return (
    <section aria-labelledby="stats-heading" className="bg-surface">
      <div className="container-page py-24">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <Reveal>
            <p className="kicker">{kicker}</p>
            <h2
              id="stats-heading"
              className="mt-5 font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
            >
              {heading}
            </h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="max-w-[22ch] font-mono text-[11px] uppercase leading-relaxed tracking-[0.2em] text-primary/70">
              {ovation}
            </p>
          </Reveal>
        </div>

        {/* The board. A physical white whiteboard the shapes drop onto. */}
        <Reveal delay={80} className="mt-12">
          <div className="rounded-[28px] border-2 border-black bg-[#fbfbf9] px-6 py-14 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.6)] sm:px-10">
            <dl className="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
              {stats.map((stat, i) => {
                const c = CARDS[i] ?? CARDS[0]!;
                const shape = SHAPES[c.shape];
                // Fit the value to its shape: words and longer numbers step down.
                const isWord = !/\d/.test(stat.value);
                const valueSize = isWord
                  ? "text-[1.6rem]"
                  : stat.value.length >= 4
                    ? "text-4xl"
                    : "text-5xl";
                return (
                  <m.div
                    key={stat.label}
                    initial={{ opacity: 0, y: c.drop, rotate: c.tilt * 4 }}
                    whileInView={{ opacity: 1, y: 0, rotate: c.tilt }}
                    whileHover={{ rotate: 0, y: -6 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{ type: "spring", stiffness: 200, damping: 15, delay: i * 0.12 }}
                    className="flex flex-col items-center text-center text-black"
                  >
                    {/* Shape with the value fitted to its interior. */}
                    <div className="relative h-44 w-44">
                      <svg
                        viewBox="0 0 220 220"
                        className="absolute inset-0 h-full w-full"
                        fill="none"
                        stroke="#0a0a0a"
                        strokeWidth="3"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        {shape.node}
                      </svg>
                      <span
                        className={`absolute ${shape.box} flex items-center justify-center text-center font-serif font-bold leading-none tracking-tight ${valueSize}`}
                      >
                        {stat.value}
                      </span>
                    </div>

                    {/* Highlighter label tag. */}
                    <span
                      className="-mt-3 inline-block -rotate-2 px-4 py-1.5 text-sm font-bold uppercase tracking-wide"
                      style={{ backgroundColor: c.marker }}
                    >
                      <dt>{stat.label}</dt>
                    </span>

                    <dd className="mt-4 max-w-[26ch] text-sm leading-snug text-black/70">
                      {stat.note}
                    </dd>
                  </m.div>
                );
              })}
            </dl>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
