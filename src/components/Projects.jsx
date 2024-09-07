import { projectsData } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import card7 from "../assets/benefits/card-1.svg";
import { projectsNav } from "../constants";
import ProjectsCard from "./design/ProjectsCard";
import { useEffect, useState } from "react";
import "./styles.css";

// const Projects = () => {
//   const [item, setItem] = useState({ name: "ALL" });
//   const [projects, setProjects] = useState([]);
//   const [active, setActive] = useState(0);

//   useEffect(() => {
//     if (item.name === "ALL") {
//       setProjects(projectsData);
//     } else {
//       const newProjects = projectsData.filter((project) => {
//         return project.category === item.name;
//       });
//       setProjects(newProjects);
//     }
//   }, [item]);

//   const handleClick = (e, index) => {
//     setItem({ name: e.target.textContent });
//     setActive(index);
//   };

//   return (
//     <Section id="projects" crosses>
//       <div className="flex flex-col items-center overflow-hidden max-sm:border-y max-sm:border-dashed max-sm:py-12">
//         <div className="text-5xl max-sm:text-3xl mb-8">Projects I've Worked On.</div>
//         <div className={`mb-4 max-sm:mb-8 `}>
//           {projectsNav.map((item, index) => (
//             <span
//               onClick={(e) => {
//                 handleClick(e, index);
//               }}
//               className={`${active === index ? "active-project" : ""} px-4 mr-1 ml-1 border rounded-md hover:cursor-pointer max-sm:px-1 max-sm:text-wrap`}
//               key={index}
//             >
//               {item.name}
//             </span>
//           ))}
//         </div>

//         <div
//           // style={{ gridTemplateColumns: "repeat(3, max-content)" }}
//           className="w-[90%] grid gap-[2rem] justify-center custom-grid"
//         >
//           {projects.map((item, index) => (
//             <ProjectsCard item={item} key={item.id} />
//           ))}
//         </div>
//       </div>
//     </Section>
//   );
// };

// export default Projects;

const Projects = () => {
  const [item, setItem] = useState({ name: "ALL" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);
  const [fade, setFade] = useState(false); // State for triggering fade animation

  useEffect(() => {
    setFade(true); // Trigger fade-out
    const timeout = setTimeout(() => {
      if (item.name === "ALL") {
        setProjects(projectsData);
      } else {
        const newProjects = projectsData.filter((project) => {
          return project.category === item.name;
        });
        setProjects(newProjects);
      }
      setFade(false); // Trigger fade-in after content change
    }, 200); // Set timeout to delay the project update

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <Section id="projects" crosses>
      <div className="flex flex-col items-center overflow-hidden max-sm:border-y max-sm:border-dashed max-sm:py-12">
        <div className="text-5xl max-sm:text-3xl mb-8">Projects I've Worked On.</div>

        <div className="mb-4 max-sm:mb-8">
          {projectsNav.map((item, index) => (
            <span
              onClick={(e) => handleClick(e, index)}
              className={`${
                active === index ? "active-project" : ""
              } px-4 mr-1 ml-1 border rounded-md hover:cursor-pointer max-sm:px-1 max-sm:text-wrap`}
              key={index}
            >
              {item.name}
            </span>
          ))}
        </div>

        {/* Projects Container with fade animation */}
        <div
          className={`w-[90%] grid gap-[2rem] justify-center custom-grid transition-opacity duration-300 ${
            fade ? "opacity-0" : "opacity-100"
          }`}
        >
          {projects.map((item) => (
            <ProjectsCard item={item} key={item.id} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Projects;
