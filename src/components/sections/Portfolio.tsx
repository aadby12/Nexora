"use client";

import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { LinkButton } from "@/components/ui/Button";
import { type Project } from "@/lib/data";

export function Portfolio({ projects }: { projects: Project[] }) {
  if (projects.length === 0) {
    return null;
  }

  const featured = projects.find((p) => p.featured) ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <section
      id="work"
      className="section-shell section-divider scroll-mt-28 py-22 sm:scroll-mt-32 sm:py-26 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Portfolio"
              title="Recent work with a clearer point of view."
              description="These projects are different in tone, but they share the same goal: help the business feel more credible, more usable, and more considered online."
            />
          </div>
          <Reveal className="lg:pb-1">
            <LinkButton href="/projects" variant="ghost" className="!px-0 !text-accent-cyan hover:!text-accent-cyan">
              Browse all projects →
            </LinkButton>
          </Reveal>
        </div>

        <Reveal className="mt-14" delay={0.06}>
          <div className="premium-border relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.12),transparent_32%),linear-gradient(180deg,rgba(255,255,255,0.03),rgba(255,255,255,0.02))]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.1),transparent_26%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.1),transparent_28%)]" />
            <div className="grid gap-0 lg:grid-cols-2">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#050812] sm:aspect-video lg:min-h-[min(52vh,520px)]">
                <Image
                  src={featured.thumbnail_image}
                  alt={featured.thumbnail_alt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width:1024px) 100vw, 50vw"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent lg:from-black/30" />
              </div>
              <div className="relative flex flex-col justify-center p-8 sm:p-10 lg:p-14">
                <span className="inline-flex w-fit rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-accent-cyan">
                  Featured case study
                </span>
                <h3 className="mt-5 font-display text-[2rem] font-medium leading-[1.02] tracking-[-0.04em] text-foreground sm:text-[2.6rem]">
                  {featured.title}
                </h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-muted sm:text-[1rem]">
                  {featured.short_description}
                </p>
                <p className="mt-4 max-w-xl text-[13px] leading-6 text-foreground/62 sm:text-sm">
                  Built for a more intentional brand presentation, stronger content flow, and a more polished experience across mobile and desktop.
                </p>
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {featured.tech_stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 bg-white/[0.05] px-3.5 py-1.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                  <LinkButton href={`/projects/${featured.slug}`}>View case study</LinkButton>
                  <LinkButton href={featured.live_url} variant="secondary">
                    Live preview
                  </LinkButton>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
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
