import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section
      id="about"
      className="scroll-mt-28 py-20 sm:scroll-mt-32 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <SectionHeading
            eyebrow="About Nexora"
            title="We create next-generation digital experiences—not just web pages."
            description="Nexora is a focused web development studio for brands that want clarity, speed, and craft. We believe digital should feel intelligent: calm interfaces, decisive motion, and performance you can measure."
          />
          <Reveal className="space-y-6 text-base leading-relaxed text-muted sm:text-lg">
            <p>
              Our work sits at the intersection of product thinking and visual
              design. We partner with businesses, startups, and founders to
              translate complex stories into interfaces people understand
              instantly—and remember long after they leave.
            </p>
            <p>
              From strategy to launch, we obsess over the details that compound:
              typography rhythm, resilient components, accessibility, and the
              invisible polish that makes a site feel{" "}
              <span className="text-foreground">alive</span>.
            </p>
            <div className="rounded-2xl border border-accent-indigo/25 bg-gradient-to-br from-accent-indigo/10 to-transparent p-5 sm:p-6">
              <p className="font-display text-lg font-medium text-foreground">
                Building the future, digitally.
              </p>
              <p className="mt-2 text-sm text-muted">
                That is the standard behind every engagement—future-ready code,
                timeless visual language, and partnerships that outlast the
                launch week.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
