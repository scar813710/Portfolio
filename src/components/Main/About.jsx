import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="my-10 " id="about">
      <h2 className="ml-0 text-left mb-7">About me</h2>
      <div className="grid lg:grid-cols-2 relative">
        <div className="text-[#dedede] py-6">
          <div className="text-justify pb-10 border-b border-[#e6e6e693] w-full ">
            <p className="indent-4 w-full">
              Full Stack Developer with over 10 years of experience,
              specializing in JavaScript frameworks such as Node.js, React.js,
              and Vue.js.
            </p>
            <br />
            <p className="indent-4 w-full">
              Having a proven track record of delivering high-quality, scalable
              web applications while emphasizing clean code and user experience.
            </p>
            <br />
            <p className="indent-4 w-full">
              Passionate about collaboration, I thrive in cross-functional
              teams, ensuring that projects align with business objectives and
              user needs.
            </p>
          </div>
          <div className="my-6 pl-6">
            <h3 className="my-6 font-extrabold text-2xl text-left">
              Basic info
            </h3>
            <ul className=" w-full">
              <li className="flex flex-col esm:flex-row  py-2 w-full">
                <span className="w-32 font-bold text-left inline-block">
                  Phone No:
                </span>
                <a className="italic hover:underline" href="tel:+12029708048">
                  +1 (202) 970 8048
                </a>
              </li>
              <li className="flex flex-col esm:flex-row  py-2">
                <span className="w-32 font-bold text-left inline-block">
                  Email:
                </span>
                <a
                  className="italic hover:underline"
                  href="mailto:rodolfguerr@gmail.com"
                >
                  rodolfguerr@gmail.com
                </a>
              </li>
              <li className="flex flex-col esm:flex-row  py-2 w-full">
                <span className="w-32 font-bold text-left inline-block">
                  Address:
                </span>
                <a
                  className="italic hover:underline "
                  href="https://maps.app.goo.gl/wXzfYMT7ZsAoBeC68"
                >
                  Calle 23# 68-89 Medellín
                </a>
              </li>
              <li className="flex flex-col esm:flex-row  py-2 w-full">
                <span className="w-32 font-bold text-left inline-block">
                  Looking for:
                </span>
                <p className="italic hover:underline">Contract Full-time job</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="xl:absolute xl:right-0 aboutImg">
          <img src="./about.svg" alt="" className="mx-auto w-[70%] " />
        </div>
      </div>
    </div>
  );
};

export default About;
