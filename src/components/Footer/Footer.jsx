import "./Footer.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer({
  handleProjectClickScroll,
  handleAboutClickScroll,
  githubLink,
  linkedInLink,
}) {
  return (
    <section className="footer">
      <ul className="footer-items">
        <button onClick={handleAboutClickScroll}>About</button>
        {githubLink && (
          <a href={githubLink} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        )}
        {linkedInLink && (
          <a href={linkedInLink} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        )}
        <button onClick={handleProjectClickScroll}>Projects</button>
      </ul>
    </section>
  );
}
