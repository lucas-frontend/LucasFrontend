function HaloclockPreview() {
  const activityBars = [37, 68, 53, 81, 64, 94, 72];

  return (
    <div
      className="preview-window halo-window"
      aria-label="Vista conceptual de Haloclock con perros, paseos y estadísticas."
    >
      <div className="preview-titlebar">
        <div className="preview-dots">
          <i />
          <i />
          <i />
        </div>
        <span>haloclock · panel familiar</span>
        <span className="preview-controls">{"\u2212\u3000\u25a1\u3000\u00d7"}</span>
      </div>

      <div className="halo-preview">
        <div className="halo-top">
          <span className="halo-brand">
            <span aria-hidden="true">🐾</span> haloclock
          </span>
          <span className="halo-user">Familia ▾</span>
        </div>

        <div className="halo-greeting">
          <small>BUENOS DÍAS</small>
          <strong>Sus paseos, en un solo lugar.</strong>
          <span>Comparte el cuidado de tus perros con tu familia.</span>
        </div>

        <div className="halo-cards">
          <div className="halo-dog">
            <span className="dog-emoji" aria-hidden="true">🐕</span>
            <strong>Max</strong>
            <small>Último paseo · Hoy</small>
          </div>

          <div className="halo-dog">
            <span className="dog-emoji" aria-hidden="true">🐶</span>
            <strong>Luna</strong>
            <small>Último paseo · Ayer</small>
          </div>
        </div>

        <div className="halo-chart">
          <span>Actividad semanal</span>
          <div className="halo-bars">
            {activityBars.map((height, index) => (
              <span key={index} style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default HaloclockPreview;
