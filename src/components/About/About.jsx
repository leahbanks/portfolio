import "./About.css";
import "../../App.css";

import { FaUserGraduate, FaLaptopCode, FaUsers, FaProjectDiagram } from "react-icons/fa";
import profilePic from "../../profile-pic.jpg";

const About = () => {
  return (
    <section id="about">
      <h2>About</h2>
      <div className="container about__container">
        <div className="about__me">
          <img
            className="about__me-image"
            src={profilePic}
            alt="Profile Picture"
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
              <small>10+ solo and group projects completed</small>
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultrices
            gravida dictum fusce ut placerat orci nulla pellentesque. Enim ut
            sem viverra aliquet eget sit. Massa tincidunt nunc pulvinar sapien
            et. Nisi scelerisque eu ultrices vitae auctor eu. Et sollicitudin ac
            orci phasellus egestas tellus. Et netus et malesuada fames ac
            turpis. Mauris a diam maecenas sed enim ut. Amet mattis vulputate
            enim nulla aliquet porttitor lacus. Eget velit aliquet sagittis id
            consectetur purus ut faucibus. Suspendisse faucibus interdum posuere
            lorem ipsum dolor sit amet. Diam sollicitudin tempor id eu nisl nunc
            mi. Nibh venenatis cras sed felis.
          </p>
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
