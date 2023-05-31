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
  DiGit,
  DiNodejs,
  DiNpm,
} from "react-icons/di";
import profilePic from "../../profile-pic.jpg";

import { SiExpress } from "react-icons/si";

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <div className="about-info">
          <img src={profilePic} alt="portrait of Leah" />
        </div>

        <div className="about-content">
          <h2>About Me</h2>
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
              <FaUsers className="about-icon" />
              <h5>E-Commerce & Retail</h5>
              <small>10 years experience</small>
            </article>

            <article className="about-card">
              <FaUserGraduate className="about-icon" />
              <h5>Bachelor of Arts</h5>
              <small>First Class Honours</small>
            </article>
          </div>
          <p>
            I am a Full Stack Developer with a proficiency in Javascript, HTML,
            CSS and Node. With a background in e-commerce & team management and
            as a graduate of the industry-leading Northcoders bootcamp, I have a
            combination of experience that allows me to communicate effectively
            and approach development projects with a user-centric mindset.
            During my 13 weeks at Northcoders, I completed a range of group,
            solo and paired projects; adapting to various tech stacks and
            following Agile methodlogies to facilitate efficiency and
            collaboration. As a graduate of Fine Art Mixed Media, I am excited
            to bring my creative passion to a team and develop
            aesthetically-pleasing apps for users to enjoy.
          </p>
          <ul className="skills">
            <li title="Javascript logo">
              <DiJsBadge title="Javascript logo" />
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
          </ul>
          <div className="about-buttons">
            <a className="cv-btn" href="https://www.canva.com/design/DAFkYknpICI/view" target="_blank" rel="noreferrer">
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
