import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CtaBanner } from "@/components/sections/CtaBanner";
import { FAQ } from "@/components/sections/FAQ";
import { Hero } from "@/components/sections/Hero";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { Services } from "@/components/sections/Services";
import { Stats } from "@/components/sections/Stats";
import { TechStack } from "@/components/sections/TechStack";
import { Testimonials } from "@/components/sections/Testimonials";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Services />
      <Portfolio />
      <WhyChooseUs />
      <Process />
      <TechStack />
      <Testimonials />
      <FAQ />
      <CtaBanner />
      <Contact />
    </main>
  );
}
