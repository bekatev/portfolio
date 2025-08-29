import React from "react";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import Marquee from "./Marquee";

const Main = () => {
  return (
    <section id="main" className="relative pt-28">
      <div className="sm:max-w-[90vw] max-w-[96vw] mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur p-8 md:p-12">
          {/* Parallax decorative layers */}
          <Parallax
            speed={0.25}
            className="pointer-events-none absolute -top-16 -left-16"
          >
            <div className="h-72 w-72 rounded-full bg-bttn/30 blur-3xl" />
          </Parallax>
          <Parallax
            speed={0.45}
            className="pointer-events-none absolute -bottom-20 -right-16"
          >
            <div className="h-96 w-96 rounded-full bg-white/15 blur-[60px]" />
          </Parallax>
          <Parallax
            speed={0.18}
            className="pointer-events-none absolute -top-12 right-1/4"
          >
            <div className="h-48 w-48 rounded-full bg-bttn/15 blur-2xl" />
          </Parallax>
          <div className="relative flex flex-col items-center text-center">
            <Parallax speed={0.06}>
              <Reveal>
                <motion.h1
                  className="text-4xl md:text-6xl xl:text-7xl text-primary/95 leading-tight tracking-tight"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  Hello, I'm Beka
                </motion.h1>
              </Reveal>
            </Parallax>
            <Parallax speed={0.05}>
              <Reveal delay={80}>
                <motion.p
                  className="mt-4 text-base md:text-xl xl:text-2xl text-primary/80 max-w-3xl"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.08,
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  The Most Motivated Developer
                </motion.p>
              </Reveal>
            </Parallax>
            <Parallax speed={0.04}>
              <Reveal delay={140}>
                <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    href="#projects"
                    className="magnet px-6 py-3 rounded-full bg-bttn text-white hover:brightness-110 transition"
                  >
                    View Work
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                    href="#contact"
                    className="magnet px-6 py-3 rounded-full border border-white/20 text-primary hover:bg-white/10 transition"
                  >
                    Contact
                  </motion.a>
                </div>
              </Reveal>
            </Parallax>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full">
              <Reveal>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-primary/80">
                    <span className="text-primary font-semibold">
                      Location:
                    </span>{" "}
                    Tbilisi, Georgia
                  </p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-primary/80">
                    <span className="text-primary font-semibold">Email:</span>{" "}
                    bekatevd@gmail.com
                  </p>
                </div>
              </Reveal>
            </div>
            <div className="mt-10 w-full">
              <Marquee
                items={[
                  "React",
                  "Vue",
                  "Next.js",
                  "Redux",
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
      </div>
    </section>
  );
};

export default Main;
