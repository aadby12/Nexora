import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Services } from "@/components/sections/Services";
import { getHomePageData } from "@/lib/content";

export default async function HomePage() {
  const data = await getHomePageData();

  return (
    <main>
      <Hero hero={data.settings.hero} />
      <Services services={data.services} />
      <About about={data.settings.about} />
      <Portfolio projects={data.projects} />
      <Contact contact={data.settings.contact} />
    </main>
  );
}
