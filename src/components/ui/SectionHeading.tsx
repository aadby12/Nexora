import { cn } from "@/lib/utils";
import { Reveal } from "@/components/motion/Reveal";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  const alignCls = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={cn("max-w-2xl space-y-4.5", alignCls, className)}>
      {eyebrow ? (
        <Reveal>
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-accent-cyan">
              {eyebrow}
            </p>
          </div>
        </Reveal>
      ) : null}
      <Reveal delay={eyebrow ? 0.06 : 0}>
        <h2 className="font-display text-balance text-[2rem] font-medium leading-[1.02] tracking-[-0.045em] text-foreground sm:text-[2.45rem] lg:text-[3rem]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={eyebrow ? 0.12 : 0.06}>
          <p className="max-w-[60ch] text-[15px] leading-7 text-muted sm:text-[1.02rem] sm:leading-8">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
