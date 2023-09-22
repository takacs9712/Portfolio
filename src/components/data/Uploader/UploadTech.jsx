import React from "react";
import TechInfoPanel from "./TechInfoPanel";
import techData from "./data";

function UploadTech() {
  return (
    <div className=" p-4 text-left bg-slate-300 py-10 px-12">
      <h1 className="text-3xl font-semibold mb-4 text-black">
        Technologies & Libraries Used
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {techData.map((tech, index) => (
          <TechInfoPanel key={index} {...tech} />
        ))}
      </div>
    </div>
  );
}

export default UploadTech;
