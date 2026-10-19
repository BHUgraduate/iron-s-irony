import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { Transformation } from "@/components/sections/Transformation";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Custom } from "@/components/sections/Custom";
import { Trust } from "@/components/sections/Trust";
import { ProjectConfigurator } from "@/components/forms/ProjectConfigurator";

export const metadata: Metadata = {
  title: { absolute: "iron’s irony | Gates, Railings & Custom Ironwork in Varanasi" },
  description:
    "Architectural, decorative and custom ironwork: gates, railings, balconies, staircases and grills, fabricated to your space. Start a project with the workshop in Varanasi.",
};

export default function HomePage() {
  return (
    <main id="main-content" className="flex-1 flex flex-col w-full">
      <Hero />
      <Transformation />
      <Services />
      <Work />
      <Process />
      <Custom />
      <Trust />
      <ProjectConfigurator />
    </main>
  );
}
