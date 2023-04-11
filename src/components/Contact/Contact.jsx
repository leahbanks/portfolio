import "./Contact.css";
import { HiOutlineMail } from "react-icons/hi";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {

  const [sentMessage, setSentMessage] = useState(false)

  const form = useRef();

  const sendMessage = (e) => {
    e.preventDefault();

  emailjs
    .sendForm(
      "service_gm3zago",
      "template_m4chck7",
      form.current,
      "isjGyWVrRuc2VgGY_"
    )
    .then(
      (result) => {
        console.log(result.text);
        setSentMessage(true)
      },
      (error) => {
        console.log(error.text);
      }
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h2 className="contact-header">Get in Touch</h2>
      <div className="contact-links">
        <HiOutlineMail />
      </div>
      <div className="contact-container">
        <h5>Send a Message</h5>
        <form ref={form}
          onSubmit={(e) => {
            sendMessage(e);
          }}
        >
          <input type="text" name="name" placeholder="Your name" required />
          <input
            type="email"
            name="email"
            placeholder="Your email address"
            required
          />
          <textarea
            name="message"
            rows="10"
            placeholder="Your message for me..."
            required
          ></textarea>
          <button type="submit" className="send-btn">
          Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
