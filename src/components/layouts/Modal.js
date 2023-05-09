import React from "react";
import { FaPager, FaGithub } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

function Modal({ open, onClose, data }) {
  if (!open) return null;

  return (
    <div>
      <div className="fixed top-0 left-0 bottom-0 right-0 z-30 bg-black bg-opacity-60"></div>
      <div className="w-full lg:w-[900px] px-2 sm:px-4 md:px-12 lg:px-0 fixed top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2  z-40">
        <div className="w-full p-4 xl:px-12 h-auto xl:py-10 rounded-lg dark:shadow-shadowOne shadow-lg shadow-cyan-500/50 flex flex-col bg-gradient-to-tl dark:from-bodyColor dark:to-[#181F30] from-blue-300 to-white transition-colors duration-1000 relative">
          <button
            className="absolute top-4 right-5 text-lg dark:text-lightText text-gray-500 dark:hover:text-designColor hover:text-black bg-black rounded-full p-[1px] hover:bg-red-800 bg-opacity-50 duration-300"
            onClick={onClose}
          >
            <AiOutlineClose />
          </button>
          <div className="w-full h-[50%] overflow-hidden rounded-lg">
            <img
              className="w-full h-full object-cover group-hover:scale-110 duration-300"
              src={data.src}
              alt={data.title}
            />
          </div>
          <div className="w-full mt-5 flex flex-col gap-5">
            <div className="flex justify-between items-center">
              <h3 className="text-base uppercase text-designColor">
                {data.title}
              </h3>
              <div className="flex gap-2">
                <a
                  href={data.linkWeb}
                  className="text-lg w-9 h-9 dark:bg-black bg-white rounded-full cursor-pointer flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
                >
                  <FaPager />
                </a>
                <a
                  href={data.linkGit}
                  className="text-lg w-9 h-9 dark:bg-black bg-white rounded-full cursor-pointer flex justify-center items-center text-gray-400 hover:text-designColor duration-300"
                >
                  <FaGithub />
                </a>
              </div>
            </div>

            <div className="text-sm tracking-wide mt-3 hover:text-gray-50 duration-300">
              <p>{data.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
