import React, { useState } from "react";
import "./Project.css";

const projects = [
  {
    image: "https://github.com/scar813710/Image-gallary/blob/master/portfolio/projects/digital-marketing-business-website/hero-section.gif?raw=true",
    url: "",
    github: "",
    title: "Digital Marketing Business Website",
    description: "A business website for digital marketing solutions.",
    skills: ["React", "CSS", "JavaScript"],
    bg_color: "bg-purple-400",
  },
  {
    image: "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Game/hero-section.webp",
    url: "",
    github: "",
    title: "Game Project",
    description: "An engaging game built with React.",
    skills: ["Unity", "C#", "JavaScript"],
    bg_color: "bg-blue-400",
  },
  {
    image: "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Web-developement-website/hero-section.webp",
    url: "",
    github: "",
    title: "Web Development Website",
    description: "A portfolio site showcasing web development skills.",
    skills: ["HTML", "CSS", "JavaScript"],
    bg_color: "bg-purple-800",
  },
  {
    image: "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/cake-shop/hero-section.webp",
    url: "",
    github: "",
    title: "Cake Shop",
    description: "An online shop for delicious cakes.",
    skills: ["HTML", "CSS", "JavaScript"],
    bg_color: "bg-pink-300",
  },
  {
    image: "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Real-estate/hero-section.webp",
    url: "",
    github: "",
    title: "Real Estate Agency",
    description: "A real estate agency website to showcase properties.",
    skills: ["React", "Node.js", "MongoDB"],
    bg_color: "bg-orange-800",
  },
  {
    image: "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Automatic-medical-billing/hero-section.webp",
    url: "",
    github: "",
    title: "Real Estate Agency",
    description: "A real estate agency website to showcase properties.",
    skills: ["React", "Node.js", "MongoDB"],
    bg_color: "bg-purple-400",
  },
  {
    image: "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/project-management-system/hero-section.webp",
    url: "",
    github: "",
    title: "Web Development Website",
    description: "A portfolio site showcasing web development skills.",
    skills: ["HTML", "CSS", "JavaScript"],
    bg_color: "bg-purple-400",
  },
  {
    image: "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Agency-website/hero-section.webp",
    url: "",
    github: "",
    title: "Web Development Website",
    description: "A portfolio site showcasing web development skills.",
    skills: ["HTML", "CSS", "JavaScript"],
    bg_color: "bg-red-800",
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
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="hover:shadow-2xl duration-300 shadow-black rounded-md overflow-hidden relative cursor-pointer"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={project.image}
              alt="project"
              className="w-full aspect-[8/5] object-cover"
            />
            {hoveredIndex === index && (
              <div
                className={`${project.bg_color} hover-panel rounded-md w-full h-full absolute bottom-0 bg-opacity-70 flex flex-col justify-center items-center text-center p-4`}
              >
                <button className="border p-2 rounded-full hover:bg-white hover:bg-opacity-55 duration-200">
                  {" "}
                  <img
                    src="./search-icon.svg"
                    width={25}
                    height={25}
                    alt="icon"
                  />
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
      <button className="mt-7 rounded-[10%] duration-300 p-4 border text-white bg-white bg-opacity-15 hover:bg-opacity-35">
        Read More
      </button>
    </div>
  );
};

export default Projects;

// ${
//   index % 2 !== 0 ? "bg-red-400" : "bg-blue-400"
// }
