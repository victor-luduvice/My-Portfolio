import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { SiteHeader } from "@/components/site-header";
import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { ExperienceSection } from "@/components/sections/experience-section";
import { FooterSection } from "@/components/sections/footer-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";

export default function Home() {
  return <><a className="skip-link" href="#conteudo">Pular para o conteúdo</a><SiteHeader /><main id="conteudo"><HeroSection /><AboutSection /><ExperienceSection /><ProjectsSection /><ContactSection /></main><FooterSection /><FloatingWhatsApp /></>;
}
