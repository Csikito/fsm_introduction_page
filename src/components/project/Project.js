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

    console.log();

    console.log(e.target.parentElement.dataset.id);
    console.log(e.target.dataset.id);
    let id = e.target.dataset.id || e.target.parentElement.dataset.id;

    if (id === "1") {
      setData(content.foodbar);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.foodbar.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (id === "2") {
      setData(content.trans);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.trans.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (id === "3") {
      setData(content.ticGame);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.ticGame.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (id === "4") {
      setData(content.flashcard);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.flashcard.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (id === "5") {
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
            id={1}
          />

          <ProjectCard
            title={content.trans.title}
            src={transLogo}
            handelModalView={handelModalView}
            id={2}
          />
          <ProjectCard
            title={content.ticGame.title}
            src={gameLogo}
            handelModalView={handelModalView}
            id={3}
          />
          <ProjectCard
            title={content.flashcard.title}
            src={flashLogo}
            handelModalView={handelModalView}
            id={4}
          />
          <ProjectCard
            title={content.randomUser.title}
            src={userLogo}
            handelModalView={handelModalView}
            id={5}
          />
        </div>
      </div>
    </section>
  );
}

export default Project;
