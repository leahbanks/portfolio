import "./Nav.css";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";
import About from "../About/About";
import Footer from "../Footer/Footer";

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

const handleAboutClickScroll = () => {
  const element = document.getElementById("about-section");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Nav() {
  return (
    <section className="nav">
      <ul className="nav-items">
        <button onClick={handleAboutClickScroll}>About</button>
        <button onClick={handleProjectClickScroll}>Projects</button>
        <button onClick={handleClickScroll}>Contact</button>
      </ul>
      <div id="about-section">
        <About />
      </div>
      <div id="project-section">
        <Projects />
      </div>
      <div id="contact-section">
        <Contact />
      </div>
      <Footer
        handleProjectClickScroll={handleProjectClickScroll}
        handleAboutClickScroll={handleAboutClickScroll}
        About={About}
        Projects={Projects}
        Contact={Contact}
      />
    </section>
  );
}
