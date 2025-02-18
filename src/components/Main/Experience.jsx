import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Flatworld Solutions",
    role: "Senior Full-Stack Developer",
    duration: "Mar 2020 - Present",
    location: "Princeton, United State",
    description: [
      "Developed and maintained multiple web applications, ensuring high performance, scalability, and reliability.",
      "Optimized application performance for speed and efficiency, resulting in improved user engagement and conversion rates.",
      "Implemented state management libraries to manage application data and user interactions, improving overall application stability.",
      "Participated in code reviews to ensure code quality and share knowledge with team members, promoting a culture of continuous learning and improvement.",
      "Debugged and troubleshot issues across the entire application stack, resolving complex technical problems and improving overall system reliability.",
    ],
  },
  {
    company: "DevCrew I/O",
    role: "Full Stack Developer",
    duration: "Apr 2019 - Jan 2020",
    location: "Singapore, Singapore",
    description: [
      "Rapidly prototyped and delivered working solutions within short deadlines, demonstrating agility and adaptability in a fast-paced environment.",
      "Contributed to smaller projects or specific components of larger projects, honing skills in focused areas of web development.",
      "Quickly learned and adapted to new technologies or project requirements, displaying a strong ability to absorb and apply new information.",
      "Implemented authentication and authorization mechanisms to secure web applications, ensuring the protection of sensitive user data.",
      "Deployed and managed applications on cloud platforms, ensuring high availability and scalability.",
      "Worked with message queues for asynchronous task processing, improving application performance and responsiveness.",
    ],
  },
  {
    company: "Appnovation Technologies",
    role: "Full Stack Developer",
    duration: "Apr 2016 - Feb 2019",
    location: "Hong Kong, Hong Kong",
    description: [
      "Contributed to large-scale web applications, working on complex projects that required collaboration and coordination with multiple teams.",
      "Worked with Content Management Systems (CMS) such as Drupal, gaining experience with enterprise-level content management.",
      "Participated in agile development methodologies, collaborating in a team environment and adapting to changing project requirements.",
      "Collaborated with designers to implement responsive design principles, ensuring a consistent user experience across devices and screen sizes.",
      "Troubleshot and resolved complex technical issues, improving overall system reliability and stability.",
    ],
  },
  {
    company: "South Road West",
    role: "Frontend Developer",
    duration: "Feb 2014 - Dec 2018",
    location: "Hong Kong, Hong Kong",
    description: [
      "Contributed to small-scale web applications, gaining experience with website development and maintenance.",
      "Maintained and troubleshot existing web applications, ensuring high availability and resolving technical issues quickly.",
      "Implemented basic security measures to protect against common web vulnerabilities, ensuring the security and integrity of user data.",
      "Worked with version control systems to manage code changes and collaborate with team members, promoting a culture of transparency and accountability.",
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
