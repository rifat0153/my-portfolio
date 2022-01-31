import React, { useState } from "react";

type Props = {
  activeSection: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
};

const navItems: string[] = ["Home", "My Work", "Clients"];

const Header = (props: Props) => {
  const [isOpen, setisOpen] = useState<boolean>(false);

  return (
    <header
      className="flex py-4 px-4 flex-col lg:flex-row 
                 items-baseline lg:items-center bg-body/95 fixed 
                 inset-x-0 z-50 justify-between   
                text-gray-100 mx-auto max-w-7xl
                 transition-all duration-500 ease-in-out transform
                "
    >
      {/* First Section */}
      <div className="text-lg flex w-full  justify-between  lg:text-xl pl-4 md:pl-0 font-bold">
        <div>Mahbubur Rahman</div>
        <button
          className="flex lg:hidden"
          onClick={() => setisOpen(!isOpen)}
        >
          open
        </button>
      </div>

      {/* Second Section */}
      <div
        className={`flex flex-col w-full lg:w-1/3 items-start lg:items-center lg:flex-row 
                    ${isOpen ? "" : "hidden lg:flex flex-col"}
                   justify-around 
                   font-xl`}
      >
        {navItems.map((item) => (
          <div
            onClick={() => props.setActiveSection(item)}
            className="hover:underline hover:underline-offset-8 decoration-theme
                        "
          >
            {item}
          </div>
        ))}
        <div
          className="bg-theme  hover:bg-theme/80 font-bold px-8 py-2  
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
