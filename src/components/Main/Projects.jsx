import React, { useState } from "react";
import "./Project.css";

const projects = [
  {
    image: "./projects/digital-marketing-business-website/hero-section.gif",
    url: "",
    github: "",
    title: "Digital Marketing Business Website",
    description: "A business website for digital marketing solutions.",
    skills: ["React", "CSS", "JavaScript"],
    bg_color: "bg-purple-400",
  },
  {
    image: "./projects/cake-shop/hero-section.png",
    url: "",
    github: "",
    title: "Cake Shop",
    description: "An online shop for delicious cakes.",
    skills: ["HTML", "CSS", "JavaScript"],
    bg_color: "bg-pink-400",
  },
  {
    image: "./projects/game/hero-section.png",
    url: "",
    github: "",
    title: "Game Project",
    description: "An engaging game built with React.",
    skills: ["Unity", "C#", "JavaScript"],
    bg_color: "bg-blue-400",
  },
  {
    image: "./projects/Web-developement-website/hero-section.jpg",
    url: "",
    github: "",
    title: "Web Development Website",
    description: "A portfolio site showcasing web development skills.",
    skills: ["HTML", "CSS", "JavaScript"],
    bg_color: "bg-purple-200",
  },
  {
    image: "./projects/Real-estate/hero-section.png",
    url: "",
    github: "",
    title: "Real Estate Agency",
    description: "A real estate agency website to showcase properties.",
    skills: ["React", "Node.js", "MongoDB"],
    bg_color: "bg-white",
  },
  {
    image: "./projects/Automatic-medical-billing/hero-section.jpg",
    url: "",
    github: "",
    title: "Real Estate Agency",
    description: "A real estate agency website to showcase properties.",
    skills: ["React", "Node.js", "MongoDB"],
    bg_color: "bg-white",
  },
];

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <div id="project">
      <h2 className="text-right">Projects</h2>
      <div className="grid grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover:shadow-2xl duration-300 shadow-black rounded-md h-[350px] overflow-hidden relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={project.image}
              alt="project"
              className="w-full h-full object-cover"
            />
            {hoveredIndex === index && (
              <div
                className={`${project.bg_color} hover-panel rounded-md w-full h-full absolute bottom-0 bg-opacity-70 flex flex-col justify-center items-center text-center p-4`}
              ></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


// ${
//   index % 2 !== 0 ? "bg-red-400" : "bg-blue-400"
// } 