import React from "react";
import WorkItem from "./WorkItem";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { Asterisk, Folder } from "./Decor";

const data = [
  {
    year: "2020 – Present",
    title: "Full-Stack Developer",
    duration: "5+ years",
    details: "NeoWeb, Germany (Remote)",
  },
  {
    year: "2023 – Present",
    title: "Front-End / Full-Stack Developer",
    duration: "Freelance",
    details: "Independent client projects",
  },
  {
    year: "2025",
    title: "Full-Stack Developer",
    duration: "<1 year",
    details: "ONVU Technologies (Remote)",
  },
  {
    year: "2025",
    title: "Full-Stack Developer",
    duration: "<1 year",
    details: "Onchained.AI (Remote)",
  },
  {
    year: "2024 – 2025",
    title: "Full-Stack Developer",
    duration: "<1 year",
    details: "Asia Pacific Trading (Remote)",
  },
  {
    year: "2020 – 2022",
    title: "JavaScript Tutor",
    duration: "2 years",
    details: "IB course, Newton’s Free School",
  },
];

const Work = () => {
  return (
    <section id="work" className="sm:max-w-[90vw] max-w-[96vw] m-auto py-16 md:py-24">
      <div className="relative rounded-card border-2 border-ink bg-paper p-6 md:p-12 shadow-hard overflow-hidden">
        <Parallax
          speed={0.26}
          className="pointer-events-none absolute -z-10 -left-16 top-4"
        >
          <div className="h-60 w-60 rounded-full bg-sky/25 blur-[60px]" />
        </Parallax>

        <div className="flex items-start justify-between">
          <span className="eyebrow">experience</span>
          <span className="eyebrow">2020 — present</span>
        </div>

        <div className="relative mt-6 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="display text-[13vw] sm:text-6xl md:text-8xl text-ink">Experience</h2>
          </Reveal>
          <Parallax speed={0.18} className="pointer-events-none absolute right-0 -top-4 hidden lg:block">
            <Folder label="cv" rotate={6} />
          </Parallax>
          <Asterisk className="pointer-events-none absolute left-2 top-0 hidden h-10 w-10 text-ink/20 lg:block" spin />
        </div>

        <div className="mt-10">
          {data.map((item, idx) => (
            <Reveal key={idx} delay={idx * 60}>
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
