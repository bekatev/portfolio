import React from "react";
import Parallax from "./Parallax";
import Reveal from "./Reveal";
import { Asterisk, Sparkle } from "./Decor";

const field =
  "mt-2 w-full rounded-[14px] border-2 border-ink/85 bg-bckg p-3 text-ink placeholder:text-ink/40 focus:outline-none focus:border-ink focus:ring-2 focus:ring-sky/50";

const Contact = () => {
  return (
    <section
      id="contact"
      className="sm:max-w-[90vw] max-w-[96vw] mx-auto my-8 py-16 md:py-24"
    >
      <div className="relative rounded-card border-2 border-ink bg-paper p-6 md:p-12 shadow-hard overflow-hidden">
        <Parallax speed={0.2} className="pointer-events-none absolute -z-10 -bottom-16 -right-16">
          <div className="h-72 w-72 rounded-full bg-sky/25 blur-[60px]" />
        </Parallax>
        <Parallax speed={0.32} className="pointer-events-none absolute -z-10 -top-10 left-1/3">
          <div className="h-48 w-48 rounded-full bg-ink/10 blur-3xl" />
        </Parallax>

        <div className="flex items-start justify-between">
          <span className="eyebrow">contact</span>
          <span className="eyebrow">bekatevd@gmail.com</span>
        </div>

        <div className="relative mt-6 flex flex-col items-center text-center">
          <Reveal>
            <h2 className="display text-[13vw] sm:text-6xl md:text-8xl text-ink">Contact</h2>
          </Reveal>
          <Reveal delay={80}>
            <p className="mt-3 font-script text-2xl md:text-3xl text-ink/70">
              Have a project in mind? Let’s talk.
            </p>
          </Reveal>
          <Asterisk className="pointer-events-none absolute right-4 -top-2 hidden h-12 w-12 text-ink/20 md:block" spin />
          <Sparkle className="pointer-events-none absolute left-6 top-4 hidden h-5 w-5 text-ink/30 md:block" />
        </div>

        <form
          className="mt-10"
          action="https://getform.io/f/f5580f3d-5319-4dd9-b11a-b1482aed6818"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full">
            <Reveal className="flex flex-col">
              <label className="eyebrow">Name</label>
              <input className={field} type="text" name="name" placeholder="Your name" />
            </Reveal>
            <Reveal delay={80} className="flex flex-col">
              <label className="eyebrow">Phone</label>
              <input className={field} type="text" name="phone" placeholder="Your phone" />
            </Reveal>
          </div>
          <Reveal delay={120} className="flex flex-col mt-4">
            <label className="eyebrow">Email</label>
            <input className={field} type="email" name="email" placeholder="you@example.com" />
          </Reveal>
          <Reveal delay={160} className="flex flex-col mt-4">
            <label className="eyebrow">Subject</label>
            <input className={field} type="text" name="subject" placeholder="What’s this about?" />
          </Reveal>
          <Reveal delay={200} className="flex flex-col mt-4">
            <label className="eyebrow">Message</label>
            <textarea
              className={field}
              rows="8"
              name="message"
              placeholder="Tell me a bit about your project..."
            />
          </Reveal>
          <Reveal delay={240}>
            <button className="magnet mt-8 inline-flex items-center justify-center gap-2 rounded-full border-2 border-ink bg-ink px-8 py-3 text-bckg shadow-hard-sm hover:shadow-hard">
              Send message
              <span aria-hidden>→</span>
            </button>
          </Reveal>
        </form>
      </div>
    </section>
  );
};

export default Contact;
