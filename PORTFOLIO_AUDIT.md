# Portfolio Pre-Launch Audit

Audited against `Portfolio_Website_Audit_Prompt_v2.md`.

> **Status: sections A–I describe the site as it was on first audit. The fixes have since
> been implemented. Jump to [section J](#j-after-implementation) for the current state,
> the new scores, and what is still outstanding.** Section H is private and never goes on
> the site.

---

## A. Page inventory

All visible copy on this site lives in two files: `lib/content.ts` (369 lines) and
`lib/case-studies.ts` (448 lines). Components are presentation only, with a handful of
hardcoded strings noted below.

| Page | Route file | Sections | Copy source |
|---|---|---|---|
| Home | `app/page.tsx` | Hero | `lib/content.ts` → `hero` (L39–52) |
| | | FeelTect block | `feeltect` (L59–109) |
| | | Athlone's Finest block | `athlonesFinest` (L111–152) |
| | | About snippet | `about` (L154–166) |
| | | What's next | `whatsNext` (L173–190) |
| | | Closing CTA | `closing` (L168–171) + hardcoded "Download my CV" |
| About | `app/about/page.tsx` | Opening, Panels, How I work, Experience, Education, Outside work, Credentials, What's next | `aboutPage` (L196–334) |
| Work | `app/work/page.tsx` | Opening, grouped grid, Closing | `workPage` (L340–369) |
| Case study ×4 | `app/work/[slug]/page.tsx` | Hero, sections, results, CTA, next | `lib/case-studies.ts` |
| Lab | `app/lab/page.tsx` | Opening (hardcoded in `components/sections/lab/Opening.tsx`), projects grid | `lib/projects.ts` |
| Global | `app/layout.tsx` | Page titles, meta description, OG, Twitter card, JSON-LD | L33–80 |
| | `components/site/Header.tsx` | Nav labels, "Let's talk" CTA | hardcoded L58–75 |
| | `components/site/Footer.tsx` | LinkedIn, email, copyright | `site` |
| | `components/case-study/CaseCTA.tsx` | "Need this kind of work done?" | hardcoded L18–33 |
| | `app/robots.ts`, `app/sitemap.ts` | — | — |

**Case studies:** `feeltect-function` (01), `feeltect-website` (02), `ewma` (03),
`athlones-finest` (04).

**Not rendered anywhere:** `whatIBring` (`lib/content.ts:54`) and
`components/sections/WhatIBring.tsx`. The copy exists but no page imports it. Dead weight
or a missing section — decide which.

**Missing files that visible elements point at:**

| Referenced by | Path | Status |
|---|---|---|
| `components/sections/Hero.tsx:85` | `/headshot.jpg` | missing — hero portrait is broken on desktop |
| `ClosingCTA.tsx:24`, `Credentials.tsx:31`, `CaseCTA.tsx:30` | `/Niall_Awogboro_CV.pdf` | missing — three "Download my CV" buttons 404 |
| `app/layout.tsx:59,66` | `/og.png` | missing — no link preview on LinkedIn or WhatsApp |
| `lib/case-studies.ts:258` | EWMA hero image | empty `src` — the flagship event case study opens with a dashed grey box reading "Photo: FeelTect stand at the EWMA conference" |
| `lib/content.ts:325` | `/services` | route does not exist — the About page's "Explore my services" card is a 404, and `robots.ts:8` disallows it |
| `lib/projects.ts` | `/lab` images | all four project cards have empty `src` |

**Rendering fault:** `hero.headlineLines` holds one string (`lib/content.ts:41–43`) but
`Hero.tsx:38–52` renders three `<span>` blocks. Lines two and three render empty, so the
H1 is "Meet Niall Awogboro" followed by two blank rows including an accent-coloured one.

**Live placeholder copy:** three of four Lab cards read "Sample: an app you built" /
"Replace this card in lib/projects.ts". This is publicly visible.

---

## B. Coverage matrix

**S** strong · **M** moderate · **W** weak · **–** absent

| Niche | Home hero | Home body | About | Work index | FeelTect: function | FeelTect: website | EWMA | Athlone's Finest | Lab | Meta/SEO |
|---|---|---|---|---|---|---|---|---|---|---|
| Branding | – | W | W | W | M | W | M | M | – | – |
| Product marketing | – | – | W | – | W | – | – | – | – | – |
| Growth | M | M | W | W | W | M | W | M | – | W |
| Content | W | M | M | M | S | M | M | S | – | – |
| Events | – | W | W | W | – | – | M | M | – | – |

Nothing reaches strong outside content. Product marketing has no strong or moderate cell
anywhere on the site.

---

## C. Language gaps by niche

### 1. Branding

**Present:** brand identity (once), rebrand (×4), competitors (×2, generic), positioning
(only as a variable name and in alt text), stand design, bilingual, German, Affinity (once,
in a tool list inside How I work).

**Missing:** brand guidelines · tone of voice · visual identity · brand consistency · brand
positioning · brand activation · brand partnerships · campaign development · campaign
execution · creative briefs · campaign assets · storytelling · brand experience · consumer
brand · audience engagement · community engagement · multi-brand asset rollout · agency and
supplier briefing · competitor benchmarking · brand refresh · print and digital collateral ·
InDesign · Canva.

**Where they go:** `caseStudies[0]` section 02 currently says "a full company rebrand with
assets across digital and print" — that sentence should carry *tone of voice*, *visual
guidelines*, *brand consistency* and the three tools by name. *Competitor benchmarking* and
*brand positioning* belong in section 01, where "what competitors were doing" is currently
doing no work. *Consumer brand*, *community engagement* and *brand experience* belong in
the Athlone's Finest opening, which currently calls itself a hobby. A named design surface
(new section or new Lab category) is the natural home for *print and digital collateral*
and *campaign assets*.

### 2. Product marketing

**Present:** value proposition (twice, both in image alt text), stakeholders (twice, both
"who our stakeholders were"), roadmap (×3), market research (once, as an exam module).

**Missing:** go-to-market · GTM · positioning · messaging · buyer personas · customer
insight · competitive analysis · competitor benchmarking · launch planning · launch
execution · cross-functional alignment · sales enablement · product launch · customer
lifetime value · CLTV · subscription model · lifecycle communications · commercial
roadmap · stakeholder interviews · KOL · category positioning.

This is the largest single gap on the site. Twenty of twenty-one terms are absent, and the
two case studies that would carry them (All About Kombucha, and the FeelTect
plan/personas/benchmarking layer) are either missing entirely or compressed into one bullet.

**Where they go:** a fifth case study for All About Kombucha carries *go-to-market*,
*positioning*, *category positioning*, *subscription model*, *CLTV*, *lifecycle
communications* and *commercial roadmap* on its own. *Buyer personas*, *KOL*, *stakeholder
interviews*, *competitor benchmarking* and *cross-functional alignment* go into
`caseStudies[0]` as a new section between 01 and 02 — the thinking layer that is currently
summarised as "mapping who our stakeholders actually were".

### 3. Growth

**Present:** paid social (×5), qualified leads (×13), budget (×9), lead generation, CRO (as
a tag and a claimed certification, never in a sentence), conversion rate (once, in a
certification name), audience data (×2).

**Missing:** performance marketing · paid media · Meta Ads Manager · TikTok Ads Manager ·
**ROAS / return on ad spend** · **cost per lead / CPL** · cost per acquisition · **CAC** ·
customer lifetime value · **CAC to CLTV ratio** · hook rate · hold rate · conversion rate
optimisation · full-funnel · demand generation · budget management · campaign optimisation ·
creative testing · audience targeting · retargeting · attribution · **Google Analytics 4 /
GA4** · **Google Tag Manager** · Meta Business Suite · HubSpot CRM · performance reporting ·
KPI tracking · scaling winners.

The €8.13 figure appears with the label "Cost per qualified lead" but the term *cost per
lead* and the abbreviation *CPL* never appear. ROAS appears zero times anywhere on the site.

**Where they go:** the hero supporting paragraph takes *ROAS*, *CPL* and *CAC to CLTV*.
`caseStudies[3]` section 02 takes *creative testing*, *hook rate*, *retargeting* (it already
describes retargeting in plain English without naming it), *campaign optimisation* and
*scaling winners* via the match-footage reallocation story. `caseStudies[0]` section 02
takes *GA4*, *Google Tag Manager*, *attribution* and *performance reporting* where it
currently says "analytics infrastructure from scratch". A Google Merchandise Store case
study carries *conversion rate optimisation*, *full-funnel* and *funnel analysis*.

### 4. Content

**Present:** content production, DaVinci Resolve (×3), Veo (×8), TikTok (×3, all inside one
analytics caption and its alt text), LinkedIn (×15), content calendar (once, and only as a
negative: "there was no content calendar").

**Missing:** content strategy · short-form video · social-first · Reels · carousels ·
stories · copywriting · captions · brand tone · storytelling · video editing · CapCut ·
photography and videography · graphic design · creative concepts · multi-format delivery ·
community management · platform trends · organic social · **Instagram** · **Facebook** ·
**YouTube** · AI-assisted content · prompt engineering · Higgsfield · content performance
reporting · Instagram Insights · influencer and creator coordination.

Instagram, Facebook and YouTube are named zero times. The site says "three platforms" and
"two platforms" instead. TikTok, which the brief asks to have named and evidenced, appears
only as a word inside one screenshot caption.

**Where they go:** name the platforms in `athlonesFinest.intro` and in
`caseStudies[3]` section 03. *Content strategy*, *content calendar*, *organic social* and
*community management* go in the same place. *Graphic design*, *copywriting* and
*multi-format delivery* go wherever the design work gets its own surface. *AI-assisted
content* and *prompt engineering* belong beside the Veo clips, framed as judgement about
what ships.

### 5. Events

**Present:** event marketing (once, as a tag), stand design (×2), conference (×13),
sponsorship (×6), timeline (×8, mostly the metadata field label), audience data (×2).

**Missing:** event activation · brand activation · experiential marketing · live event
delivery · on-site event management · event logistics · event collateral · exhibition ·
conference marketing · partnership marketing · commercial partnerships · partnership
activation · **supplier and vendor coordination** · **supplier contracts** · budget
management · multi-project coordination · stakeholder management · cross-functional
collaboration · lead generation from events · **account-based marketing / ABM** · sports
marketing.

*Supplier*, *vendor*, *contract*, *Upwork* and *Vienna* appear zero times on the entire
site.

**Where they go:** a new "Operations" section in `caseStudies[2]` (EWMA) carries *supplier
contracts*, *vendor coordination*, *budget management* and *procurement*. *Vienna* goes in
the EWMA intro and metadata. *ABM* goes in the EWMA results, where the lead tracking is
already described. *Live event delivery*, *event logistics*, *on-site event management* and
*sports marketing* go into `caseStudies[3]` section 01, which currently presents the
tournament as a poster and a film rather than as an event he delivered.

### Cross-niche check

| Term | On site | Where it should go |
|---|---|---|
| campaign management | no | FeelTect function, section 02 |
| stakeholder management | no | FeelTect function, new persona section |
| cross-functional collaboration | no | FeelTect experience summary and case study meta |
| project management | no | EWMA operations section |
| multi-project delivery under deadline | no | About, How I work |
| budget management | partial ("budget" ×9, never as ownership) | EWMA and AFE |
| performance reporting | no | FeelTect function results, beside the LinkedIn receipt |
| data-led decision making | no | AFE creative reallocation |
| copywriting | no | Content surface / About |
| brand consistency | no | FeelTect rebrand section |
| commercial awareness | no | AFE sponsorship section |
| client and partner relationship management | partial ("client-facing" once) | EWMA and AFE sponsorship |
| presenting to senior leadership | no | FeelTect function results |

**Spelled-out plus abbreviated pairs — all seven fail:**

| Pair | Long form | Short form |
|---|---|---|
| Google Analytics 4 (GA4) | absent | absent |
| return on ad spend (ROAS) | absent | absent |
| cost per lead (CPL) | absent | absent |
| customer lifetime value (CLTV) | absent | absent |
| go-to-market (GTM) | absent | absent |
| conversion rate optimisation (CRO) | absent | present as a tag only, never in a sentence |
| account-based marketing (ABM) | absent | absent |

---

## D. Flagged lines

### D1 — Positioning: graduate-coded, hedged, or under-claimed

**1. `lib/content.ts:40` — hero eyebrow**
> "Marketing"

*Fails:* the hero has to read "marketing executive". A one-word eyebrow says nothing about
which five briefs he answers.
**Replace:** `"Brand · Growth · Content · Events"`

**2. `lib/content.ts:41–43` — hero headline**
> "Meet Niall Awogboro"

*Fails:* the biggest type on the site is an introduction, not a claim. Also renders two
empty lines (see A).
**Replace:** three lines, with the third in accent —
`["Brand, growth and events.", "Run end to end.", "467% return on the last campaign."]`

**3. `lib/content.ts:44–45` — hero positioning**
> "I help organisations turn ideas into campaigns, products, and experiences that get built."

*Fails:* forced rule of three; "help organisations" is a hedge; no evidence.
**Replace:** "I run brand, performance and event marketing end to end. The plan, the
creative, the spend, and the numbers afterwards."

**4. `lib/content.ts:47` — hero supporting**
> "I joined FeelTect and grew impressions by 700%, followers by 37%, **helped generate** over
> 20 leads at an international medical conference, and built six website pages."

*Fails:* hedged verb "helped generate"; under-claims against the evidence bank (1,900%
impressions, 40% followers); the conference is unnamed; four clauses in one sentence.
**Replace:** "At FeelTect I work inside the marketing team across sales, clinical and
leadership. Nine months: 1,900% impressions growth, 40% follower growth, and 20+ qualified
leads out of the Vienna clinical conference."

**5. `lib/content.ts:48` — hero supporting**
> "At Athlone's Finest I've run paid and organic campaigns that hit 150,000 views and
> delivered leads at €8.13 each."

*Fails:* leads with views when outcome numbers exist. ROAS and CAC:CLTV are absent from the
whole site.
**Replace:** "At Athlone's Finest, the brand I founded, the last paid campaign returned
467% on ad spend at €8.13 per qualified lead, with a 10.1 CAC to CLTV ratio across 150,000+
paid views."

**6. `lib/content.ts:154–156` — homepage about snippet, first line**
> "I've finished an MSc in Marketing Practice at University of Galway, projected first class."

*Fails:* the MSc is the first thing the about block says. It is a credential, not an
identity.
**Replace:** "I have built a marketing function inside a MedTech start-up and a consumer
sports brand from nothing. Both taught me the same thing: the plan is worth nothing until
someone has to deliver it."

**7. `lib/content.ts:200` — About page opening**
> "I've an MSc in Marketing Practice at University of Galway, with a 1:1. My undergrad was a
> 2.1 in Commerce, with an Erasmus at Kedge Business School in Paris."

*Fails:* the degree appears twice in the opening two paragraphs, before any work is
described. It is already covered in the Education block below.
**Replace:** move to Education. In its place: "Between the two I have run performance
campaigns, a rebrand, an international conference stand and a fifteen-episode video series.
The academic side gave me the frameworks. The work taught me when they are wrong."

**8. `lib/case-studies.ts:175` — website case study**
> "I had not used Elementor before the placement. I learned it because the job needed it."

*Fails:* "still learning" register. It invites a reader to price him as someone acquiring
basics.
**Replace:** "I picked up Elementor in the first fortnight and shipped six pages on it,
which is why there was no external development bill."

**9. `lib/content.ts:170` — closing CTA**
> "I am looking for Marketing Manager, Growth, Product Marketing, and Brand roles across
> Europe and remote. Industries: FMCG, MedTech, SaaS, Events. Also open to freelance
> projects."

*Fails:* "Industries:" is CV formatting, not site copy; "I am looking for" is applicant
framing; content and event roles are missing despite being two of his five niches.
**Replace:** "I take on brand, growth, product marketing, content and event briefs, in-house
or freelance, across Europe and remote. FMCG, MedTech, SaaS and events are where I have
shipped. If you have one of those problems, get in touch."

**10. `app/layout.tsx:39–41` — meta description**
> "Marketing professional based in Dublin. ... **Open to Marketing Manager and Growth roles.**"

*Fails:* this is the line Google prints. It ends on availability, not capability.
**Replace:** "Marketing across brand, growth, content and events. 467% ROAS on paid social,
1,900% impressions growth in MedTech, and an international conference delivered end to end.
Dublin-based."

**11. `components/sections/lab/Opening.tsx:16–18`**
> "This is where I try things to see how good they are. **Some of it ships, some of it just
> teaches me something.**"

*Fails:* pre-emptive apology for the work below it.
**Replace:** "Tools, builds and experiments I run outside client work, including
athlonesfinest.com, which I built in Claude Code and instrumented with GA4 and Google Tag
Manager."

### D2 — Team-player check

**12. `lib/content.ts:60` — FeelTect eyebrow, homepage**
> "B2B MedTech · 9 months · **Sole hire**"

*Fails:* solo framing, and it contradicts the brief's framing rule (he worked inside a
marketing team, across sales, clinical and leadership).
**Replace:** `"B2B MedTech · 9 months · Marketing & Communications Intern"`

