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
    year: "2025 - 2025",
    title: "Front End Developer",
    duration: "1 year",
    details: "Onchained.AI",
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
    <section id="work" className="sm:max-w-[90vw] max-w-[96vw] m-auto py-12">
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center mb-10">Experience</h2>
        <div className="space-y-6">
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
      </div>
    </section>
  );
};

export default Work;
