import React from "react";

function ResumeCard({ title, subTitle, des }) {
  return (
    <div className="w-full h-full mdl:h-[948px] group flex ">
      <div className="w-10 h-[6px] bg-black bg-opacity-40 mt-16 relative duration-500  ">
        <span className="absolute w-5 h-5 rounded-full bg-black bg-opacity-60 -top-2 -left-3.5 flex justify-center items-center">
          <span
            className="w-3 h-3 rounded-full bg-bodyColor group-hover:bg-designColor 
          inline-flex duration-300 "
          ></span>
        </span>
      </div>
      <div
        className="w-full bg-gradient-to-tr dark:bg-gradient-to-tr dark:from-bodyColor dark:to-bg-black  from-blue-300 to-blue-100 dark:hover:bg-opacity-40 duration-300
      rounded-lg py-2 px-10 flex flex-col justify-center gap-10 dark:shadow-shadowOne dark:hover:shadow-blue-300/30 hover:shadow-lg"
      >
        <div>
          <h3 className="text-xl md:text-2xl font-semibold dark:group-hover:text-white group-hover:text-blue-950 duration-300">
            {title}
          </h3>
          <p className="text-sm mt-2 text-gray-400 group-hover:text-designColor duration-300">
            {subTitle}
          </p>
        </div>
        <p className="text-sm md:text-base font-medium text-gray-400 dark:group-hover:text-gray-300 group-hover:text-gray-900  duration-300">
          {des}
        </p>
      </div>
    </div>
  );
}

export default ResumeCard;
