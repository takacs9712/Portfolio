import React from "react";
import ProjectItem from "./ProjectItem";
import placeholder from "../assets/placeholder.webp";
import Restaurant from "../assets/Restaurant.webp";
import Syncee1 from "../assets/Syncee1.webp";
import animal from "../assets/animal.webp";
import uploader from "../assets/uploader.webp";
import Lottokeeper from "../assets/Lottokeeper.webp";
import { useSubject } from "./SubjectContext";

const Projects = () => {
  const { setSubject } = useSubject();

  const handleGetAccessClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }

    setSubject("Github Access");
  };

  return (
    <>
      <div className="bg-[#f6f8fc] py-16">
        <div id="projects" className="max-w-[1080px] m-auto py-16 mb-6">
          <div className="flex justify-center ">
            <h1 className="text-4xl font-bold text-center text-[#001b5e] ">
              My Recent Projects
            </h1>
          </div>
          <div className="grid sm:grid-cols-3 gap-6 mt-10">
            <ProjectItem img={Syncee1} title="Syncee - App copy" />
            <ProjectItem img={animal} title="Animal Shelter" />
            <ProjectItem img={uploader} title="Image Upload/Download" />
            <ProjectItem img={Restaurant} title="Restaurant" />
            <ProjectItem img={Lottokeeper} title="Lottokeeper" />
            <ProjectItem
              img={placeholder}
              title="P&M Solutions Bt. Company Website"
              inProgress={true}
            />
          </div>
          <button
            onClick={handleGetAccessClick}
            type="button"
            className="bg-blue-700 hover:bg-blue-800 text-gray-100 mt-6 w-full p-4 rounded-lg font-bold uppercase fontcase"
          >
            Get Access
          </button>
        </div>
      </div>
    </>
  );
};

export default Projects;
