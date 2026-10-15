import { ArrowUpRight, Github } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/data/content";

export function ProjectsSection() {
  return <section className="section-wrap section-block" id="projetos" aria-labelledby="projects-title"><Reveal>
    <p className="eyebrow"><span />{siteContent.projects.eyebrow}</p><div className="projects-heading"><div><h2 className="section-title" id="projects-title">{siteContent.projects.title}</h2><p>{siteContent.projects.intro}</p></div><span className="project-count">0{siteContent.projects.items.length} / CASES</span></div>
  </Reveal><div className="project-grid">{siteContent.projects.items.map((project, index) => <Reveal key={project.title} delay={index * 0.08}><article className="project-card">
    <div className="project-card-top"><span className="project-number">0{index + 1}</span><span className={`project-status${project.status === "Em desenvolvimento" ? " status-active" : ""}`}>{project.status}</span></div>
    <div className="project-mark" aria-hidden="true"><span>{project.title.slice(0, 1)}</span><i /></div><div className="project-card-content"><h3>{project.title}</h3><p>{project.description}</p></div>
    <ul className="project-tech">{project.technologies.map((technology) => <li key={technology}>{technology}</li>)}</ul>
    <div className="project-actions"><a href={project.codeUrl} target={project.codeUrl === "#" ? undefined : "_blank"} rel="noreferrer" aria-label={`Código de ${project.title}`}><Github size={16} />Código</a><a href={project.demoUrl} target={project.demoUrl === "#" ? undefined : "_blank"} rel="noreferrer" aria-label={`Demo de ${project.title}`}>Demo<ArrowUpRight size={15} /></a></div>
  </article></Reveal>)}</div></section>;
}
