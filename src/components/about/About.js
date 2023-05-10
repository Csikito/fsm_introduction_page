import React from "react";
import Title from "../layouts/Title";
import { aboutImg } from "../../assets/img";

function About({ content, theme }) {
  return (
    <section
      id="about"
      className="w-full py-20 bg-blue-500 bg-opacity-20 font-titleFont"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="w-full flex justify-center items-center text-center">
          <Title title={content.title} des={content.subtitle} theme={theme} />
        </div>
        <div className="w-full flex flex-col lg:flex-row justify-center items-center text-center gap-4 py-20">
          <div className=" w-full flex justify-center ">
            <img
              className="w-[250px] lgl:w-[350px] rounded-[50%] bg-blue-400 border-[5px] border-designColor"
              src={aboutImg}
              alt="about"
            />
          </div>
          <div className="w-full">
            <div className="w-full flex flex-col gap-8 justify-center items-center">
              <h1 className="font-titleFont text-center text-3xl">
                {content.title_h1_1}
                <span className="text-designColor capitalize">
                  {" "}
                  {content.title_span}
                </span>{" "}
                {content.title_h1_2}
              </h1>
              <p className="w-[full] sml:px-6 lgl:px-13 text-base font-bodyFont leading-6 tracking-wide">
                {content.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
