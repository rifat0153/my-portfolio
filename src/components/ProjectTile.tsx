import React from "react";

export interface Project {
  tech: string;
  image: string;
}

const ProjectTile: React.FC<Project> = (
  props: Project
): JSX.Element => {
  return (
    <div className="relative group w-full h-full  rounded-2xl overflow-hidden">
      <img
        className="object-cover w-full h-full 
                   group-hover:scale-125 transition-all duration-500 ease-in-out transform"
        src={props.image}
        alt={props.tech}
      />
      <div
        className="absolute flex h-full w-full justify-center items-center  
                   top-0 inset-x-0  text-center leading-4"
      >
        <p
          className="text-white/50 drop-shadow-2xl shadow-orange-800 font-extrabold text-4xl 
                      group-hover:scale-x-90 transition-all duration-500 ease-in-out transform"
        >
          {props.tech}
        </p>
      </div>
    </div>
  );
};

export default ProjectTile;
