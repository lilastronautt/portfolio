import "./Contact.css";
import SectionInfo from "../lib/SectionInfo/SectionInfo";
import SectionHeading from "../lib/SectionHeading/SectionHeading";
import contact from "../../assets/contact.svg";
import SectionParagraph from "../lib/SectionParagraph/SectionParagraph";
import { useEffect, useState } from "react";
import React from "react";

const Contact = () => {
  useEffect(() => {
    const div = document.querySelector(".contact_form");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    observer.observe(div);
  }, []);

  const [inputs, setInputs] = useState({ name: "", email: "", msg: "" });

  const updName = (e) => {
    setInputs((prev) => {
      return { ...prev, name: e.target.value };
    });
  };
  const updEmail = (e) => {
    setInputs((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const updMsg = (e) => {
    setInputs((prev) => {
      return { ...prev, msg: e.target.value };
    });
  };

  const contactFormhandler = (e) => {
    e.preventDefault();
    console.log(inputs);
    setInputs((prev) => {
      return { name: "", email: "", msg: "" };
    });
  };

  return (
    <div id="contact">
      <SectionInfo name="CONTACT" path={contact} />
      <SectionHeading str="Contact me" size={1.8} />
      <SectionParagraph text="amaanmitadt@gmail.com" />
      <form onSubmit={contactFormhandler} className="contact_form">
        <div className="name_email__cont">
          <div>
            <label>Name *</label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              onChange={updName}
              value={inputs.name}
            />
          </div>
          <div>
            <label>Email *</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={updEmail}
              value={inputs.email}
            />
          </div>
        </div>
        <div className="form_msg">
          <label>Message *</label>
          <textarea
            rows="7"
            type="textarea,useState"
            placeholder="Enter your Message"
            required
            onChange={updMsg}
            value={inputs.msg}
          />
        </div>

        <button type="submit" className="form_button">
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
