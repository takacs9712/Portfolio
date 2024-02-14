import React from "react";
import WorkItem from "./WorkItem";
import data from "../data/Data.json";

const About = () => {
  return (
    <div
      id="about"
      className="max-w-screen-lg m-auto md:pl-20 py-8 px-4 md:px-8"
    >
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Work
      </h1>
      {data.map((item, index) => (
        <WorkItem
          key={index}
          index={index}
          company={item.company}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
          link={item.link}
        />
      ))}
    </div>
  );
};

export default About;
