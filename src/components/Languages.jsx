import React from "react";
import html from "../assets/lg/html.png";
import css from "../assets/lg/css.png";
import js from "../assets/lg/js.png";
import typescript from "../assets/lg/typescript.png";
import react from "../assets/lg/react.png";

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
  ];

  const frameworks = [
    {
      name: "React",
      image: react,
    },
  ];

  return (
    <>
      <div
        id="languages"
        className="container mx-auto mt-10 py-10 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg"
      >
        <h1 className="text-4xl font-bold mb-10 text-center">Languages</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 justify-items-center">
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

        <h1 className="text-4xl font-bold mb-10 mt-16 text-center">
          Frameworks
        </h1>
        <div className="flex justify-center justify-items-center">
          {frameworks.map((language, index) => (
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
