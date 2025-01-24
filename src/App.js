import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Main/Home";
import About from "./components/Main/About";
import Experience from "./components/Main/Experience";
import Education from "./components/Main/Education";
import Projects from "./components/Main/Projects";
import Skills from "./components/Main/Skills";
import Testimonial from "./components/Main/Testimonial";
import Contact from "./components/Main/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/Common/ScrollToTopButton";
import { useEffect, useState } from "react";

function App() {
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
    <div className="max-w-[1440px] mx-auto">
      <div className="App mt-10 border rounded-[30px] bg-white bg-opacity-10 mx-10 ">
        <Header />
        <div className= {`px-14`}>
          <Home />
          <About />
          <Experience />
          <Education />
          <Projects />
          <Skills />
          <Testimonial />
        </div>
        <Contact />
        <Footer />
        <ScrollToTopButton />
      </div>
    </div>
  );
}

export default App;
