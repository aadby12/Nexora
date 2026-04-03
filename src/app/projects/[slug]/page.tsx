import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { LinkButton } from "@/components/ui/Button";
import { getProjectBySlug, getProjects } from "@/lib/content";
import { getSiteUrl } from "@/lib/site";

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.short_description,
    alternates: {
      canonical: `/projects/${project.slug}`,
    },
    openGraph: {
      title: `${project.title} | Avenor Tech`,
      description: project.short_description,
      images: [project.thumbnail_image],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.short_description,
    image: project.thumbnail_image,
    url: new URL(`/projects/${project.slug}`, getSiteUrl()).toString(),
    creator: {
      "@type": "Organization",
      name: "Avenor Tech",
    },
  };

  return (
    <main className="pt-28 pb-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectSchema) }}
      />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-start">
          <div className="space-y-8">
            <div className="space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-cyan">
                {project.category}
              </p>
              <h1 className="font-display text-balance text-4xl font-medium tracking-tight text-foreground sm:text-5xl">
                {project.title}
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-muted sm:text-lg">
                {project.full_description}
              </p>
              <div className="flex flex-wrap gap-3">
                <LinkButton href={project.live_url}>Visit Live Project</LinkButton>
                <LinkButton href="/#contact" variant="secondary">
                  Start a Similar Project
                </LinkButton>
              </div>
            </div>

            <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#050812]">
              <div className="relative aspect-video w-full sm:aspect-[16/10]">
                <Image
                  src={project.thumbnail_image}
                  alt={project.thumbnail_alt}
                  fill
                  priority
                  className="object-cover object-center"
                  sizes="(max-width:1024px) 100vw, 75vw"
                />
              </div>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {project.gallery_images.map((image) => (
                <div
                  key={image.id}
                  className="relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#050812]"
                >
                  <div className="relative aspect-[4/3] w-full sm:aspect-video">
                    <Image
                      src={image.image_url}
                      alt={image.alt_text}
                      fill
                      className="object-cover object-center"
                      sizes="(max-width:768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="glass-panel rounded-[1.5rem] p-6 sm:p-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-accent-mint">
                Project Snapshot
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {project.tech_stack.map((item) => (
                  <li key={item}>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-muted">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h2 className="font-display text-2xl font-medium text-foreground">
                Key Features
              </h2>
              <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted">
                {project.key_features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gradient-to-r from-accent-cyan to-accent-violet" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
