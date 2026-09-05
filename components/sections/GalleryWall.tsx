"use client";

import { useRef } from "react";
import Link from "next/link";
import {
  m,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoPrint } from "@/components/ui/PhotoPrint";
import { Button } from "@/components/ui/Button";
import type { CaseStudy } from "@/lib/types";

const CARD_WIDTH = 380;
const CARD_GAP = 48;
const Y_OFFSETS = [80, 160, 50, 140, 90, 170, 60, 130, 80, 150];
const TILTS = [-2.5, 1.8, 3, -1.5, 2.2, -2.8, 1.5, -2, 2.8, -1.8];

function DesktopCard({
  study,
  index,
  scrollX,
}: {
  study: CaseStudy;
  index: number;
  scrollX: MotionValue<number>;
}) {
  const yOffset = Y_OFFSETS[index % Y_OFFSETS.length]!;
  const tilt = TILTS[index % TILTS.length]!;
  const xBase = index * (CARD_WIDTH + CARD_GAP);

  const x = useTransform(scrollX, (val) => xBase + val);

  const opacity = useTransform(scrollX, (val) => {
    const cardX = xBase + val;
    if (cardX > 1300) return 0;
    if (cardX > 1000) return (1300 - cardX) / 300;
    if (cardX > -200) return 1;
    if (cardX > -450) return (cardX + 450) / 250;
    return 0;
  });

  return (
    <m.div
      style={{
        position: "absolute",
        top: yOffset,
        left: 0,
        x,
        width: CARD_WIDTH,
        opacity,
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
          tilt={tilt}
          tape
          ratio="aspect-[4/3]"
          sizes="(min-width: 1024px) 30vw, 70vw"
          index={String(index + 1).padStart(2, "0")}
          rec={index % 3 === 0}
          camera={index % 3 === 1}
        />
      </Link>
    </m.div>
  );
}

export function GalleryWall({ cards }: { cards: CaseStudy[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const totalWallWidth = cards.length * (CARD_WIDTH + CARD_GAP) - CARD_GAP;
  const initialVisibleWidth = 3 * (CARD_WIDTH + CARD_GAP) - CARD_GAP;
  const maxTranslate = totalWallWidth - initialVisibleWidth;
  const sectionVh = 120 + (cards.length - 3) * 45;

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const scrollX = useTransform(scrollYProgress, [0.02, 0.82], [0, -maxTranslate]);
  const maxPinPercent = ((sectionVh - 100) / sectionVh) * 100;
  const pinY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `${maxPinPercent}%`]
  );

  const seeAllX = useTransform(scrollX, (val) => {
    const endX = totalWallWidth + CARD_GAP;
    return endX + val;
  });

  const seeAllOpacity = useTransform(scrollYProgress, [0.78, 0.88], [0, 1]);

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
            className="absolute left-0 right-0 overflow-hidden"
            style={{ top: pinY, height: "100vh" }}
          >
            <div className="relative h-full px-12">
              {cards.map((study, i) => (
                <DesktopCard
                  key={study.title}
                  study={study}
                  index={i}
                  scrollX={scrollX}
                />
              ))}

              <m.div
                style={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  x: seeAllX,
                  opacity: seeAllOpacity,
                  translateY: "-50%",
                  width: CARD_WIDTH,
                }}
                className="flex items-center justify-center"
              >
                <div className="rounded-2xl bg-surface/80 px-12 py-10 text-center backdrop-blur-sm">
                  <p className="mb-6 font-display text-3xl font-bold uppercase tracking-tight text-primary">
                    Seen enough?
                  </p>
                  <Button href="/work" variant="primary">
                    See All Work
                  </Button>
                </div>
              </m.div>
            </div>
          </m.div>
        )}
      </div>

      {/* Mobile + tablet: alternating vertical stack */}
      <div className="flex flex-col gap-10 px-4 sm:px-6 lg:hidden">
        {cards.map((study, i) => (
          <Reveal
            key={study.title}
            delay={Math.min(i, 2) * 100}
          >
            <Link
              href={study.href ?? "/work"}
              className={`block ${
                i % 2 === 0
                  ? "mr-auto w-[88%] sm:w-[65%]"
                  : "ml-auto w-[88%] sm:w-[65%]"
              }`}
            >
              <PhotoPrint
                image={study.image ?? { src: "", alt: study.title }}
                caption={study.title}
                tilt={TILTS[i % TILTS.length]!}
                tape
                ratio="aspect-[4/3]"
                sizes="85vw"
                index={String(i + 1).padStart(2, "0")}
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
