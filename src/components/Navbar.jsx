import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen((prev) => !prev);

  const NavLinks = ({ onClick }) => (
    <>
      <a href="#main" onClick={onClick} className="px-3 py-2 text-primary/90 hover:text-primary">Home</a>
      <a href="#projects" onClick={onClick} className="px-3 py-2 text-primary/90 hover:text-primary">Projects</a>
      <a href="#about" onClick={onClick} className="px-3 py-2 text-primary/90 hover:text-primary">About</a>
      <a href="#work" onClick={onClick} className="px-3 py-2 text-primary/90 hover:text-primary">Jobs</a>
      <a href="#contact" onClick={onClick} className="px-3 py-2 text-primary/90 hover:text-primary">Contact</a>
    </>
  );

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="sm:max-w-[90vw] max-w-[96vw] mx-auto mt-4">
        <div className="h-14 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur px-4">
          <a href="#main" className="text-primary font-semibold tracking-wide">Beka Tevdorashvili</a>
          <div className="hidden md:flex items-center text-sm">
            <NavLinks />
          </div>
          <button
            aria-label="Toggle Menu"
            className="md:hidden text-primary"
            onClick={toggle}
          >
            {isOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-bckg/80 backdrop-blur-sm flex items-center justify-center">
          <button
            aria-label="Close Menu"
            className="absolute top-6 right-6 text-primary"
            onClick={toggle}
          >
            <AiOutlineClose className="text-3xl" />
          </button>
          <div className="flex flex-col items-center space-y-6 text-xl">
            <NavLinks onClick={toggle} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
