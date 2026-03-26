"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { projects } from "@/lib/data";

export function Portfolio() {
  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section
      id="work"
      className="scroll-mt-28 py-20 sm:scroll-mt-32 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Portfolio"
              title="Selected work that blends craft with conversion."
              description="A glimpse at how we shape digital presence for ambitious teams—interactive, performant, and unmistakably premium."
            />
          </div>
          <Reveal className="lg:pb-1">
            <LinkButton href="#contact" variant="ghost" className="!px-0 !text-accent-cyan hover:!text-accent-cyan">
              Request full case studies →
            </LinkButton>
          </Reveal>
        </div>

        <Reveal className="mt-12" delay={0.06}>
          <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-accent-indigo/15 via-background to-background">
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative min-h-[220px] sm:min-h-[280px] lg:min-h-[360px]">
                <Image
                  src={featured.image}
                  alt={featured.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/35 to-transparent lg:from-background/80" />
              </div>
              <div className="flex flex-col justify-center p-8 sm:p-10 lg:p-12">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                  Featured case study
                </span>
                <h3 className="mt-4 font-display text-2xl font-medium tracking-tight text-foreground sm:text-3xl">
                  {featured.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                  {featured.description}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {featured.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-8">
                  <LinkButton href="#contact">Start a project like this</LinkButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {rest.map((project) => (
            <Reveal key={project.title} delay={0.05}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
