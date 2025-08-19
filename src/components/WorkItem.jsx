import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <div className="relative pl-6">
      <div className="absolute left-0 top-2 h-2 w-2 rounded-full bg-bttn" />
      <div className="border-l border-white/15 pl-4">
        <p className="flex flex-wrap gap-3 items-center text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-bttn rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-primary">{title}</span>
          <span className="text-sm text-primary/70">{duration}</span>
        </p>
        <p className="mt-2 text-primary/85">{details}</p>
      </div>
    </div>
  );
};

export default WorkItem;
