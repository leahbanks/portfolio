import "./Contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import {HiOutlineMail} from "react-icons/hi"

export default function Contact() {
  return (
    <section className="about-links">
      <h2>Get In Touch</h2>
      <FaLinkedinIn />
      <HiOutlineMail />
    </section>
  );
}
