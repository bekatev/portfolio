import React from "react";
import Modal from "./Modal";

const ProjectItem = ({ img, title, link, language, description }) => {
  return (
    <div className="flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.03]">
      <a href={link} target="_blank" rel="noopener noreferrer" className="group relative block">
        <img
          src={img}
          alt={title}
          className="w-full h-56 object-cover transition duration-300 group-hover:scale-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bckg/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition" />
        <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition">
          <h3 className="text-lg font-semibold text-primary">{title}</h3>
          <p className="text-sm text-primary/80">{language}</p>
        </div>
      </a>
      <div className="p-4">
        <Modal description={description} />
      </div>
    </div>
  );
};

export default ProjectItem;
