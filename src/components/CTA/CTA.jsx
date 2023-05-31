import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import "./CTA.css";

export default function SideNav() {
  const githubLink = "https://github.com/leahbanks";
  const linkedInLink = "https://www.linkedin.com/in/leahrbanks/";
  return (
    <section className="side-nav">
      <div className="side-nav-cv">
        <a className="cv" href="https://www.canva.com/design/DAFkYknpICI/view" target="_blank" rel="noreferrer">
          CV
        </a>
      </div>
      <div className="github-icon">
        {githubLink && (
          <a
            className="github"
            href={githubLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        )}
      </div>
      <div className="linkedin-icon">
        {linkedInLink && (
          <a
            className="linkedin"
            href={linkedInLink}
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedinIn />
          </a>
        )}
      </div>
    </section>
  );
}
