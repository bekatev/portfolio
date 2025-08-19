import React from "react";
import Tilt from "./Tilt";
import { motion } from "framer-motion";
import Reveal from "./Reveal";

const items = [
  { title: "Performance", desc: "Lighthouse-minded builds, fast by default.", accent: "from-emerald-400/30 to-transparent" },
  { title: "Accessibility", desc: "Inclusive UX with attention to detail.", accent: "from-cyan-400/30 to-transparent" },
  { title: "Animation", desc: "Tasteful motion that communicates.", accent: "from-indigo-400/30 to-transparent" },
  { title: "Craft", desc: "Polished visuals and consistent systems.", accent: "from-amber-400/30 to-transparent" },
];

export default function Highlights() {
  return (
    <section className="sm:max-w-[90vw] max-w-[96vw] m-auto py-12">
      <Reveal>
        <h2 className="text-3xl md:text-5xl font-semibold text-primary tracking-tight text-center">Highlights</h2>
      </Reveal>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {items.map((it, i) => (
          <Reveal delay={i * 80} key={it.title}>
            <Tilt intensity={8}>
              <motion.div
                whileHover={{ y: -4 }}
                className="gcard shine-on-hover relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 min-h-[160px]"
              >
                <div className={`absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl bg-gradient-to-b ${it.accent}`} />
                <h3 className="text-xl font-semibold text-primary">{it.title}</h3>
                <p className="mt-2 text-primary/80 text-sm md:text-base">{it.desc}</p>
              </motion.div>
            </Tilt>
          </Reveal>
        ))}
      </div>
    </section>
  );
}


