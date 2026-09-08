import React from "react";

export default function Marquee({ items = [], speed = 28 }) {
  const duration = `${Math.max(8, speed)}s`;
  return (
    <div className="relative overflow-hidden">
      <div className="mask-fade-x">
        <div
          className="flex gap-8 animate-marquee will-change-transform"
          style={{ animationDuration: duration }}
        >
          {[...items, ...items].map((it, i) => (
            <span
              key={i}
              className="whitespace-nowrap rounded-full border-2 border-ink/70 px-4 py-1.5 text-sm md:text-base text-ink/80"
            >
              {it}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
