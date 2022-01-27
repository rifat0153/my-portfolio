import React from "react";

export interface Project {
  tech: string;
  image: string;
}

const ProjectTile: React.FC<Project> = (
  props: Project
): JSX.Element => {
  return (
    <div className="relative w-full h-full  overflow-hidden">
      <img
        className="object-cover w-full h-full"
        src={props.image}
        alt={props.tech}
      />
      <div className="absolute w-full py-3.5 bottom-0 inset-x-0 bg-white/30 text-black font-bold text-md text-center leading-4">
        {props.tech}
      </div>
    </div>
  );
};

export default ProjectTile;
