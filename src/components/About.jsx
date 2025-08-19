import React from "react";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section
      id="about"
      className="sm:max-w-[90vw] max-w-[96vw] m-auto py-12"
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10 overflow-hidden">
        <Parallax speed={0.28} className="pointer-events-none absolute -z-10 -right-20 top-0">
          <div className="h-72 w-72 rounded-full bg-white/12 blur-[60px]" />
        </Parallax>
        <Parallax speed={0.16} className="pointer-events-none absolute -z-10 left-1/4 -bottom-12">
          <div className="h-48 w-48 rounded-full bg-bttn/15 blur-3xl" />
        </Parallax>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">About</h2>
        </Reveal>
        <Reveal>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            Over the past five years, I’ve worked remotely as a front‑end developer, delivering responsive, user‑focused web applications. With a background in physics from the Free University of Tbilisi, I transitioned into web development early in my career, driven by a deep interest in building interactive, performant user interfaces.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            Working with international teams taught me to communicate clearly, manage time effectively, and deliver consistent results across time zones. I lead front‑end efforts where clean design, scalability, and maintainability are critical, adopting best practices in testing, accessibility, and performance.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
