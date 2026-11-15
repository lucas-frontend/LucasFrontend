import heroPhoto from "../../../assets/lucas-profile.webp";

export default function Hero({ ArrowIcon, BriefcaseIcon }) {
  return <section id="inicio" className="hero-section container" aria-labelledby="hero-title">
    <div className="hero-copy">
      <div className="eyebrow"><span className="status-dot" /> DISPONIBLE PARA OPORTUNIDADES FRONTEND Y FULL STACK</div>
      <h1 id="hero-title">Hola, soy <span className="hero-name">Lucas.</span><br/><span className="hero-line">Construyo software que<br className="desktop-break"/> resuelve problemas <span className="text-gradient">reales.</span></span></h1>
      <p className="hero-description">Desarrollador Frontend & Full Stack. Transformo necesidades en aplicaciones útiles, desde la experiencia de usuario hasta la lógica y los datos.</p>
      <div className="hero-buttons"><a href="#proyectos" className="button button-primary"
onClick={(e) => {
  const enlaceMenu = document.querySelector('.site-header a[href="#proyectos"]');
  if (enlaceMenu) {
    e.preventDefault();
    enlaceMenu.click();
  }
}}>Explorar proyectos <ArrowIcon size={18}/></a><a href="/CV_LucasFrontend.pdf" download="CV_Lucas_Benitez_Frontend_FullStack_2026.pdf" className="button button-ghost">Descargar CV <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m-4-4 4 4 4-4M5 17h14"/></svg></a></div>
      
    </div>
    <div className="hero-visual">
      <div className="portrait-aura" aria-hidden="true"/>
      <div className="portrait-card"><img src={heroPhoto} alt="Lucas Benítez trabajando frente a su ordenador" width="850" height="980" fetchPriority="high"/><div className="portrait-overlay" aria-hidden="true"/></div>
      <div className="floating-label floating-label-top"><span className="label-icon">✳</span><span><strong>01 producto comercial</strong><small>Del desarrollo a la entrega</small></span></div>
      <div className="floating-label floating-label-bottom"><span className="terminal-bracket">&lt;/&gt;</span><span>Frontend <span className="floating-plus">+</span> Full Stack</span></div>
      
    </div>
    
  </section>;
}
