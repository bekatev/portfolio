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

const Projects = () => {
  return (
    <div
      id="projects"
      className="sm:max-w-[70vw] max-w-[90vw] m-auto p-4 bg-txt rounded-xl shadow-xl mb-20"
    >
      <h1 className="text-4xl font-bold text-center text-white pb-8 pt-4">
        My projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={bb}
          title="BazaarBay"
          link="https://bazaarbay.netlify.app/"
          language="Vue/Vite/Firebase/Tailwind"
          description="This is BazaarBay, a Vue app, built with Vite, serves as a platform for users to sign up and log in using Firebase authentication. Once authenticated, users can add their products to sell, with Firebase serving as the backend to store product information. Styling is achieved with Tailwind CSS, providing a sleek and modern interface. The app is deployed and hosted on Netlify."
        />
        <ProjectItem
          img={mm}
          title="my movies"
          link="https://bekatevd-mm.netlify.app/"
          language="React/Vite/Firebase/Tailwind"
          description="This React app, built with Vite for speed, has a friendly interface for signing up and logging in, thanks to Firebase Authentication. I've used OMDB API to fetch the movie list. Used Firestore to handle personalized movie lists. Once in, users can search and tweak their lists, all on their profiles. It's styled with Tailwind CSS for a slick look. And it's up on Netlify, with updates from GitHub, for smooth sailing."
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
        <ProjectItem
          img={spotify}
          title="Spotify"
          link="https://bekatev.github.io/spotify/"
          language="HTML/CSS/JS/PHP"
          description="In this project, I aimed to design an exact copy of the official Spotify website. Styling it was my ultimate challenge as I tried to duplicate the exact same design. I only use a little bit of javascript here. I used PHP for Login and Sign Up pages, though github is not showing those pages you can access the code on my github page."
        />
        <ProjectItem
          img={quiz}
          title="Quiz App"
          link="https://bekatev.github.io/Quiz/"
          language="HTML/CSS/JS"
          description="This project mostly focuses on javascript and the functionality of the page. The user is asked to enter his/her name and is given 10 questions. He/she can skip the questions and go back later, or choose the answer but get back to it later as well. The quiz has a 1 min time (for testing) and a timer is shown in the question box. After finishing the quiz user is assessed according to the points that he/she got. There is another version of that project on my github page, where I added some PHP to save the user's name and mark in the database."
        />
        <ProjectItem
          img={straus}
          title="Straus"
          link="https://bekatev.github.io/straus/"
          language="HTML/CSS/JS/PHP"
          description="This project is an analogy to the Wix webpage with responsive design."
        />
        <ProjectItem
          img={magic}
          title="Magic 8 Ball"
          link="https://bekatev.github.io/Magic%208%20Ball/"
          language="HTML/CSS/JS"
          description="Easy project in Javascript."
        />
      </div>
      <p className="py-8 text-white text-left px-4 text-sm md:text-lg xl:text-lg">
        In my journey through web development, I've crafted and launched a bunch
        of digital solutions. Here are some highlights:
        <ul>
          <li className="py-6">
            <b className="text-primary">React.js:</b> I mostly use React,
            crafting interactive user interfaces, utilizing state management,
            hooks, and advanced features to deliver optimal web experiences.
          </li>
          <li className="py-6">
            <b className="text-primary">Vue.js:</b> Along with React I think
            Vue.js is very fast and easy for building dynamic web applications,
            leveraging its simplicity and power to create seamless user
            experiences.
          </li>
          <li className="py-6">
            <b className="text-primary">Laravel & PHP:</b> I have experience in
            developing robust back-end functionalities with Laravel and PHP,
            facilitating seamless data interactions and ensuring the security of
            web applications.
          </li>
          <li className="py-6">
            <b className="text-primary">HTML & CSS:</b> Basics are very
            important too for structuring and styling web interfaces, ensuring
            optimal user experience and responsiveness across devices.
          </li>
          <li className="py-6">
            <b className="text-primary">JavaScript (JS):</b> Beyond frameworks,
            I've demonstrated aptitude in implementing dynamic functionalities
            and enhancing interactivity across web platforms.
          </li>
          <li className="py-6">
            <b className="text-primary">Tailwind & Bootstrap:</b> Leveraged
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
