"use client";

/** Apresenta e-mail, redes sociais e chamada de conversa pelo WhatsApp. */
import { Check, Copy, ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/reveal";
import { siteContent } from "@/data/content";

/** `copied` controla a confirmação visual após copiar o endereço de e-mail. */
export function ContactSection() {
  const [copied, setCopied] = useState(false);
  /** Copia para a área de transferência; se não houver permissão, abre o e-mail. */
  async function copyEmail() {
    try { await navigator.clipboard.writeText(siteContent.contact.email); setCopied(true); window.setTimeout(() => setCopied(false), 1800); }
    catch { window.location.href = `mailto:${siteContent.contact.email}`; }
  }
  return <section className="section-wrap section-block contact-section" id="contato" aria-labelledby="contact-title">
    <Reveal><p className="eyebrow"><span />{siteContent.contact.eyebrow}</p><h2 className="section-title" id="contact-title">{siteContent.contact.title}</h2></Reveal>
    <div className="contact-layout"><Reveal className="contact-copy"><h3>{siteContent.contact.headline}</h3><p>{siteContent.contact.description}</p>
      <div className="contact-links"><div className="email-line"><a href={`mailto:${siteContent.contact.email}`}><Mail size={17} />{siteContent.contact.email}</a><button className="icon-button copy-button" type="button" onClick={copyEmail} aria-label="Copiar e-mail" title={copied ? "E-mail copiado" : "Copiar e-mail"}>{copied ? <Check size={16} /> : <Copy size={16} />}</button></div>
        <a href={siteContent.contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={17} />LinkedIn<ExternalLink size={13} /></a><a href={siteContent.contact.github} target="_blank" rel="noreferrer"><Github size={17} />GitHub<ExternalLink size={13} /></a></div>
    </Reveal><Reveal delay={0.12}><div className="whatsapp-card"><span className="live-indicator"><i /> DISPONÍVEL PARA CONVERSAR</span><h3>{siteContent.contact.whatsappTitle}</h3><p>Uma conversa direta pode ser o primeiro passo para uma boa parceria.</p><a className="button button-primary" href={siteContent.contact.whatsapp} target="_blank" rel="noreferrer">FALE NO WHATSAPP<ExternalLink size={15} /></a></div></Reveal></div>
  </section>;
}
