import "./Skills.css";

import SectionHeading from "../lib/SectionHeading/SectionHeading";
import SectionInfo from "../lib/SectionInfo/SectionInfo";
import skills from "../../assets/skills.svg";
import react1 from "../../assets/react1.svg";
import java from "../../assets/java.svg";
import js from "../../assets/js.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import mongodb from "../../assets/mongodb.svg";
import express from "../../assets/express.svg";
import nodejs from "../../assets/nodejs.svg";
import sql from "../../assets/sql.svg";
import ds from "../../assets/ds.svg";
import algo from "../../assets/algo.svg";
import php from "../../assets/php.png";
import SkillCont from "../lib/SkillCont/SkillCont";
import React from "react";

const Skills = () => {
  return (
    <div id="skills">
      <SectionInfo name="MY SKILLS" path={skills} />
      <SectionHeading str="My Advantages" size={1.8} />
      <div className="skills_container">
        <SkillCont skillName="Java" path={java} />
        <SkillCont skillName="Javascript" path={js} />
        <SkillCont skillName="HTML5" path={html} />
        <SkillCont skillName="CSS" path={css} />
        <SkillCont skillName="MongoDb" path={mongodb} />
        <SkillCont skillName="express" path={express} />
        <SkillCont skillName="React" path={react1} />
        <SkillCont skillName="Nodejs" path={nodejs} />
        <SkillCont skillName="SQL" path={sql} />
        <SkillCont skillName="Data Structures" path={ds} />
        <SkillCont skillName="Algorihtms" path={algo} />
      </div>
    </div>
  );
};

export default Skills;
