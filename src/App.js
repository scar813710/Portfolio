import { useEffect, useRef, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Experience from "./components/Main/Experience";
import Projects from "./components/Main/Projects";
import Skills from "./components/Main/Skills";
import Testimonial from "./components/Main/Testimonial";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/Common/ScrollToTopButton";
import ColorPicker from "./components/Common/ColorPicker";
import useCustomCursor from "./components/hooks/useCustomCursor";
import CustomCursor from "./components/Common/CustomCursor";
import AnimatedBackground from "./components/Common/AnimatedBackground";

import "./App.css";

function App() {
  const innerCursorRef = useRef(null);
  const outerCursorRef = useRef(null);
  useCustomCursor(innerCursorRef, outerCursorRef);

  const [isScrolled, setIsScrolled] = useState(false);
  const [themeColor, setThemeColor] = useState("purple");

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 40;
      setIsScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`
    ${
      themeColor === "red" &&
      `bg-[linear-gradient(to_right,_#531010,_#241ab6e5)]`
    }
    ${
      themeColor === "purple" &&
      `bg-[linear-gradient(to_right,_#4b0e53,_#18108d)]`
    }
    ${
      themeColor === "blue" &&
      `bg-[linear-gradient(to_right,_#18108d,_#0d4119)]`
    }
    ${
      themeColor === "green" &&
      `bg-[linear-gradient(to_right,_#146427,_#794500)]`
    }
     ") `}
    >
      <div className="bg-[url('./grid.png')]">
        <AnimatedBackground />
        <div className="max-w-[1440px] mx-auto overflow-hidden text-[#531010]">
          <div className="App my-10 border rounded-[30px] bg-white  dark:bg-black dark:bg-opacity-40 bg-opacity-10 sm:mx-10 lg:mb-0 mx-4">
            <CustomCursor
              innerCursorRef={innerCursorRef}
              outerCursorRef={outerCursorRef}
            />
            <Header />
            <div className={`${isScrolled && ""} z-10 `}>
              <div className="md:px-14 px-7 ">
                <Home />
                <About />
                <Experience />
                <Projects />
                <Skills />
                <Testimonial />
              </div>
            </div>
            <Contact />
            <Footer />
            <ScrollToTopButton />
            <ColorPicker
              themeColor={themeColor}
              setThemeColor={setThemeColor}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
