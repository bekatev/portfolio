import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Asterisk, Sparkle } from "./Decor";

// Bump when replacing files in public/optimized (those URLs are not content-hashed).
const OPTIMIZED_CACHE_BUST = "20260908";

const ProjectItem = ({ slug, img, title, link, language, description, index = 0 }) => {
  const optimizedBase = `${import.meta.env.BASE_URL}optimized/${slug}`;
  const flipped = index % 2 === 1;
  const number = index + 1;

  return (
    <article className="relative border-t-2 border-ink/20 pt-8 md:pt-12">
      <div className="flex items-center justify-between">
        <span className="eyebrow">project {number}</span>
        <span className="eyebrow">{language}</span>
      </div>

      <div
        className={`mt-6 grid items-center gap-8 md:gap-12 lg:grid-cols-2 ${
          flipped ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="relative">
          <Reveal>
            <h3 className="display text-[11vw] sm:text-5xl md:text-6xl xl:text-7xl text-ink">
              {title}
            </h3>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-5 max-w-xl text-ink/75 text-sm md:text-base leading-relaxed">
              {description}
            </p>
          </Reveal>
          <Reveal delay={140}>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="magnet mt-7 inline-flex items-center gap-2 rounded-full border-2 border-ink px-6 py-2.5 text-ink hover:bg-ink hover:text-bckg transition-colors"
            >
              Visit site
              <span aria-hidden>→</span>
            </a>
          </Reveal>
          <Sparkle className="pointer-events-none absolute -right-2 -top-6 hidden h-6 w-6 text-ink/30 lg:block" />
        </div>

        <Reveal delay={100} direction={flipped ? "right" : "left"}>
          <div className="relative">
            <motion.a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 260, damping: 22 }}
              className="block overflow-hidden rounded-card border-2 border-ink bg-paper shadow-hard"
            >
              <picture>
                <source srcSet={`${optimizedBase}.avif?v=${OPTIMIZED_CACHE_BUST}`} type="image/avif" />
                <source srcSet={`${optimizedBase}.webp?v=${OPTIMIZED_CACHE_BUST}`} type="image/webp" />
                <img
                  src={img}
                  alt={title}
                  loading="lazy"
                  decoding="async"
                  className="h-64 w-full object-cover object-top md:h-80 xl:h-[26rem]"
                />
              </picture>
            </motion.a>
            <span className="sticker absolute -bottom-4 right-6 rotate-[-6deg] text-lg md:text-xl">
              project {number}
            </span>
            <Asterisk className="pointer-events-none absolute -left-6 -top-6 hidden h-12 w-12 text-ink/25 md:block" />
          </div>
        </Reveal>
      </div>
    </article>
  );
};

export default ProjectItem;
