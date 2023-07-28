import "./TimelineDetail.css";
import { useEffect } from "react";

const TimelineDetail = ({ year, degree, institute, activeC, activeB }) => {
  useEffect(() => {
    const divs = document.querySelectorAll(".timeline_detail_cont");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("show", entry.isIntersecting);
        });
      },
      { threshold: 1 }
    );
    divs.forEach((el) => observer.observe(el));
  }, []);
  return (
    <div className="timeline_detail_cont">
      <div className={"timeline_circle " + activeB}></div>
      <div className={"td_year " + activeC}>{year}</div>
      <div className="td_degree">{degree}</div>
      <div className="td_institute">{institute}</div>
    </div>
  );
};

export default TimelineDetail;
