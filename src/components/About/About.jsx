import "./About.css";
import AboutCard from "../AboutCard/AboutCard";
import { aboutCards } from "../../data/about-data";

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
        <button className="resume-btn">
          <a href="CV_LeahBanks.pdf" target="_blank">
            CV
          </a>
        </button>
      <p>Bio here...</p>
      <div className="about-container">
        {aboutCards.map((card) => (
          <AboutCard key={card.heading} card={card} />
        ))}
      </div>
    </section>
  );
}
