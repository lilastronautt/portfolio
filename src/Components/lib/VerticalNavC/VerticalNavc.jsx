import "./VerticalNavC.css";

const VerticalNavC = ({ path, name, id }) => {
  const navClickHandler = () => {
    const section = document.getElementById(id);
    section?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="nav_icon_cont" onClick={navClickHandler}>
      <img  src={path}/>
      <div className="nav_icon_info">{name}</div>
    </div>
  );
};

export default VerticalNavC;
