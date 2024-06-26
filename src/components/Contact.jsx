import React from "react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="sm:max-w-[70vw] max-w-[90vw] mx-auto my-4 p-4 bg-primary rounded-xl shadow-xl"
    >
      <h1 className="py-4 text-4xl font-bold text-center text-bckg">Contact</h1>
      <form
        action="https://getform.io/f/f5580f3d-5319-4dd9-b11a-b1482aed6818"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 text-bckg">Name</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
            />
          </div>
          <div className="flex flex-col">
            <label className="uppercase text-sm py-2 text-bckg">Phone</label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
            />
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-bckg">Email</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="email"
            name="email"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-bckg">Subject</label>
          <input
            className="border-2 rounded-lg p-3 flex border-gray-300"
            type="text"
            name="subject"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2 text-bckg">Message</label>
          <textarea
            className="border-2 rouded-lg p-3 border-gray-300"
            rows="10"
            name="message"
          />
        </div>
        <button className="bg-bckg text-gray-100 mt-4 2-full p-4 rounded-lg hover:bg-black">
          Send
        </button>
      </form>
    </div>
  );
};

export default Contact;
