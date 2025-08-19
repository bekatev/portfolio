import React, { useEffect, useRef } from "react";

// Subtle floating blobs, distinct from but inspired by premium hero backgrounds
export default function Background() {
  const blobs = useRef([]);

  useEffect(() => {
    const elements = blobs.current;
    if (!elements.length) return;
    let raf = 0;
    const seed = Math.random() * 1000;
    const animate = (t) => {
      elements.forEach((el, idx) => {
        const k = 0.0004 + idx * 0.00007;
        const x = Math.sin((t + seed + idx * 1200) * k) * 20;
        const y = Math.cos((t + seed + idx * 900) * k) * 16;
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div aria-hidden className="aurora grain">
      <div className="absolute top-20 left-10">
        <div ref={(el) => (blobs.current[0] = el)} className="h-72 w-72 rounded-full bg-bttn/18 blur-3xl" />
      </div>
      <div className="absolute bottom-20 right-10">
        <div ref={(el) => (blobs.current[1] = el)} className="h-96 w-96 rounded-full bg-white/10 blur-[80px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
        <div ref={(el) => (blobs.current[2] = el)} className="h-80 w-80 rounded-full bg-bttn/10 blur-[70px]" />
      </div>
    </div>
  );
}


