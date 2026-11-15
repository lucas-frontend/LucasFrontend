import Projects from "./features/projects/Projects";
import Hero from "./components/sections/Hero/Hero";
import NavBar from "./components/layout/NavBar/NavBar";
import Footer from "./components/layout/Footer/Footer";
import Contact from "./components/sections/Contact/Contact";
import About from "./components/sections/About/About";
import TechStack from "./components/sections/TechStack/TechStack";
import "./styles/portal-theme.css";



const EMAIL = "indiozizok@gmail.com"; // Revisar antes de publicar: correo tomado del CV anterior.
const GITHUB = "https://github.com/lucas-frontend";
const HALOCLOCK = "https://github.com/lucas-frontend/haloclock";

function ArrowIcon({ diagonal = false, size = 18 }) {
  return diagonal
    ? <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19 19 5M7 5h12v12" /></svg>
    : <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
}
function GithubIcon({ size = 19 }) {
  return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 .8A11.2 11.2 0 0 0 8.46 22.63c.56.1.77-.25.77-.54v-2.07c-3.13.69-3.79-1.32-3.79-1.32-.5-1.29-1.23-1.63-1.23-1.63-1.03-.7.08-.69.08-.69 1.14.08 1.74 1.16 1.74 1.16 1.02 1.75 2.68 1.25 3.33.96.1-.74.4-1.25.72-1.54-2.5-.29-5.13-1.25-5.13-5.58 0-1.23.44-2.24 1.16-3.03-.12-.29-.5-1.44.11-2.99 0 0 .95-.31 3.09 1.16a10.7 10.7 0 0 1 5.62 0c2.15-1.47 3.1-1.16 3.1-1.16.6 1.55.22 2.7.1 2.99.72.79 1.15 1.8 1.15 3.03 0 4.34-2.63 5.29-5.14 5.57.4.35.77 1.03.77 2.09v3.09c0 .3.2.64.78.54A11.2 11.2 0 0 0 12 .8Z" /></svg>;
}
function MailIcon({ size = 19 }) {return <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></svg>}
function BriefcaseIcon() {return <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/></svg>}

export default function App(){return <><a href="#contenido" className="skip-link">Saltar al contenido</a><div className="background-glow" aria-hidden="true"/><NavBar/><main id="contenido"><Hero ArrowIcon={ArrowIcon} BriefcaseIcon={BriefcaseIcon}/><Projects ArrowIcon={ArrowIcon} GithubIcon={GithubIcon} haloclockUrl={HALOCLOCK}/><TechStack/><About/><Contact email={EMAIL} MailIcon={MailIcon}/></main><Footer email={EMAIL} github={GITHUB} GithubIcon={GithubIcon} MailIcon={MailIcon}/></>}

