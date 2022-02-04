import React from "react";
import { FiEye } from "react-icons/fi";
import AppImage from "../assets/app-dev-1.png";
import { openInNewTab } from "../utils/url_helper";

type Props = {};

const HomeSection = (props: Props) => {
  return (
    <div
      className="grid h-home grid-cols-1  items-center text-gray-100 
                 sm:grid-cols-2"
    >
      {/* 1st Column */}
      <div className=" px-4 text-5xl font-extrabold md:text-7xl lg:px-24">
        <p>Building</p>
        <p>beautiful app experiences.</p>
        <div
          className="mt-8 flex w-fit items-center justify-center bg-theme px-8 text-sm  
                       hover:bg-theme/80 lg:text-lg"
          onClick={() => openInNewTab("https://github.com/rifat0153")}
        >
          <FiEye className="h-6 w-6" />
          <button className=" py-4 pl-4 font-bold">View my work.</button>
        </div>
      </div>

      {/* 2nd Column */}
      <div>
        <img
          src={AppImage}
          alt="app-development"
          className="w-full  bg-transparent"
        />
      </div>
    </div>
  );
};

export default HomeSection;
