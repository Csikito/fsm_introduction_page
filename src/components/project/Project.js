import React, { useState } from "react";
import Title from "../layouts/Title";

import ProjectCard from "./ProjectCard";
import Modal from "../layouts/Modal";

function Project({ content }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const handelModalView = (e) => {
    e.preventDefault();
    setIsOpen(true);

    if (e.target.alt === "FoodBar") {
      setData(content.foodbar);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.foodbar.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (e.target.alt === "FLASHCARD") {
      setData(content.flashcard);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.flashcard.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (e.target.alt === "Trans") {
      setData(content.trans);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.trans.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (e.target.alt === "TIC-TAC-TOE") {
      setData(content.ticGame);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.ticGame.linkWeb, "_blank");
        setIsOpen(false);
      }
    } else if (e.target.alt === "RANDOM USER") {
      setData(content.randomUser);
      if (e.ctrlKey || e.button === 1) {
        window.open(content.randomUser.linkWeb, "_blank");
        setIsOpen(false);
      }
    }
  };

  return (
    <section
      id="project"
      className="w-full py-20  border-b-[2px] font-titleFont border-secondBodyColor relative"
    >
      <div>
        <Modal open={isOpen} onClose={() => setIsOpen(false)} data={data} />
      </div>
      <div className="w-full flex justify-center items-center text-center">
        <Title title={content.title} des={content.subtitle} />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 justify-center">
        <ProjectCard
          title={content.foodbar.title}
          des={content.foodbar.description}
          src={content.foodbar.src}
          linkWeb={content.foodbar.linkWeb}
          linkGit={content.foodbar.linkGit}
          handelModalView={handelModalView}
        />

        <ProjectCard
          title={content.trans.title}
          des={content.trans.description}
          src={content.trans.src}
          linkWeb={content.trans.linkWeb}
          linkGit={content.trans.linkGit}
          handelModalView={handelModalView}
        />
        <ProjectCard
          title={content.ticGame.title}
          des={content.ticGame.description}
          src={content.ticGame.src}
          linkWeb={content.ticGame.linkWeb}
          linkGit={content.ticGame.linkGit}
          handelModalView={handelModalView}
        />
        <ProjectCard
          title={content.flashcard.title}
          des={content.flashcard.description}
          src={content.flashcard.src}
          linkWeb={content.flashcard.linkWeb}
          linkGit={content.flashcard.linkGit}
          handelModalView={handelModalView}
        />
        <ProjectCard
          title={content.randomUser.title}
          des={content.randomUser.description}
          src={content.randomUser.src}
          linkWeb={content.randomUser.linkWeb}
          linkGit={content.randomUser.linkGit}
          handelModalView={handelModalView}
        />
      </div>
    </section>
  );
}

export default Project;
