import "./AboutCard.css";


export default function AboutCard({ card }) {
  const { heading, subheading, info, skills, icon } = card;

  return (
    <section className="about-container">
      <li className="about-card" style={{ listStyle: "none" }}>
        <div>
          <h3>{heading} {icon}</h3>
          <small>{subheading}</small>
          <p>{info}</p>
          <ul className="skills" style={{ listStyle: "none" }}>
            {skills.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </div>
      </li>
    </section>
  );
}
