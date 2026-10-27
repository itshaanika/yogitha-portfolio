export interface Project {
  id: string;
  title: string;
  description: string;
  problem: string;
  contribution: string;
  technologies: string[];
  category: string;
  image: string;
  imageAlt: string;
  repositoryUrl: string;
  liveUrl: string;
  status: string;
  placeholder?: boolean;
}
export interface TimelineEntry {
  institution: string;
  title: string;
  start: string;
  end: string;
  description: string;
  achievements: string[];
}
export interface Link {
  label: string;
  url: string;
}
export interface Recognition {
  title: string;
  issuer: string;
  date: string;
  url?: string;
}
export interface Portfolio {
  preview: boolean;
  name: string;
  title: string;
  introduction: string;
  location: string;
  portrait: string;
  portraitAlt: string;
  about: {
    biography: string;
    interests: string;
    goals: string;
    approach: string;
    areas: string[];
  };
  projects: Project[];
  experience: TimelineEntry[];
  education: TimelineEntry[];
  skills: { category: string; items: string[] }[];
  achievements: Recognition[];
  certifications: Recognition[];
  email: string;
  socials: Link[];
  seo: { title: string; description: string; siteUrl: string; image: string };
}
// Set preview to false only after replacing all bracketed content. Empty optional arrays hide their sections.
export const portfolio: Portfolio = {
  preview: true,
  name: "[YOUR NAME]",
  title: "[YOUR PROFESSIONAL TITLE]",
  introduction: "[ADD YOUR INTRODUCTION]",
  location: "",
  portrait: "images/portrait.svg",
  portraitAlt:
    "Abstract portrait placeholder. Replace with your own photograph.",
  about: {
    biography: "[ADD YOUR BIOGRAPHY]",
    interests: "[ADD YOUR INTERESTS]",
    goals: "[ADD YOUR PROFESSIONAL GOALS]",
    approach: "[DESCRIBE YOUR APPROACH TO PROBLEM-SOLVING]",
    areas: [],
  },
  projects: [1, 2, 3].map((n) => ({
    id: `project-${n}`,
    title: `[PROJECT ${String(n).padStart(2, "0")} TITLE]`,
    description: "[ADD PROJECT DETAILS]",
    problem: "[DESCRIBE THE PROBLEM]",
    contribution: "[DESCRIBE YOUR CONTRIBUTION]",
    technologies: [],
    category: "[PROJECT CATEGORY]",
    image: `images/project-${n}.svg`,
    imageAlt: `Abstract editorial placeholder for project ${n}; not actual project work.`,
    repositoryUrl: "",
    liveUrl: "",
    status: "Placeholder",
    placeholder: true,
  })),
  experience: [],
  education: [],
  skills: [],
  achievements: [],
  certifications: [],
  email: "",
  socials: [],
  seo: {
    title: "[YOUR NAME] | Portfolio",
    description: "[ADD YOUR PORTFOLIO DESCRIPTION]",
    siteUrl: "",
    image: "",
  },
};
