import React from "react";

const WorkItem = ({ year, company, title, duration, details, link }) => {
  return (
    <ol className="flex flex-col md:flex-row  relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-300 rounded-full mt-1.5 -left-1.5 border-white" />
        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-bold text-[#001b5e]">{company}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <span className="my-2 text-lg font-bold text-[#001b5e]">{title}</span>
        <ul className="list-disc pl-4 mt-2 text-sm font-normal text-stone-500">
          {Array.isArray(details) ? (
            details.map((detailItem, index) => (
              <li key={index}>{detailItem}</li>
            ))
          ) : (
            <li>{details}</li>
          )}
        </ul>
        <a
          href={link}
          target="_blank"
          className="text-blue-500 hover:text-blue-800"
        >
          Company Website
        </a>
      </li>
    </ol>
  );
};

export default WorkItem;
