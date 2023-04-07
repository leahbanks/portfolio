import "./ProjectCard.css";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {
  const { title, info, tech, code, snapshots, website } = project;
  return (
    <section className="project-container">
      <li className="project-card" style={{ listStyle: "none" }}>
        <div>
          <div className="project-icons">
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
          <h3>{title}</h3>
        </div>
        <header></header>
        <p>{info}</p>
        {snapshots.length > 0 ? (
          <h4 className="snapshots-heading">Snapshots ➔</h4>
        ) : null}
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
        </div>{" "}
        <ul className="tech" style={{ listStyle: "none" }}>
          {tech.map((item) => (
            <p key={item.name}>{item.img}</p>
          ))}
        </ul>
      </li>
    </section>
  );
}
