import "./SectionHeading.css";
import { useEffect } from "react";

const SectionHeading = ({ size, str }) => {
  useEffect(() => {
    const showAni = document.querySelectorAll(".sect_heading");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("show", entry.isIntersecting);
      });
    });
    showAni.forEach((el) => observer.observe(el));
  }, []);
  let l = str.split(" ").length;
  return (
    <>
      <div className="sect_heading">
        {str.split(" ").map((el, i) => {
          if (l > 3) {
            if (l - i <= 2) {
              return (
                <span style={{ color: "#15cf81", fontSize: `${size}rem` }}>
                  {el}{" "}
                </span>
              );
            } else {
              return (
                <span style={{ color: "white", fontSize: `${size}rem` }}>
                  {el}{" "}
                </span>
              );
            }
          } else {
            if (l - i <= 1) {
              return (
                <span style={{ color: "#15cf81", fontSize: `${size}rem` }}>
                  {el}{" "}
                </span>
              );
            } else {
              return (
                <span style={{ color: "white", fontSize: `${size}rem` }}>
                  {el}{" "}
                </span>
              );
            }
          }
        })}
      </div>
    </>
  );
};

export default SectionHeading;
