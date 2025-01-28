import React, { useState, useEffect } from "react";
import { Button, Link } from "react-scroll";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isMobileMenu, setIsMobileMenu] = useState(false);

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

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1024) {
        setIsMobileMenu(true);
      } else {
        setIsMobileMenu(false);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  useEffect(() => {
    if (isMobileMenu) {
      setIsSidebarVisible(true);
    } else {
      setIsSidebarVisible(false);
    }
  }, [isMobileMenu]);

  return (
    <div className="text-center">
      <nav
        className={`flex justify-between items-center py-6 lg:px-14 px-7 text-white border-b border-[#ffffff54] transition duration-500 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-white bg-opacity-30  shadow-md 2xl:mx-auto sm:mx-10 mx-4 max-w-[1358px] z-50"
            : "relative bg-transparent"
        }`}
      >
        <p className="text-white font-extrabold text-[32px] cursor-pointer flex">
          <span className="text-[#c55648] "> Rodolfo </span> &nbsp;{" "}
          <span className="hidden lg:block">Guerrero</span>
        </p>
        {isMobileMenu && <button><img src="./hamburger-icon.svg" className="border rounded-md" width={35} height={35} alt="" /></button>}
        <ul className={`flex text-white gap-4 font-normal text-[16px] lg:flex-row ${isMobileMenu && `hidden`}`}>
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
