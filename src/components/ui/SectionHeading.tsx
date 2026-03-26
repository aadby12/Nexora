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
    <div className={cn("max-w-2xl space-y-4", alignCls, className)}>
      {eyebrow ? (
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
            {eyebrow}
          </p>
        </Reveal>
      ) : null}
      <Reveal delay={eyebrow ? 0.06 : 0}>
        <h2 className="font-display text-balance text-3xl font-medium leading-tight tracking-tight text-foreground sm:text-4xl lg:text-[2.6rem]">
          {title}
        </h2>
      </Reveal>
      {description ? (
        <Reveal delay={eyebrow ? 0.12 : 0.06}>
          <p className="text-base leading-relaxed text-muted sm:text-lg">
            {description}
          </p>
        </Reveal>
      ) : null}
    </div>
  );
}
