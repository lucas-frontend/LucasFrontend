import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./MonasterGallery.css";

const images = [
  ["cronograma.webp", "Cronograma"],
  ["pendientes.webp", "Pendientes"],
  ["solicitudes.webp", "Solicitudes"],
  ["empleados.webp", "Empleados"],
  ["estadisticas.webp", "Estadísticas"],
  ["configuracion.webp", "Configuración"],
  ["ingrese_contraseña.webp", "Inicio de sesión"],
  ["cambiar_contraseña.webp", "Cambiar contraseña"],
];

export default function MonasterGallery({ onClose }) {
  const [current, setCurrent] = useState(0);
  const move = (step) => setCurrent(i => (i + step + images.length) % images.length);
  const url = (file) => `/projects/monaster/${encodeURIComponent(file)}`;

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
    <div className="monaster-gallery-backdrop"
      onMouseDown={e => { if (e.target === e.currentTarget) onClose(); }}>
      <section className="monaster-gallery-panel" role="dialog"
        aria-modal="true" aria-label="Galería de Monaster">
        <header className="monaster-gallery-header">
          <strong>Monaster · Galería</strong>
          <button onClick={onClose} aria-label="Cerrar galería" autoFocus>✕</button>
        </header>
        <div className="monaster-gallery-stage">
          <button onClick={() => move(-1)} aria-label="Imagen anterior">❮</button>
          <img src={url(images[current][0])}
            alt={`Monaster: ${images[current][1]}`} />
          <button onClick={() => move(1)} aria-label="Imagen siguiente">❯</button>
        </div>
        <div className="monaster-gallery-caption">
          <span>{images[current][1]} · {current + 1} / {images.length}</span>
          <a href={url(images[current][0])} target="_blank"
            rel="noopener noreferrer">Ver tamaño original ↗</a>
        </div>
        <nav className="monaster-gallery-thumbs" aria-label="Seleccionar captura">
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

