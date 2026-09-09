import type {
  CaseStudy,
  CraftItem,
  EducationEntry,
  ExperienceEntry,
  HowIWorkPoint,
  NavItem,
  Stat,
  ToolGroup,
} from "./types";

/**
 * Single source of truth for site copy.
 *
 * Figures, job titles and credentials are reconciled to the September 2026
 * revision document. If the facts change, change them here too:
 *   - FeelTect: marketing intern who joined an existing marketing function.
 *     Never "first marketing hire", never "built marketing from scratch",
 *     no qualified-lead or stakeholder-meeting counts, no direct sales-team
 *     collaboration. Stakeholders: founders, CEO, clinical, engineering.
 *   - FeelTect growth: 1,900% impressions, 40% followers, 200% engagement.
 *   - Athlone's Finest: 467% ROAS, EUR 8.13 CPL, 4.1 CLTV, 400+ players,
 *     50% repeat teams, 12 teams and 6 sponsors in 2026, Westmeath
 *     Independent coverage. athlonesfinest.com built with Claude Code and
 *     ranked the third six-a-side website in Ireland.
 *   - Certifications: Google Ads, Google Analytics, AI-Powered Performance Ads.
 */

export const site = {
  name: "Niall Awogboro",
  role: "Marketing",
  location: "Dublin",
  email: "niallawo@gmail.com",
  linkedin: "https://www.linkedin.com/in/niall-awogboro",
  linkedinLabel: "linkedin.com/in/niall-awogboro",
} as const;

export const nav: NavItem[] = [
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Lab", href: "/lab" },
];

export const feeltect = {
  eyebrow: "B2B MedTech · 9 months · Marketing Intern",
  heading: "My work at FeelTect",
  statsBefore: [
    { value: "1,900%", label: "Increase in impressions" },
    { value: "40%", label: "Follower growth" },
    { value: "200%", label: "Increase in digital engagement" },
    { value: "1,000+", label: "YouTube views from partners" },
  ] satisfies Stat[],
  cards: [
    {
      title: "Solo marketer at FeelTect",
      tag: "Marketing strategy / Content / Digital growth",
      href: "/work/feeltect-function",
      body: "FeelTect had marketing activity when I joined, but the pieces were not yet operating as one system. As the solo marketing lead I connected positioning, content, digital channels and measurement, working directly with the founders, CEO, clinical and engineering teams. Impressions grew 1,900%, engagement 200% and followers 40% across the placement.",
      image: {
        src: "/work/feeltect-function/production-tablet-demo.jpg",
        alt: "Filming a Tight Alright product demonstration for the educational video series",
      },
    },
    {
      title: "Rebuilding a MedTech website for its first commercial markets",
      tag: "Web / UX / CRO",
      href: "/work/feeltect-website",
      body: "As Tight Alright entered its first commercial markets, the website had to help clinicians, partners and investors understand a complex proposition and take the next step. I restructured the information architecture around audience needs, wrote the copy, built in the on-page SEO and shipped six pages in WordPress and Elementor Pro without an external developer.",
      image: {
        src: "/work/feeltect-website/hero-new.png",
        alt: "The rebuilt FeelTect homepage hero with the Tight Alright brand illustration",
        position: "top",
      },
    },
    {
      title: "FeelTect at EWMA",
      tag: "Event marketing / Brand activation / Content",
      href: "/work/ewma",
      body: "An international conference turned into a connected marketing campaign across three stages. Before: stand creative, bilingual English and German clinical materials and a social campaign. During: the International Bandaging Competition, an interactive way to experience the product. After: content and digital activity that extended the event well past the closing day.",
      image: {
        src: "/work/ewma/poster-back.png",
        alt: "Bandaging Competition poster designed for the EWMA conference stand",
        position: "top",
      },
    },
  ] satisfies CaseStudy[],
  statsAfter: [
    { value: "15", label: "Episodes filmed and edited" },
    { value: "6", label: "Pages built and shipped" },
    { value: "88%", label: "Increase in social channel visitors" },
    { value: "2", label: "Languages of clinical materials" },
  ] satisfies Stat[],
} as const;

