"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/content";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /**
   * While the drawer is open it owns the page: scrolling is locked, Escape
   * closes it, and Tab cycles inside it rather than wandering through the
   * page behind. Focus moves in on open and returns to the trigger on close,
   * so a keyboard user is never dropped back at the top of the document.
   */
  useEffect(() => {
    if (!open) return;

    const drawer = drawerRef.current;
    // Captured now so the cleanup restores focus to the button that opened the
    // drawer, not to whatever the ref happens to hold when the effect tears down.
    const trigger = triggerRef.current;
    const focusable = () =>
      Array.from(
        drawer?.querySelectorAll<HTMLElement>("a[href], button:not([disabled])") ?? [],
      ).filter((el) => el.tabIndex !== -1);

    focusable()[0]?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab") return;

      const items = focusable();
      const first = items[0];
      const last = items[items.length - 1];
      if (!first || !last) return;

      const active = document.activeElement;

      if (e.shiftKey && (active === first || !drawer?.contains(active))) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
      trigger?.focus();
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-bg/[0.72] backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container-page flex h-16 items-center justify-between">
          <Link
            href="/"
            className="inline-flex min-h-[44px] items-center text-base font-medium tracking-wide text-primary transition-opacity duration-200 hover:opacity-70"
          >
            {site.name}
          </Link>

          {/* Desktop navigation */}
          <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                // `before` is an invisible 44px hit area centred on the label, so
                // tablet taps land without stretching the box and dragging the
                // underline away from the text.
                className="relative text-xs font-medium uppercase tracking-widest text-primary/60 transition-colors duration-200 hover:text-primary before:absolute before:inset-x-0 before:top-1/2 before:h-11 before:-translate-y-1/2 before:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:h-[1px] after:w-0 after:bg-accent after:transition-all after:duration-200 hover:after:w-full"
              >
                {item.label}
              </Link>
            ))}

            {/* Let's Talk — mailto, rounded pill, fill sweep on hover */}
            <a
              href={`mailto:${site.email}`}
              aria-label="Send Niall an email"
              className="group relative inline-flex min-h-[44px] items-center overflow-hidden rounded-[50px] border border-accent px-5 py-2 text-xs font-medium uppercase tracking-widest text-accent transition-transform duration-100 active:scale-[0.96]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out-strong group-hover:scale-x-100"
              />
              <span className="relative transition-colors duration-200 group-hover:text-bg">
                Let&apos;s talk
              </span>
            </a>
          </nav>

          {/* Mobile trigger */}
          <button
            ref={triggerRef}
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-drawer"
            onClick={() => setOpen(true)}
            className="-mr-2 flex h-11 w-11 items-center justify-center transition-opacity hover:opacity-70 md:hidden"
          >
            <span className="relative block h-4 w-6">
              <span className="absolute left-0 top-0 h-[1.5px] w-6 bg-primary" />
              <span className="absolute left-0 top-[7px] h-[1.5px] w-6 bg-primary" />
              <span className="absolute bottom-0 left-0 h-[1.5px] w-6 bg-primary" />
            </span>
          </button>
        </div>
      </header>

      {/* Mobile drawer. Deliberately a sibling of the header, not a child of it.
          Once past 80px the header takes `backdrop-blur-md`, and a non-none
          backdrop-filter makes an element the containing block for its fixed
          descendants. Nested, this overlay resolved against the 64px header box
          instead of the viewport, so the panel opened as a 64px sliver with no
          background under it. Kept outside, `fixed inset-0` means the viewport. */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${open ? "" : "pointer-events-none"}`}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className={`absolute inset-0 bg-black/50 transition-opacity duration-200 ${
            open ? "opacity-100" : "opacity-0"
          }`}
        />
        <div
          ref={drawerRef}
          id="mobile-drawer"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className={`absolute right-0 top-0 flex h-full w-4/5 max-w-sm flex-col bg-surface transition-transform duration-300 ease-drawer ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex h-16 items-center justify-end px-6">
            <button
              type="button"
              aria-label="Close menu"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="-mr-2 inline-flex min-h-[44px] items-center px-2 text-sm uppercase tracking-widest text-primary/60 transition-colors hover:text-primary"
            >
              Close
            </button>
          </div>
          <nav aria-label="Mobile" className="flex flex-col gap-6 px-6 pt-6">
            {nav.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                tabIndex={open ? 0 : -1}
                onClick={() => setOpen(false)}
                className="flex min-h-[44px] items-center font-display text-4xl font-bold text-primary transition-opacity hover:opacity-70"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={`mailto:${site.email}`}
              tabIndex={open ? 0 : -1}
              className="mt-4 inline-flex min-h-[44px] w-fit items-center rounded-[50px] border border-accent px-5 py-2 text-xs font-medium uppercase tracking-widest text-accent"
            >
              Let&apos;s talk
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}
