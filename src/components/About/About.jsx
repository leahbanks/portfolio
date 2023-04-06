import "./About.css";
import AboutCard from "../AboutCard/AboutCard";
import {
  FaUserGraduate,
  FaLaptopCode,
  FaUsers,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

import { FiDownload } from "react-icons/fi";

const aboutCards = [
  {
    heading: "Northcoders Graduate",
    subheading: "480 contact hours during a 13 week bootcamp",
    info: "Northcoders is an industry-leading software development training provider.",
    skills: [],
    icon: <FaLaptopCode />,
  },
  {
    heading: "Customer Experience Professional",
    subheading:
      "10 years experience in various Customer Happiness, Visitor Experience and Managment roles",
    info: "",
    skills: [],
    icon: <FaUsers />,
  },
  {
    heading: "Bachelor of Arts",
    subheading: "Graduated with a First Class Degree in Fine Art Mixed Media",
    info: "",
    skills: [],
    icon: <FaUserGraduate />,
  },
];

export default function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-links">
        <FaLinkedinIn />
        <FaGithub />
        <FiDownload />
      </div>

      <p>Bio here...</p>
      <div className="about-container">
        {aboutCards.map((card) => (
          <AboutCard key={card.heading} card={card} />
        ))}
      </div>
    </section>
  );
}
