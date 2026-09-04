import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
} & Pick<AnchorHTMLAttributes<HTMLAnchorElement>, "aria-label" | "download">;

const base =
  "group relative inline-flex items-center justify-center overflow-hidden px-7 py-3 text-sm font-medium tracking-wide rounded-lg transition-transform duration-100 active:scale-[0.96] focus-visible:outline-offset-4";

/** Both variants share the fill-sweep hover; only the palette differs. */
const variants: Record<Variant, { border: string; fill: string }> = {
  primary: { border: "border border-primary text-primary", fill: "bg-primary" },
  ghost: { border: "border border-primary/30 text-primary/70", fill: "bg-primary" },
};

/** Static files (e.g. /cv.pdf) and external schemes must bypass Next's client router. */
function isPlainAnchor(href: string) {
  return (
    href.startsWith("http") ||
    href.startsWith("mailto:") ||
    href.startsWith("#") ||
    /\.[a-z0-9]+$/i.test(href)
  );
}

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  const { border, fill } = variants[variant];
  const classes = `${base} ${border} ${className}`;

  const content = (
    <>
      <span
        aria-hidden="true"
        className={`absolute inset-0 origin-left scale-x-0 rounded-lg ${fill} transition-transform duration-200 ease-out-strong group-hover:scale-x-100`}
      />
      <span className="relative transition-colors duration-200 group-hover:text-bg">
        {children}
      </span>
    </>
  );

  if (isPlainAnchor(href)) {
    const external = href.startsWith("http");
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        {...rest}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...rest}>
      {content}
    </Link>
  );
}
