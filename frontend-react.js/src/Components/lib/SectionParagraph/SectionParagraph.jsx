import "./SectionParagraph.css";
import { useEffect } from "react";

const SectionParagraph = ({ text }) => {
  useEffect(() => {
    const ani = document.querySelectorAll(".section_line");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    ani.forEach((el) => observer.observe(el));
  }, []);
  return <p className="section_line">{text}</p>;
};

export default SectionParagraph;
