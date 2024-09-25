import { useState } from "react";
import "./App.css";
import { AboutMe } from "./components/AboutMe";

import { Banner } from "./components/Banner";
import { ContactMe } from "./components/ContactMe";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { NavBar } from "./components/NavBar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <input type="checkbox" id="darkmode" />
      <div className="wrapper">
        {/* <!-- navbar --> */}
        <NavBar />

        <label htmlFor="darkmode">
          <i className="fa-solid fa-circle-half-stroke"></i>
        </label>

        {/* <!-- hero --> */}

        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="skills" element={<Skills />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<AboutMe />} />
          <Route path="contact" element={<ContactMe />} />
        </Routes>

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </>
  );
};

export default App;
