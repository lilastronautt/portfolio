import Pages from "./pages/pages";
import "./App.css";
import themeContext from "./store/store";
import { useEffect, useState, useContext } from "react";
import theme from "./assets/theme.svg";
import video from "./assets/video.mp4";
import { SvgLoader, SvgProxy } from "react-svgmt";

const App = () => {
  const [mode, setMode] = useState({ light: false, dark: true });
  const ctx = useContext(themeContext);
  const [msg, setMsg] = useState("switch to light mode");

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

  return (
    <themeContext.Provider value={{ light: mode.light, dark: mode.dark }}>
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
      <Pages />
    </themeContext.Provider>
  );
};

export default App;
