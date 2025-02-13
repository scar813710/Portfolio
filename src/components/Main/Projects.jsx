import React, { useState, useEffect } from "react";
import "./Project.css";
import Loader from "../Common/Loader"; // Assuming you have this Loader component
import Modal from "../Common/Modal";

const projects = [
  {
    image:
      "https://github.com/scar813710/Image-gallary/blob/master/portfolio/projects/digital-marketing-business-website/hero-section.gif?raw=true",
    url: "",
    github: "",
    title: "Digital Marketing Business Website",
    description: "A business website for digital marketing solutions.",
    skills: ["Angular", "CSS", "JavaScript"],
    bg_color: "bg-purple-400",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Game/hero-section.webp",
    url: "",
    github: "",
    title: "Game Project",
    description: "An engaging game built with React.",
    skills: ["Unity", "C#", "JavaScript"],
    bg_color: "bg-blue-400",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Web-developement-website/hero-section.webp",
    url: "",
    github: "",
    title: "Web Development Website",
    description: "A portfolio site showcasing web development skills.",
    skills: ["HTML", "CSS", "JavaScript", "Angular"],
    bg_color: "bg-purple-800",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/cake-shop/hero-section.webp",
    url: "",
    github: "",
    title: "Cake Shop",
    description: "An online shop for delicious cakes.",
    skills: ["HTML", "CSS", "JavaScript"],
    bg_color: "bg-pink-300",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Real-estate/hero-section.webp",
    url: "",
    github: "",
    title: "Real Estate Agency",
    description: "A real estate agency website to showcase properties.",
    skills: ["React", "Node.js", "MongoDB"],
    bg_color: "bg-orange-800",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Automatic-medical-billing/hero-section.webp",
    url: "",
    github: "",
    title: "Automatic Medical Billing",
    description: "An application for medical billing management.",
    skills: ["React", "Node.js", "MongoDB"],
    bg_color: "bg-purple-400",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/project-management-system/hero-section.webp",
    url: "",
    github: "",
    title: "Project Management System",
    description: "An application for managing projects effectively.",
    skills: ["Angular", "CSS", "JavaScript"],
    bg_color: "bg-purple-400",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Agency-website/hero-section.webp",
    url: "",
    github: "",
    title: "Agency Website",
    description: "A website for showcasing agency services.",
    skills: ["HTML", "CSS", "JavaScript"],
    bg_color: "bg-red-800",
  },
];

const Projects = () => {
  const [numberOfProjects, setNumberOfProjects] = useState(8);
  const [loading, setLoading] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleReadMoreClick = () => {
    if (numberOfProjects < projects.length) {
      setLoading(true);
      setTimeout(() => {
        setNumberOfProjects((prev) => Math.min(prev + 4, projects.length));
        setLoading(false);
      }, 2000);
    }
  };

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="project">
      <h2 className="text-right">Projects</h2>
      <div className="grid lg:grid-cols-2 gap-8">
        {projects.slice(0, numberOfProjects).map((project, index) => (
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
                <button
                  className="border p-2 rounded-full hover:bg-white hover:bg-opacity-55 duration-200"
                  onClick={() => openModal(project)}
                >
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
      {numberOfProjects < projects.length ? (
        <button
          className="mt-7 rounded-[10%] duration-300 p-4 border text-white bg-white bg-opacity-15 hover:bg-opacity-35"
          onClick={handleReadMoreClick}
          disabled={loading}
        >
          {loading ? <Loader /> : "Read More"}
        </button>
      ) : (
        ""
      )}
      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        project={selectedProject}
      />
    </div>
  );
};

export default Projects;
