import "./VerticalNavC.css";
import { SvgLoader, SvgProxy } from "react-svgmt";
import themeContext from "../../../store/store";
import { useContext } from "react";

const VerticalNavC = ({ path, name, id }) => {
  const ctx = useContext(themeContext);
  const navClickHandler = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="nav_icon_cont" onClick={navClickHandler}>
      <SvgLoader
        path={path}
        fill={ctx.dark ? "white" : "rgba(0,0,0,1)"}
        className="vn_svg"
      >
        <SvgProxy />
      </SvgLoader>
      <div className="nav_icon_info">{name}</div>
    </div>
  );
};

export default VerticalNavC;
