import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { aboutPage } from "@/lib/content";
import type { ToolGroup } from "@/lib/types";

const DARK_INVERT = new Set(["CapCut", "DaVinci Resolve"]);

const ICON_MAP: Record<string, string> = {
  "Google Analytics 4": "/icons/google-analytics.svg",
  "Google Tag Manager": "/icons/google-tag-manager.svg",
  "Google Search Console": "/icons/google-search-console.svg",
  "Google Ads": "/icons/google-ads.svg",
  "Google Business Profile": "/icons/google-business-profile.svg",
  "Meta Ads Manager": "/icons/meta.svg",
  "Meta Business Suite": "/icons/meta.svg",
  "Instagram Insights": "/icons/instagram.svg",
  "HubSpot CRM": "/icons/hubspot.svg",
  "WordPress": "/icons/wordpress.svg",
  "Elementor Pro": "/icons/elementor.svg",
  "Wix": "/icons/wix.svg",
  "Adobe InDesign": "/icons/adobe-indesign.svg",
  "Adobe Illustrator": "/icons/adobe-illustrator.svg",
  "Affinity Designer": "/icons/affinity-designer.svg",
  "Canva": "/icons/canva.svg",
  "DaVinci Resolve": "/icons/davinci-resolve.svg",
  "CapCut": "/icons/capcut.svg",
  "YouTube": "/icons/youtube.svg",
  "LinkedIn": "/icons/linkedin.svg",
  "Claude Code": "/icons/claude-code.svg",
  "Claude": "/icons/claude.svg",
  "Google Sheets": "/icons/google-sheets.svg",
  "Microsoft Excel": "/icons/microsoft-excel.svg",
};

export function TechStack({
  id = "tech-stack",
  tools,
}: {
  id?: string;
  tools?: readonly string[];
}) {
  const { heading, intro, groups } = aboutPage.techStack;

  const displayGroups: readonly ToolGroup[] = tools
    ? [{ heading: "Tools used", tools: [...tools] }]
    : groups;

  return (
    <section id={id} aria-labelledby={`${id}-heading`} className="scroll-mt-24 bg-surface">
      <div className="container-page py-24">
        <Reveal>
          <h2
            id={`${id}-heading`}
            className="font-display text-4xl font-bold uppercase tracking-tight text-primary sm:text-5xl"
          >
            {heading}
          </h2>
          {!tools ? (
            <p className="mt-3 max-w-prose text-lg text-primary/80">{intro}</p>
          ) : null}
        </Reveal>

        <Reveal delay={100} className="mt-12">
          <div className="rounded-[28px] border-2 border-primary bg-bg px-6 py-10 shadow-[0_24px_60px_-28px_var(--shadow-card)] sm:px-10 sm:py-12">
            <div className={tools ? "" : "grid gap-x-10 gap-y-10 md:grid-cols-2"}>
              {displayGroups.map((group, gi) => (
                <div
                  key={group.heading}
                  className={!tools && gi === 0 ? "md:col-span-2" : undefined}
                >
                  <h3 className="font-mono text-[11px] uppercase tracking-[0.24em] text-muted">
                    {group.heading}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-3">
                    {group.tools.map((tool, ti) => {
                      const seed = gi * 7 + ti * 3;
                      const dur = 5 + (seed % 5) * 0.7;
                      const delay = -((seed * 1.3) % 6);
                      const rot = ((seed % 5) - 2) * 0.8;
                      const icon = ICON_MAP[tool];
                      return (
                        <li
                          key={tool}
                          className="stack-chip flex select-none items-center gap-2 rounded-full border border-primary/50 bg-surface px-4 py-2 text-sm font-medium text-primary"
                          style={
                            {
                              "--chip-dur": `${dur}s`,
                              "--chip-delay": `${delay}s`,
                              "--chip-rot": `${rot}deg`,
                            } as React.CSSProperties
                          }
                        >
                          {icon ? (
                            <Image
                              src={icon}
                              alt=""
                              width={18}
                              height={18}
                              className={`shrink-0${DARK_INVERT.has(tool) ? " dark:invert" : ""}`}
                            />
                          ) : null}
                          {tool}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
