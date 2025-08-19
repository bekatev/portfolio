import React from "react";
import Parallax from "./Parallax";
import Reveal from "./Reveal";

const Contact = () => {
  return (
    <section
      id="contact"
      className="sm:max-w-[90vw] max-w-[96vw] mx-auto my-8 py-12"
    >
      <div className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10 overflow-hidden">
        <Parallax speed={0.2} className="pointer-events-none absolute -z-10 -bottom-16 -right-16">
          <div className="h-72 w-72 rounded-full bg-bttn/20 blur-[50px]" />
        </Parallax>
        <Parallax speed={0.32} className="pointer-events-none absolute -z-10 -top-10 left-1/3">
          <div className="h-48 w-48 rounded-full bg-white/12 blur-3xl" />
        </Parallax>
        <Reveal>
          <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">Contact</h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-2 text-primary/80 text-center">Have a project in mind? Let’s talk.</p>
        </Reveal>
        <form
          className="mt-8"
          action="https://getform.io/f/f5580f3d-5319-4dd9-b11a-b1482aed6818"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full">
            <Reveal className="flex flex-col">
              <label className="text-sm text-primary/80">Name</label>
              <input
                className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                type="text"
                name="name"
                placeholder="Your name"
              />
            </Reveal>
            <Reveal delay={80} className="flex flex-col">
              <label className="text-sm text-primary/80">Phone</label>
              <input
                className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                type="text"
                name="phone"
                placeholder="Your phone"
              />
            </Reveal>
          </div>
          <Reveal delay={120} className="flex flex-col mt-4">
            <label className="text-sm text-primary/80">Email</label>
            <input
              className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </Reveal>
          <Reveal delay={160} className="flex flex-col mt-4">
            <label className="text-sm text-primary/80">Subject</label>
            <input
              className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              type="text"
              name="subject"
              placeholder="What’s this about?"
            />
          </Reveal>
          <Reveal delay={200} className="flex flex-col mt-4">
            <label className="text-sm text-primary/80">Message</label>
            <textarea
              className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              rows="8"
              name="message"
              placeholder="Tell me a bit about your project..."
            />
          </Reveal>
          <Reveal delay={240}>
            <button className="mt-6 inline-flex items-center justify-center rounded-full bg-bttn px-6 py-3 text-white hover:brightness-110">
              Send message
            </button>
          </Reveal>
        </form>
      </div>
    </section>
  );
};

export default Contact;
