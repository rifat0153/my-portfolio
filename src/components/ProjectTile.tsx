import React from "react";

export interface Project {
  tech: string;
  image: string;
}

const ProjectTile: React.FC<Project> = (
  props: Project
): JSX.Element => {
  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full align-text-bottom">
        <img
          className="absolute z-0 max-h-56 w-full object-cover"
          src={props.image}
          alt={props.tech}
        />
        <p className="absolute z-10 text-4xl font-bold bg-blue-400">
          {props.tech}
        </p>
      </div>
    </div>
  );
};

export default ProjectTile;
