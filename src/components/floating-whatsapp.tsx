/** Atalho fixo para iniciar uma conversa pelo WhatsApp em qualquer seção. */
import { MessageCircle } from "lucide-react";
import { siteContent } from "@/data/content";

/** Usa o endereço e a mensagem de contato definidos no conteúdo do site. */
export function FloatingWhatsApp() {
  return <a className="whatsapp-float" href={siteContent.contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com Victor pelo WhatsApp" title="Conversar pelo WhatsApp"><MessageCircle size={23} aria-hidden="true" /></a>;
}
