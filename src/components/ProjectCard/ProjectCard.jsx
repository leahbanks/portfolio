import "./ProjectCard.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { title, info, tech, code, snapshots, website } = project;
  console.log(snapshots)
  return (
    <section className="project-container">
      <li className="project-card" style={{ listStyle: "none" }}>
        <div>
          <h3>{title}</h3>
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
        </div>
        <header>
          <ul className="tech" style={{ listStyle: "none" }}>
            {tech.map((item) => (
              <li key={item.length}>{item}</li>
            ))}
          </ul>
        </header>
        <p>{info}</p>
        <div className="snapshots-container">
          {snapshots.map((snapshot) => (
            <img
              className={title === "NC News" ? "news-snapshots" : "fog-snapshots"}
              src={snapshot}
              alt={`snapshot of ${title}`}
              key={snapshot}
            />
          ))}
        </div>{" "}
      </li>
    </section>
  );
}
