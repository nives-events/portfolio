import { WallPhoto, type WallDirection } from "@/components/ui/WallPhoto";
import type { CaseStudy } from "@/lib/types";

type WallItem = {
  /** Fixed pixel offset from the top of the wall. Vertical space isn't
      width-constrained, so px is safe here (unlike left/width below). */
  top: number;
  /** Percentages of the wall's own width, so the composition always fits
      inside it at any viewport - the one hard rule is no horizontal overflow. */
  left: string;
  width: string;
  tilt: number;
  direction: WallDirection;
  rec?: boolean;
  camera?: boolean;
};

/**
 * One continuous left-to-right sequence (photo 1 sits furthest left, photo 5
 * furthest right), each at a different height so none sits directly under
 * another. Tuned for the widest lg+ viewport; because widths are percentages,
 * everything shrinks together at narrower widths, so this same layout stays
 * safe down to the 1024px breakpoint (see WALL_HEIGHT below).
 */
const DESKTOP_LAYOUT: WallItem[] = [
  { top: 0, left: "0%", width: "27%", tilt: -3, direction: "up", rec: true },
  { top: 220, left: "22%", width: "25%", tilt: 2.5, direction: "down", camera: true },
  { top: 40, left: "44%", width: "28%", tilt: -2, direction: "left", rec: true },
  { top: 280, left: "65%", width: "25%", tilt: 3, direction: "right", camera: true },
  { top: 120, left: "78%", width: "20%", tilt: -2.5, direction: "up" },
];

// Generous fixed height: comfortably covers the layout above at its widest
// (largest rendered photos) down to the lg breakpoint (photos only shrink
// from there, never grow), plus room for a caption that wraps to two lines.
const WALL_HEIGHT = 680;

// Below lg: a normal-flow vertical stack. Horizontal alternation stands in for
// the wall's left-to-right spread (a full absolute wall risks overflow or
// unreadable crowding at these widths); each print still reveals on its own
// scroll-scrubbed progress, just without the desktop's absolute placement.
const COMPACT_LAYOUT: { align: "start" | "end"; tilt: number; direction: WallDirection }[] = [
  { align: "start", tilt: -1.5, direction: "up" },
  { align: "end", tilt: 1.2, direction: "up" },
  { align: "start", tilt: -1, direction: "up" },
  { align: "end", tilt: 1.5, direction: "up" },
  { align: "start", tilt: -1.2, direction: "up" },
];

/**
 * The Work section's photographic wall. Desktop renders the full staggered
 * composition; below `lg` a simpler alternating stack takes over. Both use the
 * same scroll-scrubbed WallPhoto, so the core behaviour (continuous, fully
 * reversible reveal tied to scroll position) is identical everywhere.
 */
export function WorkWall({ cards }: { cards: CaseStudy[] }) {
  return (
    <>
      <div className="relative hidden w-full lg:block" style={{ height: WALL_HEIGHT }}>
        {cards.map((study, i) => {
          const item = DESKTOP_LAYOUT[i] ?? DESKTOP_LAYOUT[0]!;
          return (
            <WallPhoto
              key={study.title}
              study={study}
              index={i}
              total={cards.length}
              tilt={item.tilt}
              direction={item.direction}
              rec={item.rec}
              camera={item.camera}
              className="absolute"
              style={{ top: item.top, left: item.left, width: item.width }}
            />
          );
        })}
      </div>

      <div className="flex flex-col gap-16 lg:hidden">
        {cards.map((study, i) => {
          const item = COMPACT_LAYOUT[i] ?? COMPACT_LAYOUT[0]!;
          return (
            <WallPhoto
              key={study.title}
              study={study}
              index={i}
              total={cards.length}
              tilt={item.tilt}
              direction={item.direction}
              rec={i % 2 === 0}
              camera={i % 2 === 1}
              className={`w-[84%] sm:w-[62%] ${item.align === "end" ? "ml-auto" : "mr-auto"}`}
            />
          );
        })}
      </div>
    </>
  );
}
