import type { Stat } from "@/lib/types";

type StatStripProps = {
  stats: Stat[];
  /** Accessible heading for the list, visually hidden. */
  label: string;
};

/**
 * Inline, wrapping list of stats. Values use the mono face to read as precise
 * data; labels sit quietly beside them. Rendered as a description list so each
 * value is programmatically tied to its label.
 */
export function StatStrip({ stats, label }: StatStripProps) {
  return (
    <dl aria-label={label} className="flex flex-wrap gap-x-8 gap-y-4">
      {stats.map((stat) => (
        <div key={stat.label} className="flex items-baseline gap-2">
          <dt className="sr-only">{stat.label}</dt>
          <dd className="flex items-baseline gap-2">
            <span className="font-mono text-lg text-accent">{stat.value}</span>
            <span className="text-xs uppercase tracking-wider text-muted">
              {stat.label}
            </span>
          </dd>
        </div>
      ))}
    </dl>
  );
}
