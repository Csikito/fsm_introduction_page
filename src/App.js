import React, { useState, useEffect } from "react";

import Eng from "./constants/English";
import Hun from "./constants/Hungarian";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Project from "./components/project/Project";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

function App() {
  const [isEng, setIsEng] = useState(true);
  const [language, setLanguage] = useState(Eng);
  const [theme, setTheme] = useState("dark");

  const handleEng = (e) => {
    e.preventDefault();
    setIsEng(true);
  };
  const handleHun = (e) => {
    e.preventDefault();
    setIsEng(false);
  };

  useEffect(() => {
    isEng ? setLanguage(Eng) : setLanguage(Hun);
  }, [isEng]);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = (e) => {
    e.preventDefault();
    setTheme((oldTheme) => (oldTheme === "light" ? "dark" : "light"));
  };

  return (
    <div
      className={`w-full h-auto dark:bg-bodyColor dark:text-lightText  bg-gray-100 text-black dark:font-normal font-semibold`}
    >
      <Navbar
        content={language.nav}
        handleEng={handleEng}
        handleHun={handleHun}
        isEng={isEng}
        handleTheme={handleTheme}
        theme={theme}
      />

      <Home content={language.home} theme={theme} />
      <About content={language.about} theme={theme} />
      <Project content={language.projects} theme={theme} />
      <Resume contents={language.resume} theme={theme} />
      <Contact content={language.contact} theme={theme} />
      <Footer />
    </div>
  );
}

export default App;
