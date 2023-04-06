import "./About.css";
import AboutCard from "../AboutCard/AboutCard";

const aboutCards = [
  {
    heading: "Northcoders Graduate",
    info: "info here",
    skills: ["list skills here"],
  },
  {
    heading: "Coding Projects",
    info: "info here",
    skills: ["list skills here"],
  },
  {
    heading: "Bachelor of Arts",
    info: "info here",
    skills: ["list skills here"],
  },
];

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
    <p>Bio here...</p>
      <div className="about-container">
        {aboutCards.map((card) => (
          <AboutCard key={card.heading} card={card} />
        ))}
      </div>
    </section>
  );
}
