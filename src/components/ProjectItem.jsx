import React, { useState } from "react";
import Modal from "./Modal";
import Tilt from "./Tilt";

const ProjectItem = ({ slug, img, title, link, language, description }) => {
  const [open, setOpen] = useState(false);
  return (
    <Tilt className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] snap-start hover:shadow-2xl hover:shadow-black/20 transition shine-on-hover gcard min-h-[360px]">
      <a href={link} target="_blank" rel="noopener noreferrer" className="relative block z-0">
        <div className="relative overflow-hidden rounded-t-2xl">
          <picture>
            <source srcSet={`${import.meta.env.BASE_URL}optimized/${slug}.avif`} type="image/avif" />
            <source srcSet={`${import.meta.env.BASE_URL}optimized/${slug}.webp`} type="image/webp" />
            <img
              src={img}
              alt={title}
              loading="lazy"
              decoding="async"
              className="w-full h-72 object-cover transform-gpu will-change-transform transition duration-500 group-hover:scale-[1.03]"
            />
          </picture>
          <div className="absolute inset-0 rounded-t-2xl bg-gradient-to-t from-bckg/70 via-bckg/20 to-transparent opacity-0 group-hover:opacity-100 transition pointer-events-none" />
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3 text-center">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="text-sm text-primary/80">{language}</p>
          </div>
        </div>
      </a>
      <div className="relative z-50 pointer-events-auto h-20 flex items-center justify-center p-3">
        <Modal description={description} open={open} onClose={() => setOpen(false)} hideTrigger />
        <button
          type="button"
          className="px-3 py-1.5 rounded-full border border-white/15 text-primary hover:bg-white/10 text-sm"
          aria-expanded={open}
          onMouseDown={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(true); }}
          onTouchStart={(e) => { e.preventDefault(); e.stopPropagation(); setOpen(true); }}
          onClick={(e) => { e.preventDefault(); e.stopPropagation(); }}
        >
          More Info
        </button>
      </div>
    </Tilt>
  );
};

export default ProjectItem;
