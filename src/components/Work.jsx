import React from "react";
import WorkItem from "./WorkItem";

const data = [
  {
    year: "2020 - ",
    title: "Front End Developer",
    duration: "5 years",
    details: "NeoWeb, Germany (Remote)",
  },
  {
    year: "2023 -",
    title: "Front End Developer",
    duration: "2 years",
    details: "Freelance Developer",
  },
  {
    year: "2020 - 2022",
    title: "Javascript Tutor",
    duration: "2 years",
    details: "IB course, Newton’s free school",
  },
];
const Work = () => {
  return (
    <div id="work" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-primary pb-16">
        Job experience
      </h1>
      {data.map((item, idx) => (
        <WorkItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Work;
