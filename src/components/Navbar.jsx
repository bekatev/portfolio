import React, { useEffect, useRef, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");
  const toggle = () => setIsOpen((prev) => !prev);
  const applyTheme = (value) => {
    const root = document.documentElement;
    if (value === "light") root.classList.add("theme-light");
    else root.classList.remove("theme-light");
  };
  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch {}
  };

  useEffect(() => {
    let initial = "dark";
    try {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") initial = stored;
      // Default to dark as requested
    } catch {}
    setTheme(initial);
    applyTheme(initial);
  }, []);

  // Lock body scroll when mobile menu is open
  const prevHtmlOverflow = useRef("");
  const prevBodyOverflow = useRef("");
  const prevBodyTouch = useRef("");
  useEffect(() => {
    const htmlStyle = document.documentElement.style;
    const bodyStyle = document.body.style;
    if (isOpen) {
      prevHtmlOverflow.current = htmlStyle.overflow;
      prevBodyOverflow.current = bodyStyle.overflow;
      prevBodyTouch.current = bodyStyle.touchAction;
      htmlStyle.overflow = "hidden";
      bodyStyle.overflow = "hidden";
      bodyStyle.touchAction = "none";
    } else {
      htmlStyle.overflow = prevHtmlOverflow.current || "";
      bodyStyle.overflow = prevBodyOverflow.current || "";
      bodyStyle.touchAction = prevBodyTouch.current || "";
    }
    return () => {
      htmlStyle.overflow = prevHtmlOverflow.current || "";
      bodyStyle.overflow = prevBodyOverflow.current || "";
      bodyStyle.touchAction = prevBodyTouch.current || "";
    };
  }, [isOpen]);

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
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="sm:max-w-[90vw] max-w-[96vw] mx-auto mt-4">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="h-14 flex items-center justify-between rounded-full border border-white/10 bg-white/5 backdrop-blur px-4"
        >
          <a href="#main" className="text-primary font-semibold tracking-wide">Beka Tevdorashvili</a>
          <div className="hidden md:flex items-center text-sm">
            <NavLinks />
            <button aria-label="Toggle theme" onClick={toggleTheme} className="ml-3 text-primary/80 hover:text-primary">
              {theme === "dark" ? <BsSun /> : <BsMoon />}
            </button>
          </div>
          <button
            aria-label="Toggle Menu"
            className="md:hidden text-primary"
            onClick={toggle}
          >
            {isOpen ? <AiOutlineClose className="text-2xl" /> : <AiOutlineMenu className="text-2xl" />}
          </button>
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-bckg/80 backdrop-blur-sm flex items-center justify-center h-[100dvh]"
          >
            <button
              aria-label="Close Menu"
              className="absolute top-6 right-6 text-primary"
              onClick={toggle}
            >
              <AiOutlineClose className="text-3xl" />
            </button>
            <motion.div
              initial={{ scale: 0.96, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.98, opacity: 0 }}
              transition={{ type: "spring", stiffness: 220, damping: 20 }}
              className="flex flex-col items-center space-y-6 text-xl"
            >
              <NavLinks onClick={toggle} />
              <button aria-label="Toggle theme" onClick={toggleTheme} className="mt-2 text-primary/80 hover:text-primary">
                {theme === "dark" ? <BsSun /> : <BsMoon />}
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
