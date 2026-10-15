import { MessageCircle } from "lucide-react";
import { siteContent } from "@/data/content";

export function FloatingWhatsApp() {
  return <a className="whatsapp-float" href={siteContent.contact.whatsapp} target="_blank" rel="noreferrer" aria-label="Conversar com Victor pelo WhatsApp" title="Conversar pelo WhatsApp"><MessageCircle size={23} aria-hidden="true" /></a>;
}
