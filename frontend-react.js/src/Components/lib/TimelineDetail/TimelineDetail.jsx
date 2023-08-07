import "./TimelineDetail.css";
import themeContext from "../../../store/store";
import { useEffect, useContext } from "react";

const TimelineDetail = ({ year, degree, institute, activeC, activeB }) => {
  const ctx = useContext(themeContext);
  useEffect(() => {
    const divs = document.querySelectorAll(".timeline_detail_cont");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    divs.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div className="timeline_detail_cont">
      <div className={"timeline_circle " + activeB}></div>
      <div className={"td_year " + activeC}>{year}</div>
      <div className={ctx.dark ? "td_degree-dark" : "td_degree-light"}>
        {degree}
      </div>
      <div className="td_institute">{institute}</div>
    </div>
  );
};

export default TimelineDetail;
