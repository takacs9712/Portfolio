import React from "react";
import WorkItem from "./WorkItem";
import { workExperienceData } from "../data/Data";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-screen-lg m-auto md:pl-20 py-8 px-4 md:px-8"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Work
      </h1>
      {workExperienceData.map((experienceItem) => (
        <WorkItem key={experienceItem.index} {...experienceItem} />
      ))}
    </div>
  );
};

export default About;
