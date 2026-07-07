import { Hero } from "@/sections/hero/hero";
import { Services } from "@/sections/services/services";
import { Projects } from "@/sections/projects/projects";
import { About } from "@/sections/about/about";
import { Contact } from "@/sections/contact/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Projects />
      <About />
      <Contact />
    </>
  );
}