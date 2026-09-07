"use client";

import Link from "next/link";
import { useRef } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { PhotoPrint } from "@/components/ui/PhotoPrint";
import { homepage } from "@/lib/content";

/**
 * The opener. Red curtains part on load to reveal a brick-wall comedy stage.
 * A fixed spotlight holds the centre; a flashlight follows the cursor and
 * lifts the brick it passes over. The stage is dark in both themes, so its
 * text is light. The headshot hangs as a photo print in the same digicam
 * frame the work section uses, per the September 2026 revision.
 */

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export function HomeHero() {
  const { headline, supporting, marquee, cta, headshot } = homepage.hero;
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
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-4 pb-12 pt-24 sm:pb-16"
    >
      {/* The dark brick stage and its lights. */}
      <div aria-hidden="true" className="hero-stage" />
      <div aria-hidden="true" className="hero-spot-fixed" />
      <div ref={flashRef} aria-hidden="true" className="hero-flashlight" data-active="false" />

      {/* Marquee chip: tonight's billing. Light, since the stage is dark. */}
      <p
        className="hero-rise relative z-10 mb-6 rounded-full border border-white/25 bg-black/40 px-5 py-2 font-mono text-xs uppercase tracking-[0.3em] text-white/85 backdrop-blur-sm sm:px-4 sm:py-1.5 sm:text-[11px] sm:tracking-[0.24em]"
        style={rise(0)}
      >
        <span aria-hidden="true">* </span>
        {marquee}
        <span aria-hidden="true"> *</span>
      </p>

      <h1
        id="hero-heading"
        className="hero-rise relative z-10 max-w-3xl text-center font-display text-5xl font-bold leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-7xl"
        style={rise(120)}
      >
        {headline}
      </h1>

      <p
        className="hero-rise relative z-10 mt-4 max-w-xl text-center text-lg leading-relaxed text-white/85 sm:text-xl"
        style={rise(220)}
      >
        {supporting}
      </p>

      {/* The headshot as a photo print: same digicam frame as the work wall. */}
      <div className="hero-rise relative z-10 mt-10 w-[240px] sm:w-[280px]" style={rise(320)}>
        <PhotoPrint
          image={{ src: headshot.src, alt: headshot.alt }}
          caption="Niall Awogboro"
          index="01"
          rec
          camera
          tape
          tilt={-2.5}
          ratio="aspect-[3/4]"
          sizes="(min-width: 640px) 280px, 240px"
          priority
        />
        <div aria-hidden="true" className="stage-floor left-1/2 top-full h-[30px] w-[80%] -translate-x-1/2 opacity-70" />
      </div>

      <div className="hero-rise relative z-10 mt-10" style={rise(420)}>
        <Link
          href={cta.href}
          className="group relative inline-flex min-h-[44px] items-center justify-center overflow-hidden rounded-lg border border-white/70 px-8 py-3 text-sm font-medium uppercase tracking-widest text-white transition-transform duration-100 active:scale-[0.97]"
        >
          <span
            aria-hidden="true"
            className="absolute inset-0 origin-left scale-x-0 rounded-lg bg-white transition-transform duration-200 ease-out-strong group-hover:scale-x-100"
          />
          <span className="relative transition-colors duration-200 group-hover:text-black">
            {cta.label}
          </span>
        </Link>
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
