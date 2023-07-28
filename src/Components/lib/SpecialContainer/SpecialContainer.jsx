import "./SpecialContainer.css";
import { useEffect } from "react";

const SpecialContainer = ({ head, details, linkName, path }) => {
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
      <h3>{head}</h3>
      <p className="sp_details">{details}</p>
      <p className="sp_link">{linkName}</p>
      <div className="sp_icon__cont">
        <img src={path} />
      </div>
    </div>
  );
};

export default SpecialContainer;
