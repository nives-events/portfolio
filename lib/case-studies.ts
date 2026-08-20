import type { CaseStudyDetail } from "./types";

/**
 * Full write-ups for the individual /work/[slug] pages.
 *
 * Figures are reconciled to the master CV (/public/Niall_Awogboro_CV.pdf).
 * All media lives in /public/work/<slug>/. Videos are H.264 + faststart,
 * compressed for web (CRF 23), and load lazily: nothing downloads until play.
 */
export const caseStudies: CaseStudyDetail[] = [
  {
    slug: "feeltect-function",
    index: "01",
    tag: "Product marketing / Brand / Content",
    title: "The strategy a MedTech company now runs on",
    intro:
      "FeelTect had a product, a clinical audience and no marketing system. Nine months later the go-to-market strategy I wrote is the document the business operates from, and the channels to deliver it exist.",
    meta: {
      role: "Marketing & Communications Lead, working with sales, clinical and leadership",
      timeline: "September 2025 to June 2026",
      scope: ["Market research", "Personas", "Positioning", "Go-to-market", "Brand", "Content", "Analytics"],
    },
    heroImage: {
      src: "/work/feeltect-function/production-tablet-demo.jpg",
      alt: "Filming a Tight Alright product demonstration for the educational video series",
      // Near-square source (1600x1538). 16/9 cut through the top of his head.
      ratio: "aspect-[3/2]",
    },
    heroStats: [
      { value: "1,900%", label: "Impressions growth" },
      { value: "40%", label: "Follower growth" },
      { value: "200%", label: "Digital engagement lift" },
    ],
    sections: [
      {
        kicker: "01 · The context",
        heading: "A company with a product and no marketing",
        body: [
          "FeelTect makes Tight Alright, a wound care technology that tells a clinician how much pressure they are actually applying. The clinical case was strong. There was no marketing function around it: no positioning, no measurement, no content, and nobody whose job it was to decide what the company sounded like.",
          "The tempting move was to start publishing and look busy. I spent the first weeks on research instead, because a start-up that guesses its positioning pays for it twice.",
        ],
      },
      {
        kicker: "02 · The research",
        heading: "Personas from the people who already knew the answer",
        body: [
          "Clinicians, procurement leads, investors and key opinion leaders all buy for different reasons, and nobody had written down what those reasons were. I built buyer, investor and KOL personas out of secondary research and stakeholder interviews with our clinical and commercial colleagues, who had years of customer conversations sitting in their heads and no format to put them in.",
          "Alongside that I ran a competitor benchmark against the industry leaders in compression therapy. It surfaced three positioning gaps: nobody was talking about pressure as a measurable number, nobody was building for the nurse rather than the procurement committee, and nobody was publishing usable training content. Those three gaps became the argument for everything that followed.",
        ],
        pullStat: { value: "3", label: "Positioning gaps identified in the competitor benchmark" },
      },
      {
        kicker: "03 · The plan",
        heading: "A go-to-market document the business adopted",
        body: [
          "The output was a marketing and go-to-market (GTM) strategy: category positioning, messaging by audience, channel plan, campaign calendar and the commercial targets attached to each. Leadership reviewed it, approved it, and adopted it as the operating reference for the business. It is what new activity gets checked against now, including work I have nothing to do with.",
          "That is the part I would point at first. Plenty of people can write a strategy document. The test is whether anyone opens it again, and this one is the thing other people plan from.",
        ],
      },
      {
        kicker: "04 · The brand",
        heading: "One voice, applied everywhere it had to hold",
        body: [
          "I contributed to a brand refresh and then did the work of making it stick: updated tone of voice and visual guidelines applied across digital and print collateral, social templates, event print and the website. The rule was simple. A nurse who sees a LinkedIn post, a conference banner and a testimonial card should not be able to tell they were made in different months.",
          "Produced in Adobe InDesign, Affinity Designer and Canva, and rebuilt in German where the campaign needed it. Brand consistency is less about the logo than about whether the fifth asset still looks like the first one when you are making it at speed.",
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
        kicker: "05 · The content engine",
        heading: "Fifteen episodes, filmed and edited in-house",
        body: [
          "Clinicians needed to see the product used properly, and no written page does that job. The biggest single output was a 15-episode educational video series, filmed and edited in-house on a green screen I set up in the office, and published on the YouTube channel I created for it. The commercial team took it on as an ongoing client-facing sales enablement asset, and it has passed 1,000 partner views.",
          "Around it sat the repeatable pieces: social templates, testimonial cards and conference promos, plus a podcast episode to test whether longer-form content had an audience here. I shot, cut and captioned most of it, and briefed external contractors through Upwork when the work needed a second camera.",
        ],
        pullStat: { value: "15", label: "Episodes filmed and edited, brief to final cut" },
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
              "The in-house studio. Green screen, lighting and camera set up in the office, then DaVinci Resolve learned to edit what came out of it.",
          },
        ],
      },
      {
        kicker: "06 · The measurement",
        heading: "Analytics first, so the numbers meant something later",
        body: [
          "I set up the channel and measurement infrastructure the rest of the work ran on: YouTube, Google Business Profile, LinkedIn, Google Analytics 4 (GA4) and Google Tag Manager (GTM). Tracking went in before the campaigns did, which is the only reason the B2B demand generation figures below are attributable to anything rather than just encouraging.",
          "Six months in I presented a digital performance report to leadership, with competitor benchmarking beside our own numbers so the growth had a reference point rather than a nice-looking arrow. That reporting rhythm is still running.",
        ],
      },
    ],
    results: {
      heading: "What happened",
      summary:
        "A strategy the business runs on, a brand system that holds, and channels with tracking behind them. The numbers moved because the groundwork went in first.",
      stats: [
        { value: "1,900%", label: "Impressions growth over nine months" },
        { value: "40%", label: "Follower growth" },
        { value: "200%", label: "Digital engagement lift" },
        { value: "15", label: "Episodes filmed and edited" },
        { value: "1,000+", label: "Partner views on the series" },
        { value: "3", label: "Positioning gaps identified and acted on" },
      ],
      receipts: [
        {
          src: "/work/feeltect-function/linkedin-performance.png",
          alt: "Six-month LinkedIn performance summary: 14,157 impressions up 690%, 473 reactions up 1,531%, 400 new followers up 158%",
          ratio: "aspect-[16/9]",
          caption:
            "The six-month LinkedIn summary I presented at leadership level. Impressions were up 690% at that point; the nine-month figure across channels landed at 1,900%. Every number tracked from the GA4 and GTM setup in month one.",
        },
      ],
    },
    nextSlug: "feeltect-website",
  },
  {
    slug: "feeltect-website",
    index: "02",
    tag: "Web / CRO / UX",
    title: "Rebuilding the website around the people using it",
    intro:
      "The site was structured around the company rather than its visitors. I rebuilt the information architecture with the commercial team and shipped six pages without an external developer.",
    meta: {
      role: "Marketing & Communications Lead, working with sales, clinical and leadership",
      timeline: "September 2025 to June 2026",
      scope: ["Information architecture", "UX", "Conversion rate optimisation", "WordPress", "Elementor"],
    },
    heroImage: {
      src: "/work/feeltect-website/hero-new.png",
      alt: "The rebuilt FeelTect homepage hero: Tight Alright brand illustration with a clear value proposition",
      ratio: "aspect-[12/5]",
      position: "top",
    },
    heroStats: [
      { value: "6", label: "Pages built and shipped" },
      { value: "€3,000", label: "Saved in external costs" },
    ],
    sections: [
      {
        kicker: "01 · The context",
        heading: "A site that made visitors dig",
        body: [
          "A clinician looking for evidence of clinical outcomes had to dig for it. A partner looking for where FeelTect was presenting had no way to find it. The site described the company to itself instead of answering the questions real visitors arrived with, and the personas from the strategy work said exactly which questions those were.",
          "There was no budget for an external developer, so whatever the fix was, I would be building it.",
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
        kicker: "02 · What I did",
        heading: "New architecture, built in-house",
        body: [
          "I rebuilt the information architecture around the two audiences that mattered: clinicians who needed clinical evidence fast, and partners who needed to know where the company was showing up. The sales team sense-checked the order, because they were the ones fielding the questions the site was failing to answer.",
          "Conversion rate optimisation (CRO) here meant placing trust signals at the points in the scroll journey where people hesitated, rather than piling every proof point onto the homepage. I picked up Elementor in the first fortnight and shipped six pages on it, which is why there was no external development bill.",
          "The same approach carried into standalone conversion work, like the peer-to-peer clinical immersion landing page below.",
        ],
        pullStat: { value: "€3,000", label: "External development costs avoided" },
        images: [
          {
            src: "/work/feeltect-website/landing-page.png",
            alt: "Conversion landing page for the Tight Alright peer-to-peer clinical immersion programme",
            ratio: "aspect-[1200/1368]",
            position: "top",
            caption:
              "A standalone landing page for clinical demo bookings: testimonial, programme value, and a single form.",
          },
        ],
      },
      {
        kicker: "03 · The pages",
        heading: "Walk through them yourself",
        body: [
          "Screenshots flatten a website. These are screen recordings of the pages as they shipped, so you can judge the scroll rhythm, the information order, and where the trust signals landed.",
        ],
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
            label: "Walkthrough of the jobs page",
            caption: "Jobs. A hiring page the company did not have before.",
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
    ],
    results: {
      heading: "What happened",
      summary:
        "Six pages shipped without a developer, tracked in GA4 from day one, and a site that answers the questions clinicians and partners actually arrive with.",
      stats: [
        { value: "6", label: "Pages built across the placement" },
        { value: "€3,000", label: "Saved in external costs" },
        { value: "88%", label: "Increase in social channel visitors" },
      ],
    },
    nextSlug: "ewma",
  },
  {
    slug: "ewma",
    index: "03",
    tag: "Events / Brand activation / ABM",
    title: "EWMA Vienna: an international conference as three problems",
    intro:
      "A conference campaign is really three campaigns: before, during and after. Treating them separately is what turned a stand in Vienna into 20+ qualified leads that were still warm a fortnight later.",
    meta: {
      role: "Marketing & Communications Lead, working with sales, clinical and leadership",
      timeline: "Delivered during the FeelTect placement",
      scope: ["Event marketing", "Stand design", "Bilingual campaign assets", "Vendor management", "Lead tracking"],
    },
    heroStats: [
      { value: "20+", label: "Qualified leads from the conference" },
      { value: "2", label: "Languages of clinical materials" },
    ],
    sections: [
      {
        kicker: "01 · The context",
        heading: "One event, one shot at a clinical audience",
        body: [
          "EWMA is where the wound care world shows up. For a company our size it is the one week in the year when the exact audience you want is standing in the same building in Vienna, and the budget to be there is not small.",
          "The risk with conferences is spending that budget on attendance and having nothing to show for it two weeks later. That afterlife is the problem I designed the campaign around, working with the commercial team on who we needed to leave with.",
        ],
      },
      {
        kicker: "02 · Before",
        heading: "Stand creative, in two languages",
        body: [
          "The pre-event work was the exhibition stand design, the competition creative, bilingual English and German clinical materials, and a social campaign so the people we wanted to meet already knew where to find us. The German-language banner below is campaign creative rebuilt for the host market rather than run through a translator.",
          "This was account-based marketing (ABM) in practice: we knew which clinical accounts and distributors were attending, and the creative and the outreach were built to pull those specific people to a specific stand number.",
        ],
        images: [
          {
            src: "/work/ewma/banner-pullup.png",
            alt: "Pull-up banner for the EWMA stand: get compression therapy right, every time, defined pressure not blind pressure",
            ratio: "aspect-[1500/3707]",
            caption: "The pull-up banner beside the stand. Defined pressure, not blind pressure.",
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
        kicker: "03 · During",
        heading: "The International Bandaging Competition",
        body: [
          "The centrepiece was a competition that turned a passive stand into something with a queue: guess the pressure you are applying, wrap, then see the real number on the device. It gave every visitor a reason to stop, and it gave us a natural qualifying conversation with each of them.",
          "The two-sided poster below is the actual creative. The front pulled people in, the back explained the game in three steps. I designed both, and ran the competition on the floor across the days of the conference alongside the clinical team, who handled the technique demonstrations.",
        ],
        pullStat: { value: "20+", label: "Qualified leads, tracked from stand to follow-up" },
        images: [
          {
            src: "/work/ewma/poster-front.svg",
            alt: "Bandaging Competition poster, front: come test your skills, win daily prizes",
            ratio: "aspect-[3508/4961]",
            caption: "Competition poster, front. The hook: test your skills, win daily prizes.",
          },
          {
            src: "/work/ewma/poster-back.png",
            alt: "Bandaging Competition poster, back: how to play in three steps, guess, wrap, monitor",
            ratio: "aspect-[565/800]",
            caption: "Competition poster, back. The mechanic: guess your pressures, wrap, check.",
          },
        ],
      },
      {
        kicker: "04 · After",
        heading: "Leads logged as they happened, not reconstructed later",
        body: [
          "Lead capture and follow-up were set up before we left Galway. Leads were logged and qualified at the stand in HubSpot CRM, with the context of the conversation attached, then routed to the commercial team on an agreed follow-up schedule. Nobody had to reconstruct a business card pile from memory a week later, which is the usual way conference leads quietly die.",
          "Twenty-plus qualified leads came out of it, and the partner conversations that started in Vienna carried on afterwards because there was a system holding them.",
        ],
      },
      {
        kicker: "05 · The operations",
        heading: "Suppliers, contracts and a dispute",
        body: [
          "Event work is procurement work with a deadline you cannot move. Across the placement I sourced and managed external video contractors through Upwork, and introduced written contracts with delivery milestones after the first engagement showed me what happens without them. When one vendor engagement went wrong commercially, I managed the dispute through to resolution rather than escalating it and losing the delivery date.",
          "I also procured the production equipment we needed inside the budget I was given, with no overruns, and coordinated partner and supplier logistics into Vienna alongside the clinical team travelling with the stand.",
        ],
      },
    ],
    results: {
      heading: "What happened",
      summary:
        "A full B2B event cycle with a commercial number on the end: 20+ qualified leads, a stand that held a queue, and suppliers who delivered on the dates in their contracts.",
      stats: [
        { value: "20+", label: "Qualified leads at EWMA Vienna" },
        { value: "2", label: "Languages of clinical materials produced" },
        { value: "3", label: "Campaign phases planned and delivered" },
        { value: "0", label: "Budget overruns on procurement" },
      ],
    },
    nextSlug: "athlones-finest",
  },
  {
    slug: "athlones-finest",
    index: "04",
    tag: "Growth / Paid media / Brand",
    title: "467% return on ad spend, and the brand behind it",
    intro:
      "A consumer sports brand I founded in 2023, and the paid social campaign that returned 467% on ad spend at €8.13 per qualified lead. The interesting part is the decision I made halfway through.",
    meta: {
      role: "Founder and Marketing Lead",
      timeline: "May 2023 to present",
      scope: ["Brand identity", "Paid social", "Creative testing", "Organic social", "GA4 and GTM"],
    },
    heroImage: {
      src: "/work/athlones-finest/hero-match.jpg",
      alt: "Athlone's Finest players in yellow kit taking on a defender in front of the watching crowd",
      ratio: "aspect-[16/9]",
    },
    heroStats: [
      { value: "467%", label: "Return on ad spend (ROAS)" },
      { value: "€8.13", label: "Cost per qualified lead (CPL)" },
      { value: "4.1", label: "CAC to CLTV ratio" },
      { value: "400+", label: "Players across 4 years" },
    ],
    sections: [
      {
        kicker: "01 · The brand",
        heading: "A consumer brand built from nothing",
        body: [
          "I founded Athlone's Finest in 2023 because local football in the midlands had an audience and no coverage worth the name. It is a consumer brand for 16 to 25 year olds: its own visual language, its own tone, and a content calendar running across TikTok, Instagram and Facebook.",
          "It grew to 36,000+ monthly organic impressions with followers doubled, and that audience is the asset. It is what I take into a sponsorship conversation, and it is what makes the paid campaigns cheap to run, because the retargeting pool already exists before I spend anything.",
          "Over 400 players have turned out for Athlone's Finest across the four years it has been running, which is the number that actually proves the brand is real rather than a page. The 2026 six-a-side edition was covered by the Westmeath Independent, local press picking up a story that started as a page with no coverage worth the name.",
        ],
        links: [
          {
            label: "Read the coverage in the Westmeath Independent",
            href: "https://www.westmeathindependent.ie/2026/08/05/athlones-finest-six-a-side-returns/",
          },
        ],
      },
      {
        kicker: "02 · The campaign",
        heading: "Twelve qualified leads, no room for waste",
        body: [
          "The target was 12 qualified team sign-ups for the tournament, on a budget that could not absorb a bad week. I built the Meta campaign as a sequence rather than a blast: awareness creative to a cold audience first, then paid spend retargeting only the people who had already watched the organic content, so the money went where intent already existed.",
          "The creative was split-tested from the start. AI-generated video through Google Veo on one side, found match footage I shot myself on the other. The two clips below are from the AI side, made to stop a 19-year-old mid-scroll rather than to win anything.",
        ],
        videos: [
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
      },
      {
        kicker: "03 · The decision",
        heading: "The polished creative lost, so I moved the money",
        body: [
          "A week in, the engagement data disagreed with my instinct. The found match footage, shot on a phone at pitchside, was holding attention longer and costing less per result than the polished promotional creative I had spent the most time on. Hook rate and cost per lead both said the same thing.",
          "So I reallocated the remaining budget toward the format that was working and let the polished cuts run down. Return improved for the rest of the flight. That is the whole job in one move: you are not paid to be right at the start, you are paid to read the numbers and change your mind quickly enough for it to matter.",
          "Everything was tracked in Meta Ads Manager and Meta Business Suite, with Google Analytics 4 and Google Tag Manager implemented on athlonesfinest.com so the traffic and the sign-ups were attributable rather than assumed.",
        ],
        pullStat: { value: "467%", label: "Return on ad spend after the reallocation" },
      },
      {
        kicker: "04 · The organic side",
        heading: "Slower, and more interesting",
        body: [
          "Building an audience in a regional market means the content has to mean something to the people watching it. Short-form video, Reels, on-camera pieces and match highlights travel; promotional posts do not. Community management is the unglamorous half of it, and it happens every day. TikTok is where it moves fastest, and the analytics below are from the 2025 tournament window: 52,000 post views, 2,018 likes, 419 shares and a 5,523% jump inside a month.",
          "That is the same lesson the paid campaign taught, arriving from the other direction. The content people actually want is rarely the content that took longest to make.",
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
    ],
    results: {
      heading: "What happened",
      summary:
        "A campaign that paid for itself more than four times over, on top of an organic audience I built first and can stand over because I tracked it from day one.",
      stats: [
        { value: "467%", label: "Return on ad spend" },
        { value: "€8.13", label: "Cost per qualified lead" },
        { value: "4.1", label: "CAC to CLTV ratio" },
        { value: "12", label: "Qualified leads generated" },
        { value: "150,000+", label: "Paid views on Meta" },
        { value: "36,000+", label: "Monthly organic impressions" },
        { value: "400+", label: "Players across 4 years" },
      ],
      receipts: [
        {
          src: "/work/athlones-finest/tiktok-analytics.png",
          alt: "TikTok analytics for July to August 2025: 52,000 post views up 5,523%, 3,005 profile views, 2,018 likes, 419 shares",
          ratio: "aspect-[1170/2394]",
          position: "top",
          caption: "TikTok analytics from the 2025 tournament window: 52K views, 2,018 likes, 5,523% growth in a month.",
        },
        {
          src: "/work/athlones-finest/facebook-insights.png",
          alt: "Facebook insights for the campaign window: 84,000 views, 18 content interactions, 11 follows, 69 link clicks",
          ratio: "aspect-[369/800]",
          position: "top",
          caption: "The Facebook side of the same window: 84,000 views, and the tournament poster the top post at 59.2K.",
        },
      ],
    },
    nextSlug: "afe-tournament",
  },
  {
    slug: "afe-tournament",
    index: "05",
    tag: "Events / Partnerships / Operations",
    title: "A live tournament, delivered end to end",
    intro:
      "Consumer event marketing with everything attached: a budget, suppliers, a venue, sponsors expecting a return, two charities expecting a cheque, and a date that could not move.",
    meta: {
      role: "Founder and Marketing Lead",
      timeline: "2024 and 2025 editions",
      scope: ["Live event delivery", "Budget management", "Supplier coordination", "Sponsorship", "Campaign"],
    },
    heroImage: {
      src: "/work/athlones-finest/trophy-celebration.jpg",
      alt: "Winning team celebrating with the trophy after the six-aside tournament",
      // Portrait source (1242x2208). A 16/9 frame keeps only a third of the
      // height, so the crop has to sit on the team rather than the top.
      ratio: "aspect-[3/2]",
    },
    heroStats: [
      { value: "40,000+", label: "Build-up campaign views" },
      { value: "3", label: "Local sponsors secured" },
      { value: "0", label: "Budget overruns" },
    ],
    sections: [
      {
        kicker: "01 · The brief",
        heading: "A six-aside tournament with a charity total on the end",
        body: [
          "The 2025 six-aside at Willow Park FC was a paid-entry tournament with all profits going to ASIAM and AUTSIM: €85 a team in, €350 to the winners, and a cheque at the end that had to be worth writing about. That framing sets the whole operation, because a charity event that loses money is worse than no event.",
          "Every part of it had a deadline attached to someone else: the venue, the referees, the medals, the coffee cart, the teams, the sponsors and the two charities.",
        ],
        images: [
          {
            src: "/work/athlones-finest/poster-6-aside.jpg",
            alt: "Poster for the 2025 six-aside charity tournament at Willow Park FC Stadium",
            ratio: "aspect-[1400/2164]",
            position: "top",
            caption: "The tournament poster. All profits to ASIAM and AUTSIM, €85 entry, €350 to the winners.",
          },
          {
            src: "/work/athlones-finest/poster-5ives-2024.jpg",
            alt: "Poster for the 2024 5IVES seven-aside tournament at Pioneer's FC, Athlone",
            ratio: "aspect-[540/764]",
            caption: "The 2024 edition. Same job, different year: €105 a team, €600 top prize, Pioneer’s FC.",
          },
        ],
      },
      {
        kicker: "02 · The delivery",
        heading: "Budget, suppliers, timelines, and the day itself",
        body: [
          "I ran the budget line by line and delivered inside it, with no overruns across either edition. Venue booked and paid, referees engaged, prizes and medals procured, insurance and pitch times confirmed, a run of play built backwards from the final whistle, and a schedule the teams got in advance so nobody was standing around.",
          "On the day it is stakeholder management with a whistle: team captains who want a different kick-off time, a venue with its own rules, sponsors who want their moment, and a photographer who needs to be in the right place for the trophy lift. Project management and multi-project coordination sound like phrases from a job description until you are doing four of those things inside the same hour.",
        ],
        videos: [
          {
            src: "/work/athlones-finest/video-tournament.mp4",
            poster: "/work/athlones-finest/video-tournament-poster.jpg",
            label: "Promotional film for the 2025 six-aside charity tournament",
            caption: "The 2025 tournament film, cut for a vertical-first build-up campaign that passed 40,000 views.",
            ratio: "aspect-[9/16]",
            portrait: true,
          },
        ],
        images: [
          {
            src: "/work/athlones-finest/campaign-old-rivals.jpg",
            alt: "Old Rivals Return countdown poster, two days left, with the sponsor row along the bottom",
            ratio: "aspect-[598/800]",
            caption: "Countdown creative from the build-up. Sponsors carried along the bottom of every drop.",
          },
          {
            src: "/work/athlones-finest/campaign-days-left.jpg",
            alt: "Four days left countdown poster from the tournament build-up campaign",
            ratio: "aspect-[640/800]",
            caption: "Same system, four days out. One layout, a new number and a new frame each time.",
          },
        ],
      },
      {
        kicker: "03 · The sponsorship",
        heading: "Audience data, then a conversation, then a negotiation",
        body: [
          "The sponsorships came from walking into local businesses with the audience numbers and a proposal built around what each of them actually wanted. A coffee company wants footfall and sampling on the day. A gym wants sign-ups from 16 to 25 year olds. Those are different offers, so I stopped pitching one deck at everybody and started building the offer around the objective in front of me.",
          "Then the part nobody puts on a portfolio: negotiating terms, agreeing what each side owes, and taking a no from businesses who were not the right fit. Grind & Dose ran their coffee cart at the 2025 tournament, and the audience data is what got that conversation started.",
        ],
        images: [
          {
            src: "/work/athlones-finest/sponsor-coffee.jpg",
            alt: "Grind & Dose coffee cart serving at an Athlone's Finest event",
            ratio: "aspect-[1047/1600]",
            caption: "Sponsorship made visible: Grind & Dose pouring at the 2025 tournament.",
          },
        ],
      },
    ],
    results: {
      heading: "What happened",
      summary:
        "Two editions delivered on budget and on the day, with sponsors who could see what they got for their money and a charity total to point at.",
      stats: [
        { value: "40,000+", label: "Build-up campaign views" },
        { value: "3", label: "Local sponsors secured and serviced" },
        { value: "2", label: "Charities supported" },
        { value: "0", label: "Budget overruns" },
      ],
    },
    nextSlug: "kombucha",
  },
  {
    slug: "kombucha",
    index: "06",
    tag: "Product marketing / GTM / Positioning",
    title: "The Booch Reboot: repositioning a drink nobody could explain",
    intro:
      "Ireland's kombucha problem was comprehension, not demand. All About Kombucha had a strong product, a distinctive brand and national distribution in 400+ outlets, and shoppers still couldn't say what it was for.",
    meta: {
      role: "Marketing strategy lead on the project team",
      timeline: "MSc Marketing Practice, University of Galway",
      scope: ["Market research", "Positioning", "Go-to-market", "Lifecycle", "CLTV modelling"],
    },
    heroStats: [
      { value: "400+", label: "Retail outlets already stocked" },
      { value: "3", label: "Core personas built from research" },
      { value: "2x", label: "Subscription sales target in six months" },
    ],
    sections: [
      {
        kicker: "01 · The diagnosis",
        heading: "The real constraint was not distribution",
        body: [
          "The obvious answer was more listings and more promotion. The evidence did not support it. The product was already on shelves in over 400 outlets, and the rate of sale was the problem rather than the availability. Consumer research kept surfacing the same thing: people did not understand what kombucha was, when they would drink it, or what it replaced in their week.",
          "That reframes the brief completely. If the barrier is comprehension, more distribution just puts the same confusing bottle in front of more people. I called the strategy 'The Booch Reboot': build understanding, build cultural relevance, then convert that into subscribers, because a daily wellness habit is worth more than a single sale.",
        ],
      },
      {
        kicker: "02 · The audience",
        heading: "Three personas, one shared want",
        body: [
          "The target was young professionals aged 23 to 35 in Ireland who care about wellness, fitness and staying on top of trends, and I built that out into three personas to keep the plan honest about who it was for: Jacob, a yoga instructor who values transparency and gut health; John, a finance professional who needs simple, effective solutions that fit a fast-paced life; and Gráinne, a marketing professional who wants healthy products that still feel socially relevant.",
          "Across all three, the same insight held: nobody wants just a drink. They want something that fits their routine, their identity and their lifestyle. That reframed the positioning: All About is the modern Irish wellness brand for people who want to feel good, without sacrificing lifestyle. Not a niche health product. A daily lifestyle drink. That is the niche, and that is the opportunity.",
        ],
        images: [
          {
            src: "/work/kombucha/positioning.svg",
            alt: "Diagram: repositioning from niche health product competing with supplements, to everyday wellness drink competing with soft drinks, with the four go-to-market workstreams beneath",
            ratio: "aspect-[16/10]",
            caption: "The repositioning argument, and the workstreams built underneath it.",
          },
        ],
      },
      {
        kicker: "03 · The go-to-market plan",
        heading: "Four fixes, then scale",
        body: [
          "Before scale, I fixed the foundation. Messaging simplified to three pillars: gut health, low-sugar alternative, daily wellness habit. Brand alignment across the kombucha cans and the prebiotic sodas, which currently read as two different brands, into one visual identity and one voice. Website optimisation, with a kombucha education hub answering the questions people were already searching, and a structured SEO funnel: awareness keywords like 'what is kombucha' at the top, consideration keywords like 'kombucha after workout' in the middle, conversion keywords like 'kombucha subscription Ireland' at the bottom.",
          "Social ran on a 40/30/20/10 content model: 40% education, 30% lifestyle, 20% user-generated content, 10% conversion, so the channel had a structured route from awareness to action rather than a feed of promotional posts.",
        ],
      },
      {
        kicker: "04 · The awareness campaign",
        heading: "The All About Retreat, a proposed concept",
        body: [
          "Once the foundation was fixed, the plan shifted from clarity to scale, not through advertising but through culture. I proposed The All About Retreat: an immersive, culturally rooted weekend on the Aran Islands blending wellness, adventure and social connection. Sea swims, cycling and yoga by day; communal meals, live music and a proper Irish session by night, with the brand embedded across the experience rather than forced into it.",
          "The retreat was designed as a content engine first: TikTok, Instagram Reels, stories and user-generated content produced by the creators attending, built to drive awareness, engagement, cultural relevance and consumer curiosity well beyond the weekend itself. This stayed a campaign concept in the plan we presented, not a booking we made.",
        ],
      },
      {
        kicker: "05 · The commercial model",
        heading: "A subscription designed around customer lifetime value",
        body: [
          "Retail gives you a transaction. Subscription gives you a relationship worth modelling, so I built the subscription proposition around customer lifetime value (CLTV): what a repeat drinker is worth over a year, what that justifies spending to acquire them, and where the CRM-led journey has to intervene to stop them lapsing after the second delivery.",
          "The lifecycle comms were designed against that model rather than bolted on: onboarding that teaches the occasion, a nudge at the point where usage drops, and a win-back with a reason attached. The plan proposed doubling subscription sales inside six months on a €40k budget, delivered as a phased roadmap with the sequencing made explicit rather than a wish list.",
        ],
        pullStat: { value: "6 months", label: "Phased roadmap to double subscription sales" },
      },
    ],
    results: {
      heading: "What it produced",
      summary:
        "A positioning argument built on evidence, three personas grounding an integrated GTM plan, and a subscription model with a commercial target and a phased roadmap attached.",
      stats: [
        { value: "400+", label: "Retail outlets analysed" },
        { value: "3", label: "Core personas built from research" },
        { value: "40/30/20/10", label: "Content mix: education/lifestyle/UGC/conversion" },
        { value: "2x", label: "Subscription sales target, six months" },
      ],
    },
    nextSlug: "google-merch",
  },
  {
    slug: "google-merch",
    index: "07",
    tag: "Growth / CRO / Analytics",
    title: "Google Merchandise Store: finding where the revenue leaks",
    intro:
      "Desktop and mobile brought almost identical traffic. Desktop produced 95.4% of the revenue. The whole analysis is about closing the gap between those two sentences.",
    meta: {
      role: "Analyst on the project team",
      timeline: "MSc Marketing Practice, University of Galway",
      scope: ["Google Analytics 4", "Funnel analysis", "Conversion rate optimisation", "Roadmap"],
    },
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
          "We split the work across the team: mobile performance, checkout drop-off, paid traffic ROI and returning-customer rate, each of us presenting a different piece of the same GA4 dataset. Across 61,000+ users, desktop and mobile split the traffic almost evenly: 50.6% against 48.6%. Revenue split 95.4% desktop against 4.6% mobile. Half the audience was arriving on a device that was converting at a fraction of the rate, which is a revenue problem disguised as an audience report.",
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
          "Funnel exploration in GA4 put the loss in a specific place rather than a general one. Add-to-cart rate held up reasonably well on mobile (18.0% against desktop's 22.6%), but the gap widened at every step after: begin-checkout rate dropped to 29.7% on mobile against 54.4% on desktop, and only 86 mobile sessions completed a purchase against 795 on desktop. Checkout abandonment overall came in at 70.3% mobile against 45.6% desktop.",
          "Journey testing on the mobile site turned that number into specific, fixable problems: a slow-loading cart page, a mandatory Google account login with no guest checkout, complex checkout forms requiring billing and shipping addresses entered separately, address autofill that doesn't work on iPhone, only one payment option, and shipping restricted to the US and Canada with no notice given before checkout.",
        ],
        pullStat: { value: "70.3%", label: "Of mobile checkout sessions abandoned" },
      },
      {
        kicker: "03 · The retention gap",
        heading: "A store running almost entirely on first-time buyers",
        body: [
          "The second finding sat underneath the first: only 19% of users were returning customers, against 81% new. Returning users converted at more than double the rate of new users, 3.8% against 1.9%, but because there were so few of them, they generated only 28% of total revenue. High-intent customers existed. The store just wasn't built to keep them coming back.",
          "That combination, low retention volume plus a materially higher conversion rate once retained, is what makes the fix worth prioritising: a loyalty programme with a points system and repeat-customer discounts, post-purchase email and remarketing automation, and targeted incentives such as limited-time offers and bundles aimed specifically at people who had already bought once.",
        ],
      },
      {
        kicker: "04 · The output",
        heading: "A prioritised roadmap, not a list of observations",
        body: [
          "The deliverable was a conversion rate optimisation (CRO) roadmap ordered by expected impact against effort, covering both leaks: simplify the mobile checkout to the smallest number of steps that still takes payment, introduce guest checkout so the account requirement stops killing first purchases, add mobile payment methods so nobody types a card number on a phone, and build the retention loop, loyalty, CRM automation and targeted remarketing, behind the customers who already convert best.",
          "Prioritising is the part that makes an analysis usable. Anyone can produce twelve recommendations; the value is in saying which two to do first and what you expect to happen when you do.",
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
