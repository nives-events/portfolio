"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "theme-preference";

/**
 * House lights. One compact button that flips the whole set between light and
 * dark. The inline script in app/layout.tsx has already stamped the correct
 * theme onto <html> before first paint; this control reflects and toggles it,
 * persisting an explicit choice so it survives reloads.
 */
export function ThemeToggle({ className = "" }: { className?: string }) {
  // SSR and first client render must agree, so start neutral and read the real
  // theme after mount. `mounted` gates the theme-dependent visuals.
  const [theme, setTheme] = useState<Theme>("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const current = (document.documentElement.getAttribute("data-theme") as Theme) || "light";
    setTheme(current);
    setMounted(true);
  }, []);

  const toggle = () => {
    const next: Theme = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      // Private mode / storage disabled: the choice just won't persist.
    }
  };

  const isDark = mounted && theme === "dark";

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle light or dark theme"
      aria-pressed={isDark}
      suppressHydrationWarning
      className={`group inline-flex h-11 w-11 items-center justify-center ${className}`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center rounded-full border border-current text-current opacity-80 transition-opacity duration-150 motion-reduce:transition-none group-hover:opacity-100">
        {/* Sun: shown while the lights are up. */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`absolute h-4 w-4 transition-opacity duration-150 motion-reduce:transition-none ${
            isDark ? "opacity-0" : "opacity-100"
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
        </svg>
        {/* Moon: shown when the house lights go down. */}
        <svg
          viewBox="0 0 24 24"
          aria-hidden="true"
          className={`absolute h-4 w-4 transition-opacity duration-150 motion-reduce:transition-none ${
            isDark ? "opacity-100" : "opacity-0"
          }`}
          fill="currentColor"
        >
          <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
        </svg>
      </span>
    </button>
  );
}
