import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dracus Research",
  description: "Laboratório independente de geometria, acústica, linguagem e engenharia cognitiva.",
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
