import React, { useState } from "react";
import { useLockBodyScroll } from "@uidotdev/usehooks";
import ProjectItem from "./ProjectItem";

export default function Modal({ description }) {
  function ModalBox({ handleModal }) {
    useLockBodyScroll();
    return (
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[99999] bg-white rounded-xl p-5 text-center justify-center shadow-2xl border border-gray-600 md:w-9/12 w-11/12">
        <h1 className="sm:text-xl md:text-3xl pb-4">INFO</h1>
        <p className="sm:text-sm md:text-base text-left p-4">{description}</p>
        <button
          className="sm:text-lg md:text-xl bg-primary px-4 py-2 m-2 hover:bg-black hover:text-primary rounded-xl"
          onClick={handleModal}
        >
          close
        </button>
      </div>
    );
  }

  const [openModal, setopenModal] = useState(false);
  return (
    <>
      {openModal && <ModalBox handleModal={() => setopenModal(false)} />}
      <div className="text-left justify-left items-left">
        <button
          className="bg-primary rounded-b-xl py-2 px-4 text-white hover:bg-black hover:text-primary"
          onClick={() => setopenModal(true)}
        >
          More Info
        </button>
      </div>
    </>
  );
}
