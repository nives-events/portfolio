import type { Project, ProjectCategory } from "./types";

/**
 * Personal projects for the /lab page - work that is NOT tied to FeelTect or
 * Athlone's Finest case studies (those live under /work).
 *
 * Images are optional: CaseFigure renders a labelled frame when `src` is
 * empty, so a card without a screenshot still reads as finished. Drop real
 * screenshots into /public/lab/ when you have them.
 */
export const projectCategories: ProjectCategory[] = ["Web design", "Experiments"];

export const projects: Project[] = [
  {
    title: "athlonesfinest.com",
    category: "Web design",
    year: "2025",
    description:
      "The Athlone's Finest site: fixtures, tournament sign-ups and the sponsorship pitch in one place. I built it in Claude Code and implemented Google Analytics 4 and Google Tag Manager on it, so paid campaign traffic and sign-ups are attributable instead of guessed at. It is the reason I can quote a cost per qualified lead at all.",
    stack: ["Claude Code", "GA4", "Google Tag Manager"],
    links: [
      { label: "Visit the site", href: "https://athlonesfinest.com" },
      { label: "Read the case study", href: "/work/athlones-finest" },
    ],
    image: { src: "", alt: "Screenshot: athlonesfinest.com homepage" },
  },
  {
    title: "This portfolio",
    category: "Web design",
    year: "2026",
    description:
      "The site you are reading. I designed the system first (dark navy, three typefaces, one accent) and built it so every page pulls copy from a single content file, which means a rewrite is a text edit rather than a redesign. Built with Claude Code as the pair programmer.",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "Framer Motion"],
    links: [{ label: "You are looking at it", href: "/" }],
    image: { src: "", alt: "Screenshot: portfolio homepage hero" },
  },
  {
    title: "AI video pipeline for paid social",
    category: "Experiments",
    year: "2025",
    description:
      "A production test: how much of a paid social creative set can be generated rather than filmed, and does the audience care. Google Veo for the absurd concepts, Higgsfield for motion, CapCut and DaVinci Resolve for the cut. The clips ran live in the Meta campaign and the honest answer came back in the data: AI got attention, found match footage converted better, so the budget moved.",
    stack: ["Google Veo", "Higgsfield", "CapCut", "DaVinci Resolve"],
    links: [{ label: "See the clips in the case study", href: "/work/athlones-finest" }],
    image: { src: "", alt: "Still: AI-generated clip from the Meta campaign" },
  },
];
