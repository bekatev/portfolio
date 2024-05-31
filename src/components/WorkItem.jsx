import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <div>
      <ol className="flex flex-col md:flex-row relative border-l border-txt">
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 bg-txt" />
          <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
            <span className="inline-block px-2 py-1 font-semibold text-white bg-primary rounded-md">
              {year}
            </span>
            <span className="text-lg font-semibold text-primary">{title}</span>
            <span className="my-1 text-sm font-normal leading-none text-primary">
              {duration}
            </span>
          </p>
          <p className="my-2 text-base font-normal text-bttn">{details}</p>
        </li>
      </ol>
    </div>
  );
};

export default WorkItem;
