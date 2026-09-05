"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  m,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoPrint } from "@/components/ui/PhotoPrint";
import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/lib/types";

const CARD_W = 380;
const GAP = 48;
const MARGIN = 48;
const Y_OFFSETS = [80, 160, 50, 140, 90, 170, 60, 130, 80, 150];
const TILTS = [-2.5, 1.8, 3, -1.5, 2.2, -2.8, 1.5, -2, 2.8, -1.8];

export function GalleryWall({ cards }: { cards: CaseStudy[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const stripWidth =
    MARGIN + cards.length * (CARD_W + GAP) + CARD_W + MARGIN;
  const visibleWidth = MARGIN + 3 * (CARD_W + GAP) - GAP;
  const maxTranslate = stripWidth - visibleWidth;
  const sectionVh = 120 + (cards.length - 3) * 45;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scrollX = useTransform(
    scrollYProgress,
    [0.02, 0.85],
    [0, -maxTranslate],
  );

  const pinY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${sectionVh - 100}%`],
  );

  const ctaOpacity = useTransform(scrollYProgress, [0.8, 0.9], [0, 1]);

  return (
    <>
      {/* Desktop: scroll-pinned horizontal gallery */}
      <div
        ref={sectionRef}
        className="relative hidden lg:block"
        style={{ height: reduced ? "auto" : `${sectionVh}vh` }}
      >
        {reduced ? (
          <div className="mx-auto grid max-w-page grid-cols-3 gap-8 px-8">
            {cards.map((study, i) => (
              <Link
                key={study.title}
                href={study.href ?? "/work"}
                className="block"
              >
                <PhotoPrint
                  image={study.image ?? { src: "", alt: study.title }}
                  caption={study.title}
                  tilt={TILTS[i % TILTS.length]!}
                  tape
                  ratio="aspect-[4/3]"
                  sizes="30vw"
                />
              </Link>
            ))}
          </div>
        ) : (
          <m.div
            className="absolute inset-x-0 top-0 overflow-hidden"
            style={{ y: pinY, height: "100vh" }}
          >
            <div
              className="relative h-full"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 80px, black calc(100% - 80px), transparent)",
              }}
            >
              <m.div
                className="relative h-full will-change-transform"
                style={{ x: scrollX }}
              >
                {cards.map((study, i) => (
                  <div
                    key={study.title}
                    className="absolute"
                    style={{
                      left: MARGIN + i * (CARD_W + GAP),
                      top: Y_OFFSETS[i % Y_OFFSETS.length]!,
                      width: CARD_W,
                    }}
                  >
                    <Link
                      href={study.href ?? "/work"}
                      aria-label={`${study.title}. ${study.tag}.`}
                      className="block focus-visible:outline-offset-8"
                    >
                      <PhotoPrint
                        image={study.image ?? { src: "", alt: study.title }}
                        caption={study.title}
                        tilt={TILTS[i % TILTS.length]!}
                        tape
                        ratio="aspect-[4/3]"
                        sizes="(min-width: 1024px) 30vw, 70vw"
                        rec={i % 3 === 0}
                        camera={i % 3 === 1}
                      />
                    </Link>
                  </div>
                ))}

                <m.div
                  className="absolute flex items-center justify-center"
                  style={{
                    left: MARGIN + cards.length * (CARD_W + GAP),
                    top: "50%",
                    translateY: "-50%",
                    width: CARD_W,
                    opacity: ctaOpacity,
                  }}
                >
                  <div className="rounded-2xl bg-surface/80 px-12 py-10 text-center backdrop-blur-sm">
                    <p className="mb-6 font-display text-3xl font-bold uppercase tracking-tight text-primary">
                      Seen enough?
                    </p>
                    <Button href="mailto:niallawo@gmail.com" variant="primary">
                      Contact me
                    </Button>
                  </div>
                </m.div>
              </m.div>
            </div>
          </m.div>
        )}
      </div>

      {/* Mobile + tablet: alternating vertical stack */}
      <div className="flex flex-col gap-8 px-4 sm:px-6 lg:hidden">
        {cards.map((study, i) => (
          <Reveal key={study.title} delay={Math.min(i, 2) * 100}>
            <Link
              href={study.href ?? "/work"}
              className={`block ${
                i % 2 === 0
                  ? "mr-auto w-[85%] sm:w-[60%]"
                  : "ml-auto w-[85%] sm:w-[60%]"
              }`}
            >
              <PhotoPrint
                image={study.image ?? { src: "", alt: study.title }}
                caption={study.title}
                tilt={TILTS[i % TILTS.length]!}
                tape
                ratio="aspect-[4/3]"
                sizes="85vw"
              />
            </Link>
          </Reveal>
        ))}
        <div className="flex justify-center pt-4">
          <Button href="/work" variant="primary">
            See All Work
          </Button>
        </div>
      </div>
    </>
  );
}
