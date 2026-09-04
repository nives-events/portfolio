import Link from "next/link";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoPrint } from "@/components/ui/PhotoPrint";
import { homepage } from "@/lib/content";

export function HomeAbout() {
  const { kicker, heading, paragraphs, link, photo } = homepage.about;

  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-24">
      <div className="container-page grid items-center gap-12 py-24 md:grid-cols-12 md:gap-8">
        <Reveal className="md:col-span-7">
          <p className="kicker">{kicker}</p>
          <h2
            id="about-heading"
            className="mt-5 max-w-[24ch] font-display text-4xl font-bold leading-[1.02] tracking-tight text-primary sm:text-5xl lg:text-6xl"
          >
            {heading}
          </h2>
          <div className="mt-8 max-w-prose space-y-4 text-lg leading-relaxed text-primary/85">
            {paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <Link
            href={link.href}
            className="mt-8 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
          >
            {link.label}
            <span aria-hidden="true">→</span>
          </Link>
        </Reveal>

        {/* Backstage print, taped up beside the copy. */}
        <Reveal delay={140} className="md:col-span-5 md:pl-6">
          <PhotoPrint
            image={{ src: photo.src, alt: photo.alt }}
            caption={photo.caption}
            index="09"
            rec
            camera
            tape
            tilt={2.5}
            ratio="aspect-[4/3]"
            sizes="(min-width: 768px) 420px, 90vw"
            className="mx-auto max-w-[440px]"
          />
        </Reveal>
      </div>
    </section>
  );
}
