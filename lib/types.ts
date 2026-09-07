export type Stat = {
  /** Rendered in DM Mono. Numbers and short tokens only (e.g. "700%+", "€8.13"). */
  value: string;
  /** Plain-language label rendered in the body face. */
  label: string;
};

export type NavItem = {
  label: string;
  href: string;
  /** Opens in a new tab with safe rel attributes. */
  external?: boolean;
};

export type CaseStudy = {
  title: string;
  tag: string;
  /** One honest sentence about what the work was. */
  body: string;
  /** Optional destination. Routes under /work are built separately. */
  href?: string;
  /** Inline stats shown on the card (used by the Athlone's Finest block). */
  stats?: Stat[];
  /** Card header image, pulled from the case study's media. */
  image?: CaseImage;
};

export type WhatsNextLink = {
  title: string;
  description: string;
  href: string;
};

export type AboutPanel = {
  label: string;
  body: string;
};

export type HowIWorkPoint = {
  heading: string;
  body: string;
};

export type ExperienceEntry = {
  role: string;
  company: string;
  /** e.g. "September 2025 to June 2026". Rendered in DM Mono. */
  period: string;
  summary: string;
  achievements: string[];
};

export type CaseImage = {
  /** Public path (e.g. "/work/ewma/stand.jpg"). Empty string renders a labelled placeholder until the photo is supplied. */
  src: string;
  alt: string;
  caption?: string;
  /** Tailwind aspect utility for the figure frame, e.g. "aspect-[3/4]". Defaults to 16/10. */
  ratio?: string;
  /** Crop focal point. Screenshots read best from the top; photos from the center (default). */
  position?: "top" | "center";
  /**
   * How the image fills its frame. `cover` (default) crops to fill. `contain`
   * fits the whole asset inside the frame - used where cropping would cut copy
   * off a finished design.
   */
  fit?: "cover" | "contain";
};

export type CaseVideo = {
  /** Public path to an mp4. Loaded lazily (preload="none") - nothing downloads until play. */
  src: string;
  /** Optional poster image shown before playback. */
  poster?: string;
  /** Accessible label describing the clip. */
  label: string;
  caption?: string;
  /** Tailwind aspect utility matching the encoded frame, e.g. "aspect-[12/5]". Defaults to 16:9. */
  ratio?: string;
  /** Vertical video: constrains width and centers so it doesn't dominate the column. */
  portrait?: boolean;
};

export type CaseSection = {
  /** Mono kicker, e.g. "01 · The context". */
  kicker: string;
  heading: string;
  body: string[];
  /** Optional oversized stat pulled out between paragraphs. */
  pullStat?: Stat;
  /** Small reference table (e.g. a publishing cadence), rendered under the body copy. */
  table?: {
    caption: string;
    columns: string[];
    /** Each row must have the same length as `columns`. */
    rows: string[][];
  };
  /** Interactive old/new comparison slider, rendered above other media. */
  beforeAfter?: { before: CaseImage; after: CaseImage; caption?: string };
  videos?: CaseVideo[];
  /** Force all videos to display full-width instead of the default 2-column grid. */
  fullWidthVideos?: boolean;
  images?: CaseImage[];
  /** External citation links (e.g. press coverage), rendered under the body copy. */
  links?: { label: string; href: string }[];
};

export type AtAGlance = {
  project: string;
  role: string;
  outputs: string[];
  primaryResult: string;
};

export type CaseStudyDetail = {
  slug: string;
  /** Mono index shown in the hero, e.g. "01". */
  index: string;
  tag: string;
  title: string;
  intro: string;
  meta: {
    role: string;
    timeline: string;
    scope: string[];
  };
  atAGlance?: AtAGlance;
  whatILearned?: string[];
  /** Video takes precedence over the image when both are set. */
  heroVideo?: CaseVideo;
  heroImage?: CaseImage;
  heroStats: Stat[];
  sections: CaseSection[];
  results: {
    heading: string;
    summary: string;
    stats: Stat[];
    /** Analytics screenshots or summary graphics shown under the stat grid as proof. */
    receipts?: CaseImage[];
  };
  /** Slug of the next case study, for the end-of-page handoff. */
  nextSlug: string;
};

export type Discipline = {
  /** The niche as a hiring reader would name it, e.g. "Product marketing". */
  label: string;
  /** One line of evidence, not a description of the discipline. */
  body: string;
  /** Case study this brief's evidence is drawn from. */
  href: string;
};

export type ToolGroup = {
  heading: string;
  tools: string[];
};

export type CraftItem = {
  image: CaseImage;
  /** What it was for and what it was made in. */
  note: string;
};

export type ProjectCategory = "Apps" | "Web design" | "Experiments";

export type Project = {
  title: string;
  category: ProjectCategory;
  /** Year or range, rendered in DM Mono. */
  year: string;
  description: string;
  stack: string[];
  links: { label: string; href: string }[];
  image: CaseImage;
};

export type EducationEntry = {
  credential: string;
  institution: string;
  /** e.g. "2025 to 2026". Rendered in DM Mono. */
  period: string;
  /** e.g. "Grade: 2.1". Rendered in DM Mono. Optional: the About page keeps education compact. */
  grade?: string;
  modules?: string;
  note?: string;
};
