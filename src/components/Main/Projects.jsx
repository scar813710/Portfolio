import React from "react";

const project = [
  {
    image: "./projects/portfolio-buoyfi-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-covid-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-tango-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-virusgeeks-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-samsara-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-barber-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-beach-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-foobee-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-gas-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-inseller-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-ivp-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-kw-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-lion-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-luko-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-mused-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-network-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
  {
    image: "./projects/portfolio-offerup-1.jpg",
    url: "",
    github: "",
    title: "",
    description : "",
    skills : ["","","",]
  },
]

const Projects = () => {
  return (
    <div id="project">
      <h2 className="text-right">My Portfolio</h2>
      <div className="grid grid-cols-2 gap-8">
        {project.map((project, index) => (
          <div key={index} className="hover:shadow-2xl duration-300 shadow-black rounded-md hover:transform hover:">
            <img src={project.image} alt="project" className=""/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
