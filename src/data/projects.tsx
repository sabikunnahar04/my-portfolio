export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  liveLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Bazar Dor",
    description:
      "A market price tracking website that helps users explore daily product prices, categories, and price changes.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "DaisyUI",
    ],
    image: "/projects/bazar-dor.png",
    liveLink: "https://assignment-7-rust.vercel.app/",
    githubLink: "https://github.com/sabikunnahar04/assignment-07",
  },
];

export default projects;
