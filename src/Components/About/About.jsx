import SectionInfo from "../lib/SectionInfo/SectionInfo";
import SectionHeading from "../lib/SectionHeading/SectionHeading";
import about from "../../assets/about.svg";
import "./About.css";

const About = ({ className }) => {
  const str = "Every great design begin with a even better story";
  return (
    <>
      <SectionInfo name="ABOUT" path={about} />
      <SectionHeading str={str} size={1.9} className={className} />
      <p className="about_line">
        Welcome to my portfolio! I'm a versatile developer proficient in MERN
        (MongoDB, Express, React, Node.js) stack, Java, and adept at Data
        Structures, Algorithms, and creative problem-solving. With a passion for
        building efficient and elegant solutions, I strive to create impactful
        web experiences. Let's collaborate and bring ideas to life!
      </p>
    </>
  );
};

export default About;
