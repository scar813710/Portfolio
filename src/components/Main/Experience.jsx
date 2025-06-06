import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Flatworld Solutions",
    role: "Senior Full-Stack Developer",
    duration: "Mar 2020 - Present",
    location: "Princeton, United State",
    description: [
      "Designed and developed scalable web applications using React, Vue, and Angular on the frontend, and Django, FastAPI, Node.js, and Golang on the backend.",
      "Led migration of monolithic architecture to microservices using Golang and Spring Boot, improving maintainability.",
      "Delivered several AI products using LLM, RAG, Langchain, Pinecone, NLP, and DeepAI, streamlining deployment cycles.",
      "Built RESTful and GraphQL APIs for enterprise-level applications, enabling seamless communication across services.",
      "Integrated cloud infrastructure (AWS, Azure, GCP) to support scalable, secure deployments and optimized CI/CD pipelines using GitHub Actions and Terraform.",
      "Managed data models using SQL (PostgreSQL, MySQL) and NoSQL (MongoDB, Firebase), implementing performance optimizations and security protocols.",
      "Developed Shopify-based e-commerce platforms with Stripe integration and headless CMS.",
      "Built and deployed Docker/Kubernetes solutions for container orchestration, enhancing scalability and availability.",
      "Automated testing and E2E testing suites using Selenium, Cypress, and Jest.",
      "Mentored junior developers and contributed to improving team productivity and engineering culture.",
    ],
  },
  {
    company: "DevCrew I/O",
    role: "Full Stack Developer",
    duration: "Apr 2019 - Jan 2020",
    location: "Singapore, Singapore",
    description: [
      "Developed full stack features using React, Express, and Firebase for mobile-first and web applications.",
      "Built and maintained RESTful APIs and serverless functions deployed on GCP.",
      "Implemented authentication and authorization layers using Firebase Auth and OAuth providers.",
      "Enhanced UX/UI in collaboration with designers using Tailwind CSS and Material UI.",
      "Wrote unit and integration tests with Mocha and Chai to ensure reliability and maintainability."
    ],
  },
  {
    company: "Appnovation Technologies",
    role: "Full Stack Developer",
    duration: "Apr 2016 - Feb 2019",
    location: "Hong Kong, Hong Kong",
    description: [
      "Delivered robust backend systems with Django, Ruby on Rails, and Spring Boot across healthcare and finance sectors.",
      "Developed SPAs using Angular and React, ensuring performance and accessibility compliance. Integrated third-party APIs and managed secure data pipelines across distributed systems.",
      "Led backend optimization initiatives, reducing query response time and improving database indexing strategies.",
      "Participated in regular sprint planning, retrospectives, and pair programming sessions."
    ],
  },
  {
    company: "WestRoadSouth Limited",
    role: "Frontend Developer",
    duration: "Feb 2014 - Mar 2016",
    location: "Hong Kong, Hong Kong SAR",
    description: [
      "Assisted in frontend development using HTML, CSS, and JavaScript, contributing to ecommerce and CMS projects.",
      "Ensured responsive design and cross-browser compatibility across all devices.",
      "Collaborated on debugging and resolving issues under mentorship from senior engineers.",
      "Applied best practices in code readability, version control, and component reusability.",
      "Participated in client meetings to gather requirements and refine UI/UX interactions."
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
      <h2 className="">Experience & Education</h2>
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
                }  border-white border rounded-md hover:bg-white hover:dark:bg-black hover:dark:bg-opacity-40 hover:bg-opacity-30 duration-300 lg:w-[45%] `}
              >
                <h3 className="font-bold text-[#ff7979] text-left text-[24px]">
                  {experience.company}
                </h3>
                <p className="text-sm italic text-[#c4c4c4cb] text-left">
                  {experience.duration}
                </p>
                <p className="text-[14px] italic text-[#c4c4c4cb] text-left my-2">
                  {experience.location}
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
