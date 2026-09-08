import React from "react";
import { motion } from "framer-motion";
import Reveal from "./Reveal";
import { Sparkle } from "./Decor";

const items = [
  { title: "Performance", desc: "Lighthouse-minded builds, fast by default." },
  { title: "Accessibility", desc: "Inclusive UX with attention to detail." },
  { title: "Animation", desc: "Tasteful motion that communicates." },
  { title: "Craft", desc: "Polished visuals and consistent systems." },
];

export default function Highlights() {
  return (
    <section className="sm:max-w-[90vw] max-w-[96vw] m-auto py-16 md:py-20">
      <div className="flex items-center justify-between">
        <span className="eyebrow">what I bring</span>
        <span className="eyebrow">highlights</span>
      </div>

      <Reveal>
        <h2 className="display mt-4 text-center text-[12vw] sm:text-5xl md:text-7xl text-ink">Highlights</h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
        {items.map((it, i) => (
          <Reveal delay={i * 80} key={it.title}>
            <motion.div
              whileHover={{ y: -5, rotate: i % 2 === 0 ? -1 : 1 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative h-full min-h-[168px] rounded-card border-2 border-ink bg-paper p-6 shadow-hard-sm"
            >
              <span className="eyebrow">0{i + 1}</span>
              <h3 className="display mt-2 text-2xl text-ink">{it.title}</h3>
              <p className="mt-2 text-sm md:text-base text-ink/70">{it.desc}</p>
              <Sparkle className="pointer-events-none absolute right-4 top-4 h-4 w-4 text-ink/25" />
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
