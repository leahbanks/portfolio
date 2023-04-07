import "./Nav.css";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Nav() {
  return (
    <section className="nav">
      <ul className="nav-items" style={{ listStyle: "none" }}>
        <li>Projects</li>
        <FaGithub />
        <FaLinkedinIn />
        <li>Contact</li>
      </ul>
    </section>
  );
}
