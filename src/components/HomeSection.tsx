import React from "react";

type Props = {};

const HomeSection = (props: Props) => {
  return (
    <div
      className="grid grid-cols-2  text-gray-100 items-center 
                 h-home bg-blue-800"
    >
      {/* 1st Column */}
      <div className="text-3xl px-4 md:text-7xl font-extrabold">
        <p>Building</p>
        <p>beautiful app experiences.</p>
      </div>

      {/* 2nd Column */}
      <div>Right Side</div>
    </div>
  );
};

export default HomeSection;
