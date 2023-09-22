import React from "react";

const TechInfoPanel = ({ technology }) => {
  return (
    <div className="bg-stone-100 p-4 rounded-lg shadow-xl mb-4 text-left">
      <h2 className="text-lg font-semibold mb-2">{technology}</h2>
    </div>
  );
};

export default TechInfoPanel;
