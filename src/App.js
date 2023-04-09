import "./App.css";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import CTA from "./components/CTA/CTA";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";

function App() {
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

  return (
    <div className="App">
      <CTA />
      <Header />
      <Nav
        handleAboutClickScroll={handleAboutClickScroll}
        handleClickScroll={handleClickScroll}
        handleProjectClickScroll={handleProjectClickScroll}
      />
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
      />
    </div>
  );
}

export default App;
