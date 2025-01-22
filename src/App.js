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
import Testerminal from "./components/Main/Testerminal";
import Contact from "./components/Main/Contact";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="App mt-10 border rounded-[30px] mx-10 bg-white bg-opacity-10">
        <Header />
        <Home />
        <About />
        <Experience />
        <Education />
        <Projects />
        <Skills />
        <Testerminal />
        <Contact />
      </div>
    </div>
  );
}

export default App;
