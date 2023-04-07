import "./About.css";
import AboutCard from "../AboutCard/AboutCard";
import { aboutCards } from "../../data/about-data";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <FaLinkedinIn />
      <FaGithub />
      <p>Bio here...</p>
      <div className="about-container">
        {aboutCards.map((card) => (
          <AboutCard key={card.heading} card={card} />
        ))}
      </div>
    </section>
  );
}
