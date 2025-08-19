import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="sm:max-w-[90vw] max-w-[96vw] m-auto py-12"
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary mb-4">About</h2>
        <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
          Over the past five years, I’ve worked remotely as a front‑end developer, delivering responsive, user‑focused web applications. With a background in physics from the Free University of Tbilisi, I transitioned into web development early in my career, driven by a deep interest in building interactive, performant user interfaces.
        </p>
        <p className="py-1 sm:py-2 text-primary/85 text-sm md:text-lg xl:text-lg">
          Working with international teams taught me to communicate clearly, manage time effectively, and deliver consistent results across time zones. I lead front‑end efforts where clean design, scalability, and maintainability are critical, adopting best practices in testing, accessibility, and performance.
        </p>
      </div>
    </section>
  );
};

export default About;
