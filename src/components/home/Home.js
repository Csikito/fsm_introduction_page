import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

function Home({ content, theme }) {
  const [textHun] = useTypewriter({
    words: [
      "Frontend fejlesztő.",
      "Profi programozó.",
      "Autodidakta módon tanult programozó .",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  const [textEng] = useTypewriter({
    words: [
      "Frontend Developer.",
      "Professional Coder.",
      "Self-taught Frontend Programmer.",
    ],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });

  return (
    <section
      id="home"
      className="w-full max-w-screen-xl mx-auto px-4 py-36 flex flex-colom mdl:px-6 font-titleFont"
    >
      <div className="w-full lgl:w-1/2">
        <div className="flex flex-col gap-5">
          <h4 className="text-lg font-normal uppercase">{content.title_h4}</h4>
          <h1 className="text-5xl font-bold dark:text-white text-black ">
            {content.title_h1_1}
            <span className="text-designColor capitalize">
              {" "}
              {content.title_span}
            </span>{" "}
            {content.title_h1_2}
          </h1>

          <h2 className="text-3xl font-bold dark:text-white text-black h-[100px] sml:h-[70px] pt-2">
            {`${content.title_h1_2 ? "" : "a "}`}
            <span className="dark:text-blue-300   text-gray-600">{`${
              content.title_h1_2 ? textHun : textEng
            }`}</span>
            <Cursor cursorStyle="_" cursorColor="#00abf0" />
          </h2>
          <div className="flex flex-col gap-6 pt-10">
            <p className="text-base font-bodyFont leading-6 tracking-wide ">
              {content.moti_text1}
            </p>
            <p className="text-base font-bodyFont leading-6 tracking-wide">
              {content.moti_text2}
            </p>
          </div>
        </div>
        <div className="flex justify-between"></div>
        <div>
          <h2 className="text-base uppercase mb-5 mt-[90px] font-[500]">
            {content.contact}{" "}
            <span className="text-designColor"> {content.contact_span}</span>
          </h2>
          <div className="flex gap-5">
            <a
              href="https://hu.linkedin.com/in/ronald-csik%C3%B3s-a60938235?original_referer="
              className="dark:homeIcon homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/Csikito"
              className="dark:homeIcon homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800"
            >
              <FaGithub />
            </a>
            <a
              href="mailto:csikosronald@gmail.com"
              className="dark:homeIcon homeIcon shadow-lg shadow-blue-500/50 bg-white bg-opacity-20 text-blue-800"
            >
              <GrMail />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
