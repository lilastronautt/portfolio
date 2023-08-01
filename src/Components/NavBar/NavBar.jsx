import "./NavBar.css";
import home from "../../assets/home.svg";
import about from "../../assets/about.svg";
import education from "../../assets/education.svg";
import services from "../../assets/services.svg";
import contact from "../../assets/contact.svg";
import skills from "../../assets/skills.svg";
import projects from "../../assets/projects.svg";
import VerticalNavC from "../lib/VerticalNavC/VerticalNavc";
import React from "react";

const NavBar = () => {
  return (
    <>
      <div className="nav_icons_cont">
        <VerticalNavC path={home} name="Home" id="introduce" />
        <VerticalNavC path={about} name="About" id="about" />
        <VerticalNavC path={education} name="Education" id="education" />
        <VerticalNavC
          path={services}
          name="Specialization"
          id="specialization"
        />
        <VerticalNavC path={skills} name="Skilss" id="skills" />
        <VerticalNavC path={projects} name="project" id="projects" />
        <VerticalNavC path={contact} name="Contact" id="contact" />
      </div>
    </>
  );
};
export default NavBar;
