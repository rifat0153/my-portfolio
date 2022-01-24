import React from "react";
import AppImage from "../assets/app-dev-1.png";

type Props = {};

const HomeSection = (props: Props) => {
  return (
    <div
      className="grid grid-cols-2  text-gray-100 items-center 
                 h-home"
    >
      {/* 1st Column */}
      <div className="text-3xl px-4 md:text-7xl font-extrabold">
        <p>Building</p>
        <p>beautiful app experiences.</p>
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
