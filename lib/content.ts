import type {
  AboutPanel,
  CaseStudy,
  CraftItem,
  Discipline,
  EducationEntry,
  ExperienceEntry,
  HowIWorkPoint,
  NavItem,
  Stat,
  ToolGroup,
  WhatsNextLink,
} from "./types";

/**
 * Single source of truth for site copy.
 *
 * Figures, job titles, grades and credentials are reconciled to the master CV
 * (/public/Niall_Awogboro_CV.pdf). If the CV changes, change it here too:
 *   - Title at FeelTect: Marketing & Communications Lead.
 *   - 467% ROAS, €8.13 CPL, 4.1 CAC to CLTV, 150,000+ paid views.
 *   - FeelTect growth: 1,900% impressions, 40% followers, 200% engagement lift.
 *   - Athlone's Finest organic: 36,000+ monthly impressions, followers doubled.
 *   - Both degrees are 2.1. No Google Ads, Excel or CRO certification is claimed.
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

export const hero = {
  eyebrow: "Marketing Executive · Brand, Growth, Content & Events",
  headlineLines: ["Meet Niall Awogboro", "The marketer with 5 hats"],
  positioning:
    "I run marketing end to end. The research, the positioning, the creative, the spend, and the reporting that says whether any of it worked.",
  supporting: [
    "At FeelTect, a MedTech company in Galway, I work inside the marketing team alongside sales, clinical and leadership. Nine months in: 1,900% impressions growth, 40% follower growth, a go-to-market strategy the business adopted as its operating reference, and 20+ qualified leads out of the Vienna clinical conference.",
    "At Athlone's Finest, the consumer sports brand I founded in 2023, the last paid social campaign returned 467% on ad spend at €8.13 per qualified lead. I sold the sponsorships, hired the suppliers, and delivered the tournaments the campaign was selling.",
  ],
  stats: [
    { value: "40%", label: "Follower growth" },
    { value: "€8.13", label: "Cost per qualified lead (CPL)" },
    { value: "400+", label: "Players engaged" },
  ] satisfies Stat[],
  primaryCta: { label: "See my work", href: "/work" },
  secondaryCta: { label: "Get in touch", href: "#contact" },
} as const;

/**
 * The five briefs this site has to answer. Rendered high on the homepage so a
 * hiring reader can see their own job description inside 10 seconds.
 */
export const disciplines: Discipline[] = [
  {
    label: "Brand",
    body: "Contributed to a brand refresh at FeelTect and then applied it: brand guidelines, tone of voice and visual identity carried across digital, print, web and event collateral in InDesign, Affinity Designer and Canva. Built a consumer brand from nothing at Athlone's Finest and sold it to sponsors on commercial terms.",
    href: "/work/athlones-finest",
  },
  {
    label: "Product marketing",
    body: "Wrote the marketing and go-to-market (GTM) strategy FeelTect approved and now runs on. Built buyer, investor and key opinion leader (KOL) personas from stakeholder interviews, and repositioned a drinks brand across 400+ retail outlets in a full GTM plan.",
    href: "/work/feeltect-function",
  },
  {
    label: "Growth",
    body: "467% return on ad spend (ROAS) at €8.13 cost per lead (CPL) and a 4.1 CAC to CLTV ratio on Meta. Google Analytics 4 (GA4) and Google Tag Manager (GTM) implemented from scratch, plus a conversion rate optimisation (CRO) analysis across 61,000 users.",
    href: "/work/athlones-finest",
  },
  {
    label: "Content",
    body: "A 15-episode video series filmed and edited in-house, and a content calendar running across TikTok, Instagram, Facebook, LinkedIn and YouTube. Video editing, graphic design and copywriting from the same person, with AI in the pipeline where it earns its place.",
    href: "/work/feeltect-function",
  },
  {
    label: "Events",
    body: "An international clinical conference in Vienna with 20+ qualified leads, and a live tournament series delivered on budget with suppliers, contracts and sponsors attached. B2B and consumer, both with a commercial number on the end.",
    href: "/work/ewma",
  },
];

