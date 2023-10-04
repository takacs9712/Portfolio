import React from "react";
import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import Screen1 from "../assets/projects/FoodOrder/Screen1.png";
import placeholder from "../assets/placeholder.png";
import Syncee1 from "../assets/Syncee1.png";
import animal from "../assets/animal.png";
import uploader from "../assets/uploader.png";
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
    <div id="projects" className="max-w-[1080px] m-auto md:pl20 p-4 py-16 mb-6">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects - Major Initiatives
      </h1>
      <h1 className="text-2xl font-bold text-center text-[#001b5e] mt-8">
        For GitHub Repository Access - Contact Me Now!
      </h1>
      <div className="grid sm:grid-cols-2 gap-6 mt-16">
        <Link to="/Portfolio/Syncee" target="_blank">
          <ProjectItem img={Syncee1} title="Syncee - App copy" />
        </Link>
        <Link to="/Portfolio/Animal" target="_blank">
          <ProjectItem img={animal} title="Animal Shelter" />
        </Link>
        <Link to="/Portfolio/ImageUpload" target="_blank">
          <ProjectItem img={uploader} title="Image Upload/Download" />
        </Link>
        <Link to="/Portfolio/FoodOrder" target="_blank">
          <ProjectItem img={Screen1} title="Restaurant" />
        </Link>
        <ProjectItem img={placeholder} title="In Progress..." />
        <ProjectItem img={placeholder} title="In Progress..." />
      </div>
      <button
        onClick={handleGetAccessClick}
        type="button"
        className="bg-[#001b5e] text-gray-100 mt-6 w-full p-4 rounded-lg hover:bg-sky-700"
      >
        Get Access
      </button>
    </div>
  );
};

export default Projects;
