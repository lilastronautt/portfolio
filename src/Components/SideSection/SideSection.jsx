import "./SideSection.css";
import amaan from "../../assets/amaan.jpeg";
import github from "../../assets/github1.svg";
import leetcode from "../../assets/leetcode.svg";
import linkedin from "../../assets/linkedin.svg";
import twitter from "../../assets/twitter.svg";
import themeContext from "../../store/store";
import { SvgLoader, SvgProxy } from "react-svgmt";
import { useContext } from "react";

const SideSection = () => {
  const ctx = useContext(themeContext);

  const onClickL = () => {
    window.open("https://www.linkedin.com/in/lilastronaut/", "_blank");
  };
  const onClickT = () => {
    window.open("https://twitter.com/amaankhan0555", "_blank");
  };
  const onClickLe = () => {
    window.open("https://leetcode.com/amaankhan786/", "_blank");
  };
  const onClickG = () => {
    window.open("https://github.com/lilastronautt", "_blank");
  };

  return (
    <div className="sidesec_cont">
      <div
        className={ctx.dark ? "sidesec_heading-dark" : "sidesec_heading-light"}
      >
        <h2>Amaan</h2>
        <p>Self Taught Developer</p>
      </div>
      <div className="sidesec_img__cont">
        <img src={amaan} />
      </div>
      <p
        className={ctx.dark ? "sidesec_details-dark" : "sidesec_details-light"}
      >
        amaanmitadt@gmail.com
      </p>
      <p
        className={ctx.dark ? "sidesec_details-dark" : "sidesec_details-light"}
      >
        Base in Pune, Maharashtra
      </p>
      <div className="sidesec_icon__cont" onClick={onClickT}>
        <div>
          <SvgLoader
            path={twitter}
            fill={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            className="vn_svg"
          >
            <SvgProxy />
          </SvgLoader>
        </div>
        <div onClick={onClickL}>
          <SvgLoader
            path={linkedin}
            fill={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            stroke={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            className="vn_svg"
          >
            <SvgProxy />
          </SvgLoader>
        </div>
        <div onClick={onClickLe}>
          <SvgLoader
            path={leetcode}
            fill={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            stroke={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            className="vn_svg"
          >
            <SvgProxy />
          </SvgLoader>
        </div>
        <div onClick={onClickG}>
          <SvgLoader
            path={github}
            fill={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            className="vn_svg"
          >
            <SvgProxy />
          </SvgLoader>
        </div>
      </div>
      <button
        className={ctx.dark ? "sidesec_button-dark" : "sidesec_button-light"}
      >
        Resume
      </button>
    </div>
  );
};

export default SideSection;
