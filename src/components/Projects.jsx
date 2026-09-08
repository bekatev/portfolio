import React from "react";
import ProjectItem from "./ProjectItem";
import rs from "../assets/rs.png";
import ln from "../assets/ln.png";
import fr from "../assets/fr.png";
import wn from "../assets/wn.png";
import lh from "../assets/lh.png";
import cfs from "../assets/clientflow-studio.png";
import novatech from "../assets/novatech.png";
import origincarpets from "../assets/origincarpets.png";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { Asterisk, Folder } from "./Decor";

const Projects = () => {
  const projects = [{
    slug: "origincarpets",
    img: origincarpets,
    title: "OriginCarpets",
    link: "https://origincarpets.com/",
    language: "Next.js/NestJS/PostgreSQL",
    description:
      "Built OriginCarpets, a full-stack e-commerce platform for traditional carpet sales with a bilingual storefront, advanced product filtering, cart and checkout flows, and integrated payments. Developed with Next.js and Tailwind on the frontend and a NestJS API with Prisma and PostgreSQL on the backend, including domestic and international shipping, admin tooling, and production deployment on DigitalOcean.",
  },
  {
    slug: "lh",
    img: lh,
    title: "LeadHub",
    link: "https://www.leadhub.software/",
    language: "Node/Pug/Tailwind",
    description:
      "Contributed to the development of Leadhub Software, a modern website built with Node.js, Pug, and Tailwind CSS. I focused on building efficient backend solutions and implementing clean, responsive UI components. This project strengthened my skills in full-stack development and scalable web architecture.",
  },
  {
    slug: "novatech",
    img: novatech,
    title: "NovaTech",
    link: "https://bekatev.github.io/NovaTech/",
    language: "Angular/Tailwind",
    description:
      "Developed NovaTech, a modern business website focused on visual intelligence and operational technology solutions. Built with React and Tailwind CSS, featuring a clean corporate layout, responsive sections, and polished UI components optimized for both desktop and mobile experiences.",
  },
  {
    slug: "clientflow-studio",
    img: cfs,
    title: "ClientFlow Studio",
    link: "https://bekatev.github.io/clientflow-studio/",
    language: "React/Tailwind",
    description:
      "Built ClientFlow Studio, a production-style dashboard project focused on project pipeline management, lightweight data workflows, and polished UI interactions. Developed with React and Tailwind CSS, featuring responsive layout, reusable components, and deploy-ready performance on GitHub Pages.",
  },
  /* {
    slug: "fr",
    img: fr,
    title: "FerienHaus",
    link: "https://ferienhaus-beispiel.de/",
    language: "HTML/CSS/JS",
    description:
      "Developed a responsive, single-page website using HTML, CSS, and JavaScript. The site showcases a vacation home with a clean layout, smooth scroll navigation, and a fully responsive design for mobile and desktop.",
  }, */
  {
    slug: "ln",
    img: ln,
    title: "Landing 4",
    link: "https://bekatev.github.io/landing-4/",
    language: "Next.js/Tailwind",
    description:
      "Built a responsive landing page using Next.js, Tailwind CSS, and JavaScript. The project showcases a modern UI with fast performance and clean structure",
  },
  /* {
    slug: "rs",
    img: rs,
    title: "Restaurant",
    link: "https://restaurant-beispiel.de/",
    language: "HTML/CSS/JS",
    description:
      "Restaurant Beispiel is a responsive static website built with HTML, CSS, and JavaScript. It features a clean layout, smooth interactions, and mobile-first design, showcasing a modern restaurant UI optimized for performance and usability.",
  },
  {
    slug: "wn",
    img: wn,
    title: "Weingut",
    link: "https://weingut-beispiel.de/",
    language: "HTML/CSS/JS",
    description:
      "Weingut is a static website developed with HTML, CSS, and JavaScript. It presents a modern and elegant design for a vineyard, with responsive layout, smooth scrolling, and a focus on visual storytelling and user experience..",
  } */];

  return (
    <section
      id="projects"
      className="sm:max-w-[90vw] max-w-[96vw] m-auto px-1 md:px-0 py-16 md:py-24"
    >
      {/* Section cover, echoing the desktop-folder motif */}
      <div className="relative mb-14 md:mb-20">
        <Parallax speed={0.22} className="pointer-events-none absolute left-2 -top-4 hidden md:block">
          <Folder label="projects" rotate={-6} />
        </Parallax>
        <Parallax speed={0.16} className="pointer-events-none absolute right-4 top-10 hidden lg:block">
          <Folder label="case studies" rotate={5} />
        </Parallax>

        <div className="flex flex-col items-center text-center">
          <Reveal>
            <h2 className="display text-[13vw] sm:text-6xl md:text-8xl xl:text-9xl text-ink">
              featured projects
            </h2>
          </Reveal>
          <Reveal delay={140}>
            <a
              href="#contact"
              className="magnet mt-6 inline-flex items-center gap-2 text-ink/80 hover:text-ink"
            >
              Get in touch <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>
        <Asterisk className="pointer-events-none absolute right-1/4 -bottom-6 hidden h-10 w-10 text-ink/25 md:block" spin />
      </div>

      <div className="space-y-20 md:space-y-28">
        {projects.map((p, idx) => (
          <ProjectItem
            key={p.title}
            index={idx}
            slug={p.slug}
            img={p.img}
            title={p.title}
            link={p.link}
            language={p.language}
            description={p.description}
          />
        ))}
      </div>

      {/* Skill highlights */}
      <div className="mt-24 rounded-card border-2 border-ink bg-paper p-6 md:p-10 shadow-hard">
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <h3 className="display text-[10vw] sm:text-4xl md:text-5xl text-ink">Skill Highlights</h3>
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 text-sm text-ink/70 hover:text-ink"
          >
            Work with me <span aria-hidden>→</span>
          </a>
        </div>
        <ul className="mt-8 grid gap-5 md:grid-cols-2">
          <li className="rounded-[16px] border-2 border-ink/85 bg-bckg p-5">
            <p className="text-sm md:text-base text-ink/80">
              <b className="block font-extrabold text-ink">React, React Native, Vue, Git, Github</b>
              Proficient in building scalable web and mobile applications using React and React Native, with expertise in hooks, state management, and API integration. Experienced with Vue.js for developing modular, high-performing interfaces tailored to business needs.
            </p>
          </li>
          <li className="rounded-[16px] border-2 border-ink/85 bg-bckg p-5">
            <p className="text-sm md:text-base text-ink/80">
              <b className="block font-extrabold text-ink">HTML, CSS, JS</b>
              Basics are very important too for structuring and styling web interfaces, ensuring optimal user experience and responsiveness across devices.
            </p>
          </li>
          <li className="rounded-[16px] border-2 border-ink/85 bg-bckg p-5">
            <p className="text-sm md:text-base text-ink/80">
              <b className="block font-extrabold text-ink">Tailwind, MUI &amp; Bootstrap</b>
              Leveraged these CSS frameworks to rapidly design and refine user interfaces, ensuring a consistent and modern user experience. I love Tailwind and mostly use it for everything.
            </p>
          </li>
          <li className="rounded-[16px] border-2 border-ink/85 bg-bckg p-5">
            <p className="text-sm md:text-base text-ink/80">
              <b className="block font-extrabold text-ink">Next.js, PHP, Node.js, Laravel, Pug, MySQL</b>
              Strong on the backend too — building APIs, server-side logic, and database-driven applications with Next.js, Node.js, Laravel, and PHP. Comfortable integrating frontend and backend into reliable full-stack solutions, from authentication and payments to admin workflows and production deployment.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
