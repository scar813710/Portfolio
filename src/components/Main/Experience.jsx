import React from "react";
import "./Experience.css";

const experiences = [
  {
    company: "Tech Company A",
    role: "Software Engineer",
    duration: "Jan 2015 - Dec 2018",
    description:
      "Developed and maintained scalable web applications using Node.js and React.js, improving application performance by 30%.",
  },
  {
    company: "Creative Solutions B",
    role: "Full Stack Developer",
    duration: "Jan 2019 - Present",
    description:
      "Collaborated with cross-functional teams to design and implement new features, enhancing user experience and functionality.",
  },
  {
    company: "Creative Solutions B",
    role: "Full Stack Developer",
    duration: "Jan 2019 - Present",
    description:
      "Collaborated with cross-functional teams to design and implement new features, enhancing user experience and functionality.",
  },
];

const Experience = () => {
  return (
    <div className="my-10 mx-auto pb-6 " id="experience">
      <h2 className="ml-0">Experience</h2>
      <div className="relative">
        <div className="border-l-2 border-white absolute left-[50%] h-full -top-9"></div>
        <div className="mx-auto flex flex-col items-center mt-32 ">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`mb-6 w-[90%] relative experience-card ${
                index % 2 == 0 ? `before:left-[46%]` : `before:left-[54%]`
              }`}
            >
              <div
                className={`text-black p-6 ${
                  index % 2 == 0 ? `ml-10` : `mr-6`
                } mx-auto border-white border rounded-md hover:bg-white hover:bg-opacity-30 duration-300 w-[40%] `}
              >
                <h3 className="font-bold text-white">{experience.role}</h3>
                <p className="text-white">{experience.company}</p>
                <p className="text-sm italic text-white">
                  {experience.duration}
                </p>
                <p className="text-white">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
