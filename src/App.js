import "./App.css";
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
import { useEffect, useState } from "react";
import ColorPicker from "./components/Common/ColorPicker";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

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
    <div className="bg-[linear-gradient(to_right,_#5f2e2e,_#0d418f)]">
      <div className="max-w-[1440px] mx-auto overflow-hidden">
        <div className="App my-10 border rounded-[30px] bg-white dark:bg-black dark:bg-opacity-40 bg-opacity-20 sm:mx-10 lg:mb-0 mx-4">
          <Header />
          <div className={`md:px-14 px-7 ${isScrolled && ""}`}>
            <Home />
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Testimonial />
          </div>
          <Contact />
          <Footer />
          <ScrollToTopButton />
          <ColorPicker />
        </div>
      </div>
    </div>
  );
}

export default App;
