import { useEffect, useState } from "react";

const navigation = [
  { label: "Inicio", href: "#inicio" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Tecnologías", href: "#tecnologias" },
  { label: "Sobre mí", href: "#sobre-mi" },
  { label: "Contacto", href: "#contacto" },
];

function NavBar() {
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("lf-theme-developer-v3") === "dark"
        ? "dark"
        : "light";
    } catch {
      return "light";
    }
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    setTheme(next);
    try {
      localStorage.setItem("lf-theme-developer-v3", next);
    } catch {
      // El tema sigue funcionando aunque localStorage no esté disponible.
    }
  }
  useEffect(() => {
    function onKeyDown(event) { if (event.key === "Escape") setOpen(false); }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  function navigateToSection(event, href) {
    const section = document.querySelector(href);
    if (!section) return;

    event.preventDefault();
    setOpen(false);

    const headerHeight =
      document.querySelector(".site-header")?.offsetHeight ?? 84;

    const content =
      section.querySelector(".section-intro, .about-pane, .contact-panel")
      || section;

    const rect = content.getBoundingClientRect();

    const grid = href === "#tecnologias"
      ? section.querySelector(".stack-grid")
      : null;

    const bottom = grid
      ? grid.getBoundingClientRect().bottom
      : rect.bottom;

    const blockHeight = bottom - rect.top;
    const available = window.innerHeight - headerHeight - 48;

    const centerOffset =
      ["#tecnologias", "#sobre-mi"].includes(href)
        ? Math.max(0, (available - blockHeight) / 2)
        : 0;

    const top = href === "#inicio"
      ? 0
      : window.scrollY + rect.top
        - headerHeight - 24 - centerOffset;

    window.history.pushState(null, "", href);
    window.scrollTo({
      top: Math.max(0, top),
      behavior: "smooth"
    });
  }

  return <header className="site-header">
    <div className="container header-inner">
      <a href="#inicio" className="brand" onClick={() => setOpen(false)} aria-label="Lucas Benítez — Volver al inicio">
        <span className="brand-mark">&lt;/&gt;</span><span className="brand-wordmark"><span>Lucas</span><span className="brand-frontend">Frontend</span></span>
      </a>
      <nav className={open ? "nav-links is-open" : "nav-links"} id="site-navigation" aria-label="Navegación principal">
        {navigation.map(item => <a key={item.href} href={item.href} onClick={(event) => navigateToSection(event, item.href)}>{item.label}</a>)}
      </nav>
      
      <button
        className="developer-theme-toggle"
        type="button"
        onClick={toggleTheme}
        aria-label={theme === "light" ? "Activar modo oscuro" : "Activar modo claro"}
        title={theme === "light" ? "Modo oscuro" : "Modo claro"}
      >
        <span className="developer-theme-option developer-theme-left" aria-hidden="true">&lt;/&gt;</span>
        <span className="developer-theme-option developer-theme-right" aria-hidden="true">&lt;/&gt;</span>
      </button>
      <button className="menu-button" type="button" aria-label={open ? "Cerrar menú" : "Abrir menú"} aria-expanded={open} aria-controls="site-navigation" onClick={() => setOpen(!open)}><span/><span/><span/></button>
    </div>
  </header>;
}

export default NavBar;
