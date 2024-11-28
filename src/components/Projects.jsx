import React from "react";
import ProjectItem from "./ProjectItem";
import spotify from "../assets/spotify.png";
import quiz from "../assets/quiz.png";
import straus from "../assets/straus.png";
import magic from "../assets/magic.png";
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
          language="Node, Pug, Tailwind"
          description="I contributed to the development of Leadhub Software, a modern website built using Node.js, Pug, and Tailwind CSS. My role involved designing and implementing efficient backend solutions with Node.js, ensuring fast and scalable performance. I leveraged Pug for streamlined template rendering and Tailwind CSS to deliver a clean, responsive, and visually appealing user interface. This project enhanced my ability to integrate cutting-edge technologies to meet business requirements effectively."
        />
        <ProjectItem
          img={bs}
          title="B-Social"
          link="https://bekatev.github.io/b-social/"
          language="React/Vite/Firebase/MUI"
          description="B-Social is a lightweight, discussion-focused web application inspired by platforms like Reddit. It allows users to create and share topics, engage in meaningful conversations through comments, and connect over shared interests. This project showcases advanced skills in React development, Firebase integration, and Material-UI styling. It demonstrates how to build scalable, interactive, and visually appealing web applications."
        />
        <ProjectItem
          img={mm}
          title="MyMovie"
          link="https://bekatev.github.io/mymovie/home"
          language="React/Vite/Firebase/Tailwind"
          description="This React app, built with Vite for speed, has a friendly interface for signing up and logging in, thanks to Firebase Authentication. I've used OMDB API to fetch the movie list. Used Firestore to handle personalized movie lists. Once in, users can search and tweak their lists, all on their profiles. It's styled with Tailwind CSS for a slick look. And it's up on Netlify, with updates from GitHub, for smooth sailing."
        />
        <ProjectItem
          img={bb}
          title="Bazaarbay"
          link="https://bekatev.github.io/b-store-vue/"
          language="Vue/Vite/Firebase/Tailwind"
          description="This is a modern e-commerce web application built with Vue.js and Vite for a fast and responsive user experience. Styled with Tailwind CSS, the site offers a sleek and clean design that is fully responsive across all devices. The application integrates Firebase for authentication, database, and storage, making it highly secure and scalable."
        />
        <ProjectItem
          img={verg}
          title="Vergleich-mich.com"
          link="https://vergleich-mich.com/"
          language="HTML/CSS/JS/PHP"
          description="This is a real project, I did for the company that I work for now. I've used HTML/CSS/JS and little bit of PHP AJAX to send mails."
        />
        <ProjectItem
          img={caranea}
          title="caranea-mail.com"
          link="https://caranea-mail.com/"
          language="HTML/CSS/JS/PHP"
          description="Another real project for my company."
        />
      </div>
      <p className="py-8 text-bckg text-left px-4 text-sm md:text-lg xl:text-lg">
        <ul>
          <li className="py-6">
            <b className="text-bttn">React.js:</b> I mostly use React, crafting
            interactive user interfaces, utilizing state management, hooks, and
            advanced features to deliver optimal web experiences.
          </li>
          <li className="py-6">
            <b className="text-bttn">Vue.js:</b> Along with React I think Vue.js
            is very fast and easy for building dynamic web applications,
            leveraging its simplicity and power to create seamless user
            experiences.
          </li>
          <li className="py-6">
            <b className="text-bttn">Laravel & PHP:</b> I have experience in
            developing robust back-end functionalities with Laravel and PHP,
            facilitating seamless data interactions and ensuring the security of
            web applications.
          </li>
          <li className="py-6">
            <b className="text-bttn">HTML & CSS:</b> Basics are very important
            too for structuring and styling web interfaces, ensuring optimal
            user experience and responsiveness across devices.
          </li>
          <li className="py-6">
            <b className="text-bttn">JavaScript (JS):</b> Beyond frameworks,
            I've demonstrated aptitude in implementing dynamic functionalities
            and enhancing interactivity across web platforms.
          </li>
          <li className="py-6">
            <b className="text-bttn">Tailwind, MUI& Bootstrap:</b> Leveraged
            these CSS frameworks to rapidly design and refine user interfaces,
            ensuring a consistent and modern user experience. I love Tailwind
            and mostly use it for everything.
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Projects;
