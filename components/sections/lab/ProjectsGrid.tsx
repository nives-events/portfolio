"use client";

import { m } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { CaseFigure } from "@/components/case-study/CaseFigure";
import { projectCategories, projects } from "@/lib/projects";
import type { Project, ProjectCategory } from "@/lib/types";

type Filter = "All" | ProjectCategory;

const ease = [0.23, 1, 0.32, 1] as const;

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col gap-4 border-[0.5px] border-border bg-surface p-6 transition-all duration-200 ease-out-strong hover:-translate-y-1 hover:border-accent hover:shadow-[0_8px_32px_rgba(96,165,250,0.08)]">
      <CaseFigure image={project.image} ratio="aspect-[16/10]" />

      <div className="flex items-baseline justify-between gap-4">
        <p className="text-xs uppercase tracking-wider text-muted">{project.category}</p>
        <p className="font-mono text-xs text-primary">{project.year}</p>
      </div>

      <h3 className="font-display text-2xl font-bold leading-tight text-primary transition-colors duration-200 group-hover:text-accent">
        {project.title}
      </h3>

      <p className="text-sm leading-relaxed text-primary/80">{project.description}</p>

      <ul className="flex flex-wrap gap-2 pt-1">
        {project.stack.map((tech) => (
          <li
            key={tech}
            className="rounded-[50px] border border-border px-3 py-1 text-xs text-primary/70"
          >
            {tech}
          </li>
        ))}
      </ul>

      {project.links.length > 0 ? (
        <div className="mt-auto flex flex-wrap gap-6 pt-3">
          {project.links.map((link) => {
            const internal = link.href.startsWith("/") && !/\.[a-z0-9]+$/i.test(link.href);
            const className =
              "inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 transition-colors duration-150 hover:text-accent hover:decoration-accent";

            return internal ? (
              <Link key={link.label} href={link.href} className={className}>
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className={className}
                {...(link.href.startsWith("http")
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {link.label} <span aria-hidden="true">↗</span>
              </a>
            );
          })}
        </div>
      ) : null}
    </article>
  );
}

/**
 * Filterable grid of personal projects. Chips narrow by category; the grid
 * re-runs its stagger animation on every filter change so the page answers
 * back when you interact with it.
 */
export function ProjectsGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const visible =
    filter === "All" ? projects : projects.filter((project) => project.category === filter);

  const filters: Filter[] = ["All", ...projectCategories];

  return (
    <section aria-labelledby="projects-heading" className="container-page pb-24">
      {/* Keeps the heading order h1 -> h2 -> h3; the card titles are the h3s. */}
      <h2 id="projects-heading" className="sr-only">
        Projects
      </h2>

      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-3">
        {filters.map((option) => {
          const active = option === filter;
          const count =
            option === "All"
              ? projects.length
              : projects.filter((project) => project.category === option).length;

          return (
            <button
              key={option}
              type="button"
              aria-pressed={active}
              onClick={() => setFilter(option)}
              className={`inline-flex items-center gap-2 rounded-[50px] border px-5 py-2 text-xs font-medium uppercase tracking-widest transition-all duration-200 active:scale-[0.96] ${
                active
                  ? "border-accent bg-accent text-bg"
                  : "border-primary/30 text-primary/70 hover:border-accent hover:text-accent"
              }`}
            >
              {option}
              <span className={`font-mono ${active ? "text-bg/70" : "text-muted"}`}>{count}</span>
            </button>
          );
        })}
      </div>

      {/* Keyed on the filter so cards re-stagger in on every change. */}
      <m.ul
        key={filter}
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.07 } } }}
        className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
      >
        {visible.map((project) => (
          <m.li
            key={project.title}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease } },
            }}
            className="list-none"
          >
            <ProjectCard project={project} />
          </m.li>
        ))}
      </m.ul>

      {visible.length === 0 ? (
        <p className="mt-12 text-base text-muted">Nothing in this category yet. Soon.</p>
      ) : null}
    </section>
  );
}
