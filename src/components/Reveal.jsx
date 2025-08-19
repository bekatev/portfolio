import React, { useEffect, useRef, useState } from "react";

const directionToInitial = (direction) => {
  switch (direction) {
    case "up":
      return "opacity-0 translate-y-6";
    case "down":
      return "opacity-0 -translate-y-6";
    case "left":
      return "opacity-0 translate-x-6";
    case "right":
      return "opacity-0 -translate-x-6";
    default:
      return "opacity-0 translate-y-6";
  }
};

export default function Reveal({
  children,
  className = "",
  direction = "up",
  delay = 0,
  once = true,
  threshold = 0.2,
}) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, [once, threshold]);

  const base = "transition-all duration-700 ease-out will-change-transform";
  const initial = directionToInitial(direction);
  const shown = "opacity-100 translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      className={`${base} ${visible ? shown : initial} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}


