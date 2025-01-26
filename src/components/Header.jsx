import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="text-center">
      <nav
        className={`flex justify-between items-center py-6 px-14  text-white border-b border-[#ffffff54] transition duration-500 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-white bg-opacity-30  shadow-md 2xl:mx-auto mx-10 max-w-[1358px] z-50"
            : "relative bg-transparent"
        }`}
      >
        <a href="" className="text-white font-extrabold text-[32px]">
          <span className="text-[#c55648]"> Rodolfo </span> Guerrero
        </a>
        <ul className="flex text-white gap-4 font-normal text-[16px] ">
          <li className="cursor-pointer">
            <Link to="home" spy={true} smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="about" spy={true} smooth={true} duration={500}>
              About Me
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="experience" spy={true} smooth={true} duration={500}>
              Experience
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="project" spy={true} smooth={true} duration={500}>
              Project
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="skills" spy={true} smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="testimonial" spy={true} smooth={true} duration={500}>
              Testimonial
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link to="contact" spy={true} smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
