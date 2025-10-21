"use client";

import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import ConsentPopup from "./popup/consent-popup";

export function ClientComponent({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <ConsentPopup />
    </ThemeProvider>
  );
}
