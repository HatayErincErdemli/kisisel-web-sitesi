import React, { useContext } from "react";
import { MyContext } from "../contexts/Context";

function Projects() {
  const { langData } = useContext(MyContext);
  return (
    <div className="bg-[#cbf180] dark:bg-[#19210a] px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 pt-12 sm:pt-20 flex flex-col gap-y-6">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#4731d2] dark:text-[#cbf180] font-bold">
        {langData.projects.title}
      </h2>
      <div>
        {langData.projects.projects_items.map(
          (
            { img, name, about_content, site_url, github_url, site, github },
            index
          ) => {
            return (
              <div
                className="bg-white rounded-xl shadow-md mb-8 flex flex-row max-xl:flex-col overflow-hidden"
                key={index}
              >
                <img
                  className="w-full xl:max-w-md xl:rounded-l-xl xl:rounded-tr-none rounded-t-xl border-b xl:border-b-0 xl:border-r border-black object-cover"
                  src={img}
                  alt={name}
                />
                <div className="w-full px-4 sm:px-8 lg:px-12 py-6 sm:py-8 flex flex-col items-start justify-around gap-4 dark:bg-[#292826]">
                  <p className="text-[#4731d2] dark:text-[#c7bff1] text-xl sm:text-2xl font-bold">
                    {name}
                  </p>
                  <p className="text-base sm:text-lg dark:text-white">{about_content}</p>
                  <div className="text-white flex flex-wrap items-center gap-2">
                    <a
                      className="bg-[#4731d2] dark:bg-[#c7bff1] rounded-3xl px-4 sm:px-5 py-1 text-sm sm:text-base"
                      href="https://tr.react.dev"
                    >
                      react
                    </a>
                    <a
                      className="bg-[#4731d2] dark:bg-[#c7bff1] rounded-full px-4 sm:px-5 py-1 text-sm sm:text-base"
                      href="https://redux.js.org"
                    >
                      redux
                    </a>
                    <a
                      className="bg-[#4731d2] dark:bg-[#c7bff1] rounded-full px-4 sm:px-5 py-1 text-sm sm:text-base"
                      href="https://vercel.com"
                    >
                      vercel
                    </a>
                  </div>
                  <div className="flex flex-row flex-wrap gap-4 sm:gap-8">
                    <a
                      className="underline decoration-solid font-semibold dark:text-[#cbf180]"
                      href={site_url}
                    >
                      {site}
                    </a>
                    <a
                      className="underline decoration-solid font-semibold dark:text-[#cbf180]"
                      href={github_url}
                    >
                      {github}
                    </a>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
