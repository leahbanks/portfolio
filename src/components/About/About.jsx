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
  DiJira,
  DiNpm,
} from "react-icons/di";
import profilePic from "../../profile-pic.jpg";

import { SiConfluence, SiExpress } from "react-icons/si";

export default function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="container about-container">
        <div className="about-info">
          <img src={profilePic} alt="portrait of Leah" />
        </div>

        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <FaLaptopCode className="about-icon" />
              <h5>Northcoders Graduate</h5>
              <small>13 weeks / 480 contact hours</small>
            </article>

            <article className="about-card">
              <FaProjectDiagram className="about-icon" />
              <h5>Projects</h5>
              <small>Solo, paired and group projects completed</small>
            </article>

            <article className="about-card">
              <FaUserGraduate className="about-icon" />
              <h5>Bachelor of Arts</h5>
              <small>First Class Honours</small>
            </article>

            <article className="about-card">
              <FaUsers className="about-icon" />
              <h5>Customer Happiness</h5>
              <small>10 years experience</small>
            </article>
          </div>
          <p>
            I am a Full Stack Developer who has recently graduated from
            Northcoders - an industry-leading coding bootcamp. With a background
            in Customer Happiness and People Management, I have a combination of
            experience in both tech and customer service that allows me to
            communicate effectively and approach development projects from a
            user-centric perspective. During my 13 weeks at Northcoders, I
            completed a range of group, solo and paired projects, following
            Agile methodlogies to facilitate efficiency and collaboration. As a
            graduate of Fine Art Mixed Media, I am excited to bring my creative
            passion to a team and create aesthetically-pleasing apps for users
            to enjoy.
          </p>
          <ul className="skills">
            <li title="Javascript logo">
              < DiJsBadge title="Javascript logo"/>
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
            <a className="cv-btn" href="CV-LB.pdf" target="_blank">
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
}
