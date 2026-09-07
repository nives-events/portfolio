"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { CSSProperties, PointerEvent } from "react";
import { PhotoPrint } from "@/components/ui/PhotoPrint";
import { homepage } from "@/lib/content";

const rise = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

let hasPlayedSound = false;

function useTypewriter(text: string, speed = 65) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        if (!hasPlayedSound && audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.volume = 0.3;
          audioRef.current.play().catch(() => {});
        }
        i++;
      } else {
        clearInterval(interval);
        setDone(true);
        hasPlayedSound = true;
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done, audioRef };
}

export function HomeHero() {
  const { headline, supporting, marquee, cta, headshot } = homepage.hero;
  const flashRef = useRef<HTMLDivElement>(null);
  const { displayed, done, audioRef } = useTypewriter(headline, 60);

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
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={audioRef} src="/typewriter-key.wav" preload="auto" />

      <div aria-hidden="true" className="hero-stage" />
      <div aria-hidden="true" className="hero-spot-fixed" />
      <div ref={flashRef} aria-hidden="true" className="hero-flashlight" data-active="false" />

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
        aria-label={headline}
      >
        {displayed}
        {!done && (
          <span className="inline-block w-[3px] translate-y-[2px] animate-pulse bg-white" style={{ height: "0.85em" }} />
        )}
      </h1>

      <p
        className={`hero-rise relative z-10 mt-4 max-w-xl text-center text-lg leading-relaxed text-white/85 transition-opacity duration-500 sm:text-xl ${done ? "opacity-100" : "opacity-0"}`}
        style={rise(220)}
      >
        {supporting}
      </p>

      <div className={`hero-rise relative z-10 mt-10 w-[240px] transition-opacity duration-500 sm:w-[280px] ${done ? "opacity-100" : "opacity-0"}`} style={rise(320)}>
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

      <div className={`hero-rise relative z-10 mt-10 transition-opacity duration-500 ${done ? "opacity-100" : "opacity-0"}`} style={rise(420)}>
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

      <div aria-hidden="true" className="curtain">
        <span className="curtain__valance" />
        <span className="curtain__panel curtain__panel--left" />
        <span className="curtain__panel curtain__panel--right" />
      </div>
    </section>
  );
}
