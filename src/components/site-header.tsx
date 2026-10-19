"use client";

import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { siteContent } from "@/data/content";
import { ThemeToggle } from "@/components/theme-toggle";

/** `active` marca a seção atual; `menuOpen` controla o menu em telas pequenas. */
export function SiteHeader() {
  const [active, setActive] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  // Observa as seções para atualizar o link ativo durante a rolagem.
  useEffect(() => {
    const sections = siteContent.navigation.map(({ href }) => document.querySelector(href)).filter((section): section is Element => section !== null);
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: "-25% 0px -60% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);
  return <header className="site-header"><div className="header-inner">
    <a className="wordmark" href="#inicio" aria-label="Victor Luduvice, início">victor<span>.dev</span></a>
    <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Navegação principal">
      {siteContent.navigation.map((item) => { const id = item.href.slice(1); return <a key={item.href} href={item.href} className={active === id ? "active" : ""} aria-current={active === id ? "location" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</a>; })}
    </nav>
    <div className="header-actions"><ThemeToggle /><button className="icon-button menu-toggle" type="button" aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button></div>
  </div></header>;
}
