import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { BsArrowsAngleContract } from "react-icons/bs";

type Props = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

const navItems: string[] = ["Home", "My Work", "Clients"];

const Header = (props: Props) => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  return (
    <header
      className="fixed inset-x-0 z-50 mx-auto flex 
                 max-w-7xl flex-col items-baseline justify-between 
                 bg-body/95 py-4 px-4   
                text-gray-100 lg:flex-row lg:items-center
                 
                "
    >
      {/* First Section */}
      <div
        className="flex w-full transform  justify-between  pl-4 text-lg font-bold 
                      transition-all duration-500 ease-in-out md:pl-0 lg:text-xl"
      >
        <div>Mahbubur Rahman</div>
        <button className="flex lg:hidden" onClick={() => setisOpen(!isOpen)}>
          {isOpen ? (
            <BsArrowsAngleContract />
          ) : (
            <RiMenu3Line color="bg-white" />
          )}
        </button>
      </div>

      {/* Second Section */}
      <div
        className={`flex w-full flex-col items-start px-4 lg:flex-row lg:items-center lg:px-0 
                    ${isOpen ? "" : "hidden flex-col lg:flex"}
                   font-xl 
                   justify-around`}
      >
        {navItems.map((item) => (
          <div
            onClick={() => props.setActiveSection(item)}
            className="mr-0 py-2 decoration-theme hover:underline hover:underline-offset-8 lg:mr-4 lg:py-0"
          >
            {item}
          </div>
        ))}
        <div
          className="rounded-sm  bg-theme px-8 py-2 font-bold  
                      hover:bg-theme/80"
          onClick={() => props.setActiveSection("hire")}
        >
          Hire me
        </div>
      </div>
    </header>
  );
};

export default Header;
