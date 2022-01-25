import React from "react";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div className="py-4 m-4 text-blue-50">
      <SectionTile />
    </div>
  );
};

const SectionTile = (): JSX.Element => {
  return (
    <div>
      <div className="h-2 w-12 bg-theme rounded-3xl"></div>
      <p className="text-4xl py-1 font-bold">My Work</p>
    </div>
  );
};

export default ProjectSection;
