import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { ThemeProvider } from "./components/ThemeContext";

const App = () => {
  return (
    <div className="min-h-screen dark:bg-[#282828] bg-[#fff] transition-colors duration-300">
      <div className="max-w-9xl mx-auto overflow-x-hidden">
        <ThemeProvider>
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </ThemeProvider>
      </div>
    </div>
  );
};

export default App;
