import React from "react";

export type Project = {
  tech: string;
  image: string;
};

const ProjectTile: React.FC<Project> = (
  props: Project
): JSX.Element => {
  return (
    <div className="group relative h-full w-full  overflow-hidden">
      <img
        className="h-full w-full transform 
                   object-cover transition-all duration-500 ease-in-out group-hover:scale-110"
        src={props.image}
        alt={props.tech}
      />
      <div
        className="invisible absolute  inset-x-0  bottom-0 flex
                 w-full items-center justify-center  
                   bg-white/30 text-center  leading-4 group-hover:visible
                   
                   "
      >
        <p
          className="invisible text-2xl font-extrabold
                      text-black duration-500
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
