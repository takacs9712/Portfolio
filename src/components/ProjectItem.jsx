import React from "react";

const ProjectItem = ({ img, title }) => {
  const handleMoreInfoClick = (event) => {
    event.preventDefault();
    alert(
      "If you would like to review the source code, please get in touch with the administrator for access."
    );
  };

  return (
    <div className="relative flex items-center justify-center h-60 w-[90%] shadow-xl shadow-gray-400 rounded-md group hover:bg-gradient-to-r from-gray-200 to-[#9fb3e7]">
      <img
        src={img}
        alt="/"
        className="rounded-xl group-hover:opacity-10 h-full w-auto object-contain"
      />
      <div className="hidden group-hover:block absolute top-[40%] left-[50%] translate-x-[-50%]">
        <h3 className="text-2xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            className="w-40 bg-cyan-900 text-white font-bold cursor-pointer text-lg py-3 px-6 rounded-lg mt-4 ml-4"
          >
            More info
          </button>
          <button
            className="w-40 bg-white text-gray-700 font-bold cursor-pointer text-lg py-3 px-6 rounded-lg mt-4"
            onClick={handleMoreInfoClick}
          >
            Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
