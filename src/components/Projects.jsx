import React from "react";
import PMSolutionsdemo from "../assets/PMSolutionsdemo.webp";
import Restaurant from "../assets/Restaurant.webp";
import Syncee1 from "../assets/Syncee1.webp";
import animal from "../assets/animal.webp";
import uploader from "../assets/uploader.webp";
import Lottokeeper from "../assets/Lottokeeper.webp";
import TharanisERP from "../assets/tharanis.webp";
import DreamStay from "../assets/dream.webp";
import MK from "../assets/logo.jpg";

const Projects = () => {
  const projects = [
    {
      img: DreamStay,
      title: "DreamStay Apartment",
      description:
        "A beautiful apartment located in Austria, offering a cozy and convenient stay for travelers.",
    },
    {
      img: MK,
      title: "Molnár Krisztina Kozmetikus",
      description:
        "A portfolio application for Molnár Krisztina's beauty and cosmetic services as a sole proprietor.",
    },
    {
      img: TharanisERP,
      title: "Tharanis ERP",
      description: "A powerful ERP solution to streamline business processes.",
    },
    {
      img: Restaurant,
      title: "Restaurant (Hobby)",
      description:
        "An efficient solution for managing restaurant menus, reservations, and orders.",
    },
    {
      img: Lottokeeper,
      title: "Lottokeeper (Hobby)",
      description:
        "A platform for participating in the 5-number lottery, allowing users to easily play and manage their tickets.",
    },
    {
      img: PMSolutionsdemo,
      title: "P&M Solutions Bt.",
      description: "Corporate website for P&M Solutions Bt.",
    },
  ];

  return (
    <div className="bg-[#f6f8fc] py-16 px-4">
      <div id="projects" className="max-w-[1080px] m-auto py-16 mb-6">
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-10">
          Recent Projects
        </h1>
        <ul className="space-y-6">
          {projects.map((project, index) => (
            <li
              key={index}
              className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-md hover:bg-[#eef2f7] transition duration-200"
            >
              {project.img && (
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
              )}
              <div>
                <h3 className="text-xl font-bold text-[#001b5e] mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700">{project.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
