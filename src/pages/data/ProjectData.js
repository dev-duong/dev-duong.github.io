// Image Imports
import ogHome from "../../assets/projectImages/portfolio-v2/og-home.png";
import ogAbout from "../../assets/projectImages/portfolio-v2/og-about.png";
import ogProjects from "../../assets/projectImages/portfolio-v2/og-projects.png";
import ogContact from "../../assets/projectImages/portfolio-v2/og-contacts.png";

const projectsData = [
  // === Web Development Projects ===
  // Portfolio V2
  {
    slug: "portfolio-website-v2",
    category: "Web Development",
    title: "Portfolio Website V2",
    year: "2025",
    description:
      "A modern, multi-page, and responsive portfolio website built with React and Tailwind CSS.",
    techStack: [
      "React",
      "Tailwind",
      "Framer Motion",
      "React Router",
      "GitHub Pages",
    ],
    link: "https://github.com/dev-duong/dev-duong.github.io",
    type: "github",

    summary: `This website is designed to showcase my creative work through a clean and 
    responsive interface. Built with React.js and Tailwind CSS, it features a modern design 
    with smooth animations, interactive components, and an organized layout that allows users 
    to explore projects by category. The site emphasizes clarity and usability, ensuring 
    visitors can easily navigate through my portfolio. Framer Motion enhances the user 
    experience with engaging animations, while React Router enables seamless transitions 
    between different sections.`,

    motivation: `I wanted to build this portfolio website as a way to challenge myself
    and grow both my design and development skills. It serves as a platform to showcase my
    projects, refine my technical abilities, and demonstrate my understanding of modern web
    development tools like React.js, Tailwind CSS, Framer Motion, and React Router. My goal
    was to prepare for future opportunities by demonstrating not only my technical skills, 
    but how I think about design and user experience as well as learn.`,

    features: [
      "Fully responsive design for desktop, tablet, and mobile",
      "Built with React.js and styled using Tailwind CSS",
      "Smooth page transitions and animations using Framer Motion",
      "Route-based navigation using React Router",
      "Category-based project filtering with dynamic rendering",
      "Custom reusable components (e.g. buttons, text boxes)",
      "Downloadable project assets and PDF resumes",
      "Organized folder structure and maintainable codebase",
    ],

    figures: [
      {
        src: ogHome,
        alt: "Home Page of portfolio website v2",
      },
      {
        src: ogAbout,
        alt: "Home Page of portfolio website v2",
      },
      {
        src: ogProjects,
        alt: "Home Page of portfolio website v2",
      },
      {
        src: ogContact,
        alt: "Home Page of portfolio website v2",
      },
    ],
  },
  // Portfolio V1
  {
    slug: "portfolio-website-v1",
    category: "Web Development",
    title: "Portfolio Website V1",
    description:
      "A Static portfolio website built using HTML and CSS [No longer Live].",
    techStack: ["HTML", "CSS", "GitHub Pages"],
    link: "https://github.com/dev-duong/v1-dev-duong.github.io",
    type: "github",
  },
];

export default projectsData;
