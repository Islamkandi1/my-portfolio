import React from "react";
import Home from "./components/home/Home";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import About from "./components/about/About";
import NavBar from "./components/navbar/NavBar";

const App = () => {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