**13. `lib/content.ts:62` — FeelTect intro, homepage**
> "Head of Marketing as an intern."

*Fails:* title inflation and sole ownership in five words. It is also the single most
checkable claim on the site.
**Replace:** "Nine months on the marketing team, working across sales, clinical and
leadership."

**14. `lib/content.ts:243–247` — About, experience entry**
> role: "**Marketing Manager**" … "Nine-month industry placement as **the sole marketing
> professional**. I owned strategy, digital infrastructure, content, brand, events, and
> budget. **No team, no handover.**"

*Fails:* title conflict, solo-preference language, and a six-item list.
**Replace:** role: "Marketing & Communications Intern". Summary: "Nine months inside the
marketing team at a MedTech start-up, working with sales, clinical and leadership on
strategy, analytics, brand, content and events. I briefed external contractors, presented
performance to leadership, and owned delivery on what I ran."

**15. `lib/case-studies.ts:20`, `:135`, `:254` — case study metadata, three times**
> role: "Marketing Manager (**sole marketing hire**)"

**Replace (all three):** "Marketing & Communications Intern · marketing team, working with
sales, clinical and leadership"

**16. `lib/case-studies.ts:17–18` — function case study intro**
> "**First marketing hire** at a MedTech start-up. **No handover, no inherited strategy**, and
> nine months to build something that would outlast the placement."

