import React from "react";
import { motion } from "framer-motion";
import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";

function Skill({ content }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full gap-10"
    >
      <div className=" w-full h-full mdl:h-[948px]  ">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            {content.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">{content.title}</h2>
        </div>
        <div className="w-full mt-14 flex flex-col gap-8 mdl:gap-20 py-4 sml:py-10 px-2 sml:px-10  bg-gradient-to-tr from-blue-300 dark:from-transparent rounded-[5px] ">
          {/*********** HTML **************/}
          <div className="flex justify-center items-center relative">
            <p className="text-7xl text-designColor font-medium ">
              <AiFillHtml5 />
              <span className="absolute text-lg dark:text-lightText text-blue-950 top-0 right-0">
                91%
              </span>
            </p>
            <span className="w-full h-2 bg-black bg-opacity-40 inline-flex mt-2 ml-10 overflow-y-hidden">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[91%] h-full bg-gradient-to-r from-blue-400  via-green-500  to-red-500 
                rounded-lg"
              ></motion.span>
            </span>
          </div>
          {/*********** CSS **************/}
          <div className="flex justify-center items-center relative">
            <p className="text-7xl text-designColor font-medium ">
              <FaCss3Alt />
              <span className="absolute text-lg dark:text-lightText text-blue-950 top-0 right-0">
                82%
              </span>
            </p>
            <span className="w-full h-2 bg-black bg-opacity-40 inline-flex mt-2 ml-10 overflow-y-hidden">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[82%] h-full bg-gradient-to-r from-blue-400  via-green-500  to-red-500 
                rounded-lg"
              ></motion.span>
            </span>
          </div>
          {/*********** JAVASCRIPT **************/}
          <div className="flex justify-center items-center relative">
            <p className="text-7xl text-designColor font-medium ">
              <TbBrandJavascript />
              <span className="absolute text-lg dark:text-lightText text-blue-950 top-0 right-0">
                65%
              </span>
            </p>
            <span className="w-full h-2 bg-black bg-opacity-40 inline-flex mt-2 ml-10 overflow-y-hidden">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[65%] h-full bg-gradient-to-r from-blue-400  via-green-500  to-red-500 
                rounded-lg"
              ></motion.span>
            </span>
          </div>
          {/*********** REACT **************/}
          <div className="flex justify-center items-center relative">
            <p className="text-7xl text-designColor font-medium ">
              <FaReact />
              <span className="absolute text-lg dark:text-lightText text-blue-950 top-0 right-0">
                80%
              </span>
            </p>
            <span className="w-full h-2 bg-black bg-opacity-40 inline-flex mt-2 ml-10 overflow-y-hidden">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[80%] h-full bg-gradient-to-r from-blue-400  via-green-500  to-red-500 
                rounded-lg"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Skill;
