import { useState } from "react";
import ProjectCard from "./ProjectCard/ProjectCard";

export default function Projects({ ArrowIcon, GithubIcon, haloclockUrl }) {
  const [expanded, setExpanded] = useState(null);
  return (
    <section
      id="proyectos"
      className="section projects-section container"
      aria-labelledby="projects-heading"
    >
      <div className="section-intro">
        <span className="section-kicker">
          <span>01</span> / PROYECTOS SELECCIONADOS
        </span>
        <div className="section-intro-row">
          <h2 id="projects-heading">
            Del código al <em>producto.</em>
          </h2>
        </div>
      </div>
      <div className="project-list">
        <ProjectCard
          ArrowIcon={ArrowIcon}
          GithubIcon={GithubIcon}
          haloclockUrl={haloclockUrl}
          index={1}
          variant="monaster"
          expanded={expanded === "monaster"}
          onToggle={() =>
            setExpanded(expanded === "monaster" ? null : "monaster")
          }
        />
        <ProjectCard
          ArrowIcon={ArrowIcon}
          GithubIcon={GithubIcon}
          haloclockUrl={haloclockUrl}
          index={2}
          variant="haloclock"
          expanded={expanded === "haloclock"}
          onToggle={() =>
            setExpanded(expanded === "haloclock" ? null : "haloclock")
          }
        />
      </div>
    </section>
  );
}
