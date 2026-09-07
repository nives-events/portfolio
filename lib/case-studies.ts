import type { CaseStudyDetail } from "./types";

/**
 * Full write-ups for the individual /work/[slug] pages.
 *
 * Figures and claims are reconciled to the September 2026 revision document:
 *   - FeelTect: marketing intern who joined an existing marketing function.
 *     Never "first marketing hire", never "built marketing from scratch".
 *   - No qualified-lead or stakeholder-meeting counts anywhere (removed on
 *     Niall's instruction; the underlying evidence does not support them).
 *   - No direct sales-team collaboration claims. FeelTect stakeholders were
 *     founders, CEO, clinical team and engineering team.
 *   - FeelTect growth: 1,900% impressions, 40% followers, 200% engagement.
 *   - Athlone's Finest: 467% ROAS (EUR 700.70 gross attributed revenue),
 *     EUR 8.13 CPL, 400+ players, 50% repeat team rate, 12 teams and 6
 *     sponsors in 2026, Westmeath Independent coverage.
 *   - Kombucha and Google Merch are MSc module projects and say so up front.
 *
 * All media lives in /public/work/<slug>/. Videos are H.264 + faststart,
 * compressed for web (CRF 23), and load lazily: nothing downloads until play.
 */
export const caseStudies: CaseStudyDetail[] = [
  {
    slug: "feeltect-function",
    index: "01",
    tag: "Marketing strategy / Content / Digital growth",
    title: "Solo marketer at FeelTect",
    intro:
      "FeelTect develops Tight Alright, a connected wound care technology that shows clinicians the pressure applied during compression therapy. As the solo marketing lead, I connected strategy, content and digital growth in a complex MedTech environment.",
    tools: [
      "Google Analytics 4",
      "Google Tag Manager",
      "Google Search Console",
      "LinkedIn",
      "YouTube",
      "Google Business Profile",
      "WordPress",
      "Elementor Pro",
      "DaVinci Resolve",
      "Affinity Designer",
      "Adobe InDesign",
      "Canva",
    ],
    meta: {
      role: "Marketing Intern, working with founders, CEO, clinical and engineering teams",
      timeline: "September 2025 to June 2026",
      scope: [
        "Marketing strategy",
        "Positioning",
        "Personas",
        "Content strategy",
        "Digital marketing",
        "Measurement",
      ],
    },
    atAGlance: {
      project:
        "Brought structure, consistency and connection to an existing but fragmented marketing environment at a MedTech company entering its first commercial markets.",
      role: "Marketing Intern, working directly with founders, CEO, clinical and engineering teams.",
      outputs: [
        "Marketing and Communications Plan reviewed and adopted by leadership",
        "Buyer, investor and KOL personas plus a competitor benchmark",
        "15-episode educational video series, script to publication",
        "Brand consistency across digital, print and event communications",
        "Measurement infrastructure across GA4, GTM, LinkedIn, YouTube and Google Business Profile",
      ],
      primaryResult: "1,900% increase in impressions",
    },
    whatILearned: [
      "Research pays for the decisions that follow it. The competitor analysis and stakeholder research gave me evidence for the positioning and content choices I made afterwards. Without that foundation, it would have been easy to produce technically polished content that never answered the questions the audience actually had.",
      "In complex B2B and MedTech environments, clarity is part of the marketing experience. A clinician rarely needs more information. They need the right information in the right order, and that shaped the video series in particular: the strongest briefs started with what the audience needed to understand first, then worked backwards into message and format.",
      "Working as a solo marketer sharpened my prioritisation. With no team to delegate to, marketing maturity is partly the ability to decide what should not be done this week.",
    ],
    heroImage: {
      src: "/work/feeltect-function/production-tablet-demo.jpg",
      alt: "Filming a Tight Alright product demonstration for the educational video series",
      ratio: "aspect-[3/2]",
    },
    heroStats: [
      { value: "1,900%", label: "Increase in impressions" },
      { value: "40%", label: "Follower growth" },
      { value: "200%", label: "Increase in digital engagement" },
      { value: "1,000+", label: "YouTube views from partners" },
    ],
    sections: [
      {
        kicker: "01 · The starting point",
        heading: "The opportunity was better connected marketing",
        body: [
          "FeelTect already had marketing activity when I joined, but the different pieces were not yet operating as one coherent system. My job as the solo marketing lead was to understand what existed, identify the gaps and connect positioning, content, digital channels, brand communications and measurement into a more structured approach.",
          "The company operates in a technically complex category, and its communications have to work for clinicians, investors, KOLs and other stakeholders at the same time. Marketing had to do more than describe the technology. It had to communicate the problem, explain the value clearly, establish credibility and make a complex product easier to understand.",
          "So I started by understanding the business, the product, the audiences and the existing activity before deciding what to change. Rather than immediately producing more content, I looked for the strategic gaps that clearer positioning, more structured content and better connected digital activity could close.",
        ],
      },
      {
        kicker: "02 · Diagnosis and audience understanding",
        heading: "Understanding the people behind the market",
        body: [
          "Different stakeholders needed different information from FeelTect. I developed buyer, investor and KOL personas using secondary research and stakeholder interviews, drawing on colleagues across the business who already had years of customer and market experience.",
          "I also ran a competitor benchmark against established players in compression therapy. It identified three areas where FeelTect could communicate more distinctly: pressure as something tangible and measurable rather than an abstract part of therapy, the nurse actually using the technology rather than only organisational and procurement audiences, and practical training and demonstration content around the product.",
          "Those findings informed the positioning, messaging and content decisions that followed.",
        ],
        pullStat: { value: "3", label: "Communication opportunities identified in the competitor benchmark" },
      },
      {
        kicker: "03 · Positioning and messaging",
        heading: "Making a complex MedTech proposition easier to understand",
        body: [
          "Tight Alright is a technically complex product. Its value sits in what the device lets a clinician understand and do, so my role was to translate that complexity into clearer communication for each audience.",
          "The messaging work covered four questions: what FeelTect does, why it matters clinically, who needs to understand it, and why it is different from the established players the benchmark had mapped. The answers became the foundation for content, digital communication, website work, social activity and external marketing materials.",
          "The objective was consistency with flexibility. The core proposition stayed recognisable everywhere, while the emphasis shifted with the audience in front of it.",
        ],
      },
      {
        kicker: "04 · Connecting the function",
        heading: "Turning separate activities into a coherent system",
        body: [
          "The biggest change I made was creating clearer connections between activities that already existed, rather than piling on new ones. I developed a Marketing and Communications Plan that ran from positioning through messaging, content, channels and campaigns to measurement.",
          "The plan established audience messaging, channel priorities, campaign activity and a publishing cadence, which gave individual activities a defined purpose. A blog post earned its place through search visibility or authority. Educational video carried product education and demonstration. Testimonials built trust. Clinical evidence content supported credibility and KOL engagement.",
          "Leadership reviewed and adopted it as our Marketing and Communications Plan, which gave the wider team a shared framework for planning and delivering marketing activity.",
        ],
      },
      {
        kicker: "05 · The content engine",
        heading: "Content designed around what the audience needed to understand",
        body: [
          "The strategy showed that parts of the product could not be communicated through written copy alone. Tight Alright makes sense fastest when a clinician can watch it being used and see the pressure reading change in real time. That led to a 15-episode educational video series.",
          "Each episode was designed around a clinical use case, a product demonstration and a clear takeaway, and the series was integrated into the wider content strategy rather than treated as a standalone creative project. I set up the production environment in the FeelTect office, including a green screen, lighting and camera equipment, then took every episode from script through filming, editing, captioning and publication in DaVinci Resolve.",
          "I also created the YouTube channel and established a repeatable production process. The series has generated more than 1,000 YouTube views from partners, evidence the content was reaching relevant external stakeholders.",
        ],
        pullStat: { value: "15", label: "Educational episodes, script to publication" },
        videos: [
          {
            src: "/work/feeltect-function/video-how-to-episode.mp4",
            poster: "/work/feeltect-function/poster-how-to-episode.png",
            label: "Episode from the educational series: how to optimise compression therapy with Tight Alright",
            caption: "An episode from the series, exactly as it shipped. Shot in the office studio, cut in DaVinci Resolve.",
          },
          {
            src: "/work/feeltect-function/podcast-episode-1.mp4",
            poster: "/work/feeltect-function/podcast-episode-1-poster.jpg",
            label: "Podcast episode one, produced during the placement",
            caption: "Episode one of the podcast. Recorded, edited and published in-house.",
          },
        ],
        images: [
          {
            src: "/work/feeltect-function/production-green-screen.jpg",
            alt: "Green screen studio set up in the FeelTect office for the video series",
            ratio: "aspect-[1600/1388]",
            caption:
              "The in-house studio. Green screen, lighting and camera set up in the office, with DaVinci Resolve handling the edit.",
          },
        ],
      },
      {
        kicker: "06 · Strategy-led creative",
        heading: "Making the strategy tangible",
        body: [
          "The video series was one part of a wider content system. I translated the marketing strategy into educational video, social content, clinical evidence posts, client testimonials, conference communications, website content, visual campaign assets and longer form experiments.",
          "The publishing framework gave each format a frequency, a channel and a marketing purpose, so creative execution always supported a defined objective.",
        ],
        table: {
          caption:
            "The publishing framework from the Marketing and Communications Plan. Each format has a frequency and a purpose.",
          columns: ["Format", "Frequency", "Primary purpose"],
          rows: [
            ["Long form content", "Bi-weekly", "SEO, authority and lead generation"],
            ["Educational video", "Monthly", "Education and product demonstration"],
            ["Social content", "Weekly", "Awareness and engagement"],
            ["Newsletter", "Bimonthly", "Nurturing and retention"],
            ["Client testimonials", "Per release", "Trust and validation"],
            ["Clinical evidence", "Per release", "Credibility and KOL engagement"],
          ],
        },
      },
      {
        kicker: "07 · Brand and communications",
        heading: "Consistency across every touchpoint",
        body: [
          "I contributed to a brand refresh covering tone of voice and visual guidelines, then applied the system everywhere FeelTect communicated externally: digital content, print collateral, social templates, conference materials, website assets, testimonials and event communications.",
          "The challenge went beyond improving individual assets. FeelTect had to feel like the same organisation wherever a stakeholder encountered it. I produced and adapted assets in InDesign, Affinity Designer and Canva, including materials adapted into German for international activity.",
        ],
        images: [
          {
            src: "/work/feeltect-function/brand-values-poster.png",
            alt: "FeelTect company values poster designed as part of the brand refresh",
            ratio: "aspect-[1414/2000]",
            caption: "Print collateral from the refresh. The same system carried across digital and print.",
          },
          {
            src: "/work/feeltect-function/brand-linkedin-template.png",
            alt: "LinkedIn template announcing FeelTect at the AIMS Summit Shark Tank",
            ratio: "aspect-square",
            caption: "One of the social templates. Same layout system, new event each time.",
          },
          {
            src: "/work/feeltect-function/brand-testimonial-card.png",
            alt: "Clinical testimonial quote card featuring a lead wound care nurse",
            ratio: "aspect-square",
            caption: "Testimonial card. Clinical credibility, designed to be reposted by the person quoted.",
          },
        ],
      },
      {
        kicker: "08 · Measurement",
        heading: "Building measurement into the marketing system",
        body: [
          "A more structured marketing function needed better visibility of performance, so I established and managed measurement across FeelTect's digital channels: Google Analytics 4, Google Tag Manager, LinkedIn, YouTube and Google Business Profile. Tracking went in alongside the wider activity rather than after it.",
          "Six months into the placement I presented a digital performance report to leadership, pairing FeelTect's numbers with competitor benchmarking so the results had context. That created a consistent reporting rhythm and a stronger basis for deciding where attention was needed.",
        ],
      },
      {
        kicker: "09 · Digital growth",
        heading: "Reach, audience and engagement",
        body: [
          "Across the nine month placement, FeelTect's digital performance rose significantly against the equivalent period before I joined. Impressions grew 1,900%, followers grew 40%, and digital engagement grew 200%, so the extra visibility came with genuine interaction.",
          "On LinkedIn specifically, the six month performance report showed 14,157 impressions (up 690%), 473 reactions (up 1,531%) and 400 new followers (up 158%). Every figure was tracked through the measurement infrastructure established during the placement.",
        ],
        pullStat: { value: "1,900%", label: "Increase in impressions over the placement" },
      },
      {
        kicker: "10 · Commercial context",
        heading: "Building the foundations for commercial growth",
        body: [
          "FeelTect was still early in its commercial rollout during my placement. The first commercial launch took place in Switzerland in late 2025 and the US launch followed in March 2026, so direct revenue or pipeline attribution would not have been an honest primary measure of marketing performance in this period.",
          "The work instead strengthened the foundations that commercial development depends on: substantial growth in digital visibility and engagement, an educational video series with 1,000+ YouTube views from partners, and a more structured way for FeelTect to communicate its proposition, educate audiences and stay consistent across its external marketing.",
        ],
      },
      {
        kicker: "11 · Working cross-functionally",
        heading: "Between strategy, clinical knowledge and execution",
        body: [
          "Operating as the solo marketing lead meant there was no larger team to divide responsibilities across. I worked directly with the founders, CEO, clinical team and engineering team, often translating specialist information into customer facing communication.",
          "That meant moving between technical understanding of how the product works, clinical understanding of the problem from the healthcare professional's perspective, marketing judgement about what mattered to the audience, creative execution, and measurement. It required independent prioritisation and the ability to take an ambiguous business problem to a practical marketing response without a specialist team behind me.",
        ],
      },
      {
        kicker: "12 · What I would build next",
        heading: "From marketing performance to commercial attribution",
        body: [
          "The foundations are in. The next stage would connect marketing activity more closely to commercial data as the company's sales activity matures: stronger CRM and marketing data integration, source and campaign attribution, deeper audience segmentation, content performance analysis by audience and intent, more structured lead nurturing, and account based activity where target accounts and buying groups can be clearly identified.",
          "The objective would be to progress from measuring marketing performance towards understanding marketing's contribution to the wider commercial funnel.",
        ],
      },
      {
        kicker: "13 · Tools & tech stack",
        heading: "What the work ran on",
        body: [
          "Analytics: Google Analytics 4, Google Tag Manager, Google Search Console.",
          "Web: WordPress, Elementor Pro.",
          "Content: DaVinci Resolve, Affinity Designer, Adobe InDesign, Canva.",
          "Channels: LinkedIn, YouTube, Google Business Profile.",
          "The tools supported the wider marketing system: creating content, distributing it, measuring performance and keeping FeelTect's external communication consistent.",
        ],
      },
    ],
    results: {
      heading: "What changed",
      summary:
        "The most important outcome was the connection between the parts of the function: strategy informed content, content supported channels, channels generated measurable activity, and measurement created a basis for optimisation.",
      stats: [
        { value: "1,900%", label: "Increase in impressions" },
        { value: "40%", label: "Follower growth" },
        { value: "200%", label: "Increase in digital engagement" },
        { value: "15", label: "Educational videos produced" },
        { value: "1,000+", label: "YouTube views from partners" },
        { value: "1", label: "Marketing and Communications Plan adopted by leadership" },
      ],
      receipts: [
        {
          src: "/work/feeltect-function/linkedin-performance.png",
          alt: "Six-month LinkedIn performance summary: 14,157 impressions up 690%, 473 reactions up 1,531%, 400 new followers up 158%",
          ratio: "aspect-[16/9]",
          caption:
            "The six-month LinkedIn summary presented to leadership. The nine-month figure across channels landed at 1,900% impressions growth, all tracked through the measurement setup from the start of the placement.",
        },
      ],
    },
    nextSlug: "feeltect-website",
  },
  {
    slug: "feeltect-website",
    index: "02",
    tag: "Web / UX / CRO",
    title: "Rebuilding a MedTech website for its first commercial markets",
    intro:
      "Tight Alright became commercially available in Switzerland in October 2025 and in the USA in March 2026. I rebuilt the FeelTect website around the audiences who now needed to understand, trust and act on a complex MedTech proposition.",
    tools: ["WordPress", "Elementor Pro", "Google Analytics 4", "Google Search Console"],
    meta: {
      role: "Marketing Intern, working across marketing, clinical and leadership stakeholders",
      timeline: "September 2025 to June 2026",
      scope: [
        "Information architecture",
        "UX",
        "Conversion rate optimisation",
        "Copywriting",
        "WordPress",
        "Elementor Pro",
        "SEO",
      ],
    },
    atAGlance: {
      project:
        "Rebuilt and expanded the FeelTect website during the company's transition into its first commercial markets, with clearer communication, stronger information architecture and more purposeful user journeys.",
      role: "UX audit, information architecture, content structure, copywriting, website build, CRO and SEO implementation.",
      outputs: [
        "Six pages built and shipped in WordPress and Elementor Pro, no external developer",
        "Information architecture restructured around audience needs",
        "Trust signals integrated at the right points in the journey",
        "Clearer calls to action and conversion pathways",
        "On-page SEO implemented during the build",
        "Cookie consent implemented for GDPR compliance",
        "GA4 and Google Search Console supporting measurement and monitoring",
      ],
      primaryResult: "88% increase in social channel visitors",
    },
    whatILearned: [
      "A website can look professional and still create unnecessary friction. The most important improvements came from asking what the visitor needs to know, what question they are trying to answer, what evidence will earn their trust, and what they should do next.",
      "When a product is difficult to explain, information architecture becomes part of the marketing strategy. The order of the content decides whether someone understands the problem before being asked to understand the technology.",
      "I did not need to be a traditional developer to own the digital experience. With WordPress and Elementor Pro I could carry the work from strategy and content through UI implementation and measurement, which turned the website into commercial marketing infrastructure rather than a digital brochure.",
    ],
    heroImage: {
      src: "/work/feeltect-website/hero-new.png",
      alt: "The rebuilt FeelTect homepage hero: Tight Alright brand illustration with a clear value proposition",
      ratio: "aspect-[12/5]",
      position: "top",
    },
    heroStats: [
      { value: "6", label: "Pages built and shipped" },
      { value: "88%", label: "Increase in social channel visitors" },
    ],
    sections: [
      {
        kicker: "01 · The context",
        heading: "A website that suddenly mattered more",
        body: [
          "FeelTect was moving from an earlier-stage technology proposition into its first commercial markets. Tight Alright became commercially available in Switzerland in October 2025 and in the USA in March 2026, the first markets where the product could actually be purchased.",
          "That changed the website's job. It could no longer simply introduce FeelTect and its technology. It had to help a healthcare professional understand the clinical problem, how Tight Alright works and the evidence behind it, while helping partners and stakeholders see what FeelTect was doing, where it was active and how to engage.",
          "The site had to explain, educate, build credibility, guide and convert, all without overwhelming the visitor. And with no external developer involved, I had to carry the marketing and UX requirements through to practical implementation myself using a no-code workflow.",
        ],
      },
      {
        kicker: "02 · The problem",
        heading: "The website made visitors work too hard",
        body: [
          "The existing website held useful information, but the experience did not make that information easy to find or understand. Important content was not prioritised around the questions a visitor was likely to arrive with, and a specialist clinical proposition was being explained technology-first.",
          "Different audiences arrived with different objectives, yet the pathways for product information, clinical content, events, testimonials, educational material and enquiries were underdeveloped or fragmented. Calls to action and trust signals needed more purposeful placement, and the on-page SEO foundations needed strengthening.",
          "So the response was a restructuring of the digital experience around audience questions and decision-making rather than a visual redesign.",
        ],
        beforeAfter: {
          before: {
            src: "/work/feeltect-website/hero-old.png",
            alt: "The old FeelTect homepage hero: dark stock photo with generic messaging",
          },
          after: {
            src: "/work/feeltect-website/hero-new.png",
            alt: "The rebuilt homepage hero: Tight Alright brand illustration with a clear value proposition",
          },
          caption:
            "Drag the handle. Old homepage on the left, rebuild on the right: clearer value proposition, product-led visual, one obvious next step.",
        },
      },
      {
        kicker: "03 · The audiences",
        heading: "Different visitors arrive with different questions",
        body: [
          "Healthcare professionals need to understand the problem, the product, its clinical relevance and the supporting evidence, so clinical information had to be accessible without burying the core proposition under technical detail. Their journey runs problem, solution, evidence, confidence, action.",
          "Clinical stakeholders and partners care about FeelTect's technology, activity, events and opportunities to engage, which makes broader company and activity content matter beyond a single product page. Investors and business stakeholders arrive with different requirements again, particularly around the company and the commercial opportunity.",
          "That set the key principle behind the rebuild: accommodate different information needs without creating disconnected experiences. The architecture had to help each visitor self-select the information most relevant to them.",
        ],
      },
      {
        kicker: "04 · UX strategy",
        heading: "From company information to visitor journeys",
        body: [
          "I structured the experience around four stages. Awareness: the homepage establishes who FeelTect is, what problem it addresses and what Tight Alright does. Understanding: product, educational and supporting content answer how it works, why it matters and where it is used. Credibility: clinical information, testimonials and trust signals sit inside the journey rather than off to the side. Action: once a visitor has enough information and confidence, the next step is obvious.",
          "The information architecture was expanded and reorganised around what visitors needed to access, with dedicated destinations for product information, events and conferences, testimonials, educational content, careers and conversion-focused enquiries. Every new page had a defined role in the journey.",
          "Navigation was organised around what a visitor would reasonably want to find rather than FeelTect's internal structure, and content consistently followed the sequence problem, solution, explanation, evidence, action. For a complex healthcare proposition, asking someone to understand the technology before the problem creates unnecessary cognitive load.",
        ],
      },
      {
        kicker: "05 · UI and visual design",
        heading: "Making a complex proposition easier to process",
        body: [
          "The interface work served the UX strategy. Headings, sections and supporting content were structured so visitors could scan pages before committing to deeper reading, with important messages, evidence and calls to action given appropriate prominence.",
          "Consistent typography, spacing and section structures created a predictable experience across pages, product and brand imagery made the technology tangible, and reusable Elementor components kept the build consistent. Layouts were adapted across desktop and mobile breakpoints so the information hierarchy held on every screen size.",
          "The visual system supported three priorities: clarity, credibility, conversion.",
        ],
      },
      {
        kicker: "06 · No-code execution",
        heading: "Turning strategy into a functioning website",
        body: [
          "There was no external developer building the pages, so I translated the marketing strategy, UX structure and content requirements into a functioning website myself: WordPress as the CMS, Elementor Pro for layouts and reusable components, GA4 for measurement and Google Search Console for indexing and search visibility.",
          "I developed my Elementor capability early in the placement and used it to build and ship six pages, moving through the complete chain from marketing objective and audience need to UX structure, content, UI execution, build and measurement. I also implemented cookie consent to ensure the website met GDPR requirements before analytics tracking went live.",
        ],
        pullStat: { value: "6", label: "Pages built and shipped without an external developer" },
      },
      {
        kicker: "07 · Content and messaging",
        heading: "The copy became part of the UX",
        body: [
          "The architecture only worked if the content answered the questions visitors were actually trying to solve. Compression therapy is a complex clinical area, so leading with technical product claims would ask visitors to understand the technology before understanding why it matters. The product messaging opens with the underlying problem instead.",
          "One example: you can't optimise what you can't see. From there the product is introduced as the answer, through live pressure tracking during application, continuous monitoring across the treatment cycle and objective data for clinical decision-making. The sequence runs recognise the problem, understand the limitation, meet the solution, understand the value, consider the next step.",
          "The order of the copy was deliberate throughout. Problems came before detailed product explanation, benefits connected to user needs, evidence appeared where it could support credibility, and CTAs followed sufficient context.",
        ],
      },
      {
        kicker: "08 · Conversion and CRO",
        heading: "Designing for meaningful next steps",
        body: [
          "CRO here meant understanding where a visitor might need extra information or reassurance and providing an appropriate next step, with trust signals positioned inside the journey to reinforce what was being presented.",
          "The clearest example is the standalone landing page for the Tight Alright peer-to-peer clinical immersion programme. Rather than routing visitors through the general website, the page created a focused experience running programme value, testimonial, action, form, which cut unnecessary navigation and gave visitors a clean path to the intended action.",
          "I do not claim a specific conversion uplift from this work, because sufficient downstream conversion data was not available to establish one.",
        ],
        images: [
          {
            src: "/work/feeltect-website/landing-page.png",
            alt: "Conversion landing page for the Tight Alright peer-to-peer clinical immersion programme",
            ratio: "aspect-[1200/1368]",
            position: "top",
            caption:
              "The standalone landing page: programme value, testimonial, one action, one form.",
          },
        ],
      },
      {
        kicker: "09 · SEO and discoverability",
        heading: "Making information easier to find",
        body: [
          "SEO went in while the pages were being built: heading hierarchy, metadata, image alt text, internal linking, page structure and content organisation. Google Search Console monitored indexing and showed which queries the website surfaced for.",
          "This mattered as FeelTect entered commercial markets. The website had to communicate well once someone arrived, and it also had to be discoverable by the audiences searching for the information in the first place. I have not claimed a specific ranking improvement, because I do not have the evidence to attribute one directly to the rebuild.",
        ],
      },
      {
        kicker: "10 · Measurement",
        heading: "A measurement foundation under the experience",
        body: [
          "GA4 tracked the website while Google Search Console covered search performance and indexing, creating visibility across traffic, engagement, acquisition sources, page performance and search queries.",
          "One documented outcome during the project period was an 88% increase in social channel visitors. The website operated alongside FeelTect's wider social, content and marketing activity, so I present that figure as a wider digital marketing indicator and make no claim that the rebuild alone caused it.",
        ],
        pullStat: { value: "88%", label: "Increase in social channel visitors during the project period" },
      },
      {
        kicker: "11 · The pages",
        heading: "Six pages built and shipped",
        body: [
          "The build produced a homepage with a clearer product-led entry point, a dedicated events and conferences destination, a careers page the site never had, a home for the 15-episode educational video series, a testimonials page carrying clinical trust signals, and a focused conversion landing page for the clinical immersion programme.",
          "Screenshots flatten a website, so these are screen recordings of the pages as they shipped. Judge the scroll rhythm, the information order and where the trust signals landed.",
        ],
        fullWidthVideos: true,
        videos: [
          {
            src: "/work/feeltect-website/video-home.mp4",
            poster: "/work/feeltect-website/hero-new.png",
            label: "Screen recording walking through the rebuilt FeelTect homepage",
            caption: "Start here: the rebuilt homepage, walked through top to bottom.",
            ratio: "aspect-[12/5]",
          },
          {
            src: "/work/feeltect-website/video-events.mp4",
            poster: "/work/feeltect-website/poster-events.jpg",
            label: "Walkthrough of the events and conferences page",
            caption: "Events and conferences. Built so partners can see where FeelTect shows up next.",
            ratio: "aspect-[12/5]",
          },
          {
            src: "/work/feeltect-website/video-jobs.mp4",
            poster: "/work/feeltect-website/poster-jobs.png",
            label: "Walkthrough of the careers page",
            caption: "Careers. A hiring page the company did not have before.",
            ratio: "aspect-[1600/540]",
          },
          {
            src: "/work/feeltect-website/video-how-to.mp4",
            poster: "/work/feeltect-website/video-how-to-poster.jpg",
            label: "Walkthrough of the how-to video series page",
            caption: "The how-to series page, where the 15-episode video series lives.",
            ratio: "aspect-[12/5]",
          },
          {
            src: "/work/feeltect-website/video-testimonials.mp4",
            poster: "/work/feeltect-website/video-testimonials-poster.jpg",
            label: "Walkthrough of the testimonials page",
            caption: "Testimonials. Clinical trust signals, placed where the journey needed them.",
            ratio: "aspect-[12/5]",
          },
        ],
      },
      {
        kicker: "12 · Tools & tech stack",
        heading: "What the work ran on",
        body: [
          "Web: WordPress, Elementor Pro.",
          "Measurement: Google Analytics 4, Google Search Console.",
          "Content and creative: copywriting in-house, imagery from the FeelTect brand system.",
        ],
      },
    ],
    results: {
      heading: "What changed",
      summary:
        "Information structured around audience needs, journeys with purpose, trust signals inside the experience, SEO in the foundations, and a website ready for a company selling in real markets.",
      stats: [
        { value: "6", label: "Pages built and shipped" },
        { value: "0", label: "External developers required" },
        { value: "88%", label: "Increase in social channel visitors" },
      ],
    },
    nextSlug: "ewma",
  },
  {
    slug: "ewma",
    index: "03",
    tag: "Event marketing / Brand activation / Content",
    title: "FeelTect at EWMA",
    intro:
      "EWMA put FeelTect in front of a highly relevant clinical audience. My job was to turn the conference from a standalone event into a connected marketing campaign spanning pre-event awareness, on-site brand activation and post-event content.",
    tools: ["Adobe InDesign", "Affinity Designer", "Canva", "LinkedIn", "YouTube"],
    meta: {
      role: "Marketing Intern, coordinating activity across the FeelTect team",
      timeline: "Delivered during the FeelTect placement",
      scope: [
        "Event marketing",
        "Brand activation",
        "Campaign planning",
        "Stand and creative",
        "Clinical content",
        "Social media",
        "Supplier coordination",
      ],
    },
    atAGlance: {
      project:
        "Full-cycle event marketing for an international wound care conference, planned across three connected stages: before, during and after.",
      role: "Campaign planning, stand creative, bilingual clinical materials, competition activation, social content, stakeholder and supplier coordination.",
      outputs: [
        "Exhibition stand creative and messaging",
        "Bilingual clinical materials in English and German",
        "The FeelTect International Bandaging Competition",
        "Social campaign around FeelTect's presence at EWMA",
        "Reusable content generated from the event",
      ],
      primaryResult: "3 connected campaign stages",
    },
    whatILearned: [
      "Effective B2B event marketing starts well before the exhibition opens. The stand is the visible part, but the strategic value comes from everything connected to it: plan the audience, define the message, build anticipation, create an experience, capture content, extend the conversation digitally.",
      "Cross-functional communication is everything in MedTech. The marketer needs to understand enough of the underlying clinical subject to turn specialist knowledge into communication that is accurate, useful and engaging.",
      "The experience changed how I think about events. An industry conference should be treated as a marketing touchpoint inside a much longer customer and brand journey, rather than three days of activity.",
    ],
    heroStats: [
      { value: "3", label: "Connected campaign stages" },
      { value: "2", label: "Languages of clinical materials" },
      { value: "1", label: "International Bandaging Competition" },
    ],
    sections: [
      {
        kicker: "01 · The context",
        heading: "Making an international event work harder",
        body: [
          "For an early-stage MedTech company, an international industry conference is a concentrated opportunity to put the brand, product and expertise in front of a highly relevant professional audience.",
          "The challenge was to make the most of FeelTect's presence at EWMA by creating activity around the event, instead of treating the stand as the entire campaign. I approached the work across three connected stages: before, during and after. Build awareness first, create an engaging experience on the stand, then extend the value of the event through content and digital activity afterwards.",
        ],
      },
      {
        kicker: "02 · The marketing challenge",
        heading: "From conference attendance to meaningful brand engagement",
        body: [
          "The event carried several wider marketing objectives at once. FeelTect needed to increase visibility among relevant wound care professionals, communicate the Tight Alright proposition clearly, present the brand credibly in a clinical environment, give people a reason to engage with the stand, translate complex clinical information into accessible communications, and generate content that could outlast the physical event.",
          "That meant moving past the question of what the stand needed, and asking instead how every part of the event could contribute to the wider marketing experience.",
        ],
      },
      {
        kicker: "03 · The audience",
        heading: "Communicating with a specialist clinical audience",
        body: [
          "EWMA brought together exactly the professional audience FeelTect needed. The communications had to work within a clinical context while staying accessible enough to capture attention in a busy exhibition hall.",
          "A visitor had to be able to understand quickly what problem Tight Alright addresses, what the technology does, why it is clinically relevant and why they should engage further. That shaped both the event messaging and how information was presented across physical and digital content.",
        ],
      },
      {
        kicker: "04 · Before",
        heading: "The campaign started before people arrived",
        body: [
          "The stand creative had to communicate the Tight Alright proposition quickly in a crowded conference setting, so the messaging focused on the clinical problem and the value of defined pressure rather than technical product terminology.",
          "Clinical materials were produced in English and German, reflecting the international audience. The German creative was designed to work naturally in context rather than being run through a translator, because a translated poster reads like one.",
          "Social content built digital visibility around FeelTect's presence before the doors opened, connecting the physical event with the company's wider content activity. The principle was simple: the campaign should reach the visitor before the stand does.",
        ],
        images: [
          {
            src: "/work/ewma/banner-pullup.png",
            alt: "Pull-up banner for the EWMA stand: get compression therapy right, every time, defined pressure not blind pressure",
            ratio: "aspect-[1500/3707]",
            caption: "The pull-up banner beside the stand. Defined pressure rather than blind application.",
          },
          {
            src: "/work/ewma/banner-german.png",
            alt: "German-language Tight Alright banner: Kompressionstherapie richtig anwenden, jedes Mal",
            ratio: "aspect-[390/555]",
            caption: "The bilingual work in practice: campaign creative rebuilt in German for the host market.",
          },
        ],
      },
      {
        kicker: "05 · During",
        heading: "Turning the stand into an experience",
        body: [
          "The centrepiece was the FeelTect International Bandaging Competition, which let visitors experience the Tight Alright technology instead of being told about it. The mechanic was straightforward: guess the pressure, apply the bandage, see the actual pressure on the device.",
          "That gave the stand a focal point and made the technology part of the conversation. The supporting creative was built around a simple three-step mechanic so visitors could understand the activity at a glance, and I designed the competition materials, including the two-sided poster explaining how to take part.",
          "The activation had a marketing role beyond entertainment. It made tangible exactly what separates Tight Alright from standard compression practice.",
        ],
        images: [
          {
            src: "/work/ewma/poster-back.png",
            alt: "Bandaging Competition poster: how to play in three steps, guess, wrap, monitor",
            ratio: "aspect-[565/800]",
            caption: "Competition poster. The mechanic: guess your pressures, wrap, check.",
          },
        ],
      },
      {
        kicker: "06 · Content and creative",
        heading: "Complex clinical information, communicated quickly",
        body: [
          "The event needed materials that worked in a high-traffic environment, balancing clinical credibility with visual simplicity. The creative system covered exhibition stand graphics, pull-up banners, competition posters, English and German clinical materials, social content and product-focused communications.",
          "Everything returned to the central Tight Alright proposition: defined pressure rather than blind application. The physical materials created the visual language through which the product could be understood in a busy professional environment.",
        ],
      },
      {
        kicker: "07 · After",
        heading: "The conference did not end when the doors closed",
        body: [
          "Social content communicated FeelTect's presence around EWMA, and the event itself produced material that continued to be used well beyond the conference: photography, competition content and clinical conversations feeding back into the wider content system.",
          "That connected event, content, social, website and ongoing brand visibility, and turned the conference into a source of reusable marketing content.",
        ],
      },
      {
        kicker: "08 · Cross-functional execution",
        heading: "Marketing in a specialist environment",
        body: [
          "As the solo marketing lead I worked directly with the founders, CEO, clinical team and engineering team to turn specialist knowledge into usable marketing communications. The challenge was usually translation: clinical and engineering colleagues think in evidence, technology and technical detail, and marketing has to turn that into communication a wider audience can absorb quickly.",
          "That mattered doubly for the event, because the same proposition had to hold across stand graphics, clinical materials, social content and live demonstrations.",
        ],
      },
      {
        kicker: "09 · Beyond the creative",
        heading: "Managing the practical side of delivery",
        body: [
          "Working solo also meant owning the operational side of the campaign: coordinating external suppliers, making sure materials and creative arrived for the event, and introducing more structure around external creative work, with clearer expectations on deliverables and timelines.",
          "The experience reinforced that event marketing needs both strategic thinking and operational discipline. A strong concept only counts if it can be delivered to the required standard and deadline.",
        ],
      },
      {
        kicker: "10 · Tools & tech stack",
        heading: "What the work ran on",
        body: [
          "Creative: Adobe InDesign, Affinity Designer, Canva.",
          "Channels: LinkedIn, YouTube and FeelTect's wider social presence.",
          "Delivery: supplier coordination and print production for the stand and clinical materials.",
        ],
      },
    ],
    results: {
      heading: "What happened",
      summary:
        "A stronger connection between FeelTect's physical event presence and its wider marketing: greater visibility at an important international event, an engaging brand experience, bilingual clinical communications and reusable content. Where direct commercial attribution is unavailable, I have not attributed revenue or pipeline outcomes to the event.",
      stats: [
        { value: "3", label: "Connected campaign stages planned and delivered" },
        { value: "2", label: "Languages of clinical materials produced" },
        { value: "1", label: "International Bandaging Competition activation" },
      ],
    },
    nextSlug: "athlones-finest",
  },
  {
    slug: "athlones-finest",
    index: "04",
    tag: "Brand / Growth / Events / Community",
    title: "Athlone's Finest: a consumer sports brand from a blank page",
    intro:
      "I founded Athlone's Finest in 2023 because I had waited years for a summer football tournament in Athlone for people my age, and it never came back. So I built it. Four years later it is a recognised local sports property with 400+ players, 12 teams, six sponsors, 467% ROAS on paid acquisition and coverage in the Westmeath Independent.",
    tools: [
      "Meta Ads Manager",
      "Meta Business Suite",
      "Instagram Insights",
      "Google Analytics 4",
      "Google Tag Manager",
      "Claude Code",
      "DaVinci Resolve",
      "CapCut",
    ],
    meta: {
      role: "Founder & Marketing Lead",
      timeline: "May 2023 to present",
      scope: [
        "Consumer research",
        "Brand building",
        "Organic content",
        "Paid acquisition",
        "Events",
        "Partnerships",
        "Retention",
      ],
    },
    atAGlance: {
      project:
        "A recurring consumer sports brand, community and event platform built from nothing across four years of tournaments.",
      role: "Founder and marketing lead. Research, brand, content, paid media, sponsorship, event delivery, retention.",
      outputs: [
        "400+ players across four years, 12 teams in 2026",
        "467% ROAS from the 2026 two-week paid acquisition campaign",
        "50% repeat team participation across consecutive editions",
        "A record six sponsors in 2026",
        "athlonesfinest.com, built with Claude Code, now the third-ranked six-a-side website in Ireland",
        "Coverage in the Westmeath Independent",
      ],
      primaryResult: "467% return on ad spend",
    },
    whatILearned: [
      "Consumer insight beats assumptions, because the audience quickly exposes what it actually values. Attention and demand are different things too: the 1v1 tournament drew sponsors and spectators but never overcame the psychological barrier to signing up.",
      "Creative performance matters more than creative ego. Real match footage could outperform more polished promotional work because it showed the audience the experience itself. And brand building compounds: the audience from the early years became the retargeting pool, the acquisition asset and the sponsorship story of the later ones.",
      "The customer experience is marketing. Weather, referees, pitch quality, communication and atmosphere all decide whether someone trusts the brand enough to come back. And growth eventually needs infrastructure: by 2026 the constraint was no longer my marketing, it was how much one person can sustainably run.",
    ],
    heroImage: {
      src: "/work/athlones-finest/hero-match.jpg",
      alt: "Athlone's Finest players in yellow kit taking on a defender in front of the watching crowd",
      ratio: "aspect-[16/9]",
    },
    heroStats: [
      { value: "467%", label: "Return on ad spend (2026)" },
      { value: "400+", label: "Players across four years" },
      { value: "12", label: "Teams in 2026, the biggest edition yet" },
      { value: "6", label: "Sponsors in 2026, a record" },
    ],
    sections: [
      {
        kicker: "01 · The challenge",
        heading: "Convincing people to trust a brand that did not exist",
        body: [
          "The initial marketing problem was bigger than promoting a football tournament. There was no established brand, no track record, no community and no reason for teams to trust that the event would be worth their time.",
          "I started with market and consumer research into what people wanted from a local tournament and what might stop them entering, then worked with external vendors to secure the pitch and produce the first promotional materials. Within a few weeks the data showed my initial target audience was not converting strongly enough, so I changed the approach and expanded into different audiences through Facebook advertising instead of pushing the same message harder.",
          "At 2am on the morning of the first tournament, the final team registered. Eight teams, one tournament, and a brand had officially started. That became the operating pattern for everything after: launch, observe behaviour, identify friction, adapt.",
        ],
      },
      {
        kicker: "02 · Understanding the consumer",
        heading: "Football was the category. Community was the product.",
        body: [
          "Liking football only got someone halfway to entering. Participants had to be motivated enough to coordinate a group of friends, pay to enter and actually show up on the day, so the proposition needed to offer more than the sport itself.",
          "Through conversations, participation patterns and campaign performance, the strongest motivations kept coming back to competition, the social experience of doing something locally with friends, atmosphere on the day, credibility (especially in year one, with no track record), and low friction, because team registration creates a strange consumer problem: the person registering may be sold, but seven other players still have to commit.",
          "A campaign could generate attention and registrations without guaranteeing that eight players turned up. That pushed my thinking beyond acquisition and across the whole journey: attention, interest, registration, commitment, attendance, experience, return.",
        ],
      },
      {
        kicker: "03 · The strategy",
        heading: "Build the brand and audience before maximising acquisition",
        body: [
          "I deliberately never treated a tournament as an isolated campaign. Each year became another stage of the same consumer growth strategy. 2023 established the brand and tested demand. 2024 strengthened the proposition while teaching me how experience and operational friction affect trust and repeat participation. 2025 used accumulated audience knowledge to improve acquisition, creative and conversion. 2026 deepened customer understanding, strengthened retention and expanded beyond the immediate local market.",
          "The audience built in the earlier years never disappeared when a tournament ended. It became an asset I could re-engage, retarget and convert in future campaigns, which is exactly what made the later paid results possible.",
        ],
      },
      {
        kicker: "04 · 2023, creating the brand",
        heading: "From an idea to eight teams",
        body: [
          "Year one had to prove the concept could work. I developed the initial brand and promotional approach, conducted the research, worked with vendors on event infrastructure and launched promotion. When the first targeting underperformed I adapted the audience strategy rather than letting the campaign stall.",
          "After weeks of promotion and paid activity, the final team registered at 2am on tournament day. The first event validated the proposition, and it produced something advertising cannot buy: a real community of participants and the beginnings of a brand people recognised.",
        ],
      },
      {
        kicker: "05 · 2024, learning through friction",
        heading: "The experience became part of the marketing",
        body: [
          "Year two was meant to be expansion, with an ambition to run two tournaments. Weather delays and a run of operational problems meant only one went ahead. The pitch configuration changed for seven-a-side, the vendor painted the markings too small, the toilets were out, the rain came, referees failed to show, and three teams no-showed. The event still went ahead: games and goals, tensions rising, controversial calls, and the previous year's champions winning again with a completely different squad.",
          "That year taught me a consumer marketing lesson I have carried since: the product experience is part of the brand. A strong campaign gets someone to register once. A poor experience decides whether they come back.",
          "Despite the chaos, four of the eight teams from the previous year returned. That 50% returning team rate was an early retention signal worth more than any single acquisition number: evidence that some customers were choosing the brand again.",
        ],
        images: [
          {
            src: "/work/athlones-finest/poster-5ives-2024.jpg",
            alt: "Poster for the 2024 5IVES seven-aside tournament at Pioneer's FC, Athlone",
            ratio: "aspect-[540/764]",
            position: "top",
            caption: "The 2024 edition poster. Murphy's law year: everything that could go wrong did, and the show still went on.",
          },
          {
            src: "/work/athlones-finest/trophy-celebration.jpg",
            alt: "Winning team celebrating with the trophy after the six-aside tournament",
            ratio: "aspect-[3/4]",
            caption: "The trophy lift: the moment the whole campaign is selling.",
          },
        ],
      },
      {
        kicker: "06 · 2025, experimentation and adaptation",
        heading: "Attention does not automatically create demand",
        body: [
          "By year three I knew the brand needed to evolve. I moved back to the astro pitch, changed the identity to Athlone's Finest, produced new promotional material and started experimenting with AI-generated video, video advertising and emerging social formats. Some of it went locally viral.",
          "I also followed a market trend into a 1v1 football tournament, with an influencer partner attached. It generated interest from sponsors, spectators and a local vendor, but player registrations stayed weak. Conversations with potential participants surfaced a psychological barrier: 1v1 football is notorious for people being embarrassed on camera, and everyone I spoke to saw themselves as the one about to be embarrassed. The influencer also posted two days before the event instead of the agreed three weeks, having absorbed most of the budget. Two lessons, learned properly: always have a backup, and always test a trend against local behaviour before spending on it.",
          "Rather than keep spending on a weak proposition, I redirected everything into the five-a-side the following week, applied the learnings and increased the advertising. The campaign came in at EUR 8.13 cost per lead, 15 teams signed up, the most to that point, and eight showed up on the day, with the gap driven by the team-commitment friction and a few people getting the location wrong. Four of those eight teams returned the following year, holding the 50% repeat rate.",
        ],
        pullStat: { value: "€8.13", label: "Cost per lead on the 2025 five-a-side campaign" },
        videos: [
          {
            src: "/work/athlones-finest/video-tournament.mp4",
            poster: "/work/athlones-finest/video-tournament-poster.jpg",
            label: "Promotional film for the 2025 six-aside charity tournament",
            caption: "The tournament film, cut for a vertical-first build-up campaign that passed 40,000 views.",
            ratio: "aspect-[9/16]",
            portrait: true,
          },
          {
            src: "/work/athlones-finest/video-veo-gorilla.mp4",
            poster: "/work/athlones-finest/video-veo-gorilla-poster.jpg",
            label: "AI-generated gorilla video made with Google Veo 3 for the Meta campaign",
            caption: "Veo 3 clip one. Absurd on purpose: thumb-stopping creative for the awareness phase.",
          },
          {
            src: "/work/athlones-finest/video-veo-rte.mp4",
            poster: "/work/athlones-finest/video-veo-rte-poster.jpg",
            label: "AI-generated news-bulletin style video made with Google Veo 3",
            caption: "Veo 3 clip two. A fake news-bulletin format that made the tournament feel like an event.",
          },
        ],
        images: [
          {
            src: "/work/athlones-finest/winners-2025.jpg",
            alt: "2025 tournament winners with medals and trophy",
            ratio: "aspect-[16/10]",
            caption: "2025 winners. The format proved itself; the brand made them want to come back.",
          },
        ],
      },
      {
        kicker: "07 · Creative strategy",
        heading: "Creative built around behaviour",
        body: [
          "My creative work has always served the marketing objective. Campaign graphics, promotional videos, social content and brand assets were all designed around the behaviour of a young, locally connected sports audience, built on three principles: authenticity, using real match footage so potential participants could see the actual experience; shareability, because team participation is inherently social and the content had to be worth sending to friends; and attention, experimenting with unconventional formats, including AI video, to break through crowded feeds.",
          "The strongest lesson came from creative testing. Polished promotional content did not automatically outperform simple match footage shot on a phone at pitchside. The real footage often held attention longer because it showed the atmosphere instead of describing it. That changed my creative decision-making from asking whether something looked good to asking whether this audience would stop, share and act on it.",
        ],
        images: [
          {
            src: "/work/athlones-finest/match-battle.jpg",
            alt: "Match action from an Athlone's Finest game, players challenging for the ball in front of the goal",
            ratio: "aspect-[3/2]",
            caption: "The content that travels: real match footage, cut for TikTok and Instagram.",
          },
        ],
      },
      {
        kicker: "08 · Channels and distribution",
        heading: "Each channel with a role in the journey",
        body: [
          "Organic social built familiarity and community through match footage, short form video and ongoing engagement, growing to 36,000+ monthly organic impressions. Paid social added reach and accelerated registrations when organic demand alone fell short, passing 150,000 paid Meta views. Retargeting re-engaged people who already knew the brand instead of paying to introduce it from scratch.",
          "Events converted digital attention into a physical experience worth talking about. Partnerships and sponsorships extended the brand into the local community while improving the event's value proposition. And press added earned credibility, with the 2026 tournament covered by the Westmeath Independent. Together the channels worked as one interconnected system.",
        ],
        links: [
          {
            label: "Read the coverage in the Westmeath Independent",
            href: "https://www.westmeathindependent.ie/2026/08/05/athlones-finest-six-a-side-returns/",
          },
        ],
      },
      {
        kicker: "09 · 2026, turning audience into growth",
        heading: "From local tournament to a stronger consumer brand",
        body: [
          "By 2026 the question had changed from whether people would attend to who the most valuable audience was, why previous participants returned, what stopped others, and how the brand could travel beyond its original catchment. I ran a deeper review of the audience and customers, reassessed the ideal customer profile, and drafted and iterated athlonesfinest.com around what I learned.",
          "The website was built with Claude Code, written as code from scratch instead of assembled in WordPress, with Google Analytics 4 and Google Tag Manager implemented and on-page SEO built in. It now ranks as the third six-a-side website in Ireland, which means the brand gets found through search as well as social.",
          "I also recognised that the operation itself was becoming the constraint. Marketing, content, the website, sponsorship, stakeholder management and event delivery were getting hard to run alone, so the strategy shifted from doing more to building a more scalable system, including bringing in help on the day: real referees, bigger prizes, proper food vendors and a bigger team. The impact showed. Teams travelled from outside Athlone for the first time, including from Limerick and Dublin, and the tournament reached 12 teams, the largest edition to date, with a record six sponsors, including local restaurants offering prizes worth over EUR 100.",
        ],
        fullWidthVideos: true,
        videos: [
          {
            src: "/work/athlones-finest/video-creative-main.mp4",
            poster: "/work/athlones-finest/poster-2026.jpg",
            label: "Main creative video for the 2026 Athlone's Finest campaign",
            caption: "The main creative for 2026: atmosphere, competition and community in one film.",
          },
          {
            src: "/work/athlones-finest/video-creative-short.mp4",
            poster: "/work/athlones-finest/poster-2026.jpg",
            label: "Short creative cut for the 2026 campaign",
            caption: "The short cut, built for feed placement and paid distribution.",
          },
        ],
        images: [
          {
            src: "/work/athlones-finest/poster-2026.jpg",
            alt: "2026 Athlone's Finest six-a-side tournament poster",
            ratio: "aspect-[4/5]",
            position: "top",
            caption: "The 2026 poster. ATL Entertainment partnership, bigger prize, bigger ambition.",
          },
          {
            src: "/work/athlones-finest/winners-2026.jpg",
            alt: "2026 tournament winners holding the cup and giant cheque",
            ratio: "aspect-[16/10]",
            caption: "2026 winners. Cup, cheque, and the brand they registered for on a screen three weeks earlier.",
          },
          {
            src: "/work/athlones-finest/best-player.jpg",
            alt: "Best player award presentation at the 2026 tournament",
            ratio: "aspect-[3/4]",
            caption: "Best player. Individual recognition built into the event format.",
          },
          {
            src: "/work/athlones-finest/sponsor-presentation.jpg",
            alt: "Niall presenting a prize to the player of the tournament",
            ratio: "aspect-[3/4]",
            caption: "Player of the tournament, with the prize envelope and the brand behind it.",
          },
        ],
      },
      {
        kicker: "10 · Retention and community",
        heading: "Building a reason to come back",
        body: [
          "Rather than treating every tournament as a fresh acquisition problem, I used previous participation as customer insight. The first clear signal came in 2024, when four of eight teams returned, and the same four-of-eight pattern held again in 2025: a 50% repeat team participation rate across the relevant returning cohorts.",
          "The numbers also exposed the journey's weakest link. Registered teams and match-day teams were different lists, with team coordination, player commitment and even people getting the location wrong creating friction between intent and attendance.",
          "In 2026 I used more detailed messaging strategies aimed at reconnecting with previous participants and making key people feel personally attached to the brand, including teams who had skipped a year. The shift in the brand's voice says it best: the question moved from asking whether you want to enter our tournament, to reminding you that you are already part of Athlone's Finest.",
        ],
      },
      {
        kicker: "11 · Paid acquisition",
        heading: "467% ROAS from audience, creative and optimisation",
        body: [
          "The 2026 acquisition campaign ran for two weeks before the tournament and generated EUR 700.70 in gross registration revenue attributed to the campaign, producing a 467% ROAS: roughly EUR 4.67 back for every EUR 1 attributed to advertising.",
          "That result never stood alone. The campaign drew on the audience, brand familiarity and content infrastructure built across the previous three years, combining creative testing, audience targeting, a content calendar and retargeting to move people from awareness to registration. The commercial principle it demonstrated: a previously developed audience becomes an acquisition asset that makes future conversion cheaper.",
          "I also modelled customer lifetime value from average customer value and average customer lifespan, producing a 4.1 CLTV figure under the project's customer economics model. That kept my thinking on the longer-term value of acquiring and retaining participants rather than a single registration.",
        ],
        pullStat: { value: "467%", label: "Return on ad spend, 2026 campaign" },
      },
      {
        kicker: "12 · Experimentation",
        heading: "Testing, learning and changing course",
        body: [
          "One of the most useful experiments came from a targeting glitch. A Meta campaign built for the local market accidentally went worldwide, and within six hours an ad on a EUR 10 daily budget generated three leads, with people as far away as Uganda signing up.",
          "Global targeting was useless for a local tournament, but the anomaly said something about the creative. An ad I had written off as underperforming generated disproportionate engagement once it met a broader audience, which means creative and audience have to be diagnosed separately when reading results. With a larger budget I would turn that anomaly into structured testing, deliberately isolating creative, audience and proposition variables.",
        ],
      },
      {
        kicker: "13 · Commercial impact",
        heading: "Brand, acquisition and retention feed each other",
        body: [
          "The commercial value developed in stages: prove demand, then repeat participation, then efficient acquisition, then commercial partnerships. By 2026 the brand had an audience that could support registrations, sponsorship conversations and expansion at the same time.",
          "The record six sponsors showed local businesses saw value in reaching the Athlone's Finest audience. The 467% ROAS showed paid activity generating a measurable return from that audience. The repeat participation data showed the brand bringing customers back rather than renting attention. And teams travelling from Limerick and Dublin showed the proposition beginning to move beyond its original geography.",
          "The lesson underneath all of it: a stronger brand creates a stronger audience, a stronger audience improves acquisition, a good customer experience creates repeat participation, and repeat customers strengthen the economics of every future campaign.",
        ],
        images: [
          {
            src: "/work/athlones-finest/sponsor-coffee.jpg",
            alt: "Grind & Dose coffee cart serving at an Athlone's Finest event",
            ratio: "aspect-[1047/1600]",
            caption: "Sponsorship made visible: Grind & Dose pouring at the tournament.",
          },
          {
            src: "/work/athlones-finest/poster-6-aside.jpg",
            alt: "Poster for the six-aside charity tournament at Willow Park FC Stadium",
            ratio: "aspect-[1400/2164]",
            position: "top",
            caption: "Consumer event print with one job: get people to turn up.",
          },
        ],
      },
      {
        kicker: "14 · What I would do next",
        heading: "A grassroots football platform",
        body: [
          "With a larger budget and national ambition, I would develop Athlone's Finest into a broader grassroots football platform. First, a formal customer lifecycle separating awareness, consideration, registration, attendance and repeat participation, so each stage can be measured and optimised on its own. Second, formalised creative testing around hooks, formats, propositions and audience segments, building a repeatable learning system instead of campaign-by-campaign experimentation.",
          "Third, a deeper retention programme using participant history for personalised communication, early access and incentives for previous teams. And finally, a small team around the project, because four years of running it taught me that sustainable consumer growth needs a brand people recognise, an audience you understand, an experience they value and a system that gives them reasons to come back.",
        ],
      },
      {
        kicker: "15 · Tools & tech stack",
        heading: "What the work ran on",
        body: [
          "Paid and analytics: Meta Ads Manager, Meta Business Suite, Instagram Insights, Google Analytics 4, Google Tag Manager.",
          "Web: athlonesfinest.com, built with Claude Code, with on-page SEO and GA4 and GTM measurement.",
          "Content: Google Veo and Higgsfield for AI video experiments, short form video and match footage cut for TikTok, Instagram and Facebook.",
        ],
      },
    ],
    results: {
      heading: "What happened",
      summary:
        "From one idea to a compounding consumer brand: sustained participation, repeat customers, efficient paid acquisition, record sponsorship and earned press, all built on an audience developed year over year.",
      stats: [
        { value: "467%", label: "ROAS on the 2026 campaign, EUR 700.70 gross attributed revenue" },
        { value: "€8.13", label: "Cost per lead, 2025 five-a-side campaign" },
        { value: "400+", label: "Players across four years" },
        { value: "50%", label: "Repeat team participation across consecutive editions" },
        { value: "12", label: "Teams in 2026, with entries from Limerick and Dublin" },
        { value: "6", label: "Sponsors in 2026, a record" },
        { value: "150,000+", label: "Paid Meta views" },
        { value: "36,000+", label: "Monthly organic impressions" },
        { value: "3rd", label: "Ranked six-a-side website in Ireland: athlonesfinest.com" },
      ],
    },
    nextSlug: "kombucha",
  },
  {
    slug: "kombucha",
    index: "05",
    tag: "Product marketing / Strategy / Positioning",
    title: "400+ stockists and nobody knew what it was for",
    intro:
      "An MSc Marketing Practice module project: the targets in it are proposed objectives, not measured outcomes. All About Kombucha had a strong product, a distinctive brand and national distribution in 400+ outlets, and shoppers still could not say what it was for.",
    tools: ["Google Analytics 4"],
    meta: {
      role: "Marketing strategy lead on the project team",
      timeline: "MSc Marketing Practice, University of Galway",
      scope: ["Market research", "Positioning", "Marketing strategy", "Lifecycle", "CLTV modelling"],
    },
    atAGlance: {
      project:
        "MSc Marketing Practice module project: a marketing strategy for a kombucha brand with national distribution but low comprehension.",
      role: "Marketing strategy lead on the project team.",
      outputs: [
        "Consumer research and positioning diagnosis",
        "Three personas built from primary and secondary research",
        "Integrated marketing plan with four workstreams",
        "CLTV-based subscription model with phased roadmap",
      ],
      primaryResult: "Full strategy delivered: repositioning argument, integrated plan, subscription model and phased roadmap",
    },
    whatILearned: [
      "The brief you are given is rarely the brief you should solve. The obvious ask was more distribution, while the evidence said the barrier was comprehension. Reframing the problem before building the plan changes the quality of everything that follows.",
    ],
    heroStats: [
      { value: "400+", label: "Retail outlets already stocked" },
      { value: "3", label: "Core personas built from research" },
      { value: "2x", label: "Proposed subscription sales target, six months" },
    ],
    sections: [
      {
        kicker: "01 · The diagnosis",
        heading: "The real constraint was comprehension",
        body: [
          "The obvious answer was more listings and more promotion, but the evidence pointed elsewhere. The product already sat on shelves in over 400 outlets, and the rate of sale was the problem rather than the availability. Consumer research kept surfacing the same thing: people did not understand what kombucha was, when they would drink it, or what it replaced in their week.",
          "If the barrier is comprehension, more distribution just puts the same confusing bottle in front of more people. I called the strategy 'The Booch Reboot': build understanding, build cultural relevance, then convert that into subscribers, because a daily wellness habit is worth more than a single sale.",
        ],
      },
      {
        kicker: "02 · The audience",
        heading: "Three personas, one shared want",
        body: [
          "The target was young professionals aged 23 to 35 in Ireland who care about wellness, fitness and staying on top of trends, and I built that out into three personas to keep the plan honest about who it was for: Jacob, a yoga instructor who values transparency and gut health; John, a finance professional who needs simple, effective solutions that fit a fast-paced life; and Gráinne, a marketing professional who wants healthy products that still feel socially relevant.",
          "Across all three, the same insight held: nobody wants just a drink. They want something that fits their routine, their identity and their lifestyle. That reframed the positioning: All About is the modern Irish wellness brand for people who want to feel good, without sacrificing lifestyle. A daily lifestyle drink rather than a niche health product. That is the opportunity.",
        ],
        images: [
          {
            src: "/work/kombucha/positioning.svg",
            alt: "Diagram: repositioning from niche health product competing with supplements, to everyday wellness drink competing with soft drinks, with the four marketing workstreams beneath",
            ratio: "aspect-[16/10]",
            caption: "The repositioning argument, and the workstreams built underneath it.",
          },
        ],
      },
      {
        kicker: "03 · The marketing plan",
        heading: "Four fixes, then scale",
        body: [
          "Before scale, the plan fixed the foundation. Messaging simplified to three pillars: gut health, low-sugar alternative, daily wellness habit. Brand alignment brought the kombucha cans and the prebiotic sodas, which read as two different brands, into one visual identity and one voice. Website optimisation added a kombucha education hub answering the questions people were already searching, with a structured SEO funnel: awareness keywords like 'what is kombucha' at the top, consideration keywords like 'kombucha after workout' in the middle, conversion keywords like 'kombucha subscription Ireland' at the bottom.",
          "Social ran on a 40/30/20/10 content model: 40% education, 30% lifestyle, 20% user-generated content, 10% conversion, so the channel had a structured route from awareness to action rather than a feed of promotional posts.",
        ],
      },
      {
        kicker: "04 · The awareness campaign",
        heading: "The All About Retreat, a proposed concept",
        body: [
          "Once the foundation was fixed, the plan shifted from clarity to scale, through culture rather than advertising. I proposed The All About Retreat: an immersive, culturally rooted weekend on the Aran Islands blending wellness, adventure and social connection. Sea swims, cycling and yoga by day; communal meals, live music and a proper Irish session by night, with the brand embedded across the experience rather than forced into it.",
          "The retreat was designed as a content engine first: TikTok, Instagram Reels, stories and user-generated content produced by the creators attending, built to drive awareness, engagement, cultural relevance and consumer curiosity well beyond the weekend itself. Developed as part of the MSc project, this stayed a proposed campaign concept in the plan we presented, never a booking we made.",
        ],
      },
      {
        kicker: "05 · The commercial model",
        heading: "A subscription designed around customer lifetime value",
        body: [
          "Retail gives you a transaction. Subscription gives you a relationship worth modelling, so I built the subscription proposition around customer lifetime value (CLTV): what a repeat drinker is worth over a year, what that justifies spending to acquire them, and where the CRM-led journey has to intervene to stop them lapsing after the second delivery.",
          "The lifecycle comms were designed against that model rather than bolted on: onboarding that teaches the occasion, a nudge at the point where usage drops, and a win-back with a reason attached. The plan proposed doubling subscription sales inside six months on a EUR 40k budget, delivered as a phased roadmap with the sequencing made explicit. As an MSc module project, that target is a proposed objective rather than a measured outcome.",
        ],
        pullStat: { value: "6 months", label: "Proposed phased roadmap to double subscription sales" },
      },
    ],
    results: {
      heading: "What it produced",
      summary:
        "A positioning argument built on evidence, three personas grounding an integrated marketing plan, and a subscription model with a proposed commercial target and a phased roadmap attached.",
      stats: [
        { value: "400+", label: "Retail outlets analysed" },
        { value: "3", label: "Core personas built from research" },
        { value: "40/30/20/10", label: "Content mix: education/lifestyle/UGC/conversion" },
        { value: "2x", label: "Proposed subscription sales target, six months" },
      ],
    },
    nextSlug: "google-merch",
  },
  {
    slug: "google-merch",
    index: "06",
    tag: "Growth / CRO / Analytics",
    title: "95% of revenue from one device, and why",
    intro:
      "An MSc Marketing Practice module project analysing the Google Merchandise Store in GA4. Desktop and mobile brought almost identical traffic. Desktop produced 95.4% of the revenue. The whole analysis is about closing the gap between those two sentences.",
    tools: ["Google Analytics 4"],
    meta: {
      role: "Analyst on the project team",
      timeline: "MSc Marketing Practice, University of Galway",
      scope: ["Google Analytics 4", "Funnel analysis", "Conversion rate optimisation", "Roadmap"],
    },
    atAGlance: {
      project:
        "MSc Marketing Practice module project: a conversion rate optimisation analysis of an ecommerce store with a mobile revenue leak.",
      role: "Analyst on the project team.",
      outputs: [
        "GA4 funnel analysis across 61,000+ users",
        "Mobile checkout abandonment diagnosis",
        "Retention gap analysis (19% returning vs 81% new)",
        "Prioritised CRO fix roadmap ordered by impact vs effort",
      ],
      primaryResult: "70.3% mobile checkout abandonment identified",
    },
    whatILearned: [
      "Prioritising is what makes an analysis usable. Anyone can produce twelve recommendations. The value is in saying which two to do first and what you expect to happen when you do. The CRO roadmap I delivered was ordered by expected impact against effort, rather than by how interesting each finding was.",
    ],
    heroStats: [
      { value: "61,000+", label: "Users analysed in GA4" },
      { value: "70.3%", label: "Mobile checkout abandonment" },
      { value: "95.4%", label: "Of revenue from desktop" },
      { value: "19%", label: "Of users were returning customers" },
    ],
    sections: [
      {
        kicker: "01 · The picture",
        heading: "Same traffic, completely different outcome",
        body: [
          "We split the work across the team: mobile performance, checkout drop-off, paid traffic ROI and returning-customer rate, each of us presenting a different piece of the same GA4 dataset. Across 61,000+ users, desktop and mobile split the traffic almost evenly: 50.6% against 48.6%. Revenue split 95.4% desktop against 4.6% mobile. Half the audience was arriving on a device that converted at a fraction of the rate, which is a revenue problem disguised as an audience report.",
          "Traffic dashboards hide this, because by the metric most people look at first, mobile was doing fine. Engagement told a truer story: a 59% engagement rate and an average of 1m43s on desktop against 22% and 22 seconds on mobile.",
        ],
        images: [
          {
            src: "/work/google-merch/funnel.svg",
            alt: "Diagram: desktop and mobile take near-identical shares of 61,000 users, but desktop produces 95.4% of revenue, with 70.3% of mobile sessions abandoning at checkout",
            ratio: "aspect-[16/10]",
            caption: "The gap in one picture: even traffic, uneven revenue, and where the drop-off happens.",
          },
        ],
      },
      {
        kicker: "02 · The mobile checkout",
        heading: "Following it down the funnel in GA4",
        body: [
          "Funnel exploration in GA4 put the loss in a specific place. Add-to-cart rate held up reasonably well on mobile (18.0% against desktop's 22.6%), but the gap widened at every step after: begin-checkout rate dropped to 29.7% on mobile against 54.4% on desktop, and only 86 mobile sessions completed a purchase against 795 on desktop. Checkout abandonment overall came in at 70.3% mobile against 45.6% desktop.",
          "Journey testing on the mobile site turned that number into specific, fixable problems: a slow-loading cart page, a mandatory Google account login with no guest checkout, complex checkout forms requiring billing and shipping addresses entered separately, address autofill that fails on iPhone, only one payment option, and shipping restricted to the US and Canada with no notice given before checkout.",
        ],
        pullStat: { value: "70.3%", label: "Of mobile checkout sessions abandoned" },
      },
      {
        kicker: "03 · The retention gap",
        heading: "A store running almost entirely on first-time buyers",
        body: [
          "The second finding sat underneath the first: only 19% of users were returning customers, against 81% new. Returning users converted at more than double the rate of new users, 3.8% against 1.9%, but because there were so few of them, they generated only 28% of total revenue. High-intent customers existed. The store just was not built to keep them coming back.",
          "That combination, low retention volume plus a materially higher conversion rate once retained, is what makes the fix worth prioritising: a loyalty programme with a points system and repeat-customer discounts, post-purchase email and remarketing automation, and targeted incentives such as limited-time offers and bundles aimed specifically at people who had already bought once.",
        ],
      },
      {
        kicker: "04 · The output",
        heading: "A prioritised roadmap",
        body: [
          "The deliverable was a conversion rate optimisation (CRO) roadmap ordered by expected impact against effort, covering both leaks: simplify the mobile checkout to the smallest number of steps that still takes payment, introduce guest checkout so the account requirement stops killing first purchases, add mobile payment methods so nobody types a card number on a phone, and build the retention loop, loyalty, CRM automation and targeted remarketing, behind the customers who already convert best.",
          "Prioritising is the part that makes an analysis usable. Anyone can produce twelve recommendations; the value is in saying which two to do first and what you expect to happen when you do.",
        ],
      },
      {
        kicker: "05 · Tools & tech stack",
        heading: "What the work ran on",
        body: [
          "Analytics: Google Analytics 4, including funnel exploration, device and engagement reporting, and returning-customer analysis.",
        ],
      },
    ],
    results: {
      heading: "What it produced",
      summary:
        "A revenue leak traced from a top-line report to two specific points in the customer journey, mobile checkout and retention, with a fix list ordered by what would move the number fastest.",
      stats: [
        { value: "61,000+", label: "Users analysed" },
        { value: "70.3%", label: "Mobile checkout abandonment identified" },
        { value: "19% vs 81%", label: "Returning against new users" },
        { value: "4", label: "Prioritised fixes in the roadmap" },
      ],
    },
    nextSlug: "feeltect-function",
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((study) => study.slug === slug);
}
