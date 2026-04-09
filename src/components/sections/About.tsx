import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { type SiteSettings } from "@/lib/data";

export function About({ about }: { about: SiteSettings["about"] }) {
  return (
    <section
      id="about"
      className="section-shell section-divider scroll-mt-24 py-16 sm:scroll-mt-28 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:gap-18 lg:items-start">
          <SectionHeading
            eyebrow={about.eyebrow}
            title={about.title}
            description={about.description}
          />
          <Reveal className="space-y-8">
            <div className="space-y-5 text-base leading-8 text-muted sm:text-[1.03rem]">
              {about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                  What that means
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/84">
                  Visitors understand the offer faster and leave with a better impression of the brand.
                </p>
              </div>
              <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.03] p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-accent-cyan">
                  Why it matters
                </p>
                <p className="mt-3 text-sm leading-7 text-foreground/84">
                  A stronger website helps the business feel more credible before a conversation even starts.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
