import React from "react";

const Main = () => {
  return (
    <section id="main" className="relative pt-28">
      <div className="sm:max-w-[90vw] max-w-[96vw] mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/10 to-white/[0.03] backdrop-blur p-8 md:p-12">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-3xl md:text-5xl xl:text-6xl text-primary/95 leading-tight">
              Hello, I’m Beka
            </h1>
            <p className="mt-3 text-sm md:text-lg xl:text-xl text-primary/80 max-w-2xl">
              Front‑End Engineer crafting fast, accessible, and delightful web experiences.
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <a href="#projects" className="px-5 py-2 rounded-full bg-bttn text-white hover:brightness-110 transition">View Work</a>
              <a href="#contact" className="px-5 py-2 rounded-full border border-white/20 text-primary hover:bg-white/10 transition">Contact</a>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left w-full">
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-primary/80"><span className="text-primary font-semibold">Location:</span> Tbilisi, Georgia</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-primary/80"><span className="text-primary font-semibold">Email:</span> bekatevd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
