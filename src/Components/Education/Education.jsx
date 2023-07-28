import "./Education.css";
import SectionInfo from "../lib/SectionInfo/SectionInfo";
import SectionHeading from "../lib/SectionHeading/SectionHeading";
import SectionParagraph from "../lib/SectionParagraph/SectionParagraph";
import education from "../../assets/education.svg";
import TimelineDetail from "../lib/TimelineDetail/TimelineDetail";

const Education = () => {
  return (
    <>
      <SectionInfo name="EDUCATION" path={education} />
      <SectionHeading str="Education & Experience" size={1.8} />
      <div className="timeline_cont">
        <div className="timeline"></div>
        <div className="timeline_details_cont">
          <TimelineDetail
            year="present"
            degree="Bachelor Degree of Information technology"
            institute="MIT ADT PUNE,MAHARSHTRA"
            activeC="activeC"
            activeB="activeB"
          />
          <TimelineDetail
            year="2017 - 2019"
            degree="12th Grade"
            institute="Navambay higher Sec. School, JBP"
          />
          <TimelineDetail
            year="2007 - 2017"
            degree="10th grade"
            institute="St. Aloysius Sr. Sec. School, JBP"
          />
        </div>
      </div>
    </>
  );
};

export default Education;
