import React from "react";
import ProjectItem from "./ProjectItem";
import spotify from "../assets/spotify.png";
import quiz from "../assets/quiz.png";
import straus from "../assets/straus.png";
import magic from "../assets/magic.png";
import caranea from "../assets/caranea.png";
import verg from "../assets/verg.png";
import mm from "../assets/mm.png";

const Projects = () => {
  return (
    <div
      id="projects"
      className="sm:max-w-[70vw] max-w-[90vw] m-auto p-4 bg-txt rounded-xl shadow-xl"
    >
      <h1 className="text-4xl font-bold text-center text-white pb-8 pt-4">
        My projects
      </h1>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem
          img={mm}
          title="my movies"
          link="https://bekatevd-mm.netlify.app/"
          language="React/Firebase/Tailwind"
          description="This React application, built using Vite for enhanced performance, features a user-friendly interface for registration and sign-in, powered by Firebase Authentication. It leverages Firestore database to manage personalized movie lists for each user. Post-login, users can search for movies and customize their lists, which are accessible on their profiles. The design employs Tailwind CSS for a responsive and attractive layout. Hosted on Netlify with continuous deployment from GitHub, the app offers reliable access and a seamless user experience."
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
        Throughout my journey in web development, I have passionately crafted
        and deployed a myriad of digital solutions. Here are some focal points:
        <ul>
          <li className="py-6">
            <b className="text-primary">React.js:</b> As my primary tool, I've
            harnessed the power of React.js to build interactive user
            interfaces, seamlessly integrating state management, hooks, and
            other advanced features to deliver optimal web experiences.
          </li>
          <li className="py-6">
            <b className="text-primary">HTML & CSS:</b> Proficient in
            structuring and styling web interfaces, ensuring optimal user
            experience and responsiveness.
          </li>
          <li className="py-6">
            <b className="text-primary">JavaScript (JS):</b> Beyond React, I
            have a demonstrated aptitude in implementing dynamic
            functionalities, creating seamless interactivity across web
            platforms.
          </li>
          <li className="py-6">
            <b className="text-primary">Tailwind & Bootstrap:</b> Leveraged
            these CSS frameworks to rapidly design and refine user interfaces,
            ensuring a consistent and modern user experience.
          </li>
          <li className="py-6">
            <b className="text-primary">PHP, MySQL:</b> Applied this server-side
            scripting language in numerous projects, developing robust back-end
            functionalities and facilitating seamless data interactions.
          </li>
        </ul>
        By intertwining these technologies, I've managed to curate web
        experiences that resonate with users. I'm eager to bring my expertise to
        new challenges and create more captivating digital solutions.
      </p>
    </div>
  );
};

export default Projects;
