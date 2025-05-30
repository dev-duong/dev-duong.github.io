// Image Imports
// portfolio v2 images
import ogHome from "../../assets/projectImages/portfolio-v2/og-home.png";
import ogAbout from "../../assets/projectImages/portfolio-v2/og-about.png";
import ogProjects from "../../assets/projectImages/portfolio-v2/og-projects.png";
import ogContact from "../../assets/projectImages/portfolio-v2/og-contacts.png";
// portfolio v1 images
import v1index from "../../assets/projectImages/portfolio-v1/v1-index.png";
import v1about from "../../assets/projectImages/portfolio-v1/v1-about.png";
import v1projects from "../../assets/projectImages/portfolio-v1/v1-projects.png";
import v1contact from "../../assets/projectImages/portfolio-v1/v1-contact.png";

// Link Imports
import RealWorldJournal from "../../assets/projectsPDF/RealWorldJournal.pdf";
import MoreThanHuman from "../../assets/projectsPDF/MoreThanHuman.pdf";
import CarbonDrone from "../../assets/projectsPDF/CarbonDrone.pdf";
import CarbonDroneStatement from "../../assets/projectsPDF/CarbonDroneStatement.pdf";
import MushroomFont from "../../assets/projectsPDF/MushroomFont.pdf";
import MushroomFontStatement from "../../assets/projectsPDF/MushroomFontStatement.pdf";
import MushroomLog from "../../assets/projectsPDF/MushroomLog.otf";