*Fails:* three separate signals that nobody else was involved, in one sentence.
**Replace:** "A MedTech start-up with a product, a clinical audience and no marketing
system. Nine months to build one with the team that had to run it after I left."

**17. `lib/content.ts:197` — About page headline**
> "I work best when I own the problem."

*Fails:* the largest sentence on the About page reads as a preference for working alone.
**Replace:** "I own the outcome, usually with other people's deadlines attached to it."

**18. `lib/content.ts:199` — About opening**
> "A lot of the work I'm most proud of **started without a brief**. At FeelTect I walked in as
> the **first marketing hire, with no handover and no inherited strategy**, and spent nine
> months building the function **from the ground up**."

*Fails:* four solo signals in two sentences, no other human present.
**Replace:** "A lot of the work I am proudest of started as a blank page. At FeelTect I
joined the marketing team at a MedTech start-up and spent nine months building the system it
runs on: stakeholder interviews with clinical and commercial leads, a competitor benchmark,
a plan that leadership approved, and then the delivery."

**19. `lib/content.ts:232–233` — How I work, point five**
> "I am comfortable working without much structure" / "Most of my experience has been in
> small or **solo** environments where I had to manage my own time, **make decisions without a
> lot of input**, and communicate progress to people who were not in the day to day."

*Fails:* the clearest solo-preference passage on the site. An in-house hiring manager reads
"will not check in".
**Replace:** heading: "I work fine without structure, and better with other people in the
room". Body: "I have run projects where I set my own priorities and reported out to people
who were not in the day to day. I have also run them the other way, briefing external video
contractors and taking direction from clinical and commercial leads who knew the audience
better than I did. Both need the same thing: be honest about what you know, and ask early
when it matters."

