import React from "react";
import { FiEye } from "react-icons/fi";
import AppImage from "../assets/app-dev-1.png";
import { openInNewTab } from "../utils/url_helper";

type Props = {};

const HomeSection = (props: Props) => {
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2  text-gray-100 items-center 
                 h-home"
    >
      {/* 1st Column */}
      <div className=" text-5xl px-4 lg:px-24 md:text-7xl font-extrabold">
        <p>Building</p>
        <p>beautiful app experiences.</p>
        <div
          className="flex justify-center items-center bg-theme hover:bg-theme/80 mt-8 px-8 text-sm  
                       lg:text-lg w-fit"
          onClick={() => openInNewTab("https://github.com/rifat0153")}
        >
          <FiEye className="w-6 h-6" />
          <button className=" pl-4 py-4 font-bold">
            View my work.
          </button>
        </div>
      </div>

      {/* 2nd Column */}
      <div>
        <img
          src={AppImage}
          alt="app-development"
          className="bg-transparent  w-full"
        />
      </div>
    </div>
  );
};

export default HomeSection;