export const athlonesFinest = {
  eyebrow: "Consumer sports brand · Founded 2023 · Still running",
  heading: "Athlone's Finest. Built it. Still running it.",
  cards: [
    {
      title: "Athlone's Finest: a consumer sports brand from a blank page",
      tag: "Brand / Growth / Events / Community",
      href: "/work/athlones-finest",
      body: "I founded Athlone's Finest in 2023 because the summer football tournament I had waited years for never came back, so I built it myself. Four years of consumer research, brand building, organic content, paid acquisition, events and partnerships later: 400+ players, 12 teams, a record six sponsors, 467% ROAS on paid acquisition and coverage in the Westmeath Independent.",
      image: {
        src: "/work/athlones-finest/hero-match.jpg",
        alt: "Athlone's Finest players in yellow kit in front of the watching crowd",
      },
      stats: [
        { value: "467%", label: "Return on ad spend" },
        { value: "400+", label: "Players across four years" },
      ],
    },
  ] satisfies CaseStudy[],
} as const;

/**
 * MSc applied projects. Kept in their own group, clearly framed as module
 * projects, so the strategy and analytics work reads honestly.
 */
export const strategyProjects = {
  eyebrow: "Applied strategy · MSc Marketing Practice · University of Galway",
  heading: "Strategy and analytics projects",
  intro:
    "Two commercial briefs run to a deliverable as MSc module projects: a marketing strategy for a drinks brand losing to its own category, and a conversion analysis of an ecommerce store leaking revenue on mobile.",
  cards: [
    {
      title: "400+ stockists and nobody knew what it was for",
      tag: "Product marketing / Strategy / Positioning",
      href: "/work/kombucha",
      body: "The brand sat in 400+ retail outlets and still grew slowly, because most shoppers did not understand what kombucha was for. I repositioned it from niche health product to everyday wellness drink, built the integrated marketing plan behind that, and designed a subscription model around customer lifetime value.",
      image: {
        src: "/work/kombucha/positioning.svg",
        alt: "Positioning diagram: kombucha repositioned from niche health product to everyday wellness drink",
      },
    },
    {
      title: "95% of revenue from one device, and why",
      tag: "Growth / CRO / GA4",
      href: "/work/google-merch",
      body: "Desktop and mobile brought near-identical traffic across 61,000+ users. Desktop produced 95.4% of the revenue. Funnel analysis in Google Analytics 4 traced it to 70.3% mobile checkout abandonment and an engagement gap of 22% against 59%, and the output was a prioritised fix roadmap.",
      image: {
        src: "/work/google-merch/funnel.svg",
        alt: "Funnel diagram: 70.3% mobile checkout abandonment against desktop revenue share",
      },
    },
  ] satisfies CaseStudy[],
} as const;

/**
 * The design output, collected in one place. Assets are pulled from the case
 * studies they belong to, so this is a craft surface rather than a gallery of
 * work that appears nowhere else.
 */
export const craft = {
  eyebrow: "Craft",
  heading: "The design work, in one place",
  intro:
    "Graphic design, brand collateral, campaign assets and event print, built to one set of brand guidelines and produced in Adobe InDesign, Affinity Designer and Canva. Two languages, print and digital, all of it shipped to a deadline someone else set.",
  items: [
    {
      image: {
        src: "/work/ewma/poster-back.png",
        alt: "Bandaging Competition poster: how to play in three steps",
        ratio: "aspect-[565/800]",
      },
      note: "Competition poster. The mechanic in three steps, in the stand's visual system.",
    },
    {
      image: {
        src: "/work/ewma/banner-german.png",
        alt: "German-language Tight Alright banner for the conference",
        ratio: "aspect-[390/555]",
      },
      note: "Bilingual campaign asset. English creative rebuilt in German for the host market.",
    },
    {
      image: {
        src: "/work/feeltect-function/brand-values-poster.png",
        alt: "FeelTect company values poster designed as part of the brand refresh",
        ratio: "aspect-[1414/2000]",
      },
      note: "Print collateral from the brand refresh. Same tone of voice, same palette, same rules as the digital work.",
    },
    {
      image: {
        src: "/work/feeltect-function/brand-linkedin-template.png",
        alt: "LinkedIn template announcing FeelTect at the AIMS Summit Shark Tank",
        ratio: "aspect-square",
      },
      note: "Social template. One layout system, a new event dropped in each time, brand consistency without a redesign.",
    },
    {
      image: {
        src: "/work/feeltect-function/brand-testimonial-card.png",
        alt: "Clinical testimonial quote card featuring a lead wound care nurse",
        ratio: "aspect-square",
      },
      note: "Testimonial card. Clinical credibility, built to be reposted by the people quoted on it.",
    },
    {
      image: {
        src: "/work/athlones-finest/poster-6-aside.jpg",
        alt: "Poster for the six-aside charity tournament",
        ratio: "aspect-[1400/2164]",
        position: "top",
      },
      note: "Consumer event print. Different audience, different brand, same job: get people to turn up.",
    },
    {
      image: {
        src: "/work/ewma/banner-pullup.png",
        alt: "Pull-up banner for the EWMA stand: defined pressure, not blind pressure",
        ratio: "aspect-[1500/3707]",
      },
      note: "Stand banner. The line that did the most work all week, sized for a room full of competitors.",
    },
  ] satisfies CraftItem[],
} as const;

