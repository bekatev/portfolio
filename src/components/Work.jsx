import React from "react";
import WorkItem from "./WorkItem";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const data = [
  {
    year: "2020 - ",
    title: "Front-End Developer",
    duration: "5 years",
    details: "NeoWeb, Germany (Remote)",
  },
  {
    year: "2025",
    title: "Front-End Developer",
    duration: "<1 year",
    details: "ONVU Technologies",
  },
  {
    year: "2025",
    title: "Front-End Developer",
    duration: "<1 year",
    details: "Onchained.AI",
  },
  {
    year: "2024",
    title: "Front-End Developer",
    duration: "<1 year",
    details: "Asia Pacific Trading",
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
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10 overflow-hidden">
        <Parallax
          speed={0.26}
          className="pointer-events-none absolute -z-10 -left-16 top-4"
        >
          <div className="h-60 w-60 rounded-full bg-bttn/20 blur-[50px]" />
        </Parallax>
        <Parallax
          speed={0.14}
          className="pointer-events-none absolute -z-10 right-1/5 -bottom-10"
        >
          <div className="h-40 w-40 rounded-full bg-white/12 blur-3xl" />
        </Parallax>
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-semibold text-primary text-center mb-10 tracking-tight">
            Experience
          </h2>
        </Reveal>
        <div className="space-y-6">
          {data.map((item, idx) => (
            <Reveal key={idx} delay={idx * 80}>
              <WorkItem
                year={item.year}
                title={item.title}
                duration={item.duration}
                details={item.details}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
