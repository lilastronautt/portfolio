import "./VerticalNavC.css";
import { SvgLoader, SvgProxy } from "react-svgmt";
import themeContext from "../../../store/store";
import { useState, useContext, useEffect } from "react";

const VerticalNavC = ({ path, name, id }) => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    const _id = document.getElementById(id);
    const observerC = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(true);
          } else {
            setActive(false);
          }
        });
      },
      {
        threshold:
          id == "projects" || id == "skills" || id == "contact" ? 0.2 : 1,
      }
    );
    observerC.observe(_id);
  }, []);

  const ctx = useContext(themeContext);
  const navClickHandler = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="nav_icon_cont" onClick={navClickHandler}>
      <SvgLoader
        path={path}
        fill={active ? "#15cf81" : ctx.dark ? "white" : "rgba(0,0,0,1)"}
        stroke="none"
        className="vn_svg"
      >
        <SvgProxy />
      </SvgLoader>
      <div className="nav_icon_info">{name}</div>
    </div>
  );
};

export default VerticalNavC;
