import React from "react";

function Title({ title, des }) {
  return (
    <div className="flex flex-col gap-4 mb-14">
      <h3 className="text-sm uppercase dark:text-designColor text-designColor tracking-wide ">
        {des}
      </h3>
      <h1 className="text-5xl capitalize dark:text-lightText text-blue-950 ">
        {title}
      </h1>
    </div>
  );
}

export default Title;
