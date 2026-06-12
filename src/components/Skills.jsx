import React, { useContext } from "react";
import { MyContext } from "../contexts/Context";

function Skills() {
  const { langData } = useContext(MyContext);
  return (
    <div className="w-full dark:bg-[#242128] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 pt-12 sm:pt-20 pb-10 items-start flex flex-wrap flex-row max-xl:flex-col max-xl:gap-8 max-lg:items-center">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#4731d2] dark:text-[#cbf180] font-bold mr-0 xl:mr-20">
        {langData.skills.title}
      </h2>
      <div className="flex flex-row flex-wrap justify-between w-full xl:w-3/4 gap-4">
        {langData.skills.skills_items.map(({ logo, name }, index) => {
          return (
            <div
              className="skills-items flex flex-row items-center justify-between space-x-4 px-4 sm:px-8 lg:px-28 pb-6 sm:pb-10"
              key={index}
            >
              <img className="size-16 sm:size-20 lg:size-24 rounded-md" src={logo} alt={name} />
              <p className="text-base sm:text-lg lg:text-xl text-gray-700 dark:text-white font-semibold">
                {name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
