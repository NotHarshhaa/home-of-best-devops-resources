import "@/styles/globals.css";
import type { Metadata } from "next";
import { Inter as FontSans, Poppins, Outfit } from "next/font/google";

import { cn } from "@/lib/utils";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { ClientComponent } from "@/components/client-component";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
  display: "swap",
});

const fontBody = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Home of Best DevOps Resources",
  description:
    "A curated collection of the best DevOps resources, tools, and guides for modern software development.",
  keywords:
    "DevOps, CI/CD, containers, kubernetes, automation, cloud, infrastructure",
  authors: [{ name: "DevOps Community" }],
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
          fontHeading.variable,
          fontBody.variable,
        )}
      >
        <ClientComponent>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1 scroll-smooth">{children}</main>
            <Footer />
          </div>
        </ClientComponent>
      </body>
    </html>
  );
}
