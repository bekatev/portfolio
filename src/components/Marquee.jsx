import React from "react";

export default function Marquee({ items = [], speed = 28 }) {
  const duration = `${Math.max(8, speed)}s`;
  return (
    <div className="relative overflow-hidden">
      <div className="mask-fade-x">
        <div className="flex gap-12 animate-marquee will-change-transform" style={{ animationDuration: duration }}>
          {[...items, ...items].map((it, i) => (
            <span key={i} className="text-primary/70 text-sm md:text-base">{it}</span>
          ))}
        </div>
      </div>
    </div>
  );
}


