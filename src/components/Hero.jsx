import React, { useContext } from "react";
import "../App.css";
import { MyContext } from "../contexts/Context";

function Hero() {
  const { toggleDarkMode, darkMode, changeLang, lang, langData } =
    useContext(MyContext);

  return (
    <div
      id={darkMode ? "div2" : "div1"}
      className="w-full flex flex-col flex-wrap justify-between px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60"
    >
      <div className="flex flex-col sm:flex-row flex-wrap items-end sm:justify-end gap-4 pt-4">
        {lang === "tr" ? (
          <button
            onClick={() => changeLang()}
            className="text-sm sm:text-base text-[#cbf180] dark:text-[#b7aee3] font-bold"
          >
            SWITCH
            <span className="text-white dark:text-gray-600"> TO ENGLISH</span>
          </button>
        ) : (
          <button
            onClick={() => changeLang()}
            className="text-sm sm:text-base text-[#cbf180] dark:text-[#b7aee3] font-bold"
          >
            TÜRKÇE<span className="text-white dark:text-gray-600">'YE GEÇ</span>
          </button>
        )}
        <div className="flex flex-row items-center space-x-2">
          <label className="switch">
            <input onClick={() => toggleDarkMode()} type="checkbox" />
            <span className="slider round"></span>
          </label>
          {!darkMode ? (
            <p className="text-sm sm:text-base text-indigo-900 font-bold">
              DARK MODE
            </p>
          ) : (
            <p className="text-sm sm:text-base text-white font-bold">
              LIGHT MODE
            </p>
          )}
        </div>
      </div>
      <div className="m-0 pt-4 pb-4 sm:pb-8 flex flex-row items-center justify-between">
        <p className="text-2xl sm:text-3xl text-[#cbf180] font-bold">
          {langData.hero.profile_name}
        </p>
      </div>

      <div className="pt-8 pb-20 md:pb-32 lg:pb-40 flex flex-row items-center justify-between content-center max-xl:flex-col max-xl:gap-8">
        <div className="flex flex-col gap-6 sm:gap-8 m-0 max-w-md w-full">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#cbf180] font-bold max-xl:text-center">
            {langData.hero.intro}
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white max-xl:text-center">
            {langData.hero.intro_2}
          </p>
          <div className="flex text-base sm:text-xl text-indigo-800 flex-row flex-wrap items-center gap-4 max-xl:justify-center">
            <a href="https://github.com/HatayErincErdemli">
              <button className="px-3 py-2 border border-solid border-indigo-800 dark:border-white bg-white dark:bg-[#242128] rounded-md flex flex-row items-center space-x-2">
                <i className="fa-brands fa-github text-indigo-800 dark:text-white text-xl sm:text-2xl"></i>
                <p className="text-indigo-800 dark:text-white">Github</p>
              </button>
            </a>
            <a href="https://www.linkedin.com/in/hatay-erinç-erdemlili-a2b5b5332">
              <button className="px-3 py-2 border border-solid border-indigo-800 dark:border-white bg-white dark:bg-[#242128] rounded-md flex flex-row items-center space-x-2">
                <i className="fa-brands fa-linkedin-in text-indigo-800 dark:text-white text-xl sm:text-2xl"></i>
                <p className="text-indigo-800 dark:text-white">Linkedin</p>
              </button>
            </a>
          </div>
        </div>
        <div>
          <img
            src={langData.hero.profile_img}
            alt=""
            className="m-0 p-0 size-56 sm:size-64 lg:size-72 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
