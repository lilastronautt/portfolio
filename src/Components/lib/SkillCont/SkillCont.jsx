import "./SkillCont.css";
import { useEffect } from "react";

const SkillCont = ({ path, skillName }) => {
  useEffect(() => {
    const divs = document.querySelectorAll(".skill_container");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    divs.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div className="skill_container">
      <img src={path}></img>
      <div>{skillName}</div>
    </div>
  );
};

export default SkillCont;
