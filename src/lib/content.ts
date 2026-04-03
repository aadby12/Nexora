import {
  processSteps,
  projects,
  services,
  siteSettings,
  stats,
  testimonials,
  whyPoints,
  type ProcessStep,
  type Project,
  type Service,
  type SiteSettings,
  type Testimonial,
  type WhyPoint,
} from "@/lib/data";
import { createServerSupabaseClient } from "@/lib/supabase/server";

type SiteSettingsRow = {
  key: string;
  value: unknown;
};

function sortByOrder<T extends { sort_order?: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => (a.sort_order ?? 0) - (b.sort_order ?? 0));
}

export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_URL &&
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
  );
}

export async function getServices(): Promise<Service[]> {
  if (!isSupabaseConfigured()) return sortByOrder(services);

  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("services")
      .select("*")
      .order("sort_order", { ascending: true });

    if (error || !data?.length) return sortByOrder(services);
    return data as Service[];
  } catch {
    return sortByOrder(services);
  }
}

export async function getTestimonials(): Promise<Testimonial[]> {
  if (!isSupabaseConfigured()) return testimonials;

  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("testimonials")
      .select("*")
      .order("created_at", { ascending: false });

    if (error || !data?.length) return testimonials;
    return data as Testimonial[];
  } catch {
    return testimonials;
  }
}

export async function getProjects(): Promise<Project[]> {
  if (!isSupabaseConfigured()) return sortByOrder(projects);

  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("projects")
      .select("*, gallery_images:project_images(*)")
      .order("sort_order", { ascending: true });

    if (error || !data?.length) return sortByOrder(projects);

    return (data as Project[]).map((project) => ({
      ...project,
      gallery_images: sortByOrder(project.gallery_images ?? []),
    }));
  } catch {
    return sortByOrder(projects);
  }
}

export async function getFeaturedProjects(limit = 3): Promise<Project[]> {
  const allProjects = await getProjects();
  const featuredProjects = allProjects.filter((project) => project.featured);
  return (featuredProjects.length ? featuredProjects : allProjects).slice(0, limit);
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const allProjects = await getProjects();
  return allProjects.find((project) => project.slug === slug) ?? null;
}

export async function getProjectById(id: string): Promise<Project | null> {
  const allProjects = await getProjects();
  return allProjects.find((project) => project.id === id) ?? null;
}

export async function getEditableSiteSettings(): Promise<SiteSettings> {
  if (!isSupabaseConfigured()) return siteSettings;

  try {
    const supabase = await createServerSupabaseClient();
    const { data, error } = await supabase
      .from("site_settings")
      .select("key, value");

    if (error || !data?.length) return siteSettings;

    return (data as SiteSettingsRow[]).reduce<SiteSettings>((acc, row) => {
      if (row.key in acc) {
        return {
          ...acc,
          [row.key]: row.value,
        };
      }

      return acc;
    }, siteSettings);
  } catch {
    return siteSettings;
  }
}

export async function getHomePageData(): Promise<{
  settings: SiteSettings;
  services: Service[];
  projects: Project[];
  testimonials: Testimonial[];
  whyPoints: WhyPoint[];
  processSteps: ProcessStep[];
  stats: typeof stats;
}> {
  const [settings, loadedServices, loadedProjects, loadedTestimonials] =
    await Promise.all([
      getEditableSiteSettings(),
      getServices(),
      getFeaturedProjects(4),
      getTestimonials(),
    ]);

  return {
    settings,
    services: loadedServices,
    projects: loadedProjects,
    testimonials: loadedTestimonials,
    whyPoints,
    processSteps,
    stats,
  };
}
