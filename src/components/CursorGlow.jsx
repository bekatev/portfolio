import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CursorGlow({ size = 360 }) {
  const x = useMotionValue(-size);
  const y = useMotionValue(-size);
  const xs = useSpring(x, { stiffness: 120, damping: 20, mass: 0.4 });
  const ys = useSpring(y, { stiffness: 120, damping: 20, mass: 0.4 });

  useEffect(() => {
    const handler = (e) => {
      const cx = e.clientX - size / 2;
      const cy = e.clientY - size / 2;
      x.set(cx);
      y.set(cy);
    };
    window.addEventListener("pointermove", handler, { passive: true });
    return () => window.removeEventListener("pointermove", handler);
  }, [size, x, y]);

  return (
    <div className="fixed inset-0 z-[40] pointer-events-none">
      <motion.div
        aria-hidden
        className="absolute rounded-full"
        style={{ left: xs, top: ys, width: size, height: size, background: "radial-gradient(closest-side, rgba(85,115,115,0.22), rgba(13,13,13,0))" }}
      />
    </div>
  );
}