**20. `lib/content.ts:220–221` — How I work, point two**
> "**Jack of all trades beats the master of one**"

*Fails:* the idiom carries "master of none" with it, and it argues a defensive case.
**Replace:** heading: "Two audiences that could not be less alike". Body unchanged.

**21. `lib/content.ts:267` — About, Athlone's Finest achievement**
> "**Produce all content myself**"

*Fails:* solo identity, and it is the weakest bullet in the list.
**Replace:** "Run a cross-platform content calendar across TikTok, Instagram and Facebook,
shooting and editing the match content myself"

**22. `lib/case-studies.ts:354`, `:409`, `:423` — Athlone's Finest captions and summary**
> "Shot, cut, and published **by me**." / "real match footage, shot and edited **by me**." /
> "numbers I can stand over because I **tracked them myself** from day one."

*Fails:* "by me" three times in one case study reads as self-taught-as-identity.
**Replace:** keep one. Caption 1: "The 2025 tournament film, shot and cut in-house." Caption
2: "The content that travels: real match footage from the tournament." Summary: "A brand
with a real audience, sponsors who renewed, and numbers I tracked from day one."

**23. `app/layout.tsx:64–65` — Twitter card description**
> "Marketing professional in Dublin. Strategy and execution, **without a team around to do
> either**."

*Fails:* the site's social preview literally advertises that he works alone.
**Replace:** "Marketing across brand, growth, content and events. Strategy, creative and the
numbers afterwards."

**24. `lib/content.ts:115` — Athlone's Finest intro**
> "I started Athlone's Finest in 2023 **because I thought local football was lacking
> something**. ... I built the identity, shot and edited the content, ran the paid campaigns,
> and brought in sponsorships."

*Fails:* passion-project framing on a business with sponsors, suppliers and budgets; a
four-item all-singular list with nobody else in it.
**Replace:** "I founded Athlone's Finest in 2023 and still run it: a consumer sports brand
for 16 to 25 year olds in the midlands. I built the identity and the content engine, ran the
paid campaigns, and sold sponsorships to local businesses by presenting audience data against
what they wanted out of it. Suppliers, budgets and other people's deadlines come with it."

### D3 — Writing quality

