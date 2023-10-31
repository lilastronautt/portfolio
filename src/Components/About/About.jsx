import SectionInfo from "../lib/SectionInfo/SectionInfo";
import SectionHeading from "../lib/SectionHeading/SectionHeading";
import about from "../../assets/about.svg";
import "./About.css";
import SectionParagraph from "../lib/SectionParagraph/SectionParagraph";

const About = ({ className }) => {
  const str = "Every great development begin with a even better story";
  return (
    <div id="about">
      <SectionInfo name="ABOUT" path={about} />
      <SectionHeading str={str} size={1.9} className={className} />
      <SectionParagraph
        text="Welcome to my portfolio! I'm a versatile developer proficient in MERN
        (MongoDB, Express, React, Node.js) stack, Java and adept at Data
        Structures, Algorithms, and creative problem-solving. With a passion for
        building efficient and elegant solutions, I strive to create impactful
        web experiences. Let's collaborate and bring ideas to life!"
      />
    </div>
  );
};

export default About;
