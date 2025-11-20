import React from "react";
import NavBar from "../navbar/NavBar";
import Home from "../home/Home";
import About from "../about/About";
import Projects from "../projects/Projects";
import Footer from "../footer/Footer";
import Contact from './../contact/Contact';

const Parent = () => {
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

export default Parent;
