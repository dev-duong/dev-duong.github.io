import MushroomFont from "../../assets/projectsPDF/MushroomLog.otf";
import MushroomPDF from "../../assets/projectsPDF/MushroomFont.pdf";

import DroneMagazine from "../../assets/projectsPDF/CarbonDrone.pdf";
import DroneStatement from "../../assets/projectsPDF/CarbonDroneStatement.pdf";

import Journal from "../../assets/projectsPDF/RealWorldJournal.pdf";

const projectsData = [
  // Portfolio V2
  {
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
    link: "https://dev-duong.github.io/",
  },
  // Portfolio V1
  {
    category: "Web Development",
    title: "Portfolio Website V1",
    year: "2023",
    description:
      "A Static portfolio website built using HTML and CSS, showcasing my skills.",
    techStack: ["HTML", "CSS", "GitHub Pages"],
    link: "https://dev-duong.github.io/portfolio-v1",
  },
  // Web Calculator
  {
    category: "Web Development",
    title: "Web-Calculator",
    year: "2024",
    description:
      "A web-based calculator built using HTML, CSS, and JavaScript, providing basic arithmetic functionality with a user-friendly interface.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://dev-duong.github.io/calculator",
  },
  // Portfolio [Mobile]
  {
    category: "Web Development",
    title: "Portfolio Website [Mobile-Only]",
    description:
      "A website portfolio built using HTML, and CSS. [Built for only mobile]",
    techStack: ["HTML", "CSS"],
    link: "https://dev-duong.github.io/mobile-portfolio",
  },
  // Travel Site
  {
    category: "Web Development",
    title: "Responsive Travel Website",
    description:
      "A Static portfolio website built using HTML and CSS adhering to the requirements of Web Content Accessibility Guidelines (WCAG)",
    techStack: ["HTML", "CSS"],
    link: "https://dev-duong.github.io/Resposive-Travel-Website",
  },
  // Fur Fetch Grooming
  {
    category: "Web Development",
    title: "Fur Fetch Grooming",
    description:
      "A responsive website for a local pet grooming service, built using WordPress and Spectra One theme and plugin",
    techStack: ["WordPress"],
    link: "https://furfetchgrooming.infinityfree.me",
  },
  // Linktree
  {
    category: "Web Development",
    title: "Profile Card",
    description:
      "A simple web profile card built using HTML, CSS, and JavaScript. Acts similarly to Linktree.",
    techStack: ["HTML", "CSS", "JavaScript"],
    link: "https://dev-duong.github.io/profile-card/",
  },
  // Mushroom Font
  {
    category: "Design",
    title: "Mushroom Font",
    description:
      "A whimsical custom typeface inspired by forest mushrooms and logs, blending organic shapes with playful, earthy charm.",
    techStack: ["Adobe Ilustrator", "FontForge", "OpenType Font"],
    links: [
      {
        label: "View Magazine",
        href: MushroomPDF,
        type: "pdf",
        action: "open",
      },
      {
        label: "Download Font",
        href: MushroomFont,
        type: "font",
        action: "download",
      },
    ],
  },
  // Carbon Drone
  {
    category: "Design",
    title: "Carbon Drone",
    description:
      "A forward-thinking speculative design project exploring imaginative futures to challenge current assumptions and inspire innovative possibilities.",
    techStack: ["Adobe Ilustrator", "Adobe InDesign", "Adobe Photoshop"],
    links: [
      {
        label: "View Magazine",
        href: DroneMagazine,
        type: "pdf",
        action: "open",
      },
      {
        label: "View Statement",
        href: DroneStatement,
        type: "pdf",
        action: "open",
      },
    ],
  },
  // Real World Journal
  {
    category: "Design",
    title: "Real World Journal",
    description:
      "A custom logo designed for a fictional brand, blending imaginative storytelling with visual identity to create a distinctive and engaging mark.",
    techStack: ["Adobe Ilustrator", "Adobe InDesign", "Adobe Photoshop"],
    links: [
      {
        label: "View PDF",
        href: Journal,
        type: "pdf",
        action: "open",
      },
    ],
  },
];

export default projectsData;
