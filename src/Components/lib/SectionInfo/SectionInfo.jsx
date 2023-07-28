import "./SectionInfo.css";

const SectionInfo = ({ path, name }) => {
  return (
    <div className="introduce_icon">
      <img src={path}></img>
      <span>{name}</span>
    </div>
  );
};

export default SectionInfo;
