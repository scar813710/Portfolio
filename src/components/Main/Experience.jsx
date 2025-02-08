import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "DevCrew I/O",
    role: "Senior Full-Stack Developer",
    duration: "Jun 2022 - Present",
    description: [
      "Developed a high-performance ERP system using React.js and Golang (Gin) , enabling businesses to automate workflows, manage inventory, and track financials, increasing operational efficiency by 40%",
      "Led the migration of a monolithic PHP (Laravel) system to a microservices-based Golang architecture, improving scalability and reducing system downtime by 50%",
      "Built a real-time order tracking system for a logistics company using FastAPI, WebSockets, and Redis, allowing customers to monitor shipments with sub-second latency",
    ],
  },
  {
    company: "DOOD",
    role: "Full Stack Developer",
    duration: "Jan 2019 - Apr 2022",
    description: [
      "Designed and developed a Learning Management System (LMS) using Django and React.js, automating course enrollment, progress tracking, and certification issuance, increasing student engagement by 30%",
      "Created a financial dashboard for a fintech startup using Golang (Echo) and Vue.js, allowing users to track transactions, analyze spending trends, and receive AI-powered financial recommendations",
      "Developed a multi-vendor e-commerce platform using Node.js (Nest.js) and PostgreSQL, enabling third-party sellers to list products, process orders, and manage inventory seamlessly",
    ],
  },
  {
    company: "West Road South",
    role: "Frontend Developer",
    duration: "Feb 2014 - Dec 2018",
    description: [
      "Utilized HTML, CSS, and JavaScript to build responsive and pixel-perfect layouts, ensuring compatibility across various devices and browsers.",
      "Employed Bootstrap and Material UI for rapid development of user-friendly and accessible components, reducing development time by 35%.",
      "Converted PSDs to HTML for back-end developers to implement using the CMS",
      "Developed dynamic and interactive web applications using React.js and Vue.js, resulting in a 40% increase in user engagement and interaction rates.",
    ],
  },
  {
    company: "Jiangnan University",
    role: "Bachelor's in Computer Science ",
    duration: "Apr 2009 - Oct 2013",
    description: [],
  },
];

const Experience = () => {
  return (
    <div className="my-10 mx-auto pb-6 " id="experience">
      <h2 className="ml-0">Experience & Education</h2>
      <div className="relative">
        <div className="timeline w-[2px] absolute lg:left-[50%] left-0 h-full"></div>
        <div className="mx-auto flex flex-col items-center mt-15 ">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={` ${
                index !== 0 && "lg:-mt-[150px]"
              } mb-6 w-[90%] pt-5 relative experience-card lg:after:left-[50%] lg:before:left-[50%] after:-left-[5.5%] before:-left-[5.5%]`}
            >
              <div
                className={` relative text-black p-6 ${
                  index % 2 !== 1
                    ? "content-left"
                    : "content-right lg:ml-[55%] "
                }  border-white border rounded-md hover:bg-white hover:bg-opacity-30 duration-300 lg:w-[45%] `}
              >
                <h3 className="font-bold text-[#ff7979] text-left text-[24px]">
                  {experience.company}
                </h3>
                <p className="text-sm italic text-[#c4c4c4cb] text-left">
                  {experience.duration}
                </p>
                <p className="text-white text-left py-5 text-[20px] border-[#ffffff81] border-b">
                  {experience.role}
                </p>
                <ul className="text-white text-left list-disc mt-4 ml-4 hidden esm:block">
                  {experience.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
