import React from "react";

type Props = {
  activeSection: String;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

const Header = (props: Props) => {
  return (
    <header
      className="flex bg-body/95 fixed inset-x-0 z-50 justify-between items-center py-4  
                text-gray-100 mx-auto max-w-7xl"
    >
      <div className="text-lg  lg:text-xl pl-4 md:pl-0 font-bold">
        Mahbubur Rahman
      </div>

      <div
        className="hidden lg:flex w-1/3 justify-around items-center
                   font-xl"
      >
        <div onClick={() => props.setActiveSection("home")}>Home</div>
        <div onClick={() => props.setActiveSection("work")}>
          My Work
        </div>
        <div onClick={() => props.setActiveSection("clients")}>
          Clients
        </div>
        <div
          className="bg-theme hover:bg-theme/80 font-bold px-8 py-2  
                      rounded-sm"
          onClick={() => props.setActiveSection("hire")}
        >
          Hire me
        </div>
      </div>
    </header>
  );
};

export default Header;
