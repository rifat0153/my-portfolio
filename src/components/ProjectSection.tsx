import React from "react";
import porjectList from "../data/projectList";
import ProjectTile from "./ProjectTile";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div className="py-4 m-4 text-blue-50">
      <SectionTitle title="My Work" />
    </div>
  );
};

const SectionTitle: React.FC<{ title: String }> = (
  props
): JSX.Element => {
  return (
    <div>
      {/* Title and SubTitle */}
      <div className="h-2 w-12 bg-theme rounded-3xl"></div>
      <p className="text-3xl py-1 font-bold">My Work</p>
      <p className="mt-4 text-xl text-slate-400">
        I’ve had the pleasure of working with multiple companies,
        designing and
      </p>
      <p className="mb-8 text-xl text-slate-400">
        implementing both frontend and backend.
      </p>

      {/* Project Showcase */}
      <div className="mt-6 mb-48 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        {porjectList.map((project) => (
          <div key={project.image} className="w-full h-64">
            <ProjectTile tech={project.tech} image={project.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
