"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { LinkButton } from "@/components/ui/Button";
import type { Project } from "@/lib/data";
import { cn } from "@/lib/utils";

export function ProjectCard({
  project,
  className,
}: {
  project: Project;
  className?: string;
}) {
  const reduce = useReducedMotion();

  return (
    <motion.article
      whileHover={
        reduce
          ? undefined
          : { y: -8, transition: { type: "spring", stiffness: 300, damping: 24 } }
      }
      className={cn(
        "premium-border group flex h-full flex-col overflow-hidden rounded-[1.45rem] border border-slate-300/45 bg-white/72 transition-all duration-300 hover:border-slate-300/70 hover:shadow-[0_24px_70px_-44px_rgba(61,134,207,0.2)]",
        className,
      )}
    >
      <div className="relative aspect-video w-full overflow-hidden bg-[#e8eff8]">
        <Image
          src={project.thumbnail_image}
          alt={project.thumbnail_alt}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover object-center transition duration-500 group-hover:scale-[1.02]"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background via-background/40 to-transparent" />
        <span className="absolute left-4 top-4 rounded-full border border-slate-300/55 bg-white/86 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-cyan backdrop-blur-md sm:left-5 sm:top-5">
          {project.category}
        </span>
        {project.featured ? (
          <span className="absolute right-4 top-4 rounded-full border border-emerald-500/30 bg-emerald-100/90 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-800 sm:right-5 sm:top-5">
            Featured
          </span>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-[1.35rem] font-medium leading-[1.08] tracking-[-0.03em] text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">
          {project.short_description}
        </p>
        <p className="mt-4 text-[11px] font-semibold uppercase tracking-[0.16em] text-foreground/55">
          {project.tech_stack.slice(0, 2).join(" · ")}
        </p>
        <ul className="mt-5 flex flex-wrap gap-2.5">
          {project.tech_stack.map((t) => (
            <li key={t}>
              <span className="inline-flex rounded-full border border-slate-300/45 bg-white/82 px-3 py-1.5 text-[11px] font-medium text-muted">
                {t}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <LinkButton
            href={`/projects/${project.slug}`}
            variant="secondary"
            className="w-full sm:w-auto !px-5 !text-xs"
          >
            View details
          </LinkButton>
          <LinkButton
            href={project.live_url}
            className="w-full sm:w-auto !px-5 !text-xs"
          >
            Live preview
          </LinkButton>
        </div>
      </div>
    </motion.article>
  );
}
