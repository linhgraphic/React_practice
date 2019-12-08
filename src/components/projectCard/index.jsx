import React from "react";
import "./projectCard.css";

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <a href={project.url}>{project.name}</a>
  </div>
);

export default ProjectCard;
