import "./ProjectsSection.css";
import SectionHeading from "../lib/SectionHeading/SectionHeading";
import SectionInfo from "../lib/SectionInfo/SectionInfo";
import projects from "../../assets/projects.svg";
import github from "../../assets/github.png";
import ProjectContainer from "../lib/ProjectContainer/ProjectContainer";
import todo from "../../assets/todo.png";
import notes from "../../assets/notes.png";
import chat from "../../assets/chat.png";
import hostel from "../../assets/hostel.png";
import blog from "../../assets/blog.png";

const ProjectsSection = () => {
  return (
    <div id="projects">
      <SectionInfo name="PORTFOLIO" path={projects} />
      <SectionHeading str={"Featured Projects"} size={1.8} />
      <div className="projects_cont">
        <ProjectContainer
          path={blog}
          github={github}
          str="React.js CSS HTML SQL Express.js AWS"
          githubLink="https://github.com/lilastronautt/Blog"
          white="white"
        />
        <ProjectContainer
          path={todo}
          github={github}
          str="React.js CSS HTML"
          githubLink="https://github.com/lilastronautt/todoApp"
        />
        <ProjectContainer
          path={notes}
          github={github}
          str="React.js CSS HTML react-quill"
          githubLink="https://github.com/lilastronautt/NotesApp"
        />
        <ProjectContainer
          path={chat}
          github={github}
          str="React.js CSS HTML socket.io Express.js"
          githubLink="https://github.com/lilastronautt/ChatApp"
        />
        <ProjectContainer
          path={hostel}
          github={github}
          str="React.js CSS Express.js Node.js MongoDb"
          githubLink=""
          white="white"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
