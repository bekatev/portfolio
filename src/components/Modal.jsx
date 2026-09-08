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
          className="absolute inset-0 bg-ink/50 backdrop-blur-sm"
          onClick={(e) => {
            e.stopPropagation();
            if (Date.now() - openedAt.current < 500) return; // ignore immediate click after open
            handleModal();
          }}
        />
        <div
          className="relative w-full md:w-3/4 lg:w-1/2 rounded-card border-2 border-ink bg-paper p-6 md:p-8 shadow-hard animate-[modalIn_280ms_ease-out]"
          onMouseDown={(e) => e.stopPropagation()}
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="display text-2xl md:text-3xl text-ink">Project Info</h2>
          <p className="mt-3 text-ink/80 text-sm md:text-base leading-relaxed">{description}</p>
          <div className="mt-6 flex justify-end">
            <button
              className="rounded-full border-2 border-ink bg-ink px-5 py-2 text-bckg hover:brightness-110"
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
          className="rounded-full border-2 border-ink px-5 py-2 text-ink hover:bg-ink hover:text-bckg transition-colors"
          onClick={openFn}
        >
          More Info
        </button>
      )}
    </>
  );
}
