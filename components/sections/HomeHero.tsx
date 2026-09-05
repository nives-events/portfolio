"use client";

import { useRef } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { SmartImage } from "@/components/ui/SmartImage";
import { homepage, site } from "@/lib/content";

/**
 * The opener. Red curtains part on load to reveal a brick-wall comedy stage.
 * A fixed spotlight stays on the performer; a flashlight follows the cursor and
 * lifts the brick and the words it passes over, with each label lighting up as
 * the light reaches it. The stage is dark in both themes, so its text is light.
 */

// Layout aligned to homepage.hero.labels order:
// [Web Design, Growth, Events, Content, Brand, Strategy].
const LAYOUT = [
  { top: 15, left: 19, rot: -18, dur: "6s", delay: "0s" },
  { top: 33, left: 86, rot: -52, dur: "7s", delay: "-2.4s" },
  { top: 78, left: 22, rot: -15, dur: "6.5s", delay: "-1.2s" },
  { top: 73, left: 80, rot: -22, dur: "5.5s", delay: "-3s" },
  { top: 16, left: 80, rot: 16, dur: "6.8s", delay: "-0.8s" },
  { top: 56, left: 12, rot: 11, dur: "5.8s", delay: "-1.8s" },
] as const;

const CENTER = { x: 50, y: 52 };
const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

function Arrow({ left, top, angle }: { left: number; top: number; angle: number }) {
  return (
    <span
      className="hero-arrow hidden sm:block"
      style={{ left: `${left}%`, top: `${top}%`, transform: `translate(-50%, -50%) rotate(${angle}deg)` }}
    >
      <svg width="54" height="26" viewBox="0 0 54 26" fill="none" aria-hidden="true">
        <path d="M2 15c10-9 24-11 40-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <path
          d="M33 3c4 2 7 3 10 4-2 3-3 6-4 10"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export function HomeHero() {
  const { labels, marquee, headshot } = homepage.hero;
  const flashRef = useRef<HTMLDivElement>(null);

  // Move the flashlight to the pointer. Written straight to the DOM so it
  // tracks smoothly without re-rendering the whole hero.
  const onMove = (e: PointerEvent<HTMLElement>) => {
    const flash = flashRef.current;
    if (!flash || e.pointerType !== "mouse") return;
    const rect = e.currentTarget.getBoundingClientRect();
    flash.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    flash.style.setProperty("--my", `${e.clientY - rect.top}px`);
    flash.dataset.active = "true";
  };

  const onLeave = () => {
    if (flashRef.current) flashRef.current.dataset.active = "false";
  };

  return (
    <section
      aria-labelledby="hero-heading"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden pb-8 pt-20 sm:pb-14 sm:pt-24"
    >
      {/* The dark brick stage and its lights. */}
      <div aria-hidden="true" className="hero-stage" />
      <div aria-hidden="true" className="hero-spot-fixed" />
      <div ref={flashRef} aria-hidden="true" className="hero-flashlight" data-active="false" />

      <h1 id="hero-heading" className="sr-only">
        {site.name}. Marketing across web design, growth, events, content, brand and strategy.
      </h1>

      {/* Marquee chip: tonight's billing. Light, since the stage is dark. */}
      <p
        className="hero-rise relative z-10 mb-4 rounded-full border border-white/25 bg-black/40 px-5 py-2 font-mono text-xs uppercase tracking-[0.3em] text-white/85 backdrop-blur-sm sm:mb-0 sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.24em]"
        style={rise(0)}
      >
        <span aria-hidden="true">* </span>
        {marquee}
        <span aria-hidden="true"> *</span>
      </p>

      {/* Labels + arrows + performer. */}
      <div
        className="hero-rise relative z-10 mx-auto flex w-full max-w-[900px] items-center justify-center px-4"
        style={rise(150)}
      >
        <div className="relative aspect-[3/4] w-full sm:aspect-[16/10]">
          {labels.map((label, i) => {
            const pos = LAYOUT[i] ?? LAYOUT[0];
            const angle = (Math.atan2(CENTER.y - pos.top, CENTER.x - pos.left) * 180) / Math.PI;
            const ax = pos.left + (CENTER.x - pos.left) * 0.24;
            const ay = pos.top + (CENTER.y - pos.top) * 0.24;
            return (
              <span key={label}>
                <span className="hero-label" style={{ top: `${pos.top}%`, left: `${pos.left}%` }}>
                  <span
                    className="hero-label__float"
                    style={{ animationDuration: pos.dur, animationDelay: pos.delay }}
                  >
                    <span className="hero-label__rot" style={{ transform: `rotate(${pos.rot}deg)` }}>
                      <span aria-hidden="true" className="hero-label__glow" />
                      <span className="hero-label__text">{label}</span>
                    </span>
                  </span>
                </span>
                <Arrow left={ax} top={ay} angle={angle} />
              </span>
            );
          })}

          <div aria-hidden="true" className="stage-floor bottom-[-2%] h-[38px] w-[46%] opacity-80" />

          <div className="absolute inset-0 flex items-end justify-center">
            <div className="relative aspect-[300/389] h-[92%] max-h-[520px]">
              {headshot.src ? (
                <SmartImage
                  src={headshot.src}
                  alt={headshot.alt}
                  priority
                  sizes="(min-width: 640px) 340px, 55vw"
                  className="object-contain object-bottom"
                  transparent
                />
              ) : (
                <div className="flex h-full w-full items-end justify-center border border-dashed border-white/30">
                  <span className="mb-6 px-4 text-center font-mono text-xs uppercase tracking-widest text-white/60">
                    Headshot
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* The curtains, on top until they part. */}
      <div aria-hidden="true" className="curtain">
        <span className="curtain__valance" />
        <span className="curtain__panel curtain__panel--left" />
        <span className="curtain__panel curtain__panel--right" />
      </div>
    </section>
  );
}
