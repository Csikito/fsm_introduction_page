import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Hobby from "./Hobby";
import Language from "./Language";
import Skill from "./Skill";

function Resume({ contents }) {
  const [educationData, setEducationData] = useState(true);
  const [hobbyData, setHobbyData] = useState(false);
  const [skillData, setSkillData] = useState(false);
  const [languageData, setLanguageData] = useState(false);
  return (
    <section
      id="resume"
      className="w-full py-20  bg-blue-500 bg-opacity-20 font-titleFont"
    >
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="w-full flex justify-center text-center">
          <Title title={contents.title} des={contents.subtitle} />
        </div>
        <div className="w-full flex flex-col mdl:flex-row items-center justify-center gap-6 mdl:gap-14">
          <div className="w-full mdl:w-1/3 ">
            <ul className="w-full grid grid-cols-1 sml:grid-cols-2 mdl:grid-cols-1 gap-1 sml:gap-2 mdl:gap-20">
              <li
                onClick={() => {
                  setEducationData(true);
                  setHobbyData(false);
                  setSkillData(false);
                  setLanguageData(false);
                }}
                className={`${
                  educationData
                    ? "border-designColor rounded-lg dark:shadow-shadowResume shadow-lg shadow-cyan-500/50"
                    : "border-transparent text-gray-500"
                } resumeLi`}
              >
                {contents.resumeBtn.education}
              </li>

              <li
                onClick={() => {
                  setEducationData(false);
                  setHobbyData(false);
                  setSkillData(true);
                  setLanguageData(false);
                }}
                className={`${
                  skillData
                    ? "border-designColor rounded-lg dark:shadow-shadowResume shadow-lg shadow-cyan-500/50"
                    : "border-transparent text-gray-500"
                } resumeLi`}
              >
                {contents.resumeBtn.skill}
              </li>
              <li
                onClick={() => {
                  setEducationData(false);
                  setHobbyData(false);
                  setSkillData(false);
                  setLanguageData(true);
                }}
                className={`${
                  languageData
                    ? "border-designColor rounded-lg dark:shadow-shadowResume shadow-lg shadow-cyan-500/50 "
                    : "border-transparent text-gray-500"
                } resumeLi`}
              >
                {contents.resumeBtn.language}
              </li>
              <li
                onClick={() => {
                  setEducationData(false);
                  setHobbyData(true);
                  setSkillData(false);
                  setLanguageData(false);
                }}
                className={`${
                  hobbyData
                    ? "border-designColor rounded-lg dark:shadow-shadowResume shadow-lg shadow-cyan-500/50"
                    : "border-transparent text-gray-500"
                } resumeLi`}
              >
                {contents.resumeBtn.hobby}
              </li>
            </ul>
          </div>

          {educationData && <Education content={contents.education} />}
          {hobbyData && <Hobby content={contents.hobby} />}
          {skillData && <Skill content={contents.skill} />}
          {languageData && <Language content={contents.language} />}
        </div>
      </div>
    </section>
  );
}

export default Resume;
