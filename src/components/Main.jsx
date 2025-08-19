import React from "react";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const Main = () => {
  return (
    <section id="main" className="relative pt-28">
      <div className="sm:max-w-[90vw] max-w-[96vw] mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur p-8 md:p-12">
          {/* Parallax decorative layers */}
          <Parallax speed={0.25} className="pointer-events-none absolute -top-16 -left-16">
            <div className="h-72 w-72 rounded-full bg-bttn/30 blur-3xl" />
          </Parallax>
          <Parallax speed={0.45} className="pointer-events-none absolute -bottom-20 -right-16">
            <div className="h-96 w-96 rounded-full bg-white/15 blur-[60px]" />
          </Parallax>
          <Parallax speed={0.18} className="pointer-events-none absolute -top-12 right-1/4">
            <div className="h-48 w-48 rounded-full bg-bttn/15 blur-2xl" />
          </Parallax>
          <div className="relative flex flex-col items-center text-center">
            <Parallax speed={0.06}>
              <Reveal>
                <h1 className="text-3xl md:text-5xl xl:text-6xl text-primary/95 leading-tight">
                  Hello, I’m Beka
                </h1>
              </Reveal>
            </Parallax>
            <Parallax speed={0.05}>
              <Reveal delay={80}>
                <p className="mt-3 text-sm md:text-lg xl:text-xl text-primary/80 max-w-2xl">
                  Front‑End Engineer crafting fast, accessible, and delightful web experiences.
                </p>
              </Reveal>
            </Parallax>
            <Parallax speed={0.04}>
              <Reveal delay={140}>
                <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                  <a href="#projects" className="px-5 py-2 rounded-full bg-bttn text-white hover:brightness-110 transition">View Work</a>
                  <a href="#contact" className="px-5 py-2 rounded-full border border-white/20 text-primary hover:bg-white/10 transition">Contact</a>
                </div>
              </Reveal>
            </Parallax>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full">
              <Reveal>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-primary/80"><span className="text-primary font-semibold">Location:</span> Tbilisi, Georgia</p>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                  <p className="text-primary/80"><span className="text-primary font-semibold">Email:</span> bekatevd@gmail.com</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
