import { Reveal } from "@/components/motion/Reveal";
import { SmartImage } from "@/components/ui/SmartImage";
import { aboutPage } from "@/lib/content";

/**
 * "Meet Niall Awogboro": short positioning copy beside a circular headshot.
 * The hero establishes the positioning; the sections below tell the story.
 */
export function Hero() {
  const { kicker, heading, headshot, lede, paragraphs } = aboutPage.hero;

  return (
    <section aria-labelledby="about-heading" className="container-page pb-20 pt-32 md:pb-24 md:pt-40">
      <div className="grid items-center gap-12 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7">
          <p className="kicker">{kicker}</p>
          <h1
            id="about-heading"
            className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight text-primary sm:text-6xl lg:text-7xl"
          >
            {heading}
          </h1>
          <p className="mt-6 font-display text-2xl font-bold leading-snug text-primary sm:text-3xl">
            {lede}
          </p>
          <div className="mt-6 max-w-prose space-y-4 text-lg leading-relaxed text-primary/85">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={140} className="md:col-span-5">
          {/* Circular frame. The headshot is a transparent cutout, so it sits
              on the surface tone and rises from the bottom of the circle. */}
          <div className="relative mx-auto aspect-square w-full max-w-[360px] overflow-hidden rounded-full border-2 border-primary bg-surface shadow-[0_24px_60px_-28px_var(--shadow-card)]">
            <SmartImage
              src={headshot.src}
              alt={headshot.alt}
              sizes="(min-width: 768px) 360px, 70vw"
              priority
              className="object-contain object-bottom"
              transparent
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