**25. Em dashes — 20+ in visible copy.** Case study kickers use them as a system
(`lib/case-studies.ts:36,44,68,151,171,191,264,272,344,376,398` and rendered again in
`CaseResults.tsx:16`). Also `lib/content.ts:160,161,163` (credentials), `lib/content.ts:217`
(How I work body), `app/layout.tsx:35,36` (every page title), `Hero.tsx:87` (image alt),
`lib/case-studies.ts:289,295` (alt text).
**Fix:** kickers become `"01 · The context"`. Credentials use commas:
`"MSc Marketing Practice, University of Galway"`. Title template becomes `"%s | Niall
Awogboro"`. Line 217 splits into two sentences.

**26. `lib/content.ts:45` — rule of three.**
> "campaigns, products, and experiences"

Covered in flag 3.

**27. `lib/content.ts:247` — six-item list.**
> "strategy, digital infrastructure, content, brand, events, and budget"

Covered in flag 14.

**28. `lib/case-studies.ts:40` and `lib/content.ts:74` — repeated line.**
> "The first thing I did was not launch anything."

The identical sentence appears on the homepage card and again in the case study body, where
it also duplicates the sentence before it ("I did not do that").
**Fix:** keep it in the case study only, and delete "I did not do that."

**29. "what I actually did" — four times.** `lib/content.ts:177`, `:320`, `:344`,
`workPage.closing` context. "Actually" is defensive filler and the repetition flattens four
different sections into one voice.
**Fix:** vary. "The context, the decisions, and what moved." / "What the brief was and what
came out of it." / "The reasoning, not just the result." (rephrase without the banned
construction: "The reasoning behind each number.")

**30. `lib/content.ts:139` and `lib/case-studies.ts:401` — flat rhythm.** Three consecutive
sentences of near-identical length in the organic-side paragraphs. Break one to five words.

**31. `lib/content.ts:116` — hedge.**
> "If something works here on a small budget, I have a good sense of why."

"a good sense of why" undercuts a claim he can make flatly.
**Replace:** "It is where I test things. What works here on €200 tells me what will work
somewhere with a real budget."

---

## E. Under-used evidence

Ranked by how much each would move a niche score.

| # | Evidence | Status on site | Niche moved | Impact |
|---|---|---|---|---|
| 1 | **467% ROAS** | absent entirely | Growth | +20 |
| 2 | **All About Kombucha go-to-market** (repositioning, 400+ outlets, CLTV subscription model, phased roadmap) | absent entirely | Product marketing | +30 |
| 3 | **Marketing plan and GTM document, approved and adopted as the operational reference** | one bullet (`content.ts:254`) and half a sentence (`case-studies.ts:49`) | Product marketing | +15 |
| 4 | **Supplier operations**: Upwork contractors, written contracts with milestones, commercial dispute resolved, equipment procured within budget | absent entirely | Events, team-player | +15 |
| 5 | **Buyer, investor and KOL personas** from secondary research and stakeholder interviews | absent | Product marketing, Branding | +12 |
| 6 | **Google Merchandise Store GA4 analysis** (61,000 users, 70.3% mobile checkout abandonment, prioritised roadmap) | absent entirely | Growth | +12 |
| 7 | **Competitor benchmarking, three positioning gaps identified** | softened to "what competitors were doing", no output stated | Branding, Product marketing | +10 |
| 8 | **Creative reallocation decision** (match footage beat polished promo in the data, budget moved, return improved) | the observation is there, the decision and the money are not | Growth | +10 |
| 9 | **GA4 and Google Tag Manager implemented** (FeelTect and athlonesfinest.com) | "analytics infrastructure" only; neither tool named | Growth | +8 |
| 10 | **CAC to CLTV ratio 10.1** | absent | Growth | +8 |
| 11 | **Design work as its own surface** — exhibition stands, competition posters, bilingual assets, social graphics, brand collateral, InDesign / Affinity Designer / Canva | assets appear inside case studies; the craft is never named or collected | Branding, Content | +10 |
| 12 | **TikTok, Instagram, Facebook, YouTube by name** | TikTok ×3 in one caption; the other three never | Content | +8 |
| 13 | **Six-month performance report presented at leadership level** | the receipt image is there, captioned "reported to the team" | Growth, team-player | +6 |
| 14 | **Vienna** as the conference location, and the bilingual work tied to it | "EWMA" and "international" only | Events, Branding | +5 |
| 15 | **Tools and skills block** — HubSpot CRM, Meta Business Suite, Meta Ads Manager, GA4, GTM, CapCut, InDesign, Canva, Notion, Higgsfield | no skills section exists anywhere on the site | all five | +8 |
| 16 | **Live tournament delivery** as event management (budgets, suppliers, timelines, stakeholders) | a poster and a film; the delivery is never described | Events | +8 |
| 17 | **athlonesfinest.com** built in Claude Code with GA4/GTM | absent; the Lab page that should hold it is placeholders | Growth, Content | +5 |
| 18 | **36,000+ monthly organic impressions, followers doubled** | site says "50,000+ at peak" and "100% follower growth" | Content | conflict, see H |
| 19 | **Email Marketing certification, Claude for Marketers** | absent from the credentials list | Content, Growth | +3 |
| 20 | **Circle K 29% upsell vs 16% store average** | present on About only | cross-niche | fine |

---

## F. Niche readiness scores

