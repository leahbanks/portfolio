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
      {/* <div className="see-more">
        <a
          className="see-more-btn"
          href={"https://github.com/leahbanks?tab=repositories"}
          target="_blank"
          rel="noreferrer"
        >
          See More
        </a>
      </div> */}
    </section>
  );
}
