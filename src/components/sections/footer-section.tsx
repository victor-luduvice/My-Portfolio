/** Rodapé do site com crédito e links das redes sociais. */
import { Github, Linkedin } from "lucide-react";
import { siteContent } from "@/data/content";

/** Rodapé com marca, copyright e atalhos para redes profissionais. */
export function FooterSection() {
  return <footer className="site-footer section-wrap"><a className="wordmark" href="#inicio" aria-label="Victor Luduvice, voltar ao início">victor<span>.dev</span></a><p>{siteContent.footer}</p>
    <div className="footer-socials"><a href={siteContent.contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn de Victor"><Linkedin size={17} /></a><a href={siteContent.contact.github} target="_blank" rel="noreferrer" aria-label="GitHub de Victor"><Github size={17} /></a></div>
  </footer>;
}
