import "./AboutCard.css";

export default function AboutCard({ card }) {
  const { heading, subheading, info, skills, icon } = card;

  return (
    <section className="about-container">
      <div className="about-card" style={{ listStyle: "none" }}>
        <h3>
          {heading} {icon}
        </h3>
        <p>{subheading}</p>
        <small>{info}</small>
        <ul className="skills" style={{ listStyle: "none" }}>
          {skills.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
