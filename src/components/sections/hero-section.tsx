import { ArrowDown, ArrowUpRight, MoveUpRight } from "lucide-react";
import { AnimatedNumber, Reveal } from "@/components/reveal";
import { siteContent, technologyCount, yearsOfExperience } from "@/data/content";

export function HeroSection() {
  return <section className="hero section-wrap" id="inicio" aria-labelledby="hero-title"><div className="hero-layout"><div className="hero-copy"><Reveal>
    <p className="eyebrow"><span />{siteContent.hero.eyebrow}</p><p className="hero-kicker">PORTFÓLIO / 2026</p>
    <h1 id="hero-title"><span>{siteContent.firstName}</span><span>{siteContent.lastName}</span></h1>
    <p className="hero-subtitle">{siteContent.hero.subtitle}</p><p className="hero-description">{siteContent.hero.description}</p>
    <div className="hero-actions"><a className="button button-primary" href="#projetos">{siteContent.hero.primaryAction}<ArrowUpRight size={17} /></a><a className="button button-outline" href="#contato">{siteContent.hero.secondaryAction}<MoveUpRight size={16} /></a></div>
  </Reveal></div><Reveal className="hero-side" delay={0.12}><div className="orbit-mark" aria-hidden="true"><span>VL</span><i /><b /></div><p className="hero-side-note">TECNOLOGIA COM<br />INTENÇÃO E CLAREZA</p>
    <div className="hero-stats"><div className="stat-block"><span className="stat-number"><AnimatedNumber value={yearsOfExperience()} suffix="+" /></span><span className="stat-label">ANOS DE EXPERIÊNCIA</span></div><div className="stat-block"><span className="stat-number"><AnimatedNumber value={technologyCount} /></span><span className="stat-label">TECNOLOGIAS NA STACK</span></div></div>
  </Reveal></div><a className="scroll-cue" href="#sobre"><span>ROLE PARA EXPLORAR</span><ArrowDown size={15} /></a></section>;
}
