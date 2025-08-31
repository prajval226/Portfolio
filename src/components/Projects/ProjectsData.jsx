import React from "react";
import { useParams } from "react-router-dom";
import projects from "./ProjectsData"; // Move your projects array to a separate file for import

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div>Project not found.</div>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <img src={project.cover} alt={project.title} className="mb-4 w-96" />
      <p className="mb-4">{project.description}</p>
      <a
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline"
      >
        View Live Project
      </a>
    </div>
  );
};

export default ProjectDetails;