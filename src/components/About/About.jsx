import "./About.css";
import "../../App.css";

import {
  FaUserGraduate,
  FaLaptopCode,
  FaUsers,
  FaProjectDiagram,
} from "react-icons/fa";

import {
  DiJsBadge,
  DiReact,
  DiPostgresql,
  DiHtml5,
  DiCss3,
  DiAtlassian,
  DiGit,
  DiNodejs,
  DiTrello,
  DiSass,
  DiJira,
  DiExtjs,
  DiNpm,
} from "react-icons/di";
import profilePic from "../../profile-pic.jpg";

import { SiConfluence, SiExpress } from "react-icons/si";

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="container about__container">
        <div className="about__me">
          <img
            className="about__me-image"
            src={profilePic}
            alt="portrait of Leah"
          />
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaLaptopCode className="about__icon" />
              <h5>Northcoders Graduate</h5>
              <small>480 contact hours</small>
            </article>

            <article className="about__card">
              <FaProjectDiagram className="about__icon" />
              <h5>Projects</h5>
              <small>10+ solo, paired and group projects completed</small>
            </article>

            <article className="about__card">
              <FaUserGraduate className="about__icon" />
              <h5>Bachelor of Arts</h5>
              <small>First Class Honours</small>
            </article>

            <article className="about__card">
              <FaUsers className="about__icon" />
              <h5>Customer Happiness</h5>
              <small>10 years experience</small>
            </article>
          </div>
          <p>
            I am a Full Stack Developer who has recently graduated from
            Northcoders - an industry-leading coding bootcamp. With a background
            in Customer Happiness and People Management, I have a unique blend
            of experience in both tech and customer service that allows me to
            communicate effectively, approach development projects from
            different perspectives and apply innovative solutions with the user
            always in mind. During my 13 weeks at Northcoders, I completed a
            range of group, solo and paired projects, following Agile
            methodlogies to facilitate efficiency and collaboration. As a
            graduate of Fine Art Mixed Media, I am excited to bring my creative
            passion to a team and create aesthetically-pleasing apps for users
            to enjoy.
          </p>
          <ul className="skills">
            <li>
              <DiJsBadge />
            </li>
            <li>
              <DiReact />
            </li>
            <li>
              <DiPostgresql />
            </li>
            <li>
              <SiExpress />
            </li>
            <li>
              <DiCss3 />
            </li>
            <li>
              <DiHtml5 />
            </li>
            <li>
              <DiNodejs />
            </li>
            <li>
              <DiNpm />
            </li>
            <li>
              <DiGit />
            </li>
            <li>
              <DiAtlassian />
            </li>
            <li className="confluence">
              <SiConfluence />
            </li>
            <li>
              <DiJira />
            </li>
            <li>
              <DiTrello />
            </li>
          </ul>
          <div className="about-buttons">
            <a className="cv-btn" href="CV_LeahBanks.pdf" target="_blank">
              CV
            </a>
            <a href="#contact" className="contact-btn">
              {" "}
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
// import AboutCard from "../AboutCard/AboutCard";
// import { aboutCards } from "../../data/about-data";

// export default function About() {
//   return (
//     <div className="about">
//     <section className="about-text">
//       <h2>About</h2>
//       <p>Bio here...</p>
//       <div className="about-container">
//         {aboutCards.map((card) => (
//           <AboutCard key={card.heading} card={card} />
//         ))}
//       </div>
//     </section>
//     </div>
//   );
// }
