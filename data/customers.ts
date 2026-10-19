export interface Audience {
  id: string;
  title: string;
  line: string;
  text: string;
  bring: string[];
}

export const AUDIENCES: Audience[] = [
  {
    id: "homeowners",
    title: "Homeowners",
    line: "For the gate, stair or balcony you will live with.",
    text: "You know the space and roughly what you want. We help turn that into a piece that suits the house, and explain each decision as we go.",
    bring: ["Photos of the space", "A rough idea of size", "Anything you have seen and liked"],
  },
  {
    id: "architects",
    title: "Architects and designers",
    line: "For details that need to be built as drawn.",
    text: "Send drawings in whatever form you have them, or a concept to develop together. We fabricate ironwork to your design and talk through junctions and fixing.",
    bring: ["Drawings or sketches", "Material and finish references", "Context on the building"],
  },
  {
    id: "builders",
    title: "Builders and contractors",
    line: "For ironwork that fits the site you are building.",
    text: "Share the opening, the structure it fixes to and the programme. We will talk through what is involved so the ironwork arrives as part of your sequence.",
    bring: ["Site dimensions", "The structure it will fix into", "Your sequence of work"],
  },
  {
    id: "business",
    title: "Businesses and institutions",
    line: "For entrances, screens and railings in commercial spaces.",
    text: "Shopfronts, offices and public buildings have their own requirements. Tell us about the premises and what the ironwork must do, and we will take it from there.",
    bring: ["Photos of the premises", "The brief or brand direction", "Any constraints on the site"],
  },
];
