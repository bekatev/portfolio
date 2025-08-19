import React, { useEffect, useRef, useState } from "react";
import ProjectItem from "./ProjectItem";
import rs from "../assets/rs.png";
import ln from "../assets/ln.png";
import fr from "../assets/fr.png";
import wn from "../assets/wn.png";
import lh from "../assets/lh.png";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const Projects = () => {
  const containerRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [hintVisible, setHintVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    // Nudge scroll to hint more content
    requestAnimationFrame(() => {
      const max = el.scrollWidth - el.clientWidth;
      const nudge = Math.min(max, Math.round(el.clientWidth * 0.08));
      el.scrollLeft = nudge;
    });

    const handleScroll = () => {
      const max = el.scrollWidth - el.clientWidth;
      const value = max > 0 ? el.scrollLeft / max : 0;
      setProgress(Math.min(1, Math.max(0, value)));
      if (el.scrollLeft > 8 && hintVisible) setHintVisible(false);
    };
    handleScroll();
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [hintVisible]);

  return (
    <section
      id="projects"
      className="sm:max-w-[90vw] max-w-[96vw] m-auto px-4 md:px-0 py-12"
    >
      <div className="relative flex items-center justify-between mb-6 md:mb-8">
        <Parallax speed={0.3} className="pointer-events-none absolute -z-10 -top-10 -left-16">
          <div className="h-48 w-48 rounded-full bg-bttn/25 blur-3xl" />
        </Parallax>
        <Parallax speed={0.18} className="pointer-events-none absolute -z-10 -bottom-10 right-1/4">
          <div className="h-40 w-40 rounded-full bg-white/12 blur-3xl" />
        </Parallax>
        <Reveal>
          <h2 className="text-2xl md:text-4xl font-semibold text-primary">Featured Projects</h2>
        </Reveal>
        <Reveal delay={80}>
          <a href="#contact" className="hidden md:inline-block text-sm text-primary/80 hover:text-primary">Get in touch →</a>
        </Reveal>
      </div>
      {/* Horizontal, snap-based carousel */}
      <div className="relative">
        {/* gradient edges */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-bckg to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-bckg to-transparent z-10" />

        <div
          ref={containerRef}
          className="no-scrollbar flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-px-4 pr-4"
          aria-label="Projects Carousel"
        >
          {[{
            img: lh,
            title: "LeadHub",
            link: "https://www.leadhub.software/",
            language: "Node/Pug/Tailwind",
            description:
              "Contributed to the development of Leadhub Software, a modern website built with Node.js, Pug, and Tailwind CSS. I focused on building efficient backend solutions and implementing clean, responsive UI components. This project strengthened my skills in full-stack development and scalable web architecture.",
          },
          {
            img: fr,
            title: "FerienHaus",
            link: "https://ferienhaus-beispiel.de/",
            language: "HTML/CSS/JS",
            description:
              "Developed a responsive, single-page website using HTML, CSS, and JavaScript. The site showcases a vacation home with a clean layout, smooth scroll navigation, and a fully responsive design for mobile and desktop.",
          },
          {
            img: ln,
            title: "Landing 4",
            link: "https://bekatev.github.io/landing-4/",
            language: "Next.js/Tailwind",
            description:
              "Built a responsive landing page using Next.js, Tailwind CSS, and JavaScript. The project showcases a modern UI with fast performance and clean structure",
          },
          {
            img: rs,
            title: "Restaurant",
            link: "https://restaurant-beispiel.de/",
            language: "HTML/CSS/JS",
            description:
              "Restaurant Beispiel is a responsive static website built with HTML, CSS, and JavaScript. It features a clean layout, smooth interactions, and mobile-first design, showcasing a modern restaurant UI optimized for performance and usability.",
          },
          {
            img: wn,
            title: "Weingut",
            link: "https://weingut-beispiel.de/",
            language: "HTML/CSS/JS",
            description:
              "Weingut is a static website developed with HTML, CSS, and JavaScript. It presents a modern and elegant design for a vineyard, with responsive layout, smooth scrolling, and a focus on visual storytelling and user experience..",
          }].map((p, idx) => (
            <Reveal key={p.title} delay={idx * 80} className="min-w-[80%] sm:min-w-[55%] lg:min-w-[42%] snap-start">
              <ProjectItem
                img={p.img}
                title={p.title}
                link={p.link}
                language={p.language}
                description={p.description}
              />
            </Reveal>
          ))}
        </div>

        {/* Progress only */}
        <div className="absolute right-4 -bottom-6 h-1 w-28 bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white/40 rounded-full"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      </div>
      <div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-white/[0.02] p-6 md:p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-xl md:text-2xl font-semibold text-primary">Skill Highlights</h3>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 text-sm text-primary/80 hover:text-primary">Work with me →</a>
        </div>
        <ul className="mt-6 space-y-4">
          <li className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm md:text-base text-primary/90">
              <b className="text-bttn">React, React Native, Vue, Git, Github:</b> Proficient in building scalable web and mobile applications using React and React Native, with expertise in hooks, state management, and API integration. Experienced with Vue.js for developing modular, high-performing interfaces tailored to business needs.
            </p>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm md:text-base text-primary/90">
              <b className="text-bttn">HTML, CSS, JS:</b> Basics are very important too for structuring and styling web interfaces, ensuring optimal user experience and responsiveness across devices.
            </p>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm md:text-base text-primary/90">
              <b className="text-bttn">Tailwind, MUI & Bootstrap:</b> Leveraged these CSS frameworks to rapidly design and refine user interfaces, ensuring a consistent and modern user experience. I love Tailwind and mostly use it for everything.
            </p>
          </li>
          <li className="rounded-xl border border-white/10 bg-white/5 p-4">
            <p className="text-sm md:text-base text-primary/90">
              <b className="text-bttn">Next.js, PHP, Node.js, Laravel, Pug, MySQL:</b> Experienced with these technologies for backend development and templating, though not in a professional capacity. Familiar with building dynamic, data-driven applications and integrating server-side logic.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Projects;
