import "./Contact.css";
import { FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

export default function Contact() {
  const sendMessage = (e) => {
    e.preventDefault();
    e.target.reset();
  };
  return (
    <section>
      <div className="about-links">
        <h2>Get In Touch</h2>
        <FaLinkedinIn />
        <HiOutlineMail />
      </div>
      <div id="contact" className="container">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <form
          onSubmit={(e) => {
            sendMessage(e);
          }}
        >
          <input type="text" name="name" placeholder="Your Name" required />
          <input
            type="email"
            name="email"
            placeholder="Your Email Address"
            required
          />
          <textarea
            name="message"
            rows="8"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