// Structure of the project data
// slug: Unique identifier for the project
// category: Category of the project (e.g., Web Development, Games, etc.)
// title: Title of the project
// year: Year of completion
// description: Brief description of the project
// techStack: Technologies used in the project
// link: Link to the project (GitHub, live site, etc.)
// type: Type of link (e.g., "github", "live", "pdf")
// summary: A brief summary of the project
// motivation: Motivation behind the project
// features: Key features of the project
// figures: Array of images related to the project (optional)
// ready: Indicates if the project is ready to be showcased (optional)

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
        alt: "Original design of the home page of portfolio website v2",
      },
      {
        src: ogAbout,
        alt: "Original design of the about page of portfolio website v2",
      },
      {
        src: ogProjects,
        alt: "Original design of the projects page of portfolio website v2",
      },
      {
        src: ogContact,
        alt: "Original design of the contact page of portfolio website v2",
      },
    ],
    ready: true,
  },
  // Portfolio V1
  {
    slug: "portfolio-website-v1",
    category: "Web Development",
    title: "Portfolio Website V1",
    year: "2023",
    description:
      "A Static portfolio website built using HTML and CSS, showcasing my skills [No longer live].",
    techStack: ["HTML", "CSS", "GitHub Pages"],
    link: "https://github.com/dev-duong/v1-dev-duong.github.io",
    type: "github",

    summary: `This portfolio website is a static site built with HTML and CSS, designed to
    showcase my skills and projects. It features a clean and simple layout, with sections for
    my work, skills, and contact information. The site is fully responsive, ensuring a good
    user experience across different devices. The design emphasizes clarity and usability,
    allowing visitors to easily navigate through my portfolio and learn more about my work.`,

    motivation: `I built this portfolio website to establish an online presence and
    showcase my skills and projects. It serves as a platform to demonstrate my abilities in
    web development and design, while also providing a way for potential employers and clients
    to learn more about my work. The goal was to create a simple yet effective portfolio that
    highlights my skills and projects, while also being easy to maintain and update.`,
    features: [
      "Fully responsive design for desktop and mobile",
      "Built with HTML and CSS",
      "Simple and clean layout",
      "Sections for work, skills, and contact information",
      "Easy to maintain and update",
    ],
    figures: [
      {
        src: v1index,
        alt: "Original design of the home page of portfolio website v1",
      },
      {
        src: v1about,
        alt: "Original design of the about page of portfolio website v1",
      },
      {
        src: v1projects,
        alt: "Original design of the projects page of portfolio website v1",
      },
      {
        src: v1contact,
        alt: "Original design of the contact page of portfolio website v1",
      },
    ],
    ready: true,
  },
  // Web Calculator
  {
    slug: "web-calculator",
    category: "Web Development",
    title: "Web-Calculator",
    year: "2024",
    description:
      "A web-based calculator built using HTML, CSS, and JavaScript, providing basic arithmetic functionality with a user-friendly interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/dev-duong/Web-Calculator",
    type: "github",

    summary: `This web-based calculator is designed to perform basic arithmetic operations
    such as addition, subtraction, multiplication, and division. Built with HTML, CSS, and
    JavaScript, it features a user-friendly interface that allows users to input numbers and
    perform calculations easily.`,

    motivation: `I created this calculator to practice my web development skills and
    demonstrate my ability to build interactive web applications. It serves as a simple yet
    effective project that showcases my understanding of HTML, CSS, and JavaScript. The goal
    was to create a functional and visually appealing calculator that can be used in everyday
    tasks.`,

    features: [
      "Basic arithmetic operations (addition, subtraction, multiplication, division)",
      "User-friendly interface with clear buttons and display",
      "Built with HTML, CSS, and JavaScript",
      "Easy to maintain and update",
    ],
    ready: true,
  },
  // Portfolio [Mobile]
  {
    slug: "mobile-portfolio-website",
    category: "Web Development",
    title: "Portfolio Website [Mobile-Only]",
    description:
      "A website portfolio built using HTML, and CSS. [Built for only mobile]",
    techStack: ["HTML", "CSS"],
    link: "https://github.com/dev-duong/Mobile-Website-Portfolio",
    type: "github",
    ready: false,
  },
  // Travel Site
  {
    slug: "responsive-travel-website",
    category: "Web Development",
    title: "Responsive Travel Website",
    description:
      "A Static portfolio website built using HTML and CSS adhering to the requirements of Web Content Accessibility Guidelines (WCAG)",
    techStack: ["HTML", "CSS"],
    link: "https://github.com/dev-duong/Resposive-Travel-Website",
    type: "github",
    ready: false,
  },
  // First Quest
  {
    slug: "first-quest",
    category: "Games",
    title: "First Quest",
    description: "A C# Console text based game.",
    techStack: ["C#"],
    link: "https://github.com/dev-duong/firstQuest",
    type: "github",
    ready: false,
  },
  // Catch Game
  {
    slug: "catch-game",
    category: "Games",
    title: "Catch Game",
    description: "A simple basket catch game built in Unity.",
    techStack: ["C#", "HLSL", "ShaderLab", "Unity"],
    link: "https://github.com/dev-duong/CatchGame",
    type: "github",
    ready: false,
  },
  // Savings Calculator
  {
    slug: "savings-calculator",
    category: "Utility",
    title: "Saving Calculator",
    description:
      "An interactive tool that helps users estimate how much they can split their income by percentage.",
    techStack: ["C#"],
    link: "https://github.com/dev-duong/savingsCalculator",
    type: "github",
    ready: false,
  },
  // Real World Journal
  {
    slug: "real-world-journal",
    category: "UI/UX Design",
    title: "Real World Journal",
    description:
      "A logo Design for a fictional journal company called Real World Jounral.",
    techStack: ["Adobe inDesign", "Adobe Illustrator"],
    link: RealWorldJournal,
    type: "pdf",
    ready: false,
  },
  // More Than Human
  {
    slug: "more-than-human",
    category: "UI/UX Design",
    title: "More Than Human",
    description:
      "A critical experience concept design. Includes contextual research, world building, and designs.",
    techStack: ["Adobe inDesign", "Adobe Photoshop"],
    link: MoreThanHuman,
    type: "pdf",
    ready: false,
  },
  // Carbon Drone
  {
    slug: "carbon-drone",
    category: "UI/UX Design",
    title: "Carbon Drone",
    description:
      "A critical experience and speculative concept design magazine and statement.",
    techStack: ["Adobe inDesign", "Adobe Photoshop"],
    link: [
      { url: CarbonDrone, type: "pdf" },
      { url: CarbonDroneStatement, type: "pdf" },
    ],
    linkLabel: ["Open Magazine PDF →", "Open Statement PDF →"],
    ready: false,
  },
  // Mushroom Font
  {
    slug: "mushroom-font",
    category: "UI/UX Design",
    title: "Mushroom Font",
    description: "A custom mushroom themed font.",
    techStack: ["Adobe inDesign", "Adobe Illustrator"],
    link: [
      { url: MushroomFont, type: "pdf" },
      { url: MushroomFontStatement, type: "pdf" },
      { url: MushroomLog },
    ],
    linkLabel: [
      "Open Magazine PDF →",
      "Open Statement PDF →",
      "Download Font →",
    ],
    ready: false,
  },
];

export default projectsData;
