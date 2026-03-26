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
        "group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-white/[0.03]",
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.image}
          alt={project.imageAlt}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-90" />
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-accent-cyan backdrop-blur-md sm:left-5 sm:top-5">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="font-display text-xl font-medium tracking-tight text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((t) => (
            <li key={t}>
              <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-2.5 py-1 text-[11px] font-medium text-muted">
                {t}
              </span>
            </li>
          ))}
        </ul>
        <div className="mt-6">
          <LinkButton
            href="/#contact"
            variant="secondary"
            className="w-full sm:w-auto !px-5 !text-xs"
          >
            Discuss a similar build
          </LinkButton>
        </div>
      </div>
    </motion.article>
  );
}
