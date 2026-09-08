import React from "react";

// Six-petal asterisk/flower mark used as a decorative accent.
export function Asterisk({ className = "", spin = false }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 100 100"
      className={`${className} ${spin ? "animate-slow-spin" : ""}`}
      fill="currentColor"
    >
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <ellipse
          key={angle}
          cx="50"
          cy="26"
          rx="14"
          ry="26"
          transform={`rotate(${angle} 50 50)`}
        />
      ))}
    </svg>
  );
}

export function Sparkle({ className = "" }) {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M12 0c.6 5.7 2.4 9.1 6.4 10.5C14 11.6 12.5 15 12 24c-.6-9-2.1-12.4-6.4-13.5C9.6 9.1 11.4 5.7 12 0z" />
    </svg>
  );
}

// macOS-style folder tile with a caption underneath.
export function Folder({ label, href, className = "", rotate = 0 }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      className={`group inline-flex flex-col items-center gap-2 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <svg
        aria-hidden
        viewBox="0 0 96 74"
        className="w-16 md:w-20 drop-shadow-[2px_3px_0_rgb(var(--color-ink)/0.25)] transition-transform duration-300 group-hover:-translate-y-1"
      >
        <path
          d="M3 12a9 9 0 019-9h22a9 9 0 016.4 2.6L48 12h36a9 9 0 019 9v41a9 9 0 01-9 9H12a9 9 0 01-9-9V12z"
          fill="rgb(var(--color-sky))"
        />
        <path
          d="M3 22h90v40a9 9 0 01-9 9H12a9 9 0 01-9-9V22z"
          fill="rgb(var(--color-sky))"
          fillOpacity="0.75"
        />
      </svg>
      <span className="eyebrow text-center">{label}</span>
    </Tag>
  );
}

// Desktop "file" thumbnail: framed image plus a filename caption.
export function FileThumb({ src, alt, caption, className = "", rotate = 0, href }) {
  const Tag = href ? "a" : "div";
  return (
    <Tag
      href={href}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={`group inline-flex flex-col items-center gap-2 ${className}`}
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <span className="block overflow-hidden rounded-[10px] border-2 border-ink bg-paper shadow-hard-sm transition-transform duration-300 group-hover:-translate-y-1">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          className="h-16 w-24 md:h-20 md:w-32 object-cover"
        />
      </span>
      <span className="eyebrow text-center">{caption}</span>
    </Tag>
  );
}

// Small arrow pointer, echoing the desktop-cursor motif of the layout.
export function Pointer({ className = "" }) {
  return (
    <svg aria-hidden viewBox="0 0 24 30" className={className} fill="currentColor">
      <path
        d="M2 1l19 14-8.4 1.2L17 27l-4 1.6-4.3-10.4L2 23V1z"
        stroke="rgb(var(--color-bckg))"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Section header with corner eyebrow labels, matching the reference layout.
export function SectionLabels({ left, right }) {
  return (
    <div className="flex items-center justify-between">
      <span className="eyebrow">{left}</span>
      <span className="eyebrow">{right}</span>
    </div>
  );
}
