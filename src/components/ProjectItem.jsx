import React from "react";
import Modal from "./Modal";

const ProjectItem = ({ img, title, link, language, description }) => {
  return (
    <div className="group flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03] snap-start hover:shadow-2xl hover:shadow-black/20 transition">
      <a href={link} target="_blank" rel="noopener noreferrer" className="relative block">
        <img
          src={img}
          alt={title}
          className="w-full h-56 object-cover transition duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bckg/70 via-bckg/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
          <div className="rounded-xl border border-white/15 bg-white/10 backdrop-blur px-4 py-3 text-center">
            <h3 className="text-lg font-semibold text-primary">{title}</h3>
            <p className="text-sm text-primary/80">{language}</p>
          </div>
        </div>
      </a>
      <div className="p-4">
        <Modal description={description} />
      </div>
    </div>
  );
};

export default ProjectItem;
