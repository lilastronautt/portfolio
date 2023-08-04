import "./SkillCont.css";
import { useEffect, useContext } from "react";
import themeContext from "../../../store/store";

const SkillCont = ({ path, skillName }) => {
  const ctx = useContext(themeContext);
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
      <div className={ctx.dark ? "skillname-dark" : "skillname-light"}>
        {skillName}
      </div>
    </div>
  );
};

export default SkillCont;
