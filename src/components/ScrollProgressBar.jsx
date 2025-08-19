import React, { useEffect, useState } from "react";

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const doc = document.documentElement;
      const total = doc.scrollHeight - doc.clientHeight;
      const next = total > 0 ? (doc.scrollTop || document.body.scrollTop) / total : 0;
      setProgress(Math.max(0, Math.min(1, next)));
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[60] pointer-events-none">
      <div className="mx-auto sm:max-w-[90vw] max-w-[96vw] px-4">
        <div className="h-[3px] w-full rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full bg-bttn/90" 
            style={{ width: `${progress * 100}%`, transition: "width 160ms ease-out" }}
          />
        </div>
      </div>
    </div>
  );
}


