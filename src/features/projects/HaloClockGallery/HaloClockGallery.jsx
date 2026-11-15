import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./HaloClockGallery.css";

const images = [
  ["inicio.png", "Inicio"],
  ["mis perros.png", "Mis Perros"],
  ["historial.png", "Historial"],
  ["estadisticas.png", "Estadísticas"],
  ["mi familia.png", "Mi Familia"],
  ["notificaciones.png", "Notificaciones"],
  ["configuracion.png", "Configuración"],
  ["mi cuenta.png", "Mi Cuenta"],
  ["inicio sesion.png", "Inicio de sesión"],
];

export default function HaloClockGallery({ onClose }) {
  const [current, setCurrent] = useState(0);
  const move = (step) => setCurrent(i => (i + step + images.length) % images.length);
  const url = (file) => `/projects/haloclock/${encodeURIComponent(file)}`;

  useEffect(() => {
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") move(1);
      if (e.key === "ArrowLeft") move(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return createPortal(
    <div className="haloclock-gallery-backdrop"
      onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <section className="haloclock-gallery-panel" role="dialog"
        aria-modal="true" aria-label="Galería de HaloClock">
        <header className="haloclock-gallery-header">
          <strong>HaloClock · Galería</strong>
          <button onClick={onClose} aria-label="Cerrar galería" autoFocus>✕</button>
        </header>
        <div className="haloclock-gallery-stage">
          <button onClick={() => move(-1)} aria-label="Imagen anterior">❮</button>
          <img src={url(images[current][0])}
            alt={`HaloClock: ${images[current][1]}`} />
          <button onClick={() => move(1)} aria-label="Imagen siguiente">❯</button>
        </div>
        <div className="haloclock-gallery-caption">
          <span>{images[current][1]} · {current + 1} / {images.length}</span>
          <a href={url(images[current][0])} target="_blank"
            rel="noopener noreferrer">Ver tamaño original ↗</a>
        </div>
        <nav className="haloclock-gallery-thumbs" aria-label="Seleccionar captura">
          {images.map(([file, label], i) => (
            <button key={file} onClick={() => setCurrent(i)}
              aria-pressed={current === i} aria-label={`Ver ${label}`}>
              <img src={url(file)} alt="" loading="lazy" />
              <span>{label}</span>
            </button>
          ))}
        </nav>
      </section>
    </div>,
    document.body
  );
}


