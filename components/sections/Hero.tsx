import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { StatStrip } from "@/components/ui/StatStrip";
import { hero } from "@/lib/content";
import type { CSSProperties } from "react";

const delays = {
  eyebrow: 0,
  line1: 100,
  line2: 200,
  line3: 300,
  positioning: 500,
  supporting: 700,
  ctas: 900,
} as const;

const riseDelay = (ms: number) => ({ "--rise-delay": `${ms}ms` }) as CSSProperties;

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="container-page flex min-h-[88vh] flex-col items-center gap-12 pb-24 pt-32 lg:flex-row lg:gap-0"
    >
      {/* Left — text content */}
      <div className="flex w-full flex-1 flex-col justify-center lg:pr-16">
        <p
          className="hero-rise text-xs font-medium uppercase tracking-[0.12em] text-muted"
          style={riseDelay(delays.eyebrow)}
        >
          {hero.eyebrow}
        </p>

        <h1
          id="hero-heading"
          className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-[4.5rem]"
        >
          {/* Last line takes the accent. Rendered from the array so the copy
              length and the markup can never drift apart. */}
          {hero.headlineLines.map((line, index) => {
            const last = index === hero.headlineLines.length - 1;
            return (
              <span
                key={line}
                className={`hero-rise block ${last ? "mt-2 text-accent" : ""}`}
                style={riseDelay([delays.line1, delays.line2, delays.line3][index] ?? delays.line3)}
              >
                {line}
              </span>
            );
          })}
        </h1>

        <p
          className="hero-rise mt-8 max-w-2xl text-lg text-primary"
          style={riseDelay(delays.positioning)}
        >
          {hero.positioning}
        </p>

        <div
          className="hero-rise mt-6 max-w-prose space-y-4 text-base leading-relaxed text-muted"
          style={riseDelay(delays.supporting)}
        >
          {hero.supporting.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* Headline numbers above the fold — a growth reader should not have to
            open a case study to find the ROAS. */}
        <div
          className="hero-rise mt-8 border-y border-border py-6"
          style={riseDelay(delays.supporting + 100)}
        >
          <StatStrip stats={[...hero.stats]} label="Headline results" />
        </div>

        <div
          className="hero-rise mt-10 flex flex-wrap items-center gap-4"
          style={riseDelay(delays.ctas)}
        >
          <Button href={hero.primaryCta.href} variant="primary">
            {hero.primaryCta.label}
          </Button>
          <Button href={hero.secondaryCta.href} variant="ghost">
            {hero.secondaryCta.label}
          </Button>
        </div>
      </div>

      {/* Cut-out headshot. Stacks below the text on mobile/tablet, sits to the
          right on desktop. The PNG has a transparent background, so it stands
          on the page rather than sitting in a frame. Its 900×1170 source
          matches the box ratio exactly, so nothing crops. */}
      <div className="hero-rise relative order-first lg:order-last" style={riseDelay(600)}>
        {/* Accent glow, behind the figure */}
        <div
          aria-hidden="true"
          className="absolute bottom-8 left-1/2 h-[260px] w-[260px] -translate-x-1/2 rounded-full bg-accent opacity-[0.10] blur-3xl sm:h-[340px] sm:w-[340px] lg:h-[420px] lg:w-[420px]"
        />
        <div className="relative mx-auto h-[320px] w-[246px] sm:h-[420px] sm:w-[323px] lg:h-[520px] lg:w-[400px]">
          <Image
            src="/headshot.png"
            alt="Niall Awogboro, marketing across brand, growth, content and events, based in Dublin"
            fill
            priority
            sizes="(min-width: 1024px) 400px, (min-width: 640px) 323px, 246px"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
