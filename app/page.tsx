import type { Metadata } from "next";
import { constructPageMetadata } from "@/lib/seo";
import { Hero } from "@/components/sections/Hero";
import { Transformation } from "@/components/sections/Transformation";
import { Services } from "@/components/sections/Services";
import { Work } from "@/components/sections/Work";
import { Process } from "@/components/sections/Process";
import { Custom } from "@/components/sections/Custom";
import { Trust } from "@/components/sections/Trust";
import { ProjectConfigurator } from "@/components/forms/ProjectConfigurator";

export const metadata: Metadata = {
  ...constructPageMetadata({
    title: "iron’s irony | Gates, Railings & Custom Ironwork",
    description:
      "Gates, railings, balconies, staircases, grills and custom ironwork, designed around your space and made to become part of the building. Start a project with iron’s irony.",
    path: "",
  }),
  title: { absolute: "iron’s irony | Gates, Railings & Custom Ironwork" },
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