/**
 * Homepage copy.
 *
 * Section order (see app/page.tsx): Hero, About (Act I), Key Stats (Act II),
 * Selected Work (Act III), Tech Stack, FAQ, Contact. The hero carries the
 * headline, the positioning lives in Act I, and the evidence follows.
 */
export const homepage = {
  hero: {
    headline: "Hi, I'm Niall Awogboro",
    supporting: "I build brands, audiences and growth.",
    // Marquee chip above the performer. The component dresses it in stars.
    marquee: "Live from Ireland",
    cta: { label: "Learn more about me", href: "/about" },
    headshot: {
      src: "/headshot.png",
      alt: "Niall Awogboro, commercially minded marketer, based in Dublin",
    },
  },

  about: {
    kicker: "Act I · The one about me",
    photo: {
      src: "/work/feeltect-function/production-tablet-demo.jpg",
      alt: "Filming a Tight Alright product demonstration behind the scenes at FeelTect",
      caption: "backstage at FeelTect",
    },
    heading: "Commercially minded. Clinically aware. Built to execute.",
    paragraphs: [
      "I combine marketing strategy with hands-on creative and digital execution, and I understand how to communicate in clinical and technical environments where the audience reads information differently.",
    ],
    link: { label: "Learn more about me", href: "/about" },
  },

  keyStats: {
    kicker: "Act II · The receipts",
    heading: "Key achievements",
    // The comedy-club flourish, sitting to the right of the heading.
    ovation: "Results that get a standing ovation",
    /**
     * Every figure below is reconciled against the canonical data:
     *  - "400+ players": Athlone's Finest turnout across four years.
     *  - "467%": ROAS on the 2026 Meta campaign (Athlone's Finest).
     *  - "Westmeath Independent": real 2026 press feature, live URL in
     *    case-studies.ts (athlones-finest).
     *  - "1,900%": FeelTect impressions growth over the nine months.
     *  - "3rd": athlonesfinest.com's ranking among six-a-side websites in
     *    Ireland (supplied in the September 2026 revision document).
     *  - "40%": FeelTect follower growth over nine months.
     */
    stats: [
      {
        value: "400+",
        label: "Players hosted",
        note: "Turned out for Athlone's Finest across four years of tournaments.",
      },
      {
        value: "467%",
        label: "Return on ad spend",
        note: "On the 2026 Meta campaign, built on three years of audience.",
      },
      {
        value: "1,900%",
        label: "Impressions growth",
        note: "FeelTect's digital visibility across my nine months as solo marketing lead.",
      },
      {
        value: "3rd",
        label: "Six-a-side site in Ireland",
        note: "Where athlonesfinest.com ranks among six-a-side websites in Ireland.",
      },
      {
        value: "Featured",
        label: "Westmeath Independent",
        note: "The 2026 six-a-side got picked up by the local paper.",
      },
      {
        value: "40%",
        label: "Follower growth",
        note: "At FeelTect in nine months, alongside a 200% lift in engagement.",
      },
    ],
  },

  work: {
    kicker: "Act III · The main set",
    heading: "Selected work",
    subheading: "Four case studies covering both sides of my range: B2B MedTech and consumer sport.",
    scrollHint: "Scroll to explore",
    // The four selected studies, in the order the revision document set:
    // solo marketer at FeelTect, Athlone's Finest, the website rebuild, EWMA.
    // Indices are non-null: these arrays are defined literally above. The `!`
    // satisfies noUncheckedIndexedAccess without widening the tuple types.
    cards: [
      feeltect.cards[0]!,
      athlonesFinest.cards[0]!,
      feeltect.cards[1]!,
      feeltect.cards[2]!,
    ] satisfies CaseStudy[],
    seeAll: { label: "See more", href: "/work" },
  },

  contact: {
    kicker: "Encore",
    heading: "Interested in my work? Want to see this work done for you? Just want to say hi?",
    emailCta: { label: "Email me", href: `mailto:${site.email}` },
    // The Random button picks one of these at runtime, excluding the current
    // path so it never feels broken. Client-side only.
    randomRoutes: [
      "/work",
      "/about",
      "/lab",
      "/work/feeltect-function",
      "/work/athlones-finest",
      "/work/ewma",
      "/work/kombucha",
    ],
  },
} as const;

