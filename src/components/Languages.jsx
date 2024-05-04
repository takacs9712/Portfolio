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
  const frontendLanguages = [
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
    <>
      <div
        id="languages"
        className="container mx-auto py-20 px-4 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
      >
        <h1 className="text-4xl font-bold mb-10 text-center text-[#001b5e] ">
          Web Development Tools and Frameworks
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 justify-items-center">
          {frontendLanguages.map((language, index) => (
            <div
              key={index}
              className="bg-white rounded shadow-md h-64 p-6 sm:p-10 flex flex-col justify-between"
            >
              <img
                src={language.image}
                alt={language.name}
                className="w-full h-32 sm:h-32 md:h-40 object-cover mb-4"
              />
              <p className="text-lg font-semibold text-center">
                {language.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Languages;
