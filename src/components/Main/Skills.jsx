import React from "react";
const skills = [
  {
    name: "HTML",
    image: "./skills/HTML.4149c6c4.svg",
  },
  {
    name: "CSS",
    image: "./skills/CSS.c17017a6.svg",
  },
  {
    name: "JS",
    image: "./skills/JavaScript.20f34c02.svg",
  },
  {
    name: "TS",
    image: "./skills/TypeScript.3fb93039.svg",
  },
  {
    name: "PHP",
    image: "./skills/php-svgrepo-com.svg",
  },
  {
    name: "Python",
    image: "./skills/python-svgrepo-com.svg",
  },
  {
    name: "Go",
    image: "./skills/golang-svgrepo-com.svg",
  },
  {
    name: "Bootstrap",
    image: "./skills/Bootstrap.41de6993.svg",
  },
  {
    name: "Tailwind",
    image: "./skills/TailwindCSS-Dark.b2dbe1dd.svg",
  },
  {
    name: "Material UI",
    image: "./skills/MaterialUI-Dark.277e057b.svg",
  },
  {
    name: "Sass",
    image: "./skills/Sass.6476a60f.svg",
  },
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
    name: "Angular.js",
    image: "./skills/angular-svgrepo-com.svg",
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
    name: "Laravel",
    image: "./skills/laravel-1-logo-svgrepo-com.svg",
  },
  {
    name: "Wordpress",
    image: "./skills/wordpress-svgrepo-com.svg",
  },
  {
    name: "Django",
    image: "./skills/djangoproject-svgrepo-com.svg",
  },
  {
    name: "Gin",
    image: "./skills/gin-seeklogo.svg",
  },
  {
    name: "Figma",
    image: "./skills/Figma-Dark.084e0600.svg",
  },
  {
    name: "Postman",
    image: "./skills/Postman.40a11f8b.svg",
  },
  {
    name: "MySQL",
    image: "./skills/mysql-svgrepo-com.svg",
  },
  {
    name: "MongoDB",
    image: "./skills/MongoDB.1eefe643.svg",
  },
  {
    name: "Amazon",
    image: "./skills/amazon-color-svgrepo-com.svg",
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
    name: "Punctuality",
    image: "./skills/OnTime.5203181a.svg",
  },
  {
    name: "Teamwork",
    image: "./skills/Teamwork.6df0b1b7.svg",
  },
];
const Skills = () => {
  return (
    <div id="skills">
      <h2 className="relative">Skills & Tools</h2>
      <p className="text-center text-[#daff53e1] text-[18px]">
        Passionately diving deep into tech crafting perfect products with
        finesse - NOT just listing.
      </p>
      <div className="md:pl-6 py-6  flex flex-wrap relative">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="m-2 w-fit flex items-center gap-2 p-2 border border-[#dbdbdb8a] rounded-lg bg-white bg-opacity-15 hover:bg-opacity-40 duration-300 cursor-pointer"
          >
            <img src={skill.image} alt={skill.name} height={25} width={35}  style={{height:"35px"}}/>
            <p className="text-white w-fit">{skill.name}</p>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default Skills;
