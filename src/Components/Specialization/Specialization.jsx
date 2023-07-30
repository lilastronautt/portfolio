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
        details="i created websites using mern as side projects, currently working on mut adt hostel managemnt"
        linkName="GITHUB"
        path={coding}
      />
      <SpecialContainer
        head="DSA Solving/Problem Solving"
        details="I solve regularly solve questions on leetcode for better solving problems"
        linkName="LEETCODE"
        path={leetcode2}
      />
    </div>
  );
};

export default Specialization;
