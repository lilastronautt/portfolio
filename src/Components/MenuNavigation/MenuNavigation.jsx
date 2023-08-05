import "./MenuNavigation.css";
import { SvgLoader, SvgProxy } from "react-svgmt";
import { useContext } from "react";
import themeContext from "../../store/store";
import close from "../../assets/close.svg";
import MenuNavCont from "../lib/MenuNavCont/menuNavCont";

const MenuNavigation = ({ closeMenu }) => {
  const ctx = useContext(themeContext);
  const closeMenuNav = () => {
    closeMenu();
  };
  return (
    <>
      <div className={ctx.dark ? "menunav_cont-dark" : "menunav_cont-light"}>
        <div className="menunav_close" onClick={closeMenuNav}>
          <SvgLoader
            path={close}
            fill={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            stroke={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            className="theme_svg"
          >
            <SvgProxy />
          </SvgLoader>
        </div>
        <div className="menunav_data__cont">
          <MenuNavCont name="Introduce" id="introduce" closeMenu={closeMenu} />
          <MenuNavCont name="About" id="about" closeMenu={closeMenu} />
          <MenuNavCont name="Education" id="education" closeMenu={closeMenu} />
          <MenuNavCont
            name="Specialization"
            id="specialization"
            closeMenu={closeMenu}
          />
          <MenuNavCont name="Skills" id="skills" closeMenu={closeMenu} />
          <MenuNavCont name="Project" id="projects" closeMenu={closeMenu} />
          <MenuNavCont name="Contact" id="contact" closeMenu={closeMenu} />
        </div>
      </div>
      <div className={ctx.dark ? "menunav_msg-dark" : "menunav_msg-light"}>
        Made with love by Amaan Khan
      </div>
    </>
  );
};

export default MenuNavigation;
