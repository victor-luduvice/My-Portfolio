"use client";

import Image from "next/image";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { StackGrid } from "@/components/stack-grid";
import { siteContent } from "@/data/content";

export function AboutSection() {
  const [photoUnavailable, setPhotoUnavailable] = useState(false);
  return <section className="section-wrap section-block" id="sobre" aria-labelledby="about-title">
    <Reveal><p className="eyebrow"><span />{siteContent.about.eyebrow}</p></Reveal>
    <div className="about-layout"><Reveal className="portrait-column"><div className="portrait-frame"><div className="portrait-image">
      {!photoUnavailable ? <Image src="/foto.jpg" alt="Retrato de Victor Luduvice" fill sizes="(max-width: 760px) 88vw, 380px" className="portrait-photo" onError={() => setPhotoUnavailable(true)} /> : <span className="portrait-initials" aria-label="Iniciais de Victor Luduvice">VL</span>}
      <span className="portrait-wash" /></div><span className="portrait-index">V. LUDUVICE <i>•</i> 2026</span></div><div className="portrait-caption"><span>ARACAJU, BRASIL</span><span>DISPONÍVEL PARA PROJETOS</span></div></Reveal>
      <div className="about-copy"><Reveal><h2 id="about-title">{siteContent.about.title}</h2><h3>{siteContent.about.headline}</h3></Reveal>{siteContent.about.paragraphs.map((paragraph, index) => <Reveal key={paragraph} delay={index * 0.06}><p className="body-copy">{paragraph}</p></Reveal>)}</div>
    </div><Reveal className="stack-area" delay={0.08}><div className="subsection-heading"><span>FERRAMENTAS DO DIA A DIA</span><span className="heading-rule" /></div><StackGrid /></Reveal>
  </section>;
}