| Niche | Score | Reason |
|---|---|---|
| Branding | **55** | The rebrand, the EWMA collateral and the AFE identity are all on the site, but tone of voice, visual guidelines, brand consistency and the three positioning gaps are never named, and the design craft has no surface of its own. |
| Product marketing | **20** | No GTM case study, no personas, no repositioning argument, and the single strongest signal — a plan the business adopted as its operational reference — is one bullet on the About page. |
| Growth | **50** | €8.13, 12 leads and 150,000 views are visible and well placed, but ROAS, CAC:CLTV, GA4, Google Tag Manager, the CRO analysis and the creative-reallocation decision are all absent. |
| Content | **70** | The strongest niche by distance: fifteen episodes, embedded video, Veo clips, posters and real analytics. Held back by unnamed platforms, no design credit, and no content-strategy language. |
| Events | **50** | EWMA is a real case study with a commercial number, but its hero is an empty placeholder box, Vienna and the supplier/contract/budget layer are missing, and the tournaments read as content rather than delivery. |

---

## G. Prioritised fix list

### Blockers — the site cannot go live in this state

1. Add `/public/Niall_Awogboro_CV.pdf`. Three CTAs currently 404.
2. Add `/public/headshot.jpg`. The desktop hero is a broken image.
3. Fix `hero.headlineLines` to three entries (flag 2), or the H1 renders two blank rows.
4. Replace the three Lab placeholder cards, or drop `/lab` from the nav and sitemap. "Sample: an app you built" is publicly visible.
5. Fix the `/services` link at `lib/content.ts:325`. The route does not exist and `robots.ts` disallows it.
6. Add the EWMA stand photo, or restructure so the case study does not open on a dashed grey box.
7. Resolve the €3.75 vs €8.13 contradiction (`lib/content.ts:265` against everywhere else). Two different costs per lead for the same campaign, one click apart.
8. Resolve the job title. "Marketing Manager", "Head of Marketing as an intern" and "sole hire" all appear; the brief says the title is "Marketing & Communications Intern". Flags 12–16.
9. Add `/public/og.png`. Every share on LinkedIn currently previews as a bare link.

### High impact — these move scores

10. Put 467% ROAS, €8.13 CPL and 10.1 CAC:CLTV in the hero (flag 5). +20 Growth, and it satisfies the "visible without scrolling" checklist item.
11. Build the All About Kombucha case study. +30 Product marketing. Nothing else moves that score.
12. Add an operations section to EWMA: suppliers, contracts, milestones, budget, the dispute resolved. +15 Events, and it is the strongest team-player evidence available.
13. Promote the approved marketing plan and GTM document from a bullet to a named section with the fact that the business adopted it. +15 Product marketing.
14. Add the personas and competitor benchmark as a thinking layer in the FeelTect function case study. +12 across two niches.
15. Rewrite the Athlone's Finest paid section around the creative reallocation decision. +10 Growth.
16. Fix every solo-preference line: flags 12–24. This one pass is what stops the site reading as "prefers to work alone".
17. Give design its own surface — a section or a Lab category collecting stand designs, posters, bilingual assets, social graphics and brand collateral, with InDesign, Affinity Designer and Canva named. +10 across Branding and Content.
18. Name GA4 and Google Tag Manager where the site says "analytics infrastructure". +8 Growth.

### Medium

19. Name TikTok, Instagram, Facebook and YouTube instead of "three platforms".
20. Add the Google Merchandise Store CRO analysis as a fifth or sixth case study.
21. Add a tools and skills block. No such section exists.
22. Say "presented at leadership level" on the six-month report, not "reported to the team".
23. Name Vienna in the EWMA case study and metadata.
24. Reframe the tournaments as event delivery: budgets, suppliers, timelines, stakeholders.
25. Rewrite the meta description and Twitter card (flags 10, 23).
26. Add the spelled-out plus abbreviated forms of all seven terms in section C.

### Low

27. Remove the em dashes (flag 25).
28. Vary the four "what I actually did" repeats (flag 29).
29. Delete the duplicated "first thing I did was not launch anything" (flag 28).
30. Decide what happens to `WhatIBring` — ship it or delete it.
31. Remove the reconciliation comments at `lib/content.ts:12–22` and `lib/case-studies.ts:3–10` before the repo goes public.

---

## H. Private notes for Niall

**This section never appears on the website.**

**Claims that will not survive a reference check.** The site says "Marketing Manager" in the
About experience block and in all three FeelTect case study headers, and "Head of Marketing
as an intern" on the homepage. Your own brief says the title is exactly "Marketing &
Communications Intern". Anyone who opens your LinkedIn beside the site sees the gap
immediately, and it is the kind of thing that ends a process quietly. Same for "sole hire",
"no team" and "without a team around to do either" — the brief says you worked inside a
marketing team, across sales, clinical and leadership. Right now those two claims are
inconsistent with each other as well as with the brief.

**Numbers that contradict each other on your own site.**
- Cost per qualified lead: **€3.75** (`lib/content.ts:265`, About page) vs **€8.13** (hero,
  homepage card, case study hero, case study results). Same campaign, two numbers.
- Impressions growth: site says **700%**, the evidence bank says **1,900%**. You are
  under-claiming by more than half. Which is the defensible one?
- Follower growth: **37%** (homepage, case study) vs **40%** (About achievements, evidence
  bank).
- Monthly organic impressions: **50,000+ at peak** (site) vs **36,000+ monthly** (bank).
  Peak and standing are different claims — say which you mean.
- MSc grade: **"projected first class"** (homepage), **"with a 1:1"** (About opening),
  **"Projected: First class"** (Education block), **2.1** in the evidence bank. Four
  statements, three different grades.
- EWMA leads: there is a comment in `lib/content.ts:21` reading "other docs say 50+ —
  verify". If it is 50, you are leaving more than half the number on the table.

**Certifications to check before launch.** The site claims **"Google Ads certified"**
(`lib/content.ts:306`). Your brief says Google Ads is a skill, not a certification. Take it
off or get the cert. **"Advanced Excel certified"** and **"CRO and UX Principles certified"**
are also on the site but not in the evidence bank — confirm both exist and that you can
produce them. Conversely, **Email Marketing certified** and **Claude for Marketers** are in
the bank and missing from the site.

