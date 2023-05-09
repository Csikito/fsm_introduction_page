import React from "react";
import ResumeCard from "./ResumeCard";
import { motion } from "framer-motion";

function Education({ content }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full gap-10"
    >
      <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
        <p className="text-sm text-designColor tracking-[4px] flex  items-center">
          {content.subtitle} <span className="text-2xl animate-pulse ">∞</span>
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">{content.title}</h2>
      </div>

      <div className="mt-6 w-full sm:h-[788px] border-l-[6px] border-l-black border-opacity-30 rounded flex flex-col gap-10">
        <ResumeCard
          title={content.item1.title}
          subTitle={content.item1.subtitle}
          des={content.item1.description}
        />
        <ResumeCard
          title={content.item2.title}
          subTitle={content.item2.subtitle}
          des={content.item2.description}
        />
        <ResumeCard
          title={content.item3.title}
          subTitle={content.item3.subtitle}
          des={content.item3.description}
        />
      </div>
    </motion.div>
  );
}

export default Education;
