import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="flex justify-between items-center py-8  text-gray-100 mx-auto max-w-7xl">
      <div className="text-xl font-bold">Mahbubur Rahman</div>
      <div className="flex w-1/3 justify-around bg-blue-500">
        <div>Home</div>
        <div>My Work</div>
        <div>Clients</div>
        <div>Hire me</div>
      </div>
    </header>
  );
};

export default Header;
