import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { getHomePageData } from "@/lib/content";

export default async function HomePage() {
  const data = await getHomePageData();

  return (
    <main>
      <Hero hero={data.settings.hero} />
      <About about={data.settings.about} />
      <Services services={data.services} />
      <Portfolio projects={data.projects} />
      <WhyChooseUs
        settings={data.settings.whyChooseUs}
        whyPoints={data.whyPoints}
      />
      <Process
        settings={data.settings.process}
        processSteps={data.processSteps}
      />
      <TechStack />
      <Testimonials
        settings={data.settings.testimonials}
        testimonials={data.testimonials}
      />
      <FAQ />
      <CtaBanner />
      <Contact contact={data.settings.contact} />
    </main>
  );
}
