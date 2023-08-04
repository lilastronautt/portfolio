import "./SpecialContainer.css";
import { useEffect, useContext } from "react";
import themeContext from "../../../store/store";

const SpecialContainer = ({ head, details, linkName, path }) => {
  const ctx = useContext(themeContext);
  useEffect(() => {
    const divs = document.querySelectorAll(".specials_cont");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    divs.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div className="specials_cont">
      <h3 className={ctx.dark ? "sp_head-dark" : "sp_head-light"}>{head}</h3>
      <p className="sp_details">{details}</p>
      <p className={ctx.dark ? "sp_link-dark" : "sp_link-light"}>{linkName}</p>
      <div className="sp_icon__cont">
        <img src={path} />
      </div>
    </div>
  );
};

export default SpecialContainer;
