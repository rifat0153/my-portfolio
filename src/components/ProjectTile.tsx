import React from "react";

export type Project = {
  tech: string;
  image: string;
};

const ProjectTile: React.FC<Project> = (
  props: Project
): JSX.Element => {
  return (
    <div className="relative group w-full h-full  overflow-hidden">
      <img
        className="object-cover w-full h-full 
                   group-hover:scale-110 transition-all duration-500 ease-in-out transform"
        src={props.image}
        alt={props.tech}
      />
      <div
        className="absolute flex  w-full  invisible group-hover:visible
                 bg-white/30 justify-center items-center  
                   bottom-0 inset-x-0  text-center leading-4
                   
                   "
      >
        <p
          className="text-black font-extrabold text-2xl
                      invisible duration-500
                      group-hover:visible
                      group-hover:scale-x-90  "
        >
          {props.tech}
        </p>
      </div>
    </div>
  );
};

export default ProjectTile;
