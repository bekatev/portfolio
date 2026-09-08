import React from "react";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { Asterisk, Sparkle } from "./Decor";

const paragraphs = [
  "I am a full-stack developer with more than 5 years of professional experience building responsive, high-performance web applications. I work confidently with HTML, CSS, JavaScript, and TypeScript, and ship production UIs with React, Vue, Angular, and Next.js. I also use state management tools such as Redux, Vuex, and Pinia when applications need scalable client-side architecture.",
  "I specialize in turning Figma designs into clean, fully responsive websites and landing pages. On the styling side I rely on Tailwind CSS, Bootstrap, and Material UI. I also work comfortably across the stack with Node.js (Express) and PHP (Laravel), which helps me deliver complete, production-ready solutions.",
  "I use Git and GitHub daily for version control, collaboration, and clean delivery workflows with remote teams.",
  "Over the past year I have integrated AI-assisted development tools such as Cursor, Claude, and ChatGPT into my workflow, which has improved both development speed and code quality.",
  "I have collaborated with companies and freelance clients across multiple regions, consistently delivering high-quality results on time. I value clear communication, adaptability, and reliability — and I take ownership of full-stack work from implementation through launch.",
];

const About = () => {
  return (
    <section id="about" className="sm:max-w-[90vw] max-w-[96vw] m-auto py-16 md:py-24">
      <div className="relative rounded-card border-2 border-ink bg-paper p-6 md:p-12 shadow-hard overflow-hidden">
        <Parallax
          speed={0.28}
          className="pointer-events-none absolute -z-10 -right-20 top-0"
        >
          <div className="h-72 w-72 rounded-full bg-sky/25 blur-[70px]" />
        </Parallax>
        <Parallax
          speed={0.16}
          className="pointer-events-none absolute -z-10 left-1/4 -bottom-12"
        >
          <div className="h-48 w-48 rounded-full bg-ink/10 blur-3xl" />
        </Parallax>

        <div className="flex items-start justify-between">
          <span className="eyebrow">about</span>
          <span className="eyebrow">5+ years</span>
        </div>

        <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:gap-16">
          <div className="relative">
            <Reveal>
              <span className="sticker rotate-[-5deg] text-2xl md:text-3xl">about me</span>
            </Reveal>
            <Reveal delay={80}>
              <h2 className="display mt-6 text-[13vw] sm:text-6xl md:text-7xl text-ink">About</h2>
            </Reveal>
            <Asterisk className="pointer-events-none absolute -bottom-4 left-2 hidden h-14 w-14 text-ink/20 lg:block" spin />
            <Sparkle className="pointer-events-none absolute right-6 top-2 hidden h-5 w-5 text-ink/30 lg:block" />
          </div>

          <div className="space-y-5">
            {paragraphs.map((text, idx) => (
              <Reveal key={idx} delay={idx * 70}>
                <p className="text-ink/80 text-sm md:text-lg leading-relaxed">{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
