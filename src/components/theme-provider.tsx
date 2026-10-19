"use client";

/** Adaptador que disponibiliza o tema escolhido para toda a árvore React. */
import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ComponentProps } from "react";

/** Repassa opções do next-themes sem criar uma API própria para o provedor. */
export function ThemeProvider(props: ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props} />;
}
