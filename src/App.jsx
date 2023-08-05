import Pages from "./Pages/Pages";
import "./App.css";
import themeContext from "./store/store";
import { useEffect, useState, useContext } from "react";
import theme from "./assets/theme.svg";
import menu1 from "./assets/menu1.svg";
import menu2 from "./assets/menu2.svg";
import { SvgLoader, SvgProxy } from "react-svgmt";
import MenuNavigation from "./Components/MenuNavigation/MenuNavigation";

const App = () => {
  const [mode, setMode] = useState({ light: false, dark: true });
  const ctx = useContext(themeContext);
  const [msg, setMsg] = useState("switch to light mode");
  const [menu, showMenu] = useState(false);

  useEffect(() => {
    const body = document.getElementById("body");
    body.style.backgroundColor = mode.dark ? "rgb(29, 28, 29)" : "white";
  }, [mode]);

  const themeModeHandler = () => {
    if (mode.light) {
      setMode(() => {
        return { light: false, dark: true };
      });
      setMsg("switch to light mode");
    } else {
      setMode(() => {
        return { light: true, dark: false };
      });
      setMsg("switch to dark mode");
    }
  };

  const showMenuHandler = () => {
    showMenu((prev) => !prev);
  };

  const onClickBackdrop = () => {
    showMenu(() => false);
  };

  const closeMenu = () => {
    showMenu(() => false);
  };

  return (
    // clean this mess up
    <themeContext.Provider value={{ light: mode.light, dark: mode.dark }}>
      {menu && <div onClick={onClickBackdrop} id="backdrop"></div>}
      <div
        className={mode.dark ? "topnavbar_cont-dark" : "topnavbar_cont-light"}
      >
        <div className="menu_cont" onClick={showMenuHandler}>
          <SvgLoader path={mode.dark ? menu2 : menu1} className="menu_svg">
            <SvgProxy />
          </SvgLoader>
        </div>
        <div className="thememode_cont" onClick={themeModeHandler}>
          <SvgLoader
            path={theme}
            fill={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            stroke={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            className="theme_svg"
          >
            <SvgProxy
              fill={ctx.dark ? "white" : "rgba(0,0,0,1)"}
              stroke={ctx.dark ? "white" : "rgba(0,0,0,1)"}
            />
          </SvgLoader>
          <div className="theme_msg">{msg}</div>
        </div>
      </div>
      {menu && <MenuNavigation closeMenu={closeMenu} />}
      <Pages />
    </themeContext.Provider>
  );
};

export default App;
