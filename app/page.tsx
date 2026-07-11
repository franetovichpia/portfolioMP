import { Hero } from "@/sections/hero/hero";
import { About } from "@/sections/about/about";
import { Services } from "@/sections/services/services";
import { Experience } from "@/sections/experience/experience";
import { Education } from "@/sections/education/education";
import { Skills } from "@/sections/skills/skills";
import { Timeline } from "@/sections/timeline/timeline";
import { Projects } from "@/sections/projects/projects";
import { Contact } from "@/sections/contact/contact";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Education />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </main>
  );
}