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
            I am a full stack developer with more than 5 years of professional
            experience building responsive, high-performance web interfaces. I
            work confidently with HTML, CSS, JavaScript, and TypeScript, and
            ship production UIs with React, Vue, Angular, and Next.js. I also
            use state management tools such as Redux, Vuex, and Pinia when
            applications need scalable client-side architecture.
          </p>
        </Reveal>
        <Reveal delay={120}>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            I specialize in turning Figma designs into clean, fully responsive
            websites and landing pages. On the styling side I rely on Tailwind
            CSS, Bootstrap, and Material UI. I also work comfortably across the
            stack with Node.js (Express) and PHP (Laravel), which helps me
            deliver complete, production-ready solutions.
          </p>
        </Reveal>
        <Reveal>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            I use Git and GitHub daily for version control, collaboration, and
            clean delivery workflows with remote teams.
          </p>
        </Reveal>
        <Reveal>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            Over the past year I have integrated AI-assisted development tools
            such as Cursor, Claude, and ChatGPT into my workflow, which has
            improved both development speed and code quality.
          </p>
        </Reveal>
        <Reveal>
          <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
            I have collaborated with companies and freelance clients across
            multiple regions, consistently delivering high-quality results on
            time. I value clear communication, adaptability, and reliability —
            and I take ownership of front-end work from implementation through
            launch.
          </p>
        </Reveal>
      </div>
    </section>
  );
};

export default About;
