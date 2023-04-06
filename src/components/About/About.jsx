import "./About.css";
import AboutCard from "../AboutCard/AboutCard";
import { FaUserGraduate, FaLaptopCode, FaUsers } from "react-icons/fa";

const aboutCards = [
  {
    heading: "Northcoders Graduate",
    subheading: "480 contact hours during a 13 week bootcamp",
    info: "Northcoders is an industry-leading software development training provider.",
    skills: ["list skills here"],
    icon: <FaLaptopCode />
  },
  {
    heading: "Customer Experience Professional",
    subheading: "10 years experience in various Customer Happiness, Visitor Experience and Managment roles",
    info: "info here",
    skills: ["list skills here"],
    icon: <FaUsers />
  },
  {
    heading: "Bachelor of Arts",
    subheading: "Graduated with a First Class Degree in Fine Art Mixed Media",
    info: "info here",
    skills: ["list skills here"],
    icon: <FaUserGraduate />
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
