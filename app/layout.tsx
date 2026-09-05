import type { Metadata } from "next";
import { Caveat, DM_Mono, Plus_Jakarta_Sans, Pragati_Narrow } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { site } from "@/lib/content";
import { SITE_URL, ogImage } from "@/lib/seo";
import "./globals.css";

/**
 * Type system for the "open mic night" direction:
 *  - Pragati Narrow: display headings. Condensed, tall, gig-poster energy.
 *  - Plus Jakarta Sans: body copy.
 *  - DM Mono: camera metadata, kickers, stats.
 *  - Caveat: handwritten captions on photo prints.
 */
const display = Pragati_Narrow({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-display",
  display: "swap",
});

const body = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-body",
  display: "swap",
});
const mono = DM_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-mono",
  display: "swap",
});
const hand = Caveat({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-hand",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} · Brand, Growth & Event Marketing, Dublin`,
    template: `%s · ${site.name}`,
  },
  description:
    "Marketing across brand, product marketing, growth, content and events. 467% ROAS on paid social, 1,900% impressions growth in MedTech, a Marketing and Communications Plan adopted by the business, and an international conference delivered end to end.",
  keywords: [
    "Brand Marketing",
    "Product Marketing",
    "Growth Marketing",
    "Content Marketing",
    "Event Marketing",
    "Marketing Strategy",
    "Paid Social",
    "Dublin",
    "Niall Awogboro",
  ],
  authors: [{ name: site.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: SITE_URL,
    siteName: site.name,
    title: `${site.name} · Brand, Growth & Event Marketing`,
    description:
      "467% ROAS on paid social. 1,900% impressions growth in MedTech. A marketing strategy a business adopted, and a clinical conference delivered end to end.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Brand, Growth & Event Marketing`,
    description:
      "Strategy, creative and the numbers afterwards. 467% ROAS, a marketing plan adopted by the business, and events delivered end to end.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

const personLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: SITE_URL,
  jobTitle: "Marketing Executive",
  knowsAbout: [
    "Brand marketing",
    "Product marketing",
    "Marketing strategy",
    "Growth marketing",
    "Paid social",
    "Content production",
    "Event marketing",
  ],
  email: `mailto:${site.email}`,
  sameAs: [site.linkedin],
  address: { "@type": "PostalAddress", addressLocality: "Dublin", addressCountry: "IE" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} ${hand.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-bg font-sans text-primary antialiased">
        {/* No-FOUC theme init. Rendered as real server HTML at the top of
            <body>, so it runs synchronously during parse and stamps the
            correct data-theme onto <html> before any content paints. */}
        <script
          // Static, developer-controlled string. No user input, no XSS surface.
          dangerouslySetInnerHTML={{
            __html:
              "(function(){try{var t=localStorage.getItem('theme-preference');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){document.documentElement.setAttribute('data-theme','light');}})();",
          }}
        />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-primary focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>

        {/* Film grain over the whole set. Pure CSS (SVG noise), pointer-events
            none, sits under the header so nothing interactive is affected. */}
        <div aria-hidden="true" className="grain" />

        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>

        <script
          type="application/ld+json"
          // Static, developer-controlled value: no user input, no XSS surface.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
