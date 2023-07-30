import SideSection from "../Components/SideSection/SideSection";
import Introduce from "../Components/Introduce/Introduce";
import About from "../Components/About/About";
import Education from "../Components/Education/Education";
import Specialization from "../Components/Specialization/Specialization";
import Card from "../Components/lib/Card/Card";
import Skills from "../Components/Skills/Skills";

const Pages = () => {
  return (
    <>
      <SideSection />
      <Card>
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
          <About className="show" />
        </div>
        <div style={{ marginBottom: "8rem" }}>
          <About className="show" />
        </div>
      </Card>
    </>
  );
};

export default Pages;
