import Card from "../lib/Card/Card";
import "./Introduce.css";
import home from "../../assets/home.svg";
import SectionInfo from "../lib/SectionInfo/SectionInfo";

import SectionHeading from "../lib/SectionHeading/SectionHeading";
import SectionParagraph from "../lib/SectionParagraph/SectionParagraph";

const Introduce = () => {
  const str = "Say Hi from Amaan, Devolper and Problem Solver";

  return (
    <>
      <SectionInfo path={home} name="INTRODUCE" />

      <SectionHeading str={str} size={3} />
      <SectionParagraph
        text="From self-taught to web-wizardry, I've spun my code into captivating
        digital realms."
      />
    </>
  );
};

export default Introduce;
