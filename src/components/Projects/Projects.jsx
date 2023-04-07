import { ncNewsSnapshots, throughFogSnapshots} from "../../data/snapshot-data";

import "./Projects.css";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from '../../data/project-data'
console.log(projects)

export default function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
