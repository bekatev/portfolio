import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="sm:max-w-[70vw] max-w-[90vw] m-auto sm:p-12 p-8 bg-primary rounded-xl shadow-xl"
    >
      <p className="py-1 sm:py-2 text-bckg text-sm md:text-lg xl:text-lg">
        For the past few years, I’ve had the opportunity to work remotely as a
        front-end developer for a German company. This experience has been
        transformative, allowing me to hone my skills in React, Node.js,
        Tailwind CSS, etc. Working remotely taught me the importance of clear
        communication, time management, and being self-sufficient. Despite the
        physical distance, I’ve collaborated with international teams to build
        user-friendly, responsive web applications that deliver great
        experiences. I'd like to continue learning and have more experiences
        with great teams.
      </p>
      <p className="py-1 sm:py-2 text-bckg text-sm md:text-lg xl:text-lg">
        I spent two years tutoring JavaScript, which not only deepened my
        understanding of the language but also gave me a passion for helping
        others learn. Guiding students through their coding journeys reinforced
        the importance of writing clean, efficient code and solidified my own
        skills.
      </p>
      <p className="py-1 sm:py-2 text-bckg text-sm md:text-lg xl:text-lg">
        These experiences have shaped me into a developer who values both
        technical expertise and teamwork, always striving to create applications
        that are functional, beautiful, and accessible.
      </p>
    </div>
  );
};

export default About;
