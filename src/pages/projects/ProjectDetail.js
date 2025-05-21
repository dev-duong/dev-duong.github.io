// This page is responsible for displaying the details of a specific project.

import { useParams, Link } from "react-router-dom";

// Templates
import ProjectDetailTemplate from "./ProjectDetailTemplate";

// Project Pages
import projectsData from "../data/ProjectData";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="pt-28 max-w-4xl mx-auto px-4">
      {/* Back Link */}
      <Link to="/projects" className="text-myOrange mb-4 inline-block">
        ← Back to Projects
      </Link>

      {/* Pass project data to template */}
      <ProjectDetailTemplate project={project} />
    </div>
  );
};

export default ProjectDetail;
