import React from "react";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import Marquee from "./Marquee";
import { Asterisk, FileThumb, Folder, Pointer } from "./Decor";
import origincarpets from "../assets/origincarpets.png";
import novatech from "../assets/novatech.png";
import cfs from "../assets/clientflow-studio.png";
import ln from "../assets/ln.png";

const Main = () => {
  return (
    <section id="main" className="relative pt-28">
      <div className="sm:max-w-[90vw] max-w-[96vw] mx-auto">
        <div className="relative overflow-hidden rounded-card border-2 border-ink bg-paper px-6 py-12 md:px-12 md:py-16 shadow-hard">
          {/* Corner labels, echoing a desktop window */}
          <div className="relative z-10 flex items-start justify-between">
            <span className="eyebrow">portfolio</span>
            <span className="eyebrow">web development</span>
          </div>

          {/* Scattered desktop items, kept in the side gutters */}
          <Parallax speed={0.12} className="pointer-events-none absolute left-4 top-28 hidden lg:block">
            <Folder label="projects" rotate={-4} className="pointer-events-auto" href="#projects" />
          </Parallax>
          <Parallax speed={0.16} className="pointer-events-none absolute left-2 top-[43%] hidden xl:block">
            <FileThumb src={cfs} alt="ClientFlow Studio" rotate={-5} />
          </Parallax>
          <Parallax speed={0.22} className="pointer-events-none absolute left-8 bottom-[160px] hidden xl:block">
            <FileThumb src={ln} alt="Landing 4" rotate={3} />
          </Parallax>
          <Parallax speed={0.2} className="pointer-events-none absolute right-4 top-32 hidden lg:block">
            <FileThumb src={origincarpets} alt="OriginCarpets" rotate={3} />
          </Parallax>
          <Parallax speed={0.1} className="pointer-events-none absolute right-12 top-[45%] hidden xl:block">
            <Folder label="about" rotate={5} className="pointer-events-auto" href="#about" />
          </Parallax>
          <Parallax speed={0.24} className="pointer-events-none absolute right-6 bottom-[160px] hidden xl:block">
            <FileThumb src={novatech} alt="NovaTech" rotate={-4} />
          </Parallax>

          <Asterisk className="pointer-events-none absolute left-1/2 top-6 hidden h-10 w-10 -translate-x-32 text-ink/30 md:block" spin />

          <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
            <Reveal>
              <p className="font-script text-2xl md:text-4xl text-ink/70 -mb-2 md:-mb-5 -translate-x-8 md:-translate-x-24">
                Hello, I&apos;m
              </p>
            </Reveal>

            <Parallax speed={0.06}>
              <Reveal>
                <h1 className="display text-[19vw] leading-[0.85] md:text-[11rem] xl:text-[13rem] text-ink">
                  Beka
                </h1>
              </Reveal>
            </Parallax>

            <Pointer className="hidden md:block absolute right-[26%] top-[46%] h-8 w-6 text-ink" />

            <Parallax speed={0.05}>
              <Reveal delay={80}>
                <p className="mt-4 max-w-2xl text-base md:text-xl text-ink/75">
                  Full-Stack Developer
                </p>
              </Reveal>
            </Parallax>

            <Reveal delay={120}>
              <p className="mt-3 font-editorial italic text-2xl md:text-3xl text-ink/55">(2026)</p>
            </Reveal>

            <Parallax speed={0.04}>
              <Reveal delay={140}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    href="#projects"
                    className="magnet rounded-full border-2 border-ink bg-ink px-7 py-3 text-bckg shadow-hard-sm hover:shadow-hard"
                  >
                    View Work
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    href="#contact"
                    className="magnet rounded-full border-2 border-ink px-7 py-3 text-ink hover:bg-ink hover:text-bckg transition-colors"
                  >
                    Contact
                  </motion.a>
                </div>
              </Reveal>
            </Parallax>

            <div className="mt-10 grid w-full grid-cols-1 gap-4 text-left sm:grid-cols-2">
              <Reveal>
                <div className="rounded-[14px] border-2 border-ink/85 bg-bckg p-4">
                  <p className="eyebrow">Location</p>
                  <p className="mt-1 text-ink">Tbilisi, Georgia</p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-[14px] border-2 border-ink/85 bg-bckg p-4">
                  <p className="eyebrow">Email</p>
                  <a href="mailto:bekatevd@gmail.com" className="mt-1 block text-ink hover:underline">
                    bekatevd@gmail.com
                  </a>
                </div>
              </Reveal>
            </div>

          </div>

          <div className="relative z-10 mt-12 w-full border-t-2 border-dashed border-ink/25 pt-8">
            <Marquee
              items={[
                "React",
                "Vue",
                "Next.js",
                "Redux",
                "Pinia",
                "Vuex",
                "TypeScript",
                "Tailwind",
                "Bootstrap",
                "Angular",
                "HTML",
                "CSS",
                "JavaScript",
                "Git",
                "GitHub",
                "Firebase",
                "Node.js",
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
