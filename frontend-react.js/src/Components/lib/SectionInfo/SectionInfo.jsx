import "./SectionInfo.css";
import themeContext from "../../../store/store";
import { useContext } from "react";
import { SvgLoader, SvgProxy } from "react-svgmt";

const SectionInfo = ({ path, name }) => {
  const ctx = useContext(themeContext);
  return (
    <div className="introduce_icon">
      <SvgLoader
        path={path}
        fill={ctx.dark ? "grey" : "rgba(0,0,0,0.5)"}
        stroke="none"
        className="svg"
      >
        <SvgProxy />
      </SvgLoader>
      <span
        className={ctx.dark ? "introduce_name-dark" : "introduce_name-light"}
      >
        {name}
      </span>
    </div>
  );
};

export default SectionInfo;
