import "./ProjectCard.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { title, info, tech, code, website } = project;
  return (
    <section>
      <li className="project-card" style={{ listStyle: "none" }}>
        <div>
          <h3>{title}</h3>
          <header>
            <ul className="tech" style={{ listStyle: "none" }}>
              {tech.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </header>
          <p>{info}</p>
        </div>
        <div className="project-links">
          {code && (
            <a href={code} target="_blank" rel="noreferrer">
              <FaGithub />
            </a>
          )}
          {website && (
            <a href={website} target="_blank" rel="noreferrer">
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </li>
    </section>
  );
}
