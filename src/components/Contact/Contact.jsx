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
       <h2>Contact Me</h2>
      <div className="contact-links">
        <FaLinkedinIn />
        <HiOutlineMail />
      </div>
      <div id="contact" className="contact-container">
        <h5>Send a Message</h5>
        <form
          onSubmit={(e) => {
            sendMessage(e);
          }}
        >
          <label htmlFor="name" className="label">Name</label>
          <input type="text" name="name" placeholder="Your name" required />
          <label htmlFor="email" className="label">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <label htmlFor="message" className="label">Message</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Your message for me..."
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
