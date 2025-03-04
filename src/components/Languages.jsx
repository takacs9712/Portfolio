import React from "react";
import html from "../assets/lg/html.png";
import css from "../assets/lg/css.png";
import js from "../assets/lg/js.png";
import typescript from "../assets/lg/typescript.png";
import react from "../assets/lg/react.png";
import thumb from "../assets/lg/thumb.webp";
import bootstrap from "../assets/lg/bootstrap.webp";
import material from "../assets/lg/material.webp";
import astro from "../assets/lg/astro.webp";
import vite from "../assets/lg/vite.webp";
import node from "../assets/lg/node.webp";
import express from "../assets/lg/express.webp";

const Languages = () => {
  const technologies = [
    {
      name: "HTML",
      image: html,
    },
    {
      name: "CSS",
      image: css,
    },
    {
      name: "JavaScript",
      image: js,
    },
    {
      name: "TypeScript",
      image: typescript,
    },
    {
      name: "React",
      image: react,
    },
    {
      name: "Astro",
      image: astro,
    },
    {
      name: "Vite",
      image: vite,
    },
    {
      name: "Tailwind CSS",
      image: thumb,
    },
    {
      name: "Bootstrap",
      image: bootstrap,
    },
    {
      name: "Material UI",
      image: material,
    },
    {
      name: "Node JS",
      image: node,
    },
    {
      name: "Express JS",
      image: express,
    },
  ];

  return (
    <section id="languages" className="py-20 ">
      <div className="max-w-[1240px] mx-auto px-6 text-center">
        <h1 className="text-4xl font-bold text-[#001b5e] mb-12">
          Web Development Tools & Frameworks
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6"
            >
              <div className="flex flex-col items-center justify-center h-full">
                <img
                  src={tech.image}
                  alt={tech.name}
                  className="w-20 h-20 mb-6 object-contain"
                />
                <h3 className="text-xl font-semibold text-[#001b5e]">
                  {tech.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Languages;
