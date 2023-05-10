import React, { useState } from "react";
import { logo } from "../../assets/img";
import { Link } from "react-scroll";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

function Navbar({ content, handleEng, handleHun, isEng, handleTheme, theme }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="w-full sticky top-0 h-20 mx-auto  z-20  shadow-md shadow-blue-500/50 flex  items-center  dark:bg-bodyColor dark:text-gray-400 bg-slate-100 text-blue-900 ">
      <div className=" relative px-10  w-full flex justify-between items-center ">
        <div>
          <img className="max-w-[150px]" src={logo} alt="logo" />
        </div>
        <div>
          <ul
            className={`  mdl:gap-4 lg:gap-10 ${
              showMenu ? "navBarTrue" : "navBarFalse"
            }`}
          >
            <li
              className="text-base dark:font-normal font-semibold tracking-wide dark:text-gray-400 text-blue-900
          cursor-pointer hover:text-designColor duration-300 "
            >
              <Link
                onClick={handleMenu}
                activeClass="text-designColor dark:text-white"
                to="home"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {content.home}
              </Link>
            </li>
            <li
              className="text-base dark:font-normal font-semibold tracking-wide dark:text-gray-400 text-blue-900
            cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                onClick={handleMenu}
                activeClass="text-designColor dark:text-white"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {content.about}
              </Link>
            </li>
            <li
              className="text-base dark:font-normal font-semibold tracking-wide dark:text-gray-400 text-blue-900
            cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                onClick={handleMenu}
                activeClass="text-designColor dark:text-white"
                to="project"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {content.projects}
              </Link>
            </li>
            <li
              className="text-base dark:font-normal font-semibold tracking-wide dark:text-gray-400 text-blue-900
            cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                onClick={handleMenu}
                activeClass="text-designColor dark:text-white"
                to="resume"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {content.resume}
              </Link>
            </li>
            <li
              className="text-base dark:font-normal font-semibold tracking-wide dark:text-gray-400 text-blue-900
            cursor-pointer hover:text-designColor duration-300"
            >
              <Link
                onClick={handleMenu}
                activeClass="text-designColor dark:text-white"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {content.contact}
              </Link>
            </li>
            <li
              className="text-base dark:font-normal font-semibold tracking-wide dark:text-gray-400 text-blue-900
            cursor-pointer hover:text-designColor duration-300"
            >
              <div className="home-language">
                <button
                  onClick={handleEng}
                  className={`home-language-btn ${
                    isEng ? "active-language text-designColor" : ""
                  }`}
                >
                  🇬🇧
                </button>
                <span className="px-2">/</span>
                <button
                  onClick={handleHun}
                  className={`home-language-btn ${
                    !isEng ? "active-language text-designColor" : ""
                  }`}
                >
                  🇭🇺
                </button>
              </div>
            </li>
            <li>
              <div>
                <button
                  onClick={handleTheme}
                  className="text-xl mdl:text-base font-normal text-gray-400 tracking-wide
          cursor-pointer hover:text-designColor"
                >
                  {theme === "light" ? "🌙" : "☀️"}
                </button>
              </div>
            </li>
          </ul>
          <span
            onClick={handleMenu}
            className="absolute top-1 right-6 w-10 h-10 text-xl mdl:hidden z-50 inline-flex items-center justify-center dark:bg-black dark:bg-opacity-25 dark:shadow-shadowOne dark:hover:bg-opacity-40 hover:-translate-y-1 transition-all dark:hover:text-designColor homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800 rounded-lg cursor-pointer"
          >
            {showMenu ? <AiOutlineClose /> : <BiMenu />}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
