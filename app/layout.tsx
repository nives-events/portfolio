import type { Metadata } from "next";
import { Barlow_Condensed, DM_Mono, Newsreader, Plus_Jakarta_Sans } from "next/font/google";
import { MotionProvider } from "@/components/motion/MotionProvider";
import { Footer } from "@/components/site/Footer";
import { Header } from "@/components/site/Header";
import { site } from "@/lib/content";
import { SITE_URL, ogImage } from "@/lib/seo";
import "./globals.css";

const display = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["700"],
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

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${site.name} · Brand, Growth & Event Marketing, Dublin`,
    template: `%s · ${site.name}`,
  },
  description:
    "Marketing across brand, product marketing, growth, content and events. 467% ROAS on paid social, 1,900% impressions growth in MedTech, a go-to-market strategy adopted by the business, and an international conference delivered end to end.",
  keywords: [
    "Brand Marketing",
    "Product Marketing",
    "Growth Marketing",
    "Content Marketing",
    "Event Marketing",
    "Go-to-market",
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
      "467% ROAS on paid social. 1,900% impressions growth in MedTech. A go-to-market strategy a business adopted, and a clinical conference delivered end to end.",
    images: [ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} · Brand, Growth & Event Marketing`,
    description:
      "Strategy, creative and the numbers afterwards. 467% ROAS, a go-to-market plan adopted by the business, and events delivered end to end.",
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
    "Go-to-market strategy",
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
      className={`${display.variable} ${body.variable} ${mono.variable}`}
    >
      <body className="bg-bg font-sans text-primary antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:bg-accent focus:px-4 focus:py-2 focus:text-bg"
        >
          Skip to content
        </a>

        <MotionProvider>
          <Header />
          <main id="main">{children}</main>
          <Footer />
        </MotionProvider>

        <script
          type="application/ld+json"
          // Static, developer-controlled value — no user input, no XSS surface.
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personLd) }}
        />
      </body>
    </html>
  );
}
