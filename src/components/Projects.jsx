import React from "react";
import ProjectItem from "./ProjectItem";
import rs from "../assets/rs.png";
import ln from "../assets/ln.png";
import fr from "../assets/fr.png";
import wn from "../assets/wn.png";
import caranea from "../assets/caranea.png";
import verg from "../assets/verg.png";
import mm from "../assets/mm.png";
import bb from "../assets/bb.png";
import bs from "../assets/bs.png";
import lh from "../assets/lh.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="sm:max-w-[70vw] max-w-[90vw] m-auto p-4 bg-primary rounded-xl shadow-xl mb-20"
    >
      <h1 className="text-4xl font-bold text-center text-bckg pb-8 pt-4">
        My projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={lh}
          title="LeadHub"
          link="https://www.leadhub.software/"
          language="Node/Pug/Tailwind"
          description="Contributed to the development of Leadhub Software, a modern website built with Node.js, Pug, and Tailwind CSS. I focused on building efficient backend solutions and implementing clean, responsive UI components. This project strengthened my skills in full-stack development and scalable web architecture."
        />
        <ProjectItem
          img={fr}
          title="FerienHaus"
          link="https://ferienhaus-beispiel.de/"
          language="HTML/CSS/JS"
          description="Developed a responsive, single-page website using HTML, CSS, and JavaScript. The site showcases a vacation home with a clean layout, smooth scroll navigation, and a fully responsive design for mobile and desktop."
        />
        <ProjectItem
          img={ln}
          title="Landing 4"
          link="https://bekatev.github.io/landing-4/"
          language="Next.js/Tailwind"
          description="Built a responsive landing page using Next.js, Tailwind CSS, and JavaScript. The project showcases a modern UI with fast performance and clean structure"
        />
        <ProjectItem
          img={rs}
          title="Restaurant"
          link="https://restaurant-beispiel.de/"
          language="HTML/CSS/JS"
          description="Restaurant Beispiel is a responsive static website built with HTML, CSS, and JavaScript. It features a clean layout, smooth interactions, and mobile-first design, showcasing a modern restaurant UI optimized for performance and usability."
        />
        <ProjectItem
          img={wn}
          title="Weingut"
          link="https://weingut-beispiel.de/"
          language="HTML/CSS/JS"
          description="Weingut is a static website developed with HTML, CSS, and JavaScript. It presents a modern and elegant design for a vineyard, with responsive layout, smooth scrolling, and a focus on visual storytelling and user experience.."
        />
      </div>
      <p className="py-8 text-bckg text-left px-4 text-sm md:text-lg xl:text-lg">
        <ul>
          <li className="py-6">
            <b className="text-bttn">React, React Native, Vue, Git, Github:</b>{" "}
            Proficient in building scalable web and mobile applications using
            React and React Native, with expertise in hooks, state management,
            and API integration. Experienced with Vue.js for developing modular,
            high-performing interfaces tailored to business needs.
          </li>
          <li className="py-6">
            <b className="text-bttn">HTML, CSS, JS:</b> Basics are very
            important too for structuring and styling web interfaces, ensuring
            optimal user experience and responsiveness across devices.
          </li>
          <li className="py-6">
            <b className="text-bttn">Tailwind, MUI & Bootstrap:</b> Leveraged
            these CSS frameworks to rapidly design and refine user interfaces,
            ensuring a consistent and modern user experience. I love Tailwind
            and mostly use it for everything.
          </li>
          <li className="py-6">
            <b className="text-bttn">
              Next.js, PHP, Node.js, Laravel, Pug, MySQL:
            </b>{" "}
            Experienced with these technologies for backend development and
            templating, though not in a professional capacity. Familiar with
            building dynamic, data-driven applications and integrating
            server-side logic.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Projects;
