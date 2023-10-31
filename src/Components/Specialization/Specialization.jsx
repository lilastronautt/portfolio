import "./Specialization.css";

import SectionInfo from "../lib/SectionInfo/SectionInfo";
import services from "../../assets/services.svg";
import SectionHeading from "../lib/SectionHeading/SectionHeading";
import SpecialContainer from "../lib/SpecialContainer/SpecialContainer";
import coding from "../../assets/coding.svg";
import leetcode2 from "../../assets/leetcode2.svg";
import React from "react";

const Specialization = () => {
  return (
    <div id="specialization">
      <SectionInfo name="SPECIALIZATION" path={services} />
      <SectionHeading str="My Specializations" size={1.8} />
      <SpecialContainer
        head="Web Devolpment"
        details="i created websites using mern as side projects, currently working on mE-commerce website(MERN)"
        linkName="GITHUB"
        path={coding}
        link="https://github.com/lilastronautt"
      />
      <SpecialContainer
        head="DSA Solving/Problem Solving"
        details="I solve questions on leetcode for better problem solving (above 250 questions solved)"
        linkName="LEETCODE"
        path={leetcode2}
        link="https://leetcode.com/amaankhan786/"
      />
    </div>
  );
};

export default Specialization;
