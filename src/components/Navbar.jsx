import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Lottie from "lottie-react";
import homeData from "../assets/home.json";
import jobsData from "../assets/jobs.json";
import projectsData from "../assets/projects.json";
import contactData from "../assets/contact.json";
import aboutData from "../assets/me.json";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="absolute top-4 right-4 z-[99] md:hidden cursor-pointer bg-bttn"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/75 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursor-pointer transform hover:scale-110 ease-in duration-100"
          >
            <Lottie animationData={homeData} className="w-8" />
            <span className="pl-4 text-bckg">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <Lottie animationData={projectsData} className="w-8" />
            <span className="pl-4 text-bckg">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursor-pointer transform hover:scale-110 ease-in duration-100"
          >
            <Lottie animationData={aboutData} className="w-8" />
            <span className="pl-4 text-bckg">About me</span>
          </a>

          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <Lottie animationData={jobsData} className="w-8" />
            <span className="pl-4 text-bckg">Jobs</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200"
          >
            <Lottie animationData={contactData} className="w-8" />
            <span className="pl-4 text-bckg">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}

      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col">
          <a
            href="#main"
            className="shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-40 w-fit"
          >
            <Lottie animationData={homeData} className="w-8" />
            <span className="pl-4 xl:block hidden text-bckg">Home</span>
          </a>
          <a
            href="#projects"
            className="shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-40 w-fit"
          >
            <Lottie animationData={projectsData} className="w-8" />
            <span className="pl-4 xl:block hidden text-bckg">Projects</span>
          </a>
          <a
            href="#about"
            className="shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-40 w-fit"
          >
            <Lottie animationData={aboutData} className="w-8" />
            <span className="pl-4 xl:block hidden text-bckg">About Me</span>
          </a>
          <a
            href="#work"
            className="shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-40 w-fit"
          >
            <Lottie animationData={jobsData} className="w-8" />
            <span className="pl-4 xl:block hidden text-bckg">Jobs</span>
          </a>
          <a
            href="#contact"
            className="shadow-lg bg-primary shadow-gray-400 m-2 p-4 cursos-pointer transform transition duration-500 hover:scale-110 flex flex-row xl:w-40 w-fit"
          >
            <Lottie animationData={contactData} className="w-8" />
            <span className="pl-4 xl:block hidden text-bckg">Contact</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