/**
 * Copy for the standalone /about page, rebuilt September 2026 to the revision
 * document's structure: Hero, Personal introduction, Away from the desktop,
 * Tech Stack, How I work, Experience, Credentials, Education, Closing CTA.
 */
export const aboutPage = {
  hero: {
    kicker: "About",
    heading: "Meet Niall Awogboro",
    headshot: {
      src: "/headshot.png",
      alt: "Niall Awogboro, commercially minded marketer",
    },
    lede: "I build brands, audiences and growth.",
    paragraphs: [
      "I'm a commercially minded marketer working across strategy, creative execution and digital growth. My experience spans B2B and B2C, from positioning and audience research to content, campaigns, websites and performance measurement.",
      "I like understanding the problem, figuring out what will move the audience, building the work and then looking at what happened.",
    ],
  },

  intro: {
    heading: "A marketer who likes taking things from strategy to execution.",
    paragraphs: [
      "My experience runs from marketing strategy, brand and positioning through audience research, content, social and paid advertising, and on into websites, UX, creative production, event marketing and analytics. The thread through all of it stays the same: strategy first, then the creative, then the digital execution, then an honest look at what the numbers say.",
      "At FeelTect that meant translating a complex MedTech proposition for clinicians, investors and KOLs as the solo marketing lead. At Athlone's Finest it means building a consumer sports brand, community and event platform I founded myself. Two audiences that could hardly be less alike, and the same job underneath: understand the person, make the value obvious, measure what happened.",
    ],
  },

  /**
   * "Away from the desktop": a personal, visual section. Photo slots render a
   * labelled placeholder until Niall supplies the photographs; drop the files
   * into /public/about/ and fill in the src values here.
   */
  awayFromDesk: {
    heading: "Away from the desktop",
    intro: "The person behind the portfolio, when the laptop is closed.",
    items: [
      {
        label: "Graduation",
        body: "Bachelor of Commerce from the University of Galway, with an Erasmus exchange at Kedge Business School in Paris. Now finishing the MSc.",
        image: { src: "/about/graduation.jpg", alt: "Niall at graduation in academic dress" },
      },
      {
        label: "Football",
        body: "Manchester United fan, and I still play. I turned out for the University of Galway team in the Harding Cup, and Athlone's Finest exists because I wanted local football to have something worth showing up for.",
        image: { src: "/about/football.jpg", alt: "Niall playing football in the Harding Cup" },
      },
      {
        label: "Building Athlone's Finest",
        body: "Part hobby, part second job. Running a real brand with my own money on the line is the best marketing education I have found.",
        image: { src: "/about/athlones-finest-pitch.jpg", alt: "Niall on the pitch at an Athlone's Finest event" },
      },
      {
        label: "Boxing for charity",
        body: "I fought in a charity boxing night at university. Training camp taught me that preparation is preparation, whether the deadline is a fight card or a campaign launch.",
        image: { src: "/about/boxing.jpg", alt: "Niall boxing in a charity fight night" },
      },
      {
        label: "Good company",
        body: "My best ideas come from conversations with people who think differently. Travel, food and catching up with friends keep the perspective honest.",
        image: { src: "/about/friends.jpg", alt: "Niall out with a friend" },
      },
      {
        label: "University of Galway",
        body: "Featured on the University of Galway website. The years in Galway shaped how I think about marketing, community and getting things done.",
        image: { src: "/about/university-promo.jpg", alt: "Niall featured on the University of Galway website" },
      },
    ],
  },

  /**
   * Tech Stack: one interactive container, tools grouped by job. Only tools
   * with genuine practical experience behind them. Rendered by
   * components/sections/about/TechStack.tsx with a gentle floating animation.
   */
  techStack: {
    heading: "Tech stack",
    intro:
      "The tools I actually work in, grouped by the job they do. Strategy is only useful when you can execute it yourself.",
    groups: [
      {
        heading: "Marketing & analytics",
        tools: [
          "Google Analytics 4",
          "Google Tag Manager",
          "Google Search Console",
          "Google Ads",
          "Google Business Profile",
          "Meta Ads Manager",
          "Meta Business Suite",
          "HubSpot CRM",
          "Instagram Insights",
          "Google Sheets",
          "Microsoft Excel",
        ],
      },
      {
        heading: "Web",
        tools: ["WordPress", "Elementor Pro", "Wix", "Claude", "Claude Code"],
      },
      {
        heading: "Design",
        tools: ["Adobe InDesign", "Adobe Illustrator", "Affinity Designer", "Canva"],
      },
      {
        heading: "Video & content",
        tools: ["DaVinci Resolve", "CapCut", "YouTube"],
      },
    ] satisfies ToolGroup[],
  },

  /**
   * How I work: compact principles rather than essays. Inspired by the values
   * box on bastienmoiroux.fr/about, rebuilt in this site's own visual system.
   */
  howIWork: {
    heading: "How I work",
    principles: [
      {
        heading: "Strategy first",
        body: "Understand the problem before jumping into execution.",
      },
      {
        heading: "Understand the audience",
        body: "Research, personas and audience behaviour inform the work.",
      },
      {
        heading: "Question the brief",
        body: "The first idea rarely survives contact with the real problem.",
      },
      {
        heading: "Think commercially",
        body: "Marketing activity connects to a business objective, or it goes.",
      },
      {
        heading: "Make it clear",
        body: "Good marketing makes the value obvious.",
      },
      {
        heading: "Create with purpose",
        body: "Every piece of creative has a reason behind it.",
      },
      {
        heading: "Test and learn",
        body: "Performance data improves the next decision.",
      },
      {
        heading: "Use the data",
        body: "Numbers are evidence, never the entire argument.",
      },
      {
        heading: "Take ownership",
        body: "Someone has to get the work over the line. Happily, me.",
      },
      {
        heading: "Strategy into execution",
        body: "A plan improves when its author has to deliver it.",
      },
    ] satisfies HowIWorkPoint[],
  },

  experience: [
    {
      role: "Marketing Intern",
      company: "FeelTect",
      period: "September 2025 to June 2026",
      summary:
        "Solo marketing lead at a MedTech company entering its first commercial markets. I joined an existing but fragmented marketing environment and connected strategy, positioning, content, digital activity and measurement into one system, working directly with the founders, CEO, clinical team and engineering team.",
      achievements: [
        "Developed the Marketing and Communications Plan that leadership reviewed and adopted, connecting positioning, messaging, content, channels, campaigns and measurement",
        "Built buyer, investor and KOL personas from secondary research and stakeholder interviews, and ran a competitor benchmark that identified three communication opportunities",
        "Grew impressions 1,900%, digital engagement 200% and followers 40% across the nine month placement",
        "Produced a 15-episode educational video series end to end, from studio setup and scripting through filming, editing and publication, with 1,000+ YouTube views from partners",
        "Built and shipped six website pages in WordPress and Elementor Pro with on-page SEO, no external developer required",
        "Established measurement across GA4, Google Tag Manager, LinkedIn, YouTube and Google Business Profile, and presented a six month digital performance report with competitor benchmarking to leadership",
      ],
    },
    {
      role: "Founder & Marketing Lead",
      company: "Athlone's Finest Events",
      period: "May 2023 to present",
      summary:
        "A consumer sports brand, community and event platform I founded and still run. Four years of consumer research, brand building, organic content, paid acquisition, live events, sponsorship and retention, with local media recognition along the way through a feature in the Westmeath Independent.",
      achievements: [
        "467% return on ad spend on the 2026 paid campaign, with EUR 700.70 in gross registration revenue attributed to two weeks of spend, and a EUR 8.13 cost per lead on the 2025 campaign",
        "Grew participation to 400+ players across four years, reaching 12 teams and a record six sponsors in 2026, with teams travelling from Limerick and Dublin",
        "Held a 50% repeat team participation rate across consecutive editions through community management and retention-focused messaging",
        "Built an organic audience of 36,000+ monthly impressions and 150,000+ paid Meta views across TikTok, Instagram and Facebook",
        "Built athlonesfinest.com with Claude Code, with GA4, Google Tag Manager and on-page SEO; it ranks as the third six-a-side website in Ireland",
        "Earned local press coverage in the Westmeath Independent, evidence of the brand's growing visibility in the community",
      ],
    },
    {
      role: "Senior Sales Assistant",
      company: "Circle K",
      period: "August 2022 to October 2024",
      summary:
        "Front-line customer experience across two locations. I hit a 29% upsell conversion rate against a 16% store average by reading what the customer needed before recommending anything.",
      achievements: [],
    },
  ] satisfies ExperienceEntry[],

  credentials: {
    heading: "Credentials",
    intro: "Certifications, awards and involvement.",
    certs: [
      { title: "Google Ads certification", issuer: "Google" },
      { title: "Google Analytics certification", issuer: "Google" },
      { title: "AI-Powered Performance Ads certification", issuer: "Google" },
      { title: "Email Marketing certified", issuer: "HubSpot" },
      { title: "Claude for Marketers", issuer: "Anthropic" },
      { title: "Finalist, Real Impact Undergraduate of the Year", issuer: "2025" },
      { title: "LIFT Ireland Facilitator", issuer: "LIFT Ireland" },
      { title: "Event Manager, Public Speaking Society", issuer: "University of Galway" },
      { title: "University of Galway Football Team", issuer: "Harding Cup" },
      { title: "Gaisce Bronze Award", issuer: "Gaisce" },
      { title: "French (conversational)", issuer: "Kedge Business School, Paris" },
    ],
  },

  education: [
    {
      credential: "MSc Marketing Practice",
      institution: "University of Galway",
      period: "2025 to 2026",
    },
    {
      credential: "Bachelor of Commerce, Marketing",
      institution: "University of Galway",
      period: "2022 to 2025",
      note: "Erasmus Exchange, Kedge Business School, Paris (2024).",
    },
  ] satisfies EducationEntry[],

  closing: {
    heading: "Have a marketing problem worth solving?",
    sub: "Let's talk.",
    cta: { label: "Get in touch", href: "/#contact" },
  },

  cv: { label: "Download my CV", href: "/Niall_Awogboro_CV.pdf" },
} as const;

