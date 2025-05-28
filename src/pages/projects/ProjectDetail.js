import { useParams, Navigate } from "react-router-dom";
import projectsData from "../data/ProjectData";
import ProjectDetailTemplate from "./ProjectDetailTemplate";
import ProjectUnavailable from "./ProjectUnavailable";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/notfound" replace />;
  }

  if (project.ready === false) {
    return <ProjectUnavailable />;
  }

  return (
    <div className="pt-28 max-w-4xl mx-auto px-16">
      <ProjectDetailTemplate project={project} />
    </div>
  );
};

export default ProjectDetail;
