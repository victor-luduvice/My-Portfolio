/** Configuração global do documento, fontes, metadados de compartilhamento e tema. */
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { siteContent } from "@/data/content";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space", display: "swap" });
const jetBrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

/** Informações usadas por buscadores e prévias de links em redes sociais. */
export const metadata: Metadata = {
  metadataBase: new URL(siteContent.siteUrl),
  title: `${siteContent.name} | ${siteContent.role}`,
  description: siteContent.description,
  applicationName: "Victor Luduvice | Portfólio",
  openGraph: { type: "website", locale: "pt_BR", url: "/", siteName: siteContent.name, title: `${siteContent.name} | ${siteContent.role}`, description: siteContent.description },
  twitter: { card: "summary", title: `${siteContent.name} | ${siteContent.role}`, description: siteContent.description },
  icons: { icon: "/favicon.svg" },
};

/** Cor da barra do navegador, sincronizada com os temas disponíveis. */
export const viewport: Viewport = { themeColor: [{ media: "(prefers-color-scheme: dark)", color: "#05070D" }, { media: "(prefers-color-scheme: light)", color: "#F8FAFC" }] };

/** Envolve todas as páginas com fontes e provedor global de tema. */
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="pt-BR" suppressHydrationWarning><body className={`${spaceGrotesk.variable} ${jetBrainsMono.variable}`}><ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>{children}</ThemeProvider></body></html>;
}
