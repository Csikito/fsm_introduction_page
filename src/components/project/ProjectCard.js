import React from "react";

function ProjectCard({ title, src, handelModalView }) {
  return (
    <div
      onClick={handelModalView}
      className="w-full p-4 xl:px-8 h-auto xl:py-6 gap-4 rounded-lg dark:shadow-shadowOne shadow-lg shadow-cyan-500/50 flex flex-col cursor-pointer bg-gradient-to-tl dark:from-bodyColor dark:to-[#181F30] from-blue-300 to-white  hover:bg-gradient-to-br dark:hover:from-[#202330] hover:from-blue-300 transition-colors duration-1000"
    >
      <div className="w-full h-full overflow-hidden rounded-lg flex flex-col justify-center items-center">
        <img
          className="w-[50%] h-full object-cover group-hover:scale-110 duration-300 logo_filter"
          src={src}
          alt={title}
        />
      </div>
      <div className="w-full flex justify-center  ">
        <h3 className="text-base uppercase text-designColor ">{title}</h3>
      </div>
    </div>
  );
}

export default ProjectCard;
