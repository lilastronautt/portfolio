import "./Contact.css";
import SectionInfo from "../lib/SectionInfo/SectionInfo";
import SectionHeading from "../lib/SectionHeading/SectionHeading";
import contact from "../../assets/contact.svg";
import SectionParagraph from "../lib/SectionParagraph/SectionParagraph";
import { useEffect, useState, useContext } from "react";
import React from "react";
import themeContext from "../../store/store";

const Contact = () => {
  const ctx = useContext(themeContext);
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
            <label
              className={ctx.dark ? "form_label-dark" : "form_label-light"}
            >
              Name *
            </label>
            <input
              type="text"
              placeholder="Enter your name"
              required
              onChange={updName}
              value={inputs.name}
              className={ctx.dark ? "form_input-dark" : "form_input-light"}
            />
          </div>
          <div>
            <label
              className={ctx.dark ? "form_label-dark" : "form_label-light"}
            >
              Email *
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={updEmail}
              value={inputs.email}
              className={ctx.dark ? "form_input-dark" : "form_input-light"}
            />
          </div>
        </div>
        <div className="form_msg">
          <label className={ctx.dark ? "form_label-dark" : "form_label-light"}>
            Message *
          </label>
          <textarea
            rows="7"
            type="textarea,useState"
            placeholder="Enter your Message"
            required
            onChange={updMsg}
            value={inputs.msg}
            className={ctx.dark ? "form_input-dark" : "form_input-light"}
          />
        </div>

        <button
          type="submit"
          className={ctx.dark ? "form_button-dark" : "form_button-light"}
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default Contact;
