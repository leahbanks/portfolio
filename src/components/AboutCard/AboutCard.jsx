import "./AboutCard.css";
import { FaUserGraduate, FaLaptopCode } from "react-icons/fa";

export default function AboutCard({ card }) {
  const { heading, info, skills } = card;

  return (
    <section>
      <li className="about-card" style={{ listStyle: "none" }}>
        <div>
          <h3>{heading}</h3>
          <p>{info}</p>
          <ul className="skills" style={{ listStyle: "none" }}>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
        {/* <div className="project-links">
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
    </div> */}
      </li>
    </section>
  );

  //   <section id="about-cards">
  //     <h2>About Me</h2>
  //     <div className="about-card-container">
  //       <ul className="about-card">
  //         <li>
  //           <p>bio</p>
  //         </li>
  //         <li className="about-nc">
  //           <FaLaptopCode className="code-icon" />
  //           <h5>Northcoders Graduate</h5>
  //           <small>480 Contact hours</small>
  //         </li>
  //         <li className="about-projects">
  //           <h5>Projects</h5>
  //           <small>Solo and group projects completed</small>
  //         </li>
  //         <li className="about-grad">
  //           <FaUserGraduate className="grad-icon" />
  //           <h5>Bachelor of Arts</h5>
  //           <small>First Class Honours</small>
  //         </li>
  //       </ul>
  //     </div>
  //   </section>;
}
