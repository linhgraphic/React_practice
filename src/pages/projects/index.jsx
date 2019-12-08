import React, { Component } from "react";
import "./projects.css";
import { projects } from "../../constants";
import ProjectCard from "../../components/projectCard";

class Projects extends Component {
  render() {
    return (
      <>
        <div>My projects</div>
        <div className="projects-container">
          {projects.map(project => (
            <ProjectCard project={project} />
          ))}
        </div>
      </>
    );
  }
}

export default Projects;
