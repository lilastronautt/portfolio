import "./MenuNavCont.css";
import { useContext, useState, useEffect } from "react";
import themeContext from "../../../store/store";

const MenuNavCont = ({ id, name, closeMenu }) => {
  const ctx = useContext(themeContext);
  const [active, setActive] = useState("");
  useEffect(() => {
    const _id = document.getElementById(id);
    const observerC = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive("active");
          } else {
            setActive("");
          }
        });
      },
      {
        threshold:
          id == "projects" ||
          id == "skills" ||
          id == "contact" ||
          id == "specialization"
            ? 0.2
            : 1,
      }
    );
    observerC.observe(_id);
  }, []);

  const navClickHandler = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
    closeMenu();
  };
  return (
    <div
      className={
        ctx.dark ? "mnc_msg-dark " + active : "mnc_msg-light " + active
      }
      onClick={navClickHandler}
    >
      {name}
    </div>
  );
};

export default MenuNavCont;
