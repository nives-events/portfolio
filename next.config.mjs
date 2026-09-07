/** @type {import('next').NextConfig} */

const isDev = process.env.NODE_ENV === "development";

/**
 * Content Security Policy.
 *
 * `unsafe-inline` on script-src is required: Next injects its bootstrap inline,
 * and the JSON-LD block in app/layout.tsx is an inline script. A nonce would be
 * stricter but forces every page to render dynamically, which would give up the
 * fully static build. Dev additionally needs `unsafe-eval` for hot reload.
 *
 * Every asset on this site is self-hosted, including the fonts (next/font
 * downloads and serves them from the same origin), so nothing needs an
 * external allowance.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "media-src 'self'",
  `connect-src 'self'${isDev ? " ws: wss:" : ""}`,
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "upgrade-insecure-requests",
].join("; ");

const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    // The four year-by-year Athlone's Finest write-ups were consolidated into
    // one case study (September 2026 revision), so the old slugs redirect.
    return [
      { source: "/work/afe-2023", destination: "/work/athlones-finest", permanent: true },
      { source: "/work/afe-2024", destination: "/work/athlones-finest", permanent: true },
      { source: "/work/afe-2025", destination: "/work/athlones-finest", permanent: true },
      { source: "/work/afe-2026", destination: "/work/athlones-finest", permanent: true },
      { source: "/work/afe-tournament", destination: "/work/athlones-finest", permanent: true },
      { source: "/work/feeltect-video", destination: "/work/feeltect-function", permanent: true },
    ];
  },
  // Security headers applied to every route.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
