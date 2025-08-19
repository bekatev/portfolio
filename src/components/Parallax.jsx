import React, { useEffect, useRef, useState } from "react";

function useParallax(speed = 0.2) {
  const [offset, setOffset] = useState(0);
  const frame = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      frame.current = requestAnimationFrame(() => {
        setOffset(window.scrollY * speed);
      });
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (frame.current) cancelAnimationFrame(frame.current);
    };
  }, [speed]);

  return offset;
}

export const Parallax = ({ speed = 0.2, className = "", style, children }) => {
  const offset = useParallax(speed);
  return (
    <div
      className={`will-change-transform ${className}`}
      style={{ transform: `translate3d(0, ${offset}px, 0)`, ...style }}
    >
      {children}
    </div>
  );
};

export default Parallax;


