import React, { useState, useEffect } from "react";
import { Button, Link } from "react-scroll";
import "./Header.css";

const sections = [
  {
    name: "Home",
    to: "home",
  },
  {
    name: "About Me",
    to: "about",
  },
  {
    name: "Experience",
    to: "experience",
  },
  {
    name: "Project",
    to: "project",
  },
  {
    name: "Skills",
    to: "skills",
  },
  {
    name: "Testimonial",
    to: "testimonial",
  },
  {
    name: "Contact",
    to: "contact",
  },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [isMobileMenu, setIsMobileMenu] = useState(
    window.innerWidth < 1024 ? true : false
  );

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
        setIsSidebarVisible(false);
      } else {
        setIsMobileMenu(false);
        setIsSidebarVisible(true);
      }
    });

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  return (
    <div className="text-center">
      <nav
        className={`flex justify-between items-center py-3 lg:px-14 px-7 text-white border-b border-[#ffffff54] transition duration-500 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 bg-black bg-opacity-70  shadow-md 2xl:mx-auto sm:mx-10 mx-4 max-w-[1358px] z-50"
            : "relative bg-transparent"
        }`}
      >
        <p className="text-white font-extrabold text-[32px] cursor-pointer flex">
          <img
            src={!isScrolled ? "./white-logo.png" : "./logo.png"}
            alt="Logo"
            width={200}
            height={30}
          />
        </p>
        {isMobileMenu && (
          <button
            onClick={() => {
              setIsSidebarVisible(!isSidebarVisible);
            }}
          >
            <img
              src="./hamburger-icon.svg"
              className="border rounded-md"
              width={35}
              height={35}
              alt=""
            />
          </button>
        )}
        <ul
          className={`${
            !isMobileMenu &&
            "flex text-white gap-4 font-normal text-[16px] lg:flex-row w-fit"
          }  ${
            isMobileMenu &&
            "flex absolute top-[89px] gap-2 bg-black bg-opacity-30 pt-9 h-[100vh] right-0  flex-col items-center transition-all z-50"
          } ${
            !isSidebarVisible && isMobileMenu
              ? "w-0 overflow-hidden"
              : "w-[40%]"
          }`}
        >
          {sections.map((section, index) => (
            <li className="cursor-pointer relative w-fit" key={index}>
              <Link
                to={section.to}
                spy={true}
                smooth={true}
                duration={500}
                className="navs duration-300 hover:after:w-full duration-300 "
              >
                {section.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
