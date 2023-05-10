import React from "react";
import { motion } from "framer-motion";
import { GiHungary } from "react-icons/gi";
import { RiEnglishInput } from "react-icons/ri";

function Language({ content }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full gap-10"
    >
      <div className=" w-full mdl:h-[948px]  ">
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">
            {content.subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">{content.title}</h2>
        </div>
        <div className="w-full mt-14 flex flex-col gap-8 mdl:gap-20 py-8 px-4 sml:py-10 sml:px-10 bg-gradient-to-tr from-blue-300 dark:from-transparent rounded-[5px]">
          {/*********** Hungary **************/}
          <div className="flex justify-center items-center relative">
            <p className="text-7xl text-designColor font-medium ">
              <GiHungary />
              <span className="absolute text-lg dark:text-lightText text-blue-950 -bottom-4">
                {content.lan.hun}
              </span>
              <span className="absolute text-lg dark:text-lightText text-blue-950 top-0 right-0">
                {content.exp.native}
              </span>
            </p>
            <span className="w-full h-2 bg-black bg-opacity-40 inline-flex mt-2 ml-10 overflow-y-hidden">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[98%] h-full bg-gradient-to-r from-blue-400  via-green-500  to-red-500 
                rounded-lg"
              ></motion.span>
            </span>
          </div>
          {/*********** Hungary **************/}
          <div className="flex justify-center items-center relative">
            <p className="text-5xl text-designColor font-medium ">
              <RiEnglishInput />
              <span className="absolute text-lg dark:text-lightText text-blue-950 -bottom-6">
                {content.lan.eng}
              </span>
              <span className="absolute text-lg dark:text-lightText text-blue-950 -top-2 right-0">
                {content.exp.elementary}
              </span>
            </p>
            <span className="w-full h-2 bg-black bg-opacity-40 inline-flex mt-2 ml-16 overflow-y-hidden">
              <motion.span
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="w-[30%] h-full bg-gradient-to-r from-blue-400 from-50% to-green-400  
                rounded-lg"
              ></motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Language;
