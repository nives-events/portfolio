import type { Metadata } from "next";
import { site } from "./content";

/** Update to the live domain before launch so OG/canonical URLs resolve. */
export const SITE_URL = "https://niallawogboro.com";

/**
 * Next merges metadata one level deep, so a page that declares `openGraph`
 * replaces the layout's `openGraph` wholesale rather than adding to it. Every
 * page therefore has to restate the image, which is what this helper is for.
 */
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: `${site.name}, marketing executive: 467% return on ad spend, €8.13 cost per lead, 1,900% impressions growth`,
};

export function openGraphFor({
  title,
  description,
  path,
  type = "website",
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
}): Metadata["openGraph"] {
  return {
    type,
    locale: "en_IE",
    siteName: site.name,
    url: path,
    title,
    description,
    images: [ogImage],
  };
}
