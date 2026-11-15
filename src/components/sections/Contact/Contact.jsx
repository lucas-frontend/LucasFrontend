import { useState } from "react";

export default function Contact({ email, MailIcon }) {
  const [copied, setCopied] = useState(false);
  async function copyEmail(){try{await navigator.clipboard.writeText(email);setCopied(true);window.setTimeout(()=>setCopied(false),2500);}catch{window.prompt("Copia esta dirección de correo:", email);}}
  return <section className="section contact-section container" id="contacto" aria-labelledby="contact-heading"><div className="contact-panel"><div className="contact-orb" aria-hidden="true"/><div className="contact-content"><span className="section-kicker"><span>04</span> / HABLEMOS</span><h2 id="contact-heading">¿Creamos algo <em>útil?</em></h2><p>Estoy abierto a oportunidades Frontend y Full Stack. Si crees que puedo aportar a tu equipo, conversemos.</p><div className="contact-actions"><a className="button button-primary" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=Oportunidad%20Frontend%20o%20Full%20Stack`} target="_blank" rel="noopener noreferrer">Escríbeme <MailIcon size={18}/></a><button className="button button-ghost" type="button" onClick={copyEmail}>{copied?'Correo copiado':'Copiar correo'} <span aria-hidden="true">⧉</span></button></div></div><span className="contact-watermark" aria-hidden="true">&lt;/&gt;</span></div></section>;
}
