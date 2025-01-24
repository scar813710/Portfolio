import React from "react";
const skills = [
  {
    name: "React",
    image: "./skills/React-Dark.3c7899b7.svg",
  },
  {
    name: "Next.js",
    image: "./skills/NextJS-Dark.bbf87d86.svg",
  },
  {
    name: "Vue.js",
    image: "./skills/vue-svgrepo-com.svg",
  },
  {
    name: "Node.js",
    image: "./skills/nodejs-icon-logo-svgrepo-com.svg",
  },
  {
    name: "Svelt.js",
    image: "./skills/svelte-icon-svgrepo-com.svg",
  },
  {
    name: "Gatsby.js",
    image: "./skills/gatsby-svgrepo-com.svg",
  },
  {
    name: "Tailwind.css",
    image: "./skills/TailwindCSS-Dark.b2dbe1dd.svg",
  },
  {
    name: "Postman",
    image: "./skills/Postman.40a11f8b.svg",
  },
  {
    name: "HTML",
    image: "./skills/HTML.4149c6c4.svg",
  },
  {
    name: "CSS",
    image: "./skills/CSS.c17017a6.svg",
  },
  {
    name: "Figma",
    image: "./skills/Figma-Dark.084e0600.svg",
  },
  {
    name: "MongoDB",
    image: "./skills/MongoDB.1eefe643.svg",
  },
  {
    name: "Material UI",
    image: "./skills/MaterialUI-Dark.277e057b.svg",
  },
  {
    name: "Git",
    image: "./skills/Git.3ae46782.svg",
  },
  {
    name: "Github",
    image: "./skills/Github-Dark.104edc60.svg",
  },
  {
    name: "Teamwork",
    image: "./skills/Teamwork.6df0b1b7.svg",
  },
];
const Skills = () => {
  return (
    <div id="skills">
      <h2 className="ml-0 relative">Skills & Tools</h2>
      <p className="pl-6 text-left text-[#daff53e1] text-[18px]">Passionately diving deep into tech crafting perfect products with finesse - NOT just listing.</p>
      <div className="pl-6 py-6  flex flex-wrap">
        {skills.map((skill, index) => (
          <div key={index} className="m-2 w-fit flex items-center gap-2 p-2 border border-[#dbdbdb8a] rounded-lg bg-white bg-opacity-15 hover:bg-opacity-40 duration-300">
            <img src={skill.image} alt={skill.name} width={35} height={25} />
            <p className="text-white w-fit">{skill.name}</p>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Skills;
