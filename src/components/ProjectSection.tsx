import React from "react";
import porjectList from "../data/projectList";
import ProjectTile from "./ProjectTile";

type Props = {};

const ProjectSection = (props: Props) => {
  return (
    <div className="m-4 py-4 text-blue-50">
      <SectionTitle title="My Work" />
    </div>
  );
};

const SectionTitle: React.FC<{ title: string }> = (
  props
): JSX.Element => {
  return (
    <div>
      {/* Title and SubTitle */}
      <div className="bg-theme h-2 w-12 rounded-3xl"></div>
      <p className="py-1 text-3xl font-bold">My Work</p>
      <p className="mt-4 text-xl text-slate-400">
        I’ve had the pleasure of working with multiple companies,
        designing and
      </p>
      <p className="mb-8 text-xl  text-slate-400">
        implementing both frontend and backend.
      </p>

      {/* Project Showcase */}
      <div className="mt-6 mb-48 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
        {porjectList.map((project) => (
          <div key={project.image} className="h-[80vh] w-full">
            <ProjectTile tech={project.tech} image={project.image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;
