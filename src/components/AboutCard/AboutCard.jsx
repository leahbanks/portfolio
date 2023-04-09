import "./AboutCard.css";

export default function AboutCard({ card }) {
  const { heading, subheading, skills, icon } = card;

  return (
    <section className="about-container">
      <div className="about-card" style={{ listStyle: "none" }}>
        <h3>
          {heading} {icon}
        </h3>
        <small>{subheading}</small>
        <ul className="skills" style={{ listStyle: "none" }}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
