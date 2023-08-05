import SideSection from "../Components/SideSection/SideSection";
import Introduce from "../Components/Introduce/Introduce";
import About from "../Components/About/About";
import Education from "../Components/Education/Education";
import Specialization from "../Components/Specialization/Specialization";
import Card from "../Components/lib/Card/Card";
import Skills from "../Components/Skills/Skills";
import Contact from "../Components/Contact/Contact";
import NavBar from "../Components/NavBar/NavBar";
import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";
import "./MainPages.css";

const Pages = () => {
  return (
    <>
      <SideSection />
      <Card>
        <div className="sidenav_cont">
          <NavBar />
        </div>
        <div style={{ marginBottom: "8rem" }}>
          <Introduce />
        </div>
        <div style={{ marginBottom: "8rem" }}>
          <About />
        </div>
        <div style={{ marginBottom: "8rem" }}>
          <Education />
        </div>
        <div style={{ marginBottom: "8rem" }}>
          <Specialization />
        </div>
        <div style={{ marginBottom: "8rem" }}>
          <Skills />
        </div>
        <div style={{ marginBottom: "8rem" }}>
          <ProjectsSection />
        </div>
        <div style={{ marginBottom: "8rem" }}>
          <Contact />
        </div>
      </Card>
    </>
  );
};

export default Pages;
