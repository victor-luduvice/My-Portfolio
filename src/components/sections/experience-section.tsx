import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/data/content";

export function ExperienceSection() {
  return <section className="section-wrap section-block" id="experiencia" aria-labelledby="experience-title">
    <Reveal><p className="eyebrow"><span />{siteContent.experience.eyebrow}</p><h2 className="section-title" id="experience-title">{siteContent.experience.title}</h2></Reveal>
    <div className="experience-list">{siteContent.experience.items.map((item, index) => <Reveal key={`${item.company}-${item.period}`} delay={Math.min(index * 0.04, 0.16)}><article className="experience-item">
      <div className="experience-period">{item.period}</div><div className="experience-detail"><div className="experience-heading"><div><h3>{item.role}</h3><p>{item.company}</p></div><ArrowUpRight size={17} aria-hidden="true" /></div>
        <p className="experience-summary">{item.description}</p><ul className="experience-highlights">{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
        {item.skills.length > 0 && <ul className="skill-chips" aria-label="Competências">{item.skills.map((skill) => <li key={skill}>{skill}</li>)}</ul>}
      </div></article></Reveal>)}</div>
    <Reveal className="education-block"><div className="subsection-heading"><span>{siteContent.experience.educationTitle}</span><span className="heading-rule" /></div><div className="education-list">
      {siteContent.experience.education.map((education) => <article className="education-item" key={education.title}><div><h3>{education.title}</h3><p>{education.institution}</p></div>{education.period && <span className="education-period">{education.period}</span>}</article>)}
    </div></Reveal>
  </section>;
}
