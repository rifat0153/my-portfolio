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
      className="flex py-4 px-4 flex-col lg:flex-row 
                 items-baseline lg:items-center bg-body/95 fixed 
                 inset-x-0 z-50 justify-between   
                text-gray-100 mx-auto max-w-7xl
                 
                "
    >
      {/* First Section */}
      <div
        className="text-lg flex w-full  justify-between  lg:text-xl pl-4 md:pl-0 
                      font-bold transition-all duration-500 ease-in-out transform"
      >
        <div>Mahbubur Rahman</div>
        <button
          className="flex lg:hidden"
          onClick={() => setisOpen(!isOpen)}
        >
          {isOpen ? (
            <BsArrowsAngleContract />
          ) : (
            <RiMenu3Line color="bg-white" />
          )}
        </button>
      </div>

      {/* Second Section */}
      <div
        className={`flex flex-col px-4 lg:px-0 w-full lg:w-1/3 items-start lg:items-center lg:flex-row 
                    ${isOpen ? "" : "hidden lg:flex flex-col"}
                   justify-around 
                   font-xl`}
      >
        {navItems.map((item) => (
          <div
            onClick={() => props.setActiveSection(item)}
            className="py-2 lg:py-0 hover:underline hover:underline-offset-8 decoration-theme"
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

// import React, { useState } from "react";
// import { RiMenu3Line } from "react-icons/ri";
// import { BsArrowsAngleContract } from "react-icons/bs";

// type Props = {
//   activeSection: string;
//   setActiveSection: React.Dispatch<React.SetStateAction<string>>;
// };

// const navItems: string[] = ["Home", "My Work", "Clients"];

// const Header = (props: Props) => {
//   const [isOpen, setisOpen] = useState<boolean>(false);

//   return (
//     <header
//       className="flex py-4 px-4 flex-col lg:flex-row
//                  items-baseline lg:items-center bg-body/95 fixed
//                  inset-x-0 z-50 justify-between
//                 text-gray-100 mx-auto max-w-7xl
//                  transition-all duration-500 ease-in-out transform
//                 "
//     >
//       {/* First Section */}
//       <div className="text-lg flex w-full  justify-between  lg:text-xl pl-4 md:pl-0 font-bold">
//         <div>Mahbubur Rahman</div>
//         <button
//           className="flex lg:hidden"
//           onClick={() => setisOpen(!isOpen)}
//         >
//           {isOpen ? (
//             <BsArrowsAngleContract />
//           ) : (
//             <RiMenu3Line color="bg-white" />
//           )}
//         </button>
//       </div>

//       {/* Second Section */}
//       <div
//         className={`flex flex-col w-full p-4 lg:p-0 items-start lg:items-center lg:flex-row
//                     ${isOpen ? "" : "hidden lg:flex flex-col"}
//                    justify-around
//                    font-xl`}
//       >
//         {navItems.map((item) => (
//           <div
//             onClick={() => props.setActiveSection(item)}
//             className="py-2 lg:py-0 hover:underline hover:underline-offset-8 decoration-theme"
//           >
//             {item}
//           </div>
//         ))}
//         <div
//           className="mt-2 px-8 py-2 bg-theme  hover:bg-theme/80 font-bold
//                       rounded-sm"
//           onClick={() => props.setActiveSection("hire")}
//         >
//           Hire me
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;
