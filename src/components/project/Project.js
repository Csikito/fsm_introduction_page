import React, { useState } from "react";
import Title from "../layouts/Title";
import {
  foodLogo,
  transLogo,
  gameLogo,
  flashLogo,
  userLogo,
} from "../../assets/img";

import ProjectCard from "./ProjectCard";
import Modal from "../layouts/Modal";

function Project({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const handelModalView = (e) => {
    e.preventDefault();
    setIsOpen(true);

    let project =
      e.target.innerHTML ||
      e.target.alt ||
      e.target.children[0].alt ||
      e.target.children[0].innerHTML;

    if (project === "FoodBar") {
      setData(content.foodbar);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.foodbar.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (project === "FLASHCARD") {
      setData(content.flashcard);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.flashcard.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (project === "Trans") {
      setData(content.trans);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.trans.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (project === "TIC-TAC-TOE") {
      setData(content.ticGame);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.ticGame.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (project === "RANDOM USER") {
      setData(content.randomUser);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.randomUser.linkWeb, "_blank");
        setIsOpen(false);
      }
    }
  };

  return (
    <section id="project" className="w-full py-20 font-titleFont relative">
      <div className="max-w-screen-xl mx-auto px-4">
        <div>
          <Modal open={isOpen} onClose={() => setIsOpen(false)} data={data} />
        </div>
        <div className="w-full flex justify-center items-center text-center">
          <Title title={content.title} des={content.subtitle} />
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 py-10 justify-center">
          <ProjectCard
            title={content.foodbar.title}
            src={foodLogo}
            handelModalView={handelModalView}
          />

          <ProjectCard
            title={content.trans.title}
            src={transLogo}
            handelModalView={handelModalView}
          />
          <ProjectCard
            title={content.ticGame.title}
            src={gameLogo}
            handelModalView={handelModalView}
          />
          <ProjectCard
            title={content.flashcard.title}
            src={flashLogo}
            handelModalView={handelModalView}
          />
          <ProjectCard
            title={content.randomUser.title}
            src={userLogo}
            handelModalView={handelModalView}
          />
        </div>
      </div>
    </section>
  );
}

export default Project;
