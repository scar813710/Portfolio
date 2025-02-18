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
    description: [
      "Developed a digital marketing business website using Node.js for the backend and React.js and tailwind css for the frontend, ensuring a responsive and user-friendly experiences.",
      "This project involved creating a dynamic content management system to facilitate easy updates and content management.",
      "Key features include a blog, portfolio showcase, contact form, and SEO optimization.",
    ],
    skills: ["React", "Django", "Chart.js", "Tailwind CSS"],
    bg_color: "bg-purple-400",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Game/hero-section.webp",
    url: "",
    github: "",
    title: "Game Project",
    description: [
      "Successfully spearheaded development of a complex game project, leveraging proficiency in Unity, C#, and JavaScript.",
      "butions resulted in a polished and engaging final product, demonstrating strong technical skills and project management capabilities. ",
      "Game's positive reception is a testament to dedication and collaborative spirit throughout the development process.",
    ],
    skills: ["Unity", "C#", "JavaScript"],
    bg_color: "bg-blue-400",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Web-developement-website/hero-section.webp",
    url: "",
    github: "",
    title: "Web Development Website",
    description: [
      "Developed a high-performance web development website utilizing ReactJS, Python, and GraphQL for efficient data management and retrieval.",
      "Successfully integrated the website with AWS, ensuring reliable hosting, scalability, and seamless user experience. ",
      "The project showcased expertise in full-stack development, cloud infrastructure, and modern web technologies.",
    ],
    skills: ["ReactJS", "Python", "GraphQL", "AWS"],
    bg_color: "bg-purple-800",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/cake-shop/hero-section.webp",
    url: "",
    github: "",
    title: "Cake Shop",
    description: [
      "Engineered a dynamic online cake shop using ReactJS, NextJS, and a RESTful API for a seamless user experience and efficient data handling. ",
      "Deployed the application on Google Cloud Platform (GCP) with Docker, ensuring scalability, containerization, and robust performance. ",
      "This project demonstrates proficiency in modern front-end and back-end technologies, cloud deployment, and agile development practices.",
    ],
    skills: ["NextJS", "Restful API", "GCP", "Docker"],
    bg_color: "bg-pink-300",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Real-estate/hero-section.webp",
    url: "",
    github: "",
    title: "Real Estate Agency",
    description: [
      "Designed and developed a comprehensive Real Estate Agency website utilizing AngularJS and .NET for a robust and scalable user interface, paired with a powerful PostgreSQL database for secure data storage.",
      "Successfully integrated the application with Azure for efficient cloud hosting and Mapbox for geolocation-based property visualization, enhancing user experience and engagement",
      "This project showcases expertise in full-stack development, database management, cloud computing, and mapping technologies.",
    ],
    skills: ["AngularJS", ".NET", "PostgreSQL", "Azure", "Mapbox"],
    bg_color: "bg-orange-800",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Automatic-medical-billing/hero-section.webp",
    url: "",
    github: "",
    title: "Automatic Medical Billing",
    description: [
      "Built an automated medical billing system using React.js for a responsive front-end and Golang with the Gin framework for a high-performance backend API. ",
      "Integrated the application with Firebase for authentication and real-time data synchronization, alongside a PostgreSQL database for secure and reliable data storage. ",
      "This project demonstrates proficiency in full-stack development, utilizing modern technologies for a scalable and efficient medical billing solution.",
    ],
    skills: ["React.js", "Golang", "Gin", "Firebase", "PostgreSQL"],
    bg_color: "bg-purple-400",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/project-management-system/hero-section.webp",
    url: "",
    github: "",
    title: "Project Management System",
    description: [
      "Spearheaded the development of a comprehensive Project Management System leveraging Laravel for the backend, MySQL for robust data management, and Docker for streamlined deployment and environment consistency.",
      "Successfully deployed the application on Google Cloud Platform (GCP), ensuring scalability, high availability, and efficient resource utilization.",
      "This project showcases expertise in full-stack web development, containerization, and cloud infrastructure management.",
    ],
    skills: ["Laravel", "MySQL", "Docker", "GCP"],
    bg_color: "bg-purple-400",
  },
  {
    image:
      "https://raw.githubusercontent.com/scar813710/Image-gallary/refs/heads/master/portfolio/projects/Agency-website/hero-section.webp",
    url: "",
    github: "",
    title: "Digital Marketing Website",
    description: ["", "", ""],
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
