import React, { useEffect, useRef } from "react";

// Soft drifting washes behind the paper texture.
export default function Background() {
  const blobs = useRef([]);

  useEffect(() => {
    const elements = blobs.current;
    if (!elements.length) return;
    let raf = 0;
    const seed = Math.random() * 1000;
    const animate = (t) => {
      elements.forEach((el, idx) => {
        if (!el) return;
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
    <div aria-hidden className="paper-field grain">
      <div className="absolute top-24 left-6">
        <div ref={(el) => (blobs.current[0] = el)} className="h-72 w-72 rounded-full bg-sky/25 blur-[70px]" />
      </div>
      <div className="absolute bottom-24 right-6">
        <div ref={(el) => (blobs.current[1] = el)} className="h-96 w-96 rounded-full bg-sky/15 blur-[90px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2">
        <div ref={(el) => (blobs.current[2] = el)} className="h-80 w-80 rounded-full bg-ink/[0.06] blur-[80px]" />
      </div>
    </div>
  );
}
