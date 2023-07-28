import "./SideSection.css";
import amaan from "../../assets/amaan.jpeg";
import github from "../../assets/github.png";
import leetcode from "../../assets/leetcode.svg";
import linkedin from "../../assets/linkedin.png";
import twitter from "../../assets/twitter.png";

const SideSection = () => {
  return (
    <div className="sidesec_cont">
      <div className="sidesec_heading">
        <h2>Amaan</h2>
        <p>Self Taught Devolper</p>
      </div>
      <div className="sidesec_img__cont">
        <img src={amaan}></img>
      </div>
      <p className="sidesec_details">amaanmitadt@gmail.com</p>
      <p className="sidesec_details">Base in Pune, Maharashtra</p>
      <div className="sidesec_icon__cont">
        <div>
          <img src={twitter}></img>
        </div>
        <div>
          <img src={linkedin}></img>
        </div>
        <div>
          <img src={github}></img>
        </div>
        <div>
          <img src={leetcode}></img>
        </div>
      </div>
      <button>Resume</button>
    </div>
  );
};

export default SideSection;