/**
 * Copy for the standalone /work page. Case study cards are reused from the
 * `feeltect`, `athlonesFinest` and `strategyProjects` objects above.
 */
export const workPage = {
  eyebrow: "Work",
  headline: "Projects I've shipped.",
  intro:
    "Six case studies across strategy, brand, growth, content, web and events. Each one covers the problem, the audience, the decisions I made, and what happened after.",

  groups: [
    {
      eyebrow: feeltect.eyebrow,
      heading: "FeelTect",
      intro: undefined as string | undefined,
      cards: feeltect.cards,
      brand: undefined as string | undefined,
    },
    {
      eyebrow: athlonesFinest.eyebrow,
      heading: "Athlone's Finest",
      intro:
        "Four years of a consumer sports brand, told as one story: from a 2am first registration to press coverage, a record sponsor count and 467% ROAS.",
      cards: athlonesFinest.cards,
      brand: "afe" as string | undefined,
    },
    {
      eyebrow: strategyProjects.eyebrow,
      heading: strategyProjects.heading,
      intro: strategyProjects.intro,
      cards: strategyProjects.cards,
      brand: undefined as string | undefined,
    },
  ],

  closing: {
    heading: "Seen enough?",
    body: "Each card above links to a complete write-up. If you would rather skip the reading, get in touch directly.",
    primaryCta: { label: "Contact me", href: `mailto:${site.email}` },
    secondaryCta: { label: "More about me", href: "/about" },
  },
} as const;

export const testimonials = [
  {
    quote:
      "Niall combined strategic thinking, creativity and commercial focus with strong execution, delivering growth focused marketing solutions that strengthened our brand and digital presence.",
    author: "Andrew Cameron",
    role: "CEO, FeelTect",
    stars: 5,
  },
  {
    quote:
      "Niall is a great guy. He showed a strong understanding of commercial challenges and audience needs. He was able to translate those insights into focused marketing communications that made a positive contribution to the business. We were very glad to have him with us.",
    author: "Darren Burke",
    role: "CTO, FeelTect",
    stars: 5,
  },
];

export const faqItems = [
  {
    question: "What types of marketing work do you do?",
    answer:
      "Strategy, brand, growth, content and events, from research and positioning through to delivery and measurement, across B2B and B2C.",
  },
  {
    question: "Do you work freelance or full-time?",
    answer: "Open to both, happy to have a conversation about what fits.",
  },
  {
    question: "What is the best way to discuss a project?",
    answer: `Drop me an email at ${site.email} with the brief and timeline.`,
  },
];
