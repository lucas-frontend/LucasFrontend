
import { useEffect } from "react";
import { createPortal } from "react-dom";
import "./HaloClockVideo.css";

export default function HaloClockVideo({ onClose }) {
  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="video-backdrop"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}>
      <section className="video-modal" role="dialog"
        aria-modal="true" aria-label="Demo de HaloClock">
        <header>
          <strong>HaloClock · Demo</strong>
          <button onClick={onClose} aria-label="Cerrar" autoFocus>✕</button>
        </header>
        <video controls playsInline preload="metadata"
          src="/projects/haloclock/haloclock-demo.mp4" />
      </section>
    </div>,
    document.body
  );
}


