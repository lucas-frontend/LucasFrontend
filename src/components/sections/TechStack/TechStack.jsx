const STACK = [
  {index:'01', title:'Frontend', desc:'Interfaz y experiencia de usuario', values:['React','TypeScript','JavaScript','HTML / CSS','Responsive UI','Vite']},
  {index:'02', title:'Backend y datos', desc:'Lógica, autenticación y persistencia', values:['Node.js','Express','MongoDB','Mongoose','REST API','SQLite']},
  {index:'03', title:'Desktop y herramientas', desc:'Software instalable y flujo de trabajo', values:['Tauri','Rust','Git / GitHub','JWT / OAuth','Windows','Diseño UI']}
];
function TechStack() {return <section className="section stack-section container" id="tecnologias" aria-labelledby="stack-heading"><div className="section-intro"><span className="section-kicker"><span>02</span> / HERRAMIENTAS</span><div className="section-intro-row"><h2 id="stack-heading">Tecnología con <em>propósito.</em></h2></div></div><div className="stack-grid">{STACK.map(group=><article className="stack-card" key={group.title}><div className="stack-heading"><span>{group.index} /</span><h3>{group.title}</h3></div><p>{group.desc}</p><div className="stack-tags">{group.values.map(v=><span key={v}>{v}</span>)}</div></article>)}</div></section>}

export default TechStack;
