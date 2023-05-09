import React from "react";

function ProjectCard({ title, des, src, linkGit, linkWeb, handelModalView }) {
  return (
    <div>
      <div
        onClick={handelModalView}
        className="w-full p-4 xl:px-8 h-auto xl:py-6 gap-4 rounded-lg dark:shadow-shadowOne shadow-lg shadow-cyan-500/50 flex flex-col cursor-pointer bg-gradient-to-tl dark:from-bodyColor dark:to-[#181F30] from-blue-300 to-white  hover:bg-gradient-to-br dark:hover:from-[#202330] hover:from-blue-300 transition-colors duration-1000"
      >
        <div className="w-full h-[50%] overflow-hidden rounded-lg">
          <img
            className="w-full h-60 object-cover group-hover:scale-110 duration-300"
            src={src}
            alt={title}
          />
        </div>
        <div className="w-full flex justify-center  ">
          <h3 className="text-base uppercase text-designColor ">{title}</h3>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
