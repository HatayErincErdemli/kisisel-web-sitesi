import React, { useContext } from "react";
import { MyContext } from "../contexts/Context";

function Footer() {
  const { langData } = useContext(MyContext);

  return (
    <div className="bg-white dark:bg-[#242128] flex flex-col justify-between items-center gap-6 sm:gap-8 px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 py-12 sm:py-20">
      <h2 className="text-[#4731d2] dark:text-[#c7bff1] text-2xl sm:text-3xl lg:text-4xl font-bold text-center">
        {langData.footer.title}
      </h2>
      <p className="text-lg sm:text-xl lg:text-2xl text-center dark:text-white max-w-2xl">
        {langData.footer.intro}
      </p>
      <p className="text-[#4731d2] dark:text-[#c7bff1] text-base sm:text-lg font-medium underline decoration-solid break-all">
        {langData.footer.email}
      </p>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 items-center">
        <i className="fa-brands fa-twitter text-[#4731d2] dark:text-[#c7bff1] text-2xl"></i>
        <i className="fa-brands fa-codepen text-[#4731d2] dark:text-[#c7bff1] text-2xl"></i>
        <i className="fa-solid fa-at text-[#4731d2] dark:text-[#c7bff1] text-2xl"></i>
        <i className="fa-brands fa-instagram text-[#4731d2] dark:text-[#c7bff1] text-2xl"></i>
      </div>
    </div>
  );
}

export default Footer;