**The €3,000 saving.** It appears three times, including as a pull stat and a hero stat, and
it is not in the evidence bank. Have the calculation ready: what quote, from whom, for what
scope. A stat that size invites the question.

**Genuinely thin spots.**
- *Product marketing.* This is the real hole. There is currently nothing on the site a
  product marketing hiring manager would accept as evidence. Kombucha plus the approved
  FeelTect plan fixes it completely, but until they are on the site, do not apply to PM roles
  with this link.
- *Paid search and email/CRM execution.* HubSpot is in your tool list but there is no
  campaign on the site that used it, and no email marketing work anywhere. If a JD leads with
  lifecycle or CRM, expect to be asked. The Kombucha lifecycle/subscription design is your
  answer — another reason to publish it.
- *Scale.* Every budget on the site is small. Nobody expects otherwise at this stage, but be
  ready with the honest version: "the mechanics are identical, the zeroes are different, and
  here is what I would watch differently at 50x."
- *Agency-side experience.* None. If you go for agency roles, the supplier and contractor
  work at FeelTect is the closest analogue — brief, milestones, dispute, delivery. Lead with
  it there.

**Assets you probably have that are not on the site.** Ranked by what they would unlock:
1. **The Meta Ads Manager screenshot showing 467% ROAS.** Highest-value missing asset on the
   list. The AFE case study already has a TikTok analytics receipt; the paid section has no
   equivalent, which is exactly where a performance reader looks.
2. The marketing plan / GTM document — a contents page or a redacted spread. "Approved and
   adopted" is a much stronger claim with a page beside it.
3. The competitor benchmark, with the three positioning gaps visible.
4. The persona one-pagers.
5. A GA4 screenshot showing the property you set up, and the GTM container.
6. The Upwork contract or milestone schedule, redacted.
7. A photo of the EWMA stand in Vienna with people at it. The case study currently has the
   posters and the banner but no evidence you were standing there.
8. Kombucha and Google Merch Store: whatever the deliverable was — the roadmap slide, the
   funnel chart, the prioritised fix list.

**Questions I could not answer from the site or the bank.**
- Who else was in the FeelTect marketing team, and what did they own? You need one sentence
  ready, because the site's collaboration claims will be built on it.
- Did any AFE sponsor renew? A renewal is worth more than a signing.
- The 15-episode series was "adopted by the commercial team as an ongoing client-facing
  asset" per the bank, but the site does not say so. Is it still in use? That is the strongest
  line available about the series and it is not on the site.
- Was the €8.13 CPL against a defined budget you can state? "467% ROAS" without a spend
  figure invites scepticism; with one it becomes unanswerable.

**Have an answer ready for.**
- "Your site says Marketing Manager, your CV says intern." Fix the site and this never comes
  up.
- "How was 467% ROAS calculated — what counted as revenue?"
- "What is the CAC to CLTV 10.1 based on, over what lifetime?"
- "You have run everything yourself. How are you in a team?" The site currently supplies no
  counter-evidence. After the flag 12–24 rewrites, it does.

---

## I. Launch recommendation

*(Written before the fixes in section J. Superseded.)*

**Not ready.** Nine things on this site are broken rather than weak: the CV downloads 404,
the hero portrait is missing, the H1 renders two blank rows, three Lab cards say "Replace
this card in lib/projects.ts", the About page links to a page that does not exist, the EWMA
case study opens on an empty grey box, the same campaign is quoted at two different costs per
lead, and the job title on the site is not the job title you held. None of those are
judgement calls. Underneath the breakage the site is better than its score suggests — the
content niche is genuinely strong, the case studies have real receipts, and the voice is
yours and does not read like a template. But product marketing scores 20 because the evidence
for it exists entirely off-site, the 467% ROAS never appears anywhere, and enough
solo-preference language survives that an in-house reader could reasonably decide you would
rather work alone. Fix the nine blockers, make the six high-impact additions (ROAS in the
hero, Kombucha, the EWMA operations layer, the approved plan, the personas and benchmark, the
solo-language pass), and this is a strong site across four niches with a credible route on the
fifth. That is roughly two working days of copy and one of asset gathering.

---

## J. After implementation

Everything in section G except the binary assets has been built. The site now has seven
case studies, three new sections, and reconciled numbers throughout.

### New scores

| Niche | Before | After | What moved it |
|---|---|---|---|
| Branding | 55 | **78** | A dedicated brand chapter in the FeelTect case study (brand guidelines, tone of voice, visual identity, brand consistency, InDesign / Affinity Designer / Canva), the competitor benchmark with its three positioning gaps as the thinking layer, and a Craft section on `/work` collecting eight design assets in one frame. |
| Product marketing | 20 | **75** | A full All About Kombucha case study (diagnosis, repositioning, four-workstream GTM plan, CLTV subscription model, phased roadmap), plus the approved FeelTect GTM document promoted from a bullet to the case study's headline claim, with the personas and stakeholder interviews behind it. |
| Growth | 50 | **80** | 467% ROAS in the H1 and a stat strip above the fold, the creative-reallocation decision as its own chapter, GA4 and Google Tag Manager named in three places, and a Google Merchandise Store CRO case study with the funnel analysis and prioritised roadmap. |
| Content | 70 | **82** | TikTok, Instagram, Facebook and YouTube named and evidenced, the content calendar stated, graphic design and copywriting credited, CapCut and Higgsfield added, and the series' adoption by the commercial team made explicit. |
| Events | 50 | **78** | Vienna named throughout, an operations chapter covering Upwork contractors, written contracts with delivery milestones, a resolved commercial dispute and procurement inside budget, plus a second event case study for the tournament delivery and sponsorship negotiation. |

