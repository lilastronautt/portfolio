import "./ProjectContainer.css";
import { useEffect } from "react";

const ProjectContainer = ({ str, path, github, githubLink, white }) => {
  let spans = str.split(" ").map((el, i) => {
    return (
      <span className={"project_tag " + white} key={i}>
        {el}
      </span>
    );
  });
  useEffect(() => {
    const divs = document.querySelectorAll(".project_cont");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) =>
        entry.target.classList.toggle("show", entry.isIntersecting)
      );
    });
    divs.forEach((el) => observer.observe(el));
  }, []);

  const onclickProjectH = () => {
    console.log("run");
    window.open(githubLink, "_blank");
  };
  return (
    <div className="project_cont">
      <img className="project_back__img" src={path} />
      <div className="project_gh__icon" onClick={onclickProjectH}>
        <img src={github} />
      </div>
      <div className="project_tags_cont">{spans}</div>
    </div>
  );
};

export default ProjectContainer;
