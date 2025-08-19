import React from "react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="sm:max-w-[90vw] max-w-[96vw] mx-auto my-8 py-12"
    >
      <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-10">
        <h2 className="text-3xl md:text-4xl font-semibold text-primary text-center">Contact</h2>
        <p className="mt-2 text-primary/80 text-center">Have a project in mind? Let’s talk.</p>
        <form
          className="mt-8"
          action="https://getform.io/f/f5580f3d-5319-4dd9-b11a-b1482aed6818"
          method="POST"
          encType="multipart/form-data"
        >
          <div className="grid md:grid-cols-2 gap-4 w-full">
            <div className="flex flex-col">
              <label className="text-sm text-primary/80">Name</label>
              <input
                className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                type="text"
                name="name"
                placeholder="Your name"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-sm text-primary/80">Phone</label>
              <input
                className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
                type="text"
                name="phone"
                placeholder="Your phone"
              />
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm text-primary/80">Email</label>
            <input
              className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              type="email"
              name="email"
              placeholder="you@example.com"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm text-primary/80">Subject</label>
            <input
              className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              type="text"
              name="subject"
              placeholder="What’s this about?"
            />
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm text-primary/80">Message</label>
            <textarea
              className="mt-2 rounded-xl border border-white/15 bg-transparent p-3 text-primary placeholder:text-primary/50 focus:outline-none focus:ring-2 focus:ring-white/20"
              rows="8"
              name="message"
              placeholder="Tell me a bit about your project..."
            />
          </div>
          <button className="mt-6 inline-flex items-center justify-center rounded-full bg-bttn px-6 py-3 text-white hover:brightness-110">
            Send message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
