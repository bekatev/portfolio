import React from "react";

const WorkItem = ({ year, title, duration, details }) => {
  return (
    <div className="group grid gap-2 border-t-2 border-ink/20 py-5 md:grid-cols-[minmax(0,180px)_1fr_auto] md:items-baseline md:gap-6">
      <span className="inline-flex w-fit rounded-full border-2 border-ink px-3 py-1 text-xs md:text-sm text-ink">
        {year}
      </span>
      <div>
        <h3 className="display text-2xl md:text-3xl text-ink">{title}</h3>
        <p className="mt-1 text-ink/70 text-sm md:text-base">{details}</p>
      </div>
      <span className="eyebrow md:text-right">{duration}</span>
    </div>
  );
};

export default WorkItem;
