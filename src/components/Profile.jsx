import React, { useContext } from "react";
import { MyContext } from "../contexts/Context";

function Profile() {
  const { langData } = useContext(MyContext);
  return (
    <div className="w-full flex flex-col items-start px-4 sm:px-8 md:px-16 lg:px-32 xl:px-60 pt-10 pb-12 sm:pb-20 gap-6 sm:gap-8 bg-[#4731d2] dark:bg-[#171042]">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-[#cbf180] font-bold pt-6 sm:pt-10">
        {langData.profile.title}
      </h2>

      <div className="flex flex-row justify-between w-full h-full max-xl:flex-col max-xl:gap-8">
        <div className="flex flex-col gap-6 sm:gap-8 w-full">
          <p className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
            {langData.profile.info}
          </p>
          <div>
            {langData.profile.info_items.map(({ title, answer }, index) => {
              return (
                <div
                  className="skills-items flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 sm:gap-4 mb-5"
                  key={index}
                >
                  <p className="text-base sm:text-lg font-semibold text-[#cbf180] shrink-0">
                    {title}
                  </p>
                  <p className="text-base sm:text-lg sm:text-right text-white">
                    {answer}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            className="rounded-md size-56 sm:size-64 lg:size-72"
            src={langData.hero.profile_img}
            alt=""
          />
        </div>
        <div className="flex flex-col text-white justify-start gap-4 sm:gap-8 w-full">
          <p className="text-xl sm:text-2xl lg:text-3xl font-semibold">
            {langData.profile.about}
          </p>
          <p className="text-base sm:text-lg lg:text-xl">{langData.profile.about_content}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