export const feeltect = {
  eyebrow: "B2B MedTech · 9 months · Marketing & Communications Lead",
  heading: "My work at FeelTect",
  statsBefore: [
    { value: "1,900%", label: "Impressions growth" },
    { value: "40%", label: "Follower growth" },
    { value: "200%", label: "Digital engagement lift" },
    { value: "20+", label: "Qualified leads, Vienna conference" },
  ] satisfies Stat[],
  cards: [
    {
      title: "The plan the business runs on",
      tag: "Product marketing / GTM / Insight",
      href: "/work/feeltect-function",
      body: "Before anything shipped, I ran a competitor benchmark that surfaced three positioning gaps, and built buyer, investor and clinical KOL personas from secondary research and stakeholder interviews. Those fed the marketing and go-to-market strategy document, which leadership approved and adopted as the operating reference for the business. Then I built the analytics and the content engine to deliver against it.",
      image: {
        src: "/work/feeltect-function/production-tablet-demo.jpg",
        alt: "Filming a Tight Alright product demonstration for the educational video series",
      },
    },
    {
      title: "Website rebuild",
      tag: "Web / CRO / UX",
      href: "/work/feeltect-website",
      body: "The site was structured around the company rather than the people trying to use it. A clinician looking for evidence of clinical outcomes had to dig for it. A partner looking for where FeelTect was presenting had no way to find it. I rebuilt the information architecture with the commercial team, introduced trust signals at the right points in the scroll journey, and shipped six pages without an external developer.",
      image: {
        src: "/work/feeltect-website/hero-new.png",
        alt: "The rebuilt FeelTect homepage hero with the Tight Alright brand illustration",
        position: "top",
      },
    },
    {
      title: "EWMA Vienna: conference marketing",
      tag: "Events / Brand activation / ABM",
      href: "/work/ewma",
      body: "A conference campaign is three problems, not one. Before was the stand design, the bilingual English and German clinical materials, and the social campaign. During was the International Bandaging Competition. After was the lead tracking that made the trip worth the budget. Twenty-plus qualified leads, logged as they happened.",
      image: {
        src: "/work/ewma/poster-front.svg",
        alt: "Bandaging Competition poster designed for the EWMA conference stand in Vienna",
        position: "top",
      },
    },
  ] satisfies CaseStudy[],
  statsAfter: [
    { value: "15", label: "Episodes filmed and edited" },
    { value: "1,000+", label: "Partner views on the series" },
    { value: "6", label: "Pages built and shipped" },
    { value: "3", label: "Positioning gaps found in the benchmark" },
  ] satisfies Stat[],
} as const;

export const athlonesFinest = {
  eyebrow: "Consumer sports brand · Founded 2023 · Still running",
  heading: "Athlone's Finest. Built it. Still running it.",
  cards: [
    {
      title: "467% ROAS on paid social",
      tag: "Growth / Paid media / Creative testing",
      href: "/work/athlones-finest",
      body: "Twelve qualified leads was the target, on a budget with no room for waste. I sequenced the Meta campaign so paid spend only hit people who had already seen the organic content, tested AI-generated video against footage I shot myself, then moved budget onto the format the engagement data preferred. Return on ad spend came in at 467%.",
      image: {
        src: "/work/athlones-finest/hero-match.jpg",
        alt: "Athlone's Finest players in yellow kit competing for the ball during a match",
      },
      stats: [
        { value: "467%", label: "Return on ad spend" },
        { value: "€8.13", label: "Cost per qualified lead" },
        { value: "4.1", label: "CAC to CLTV ratio" },
        { value: "150,000+", label: "Paid views on Meta" },
      ],
    },
    {
      title: "Tournament delivery and sponsorship",
      tag: "Events / Partnerships / Operations",
      href: "/work/afe-tournament",
      body: "Live football tournaments delivered end to end: budget, suppliers, timelines, venue, referees, prizes and on-site logistics, with the whole thing pointed at a charity total. The sponsorships came from walking into local businesses with audience data and a proposal built around what they wanted out of it, then negotiating terms and taking the odd no.",
      image: {
        src: "/work/athlones-finest/poster-6-aside.jpg",
        alt: "Poster for the 2025 six-aside charity tournament at Willow Park FC Stadium",
        position: "top",
      },
      stats: [
        { value: "40,000+", label: "Build-up campaign views" },
        { value: "3", label: "Local sponsors secured" },
        { value: "0", label: "Budget overruns" },
        { value: "2", label: "Charities supported" },
      ],
    },
  ] satisfies CaseStudy[],
} as const;

