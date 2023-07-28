import Card from "../lib/Card/Card";
import "./Introduce.css";
import home from "../../assets/home.svg";
import SectionInfo from "../lib/SectionInfo/SectionInfo";

import SectionHeading from "../lib/SectionHeading/SectionHeading";

const Introduce = () => {
  const str = "Say Hi from Amaan, Devolper and Problem Solver";

  return (
    <>
      <SectionInfo path={home} name="INTRODUCE" />

      <SectionHeading str={str} size={3} />

      <p className="introduce_line">
        From self-taught to web-wizardry, I've spun my code into captivating
        digital realms.
      </p>
    </>
  );
};

export default Introduce;