### What was built

**New case studies (7 total, was 4)**
- `/work/afe-tournament` — live event delivery, budget, suppliers, timelines, sponsorship negotiation. Reuses existing tournament media.
- `/work/kombucha` — go-to-market, repositioning, CLTV subscription model.
- `/work/google-merch` — GA4 funnel analysis, 70.3% mobile checkout abandonment, prioritised CRO roadmap.

**New sections**
- `components/sections/Disciplines.tsx` — the five briefs with a line of evidence each, directly under the hero.
- `components/sections/StrategyBlock.tsx` — the applied strategy work on the homepage.
- `components/sections/work/Craft.tsx` — the design surface, eight assets in a uniform grid.
- `components/sections/about/Toolkit.tsx` — tools grouped by job. The site had no skills block at all.

**Rewritten**
- Hero: three headline lines (the empty-span bug is gone), a stat strip carrying ROAS, CPL and CAC:CLTV above the fold, and supporting copy that leads with outcomes.
- Every "sole hire", "no team", "Marketing Manager" and "Head of Marketing as an intern" reference. The title is now "Marketing & Communications Intern" everywhere, with collaboration named in each case study's role line.
- The About headline, opening, three panels (Strategist / Builder / Operator), all six How I work points, and the full FeelTect and Athlone's Finest experience entries.
- Meta description, OG and Twitter card. The Twitter card no longer advertises working alone.
- Lab page: three real projects replacing the "Sample:" placeholders.

**Fixed**
- €3.75 removed; €8.13 is the only CPL on the site. FeelTect growth figures reconciled to 1,900% / 40% / 200%. Athlone's Finest organic reconciled to 36,000+ monthly impressions.
- "Google Ads certified" removed from credentials; Google Ads sits in the toolkit as a skill. Email Marketing certified and Claude for Marketers added.
- The `/services` 404 replaced with a link to the Lab, and the `robots.ts` disallow removed.
- The EWMA empty hero placeholder is gone; the case study opens on copy and leads with the stand creative.
- Em dashes removed from all visible copy. Case study kickers now use a middot.
- `WhatIBring` dead component deleted.
- The LinkedIn receipt caption now explains the 690% six-month figure against the 1,900% nine-month one, rather than leaving a reader to spot the difference.

**New assets**
- `/public/work/kombucha/positioning.svg` and `/public/work/google-merch/funnel.svg`, drawn in the site palette. Both are diagrams of the analysis, clearly captioned as such.

### Still outstanding

Three binary files only Niall can supply. The build passes and every page renders without
them, but two are visible gaps:

1. **`/public/Niall_Awogboro_CV.pdf`** — three "Download my CV" buttons still 404.
2. **`/public/headshot.jpg`** — the desktop hero portrait returns a 400 from the image optimiser.
3. **`/public/og.png`** (1200×630) — no link preview on LinkedIn.

Worth adding when available, not blocking: a photo of the EWMA stand in Vienna, the Meta
Ads Manager screenshot showing the 467% ROAS (the single highest-value missing receipt),
and screenshots for the three Lab cards.

The accuracy items in section H stand unchanged and are still Niall's to confirm, in
particular the MSc grade, the €3,000 saving, and the 1,900% impressions figure.

---

## K. Reconciled against the master CV

`Niall_Awogboro_Master_CV_1.pdf` is now the source of truth and is installed at
`/public/Niall_Awogboro_CV.pdf`. Where the CV and the original audit brief disagreed, the
CV won. Four of those changes are material:

| Item | Audit brief said | Master CV says | Site now says |
|---|---|---|---|
| FeelTect job title | Marketing & Communications **Intern** | Marketing & Communications **Lead** | Lead |
| CAC to CLTV | 10.1 | **4.1** | 4.1 |
| MSc grade | 2.1 | **Grade: 2.1** | 2.1 (was "projected first class") |
| Certifications | Email Marketing, Claude for Marketers | same, and nothing else | Advanced Excel and CRO/UX certs removed |

**The title change is the one to double-check.** The brief that drove the first audit was
emphatic that the title is "exactly Marketing & Communications Intern"; the CV says Lead.
The site now says Lead in six places (homepage eyebrow, About experience entry, and the
role line on three case studies). If the CV is the version going to employers, this is
consistent and fine. If it is not, tell me and I will flip all six back in one pass.

Also pulled through from the CV: HubSpot CRM as the tool the EWMA leads were tracked in,
the video series as a sales enablement asset, B2B demand generation, Reels and on-camera
pieces, daily community management, brand partnerships, live event activations, the Circle
K trading and merchandising detail, Event Manager of the Public Speaking Society, and the
full module lists for both degrees. The hero eyebrow now reads "Marketing Executive ·
Brand, Growth, Content & Events", taken from the CV's own title line, which closes the last
open item on the launch checklist.

### Assets

- **CV**: installed. The three download buttons now serve a real 307KB PDF.
- **Headshot**: background removed with `rembg` (u2net human segmentation plus alpha
  matting for the hair edges), trimmed to the subject, padded to the hero's 400×520 ratio
  and exported as `/public/headshot.png` at 900×1170 with transparency. The hero no longer
  frames it in a rounded box; the cut-out stands directly on the navy with an accent glow
  behind it.
- **OG card**: `/public/og.png`, composed at 1200×630 in the site palette using the
  project's own typefaces (Barlow Condensed, Plus Jakarta Sans, DM Mono, converted out of
  the vendored web fonts so the card matches the site exactly). Carries the name and title,
  the two headline lines, and 467% / €8.13 / 1,900% beside the cut-out.
- **Nothing is missing.** Every asset the site references now exists.