/**
 * MSc applied projects. Kept in their own group so the go-to-market and
 * analytics work reads as commercial thinking rather than coursework.
 */
export const strategyProjects = {
  eyebrow: "Applied strategy · MSc Marketing Practice · University of Galway",
  heading: "Strategy and analytics projects",
  intro:
    "Two commercial briefs run to a deliverable: a go-to-market plan for a drinks brand losing to its own category, and a conversion analysis of an ecommerce store leaking revenue on mobile.",
  cards: [
    {
      title: "All About Kombucha: go-to-market",
      tag: "Product marketing / GTM / Positioning",
      href: "/work/kombucha",
      body: "Distribution was not the constraint. The brand was in 400+ retail outlets and still growing slowly, because most shoppers did not understand what kombucha was for. I repositioned it from niche health product to everyday wellness drink, built the integrated GTM plan behind that, and designed a subscription model around customer lifetime value with a target of doubling subscription sales in six months.",
    },
    {
      title: "Google Merchandise Store: where the revenue leaks",
      tag: "Growth / CRO / GA4",
      href: "/work/google-merch",
      body: "Desktop and mobile brought near-identical traffic across 61,000+ users. Desktop produced 95.4% of the revenue. Funnel analysis in Google Analytics 4 traced it to 70.3% mobile checkout abandonment and an engagement gap of 22% against 59%, and the output was a prioritised fix roadmap rather than a list of observations.",
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
        src: "/work/ewma/poster-front.svg",
        alt: "Bandaging Competition poster, front: come test your skills, win daily prizes",
        ratio: "aspect-[3508/4961]",
      },
      note: "Competition poster, front. Designed to stop a clinician walking past a stand in Vienna.",
    },
    {
      image: {
        src: "/work/ewma/poster-back.png",
        alt: "Bandaging Competition poster, back: how to play in three steps",
        ratio: "aspect-[565/800]",
      },
      note: "Competition poster, back. The mechanic in three steps, in the same visual system.",
    },
    {
      image: {
        src: "/work/ewma/banner-german.png",
        alt: "German-language Tight Alright banner for the Vienna conference",
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
        alt: "Poster for the 2025 six-aside charity tournament",
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

export const about = {
  paragraphs: [
    "I have built a marketing function inside a MedTech company and a consumer sports brand from nothing. One taught me how to work through clinical, sales and leadership stakeholders who all read information differently. The other taught me what happens when the budget is yours.",
    "MSc Marketing Practice at University of Galway, after a 2.1 in Commerce and an Erasmus at Kedge in Paris. Real Impact Undergraduate of the Year finalist and a LIFT Ireland facilitator. Based between Galway and Dublin.",
  ],
  credentials: [
    "Marketing and GTM strategy adopted by FeelTect leadership",
    "467% ROAS, €8.13 CPL, 4.1 CAC to CLTV",
    "MSc Marketing Practice, University of Galway",
    "Finalist, Real Impact Undergraduate of the Year 2025",
  ],
  link: { label: "More about me", href: "/about" },
} as const;

export const closing = {
  heading: "Open to new opportunities",
  body: "I take on brand, product marketing, growth, content and event briefs, in-house or freelance, across Europe and remote. FMCG, MedTech, SaaS and events are where I have shipped. If one of those is your problem, get in touch.",
} as const;

export const whatsNext: WhatsNextLink[] = [
  {
    title: "See the case studies",
    description:
      "Seven write-ups covering the brief, the decision, the delivery and the number on the end of it.",
    href: "/work",
  },
  {
    title: "Learn more about me",
    description: "How I work, who I have worked with, and what I am looking for.",
    href: "/about",
  },
  {
    title: "Get in touch",
    description: "If you have seen enough and want to have a conversation.",
    href: "#contact",
  },
];

/**
 * Copy for the standalone /about page. Distinct from the homepage `about`
 * snippet above, which stays short by design.
 */
export const aboutPage = {
  headline: "I own the outcome, usually with other people's deadlines attached.",
  opening: [
    "A lot of the work I am proudest of started as a blank page. At FeelTect I joined the marketing team at a MedTech company and spent nine months building the system it runs on: stakeholder interviews with clinical and commercial leads, a competitor benchmark, personas, and a go-to-market strategy leadership approved. Then the delivery, which is the part most plans do not survive.",
    "At Athlone's Finest I turned an idea about local football into a brand with a paid media budget, three sponsors and a supplier list. Both jobs taught me the same thing: strategy is cheap until someone has to stand behind a stall at eight in the morning and make it happen.",
  ],

  panels: [
    {
      label: "Strategist",
      body: "Competitor benchmark, personas, positioning, and a go-to-market plan FeelTect approved and now runs on.",
    },
    {
      label: "Builder",
      body: "Fifteen episodes filmed and edited, six web pages shipped, a brand system applied across print and digital.",
    },
    {
      label: "Operator",
      body: "Contractors briefed, contracts written with delivery milestones, budgets held, one commercial dispute resolved.",
    },
  ] satisfies AboutPanel[],

  howIWork: [
    {
      heading: "Most bad marketing decisions happen before the campaign launches",
      body: "Usually because nobody spent enough time with the people they are trying to reach. At FeelTect that meant sitting down with clinical and commercial colleagues and turning what they knew into buyer, investor and KOL personas before I wrote a word of campaign copy. I have seen campaigns built on assumptions fall apart the moment they met a real audience. I would rather do the research first, even when there is pressure to move.",
    },
    {
      heading: "Two audiences that could not be less alike",
      body: "I have marketed wound care technology to clinical procurement leads, and football events to teenagers in the midlands. Those groups read information, make decisions and respond to formats in completely different ways. Knowing the difference is most of the job, and it is why I do not arrive with a template.",
    },
    {
      heading: "I have written the plan and delivered it",
      body: "At FeelTect there were mornings writing the marketing and go-to-market strategy and afternoons building pages in Elementor. It made the plan better, because I was one of the people who had to deliver it, and because the commercial team told me quickly when something would not work in front of a customer.",
    },
    {
      heading: "I work fine without structure, and better with people in the room",
      body: "I have run projects where I set my own priorities and reported out to people who were not in the day to day. I have also briefed external video contractors, taken direction from clinical leads who knew the audience better than I did, and presented a six-month performance report to leadership and then argued about what it meant. Both need the same thing: be honest about what you know, and ask early when it matters.",
    },
    {
      heading: "I use new tools when they actually help",
      body: "I picked up DaVinci Resolve, Affinity Designer, Elementor and Claude Code because a job needed them, not because they were interesting. Same with AI. Google Veo and Higgsfield cut my video production time down to something a one-person budget can carry, but the decision about what ships is still mine, and most of what those tools make does not.",
    },
    {
      heading: "I try to use data honestly",
      body: "I implemented Google Analytics 4 and Google Tag Manager at FeelTect and again for the Athlone's Finest site, so campaign performance was measurable rather than guessed at. I have also watched people treat a good-looking dashboard as a substitute for thinking. Numbers tell you what happened. They are worse at telling you why. I use them as the start of the argument.",
    },
  ] satisfies HowIWorkPoint[],

  experience: [
    {
      role: "Marketing & Communications Lead",
      company: "FeelTect",
      period: "September 2025 to June 2026",
      summary:
        "Nine-month placement on the marketing team at a MedTech company. Cross-functional collaboration with sales, clinical and leadership across strategy, brand, content, events and vendor management.",
      achievements: [
        "Wrote the marketing and go-to-market strategy that leadership approved and adopted as the operating reference for the business",
        "Built buyer, investor and KOL personas from secondary research and stakeholder interviews, and ran a competitor benchmark that surfaced three positioning gaps",
        "Grew impressions 1,900%, followers 40% and digital engagement 200% in nine months through integrated B2B demand generation, organic social and content marketing",
        "Set up YouTube, Google Business Profile, LinkedIn, Google Analytics 4 and Google Tag Manager as the channel and measurement infrastructure. Campaign attribution, KPI tracking and funnel reporting all run on it",
        "Filmed and edited a 15-episode short-form video series in DaVinci Resolve, adopted by the commercial team as an ongoing client-facing sales enablement asset, 1,000+ partner views",
        "Contributed to a brand refresh, applying updated tone of voice and visual guidelines across digital and print collateral in InDesign, Affinity Designer and Canva",
        "Built six WordPress and Elementor pages including the homepage, jobs page and testimonials, saving €3,000 in external development costs",
        "Delivered the event marketing programme for the EWMA International Bandaging Competition in Vienna, with 20+ qualified leads tracked from stand to follow-up in HubSpot CRM",
        "Sourced and managed external video contractors through Upwork, introduced written contracts with delivery milestones, and resolved a commercial dispute with a vendor",
        "Presented a six-month digital performance report with competitor benchmarking at leadership level. Leadership agreed the next set of planning priorities off the back of it",
      ],
    },
    {
      role: "Founder and Marketing Lead",
      company: "Athlone's Finest Events",
      period: "May 2023 to present",
      summary:
        "A consumer sports brand for 16 to 25 year olds in the midlands, with a paid media budget, sponsors, suppliers and live events. I started it and I still run it.",
      achievements: [
        "467% return on ad spend at €8.13 per qualified lead and a 4.1 CAC to CLTV ratio on the most recent Meta campaign, across 150,000+ paid views",
        "Reallocated budget mid-campaign after engagement data showed found match footage outperforming polished promotional creative, and improved return doing it",
        "Grew organic to 36,000+ monthly impressions and doubled followers on a cross-platform content calendar across TikTok, Instagram and Facebook, with community management and audience engagement handled daily",
        "Produce social-first content end to end: short-form video, Reels, on-camera pieces, promotional posters, campaign copywriting and AI-generated video built with Google Veo and Higgsfield, reaching 40,000+ campaign views",
        "Secure commercial sponsorships and brand partnerships by presenting audience data against each partner's objectives, then negotiating terms and managing the relationship through delivery",
        "Deliver live event activations end to end: budgets, suppliers, timelines, venue and on-site event logistics for consumer sports tournaments, with no budget overruns",
        "Built athlonesfinest.com in Claude Code and implemented Google Analytics 4 and Google Tag Manager on it",
      ],
    },
    {
      role: "Senior Sales Assistant",
      company: "Circle K",
      period: "August 2022 to October 2024",
      summary:
        "Customer-facing operations across two locations. I hit a 29% upsell conversion rate against a 16% store average by reading what the customer needed before recommending anything.",
      achievements: [
        "Handled trading operations, merchandising and in-store brand presentation during peak trade across two locations",
      ],
    },
  ] satisfies ExperienceEntry[],

  education: [
    {
      credential: "MSc Marketing Practice",
      institution: "University of Galway",
      period: "2025 to 2026",
      grade: "Grade: 2.1",
      modules:
        "Key modules: Customer Engagement and Analytics via Digital Platform (74%), Marketing Practice for Sustainable Value (70%), Digital Sales and Marketing Alignment (68%), Applied Marketing Practice (68%), Inbound Marketing Strategy (67%).",
      note: "Applied projects: the All About Kombucha go-to-market plan and the Google Merchandise Store conversion analysis. Both are written up in the work section.",
    },
    {
      credential: "Bachelor of Commerce, Marketing",
      institution: "University of Galway",
      period: "2022 to 2025",
      grade: "Grade: 2.1",
      modules:
        "Key modules: Mathematics for Business (94%), Market Research (78%), Consumer Behaviour (71%), Global Marketing (68%), Marketing Analytics (67%), Digital Marketing (65%).",
      note: "Erasmus Exchange, Kedge Business School, Paris (2024).",
    },
  ] satisfies EducationEntry[],

  toolkit: [
    {
      heading: "Performance and analytics",
      tools: [
        "Google Analytics 4 (GA4)",
        "Google Tag Manager",
        "Meta Ads Manager",
        "Meta Business Suite",
        "HubSpot CRM",
        "Google Ads",
        "Instagram Insights",
      ],
    },
    {
      heading: "Content and design",
      tools: [
        "DaVinci Resolve",
        "CapCut",
        "Adobe InDesign",
        "Affinity Designer",
        "Canva",
        "Google Veo",
        "Higgsfield",
      ],
    },
    {
      heading: "Web and workflow",
      tools: ["WordPress", "Elementor", "Claude", "Claude Code", "Notion", "Upwork"],
    },
  ] satisfies ToolGroup[],

  outsideWork: [
    "I have played football most of my life, including for the University of Galway team in the Harding Cup, which is part of why Athlone's Finest exists. Building something around a sport people already care about holds my attention better than most digital marketing problems. I still think local football deserved better coverage than it was getting.",
    "Outside that I am usually reading about how organisations make decisions, learning about consumer behaviour, pushing a new tool to see where it breaks, or watching comedy. Not always in that order. I also facilitate leadership sessions with LIFT Ireland, which is the best practice I get at explaining an idea to a room that did not ask for it.",
  ],

  credentials: [
    "Finalist, Real Impact Undergraduate of the Year (2025)",
    "Email Marketing certified",
    "Claude for Marketers",
    "LIFT Ireland Facilitator",
    "Event Manager, Public Speaking Society, University of Galway",
    "University of Galway Football Team (Harding Cup)",
    "Gaisce Bronze Award",
    "French",
  ],

  cv: { label: "Download my CV", href: "/Niall_Awogboro_CV.pdf" },

  whatsNext: [
    {
      title: "View my projects",
      description: "Seven case studies with the brief, the decision, and the number on the end.",
      href: "/work",
    },
    {
      title: "See the Lab",
      description: "Builds and experiments outside client work, including athlonesfinest.com.",
      href: "/lab",
    },
    {
      title: "Get in touch",
      description: "Open to full-time roles and freelance projects. Happy to have a conversation.",
      href: "/#contact",
    },
  ] satisfies WhatsNextLink[],
} as const;

/**
 * Copy for the standalone /work page. Case study cards are reused from the
 * `feeltect`, `athlonesFinest` and `strategyProjects` objects above.
 */
export const workPage = {
  eyebrow: "Work",
  headline: "Projects I've shipped.",
  intro:
    "Seven case studies across brand, product marketing, growth, content and events. Each one covers the brief, the decision I made, who I made it with, and what happened after.",

  groups: [
    {
      eyebrow: feeltect.eyebrow,
      heading: "FeelTect",
      intro: undefined as string | undefined,
      cards: feeltect.cards,
    },
    {
      eyebrow: athlonesFinest.eyebrow,
      heading: "Athlone's Finest",
      intro: undefined as string | undefined,
      cards: athlonesFinest.cards,
    },
    {
      eyebrow: strategyProjects.eyebrow,
      heading: strategyProjects.heading,
      intro: strategyProjects.intro,
      cards: strategyProjects.cards,
    },
  ],

  closing: {
    heading: "Want the full story on any of these?",
    body: "Each card links to a complete write-up. Or skip the reading and get in touch directly.",
    primaryCta: { label: "Get in touch", href: `mailto:${site.email}` },
    secondaryCta: { label: "More about me", href: "/about" },
  },
} as const;
