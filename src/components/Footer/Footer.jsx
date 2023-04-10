import "./Footer.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Footer({
  handleProjectClickScroll,
  handleAboutClickScroll,
  handleHomeClickScroll
}) {
  const githubLink = "https://github.com/leahbanks";
  const linkedInLink = "https://www.linkedin.com/in/leahrbanks/";
  return (
    <section className="footer">
      <div className="footer-links">
      {githubLink && (
          <a className="githubLink" href={githubLink} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        )}
        {linkedInLink && (
          <a className="linkedInLink" href={linkedInLink} target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
        )}
      </div>
      <div className="footer-items">
        <button className="btn" onClick={handleAboutClickScroll}>About</button>
        <button className="btn" onClick={handleProjectClickScroll}>Projects</button>
        <button className="btn" onClick={handleHomeClickScroll}>Home</button>
        </div>
    </section>
  );
}
