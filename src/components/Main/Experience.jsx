import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "DevCrew I/O",
    role: "Senior Full-Stack Developer",
    duration: "Jun 2022 - Present",
    description: [
      "Developed responsive user interfaces using React.js, Vue.js, and Angular.js, ensuring an optimal user experience.",
      "Implemented server-side rendering with Next.js and Nuxt.js, improving SEO and application performance by over 30%",
      "Built high-performing static websites with Gatsby.js and developed interactive applications using Svelte.js, resulting in a 25% increase in user engagement.",
      "Designed and created RESTful APIs and microservices architectures utilizing Node.js and Express.js for robust backend solutions, reducing server response times by 40%.",
      "Led code reviews and mentored junior developers, fostering a culture of knowledge sharing and collaborative problem-solving within the team.",
    ],
  },
  {
    company: "DOOD",
    role: "Full Stack Developer",
    duration: "Jan 2019 - Apr 2022",
    description: [
      "Assisted in the creation of modern web applications with React.js and Vue.js, participating in the full development lifecycle from concept to deployment.",
      "Supported the backend team by integrating RESTful APIs and writing server-side code in Node.js, enabling dynamic data interactions between the user interface and server.",
      "Gained practical experience with database management using MongoDB and MySQL, assisting in data modeling and queries that improved application performance.",
      "Cooperated with senior developers during code reviews, which fostered an environment of learning and skill enhancement, ultimately leading to enhanced code quality.",
      "Developed and maintained documentation for front-end components and APIs, ensuring clarity for team members and future developers.",
    ],
  },
  {
    company: "West Road South",
    role: "Frontend Developer",
    duration: "Feb 2014 - Dec 2018",
    description: [
      "Utilized HTML, CSS, and JavaScript to build responsive and pixel-perfect layouts, ensuring compatibility across various devices and browsers.",
      "Employed Bootstrap and Material UI for rapid development of user-friendly and accessible components, reducing development time by 35%.",
      "Developed dynamic and interactive web applications using React.js and Vue.js, resulting in a 40% increase in user engagement and interaction rates.",
      "Integrated Tailwind CSS for utility-first styling, improving development efficiency and enabling rapid prototyping for client projects.",
      "United with backend developers to implement APIs, ensuring seamless data flow between front-end and back-end systems, which refined overall application functionality.",
    ],
  },
  {
    company: "Jiangnan University",
    role: "Bachelor's in Computer Science ",
    duration: "Apr 2009 - Oct 2013",
    description: [
 
    ],
  },
];

const Experience = () => {
  return (
    <div className="my-10 mx-auto pb-6 " id="experience">
      <h2 className="ml-0">Experience & Education</h2>
      <div className="relative">
        <div className="timeline w-[2px] absolute left-[50%] h-full"></div>
        <div className="mx-auto flex flex-col items-center mt-32 ">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`${
                index !== 0 && "-mt-[150px]"
              } mb-6 w-[90%] pt-5 relative experience-card ${index % 2 == 0 && ""}`}
            >
              <div
                className={`relative text-black p-6 ${
                  index % 2 !== 1 ? "content-left" : "content-right ml-[55%] "
                }  border-white border rounded-md hover:bg-white hover:bg-opacity-30 duration-300 w-[45%] `}
              >
                <h3 className="font-bold text-[#ff7979] text-left text-[24px]">
                  {experience.company}
                </h3>
                <p className="text-sm italic text-[#c4c4c4cb] text-left">
                  {experience.duration}
                </p>
                <p className="text-white text-left py-5 text-[20px] border-[#ffffff81] border-b">{experience.role}</p>
                <ul className="text-white text-left list-disc mt-4 ml-4">
                  {experience.description.map((desc, index) => (
                    <li>{desc}</li>
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
