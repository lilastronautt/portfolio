import SideSection from "../Components/SideSection/SideSection";
import Introduce from "../Components/Introduce/Introduce";
import About from "../Components/About/About";
import Card from "../Components/lib/Card/Card";

const Pages = () => {
  return (
    <>
      <SideSection />
      <Card>
        <div style={{ marginBottom: "8rem" }} className="showAni">
          <Introduce />
        </div>
        <div style={{ marginBottom: "8rem" }} className="showAni">
          <About className="show" />
        </div>
        <div style={{ marginBottom: "8rem" }} className="showAni">
          <About className="show" />
        </div>
        <div style={{ marginBottom: "8rem" }} className="showAni">
          <About className="show" />
        </div>
        <div style={{ marginBottom: "8rem" }} className="showAni">
          <About className="show" />
        </div>
        <div style={{ marginBottom: "8rem" }} className="showAni">
          <About className="show" />
        </div>
        <div style={{ marginBottom: "8rem" }} className="showAni">
          <About className="show" />
        </div>
      </Card>
    </>
  );
};

export default Pages;
