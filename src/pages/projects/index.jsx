import React, { Component } from "react";
import "./Projects.css";
import { projects } from "../../constants";
import ProjectCard from "../../components/ProjectCard";

class Projects extends Component {
  render() {
    return (
      <main className="projects-container">
        <h1>My projects</h1>
        <div className="project-cards">
          {projects.map((project) => (
            <ProjectCard project={project} />
          ))}
        </div>
      </main>
    );
  }
}

export default Projects;
