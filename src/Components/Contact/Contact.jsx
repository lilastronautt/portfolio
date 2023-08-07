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

  const [inputs, setInputs] = useState({ name: "", email: "", msg: "" });
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [isSucessFullSentMsg, setSucMsg] = useState(false);
  const [isErrorSendingMsg, setErrorSendMsg] = useState(false);

  useEffect(() => {
    const div = document.querySelector(".contact_form");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    observer.observe(div);

    function onlineHandler() {
      setIsOnline(true);
    }

    function offlineHandler() {
      setIsOnline(false);
    }

    window.addEventListener("online", onlineHandler);
    window.addEventListener("offline", offlineHandler);

    return () => {
      window.removeEventListener("online", onlineHandler);
      window.removeEventListener("offline", offlineHandler);
    };
  }, []);

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

  const contactFormhandler = async (e) => {
    e.preventDefault();
    console.log(inputs);
    try {
      const jsonData = JSON.stringify(inputs);
      console.log(jsonData);
      const response = await fetch(
        "http://localhost/portfoliophpServer/server.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: jsonData,
        }
      );

      const data = await response.json();
      setIsInternet(true);
      setErrorSendMsg(false);
      setSucMsg(true);
    } catch (error) {
      console.log(error);
      setErrorSendMsg(true);
      setIsInternet(true);
      setSucMsg(false);
    }

    setInputs((prev) => {
      return { name: "", email: "", msg: "" };
    });
  };

  return (
    <div id="contact">
      <SectionInfo name="CONTACT" path={contact} />
      <SectionHeading str="Contact me" size={1.8} />
      <SectionParagraph text="amaanmitadt@gmail.com" />
      {isOnline || (
        <div style={{ color: "red", margin: "1rem 0", width: "90%" }}>
          * Please check your internet connection
        </div>
      )}
      {isSucessFullSentMsg && (
        <div style={{ color: "green", margin: "1rem 0", width: "90%" }}>
          * Message send succesfully, Thanks for your time!
        </div>
      )}
      {isErrorSendingMsg && (
        <div style={{ color: "yellow", margin: "1rem 0", width: "90%" }}>
          * Message sending problem, if the problem persist please mail on above
        </div>
      )}
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
