import "./ProjectCard.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { title, type, info, tech, code, snapshots, website } = project;
  return (
    <section className="project-container">
      <li className="project-card" style={{ listStyle: "none" }}>
        <div>
          <div className="project-icons">
            {code && (
              <a className="githubIcon" href={code} target="_blank" rel="noreferrer">
                <FaGithub />
              </a>
            )}
            {website && (
              <a className="linkIcon" href={website} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>
            )}
          </div>
          <h3>{title}</h3>
          <h4 className="project-type">{type}</h4>
        </div>
        <p className="project-info">{info}</p>
        <h4 className="tech-heading">Tech Stack</h4>
        <ul className="tech" style={{ listStyle: "none" }}>
          {tech.map((item) => (
            <p key={item.name}>{item.img}</p>
          ))}
        </ul>
        {snapshots.length > 1 ? (
          <div>
          <h4 className="snapshots-heading">Snapshots ➔</h4>
          <div className="snapshots-container">
          {snapshots.map((snapshot) => (
            <img
              className={
                title === "NC News" ? "news-snapshots" : "fog-snapshots"
              }
              src={snapshot.img}
              alt={`snapshot of ${title}`}
              key={snapshot.name}
            />
          ))}
        </div>
        </div>
        ) : null}
     {" "}
      </li>
    </section>
  );
}
