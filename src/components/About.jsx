import React from "react";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section id="about" className="sm:max-w-[90vw] max-w-[96vw] m-auto py-12">
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10 overflow-hidden">
        <Parallax
          speed={0.28}
          className="pointer-events-none absolute -z-10 -right-20 top-0"
        >
          <div className="h-72 w-72 rounded-full bg-white/12 blur-[60px]" />
        </Parallax>
        <Parallax
          speed={0.16}
          className="pointer-events-none absolute -z-10 left-1/4 -bottom-12"
        >
          <div className="h-48 w-48 rounded-full bg-bttn/15 blur-3xl" />
        </Parallax>
        <Reveal>
          <h2 className="text-3xl md:text-5xl font-semibold text-primary mb-4 tracking-tight">
            About
          </h2>
        </Reveal>
        <Reveal>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            I am a web developer with over 5 years of professional experience,
            primarily focused on front-end development. Over this time, I have
            worked with modern frameworks and libraries such as React, Angular,
            and Vue, as well as projects built with pure HTML, CSS, and
            JavaScript. I have strong knowledge of JavaScript/TypeScript (ES6+)
            and experience with state management tools such as Redux.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            I am also skilled in frameworks and libraries like Next.js for
            server-side rendering and modern app development, and I frequently
            use styling solutions such as Tailwind CSS, Bootstrap, and Material
            UI. On the backend, I have practical experience with Node.js
            (Express.js) and PHP (Laravel/vanilla PHP), giving me a solid
            understanding of full-stack development.
          </p>
        </Reveal>
        <Reveal>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            I work confidently with Git and GitHub for version control,
            collaboration, and project management, ensuring clean workflows and
            smooth teamwork.
          </p>
        </Reveal>
        <Reveal>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            In the past year, I began integrating AI-assisted coding tools such
            as Cursor, Claude, and GPT-5 into my workflow, which has
            significantly improved both development speed and overall
            efficiency.
          </p>
        </Reveal>
        <Reveal>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            I have collaborated with companies and freelance clients across
            multiple regions of the world, consistently delivering high-quality
            results on time. I value clear communication, adaptability, and
            reliability, and I am always motivated to meet goals and exceed
            expectations.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
