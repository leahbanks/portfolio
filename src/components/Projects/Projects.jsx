import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from "../../data/project-data";

export default function Projects() {
  return (
    <section className="projects">
      <h2>Recent Work</h2>

      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
