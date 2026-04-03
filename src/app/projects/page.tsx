import type { Metadata } from "next";
import { Portfolio } from "@/components/sections/Portfolio";
import { getProjects } from "@/lib/content";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore selected Avenor Tech projects across luxury brand, corporate, and business website development.",
  alternates: {
    canonical: "/projects",
  },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <main className="pt-28 pb-20">
      <Portfolio projects={projects} />
    </main>
  );
}
