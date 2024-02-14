import React from "react";
import { GitHubButton } from "./buttons/SocialButtons";

const ProjectItem = ({ img, title, inProgress }) => {
  return (
    <div className="relative flex items-center justify-center rounded-xl shadow-xl shadow-gray-400 bg-white group hover:bg-blue-500 hover:-translate-y-2 duration-200">
      <img
        src={img}
        alt="/"
        className="rounded-xl group-hover:opacity-0 h-full w-full object-contain"
      />
      <div className="hidden group-hover:block absolute top-[20%] left-[50%] translate-x-[-50%]">
        <h3 className="text-lg font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        {inProgress && (
          <p className="flex text-xs font-bold justify-center text-white  rounded-md px-2 py-1 mt-2">
            ...In Progress
          </p>
        )}
        <div className="flex justify-center gap-4 mt-10">
          <GitHubButton />
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
