import "./Nav.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import Projects from "../Projects/Projects";
import Contact from '../Contact/Contact';
import About from "../About/About";

const githubLink = "https://github.com/leahbanks";
const linkedInLink = "https://www.linkedin.com/in/leahrbanks/";

const handleClickScroll = () => {
  const element = document.getElementById("contact-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const handleProjectClickScroll = () => {
  const element = document.getElementById("project-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Nav() {
  return (
    <section className="nav">
      <ul className="nav-items">
        <button onClick={handleProjectClickScroll}>Projects</button>
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
        <button onClick={handleClickScroll}>Contact</button>
      </ul>
      <About id="about-section"/>
      <div id="project-section"><Projects/></div>
      <div id="contact-section"><Contact/></div>
    </section>
  );
}
