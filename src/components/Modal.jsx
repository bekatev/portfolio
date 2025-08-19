import React, { useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLockBodyScroll } from "@uidotdev/usehooks";

export default function Modal({ description, open, onClose, hideTrigger = false }) {
  function ModalBox({ handleModal }) {
    useLockBodyScroll();
    const openedAt = useRef(Date.now());
    return createPortal(
      <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4" onMouseDown={(e) => e.stopPropagation()}>
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={(e) => {
            e.stopPropagation();
            if (Date.now() - openedAt.current < 500) return; // ignore immediate click after open
            handleModal();
          }}
        />
        <div className="relative w-full md:w-3/4 lg:w-1/2 rounded-2xl border border-white/10 bg-bckg p-6 md:p-8 shadow-2xl animate-[modalIn_280ms_ease-out]" onMouseDown={(e) => e.stopPropagation()} onClick={(e) => e.stopPropagation()}>
          <h2 className="text-xl md:text-2xl text-primary font-semibold">Project Info</h2>
          <p className="mt-3 text-primary/80 text-sm md:text-base">{description}</p>
          <div className="mt-6 flex justify-end">
            <button
              className="px-4 py-2 rounded-full bg-bttn text-white hover:brightness-110"
              onClick={handleModal}
            >
              Close
            </button>
          </div>
        </div>
      </div>,
      document.body
    );
  }

  const [openModal, setopenModal] = useState(false);
  const isControlled = typeof open === "boolean";
  const isOpen = isControlled ? open : openModal;
  const close = () => {
    if (!isControlled) setopenModal(false);
    if (onClose) onClose();
  };
  const openFn = () => {
    if (!isControlled) setopenModal(true);
  };

  return (
    <>
      {isOpen && <ModalBox handleModal={close} />}
      {!hideTrigger && (
        <button
          type="button"
          className="px-4 py-2 rounded-full border border-white/15 text-primary hover:bg-white/10"
          onClick={openFn}
        >
          More Info
        </button>
      )}
    </>
  );
}
