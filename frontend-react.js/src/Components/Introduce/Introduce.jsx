import Card from "../lib/Card/Card";
import "./Introduce.css";
import home from "../../assets/home.svg";
import SectionInfo from "../lib/SectionInfo/SectionInfo";
import React from "react";
import SectionHeading from "../lib/SectionHeading/SectionHeading";
import SectionParagraph from "../lib/SectionParagraph/SectionParagraph";

const Introduce = () => {
  const str = "Say Hi from Amaan, Developer and Problem Solver";

  return (
    <div id="introduce">
      <SectionInfo path={home} name="INTRODUCE" />

      <SectionHeading str={str} size={3} />
      <SectionParagraph
        text="From self-taught to web-wizardry, I've spun my code into captivating
        digital realms."
      />
    </div>
  );
};

export default Introduce;
