import React, { useState } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";

export default function Modal({ description }) {
  function ModalBox({ handleModal }) {
    useLockBodyScroll();
    return (
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4">
        <div className="absolute inset-0 bg-bckg/80 backdrop-blur-sm" onClick={handleModal} />
        <div className="relative w-full md:w-3/4 lg:w-1/2 rounded-2xl border border-white/10 bg-bckg p-6 md:p-8 shadow-2xl">
          <h2 className="text-xl md:text-2xl text-primary font-semibold">Project Info</h2>
          <p className="mt-3 text-primary/85 text-sm md:text-base">{description}</p>
          <div className="mt-6 flex justify-end">
            <button
              className="px-4 py-2 rounded-full bg-bttn text-white hover:brightness-110"
              onClick={handleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  }

  const [openModal, setopenModal] = useState(false);
  return (
    <>
      {openModal && <ModalBox handleModal={() => setopenModal(false)} />}
      <button
        className="px-4 py-2 rounded-full border border-white/15 text-primary hover:bg-white/10"
        onClick={() => setopenModal(true)}
      >
        More Info
      </button>
    </>
  );
}
